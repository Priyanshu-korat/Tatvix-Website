import {notFound} from 'next/navigation';
import {industries} from '@/content/industries';
import {services} from '@/content/services';
import {getPostBySlug} from '@/content/published-case-studies';
import {pageMetadata,breadcrumbData} from '@/lib/seo';
import StructuredData from '@/components/structured-data';
import ContentShell,{ProjectInvitation} from '@/components/content-shell';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return industries.map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props){const {slug}=await params;const i=industries.find(i=>i.slug===slug);return i?pageMetadata(i.name,i.summary,'/industries/'+slug):{};}
export default async function IndustryPage({params}:Props){const {slug}=await params;const i=industries.find(i=>i.slug===slug);if(!i)notFound();const post=i.caseSlug?getPostBySlug(i.caseSlug):null;return <ContentShell><StructuredData data={breadcrumbData([{name:'Home',path:'/'},{name:'Industries',path:'/industries'},{name:i.name,path:'/industries/'+slug}])}/><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/industries">Industries</a></nav><p className="kicker">Application requirements</p><h1>{i.name}</h1><p className="knowledge-lead">{i.intro}</p><section className="knowledge-section"><h2>Start with the constraints.</h2><ul className="scope-list">{i.considerations.map(t=><li key={t}>{t}</li>)}</ul></section>{i.questions.map(([q,a])=><section className="knowledge-section" key={q}><h2>{q}</h2><p>{a}</p></section>)}<section className="knowledge-section"><h2>Relevant engineering services</h2><div className="topic-links">{i.serviceSlugs.map(slug=>{const s=services.find(s=>s.slug===slug)!;return <a href={'/services/'+slug} key={slug}>{s.name} ↗</a>})}<a href="/services/new-product-development">New product development ↗</a></div></section>{post&&<section className="knowledge-section"><p className="kicker">From our published work</p><h2>{post.title}</h2><p>{post.description}</p><a className="text-link" href={'/case-studies/'+post.slug}>Read the case study ↗</a></section>}<ProjectInvitation/></ContentShell>}
