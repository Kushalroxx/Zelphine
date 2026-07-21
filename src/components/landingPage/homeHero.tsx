import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui'
import { useRouter } from 'nextjs-toploader/app';
import Link from 'next/link';

const expertiseBadges = [
  "Modern Technology",
  "AI Data Pipelines",
  "Cloud Deployment",
  "Transparent Pricing",
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut"
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HomeHero() {
  const router = useRouter();

  return (
    <>
      <div className='relative h-full flex items-center justify-center'>
        <motion.section
          className="relative flex flex-col justify-center items-center z-10 text-center px-4 pt-8 md:pt-28 mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col justify-center items-center"
            variants={itemVariants}
          >
            <div id="title" className="max-w-6xl">
              <div className="flex justify-center mb-4 md:mb-6 animate-fade-in-up">
                <Link 
                  href="/pricing" 
                  className="group relative inline-flex items-center gap-2 px-2 md:px-4 py-1 md:py-1.5 rounded-full bg-white border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-purple-300 hover:shadow-[0_4px_12px_rgba(168,85,247,0.15)] transition-all duration-300"
                >
                  <span className="relative z-[50] flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                  </span>

                  <span className="text-[9px] md:text-xs font-medium text-slate-600 group-hover:text-slate-900">
                    <span className="font-bold text-slate-900 group-hover:text-purple-700"> Engineering Sprints Start at ₹ 15,000 </span>
                  </span>

                  <svg className="h-3 w-3 md:w-4 md:h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <h1 className="text-[36px] md:text-6xl lg:text-7xl font-bold tracking-tight md:leading-[1.01] leading-[1.15] text-foreground">
               <span className="text-primary">Engineering</span> Modern<br /> Web Platforms & AI Systems 
              </h1>
            </div>
            <div className="mt-6 md:mt-8 max-w-[52rem]">
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We engineer custom SaaS platforms, AI applications, and secure production backends. If a feature won't create value, we'll tell you before you spend money.
              </p>
            </div>
            <div className="flex flex-col justify-center sm:flex-row gap-4 md:gap-6 pt-8 md:pt-10 w-full">
              <Button
                onClick={() => router.push("/contactus")}
                className="h-12 px-8 text-xs md:text-base font-semibold text-primary-foreground shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 bg-primary hover:shadow-xl rounded-md"
              >
                Speak With an Engineer
              </Button>
              <Button
                onClick={() => router.push("/showcase")}
                className="h-12 px-8 text-xs md:text-base font-semibold bg-card text-card-foreground border border-border/50 sm:border-border shadow-sm hover:bg-muted transform transition-all duration-300 ease-in-out hover:scale-105 rounded-md"
              >
                Explore Case Studies
              </Button>
            </div>
            

<div className="mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-2.5 w-full max-w-4xl mx-auto px-4">
  {expertiseBadges.map((badge) => (
    <div
      key={badge}
      className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-[9px] md:text-sm font-semibold text-neutral-900 shadow-sm transition-colors"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
      {badge}
    </div>
  ))}
</div>
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}