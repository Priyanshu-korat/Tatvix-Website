import {publicPaths} from '@/lib/seo-routes';
import {canonical} from '@/lib/seo';
export function GET(){const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+publicPaths.map(path=>'<url><loc>'+canonical(path)+'</loc></url>').join('')+'</urlset>';return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'public, max-age=3600'}});}
