import Contact from '@/components/contactUs/contact'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Start Your Build | Zelphine Engineering",
  description: "Ready to move beyond templates? Schedule a technical consultation. We build custom SaaS platforms, AI Agents, and Internal Tools for high-growth businesses.",
  openGraph: {
    title: "Let's Engineer Your Vision | Zelphine",
    description: "Skip the sales fluff. Talk directly to a Lead Architect about your project requirements, budget, and timeline.",
    url: "https://zelphine.com/contactus",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Start Your Project with Zelphine",
      },
    ],
  },
};
export default function page() {
  return (
    <div>
      <Contact/>
    </div>
  )
}
