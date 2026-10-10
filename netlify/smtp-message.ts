type Enquiry={name:string;email:string;mobile:string;company:string;title:string;inquiryType:string;description:string};
const escape=(value:string)=>value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const header=(value:string)=>value.replace(/[\r\n]+/g,' ').trim();
export function smtpMessage(fields:Enquiry,user:string){
 const labels:[keyof Enquiry,string][]=[['name','Name'],['email','Email'],['mobile','Phone'],['company','Company'],['title','Job title'],['inquiryType','Enquiry type'],['description','Project details']];
 return {from:{name:header(fields.name),address:user},replyTo:header(fields.email),to:'info@tatvixtech.com',subject:`New Inquiry: ${header(fields.inquiryType)} from ${header(fields.name)}`,text:labels.map(([key,label])=>`${label}: ${fields[key]}`).join('\n'),html:'<h2>New project enquiry</h2>'+labels.map(([key,label])=>`<p><strong>${label}:</strong> ${escape(fields[key]).replace(/\n/g,'<br>')}</p>`).join('')};
}
