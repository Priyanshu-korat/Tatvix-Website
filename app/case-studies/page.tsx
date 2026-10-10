import ContentShell from '@/components/content-shell';
import {getAllPostsSorted} from '@/content/published-case-studies';
import {pageMetadata} from '@/lib/seo';
export const metadata=pageMetadata('Embedded Systems & IoT Case Studies','Read Tatvix’s published engineering work on industrial pressure monitoring, IoT modules, RO systems and smart machine development.','/case-studies');
export default function CaseStudyIndex(){return <ContentShell><p className="kicker">Published engineering work</p><h1>Real constraints.<br/>Thoughtful solutions.</h1><p className="knowledge-lead">Explore the problem, approach and engineering decisions described in Tatvix’s published case studies.</p><div className="knowledge-cards">{getAllPostsSorted().map(p=><a href={'/case-studies/'+p.slug} key={p.slug}><p className="kicker">{p.tags[0]}</p><h2>{p.title}</h2><p>{p.description}</p><span className="text-link">Read case study ↗</span></a>)}</div></ContentShell>}
