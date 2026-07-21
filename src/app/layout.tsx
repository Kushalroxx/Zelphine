import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import Navbar from "@/components/sections/navbar";
import ChatWidget from "@/components/chatbot/chatWidget";
import Script from "next/script";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zelphine.com"),

  title: {
    default:
      "Zelphine | Custom Software Development Company | AI, SaaS & Web Applications",
    template: "%s | Zelphine",
  },

  description:
    "Zelphine is a custom software development company building AI applications, SaaS platforms, internal business tools, APIs, and modern web applications. We engineer scalable software with Next.js, React, Node.js, TypeScript, PostgreSQL, and cloud infrastructure.",

  applicationName: "Zelphine",

  keywords: [
    "custom software development",
    "software development company",
    "custom software company",
    "AI development company",
    "AI application development",
    "AI software development",
    "AI automation",
    "SaaS development",
    "SaaS development company",
    "web application development",
    "custom web application",
    "full stack development",
    "Next.js development",
    "React development",
    "TypeScript development",
    "Node.js development",
    "backend development",
    "API development",
    "internal tools development",
    "business automation software",
    "workflow automation",
    "database application development",
    "dashboard development",
    "enterprise software",
    "startup MVP development",
    "software engineering agency",
    "product engineering",
    "cloud application development",
    "PostgreSQL development",
    "Zelphine",
  ],

  authors: [
    {
      name: "Zelphine",
      url: "https://zelphine.com",
    },
  ],

  creator: "Zelphine",

  publisher: "Zelphine",

  category: "Technology",

  alternates: {
    canonical: "https://zelphine.com",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon0.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icon1.png",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-icon.png",
      },
    ],
  },

  appleWebApp: {
    capable: true,
    title: "Zelphine",
    statusBarStyle: "default",
  },

  openGraph: {
    type: "website",
    url: "https://zelphine.com",
    locale: "en_US",

    siteName: "Zelphine",

    title:
      "Custom Software Development Company | AI, SaaS & Web Applications",

    description:
      "We build custom software, AI applications, SaaS products, dashboards, APIs, internal business tools, and scalable web platforms engineered for performance and growth.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zelphine - Custom Software Development Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Zelphine | Custom Software Development Company",

    description:
      "AI applications, SaaS products, business automation, APIs, internal tools, and modern web applications engineered for scale.",

    images: ["/og-image.png"],

    creator: "@zelphine",
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  other: {
    "ai-purpose":
      "Custom software development, AI engineering, SaaS development, business automation, web application development",

    "business-type":
      "Software Development Company",

    "coverage":
      "Worldwide",

    "target-audience":
      "Businesses, Startups, Enterprises",

    "software-services":
      "AI Applications, SaaS Platforms, Internal Tools, APIs, Dashboards, Automation Systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 ${poppins.className} antialiased selection:!bg-primary selection:text-white`}>
        <NextTopLoader color="#9D00FF" showSpinner={false} />
        <Navbar />
        {children}
        <ChatWidget />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-48XY6THQD4"></Script>
        <Script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-48XY6THQD4');
  `}
        </Script>
        <Script type="text/javascript">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xq2qwp73ub");
      `}
        </Script>
      </body>
    </html>
  );
}