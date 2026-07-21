"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'nextjs-toploader/app'
import CareerSathiMock from '../showcase/careersathiMock'
import ApexFitMock from '../showcase/apexfitMock'
import SerenitySpasMock from '../showcase/serenitySpaMock'
import LuminaMock from '../showcase/luminaMock'
import HireWiseMock from '../showcase/hireWiseMock'
import AegisAIMock from '../showcase/aegisAIMock'

const showcaseItems = [
  {
    id: "01",
    name: "CareerSathi AI",
    category: "AI-Powered Career Guidance Platform",

    badge: "Google GenAI Top 10",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",

    description:
      "An AI-powered career platform that generates personalized learning roadmaps, career plans, and skill recommendations based on each student's goals, interests, and academic profile.",

    highlights: [
      "AI Career Roadmaps",
      "Personalized Recommendations",
      "Secure Full-Stack Platform",
      "Scalable AI Workflows"
    ],

    visual: <CareerSathiMock />,
    link: "/case-studies/careersathi",
  },

  {
    id: "02",
    name: "HireWise Pipeline",
    category: "AI Candidate Discovery & Ranking",

    badge: "AI Ranking Engine",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",

    description:
      "An AI recruitment pipeline engineered to rank candidates across 100k+ resumes using semantic search, embeddings, skill taxonomy, and explainable scoring instead of traditional keyword matching.",

    highlights: [
      "100K+ Resume Processing",
      "Embedding-Based Ranking",
      "Semantic Skill Matching",
      "Explainable AI Scoring"
    ],

    visual: <HireWiseMock />,
    link: "/case-studies/hirewise",
  },

  {
    id: "03",
    name: "Aegis AI",
    category: "Responsible AI Governance Platform",

    badge: "AI Safety Platform",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",

    description:
      "A platform that audits AI datasets, detects bias, applies safety guardrails, and monitors AI interactions to help organizations build secure and trustworthy AI systems.",

    highlights: [
      "Dataset Auditing",
      "Bias Detection",
      "AI Safety Guardrails",
      "Compliance Monitoring"
    ],

    visual: <AegisAIMock />,
    link: "/case-studies/aegis-ai",
  },

  // {
  //   id: "04",
  //   name: "Lumina",
  //   category: "AI-Powered Learning Platform",

  //   badge: "Vertex AI Integration",
  //   badgeColor: "bg-amber-100 text-amber-700 border-amber-200",

  //   description:
  //     "An AI-powered education platform that transforms traditional learning material into interactive visual experiences using Google Vertex AI, making complex concepts easier to understand.",

  //   highlights: [
  //     "Vertex AI Integration",
  //     "Interactive Learning",
  //     "Visual Content Generation",
  //     "Accessible Education"
  //   ],

  //   visual: <LuminaMock />,
  //   link: "/case-studies/lumina",
  // }
];

export default function LandingShowcaseTeaser() {
  const router = useRouter();

  return (
    <section id="" className="py-16 md:py-24 w-full max-w-7xl mx-auto lg:px-6 relative z-10">
      <div className="mb-12 md:mb-24">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold uppercase tracking-widest mb-4">
          Engineering Case Studies
        </div>
        <div className='flex justify-between items-end mb-4 md:mb-6'>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-[#0a0a0a]">
            Real Systems. Real <span className="text-primary">Engineering.</span>
          </h2>
          <button
            onClick={() => router.push('/showcase')}
            className="group hidden md:flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <p className='text-muted-foreground text-base md:text-lg lg:text-xl font-medium leading-relaxed  text-'>Every system below was built to solve a real engineering problem — from AI-powered education to high-volume candidate ranking. Each case study explains the architecture, engineering decisions, trade-offs, and lessons behind the implementation.</p>

      </div>
      <div className="space-y-16 md:space-y-32">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`group flex flex-col gap-8 md:gap-12 lg:gap-20 items-center cursor-pointer ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
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

              {/* Reduced bottom margin here to pull highlights closer to the context */}
              <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-5 max-w-md">
                {item.description}
              </p>

              {/* TECHNICAL HIGHLIGHTS INJECTED HERE */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8 md:mb-10 max-w-md">
                  {item.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-600 text-[11px] font-semibold tracking-wide group-hover:border-primary/30 transition-colors"
                    >
                      <svg className="w-3 h-3 mr-1.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </span>
                  ))}
                </div>
              )}

              <div className="inline-flex items-center gap-3 text-sm font-bold text-[#0a0a0a] group-hover:text-primary transition-colors">
                <span className="relative pb-1">
                  Explore Case Study
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