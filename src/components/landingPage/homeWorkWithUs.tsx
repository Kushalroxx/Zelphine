"use client"
import React from 'react'
import { useRouter } from 'nextjs-toploader/app'
import Image from 'next/image'
import InViewAnimation from '../majorUi/inViewAnimation'
import { Button } from '../ui/button'

import communicationHome from '../../../public/assets/communicationHome.svg'
import strategyHome from '../../../public/assets/strategyHome.svg'
import dataHome from '../../../public/assets/data.svg'
import solutionHome from '../../../public/assets/solutionHome.svg'

export default function HomeWorkWithUs() {
  const router = useRouter()

  return (
    // FIXED: Adjusted top padding for mobile (pt-16 md:pt-32)
    <div id='caseStudies' className='pt-16 md:pt-32 px-6 max-w-7xl mx-auto'>
      
      {/* SECTION HEADER */}
      {/* FIXED: Scaled down bottom margin for mobile (mb-12 md:mb-24) */}
      <div className='flex flex-col justify-center items-center text-center max-w-4xl mx-auto mb-12 md:mb-24'>
        <InViewAnimation>
          <>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4 md:mb-6'>
            Our Client Pledge
          </div>
          {/* FIXED: Scaled text down slightly for mobile (text-3xl -> 4xl -> 5xl -> 6xl) */}
          <h2 className='text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-4 md:mb-6'>
            Modern Platforms, Built for Growth with <span className="text-primary">AI</span>
          </h2>
          <p className='text-muted-foreground text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-balance'>
            We build high-performance web platforms that scale — with AI only where it drives real impact.
          </p>
          </>
        </InViewAnimation>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
        <InViewAnimation className="md:col-span-7 group relative bg-card/40 backdrop-blur-sm border border-border rounded-3xl md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center hover:border-primary/40 transition-colors duration-500 min-h-[300px] md:min-h-[350px]">
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="p-6 md:p-12 z-10 w-full md:w-3/5 flex flex-col justify-center h-full">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-2 md:mb-4">Clear Communication</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-balance">
              No jargon. No surprises. Regular updates, honest timelines, and open feedback — so you always know where your project stands.
            </p>
          </div>
          <div className="w-full md:w-2/5 h-48 md:h-full relative flex items-end justify-end md:absolute md:right-0 md:bottom-0 md:translate-x-4 md:translate-y-4 group-hover:scale-105 transition-transform duration-700 mt-4 md:mt-0 overflow-hidden md:overflow-visible">
            <div className="w-full h-full md:w-[120%] md:h-[120%] relative">
              <Image src={communicationHome} alt="Communication" fill className="object-contain object-bottom right-0 md:object-right-bottom" />
            </div>
          </div>
        </>
        </InViewAnimation>
        <InViewAnimation className="md:col-span-5 group relative bg-card/40 backdrop-blur-sm border border-border rounded-3xl md:rounded-[2rem] overflow-hidden flex flex-col hover:border-primary/40 transition-colors duration-500 min-h-[300px] md:min-h-[350px]">
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="p-6 md:p-10 z-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-2 md:mb-4">Built for Growth</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              We build platforms that scale. Every decision fuels long-term growth, not just launch day hype.
            </p>
          </div>
          
          <div className="mt-auto pt-6 md:pt-8 w-full h-40 md:h-48 relative flex justify-center items-end overflow-hidden group-hover:-translate-y-2 transition-transform duration-700">
             <Image src={strategyHome} alt="Strategy" className="w-[80%] object-contain object-bottom" />
          </div>
        </>
        </InViewAnimation>
        <InViewAnimation className="md:col-span-5 group relative bg-card/40 backdrop-blur-sm border border-border rounded-3xl md:rounded-[2rem] overflow-hidden flex flex-col hover:border-primary/40 transition-colors duration-500 min-h-[300px] md:min-h-[350px]">
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="w-full h-40 md:h-48 relative p-6 md:p-8 flex justify-start items-start group-hover:scale-105 transition-transform duration-700">
             <div className="w-20 h-20 md:w-24 md:h-24 bg-muted/50 rounded-2xl flex items-center justify-center border border-border p-3 md:p-4 shadow-xl">
               <Image src={dataHome} alt="Timelines" className="w-full h-full object-contain" />
             </div>
          </div>

          <div className="p-6 md:p-10 z-10 mt-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-2 md:mb-4">Reliable Timelines</h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              We deliver on time. No shortcuts. No delays. Predictable timelines so your business moves forward.
            </p>
          </div>
        </>
        </InViewAnimation>
        <InViewAnimation className="md:col-span-7 group relative bg-black backdrop-blur border border-border rounded-3xl md:rounded-[2rem] overflow-hidden flex items-center justify-center hover:border-primary/40 transition-colors duration-500 min-h-[300px] md:min-h-[350px] p-6 md:p-12 text-center">
        <>
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-1000 pointer-events-none">
             <Image src={solutionHome} alt="Solution" className="w-[150%] h-[150%] object-cover grayscale" />
          </div>
          
          <div className="relative z-10 max-w-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-2 md:mb-4 text-white">No Wasted Code</h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base text-balance">
              Only what you need, nothing extra. Lean, custom, scalable — designed to hit your business goals without wasting budget.
            </p>
          </div>
        </>
        </InViewAnimation>

      </div>

      <InViewAnimation className='mt-16 md:mt-20 flex justify-center'>
        <>
        <Button 
          size="lg"
          onClick={() => router.push("/contactus")} 
          className='rounded-full font-bold px-8 py-5 md:py-6 text-sm md:text-base shadow-[0_0_30px_rgba(96,0,255,0.2)] hover:scale-105 transition-transform'
        >
          Book a Strategy Call
        </Button>
        </>
      </InViewAnimation>

    </div>
  )
}