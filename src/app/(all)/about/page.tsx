import About from '@/components/aboutus/about'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Our Engineering DNA | Zelphine",
  description: "Meet the architects behind the code. We are a specialized team building high-performance SaaS platforms, AI agents, and scalable infrastructure, not just websites.",
  openGraph: {
    title: "Zelphine | Built by Engineers, Not Marketers",
    description: "We don't outsource. We don't use templates. See how our team combines systems architecture with modern design to solve complex business problems.",
    url: "https://zelphine.com/about",
    type: "profile", 
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "The Zelphine Engineering Team",
      },
    ],
  },
};
export default function page() {
    return (
      <div className=''>
        <About/>
      </div>
    )
}
