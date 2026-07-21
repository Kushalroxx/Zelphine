import PricingPage from '@/components/pricing/pricingPage';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Software Development Pricing | Custom SaaS, AI & Web Development Costs | Zelphine",

  description:
    "Explore transparent pricing for custom software development, AI applications, SaaS platforms, websites, e-commerce, maintenance, and engineering services. View project estimates, timelines, and what's included with every engagement.",

  keywords: [
    "Software Development Pricing",
    "Custom Software Development Cost",
    "Web Development Pricing",
    "AI Development Cost",
    "SaaS Development Cost",
    "Custom Website Pricing",
    "E-commerce Development Cost",
    "Software Development Packages",
    "Application Development Pricing",
    "Engineering Services",
    "AI Chatbot Development Cost",
    "Maintenance Plans",
    "Technical Consultation",
    "Startup MVP Development",
    "Zelphine Pricing"
  ],

  alternates: {
    canonical: "https://zelphine.com/pricing",
  },

  openGraph: {
    title: "Custom Software Development Pricing | Zelphine",

    description:
      "View pricing for websites, SaaS platforms, AI applications, e-commerce systems, engineering retainers, and custom software projects. Transparent estimates with no hidden costs.",

    url: "https://zelphine.com/pricing",

    type: "website",

    siteName: "Zelphine",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zelphine Software Development Pricing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Software Development Pricing | Zelphine",

    description:
      "Transparent pricing for custom software, SaaS, AI applications, websites, and engineering services.",

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

  category: "Software Development",
};

export default function page() {
  return <PricingPage />
};