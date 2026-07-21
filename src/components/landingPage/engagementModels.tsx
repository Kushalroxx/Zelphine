"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Blocks, Laptop, Repeat, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react'
import { useRouter } from 'nextjs-toploader/app'

const models = [
  {
    id: "improve",
    icon: Blocks,
    name: "Improve an Existing Product",
    idealFor:
      "Already have a website, SaaS, e-commerce store, or internal tool? We help you add new features, improve performance, modernize your stack, and integrate new technologies without rebuilding everything.",
    questions: [
      "Need new features or modules?",
      "Want AI integrated into your product?",
      "Need faster performance or bug fixes?",
      "Working with AI-assisted product that needs refactoring?",
      "Need payment, API, or third-party integrations?"
    ],
    buttonText: "Improve My Product",
    highlighted: false
  },
  {
    id: "build",
    icon: Laptop,
    name: "Build a New Product",
    idealFor:
      "Starting from an idea? We design, build, deploy, and scale custom software—from business websites and e-commerce stores to SaaS platforms, AI applications, and internal business systems.",
    questions: [
      "Need a business website or landing page?",
      "Building an e-commerce store or marketplace?",
      "Launching a SaaS or MVP?",
      "Need an AI-powered application or automation?",
      "Building a custom platform for your business?"
    ],
    buttonText: "Build My Product",
    highlighted: true
  },
  {
    id: "partner",
    icon: Repeat,
    name: "Dedicated Engineering Partner",
    idealFor:
      "Need a reliable long-term engineering team? We continuously ship features, improve architecture, maintain infrastructure, and help your product scale as your business grows.",
    questions: [
      "Need ongoing feature development?",
      "Need architecture and technical guidance?",
      "Need continuous product improvements?",
      "Need infrastructure, monitoring, and maintenance?",
      "Need an engineering team without hiring full-time?"
    ],
    buttonText: "Become a Partner",
    highlighted: false
  }
];

const typicalInvestments = [
  {
    name: "Engineering Sprint",
    price: "From ₹10k",
    timeline: "3–7 Days"
  },
  {
    name: "Business Website",
    price: "From ₹20k",
    timeline: "1–2 Weeks"
  },
  {
    name: "SaaS MVP",
    price: "From ₹60k",
    timeline: "6–12 Weeks"
  },
    {
    name: "AI Application",
    price: "From ₹80k",
    timeline: "6–12 Weeks"
  },
  {
    name: "Enterprise Software",
    price: "Custom Quote",
    timeline: "Depends on Scope"
  }
];

const includedFeatures = [
  "Responsive Mobile-First Development",
  "Modern UI & User Experience",
  "Secure Authentication & Authorization",
  "REST API & Third-Party Integrations",
  "Database Design & Optimization",
  "Cloud Deployment & Hosting",
  "Performance Optimization",
  "Technical SEO Foundation",
  "Analytics & User Tracking",
  "Production-Ready Architecture",
  "Scalable & Maintainable Codebase",
  "Source Code Ownership"
];
export default function EngagementModels() {
  const router = useRouter();

  return (
    <section id="engagement-models" className="py-24 md:py-32 w-full max-w-[1200px] mx-auto relative z-10">
      
      {/* 1. SECTION HEADER */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
          How We Work Together
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
          Choose How We <br className="hidden sm:block"/>
          <span className="text-primary">Collaborate.</span>
        </h2>
        <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed">
          We don't sell rigid packages. We adapt our engineering workflow to where your business is right now—whether you're optimizing an existing app or building from zero.
        </p>
      </div>

      {/* 2. THREE CORE ENGAGEMENT CARDS (Zero Pricing/Timelines) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-24">
        {models.map((model, index) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`flex flex-col h-full rounded-3xl p-8 relative overflow-hidden transition-all duration-300 ${
              model.highlighted 
                ? 'bg-slate-900 text-white shadow-2xl shadow-primary/20 md:-translate-y-2 border border-white/10' 
                : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30'
            }`}
          >
            {model.highlighted && (
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            )}

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  model.highlighted ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-slate-100 text-slate-600'
                }`}>
                  <model.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">{model.name}</h3>
                <p className={`text-sm leading-relaxed font-medium ${model.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                  {model.idealFor}
                </p>
              </div>

              {/* Question Prompts */}
              <div className="my-6 py-6 border-y border-current/10 flex-grow">
                <ul className="space-y-3.5">
                  {model.questions.map((q, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${model.highlighted ? 'bg-primary' : 'bg-primary'}`} />
                      <span className={`text-sm sm:text-base font-semibold ${model.highlighted ? 'text-slate-200' : 'text-slate-700'}`}>
                        {q}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => router.push('/contact')}
                className={`w-full py-4 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 mt-auto flex items-center justify-center gap-2 group ${
                  model.highlighted 
                    ? 'bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(var(--primary),0.4)]' 
                    : 'bg-slate-100 hover:bg-primary/10 text-slate-900 hover:text-primary'
                }`}
              >
                <span>{model.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. TYPICAL PROJECT INVESTMENTS (Setting Financial Expectations) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-10"
      >
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-2">
            Typical Project Investments
          </h3>
          <p className="text-sm sm:text-base text-slate-500">
            Every project is unique, but these typical starting budgets help you understand the level of investment before requesting a custom proposal.
          </p>
        </div>

        {/* 5-Column Responsive Pricing Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {typicalInvestments.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-center items-center text-center transition-all hover:border-primary/40 hover:shadow-md ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{item.name}</span>
              <span className='text-[10px] text-slate-500'>{item.timeline}</span>
              <span className="text-base sm:text-lg md:text-xl font-black text-slate-900 tracking-tight">{item.price}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs sm:text-sm text-slate-400 font-medium max-w-2xl mx-auto">
          * Final pricing depends on specific functional requirements, third-party API integrations, data complexity, timeline urgency, and cloud infrastructure scale.
        </p>
      </motion.div>

      {/* 4. WHAT'S INCLUDED (Universal Deliverables Grid) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center max-w-xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-3">
            What's Included in Every Build
          </h3>
          <p className="text-slate-500 text-sm sm:text-base">
            Regardless of the engagement model, we engineer every product to enterprise-grade standards from day one.
          </p>
        </div>

        {/* 12-Item Scannable Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {includedFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-primary/30 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-bold text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 5. CUSTOM ENGAGEMENT FALLBACK */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-slate-900 via-[#111115] to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 relative z-10">
           <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary shrink-0 border border-white/10">
              <MessageSquare className="w-6 h-6 text-white" />
           </div>
           <div>
              <h4 className="text-xl font-bold text-white mb-1.5">Not sure where to start?</h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Whether you're improving an existing product, building something completely new, or simply exploring ideas—we'll help you architect the best technical approach and estimate the exact investment.
              </p>
           </div>
        </div>

        <button 
          onClick={() => router.push('/contact')} 
          className=" px-5 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap shadow-[0_0_25px_rgba(var(--primary),0.5)] relative z-10 flex items-center justify-center gap-2 group"
        >
           <span>Let's Discuss Your Project</span>
           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

    </section>
  )
}