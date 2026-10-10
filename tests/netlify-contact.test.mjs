import test from 'node:test';
import assert from 'node:assert/strict';
import {smtpMessage} from '../netlify/smtp-message.ts';
import {createContactHandler} from '../lib/contact-handler.ts';
const fields={name:'QA\r\nBcc: other@example.com',email:'test@example.com',mobile:'0000000000',company:'<script>alert(1)</script>',title:'Engineer',inquiryType:'General',description:'A & B\nSecond line'};
test('SMTP mail stays addressed to Tatvix and escapes HTML/header injection',()=>{
 const message=smtpMessage(fields,'sender@example.com');
 assert.equal(message.to,'info@tatvixtech.com');assert.equal(message.replyTo,'test@example.com');
 assert.ok(!/[\r\n]/.test(message.subject));assert.ok(!/[\r\n]/.test(message.from.name));
 assert.ok(!message.html.includes('<script>'));assert.ok(message.html.includes('&lt;script&gt;'));
 assert.ok(message.html.includes('A &amp; B<br>Second line'));assert.ok(message.text.includes(fields.company));
});
test('direct SMTP mode accepts the Netlify origin without forwarding back over HTTP',async()=>{
 let calls=0;
 const handler=createContactHandler(async()=>{calls++;return Response.json({success:true});},'direct');
 const response=await handler(new Request('https://tatvix.netlify.app/api/contact',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://tatvix.netlify.app'},body:JSON.stringify({...fields,consent:true,botField:''})}));
 assert.equal(response.status,200);assert.equal(calls,1);
});
