'use client'; 

import React from 'react';
import PaginationForBlog from '../blogs/paginationForBlog';
import { SanityDocument } from 'next-sanity';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import LuminaMock from '../showcase/luminaMock';
import AegisAIMock from '../showcase/aegisAIMock';
import CareerSathiMock from '../showcase/careersathiMock';
import HireWiseMock from '../showcase/hireWiseMock';
import { useRouter } from 'nextjs-toploader/app';

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

export default function AllCaseStudies({ 
  posts, 
  totalCount, 
  page 
}: { 
  posts?: SanityDocument[]; 
  totalCount: number; 
  page: number;
}) {
  
  const hasPosts = posts && posts.length > 0;
  const router = useRouter();
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 md:pt-28  relative overflow-hidden">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 -z-10"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
               <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <span className="h-px w-8 bg-primary"></span>
                  <h5 className="text-primary font-bold tracking-widest uppercase text-[10px]">
                    Engineering Portfolio
                  </h5>
               </div>
              <h1 className="text-[36px] md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mb-4 md:mb-6 leading-[1.1]">
                Architected for <span className="text-primary">Scale.</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
                Explore our selected works. A collection of high-performance web platforms, custom AI pipelines, and data-driven systems built for real-world impact.
              </p>
            </motion.div>
          </div>

          {/* Right Bento Grid */}
          <div className="hidden lg:grid lg:col-span-5 grid-cols-2 gap-4">
             <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-2 bg-card/60 backdrop-blur-sm border border-border p-6 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors"
             >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Production-Grade</h4>
                  <p className="text-sm text-muted-foreground">Every system is engineered for high availability, security, and long-term maintainability.</p>
                </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card/60 backdrop-blur-sm border border-border p-6 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors flex flex-col justify-between"
             >
                <Terminal className="w-6 h-6 text-foreground mb-6 opacity-70 group-hover:text-primary transition-colors" />
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">Modern Stack</h4>
                </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card/60 backdrop-blur-sm border border-border p-6 rounded-3xl relative overflow-hidden group hover:border-emerald-500/50 transition-colors flex flex-col justify-between"
             >
                <Sparkles className="w-6 h-6 text-foreground mb-6 opacity-70 group-hover:text-emerald-500 transition-colors" />
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">AI Native</h4>
                </div>
             </motion.div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Asymmetric Grid */}
      <section className="container mx-auto px-6 py-20 mb-12">
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          
          {showcaseItems.map((item, index) => {
            const isReverse = index % 2 === 1;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col gap-10 md:gap-14 lg:gap-20 items-center cursor-pointer ${
                  isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
                // onClick={() => router.push(item.link)} // Re-enable your router push here
              >
                
                {/* Visual / Mockup Container */}
                <div className="w-full lg:w-[60%] aspect-[16/10] md:aspect-[16/9] lg:aspect-[4/3] rounded-3xl md:rounded-[2.5rem] overflow-hidden relative flex items-center justify-center border border-border bg-card shadow-sm group-hover:border-primary/40 group-hover:shadow-[0_0_50px_-20px_hsl(var(--primary))] transition-all duration-700">
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  
                  <div className="w-full h-full relative z-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                    {item.visual}
                  </div>
                </div>
    
                {/* Text Content Container */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center">
    
                  <div className="flex items-center gap-4 mb-5 md:mb-6">
                    <span className="text-sm font-bold text-muted-foreground">{item.id}</span>
                    <div className="h-px w-12 bg-border"></div>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
    
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-4 group-hover:text-primary transition-colors duration-300 leading-[1.1]">
                    {item.name}
                  </h3>
    
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${item.badgeColor || 'border-border text-foreground bg-muted/50'}`}>
                      {item.badge}
                    </span>
                  </div>
    
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md">
                    {item.description}
                  </p>
    
                  {/* Technical Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-10 max-w-md">
                      {item.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-3 py-1.5 rounded-md bg-muted/50 border border-border text-foreground text-[11px] font-bold tracking-wide group-hover:border-primary/30 transition-colors"
                        >
                          <svg className="w-3 h-3 mr-1.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
    
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-foreground group-hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1 w-fit">
                    Read Architecture
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
    
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Pagination (If applicable) */}
      {totalCount > 1 && hasPosts && (
        <div className="container mx-auto px-6 py-12 border-t border-border">
          {/* <PaginationForBlog page={page} noOfPages={totalCount} basePath="/case-studies" /> */}
        </div>
      )}
    </main>
  );
}