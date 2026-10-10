import {pageMetadata,site} from '@/lib/seo';
import EnquiryForm from '@/components/enquiry-form';
import SiteFooter from '@/components/site-footer';

export const metadata=pageMetadata('Discuss your project','Contact Tatvix Technologies in Gandhinagar, Gujarat, for hardware, embedded firmware, IoT and new product engineering requirements.','/contact');

export default function ContactPage(){return <>
 <a className="skip" href="#main">Skip to content</a>
 <header className="document-header"><a href="/#overview" className="wordmark" aria-label="Tatvix Technologies home">Tatvix<span>Technologies</span></a><a className="text-link" href="/#contact">Back to website</a></header>
 <main id="main" className="contact enquiry-page">
  <div className="contact-intro"><p className="kicker">Connect with our team</p><h1>Let’s discuss<br/>your project.</h1><p className="enquiry-page-copy">Tell us about your idea, the challenge you are solving, or the engineering support you need. We’ll use your details to respond to your enquiry.</p><a className="contact-email" href="mailto:info@tatvixtech.com">info@tatvixtech.com</a><p className="contact-location">Based in {site.location}</p><p className="contact-alternative">Prefer email? You can contact our team directly.</p></div>
  <EnquiryForm/>
 </main><SiteFooter/>
</>}
