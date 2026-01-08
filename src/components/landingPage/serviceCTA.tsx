"use client"
import React from 'react'
import { Button } from '../ui' 
import Link from 'next/link'
import { useRouter } from 'nextjs-toploader/app' 
import InViewAnimation from '../majorUi/inViewAnimation'
import { ArrowRight } from 'lucide-react'

export default function ServiceCTA() {
  const router = useRouter()
  return (
    <InViewAnimation className=' flex flex-col justify-center items-center 
                   h-[57vh] max-h-96 py-16 md:py-24 
                   bg-card
                   rounded-3xl my-10 px-5 md:!px-20 text-center 
                   border border-border max-w-7xl mx-auto'>
                    <>
      <div>
        <h1 className='text-3xl md:text-5xl font-bold max-w-3xl'>
          Let’s Build Something Great — With Zero Guesswork
        </h1>
      </div>
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
                    </>
    </InViewAnimation>
  )
}