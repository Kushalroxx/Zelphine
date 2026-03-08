"use client"
import React from 'react'
import { Button } from '../ui' 
import Link from 'next/link'
import { useRouter } from 'nextjs-toploader/app' 
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
export default function ServiceCTA() {
  const router = useRouter()
  return (
     <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp as any}
        className="px-6 mt-40 mb-20 max-w-5xl mx-auto text-center"
      >
        <div className="bg-primary/5 rounded-[3rem] p-12 md:p-16 border border-primary/10 relative overflow-hidden flex flex-col justify-center items-center">
          {/* Glow effects inside CTA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        <h1 className='text-3xl md:text-5xl font-bold max-w-3xl'>
          Let’s Build Something Great With <span className='text-primary'>Zero Guesswork</span>
        </h1>
      <div >
        <p className='text-muted-foreground mt-6 md:mt-8 break-words whitespace-normal text-sm md:text-lg max-w-2xl'>
          From MVP to scale, we craft web and AI solutions that actually drive growth and save you time, money, and headaches.
        </p>
      </div>
      <div className='flex items-center gap-4 mt-6 md:mt-12'>
        <Button 
          onClick={() => router.push("/contactus")} 
          className=' py-4 md:py-6 px-5! md:text-base text-xs font-semibold group  
          transition-all duration-300 hover:shadow-lg 
          shadow-xl shadow-black/40
          bg-primary text-primary-foreground '
          >
          Start Your Build 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
          </div>
      </motion.section>
  )
}