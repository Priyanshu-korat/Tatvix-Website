import type { Metadata } from "next";
import {headers} from 'next/headers';
import {indexingRobots,site} from '@/lib/seo';
import "./globals.css";
export async function generateMetadata():Promise<Metadata>{const requestHeaders=await headers();return {metadataBase:new URL(site.origin),title:'Tatvix Technologies | Embedded Systems & IoT Development',description:site.description,applicationName:site.shortName,icons:{icon:[{url:'/favicon.png',type:'image/png',sizes:'96x96'},{url:'/favicon.svg',type:'image/svg+xml',sizes:'any'}],shortcut:'/favicon.ico',apple:{url:'/apple-touch-icon.png',sizes:'180x180'}},robots:indexingRobots(requestHeaders.get('host')),verification:{google:process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION||undefined,other:process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?{'msvalidate.01':process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION}:undefined}};}
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}
