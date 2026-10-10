import {services} from '../content/services.ts';
import {industries} from '../content/industries.ts';
import {getAllPostsSorted} from '../content/published-case-studies.ts';
export const publicPaths=['/','/about','/services','/industries','/process','/case-studies','/contact','/careers','/privacy','/terms',...services.map(s=>'/services/'+s.slug),...industries.map(i=>'/industries/'+i.slug),...getAllPostsSorted().map(p=>'/case-studies/'+p.slug)];
export function legacyDestination(path:string){if(path==='/insights')return '/case-studies';const match=path.match(/^\/insights\/([^/]+)$/);return match&&getAllPostsSorted().some(p=>p.slug===match[1])?'/case-studies/'+match[1]:null;}
