import type {Config,Context} from '@netlify/functions';
import nodemailer from 'nodemailer';
import {createContactHandler} from '../../lib/contact-handler.ts';
import {smtpMessage} from '../smtp-message.ts';

// This file is bundled only by Netlify; Sites continues using its HTTPS bridge.
const deliver:typeof fetch=async(_url,options)=>{
 const host=Netlify.env.get('SMTP_HOST');
 const user=Netlify.env.get('SMTP_USER');
 const pass=Netlify.env.get('SMTP_PASSWORD');
 const port=Number(Netlify.env.get('SMTP_PORT'))||587;
 if(!host||!user||!pass){
  console.error('Tatvix enquiry delivery: missing server SMTP configuration');
  return Response.json({success:false},{status:503});
 }
 const transport=nodemailer.createTransport({host,port,secure:port===465,auth:{user,pass},connectionTimeout:8000,greetingTimeout:8000,socketTimeout:12000});
 try{
  const fields=JSON.parse(String(options?.body));
  const sent=await transport.sendMail(smtpMessage(fields,user));
  const accepted=sent.accepted?.some(address=>String(address).toLowerCase()==='info@tatvixtech.com');
  return Response.json({success:accepted===true},{status:accepted?200:502});
 }catch(error){
  // Keep enquiry contents and credentials out of logs.
  console.error('Tatvix enquiry delivery failed',{code:typeof error==='object'&&error&&'code'in error?String(error.code):'SMTP_ERROR'});
  return Response.json({success:false},{status:502});
 }finally{transport.close();}
};
const handle=createContactHandler(deliver,'direct');
export default async(request:Request,context:Context)=>{
 if(request.method!=='POST')return new Response('Method not allowed',{status:405,headers:{Allow:'POST','Cache-Control':'no-store'}});
 const headers=new Headers(request.headers);
 // Use the platform-provided client address rather than a caller-supplied header.
 headers.set('cf-connecting-ip',context.ip);
 return handle(new Request(request,{headers}));
};
export const config:Config={path:'/api/contact'};
