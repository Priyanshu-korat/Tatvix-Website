import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Miniflare} from 'miniflare';

test('contact transport uses a Workers-supported redirect mode and never follows redirects',async()=>{
 const source=await readFile(new URL('../lib/contact-handler.ts',import.meta.url),'utf8');
 const mode=source.match(/redirect:'([^']+)'/)?.[1];
 assert.equal(mode,'manual');
 // Isolated local Worker: constructs the actual Request in workerd, with no outbound mail or network fetch.
 const mf=new Miniflare({modules:true,compatibilityDate:'2026-05-15',script:`
 export default {fetch(){const request=new Request('https://example.invalid/',{
 method:'POST',redirect:${JSON.stringify(mode)},body:'{}',signal:AbortSignal.timeout(12000)
 });return Response.json({redirect:request.redirect,method:request.method});}};`});
 try{const response=await mf.dispatchFetch('http://localhost/');assert.equal(response.status,200);assert.deepEqual(await response.json(),{redirect:'manual',method:'POST'});}
 finally{await mf.dispose();}
});
