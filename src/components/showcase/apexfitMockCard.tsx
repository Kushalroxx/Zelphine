"use client";
import React from 'react'
import { Badge, Button } from '../ui'
import Link from 'next/link'
import { ArrowRight, CreditCard, Dumbbell, LayoutTemplate } from 'lucide-react'
import ApexFitMock from './apexfitMock'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function ApexFitMockCard() {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp as any}
      className="group flex flex-col lg:flex-row w-full border border-border rounded-3xl md:rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:border-primary/40 transition-all duration-700 bg-card"
    >
      <div className="w-full lg:w-1/2 min-h-[280px] md:min-h-[400px] lg:min-h-[500px] flex">
        <ApexFitMock />
      </div>
      <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
        <Badge variant="secondary" className="w-fit bg-primary/10 text-primary hover:bg-primary/20 uppercase tracking-wider font-bold text-xs py-1.5 px-4 mb-4 md:mb-6">
          <LayoutTemplate className="w-3.5 h-3.5 mr-2 inline-block -mt-0.5" /> Full-Stack Architecture
        </Badge>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 tracking-tight">Complete Fitness Ecosystem</h3>
        <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-balance">
          A premium gym application engineered from the ground up. We built a complete system featuring expansive workout libraries, live scheduling, and a high-converting payment gateway built for a sleek dark-mode aesthetic.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
          <div className="bg-muted/30 border border-border p-4 rounded-xl md:rounded-2xl flex flex-col gap-2">
            <Dumbbell className="w-5 h-5 text-primary" />
            <span className="text-foreground font-bold text-sm md:text-base">Workout Library</span>
            <span className="text-xs text-muted-foreground">Dynamic programs & videos</span>
          </div>
          <div className="bg-muted/30 border border-border p-4 rounded-xl md:rounded-2xl flex flex-col gap-2">
            <CreditCard className="w-5 h-5 text-[#CCFF00]" />
            <span className="text-foreground font-bold text-sm md:text-base">High-Conv Checkout</span>
            <span className="text-xs text-muted-foreground">Intent routing & UPI</span>
          </div>
        </div>

        <Button asChild size="lg" className="rounded-full font-bold px-6 md:px-8 w-fit group/btn">
          <Link href="/showcase/apexfit">
            Explore The App <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}