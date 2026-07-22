"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { BrainCircuit, Server, LayoutTemplate } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.15 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const capabilities = [
  {
    id: "01",
    icon: <BrainCircuit className="text-primary w-5 h-5 md:w-6 md:h-6" />,
    title: "AI Engineering",
    description:
      "We build AI-powered products that automate workflows, retrieve knowledge, analyze documents, and help businesses make better decisions using modern machine learning and LLM technologies.",

    outcomes: [
      "AI Agents",
      "Retrieval-Augmented Generation",
      "Machine Learning Solutions",
      "Computer Vision",
      "Semantic Search",
      "Workflow Automation"
    ]
  },

  {
    id: "02",
    icon: <Server className="text-primary w-5 h-5 md:w-6 md:h-6" />,
    title: "Full-Stack Engineering",
    description:
      "We engineer secure, scalable web platforms with modern backend architecture, cloud infrastructure, and maintainable codebases that grow from MVPs to enterprise-scale products.",

    outcomes: [
      "Custom SaaS Platforms",
      "Secure REST APIs",
      "Authentication & Authorization",
      "Database Architecture",
      "Cloud Deployment",
      "Payment Integration"
    ]
  },

  {
    id: "03",
    icon: <LayoutTemplate className="text-primary w-5 h-5 md:w-6 md:h-6" />,
    title: "Product Experience",
    description:
      "We craft fast, accessible, and responsive user experiences with modern frontend architecture, ensuring every interaction feels smooth, intuitive, and performance-focused.",

    outcomes: [
      "Responsive UI",
      "Next.js & React",
      "Type-Safe Development",
      "Performance Optimization",
      "Motion & Micro-Interactions",
      "Technical SEO"
    ]
  }
];

export default function ServicesSection() {
  return (
    <div id='capabilities' className='w-full max-w-6xl mx-auto md:px-6 pb-16 pt-16 md:pt-24'>
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className='flex flex-col items-center mb-12 md:mb-20 text-center'
      >
        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6'>
          Engineering Capabilities
        </div>
        <h2 className='text-foreground text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6'>
          Engineering That Scales <br className="hidden sm:block"/>
          <span className="text-primary">With Your Business.    </span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          We design and build production-ready software — from modern SaaS platforms and AI-powered applications to high-performance web experiences. Every solution is engineered for reliability, scalability, and long-term growth.
        </p>
      </motion.div>

      {/* Interconnected Grid */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className='grid grid-cols-1 md:grid-cols-3 rounded-3xl md:rounded-[2rem] border border-border/60 bg-card/20 backdrop-blur-md overflow-hidden shadow-sm'>
          {capabilities.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`group relative flex flex-col p-6 sm:p-8 md:p-10 hover:bg-card/60 transition-colors duration-500 ${
                index !== 2 ? 'border-b md:border-b-0 md:border-r border-border/50' : ''
              }`}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col flex-1 gap-4 md:gap-5">
                
                {/* Animated Icon Box */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-background/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.description}</p>
                </div>

                {/* Outcomes Checklist (Pushed to bottom) */}
                <div className="mt-auto pt-6 border-t border-border/40 flex flex-col gap-2.5">
                  {item.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-semibold text-foreground/80 tracking-wide group-hover:text-foreground transition-colors">{outcome}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}