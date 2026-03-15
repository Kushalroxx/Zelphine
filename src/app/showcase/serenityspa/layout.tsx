import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Serenity Spa & Beauty | Showcase",
  description: "A premium luxury wellness platform engineered with smart appointment flows, membership tiers, interactive service cards, and an emotion-first brand experience.",
  openGraph: {
    title: "Serenity Spa & Beauty | Zelphine Studio",
    description: "A premium luxury wellness platform engineered by Zelphine.",
    images: ["https://res.cloudinary.com/dkt2qqq78/image/upload/v1773558365/Screenshot_2026-03-15_122910_dkez3j.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenity Spa & Beauty | Zelphine Studio",
    description: "A premium luxury wellness platform engineered by Zelphine.",
    images: ["https://res.cloudinary.com/dkt2qqq78/image/upload/v1773558365/Screenshot_2026-03-15_122910_dkez3j.png"],
  }
}

export default function layout({children}:{children: React.ReactNode}) {
  return (
    <div>
      
      {children}
    </div>
  )
}
