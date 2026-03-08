"use client";
import React from 'react'
import { Button } from '../ui'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'nextjs-toploader/app';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function ShowcaseCTA() {
  const router = useRouter();
  
  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp as any}
        // FIXED: Scaled down top margin for mobile (mt-24 -> mt-40)
        className="px-6 mt-24 md:mt-40 mb-16 md:mb-20 max-w-5xl mx-auto text-center"
      >
        {/* FIXED: Scaled down border radius (3xl -> 3rem) and padding (p-8 -> p-16) */}
        <div className="bg-primary/5 rounded-3xl md:rounded-[3rem] p-8 sm:p-12 md:p-16 border border-primary/10 relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          {/* FIXED: Scaled text down for mobile (4xl -> 5xl -> 6xl) */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tighter relative z-10 text-balance">
            Ready to build <span className="text-primary">your platform?</span>
          </h2>
          <p className="text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-xl relative z-10 text-balance">
            We design and engineer scalable SaaS products, sophisticated AI tools, and enterprise-grade digital ecosystems that drive real business growth.
          </p>
          
          {/* FIXED: Adjusted button padding and height for mobile */}
          <Button 
            onClick={() => router.push('/contactus')} 
            size="lg" 
            className="rounded-full font-black text-base md:text-lg px-8 md:px-12 py-6 md:py-7 relative z-10 shadow-[0_0_40px_rgba(96,0,255,0.3)] hover:scale-105 transition-transform duration-300"
          >
            Start the Conversation <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
          </Button>
          
        </div>
      </motion.section>
  )
}