import Contact from '@/components/contactUs/contact'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact Zelphine | Request a Software Development Consultation",

  description:
    "Discuss your project with Zelphine. Get a consultation for custom software development, SaaS platforms, AI applications, internal business tools, and scalable web solutions. Request a proposal tailored to your requirements.",

  keywords: [
    "Contact Zelphine",
    "Software Development Consultation",
    "Request Software Quote",
    "Hire Software Developers",
    "Custom Software Company",
    "SaaS Development Consultation",
    "AI Development Consultation",
    "Next.js Development Agency",
    "Business Software Development",
    "Internal Tool Development",
    "Software Engineering Services",
    "Technical Consultation"
  ],

  alternates: {
    canonical: "https://zelphine.com/contactus",
  },

  openGraph: {
    title: "Contact Zelphine | Let's Build Your Software Project",

    description:
      "Speak directly with our engineering team about your software project. From SaaS platforms and AI applications to internal tools and custom web systems, we'll help define the right technical solution.",

    url: "https://zelphine.com/contactus",

    type: "website",

    siteName: "Zelphine",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Zelphine Software Engineering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact Zelphine",

    description:
      "Request a consultation for custom software, SaaS platforms, AI applications, and scalable business systems.",

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
    <div>
      <Contact/>
    </div>
  )
}
