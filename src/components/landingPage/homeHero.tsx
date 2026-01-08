import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui'
import { useRouter } from 'nextjs-toploader/app';

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
      <div className='relative overflow-hidden h-full flex items-center justify-center pt-8'>
        <motion.section
          className="relative flex flex-col justify-center items-center z-10 text-center px-4 pt-16 md:pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col justify-center items-center"
            variants={itemVariants}
          >
            <div id="title" className="max-w-5xl">
              <div className="flex justify-center mb-2 animate-fade-in-up">
  <a 
    href="https://careersathi.labs.zelphine.com" 
    target="_blank"
    className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-purple-300 hover:shadow-[0_4px_12px_rgba(168,85,247,0.15)] transition-all duration-300"
  >
    {/* The Pulsing Dot (Live Status) */}
    <span className="relative z-[50] flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
    </span>

    {/* The Text */}
    <span className="text-xs font-medium text-slate-600 group-hover:text-slate-900">
      New Venture: <span className="font-bold text-slate-900 group-hover:text-purple-700">CareerSathi</span>
    </span>

    {/* The Arrow */}
    <svg className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </a>
</div>
              <h1 className="text-[29px] md:text-6xl lg:text-7xl font-bold tracking-tight md:leading-[1.01] leading-[1.2] text-foreground">
               <span className="text-primary">Product-Grade</span> Engineering <br />That Delivers Outcomes
              </h1>
            </div>
            <div
              className="mt-6 md:mt-10 max-w-2xl"
            >
              <p className=" text-base md:text-lg lg:text-xl text-muted-foreground">
              We design and build scalable Web & AI systems — and push back when it matters, so you don’t burn time, money, or momentum.

              </p>
            </div>
            <div
              className="flex flex-col justify-center sm:flex-row gap-3  md:gap-6 pt-6 md:pt-10"
            >
              <Button
                onClick={() => router.push("/contactus")}
                className="h-12 px-8 text-xs md:text-base font-semibold text-primary-foreground  shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105
                           bg-primary hover:shadow-xl"
              >
                Speak With an Engineer

              </Button>
              <Button
                onClick={() => router.push("/case-studies")}
                className="h-12 px-8 text-xs md:text-base font-semibold bg-card text-card-foreground border border-border/50 sm:border-border shadow-sm
                           hover:bg-muted transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                See Real Case Studies
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}