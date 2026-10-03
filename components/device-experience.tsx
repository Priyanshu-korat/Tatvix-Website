"use client";
import {useEffect,useRef,useState} from "react";
import {Pause,Play} from "lucide-react";
export default function DeviceExperience(){
 const host=useRef<HTMLDivElement>(null),controls=useRef<{pause:(value:boolean)=>void}|null>(null);
 const [ready,setReady]=useState(false),[paused,setPaused]=useState(false);
 useEffect(()=>{
  let dead=false,dispose=()=>{};
  const el=host.current!;
  async function init(){
   const [T,{RoundedBoxGeometry},{RoomEnvironment},{gsap},{ScrollTrigger}]=await Promise.all([import('three'),import('three/addons/geometries/RoundedBoxGeometry.js'),import('three/addons/environments/RoomEnvironment.js'),import('gsap'),import('gsap/ScrollTrigger')]);
   if(dead)return;
   gsap.registerPlugin(ScrollTrigger);
   const renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});
   renderer.setClearColor(0,0);renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.35;
   el.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-hidden','true');
   const scene=new T.Scene(),camera=new T.PerspectiveCamera(35,1,.1,100);
   const pmrem=new T.PMREMGenerator(renderer),room=new RoomEnvironment();
   const environment=pmrem.fromScene(room,.04);scene.environment=environment.texture;scene.environmentIntensity=.8;room.dispose();pmrem.dispose();
   const ambient=new T.HemisphereLight(0xb1e5ff,0x071322,2);scene.add(ambient);
   const light=new T.DirectionalLight(0xfff9eb,4);light.position.set(4,8,5);scene.add(light);
   const rim=new T.DirectionalLight(0x4bc9ff,5);rim.position.set(-5,2,-3);scene.add(rim);
   const cyanLight=new T.PointLight(0x5cf4d9,12,10);cyanLight.position.set(1,1,2);scene.add(cyanLight);
   const root=new T.Group(),product=new T.Group();root.add(product);scene.add(root);
   const titanium=new T.MeshPhysicalMaterial({color:0x8b9aa4,metalness:.94,roughness:.26,clearcoat:.4});
   const darkMetal=new T.MeshPhysicalMaterial({color:0x24343f,metalness:.9,roughness:.28,clearcoat:.4});
   const silver=new T.MeshStandardMaterial({color:0xe5e6de,metalness:.92,roughness:.23});
   const pcb=new T.MeshPhysicalMaterial({color:0x064e48,metalness:.32,roughness:.3,clearcoat:.8});
   const black=new T.MeshPhysicalMaterial({color:0x080f18,metalness:.42,roughness:.35,clearcoat:.3});
   const gold=new T.MeshStandardMaterial({color:0xb79751,metalness:.85,roughness:.2});
   const traceMat=new T.MeshStandardMaterial({color:0x8fd1bd,metalness:.65,roughness:.35});
   const glow=new T.MeshStandardMaterial({color:0x90f5df,emissive:0x56d6b5,emissiveIntensity:2,roughness:.25});
   const glass=new T.MeshPhysicalMaterial({color:0x9daeb3,metalness:.48,roughness:.15,clearcoat:1,transparent:true,opacity:.8});
   const base=new T.Group(),board=new T.Group(),lid=new T.Group();product.add(base,board,lid);
   const materials=[titanium,darkMetal,silver,pcb,black,gold,traceMat,glow,glass];
   function block(parent:InstanceType<typeof T.Group>,w:number,h:number,d:number,x:number,y:number,z:number,mat:InstanceType<typeof T.Material>,radius=.04){const mesh=new T.Mesh(new RoundedBoxGeometry(w,h,d,2,Math.min(radius,h/3,w/3,d/3)),mat);mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
   block(base,3.7,.23,2.8,0,-.5,0,titanium,.1);
   for(const x of [-1.73,1.73])block(base,.24,.58,2.68,x,-.18,0,darkMetal);
   for(const z of [-1.26,1.26])block(base,3.5,.58,.24,0,-.18,z,darkMetal);
   for(let i=0;i<13;i++)block(base,.055,.4,1.7,-1.65+i*.055,-.19,0,titanium,.015);
   for(let i=0;i<13;i++)block(base,.055,.4,1.7,1.65-i*.055,-.19,0,titanium,.015);
   block(base,3.4,.04,2.4,0,-.36,0,black);
   block(board,3.18,.09,2.32,0,0,0,pcb);
   block(board,.97,.17,.97,0,.17,-.05,black);
   block(board,.71,.035,.71,0,.27,-.05,titanium);
   block(board,.5,.04,.5,0,.295,-.05,black);
   for(let side=0;side<4;side++)for(let i=0;i<16;i++){
    const coord=-.45+i*.06;const pin=block(board,.026,.02,.14,coord,.105,.5,gold,.004);
    if(side===1)pin.position.z=-.6;if(side===2){pin.rotation.y=Math.PI/2;pin.position.set(.55,.105,coord-.05);}if(side===3){pin.rotation.y=Math.PI/2;pin.position.set(-.55,.105,coord-.05);}
   }
   for(let i=0;i<9;i++){block(board,.14,.09,.22,-1.15+(i%3)*.26,.11,-.7+Math.floor(i/3)*.35,black,.016);block(board,.14,.045,.05,-1.15+(i%3)*.26,.105,-.84+Math.floor(i/3)*.35,silver,.008);}
   for(let i=0;i<5;i++)block(board,.12,.12,.16,.92+i*.1,.12,-.65,gold,.01);
   block(board,.6,.12,.35,.98,.13,.43,black);block(board,.34,.09,.18,.97,.22,.43,titanium);
   for(let i=0;i<9;i++){
    const z=-.95+i*.23;block(board,.58,.008,.016,-.79,.052,z,traceMat,.002);block(board,.018,.008,.13+(i%3)*.06,-.52,.052,z+.06,traceMat,.002);
    block(board,.018,.008,.34,1.18-i*.055,.052,-.3,traceMat,.002);
   }
   for(const x of [-1.38,1.38])for(const z of [-.95,.95]){
    const bolt=new T.Mesh(new T.CylinderGeometry(.08,.08,.19,18),gold);bolt.position.set(x,.03,z);board.add(bolt);
    const head=new T.Mesh(new T.CylinderGeometry(.055,.055,.035,12),silver);head.position.set(x,.15,z);board.add(head);
   }
   const connector=new T.Mesh(new T.CylinderGeometry(.18,.18,.35,24),silver);connector.rotation.z=Math.PI/2;connector.position.set(1.95,-.13,.3);base.add(connector);
   const collar=new T.Mesh(new T.TorusGeometry(.155,.025,8,24),gold);collar.rotation.y=Math.PI/2;collar.position.set(2.13,-.13,.3);base.add(collar);
   block(lid,3.7,.16,2.8,0,.42,0,darkMetal,.07);
   block(lid,3.25,.045,2.35,0,.52,0,titanium,.02);
   block(lid,.05,.022,1.58,-1.39,.556,0,glow,.008);
   for(let i=0;i<8;i++)block(lid,.8,.022,.026,.85,.56,-.8+i*.22,black,.004);
   for(const x of [-1.55,1.55])for(const z of [-1.1,1.1]){const screw=new T.Mesh(new T.CylinderGeometry(.05,.05,.025,12),silver);screw.position.set(x,.55,z);lid.add(screw);}
   const labelCanvas=document.createElement('canvas');labelCanvas.width=512;labelCanvas.height=256;
   const ctx=labelCanvas.getContext('2d')!;ctx.fillStyle='#16232d';ctx.fillRect(0,0,512,256);ctx.fillStyle='#dbe8e9';ctx.font='600 78px Arial';ctx.fillText('tatvix',36,115);ctx.fillStyle='#81ead3';ctx.font='22px monospace';ctx.fillText('CONNECTED SYSTEM',36,172);ctx.fillStyle='#9cacb3';ctx.font='16px monospace';ctx.fillText('ENGINEERING CONCEPT',36,218);
   const labelTexture=new T.CanvasTexture(labelCanvas);labelTexture.colorSpace=T.SRGBColorSpace;
   const labelMat=new T.MeshStandardMaterial({map:labelTexture,roughness:.4,metalness:.4});materials.push(labelMat);
   const label=new T.Mesh(new T.PlaneGeometry(1.48,.74),labelMat);label.rotation.x=-Math.PI/2;label.position.set(-.33,.56,0);lid.add(label);
   const antenna=new T.Mesh(new T.CylinderGeometry(.065,.085,.9,16),black);antenna.position.set(-1.8,.3,-.9);base.add(antenna);
   const antennaBase=new T.Mesh(new T.CylinderGeometry(.13,.13,.22,16),gold);antennaBase.position.set(-1.8,-.08,-.9);base.add(antennaBase);
   const floor=new T.GridHelper(30,60,0x4b8793,0x214a5c);floor.position.y=-1.4;(floor.material as InstanceType<typeof T.Material>).transparent=true;(floor.material as InstanceType<typeof T.Material>).opacity=.16;scene.add(floor);
   scene.fog=new T.FogExp2(0x071322,.055);
   const shadowMat=new T.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec2 vUv;void main(){float d=length((vUv-.5)*2.0);gl_FragColor=vec4(.0,.015,.025,(1.0-smoothstep(.05,1.0,d))*.65);}'});
   const shadow=new T.Mesh(new T.PlaneGeometry(6,5),shadowMat);shadow.rotation.x=-Math.PI/2;shadow.position.y=-1.38;scene.add(shadow);
   const network=new T.Group();scene.add(network);
   const lineMat=new T.MeshBasicMaterial({color:0x58dbc8,transparent:true,opacity:.32});
   for(let i=0;i<3;i++){
    const points=[];for(let j=0;j<=80;j++){const angle=j/80*Math.PI*1.65;points.push(new T.Vector3(Math.cos(angle)*(2.6+i*.32),Math.sin(angle*.5)*.4,Math.sin(angle)*(2.6+i*.32)));}
    const path=new T.CatmullRomCurve3(points);const curve=new T.Mesh(new T.TubeGeometry(path,80,.009,5,false),lineMat);curve.rotation.x=i*.48;network.add(curve);
    const node=new T.Mesh(new T.SphereGeometry(.07,12,12),glow);node.position.copy(points[38+i*12]);network.add(node);
   }
   const state={progress:0,enter:0,px:0,py:0,keyboard:0};
   let visible=true,userPaused=false,raf=0,last=0;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
   const story=el.closest('.immersive-story') as HTMLElement;
   const render=(time=0)=>{
    if(dead||!visible||document.hidden)return;
    const p=reduced.matches||userPaused?0:state.progress;
    const segment=p*3;const separation=segment<1?.5+segment*.8:segment<2?1.3-(segment-1)*.45:.85-(segment-2)*.65;
    lid.position.y=separation;board.position.y=separation*.3;
    root.rotation.set(state.py*.18,-.36+state.px*.42+state.keyboard+p*.8,.08+state.px*.06);
    product.scale.setScalar(.82+state.enter*.18);
    product.position.y=!reduced.matches&&!userPaused?Math.sin(time*.0007)*.035:0;
    network.visible=segment>1.7;network.rotation.y=time*.00009;network.scale.setScalar(.85+p*.15);
    renderer.render(scene,camera);
   };
   const tick=(time:number)=>{raf=0;if(dead||!visible||document.hidden)return;const interval=innerWidth<768?33:16;if(time-last>=interval){render(time);last=time;}if(!reduced.matches&&!userPaused)raf=requestAnimationFrame(tick);};
   const wake=()=>{if(!raf&&visible&&!document.hidden&&!dead){render(performance.now());if(!reduced.matches&&!userPaused)raf=requestAnimationFrame(tick);}};
   const resize=()=>{const bounds=el.getBoundingClientRect();renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<768?1.2:1.6));renderer.setSize(bounds.width,bounds.height);camera.aspect=bounds.width/bounds.height;camera.clearViewOffset();if(innerWidth>700)camera.setViewOffset(bounds.width,bounds.height,-bounds.width*.215,0,bounds.width,bounds.height);camera.position.set(5.2,5.7,6.6);if(camera.aspect<.9)camera.position.multiplyScalar(1.13);camera.lookAt(0,.45,0);camera.updateProjectionMatrix();wake();};
   const ro=new ResizeObserver(resize);ro.observe(el);
   const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)wake();else{cancelAnimationFrame(raf);raf=0;}},{threshold:0});io.observe(story);
   const trigger=ScrollTrigger.create({trigger:story,start:'top top',end:'bottom bottom',onUpdate:self=>{if(!reduced.matches&&!userPaused){state.progress=self.progress;wake();}}});
   const pointerX=gsap.quickTo(state,'px',{duration:.6,ease:'power3.out',onUpdate:()=>render(performance.now())});
   const pointerY=gsap.quickTo(state,'py',{duration:.6,ease:'power3.out',onUpdate:()=>render(performance.now())});
   const move=(e:PointerEvent)=>{if(reduced.matches||userPaused)return;const b=el.getBoundingClientRect();if(e.pointerType==='mouse'){pointerX((e.clientX-b.left)/b.width*2-1);pointerY((e.clientY-b.top)/b.height*2-1);wake();}};
   let startX=0,startY=0;
   const down=(e:PointerEvent)=>{if(e.pointerType!=='mouse'){startX=e.clientX;startY=e.clientY;}};
   const touch=(e:PointerEvent)=>{if(e.pointerType==='mouse'||!e.buttons||reduced.matches||userPaused)return;const dx=e.clientX-startX,dy=e.clientY-startY;if(Math.abs(dx)>Math.abs(dy)){state.px=Math.max(-1,Math.min(1,dx/130));wake();}};
   const leave=()=>{if(reduced.matches||userPaused)return;gsap.to(state,{px:0,py:0,duration:.7,onUpdate:()=>render(performance.now()),overwrite:true});};
   const keydown=(e:KeyboardEvent)=>{if(['ArrowLeft','ArrowRight','Home'].includes(e.key)){e.preventDefault();state.keyboard=e.key==='Home'?0:state.keyboard+(e.key==='ArrowLeft'?-.18:.18);render(performance.now());}};
   const pause=(value:boolean)=>{userPaused=value;cancelAnimationFrame(raf);raf=0;gsap.killTweensOf(state);state.px=0;state.py=0;if(!value){state.progress=trigger.progress;wake();}else render();};controls.current={pause};
   const changeMotion=()=>{cancelAnimationFrame(raf);raf=0;if(reduced.matches){gsap.killTweensOf(state);state.enter=1;state.px=0;state.py=0;}wake();};reduced.addEventListener('change',changeMotion);
   const visibility=()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else wake();};document.addEventListener('visibilitychange',visibility);
   const lost=(e:Event)=>{e.preventDefault();cancelAnimationFrame(raf);raf=0;renderer.domElement.style.display='none';controls.current=null;setReady(false);};renderer.domElement.addEventListener('webglcontextlost',lost);
   story.addEventListener('pointermove',move);story.addEventListener('pointermove',touch);story.addEventListener('pointerdown',down);story.addEventListener('pointerleave',leave);el.addEventListener('keydown',keydown);
   const entrance=gsap.to(state,{enter:1,duration:reduced.matches?0:1.4,ease:'power3.out'});
   resize();setReady(true);wake();
   dispose=()=>{cancelAnimationFrame(raf);trigger.kill();entrance.kill();gsap.killTweensOf(state);ro.disconnect();io.disconnect();reduced.removeEventListener('change',changeMotion);document.removeEventListener('visibilitychange',visibility);story.removeEventListener('pointermove',move);story.removeEventListener('pointermove',touch);story.removeEventListener('pointerdown',down);story.removeEventListener('pointerleave',leave);el.removeEventListener('keydown',keydown);scene.traverse(obj=>{if(obj instanceof T.Mesh)obj.geometry.dispose();});materials.forEach(m=>m.dispose());lineMat.dispose();(floor.material as InstanceType<typeof T.Material>).dispose();shadowMat.dispose();labelTexture.dispose();environment.dispose();renderer.dispose();renderer.domElement.remove();controls.current=null;};
  }
  init().catch(()=>{setReady(false);});
  return()=>{dead=true;dispose();};
 },[]);
 return <><div className="experience-frame"><div className="studio-halo" aria-hidden="true"/><div className="scene-host" ref={host} tabIndex={ready?0:-1} role="group" aria-label="Interactive concept device. Move your mouse to tilt. Swipe horizontally on touch screens. Use left and right arrow keys to rotate and Home to reset." data-ready={ready}><img src="/images/device-concept.webp" width="1536" height="1024" alt="Illustrative connected-device concept" className={ready?'scene-fallback is-hidden':'scene-fallback'}/></div></div><div className="scene-overlay"><div className="scene-meta"><span>Connected product / Engineering concept</span><div><span className="interaction-hint">{ready?'Move to explore':'Illustrative concept'}</span><button disabled={!ready} aria-pressed={paused} onClick={()=>{setPaused(!paused);controls.current?.pause(!paused);}}>{paused?<Play size={13} aria-hidden="true"/>:<Pause size={13} aria-hidden="true"/>}{paused?'Resume motion':'Pause motion'}</button></div></div></div></>;
}
