"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui'
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'nextjs-toploader/app';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function ShowCaseHero() {
  const router = useRouter();
  
  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-7xl mx-auto flex items-center">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" 
        />
        <motion.div 
          animate={{ y: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-[0%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px]" 
        />
      </div>

      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer}
        className="max-w-3xl relative z-10"
      >
        <motion.div variants={fadeUp as any} className="mb-4 md:mb-6 text-blue-600 text-xs font-bold uppercase tracking-widest">
          Product Studio
        </motion.div>
        <motion.h1 variants={fadeUp as any} className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-4 md:mb-6 leading-[1.05] text-balance">
          We build powerful <span className="text-primary">digital platforms.</span>
        </motion.h1>
        <motion.p variants={fadeUp as any} className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-snug font-medium max-w-2xl text-balance mb-8 md:mb-10">
          Explore real products we've designed and engineered, from high-converting SaaS platforms to complex AI digital ecosystems.
        </motion.p>
        <motion.div variants={fadeUp as any} className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <Button 
            onClick={() => router.push('/contactus')} 
            size="lg" 
            className="rounded-full font-bold px-6 md:px-8 py-6 sm:py-7 text-sm md:text-base shadow-xl shadow-primary/20 hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            Start a Project <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </Button>
          <Button 
            onClick={() => router.push('/#services')} 
            variant="outline" 
            size="lg" 
            className="rounded-full font-bold px-6 md:px-8 py-6 sm:py-7 text-sm md:text-base border-border bg-background/50 backdrop-blur-sm hover:bg-muted/50 w-full sm:w-auto"
          >
            Our Capabilities
          </Button>
        </motion.div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-72 space-y-4 pointer-events-none"
      >
        <div className="bg-card border border-border shadow-2xl rounded-2xl p-4 transform rotate-6 animate-pulse-slow">
          <div className="h-2 w-1/3 bg-primary/20 rounded mb-4"></div>
          <div className="h-8 w-full bg-muted rounded-md mb-2"></div>
          <div className="h-8 w-full bg-muted rounded-md"></div>
        </div>
        <div className="bg-card border border-border shadow-2xl rounded-2xl p-4 transform -rotate-3 -translate-x-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20"></div>
            <div className="h-2 w-24 bg-muted-foreground/30 rounded"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}