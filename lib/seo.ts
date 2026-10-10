import type {Metadata} from 'next';

export const site={name:'Tatvix Technologies',shortName:'Tatvix',origin:'https://www.tatvixtech.com',email:'info@tatvixtech.com',linkedIn:'https://www.linkedin.com/company/tatvix',description:'Tatvix Technologies, also known as Tatvix, is a product engineering company in Ahmedabad, India, working across embedded hardware, firmware, IoT and applications.'} as const;
export function canonical(path='/'){return new URL(path,site.origin).href;}
export function isProductionHost(host:string|null){return /^www\.tatvixtech\.com(?::443)?$/i.test(host||'');}
export function indexingRobots(host:string|null):Metadata['robots']{return isProductionHost(host)?{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}:{index:false,follow:true};}
export function pageMetadata(title:string,description:string,path:string):Metadata{
 const fullTitle=title.includes('Tatvix')?title:`${title} | ${site.name}`;
 return {title:fullTitle,description,alternates:{canonical:canonical(path)},openGraph:{type:'website',locale:'en_IN',siteName:site.shortName,title:fullTitle,description,url:canonical(path),images:[{url:canonical('/images/tatvix-social.png'),width:1200,height:630,alt:'Tatvix Technologies — embedded systems and connected product engineering'}]},twitter:{card:'summary_large_image',title:fullTitle,description,images:[canonical('/images/tatvix-social.png')]}};
}
export function robotsText(host:string|null){
 // Preserve the training policy already published on the owner's existing site.
 // Search access and training access remain separate decisions.
 const policies=['*','Googlebot','Bingbot','OAI-SearchBot','GPTBot','Google-Extended'].map(agent=>`User-agent: ${agent}\nAllow: /\nDisallow: /api/`).join('\n\n');
 return policies+'\n\nUser-agent: CCBot\nDisallow: /\n'+(isProductionHost(host)?`\nSitemap: ${canonical('/sitemap.xml')}\n`:'');
}
export const organization={'@type':'Organization','@id':canonical('/#organization'),name:site.name,alternateName:site.shortName,url:canonical('/'),email:site.email,logo:{'@type':'ImageObject',url:canonical('/images/tatvix-logo.png'),width:600,height:180},sameAs:[site.linkedIn],address:{'@type':'PostalAddress',addressLocality:'Ahmedabad',addressRegion:'Gujarat',addressCountry:'IN'},description:site.description};
export function breadcrumbData(items:{name:string;path:string}[]){return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map((item,i)=>({'@type':'ListItem',position:i+1,name:item.name,item:canonical(item.path)}))};}
export function jsonLd(value:unknown){return JSON.stringify(value).replace(/</g,'\\u003c');}
