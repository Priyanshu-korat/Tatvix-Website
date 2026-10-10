import assert from 'node:assert/strict';
import {writeFile} from 'node:fs/promises';
import {publicPaths} from '../lib/seo-routes.ts';
import {canonical} from '../lib/seo.ts';
const base=process.argv[2]||'http://127.0.0.1:5173';
const production=new URL(base).hostname==='www.tatvixtech.com';
const titles=new Set(),descriptions=new Set(),links=new Set(),results=[];
const extract=(html,re)=>html.match(re)?.[1];
for(const path of publicPaths){
 const r=await fetch(base+path);assert.equal(r.status,200,path+' status');const html=await r.text();
 const title=extract(html,/<title>([^<]+)<\/title>/);const description=extract(html,/<meta name="description" content="([^"]+)"/);const url=extract(html,/<link rel="canonical" href="([^"]+)"/);
 assert.ok(title,path+' title');assert.ok(description,path+' description');assert.ok(!titles.has(title),path+' duplicate title');assert.ok(!descriptions.has(description),path+' duplicate description');titles.add(title);descriptions.add(description);
 assert.equal(new URL(url).href,canonical(path),path+' canonical');assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,path+' h1');
 if(production){assert.ok(/<meta name="robots" content="index,/.test(html),path+' production robots');assert.ok(!/noindex/i.test(r.headers.get('x-robots-tag')||''),path+' production header');}
 else{assert.ok(/<meta name="robots" content="[^\"]*noindex/.test(html),path+' preview robots');assert.equal(r.headers.get('x-robots-tag'),'noindex, follow',path+' preview header');}
 const main=extract(html,/<main[^>]*>([\s\S]*?)<\/main>/)||'';const text=main.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();assert.ok(text.length>150,path+' meaningful initial HTML');
 for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(m[1]);
 for(const m of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g))if(!m[1].startsWith('/_')&&!m[1].startsWith('/fonts'))links.add(m[1]);
 assert.ok(html.includes('og:image')&&html.includes('twitter:card'),path+' social metadata');
 results.push({path,status:r.status,title,description,canonical:url,initialTextCharacters:text.length});
}
const sitemap=await (await fetch(base+'/sitemap.xml')).text();const locations=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);assert.deepEqual(locations,publicPaths.map(canonical));
for(const path of links){const r=await fetch(base+path,{redirect:'manual'});assert.equal(r.status,200,path+' internal link');}
for(const path of ['/services/no-such-service','/industries/no-such-industry','/case-studies/no-such-case','/insights/no-such-case'])assert.equal((await fetch(base+path)).status,404,path+' genuine 404');
for(const path of ['/insights','/insights/battery-efficient-industrial-pressure-monitoring']){const r=await fetch(base+path,{redirect:'manual'});assert.equal(r.status,301);assert.ok(r.headers.get('location').includes('/case-studies'));}
const robots=await (await fetch(base+'/robots.txt')).text();assert.ok(robots.includes('OAI-SearchBot'));assert.equal(robots.includes('Sitemap:'),production);
const report={checkedAt:new Date().toISOString(),environment:production?'Public production host; unauthenticated HTTP audit.':'Local built Worker; preview intentionally noindex. Production host policy separately unit-tested.',pages:results.length,internalTargets:links.size,checks:['unique metadata','canonical URLs','one H1','initial HTML text','JSON-LD parses','social metadata',production?'production index meta + no blocking header':'preview noindex meta + header','internal links','XML sitemap','known legacy 301s','unknown route 404s','crawler rules'],results};
if(process.argv[3])await writeFile(process.argv[3],JSON.stringify(report,null,2));console.log(JSON.stringify({pages:report.pages,internalTargets:report.internalTargets,checks:report.checks}));
