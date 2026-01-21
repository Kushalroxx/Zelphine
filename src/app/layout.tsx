import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import Navbar from "@/components/sections/navbar";
// import ChatWidget from "@/components/chatbot/chatWidget";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  display: 'swap',
  variable: '--font-poppins',  
});

export const metadata: Metadata = {
  title: {
    default: "Zelphine | High-Performance Digital Architecture",
    template: "%s | Zelphine"
  },
  description: "We engineer scalable custom platforms, AI agents, and internal business tools. No templates. No fluff. Just high-leverage software for growing businesses.",
  keywords: [
    "Custom SaaS Development",
    "Custom Software Engineering Agency",
    "Next.js 15 Migration Services",
    "Sanity Headless CMS Developers",
    "Vercel Enterprise Solutions",
    "SaaS Performance Optimization",
    "Legacy System Modernization",
    "Internal Tool Development",
    "Custom AI Agent Integration",
    "Zelphine Engineering",
    "Zelphine"
  ],
  authors: [{ name: "Zelphine Engineering Team" }],
  creator: "Zelphine",
  metadataBase: new URL('https://zelphine.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, 
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png' }, 
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
  
  appleWebApp: {
    title: "Zelphine",
    statusBarStyle: "default",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zelphine.com",
    title: "Zelphine | We Turn Ideas into Shipping Products",
    description: "Stop using templates. Get a custom platform engineered for growth. We build SaaS, AI Agents, and Internal Tools.",
    siteName: "Zelphine",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Zelphine Digital Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelphine | High-Performance Software",
    description: "Custom SaaS, AI Agents, and Internal Tools. Engineered for scale.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 ${poppins.className} antialiased`}>
         <NextTopLoader color="#9D00FF" showSpinner={false} />
         <Navbar/>
        {children}
        {/* <ChatWidget/> */}
      </body>
    </html>
  );
}