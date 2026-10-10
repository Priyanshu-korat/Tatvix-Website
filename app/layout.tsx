import type { Metadata } from "next";
import {headers} from 'next/headers';
import {indexingRobots,site} from '@/lib/seo';
import "./globals.css";
export async function generateMetadata():Promise<Metadata>{const requestHeaders=await headers();return {metadataBase:new URL(site.origin),title:'Tatvix Technologies | Embedded Systems & IoT Development',description:site.description,applicationName:site.shortName,icons:{icon:'/favicon.svg'},robots:indexingRobots(requestHeaders.get('host'))};}
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}
