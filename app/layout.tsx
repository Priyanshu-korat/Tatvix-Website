import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Tatvix Technologies | Hardware, Firmware & Connected Products", description: "From PCB design and embedded firmware to IoT and connected applications, Tatvix Technologies helps turn product ideas into engineered systems.", robots: { index: false, follow: false } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>}
