import About from '@/components/aboutus/about'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About Zelphine | Custom Software, SaaS & AI Engineering Team",

  description:
    "Learn about Zelphine, a software engineering company building custom SaaS platforms, AI applications, internal business tools, and scalable web systems for startups and growing businesses.",

  keywords: [
    "About Zelphine",
    "Software Engineering Company",
    "Custom Software Development Company",
    "AI Development Company",
    "SaaS Development Company",
    "Next.js Development Agency",
    "Full Stack Development",
    "Software Architects",
    "AI Engineers",
    "Startup Technology Partner",
    "Custom Web Applications",
    "Engineering Team"
  ],

  alternates: {
    canonical: "https://zelphine.com/about",
  },

  openGraph: {
    title: "About Zelphine | Software Engineers Building Scalable Digital Products",

    description:
      "Meet the team behind Zelphine. We design and engineer custom SaaS platforms, AI applications, internal tools, and scalable software systems with a focus on long-term maintainability and business impact.",

    url: "https://zelphine.com/about",

    type: "website",

    siteName: "Zelphine",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Zelphine Engineering Team",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About Zelphine",

    description:
      "Custom software engineers building SaaS platforms, AI applications, and modern business systems.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Software Engineering",
};

export default function page() {
    return (
      <div className=''>
        <About/>
      </div>
    )
}
