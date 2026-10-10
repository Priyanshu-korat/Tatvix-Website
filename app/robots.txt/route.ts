import {robotsText} from '@/lib/seo';
import {headers} from 'next/headers';
export const dynamic = 'force-dynamic';
export async function GET(request:Request){const requestHeaders=await headers();return new Response(robotsText(requestHeaders.get('host')||new URL(request.url).host),{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store'}});}
