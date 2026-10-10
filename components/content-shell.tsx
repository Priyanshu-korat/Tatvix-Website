import type {ReactNode} from 'react';
import DocumentHeader from './document-header';
import SiteFooter from './site-footer';
export default function ContentShell({children}:{children:ReactNode}){return <div className="knowledge-page"><DocumentHeader/><main id="main" className="knowledge-main">{children}</main><SiteFooter/></div>}
export function ProjectInvitation(){return <aside className="knowledge-cta"><div><p className="kicker">Start with a conversation</p><h2>Tell us what you want to build.</h2><p>Share your use case, product stage and engineering requirements.</p></div><a className="button" href="/contact">Discuss your project ↗</a></aside>}
