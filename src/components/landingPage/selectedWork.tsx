"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'nextjs-toploader/app'
import CareerSathiMock from '../showcase/careersathiMock'
import ApexFitMock from '../showcase/apexfitMock'
import SerenitySpasMock from '../showcase/serenityspaMock'

const showcaseItems = [
  {
    id: "01",
    name: "Career Sathi",
    category: "EdTech & AI",
    badge: "Studio App", 
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    description: "We transformed complex career data into an intuitive, AI-driven platform that generates personalized, animated roadmaps for students.",
    visual: <CareerSathiMock />,
    link: "https://careersathi.labs.zelphine.com"
  },
  {
    id: "02",
    name: "ApexFit",
    category: "Health & FinTech",
    badge: "Studio Concept", 
    badgeColor: "bg-zinc-100 text-zinc-700 border-zinc-200",
    description: "A comprehensive fitness application engineered from the ground up to demonstrate high-converting SaaS architecture and seamless payment integrations.",
    visual: <ApexFitMock />,
    link: "/showcase/apexfit"
  },
  {
    id: "03",
    name: "Serenity Spa",
    category: "Wellness & Beauty",
    badge: "Studio Concept", 
    badgeColor: "bg-[#F5EDE6] text-[#C6A75E] border-[rgba(198,167,94,0.3)]",
    description: "A premium luxury wellness platform engineered with smart appointment flows, membership tiers, interactive service cards, and an emotion-first brand experience.",
    visual: <SerenitySpasMock />,
    link: "/showcase/serenityspa"
  }
];

export default function LandingShowcaseTeaser() {
  const router = useRouter();

  return (
    <section id="showcase" className="py-16 md:py-24 w-full max-w-[1200px] mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-[10px] font-bold uppercase tracking-widest mb-4 border border-zinc-200">
            Product Studio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-[#0a0a0a]">
            Digital <span className="text-primary">Showcase.</span>
          </h2>
        </div>
        <button
          onClick={() => router.push('/showcase')}
          className="group flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
        >
          View full studio
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="space-y-16 md:space-y-32">
        {showcaseItems.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
            className={`group flex flex-col gap-8 md:gap-12 lg:gap-20 items-center cursor-pointer ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
            onClick={() => router.push(item.link)}
          >
            <div className="w-full lg:w-[60%] aspect-square md:aspect-[4/3] rounded-3xl md:rounded-[2rem] overflow-hidden relative flex items-center justify-center shadow-sm group-hover:shadow-2xl transition-all duration-700">
              {item.visual}
            </div>

            <div className="w-full lg:w-[40%] flex flex-col justify-center">
              
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <span className="text-sm font-bold text-gray-400">{item.id}</span>
                <div className="h-px w-12 bg-gray-200"></div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-500">
                  {item.category}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a0a0a] tracking-tight mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                {item.name}
              </h3>

              <div className="mb-4 md:mb-6">
                <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-md">
                {item.description}
              </p>

              <div className="inline-flex items-center gap-3 text-sm font-bold text-[#0a0a0a] group-hover:text-primary transition-colors">
                <span className="relative pb-1">
                  Explore {item.badge === "Studio Concept" ? "Concept" : "Project"}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}