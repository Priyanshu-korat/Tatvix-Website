"use client";
import {useEffect,useRef,useState} from "react";
import {Layers, RotateCcw} from "lucide-react";
export default function DeviceExperience(){
 const host=useRef<HTMLDivElement>(null);
 const controller=useRef<{explode:(value:boolean)=>void;rotate:(value:number)=>void;reset:()=>void}|null>(null);
 const [ready,setReady]=useState(false),[expanded,setExpanded]=useState(false),[angle,setAngle]=useState(0);
 useEffect(()=>{
  let disposed=false, cleanup=()=>{};
  const el=host.current!;
  const observer=new IntersectionObserver(async entries=>{
   if(!entries.some(e=>e.isIntersecting)) return;
   observer.disconnect();
   try {
    const [T,{gsap}]=await Promise.all([import("three"),import("gsap")]);
    if(disposed) return;
    const renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:"low-power"});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<768?1.25:1.75));
    renderer.outputColorSpace=T.SRGBColorSpace; renderer.setClearColor(0x000000,0);
    el.appendChild(renderer.domElement);renderer.domElement.setAttribute("aria-hidden","true");
    const scene=new T.Scene(),camera=new T.PerspectiveCamera(34,1,.1,100);
    camera.position.set(5.8,5.6,7);camera.lookAt(0,.2,0);
    scene.add(new T.HemisphereLight(0xe5fbff,0x264558,3));
    const key=new T.DirectionalLight(0xffffff,5);key.position.set(3,6,4);scene.add(key);
    const rim=new T.DirectionalLight(0x58d6e5,3);rim.position.set(-4,2,-2);scene.add(rim);
    const group=new T.Group();scene.add(group);group.rotation.y=-.25;
    const metal=new T.MeshStandardMaterial({color:0xacc0c9,metalness:.7,roughness:.28});
    const pcb=new T.MeshStandardMaterial({color:0x006f66,metalness:.25,roughness:.4});
    const chip=new T.MeshStandardMaterial({color:0x172d35,roughness:.45});
    const gold=new T.MeshStandardMaterial({color:0xe3b55e,metalness:.65,roughness:.3});
    const glass=new T.MeshStandardMaterial({color:0x396378,metalness:.35,roughness:.12,transparent:true,opacity:.7});
    const base=new T.Group(),board=new T.Group(),lid=new T.Group();group.add(base,board,lid);
    function box(parent:InstanceType<typeof T.Group>,w:number,h:number,d:number,x:number,y:number,z:number,mat:InstanceType<typeof T.MeshStandardMaterial>){const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
    box(base,3.3,.15,2.6,0,-.5,0,metal);
    for(const x of [-1.58,1.58]) box(base,.14,.45,2.6,x,-.22,0,metal);
    for(const z of [-1.23,1.23]) box(base,3.1,.45,.14,0,-.22,z,metal);
    box(board,2.95,.08,2.25,0,0,0,pcb);
    box(board,.82,.13,.82,-.1,.13,0,chip);
    box(board,.55,.12,.32,.9,.12,.5,chip);
    for(let i=0;i<10;i++){box(board,.035,.025,.14,-.43+i*.075,.07,.48,gold);box(board,.035,.025,.14,-.43+i*.075,.07,-.48,gold);}
    for(let i=0;i<6;i++) box(board,.18,.12,.1,-1+i*.32,.12,-.82,gold);
    for(const x of [-1.3,1.3])for(const z of [-.9,.9]){const screw=new T.Mesh(new T.CylinderGeometry(.07,.07,.16,12),metal);screw.position.set(x,.04,z);board.add(screw);}
    box(board,.3,.25,.65,-1.25,.16,.1,metal);
    box(lid,3.3,.16,2.6,0,.42,0,glass);
    box(lid,1.1,.018,.04,0,.51,0,gold);
    let visible=true;const reduce=window.matchMedia("(prefers-reduced-motion: reduce)");
    const render=()=>{if(visible&&!document.hidden&&!disposed)renderer.render(scene,camera);};
    const size=()=>{const {width,height}=el.getBoundingClientRect();if(!width||!height)return;renderer.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<768?1.25:1.75));renderer.setSize(width,height);camera.aspect=width/height;camera.position.set(5.8,5.6,7);if(camera.aspect<1)camera.position.multiplyScalar(1.2);camera.updateProjectionMatrix();render();};
    const resize=new ResizeObserver(size);resize.observe(el);
    const visibility=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;render();});visibility.observe(el);
    const onVisibility=()=>render();document.addEventListener("visibilitychange",onVisibility);
    const animate=(target:object,values:object)=>gsap.to(target,{...values,duration:reduce.matches?0:.85,ease:"power2.inOut",overwrite:true,onUpdate:render,onComplete:render});
    controller.current={explode:value=>{animate(lid.position,{y:value?1.25:0});animate(board.position,{y:value?.45:0});},rotate:value=>{animate(group.rotation,{y:value*Math.PI/180-.25});},reset:()=>{animate(group.rotation,{x:0,y:-.25});animate(lid.position,{y:0});animate(board.position,{y:0});}};
    const pointer=(event:PointerEvent)=>{if(event.pointerType!=="mouse"||reduce.matches)return;const bounds=el.getBoundingClientRect();animate(group.rotation,{x:((event.clientY-bounds.top)/bounds.height-.5)*.18});};
    const leave=()=>animate(group.rotation,{x:0});el.addEventListener("pointermove",pointer);el.addEventListener("pointerleave",leave);
    const lost=(event:Event)=>{event.preventDefault();renderer.domElement.style.display="none";setReady(false);controller.current=null;};renderer.domElement.addEventListener("webglcontextlost",lost);
    size();setReady(true);
    cleanup=()=>{controller.current=null;resize.disconnect();visibility.disconnect();document.removeEventListener("visibilitychange",onVisibility);el.removeEventListener("pointermove",pointer);el.removeEventListener("pointerleave",leave);gsap.killTweensOf([group.rotation,lid.position,board.position]);scene.traverse(obj=>{if(obj instanceof T.Mesh)obj.geometry.dispose();});[metal,pcb,chip,gold,glass].forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();};
   }catch{setReady(false);}
  },{rootMargin:"100px"});observer.observe(el);
  return()=>{disposed=true;observer.disconnect();cleanup();};
 },[]);
 return <figure className="device"><div className="device-stage"><img className={ready?"fallback hidden":"fallback"} src="/images/device-concept.webp" alt="Illustrative connected device with a circuit board and metal enclosure" width="1536" height="1024"/><div ref={host} className="canvas-host"/><div className="device-caption">Connected device concept<span>Explore the engineering inside</span></div></div><div className="device-controls"><button disabled={!ready} aria-pressed={expanded} onClick={()=>{setExpanded(!expanded);controller.current?.explode(!expanded);}}><Layers size={16} aria-hidden="true"/>{expanded?"Assemble device":"Reveal layers"}</button><label>Rotate<input type="range" min="-180" max="180" value={angle} disabled={!ready} onChange={e=>{const value=Number(e.target.value);setAngle(value);controller.current?.rotate(value);}} aria-label="Rotate device"/></label><button className="reset" disabled={!ready} aria-label="Reset device view" onClick={()=>{setExpanded(false);setAngle(0);controller.current?.reset();}}><RotateCcw size={17} aria-hidden="true"/></button></div><figcaption>Illustrative concept · {ready?"Interactive 3D":"Static view"}</figcaption></figure>;
}
