"use client";
import React from 'react'
import { Badge, Button } from '../ui'
import Link from 'next/link'
import { ArrowRight, Briefcase, Map } from 'lucide-react'
import { motion } from 'framer-motion'
import CareerSathiMock from './careersathiMock'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function CareerSathiMockCard() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp as any}
      className="group flex flex-col lg:flex-row-reverse w-full border border-border rounded-3xl md:rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:border-primary/40 transition-all duration-700 bg-card"
    >

      <div className="w-full lg:w-1/2 min-h-[260px] md:min-h-[400px] lg:min-h-[500px] flex">
        <CareerSathiMock />
      </div>
      
      <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
        <Badge variant="outline" className="w-fit bg-background text-foreground border-primary/20 uppercase tracking-wider font-bold text-xs py-1.5 px-4 mb-4 md:mb-6 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Active Beta
        </Badge>

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 tracking-tight">Career Sathi Platform</h3>
        
        <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-balance">
          An all-in-one AI career acceleration platform. We engineered a seamless ecosystem combining dynamic AI-generated roadmaps, daily task engines, job boards, and real-time 1-on-1 simulations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
          <div className="bg-muted/30 border border-border p-4 rounded-xl md:rounded-2xl flex flex-col gap-2">
            <Map className="w-5 h-5 text-primary" />
            <span className="text-foreground font-bold text-sm md:text-base">Dynamic AI Roadmaps</span>
            <span className="text-xs text-muted-foreground">Personalized learning paths</span>
          </div>
          <div className="bg-muted/30 border border-border p-4 rounded-xl md:rounded-2xl flex flex-col gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-foreground font-bold text-sm md:text-base">Career Simulations</span>
            <span className="text-xs text-muted-foreground">Mock tasks & Job boards</span>
          </div>
        </div>

        <Button asChild variant="outline" size="lg" className="rounded-full font-bold px-6 md:px-8 border-primary/20 hover:bg-primary/5 w-fit group/btn">
          <Link href="https://careersathi.labs.zelphine.com">
            Explore Career Sathi <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}