// Keep the established SMTP credentials on the existing Tatvix server.
// Use the original Netlify origin, independently of the marketing domain's DNS.
// Do not follow redirects: a future domain change must not resend enquiry data.
const endpoint='https://tatvix.netlify.app/api/contact';
const limits={name:120,email:200,mobile:40,company:160,title:120,inquiryType:80,description:5000} as const;
const inquiryTypes=['General','PCB Design','Firmware Development','IoT System Integration','Cloud Solutions','Web & Mobile Applications','Prototyping','Production Support'];
function json(data:unknown,status=200){return Response.json(data,{status,headers:{'Cache-Control':'no-store'}});}
export function createContactHandler(deliver:typeof fetch=fetch,mode:'bridge'|'direct'='bridge'){
 const hits=new Map<string,{count:number;until:number}>();
 return async function POST(request:Request){
  // Retain the guard if this application ever runs on the delivery origin itself.
  if(mode==='bridge'&&new URL(request.url).origin===new URL(endpoint).origin)return json({success:false,message:'The enquiry service is being configured. Please email info@tatvixtech.com.'},503);
  const origin=request.headers.get('origin');
  if(origin&&origin!==new URL(request.url).origin)return json({success:false,message:'Please send the form from this website.'},403);
  if(!request.headers.get('content-type')?.includes('application/json'))return json({success:false,message:'Invalid request format.'},415);
  if(Number(request.headers.get('content-length')||0)>16000)return json({success:false,message:'Your enquiry is too long.'},413);
  const ip=request.headers.get('cf-connecting-ip')||'unknown';const now=Date.now();
  for(const [key,value]of hits)if(value.until<=now)hits.delete(key);
  const hit=hits.get(ip);if(hit&&hit.count>=5)return json({success:false,message:'Too many requests. Please wait a minute before trying again.'},429);
  if(!hit){if(hits.size>=1000)return json({success:false,message:'Please try again shortly.'},429);hits.set(ip,{count:1,until:now+60000});}else hit.count++;
  let body:Record<string,unknown>;
  try{const raw=await request.text();if(raw.length>16000)return json({success:false,message:'Your enquiry is too long.'},413);const value:unknown=JSON.parse(raw);if(!value||Array.isArray(value)||typeof value!=='object')throw Error();body=value as Record<string,unknown>;}catch{return json({success:false,message:'Invalid request body.'},400);}
  if(typeof body.botField==='string'&&body.botField.trim())return json({success:true});
  const fields=Object.fromEntries(Object.keys(limits).map(key=>[key,typeof body[key]==='string'?(body[key] as string).trim():''])) as Record<keyof typeof limits,string>;
  const errors:Record<string,string>={};
  for(const [key,max]of Object.entries(limits))if(fields[key as keyof typeof limits].length>max)errors[key]=`Use ${max} characters or fewer.`;
  if(!fields.name)errors.name='Enter your name.';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))errors.email='Enter a valid email address.';
  if(!fields.mobile)errors.mobile='Enter your phone number.';
  if(!inquiryTypes.includes(fields.inquiryType))errors.inquiryType='Choose an enquiry type.';
  if(body.consent!==true)errors.consent='Confirm that we can contact you about this enquiry.';
  if(Object.keys(errors).length)return json({success:false,message:'Please check the highlighted fields.',errors},400);
  try{
   // Workers requires manual mode; reject redirects rather than following them.
   const response=await deliver(endpoint,{method:'POST',redirect:'manual',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({...fields,botField:'',consent:true}),signal:AbortSignal.timeout(12000)});
   if(response.status>=300&&response.status<400)return json({success:false,message:'Delivery could not be confirmed. Please email info@tatvixtech.com before trying again.'},502);
   const result=await response.json() as {success?:boolean};
   if(!response.ok||result.success!==true)return json({success:false,message:response.status===429?'Too many requests. Please try again shortly.':'Delivery could not be confirmed. Please email info@tatvixtech.com before trying again.'},response.status===429?429:502);
   return json({success:true,message:'Your enquiry has been sent to Tatvix.'});
  }catch{return json({success:false,message:'Delivery could not be confirmed. Please email info@tatvixtech.com before trying again.'},502);}
 };
}
