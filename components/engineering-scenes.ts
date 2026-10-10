import type * as Three from 'three';
import type {RoundedBoxGeometry as RoundedGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

/** Original engineering illustrations. Geometry is illustrative, not a released PCB design. */
export function buildEngineeringScenes(T:typeof Three,RoundedBoxGeometry:typeof RoundedGeometry,groups:Three.Group[],materials:Three.Material[],textures:Three.Texture[]){
 const make=(color:number,metalness=.5,roughness=.4,emissive=0)=>{const m=new T.MeshStandardMaterial({color,metalness,roughness,emissive,emissiveIntensity:1.2,transparent:true});materials.push(m);return m;};
 function palette(){return {mask:make(0x073e36,.2,.52),black:make(0x10151b,.3,.36),metal:make(0x9caab1,.92,.24),gold:make(0xc69a4d,.8,.29),ceramic:make(0x7c6650,.35,.55),light:make(0x56d9e7,.3,.3,0x126477),violet:make(0x605baf,.5,.26,0x18103a)};}
 type Palette=ReturnType<typeof palette>;
 function box(g:Three.Group,w:number,h:number,d:number,x:number,y:number,z:number,m:Three.Material,r=.025){const mesh=new T.Mesh(new RoundedBoxGeometry(w,h,d,2,Math.min(r,w/4,h/4,d/4)),m);mesh.position.set(x,y,z);g.add(mesh);return mesh;}
 function cylinder(g:Three.Group,r:number,h:number,x:number,y:number,z:number,m:Three.Material){const mesh=new T.Mesh(new T.CylinderGeometry(r,r,h,20),m);mesh.position.set(x,y,z);g.add(mesh);return mesh;}
 function path(g:Three.Group,points:number[][],m:Three.Material,r=.014){const curve=new T.CatmullRomCurve3(points.map(v=>new T.Vector3(...v)));const mesh=new T.Mesh(new T.TubeGeometry(curve,24,r,5,false),m);g.add(mesh);return curve;}
 function label(g:Three.Group,text:string,x:number,y:number,z:number,width=1){const c=document.createElement('canvas');c.width=512;c.height=96;const ctx=c.getContext('2d')!;ctx.fillStyle='#081721ed';ctx.fillRect(0,0,512,96);ctx.strokeStyle='#4d7489';ctx.lineWidth=2;ctx.strokeRect(1,1,510,94);ctx.fillStyle='#d8f4f8';ctx.font='32px sans-serif';ctx.textAlign='center';ctx.fillText(text,256,59);const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;textures.push(texture);const mat=new T.SpriteMaterial({map:texture,transparent:true,depthWrite:false});materials.push(mat);const s=new T.Sprite(mat);s.position.set(x,y,z);s.scale.set(width,width*96/512,1);g.add(s);return s;}
 function surface(g:Three.Group,w:number,d:number,y:number,p:Palette){const c=document.createElement('canvas');c.width=1200;c.height=900;const ctx=c.getContext('2d')!;ctx.fillStyle='#06372f';ctx.fillRect(0,0,1200,900);
 // Routed tracks use right-angle/45-degree bends and fan out around the central package.
 ctx.lineWidth=2;for(let i=0;i<76;i++){const left=i%2===0,k=Math.floor(i/2),x=left?40:1160,y=40+k*21,tx=left?470-k%7*11:730+k%7*11;ctx.strokeStyle=i%4===0?'#a08344':'#226d59';ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(tx-80*(left?1:-1),y);ctx.lineTo(tx,y+(left?1:-1)*75);ctx.lineTo(tx,450+(k-19)*9);ctx.stroke();}
 for(let i=0;i<180;i++){const x=50+(i*97)%1100,y=50+(i*67)%800;ctx.strokeStyle='#c9aa69';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,4,0,7);ctx.stroke();ctx.fillStyle='#05251f';ctx.fill();}
 ctx.strokeStyle='#a9c7b7';ctx.lineWidth=2;for(let i=0;i<14;i++){const x=70+(i%7)*159,y=i<7?95:725;ctx.strokeRect(x,y,90,55);ctx.font='13px monospace';ctx.fillStyle='#c2d3c5';ctx.fillText((i<7?'R':'C')+(i+21),x,y-8);}
 ctx.fillStyle='#e0ece0';ctx.font='bold 35px sans-serif';ctx.fillText('TATVIX',70,830);ctx.font='16px monospace';ctx.fillText('EDGE COMPUTE / CONCEPT REV 01',260,830);ctx.fillText('GPIO',930,85);ctx.fillText('POWER',65,660);ctx.fillText('RF',985,650);
 const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=4;textures.push(texture);const m=new T.MeshStandardMaterial({map:texture,roughness:.62,metalness:.18,transparent:true});materials.push(m);const plane=new T.Mesh(new T.PlaneGeometry(w,d),m);plane.rotation.x=-Math.PI/2;plane.position.y=y;g.add(plane);return plane;}
 function pcb(g:Three.Group,p:Palette,detailed=true){box(g,3.8,.075,2.85,0,0,0,p.mask);surface(g,3.78,2.83,.039,p);
 for(const x of [-1.7,1.7])for(const z of [-1.22,1.22]){cylinder(g,.09,.012,x,.05,z,p.gold);cylinder(g,.054,.017,x,.057,z,p.black);}
 box(g,1.02,.15,1.02,-.12,.12,-.1,p.black);box(g,.78,.035,.78,-.12,.218,-.1,p.metal);box(g,.55,.013,.55,-.12,.241,-.1,p.violet);
 for(let i=0;i<2;i++){const x=.78+i*.39;box(g,.28,.13,.72,x,.13,-.35,p.black);for(let n=0;n<10;n++)for(const side of [-1,1])box(g,.044,.025,.028,x+side*.16,.075,-.66+n*.064,p.metal,.002);}
 for(let n=0;n<12;n++)for(const side of [-1,1]){box(g,.022,.018,.1,-.56+n*.08,.055,-.1+side*.58,p.gold,.002);box(g,.1,.018,.022,-.12+side*.58,.055,-.55+n*.08,p.gold,.002);}
 // Exposed connectors: shielded network port, twin USB shells, barrel power socket, GPIO header.
 box(g,.61,.44,.56,-1.15,.26,1.18,p.metal);box(g,.47,.28,.025,-1.15,.26,1.477,p.black);for(let i=0;i<8;i++)box(g,.025,.08,.025,-1.32+i*.05,.15,1.494,p.gold,.002);
 for(let i=0;i<2;i++){box(g,.48,.19,.48,-.38+i*.58,.15,1.27,p.metal);box(g,.38,.10,.022,-.38+i*.58,.15,1.525,p.black);box(g,.23,.03,.02,-.38+i*.58,.13,1.541,p.gold);}
 const jack=cylinder(g,.15,.36,1.36,.20,1.27,p.black);jack.rotation.x=Math.PI/2;const bore=cylinder(g,.10,.018,1.36,.20,1.461,p.metal);bore.rotation.x=Math.PI/2;
 box(g,1.65,.16,.22,.28,.14,-1.22,p.black);for(let i=0;i<16;i++)for(const row of [-1,1])box(g,.025,.22,.025,-.45+i*.096,.25,-1.22+row*.054,p.gold,.002);
 for(let i=0;i<5;i++){cylinder(g,.09,.24,-1.46+i*.22,.18,.46,p.black);cylinder(g,.083,.008,-1.46+i*.22,.303,.46,p.metal);}
 box(g,.56,.09,.53,1.27,.10,.66,p.metal);for(let i=0;i<5;i++)box(g,.055,.11,.44,1.06+i*.1,.2,.66,p.black,.006);
 if(detailed){const resistorGeo=new T.BoxGeometry(.105,.045,.053),inst=new T.InstancedMesh(resistorGeo,p.ceramic,100),dummy=new T.Object3D();let n=0;for(let i=0;i<130&&n<100;i++){const x=-1.5+(i%13)*.25,z=-.98+Math.floor(i/13)*.20;if(Math.abs(x)<.7&&Math.abs(z)<.65||x>.5&&z<.2||z>.45)continue;dummy.position.set(x,.075,z);dummy.rotation.y=i%3===0?Math.PI/2:0;dummy.updateMatrix();inst.setMatrixAt(n++,dummy.matrix);}inst.count=n;g.add(inst);}
 return g;}
 const hardware=groups[1],hp=palette();pcb(hardware,hp);const antenna=new T.Group();hardware.add(antenna);antenna.position.set(-1.28,.18,-.42);box(antenna,.55,.09,.8,0,0,0,hp.mask);box(antenna,.38,.035,.37,0,.06,.05,hp.metal);for(let i=0;i<5;i++)box(antenna,.035,.015,.2,-.18+i*.085,.061,-.25,hp.gold,.003);
 // Exposed silicon: compute chiplets, memory banks, interconnect fabric and carrier contacts.
 const firmware=groups[2],fp=palette();box(firmware,2.6,.12,2.6,0,-.12,0,fp.mask);box(firmware,2.26,.09,2.26,0,-.015,0,fp.black);box(firmware,1.91,.045,1.91,0,.055,0,fp.metal);box(firmware,1.73,.023,1.73,0,.09,0,fp.black);
 const cores:Three.Mesh[]=[];for(let x=0;x<2;x++)for(let z=0;z<2;z++){const cx=(x-.5)*.78,cz=(z-.5)*.78;cores.push(box(firmware,.65,.075,.65,cx,.15,cz,fp.violet));for(let i=0;i<11;i++)box(firmware,.008,.003,.56,cx-.27+i*.054,.191,cz,fp.light,.001);}
 for(let i=0;i<4;i++){const z=-.87+i*.58;box(firmware,.24,.12,.39,1.05,.075,z,fp.black);box(firmware,.24,.12,.39,-1.05,.075,z,fp.black);for(let k=0;k<5;k++){box(firmware,.16,.004,.006,1.05,.14,z-.15+k*.07,fp.gold,.001);box(firmware,.16,.004,.006,-1.05,.14,z-.15+k*.07,fp.gold,.001);}}
 const contactGeo=new T.SphereGeometry(.032,6,6),contacts=new T.InstancedMesh(contactGeo,fp.gold,225),dummy=new T.Object3D();for(let i=0;i<225;i++){dummy.position.set(-1.15+(i%15)*.165,-.23,-1.15+Math.floor(i/15)*.165);dummy.updateMatrix();contacts.setMatrixAt(i,dummy.matrix);}firmware.add(contacts);
 const firmwareRoutes:Three.CatmullRomCurve3[]=[],firmwarePackets:Three.Mesh[]=[];
 for(let i=0;i<16;i++){const a=i/16*Math.PI*2,x=Math.cos(a),z=Math.sin(a);const curve=path(firmware,[[x*1.25,-.1,z*1.25],[x*1.9,-.1,z*1.9],[x*2.25,.15,z*2.25],[x*2.8,.15,z*2.8]],fp.light,.009);firmwareRoutes.push(curve);const packet=new T.Mesh(new T.SphereGeometry(.035,8,6),fp.light);firmware.add(packet);firmwarePackets.push(packet);}
 label(firmware,'Compute fabric',0,.52,-.85,1.15);label(firmware,'Memory',1.45,.42,.4,.7);
 // BLE-style peer mesh: relays connect to one another; a gateway provides the separate cloud uplink.
 const network=groups[3],np=palette(),meshNodes:Three.Group[]=[],meshPoints=[[-2.6,0,-.85],[-1.1,0,-1.3],[.6,0,-1.15],[2.4,0,-.7],[-2.1,0,1.05],[-.45,0,.85],[1.6,0,1.05]];
 meshPoints.forEach(([x,y,z],i)=>{const node=new T.Group();network.add(node);meshNodes.push(node);node.position.set(x,y,z);cylinder(node,.38,.08,0,-.08,0,np.black);const ring=new T.Mesh(new T.TorusGeometry(.32,.018,6,32),np.light);ring.rotation.x=Math.PI/2;ring.position.y=-.029;node.add(ring);
 if(i===3){box(node,.57,.39,.38,0,.20,0,np.metal);box(node,.44,.23,.02,0,.2,.21,np.black);for(const px of [-.2,.2])cylinder(node,.025,.61,px,.62,-.06,np.black);for(let k=0;k<3;k++)box(node,.032,.025,.018,-.12+k*.1,.16,.23,np.light,.002);}
 else if(i%3===0){cylinder(node,.09,.58,0,.24,0,np.metal);const lamp=new T.Mesh(new T.SphereGeometry(.19,16,10),np.light);lamp.scale.y=.5;lamp.position.y=.58;node.add(lamp);}
 else{box(node,.33,.37,.20,0,.20,0,np.metal);box(node,.24,.16,.018,0,.27,.115,np.black);cylinder(node,.045,.014,0,.09,.117,np.light).rotation.x=Math.PI/2;}
 label(node,i===3?'Gateway':i%3===0?'Lighting':i%2?'Relay':'Sensor',0,-.31,.18,.82);});
 const meshRoutes:Three.CatmullRomCurve3[]=[],meshPackets:Three.Mesh[]=[];
 const edges=[[0,1],[0,4],[1,2],[1,5],[2,3],[2,5],[2,6],[3,6],[4,5],[5,6]];
 edges.forEach(([a,b],i)=>{const v=new T.Vector3(...meshPoints[a]),w=new T.Vector3(...meshPoints[b]);v.y=w.y=.1;const mid=v.clone().lerp(w,.5);mid.y=.26;const curve=path(network,[v.toArray(),mid.toArray(),w.toArray()],np.light,.012);meshRoutes.push(curve);const packet=new T.Mesh(new T.SphereGeometry(.045,8,6),i%3===0?np.gold:np.light);network.add(packet);meshPackets.push(packet);});
 const cloud=new T.Group();network.add(cloud);cloud.position.set(3.1,.6,-1.4);for(let i=0;i<3;i++){box(cloud,1,.20,.48,0,i*.24,0,np.black);box(cloud,.91,.13,.022,0,i*.24,.255,np.metal);for(let j=0;j<3;j++)box(cloud,.035,.025,.025,-.31+j*.08,i*.24,.272,np.light,.001);}label(cloud,'Cloud services',0,.82,0,1.45);
 const uplink=path(network,[[2.4,.55,-.7],[3.1,.5,-1],[3.1,.6,-1.4]],np.gold,.016);meshRoutes.push(uplink);const upPacket=new T.Mesh(new T.SphereGeometry(.06,8,6),np.gold);network.add(upPacket);meshPackets.push(upPacket);
 // Four tangible engineering stations: specification, PCB, assembled controller and test fixture.
 const process=groups[5],pp=palette(),stations:Three.Group[]=[];
 for(let i=0;i<4;i++){const station=new T.Group();process.add(station);stations.push(station);station.position.x=(i-1.5)*1.95;box(station,1.65,.15,1.35,0,-.23,0,pp.black);box(station,1.5,.018,1.2,0,-.143,0,pp.metal);box(station,1.38,.018,.018,0,-.12,.58,pp.light,.002);}
 const spec=stations[0];box(spec,1.24,.83,.06,0,.4,-.1,pp.black);box(spec,1.1,.69,.008,0,.4,-.062,pp.mask);for(let i=0;i<5;i++)box(spec,.8-i*.08,.012,.008,-.07,.63-i*.105,-.05,pp.light,.001);box(spec,.1,.24,.12,0,-.03,-.12,pp.metal);
 const design=new T.Group();pcb(design,pp,false);design.scale.setScalar(.34);design.position.y=-.02;stations[1].add(design);
 const integrated=stations[2];box(integrated,1.05,.42,.82,0,.1,0,pp.black);box(integrated,1.08,.055,.85,0,.34,0,pp.metal);for(let i=0;i<9;i++)box(integrated,.045,.008,.54,-.38+i*.095,.374,0,pp.black,.004);box(integrated,.28,.12,.018,-.18,.08,.43,pp.light);cylinder(integrated,.025,.7,.36,.46,-.23,pp.black);
 const testing=stations[3];box(testing,.95,.10,.77,0,-.045,0,pp.mask);for(const x of [-.61,.61])box(testing,.06,.94,.08,x,.30,0,pp.metal);const gantry=box(testing,1.3,.08,.13,0,.72,0,pp.metal);for(let i=0;i<5;i++)box(testing,.025,.23,.025,-.36+i*.18,.56,0,pp.gold,.003);const scan=box(testing,.93,.009,.04,0,.025,0,pp.light,.002);label(testing,'Verification',0,.99,-.1,1.0);
 const deliveryRoute=path(process,[[-3.8,-.14,.8],[0,-.14,.8],[3.8,-.14,.8]],pp.light,.014),deliveryPacket=new T.Mesh(new T.SphereGeometry(.055,8,6),pp.light);process.add(deliveryPacket);
 return {animate(time:number){firmwarePackets.forEach((p,i)=>p.position.copy(firmwareRoutes[i].getPoint((time*.22+i*.07)%1)));cores.forEach((c,i)=>c.scale.y=1+Math.sin(time*1.5+i)*.025);meshPackets.forEach((p,i)=>p.position.copy(meshRoutes[i].getPoint((time*.16+i*.11)%1)));scan.position.z=Math.sin(time*.9)*.30;gantry.position.y=.72+Math.sin(time*.9)*.025;deliveryPacket.position.copy(deliveryRoute.getPoint((time*.1)%1));}};
}
