import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {buildEngineeringScenes} from '../components/engineering-scenes.ts';

test('engineering geometry and animated transforms remain finite; processor stays inside its carrier',()=>{
 const previous=globalThis.document;
 // Canvas painting is stubbed: this checks geometry, not rendered visual quality.
 const context=new Proxy({}, {get:(target,key)=>target[key]??(()=>{}),set:(target,key,value)=>{target[key]=value;return true;}});
 globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>context})};
 const groups=Array.from({length:6},()=>new THREE.Group()),materials=[],textures=[];
 try{
  const scenes=buildEngineeringScenes(THREE,RoundedBoxGeometry,groups,materials,textures);
  for(const time of [0,.01,.5,1,7,20,60,300]){
   scenes.animate(time);
   for(const group of groups)group.traverse(object=>{
    assert.ok([...object.position,...object.scale,...object.quaternion].every(Number.isFinite),'Finite object transform');
    if(object.geometry)for(const attribute of Object.values(object.geometry.attributes))assert.ok(attribute.array.every(Number.isFinite),'Finite geometry attributes');
   });
   groups[2].updateMatrixWorld(true);
   const bounds=new THREE.Box3();
   groups[2].traverse(object=>{if(object.isMesh){object.geometry.computeBoundingBox();bounds.union(object.geometry.boundingBox.clone().applyMatrix4(object.matrixWorld));}});
   assert.ok(bounds.min.x>=-1.75&&bounds.max.x<=1.75,'No loose wires outside the processor carrier');
   assert.ok(bounds.min.z>=-1.56&&bounds.max.z<=1.56,'Processor routes remain within the carrier depth');
  }
 }finally{
  globalThis.document=previous;
  for(const group of groups)group.traverse(object=>object.geometry?.dispose());
  materials.forEach(material=>material.dispose());textures.forEach(texture=>texture.dispose());
 }
});
