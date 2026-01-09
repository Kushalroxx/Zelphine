"use client"
import React from 'react'
import HomeHero from './homeHero'
import HomeWorkWithUs from './homeWorkWithUs'
import ServiceContainer from './serviceContainer'
import ServiceCTA from './serviceCTA'
import Footer from '../sections/footer'
import TestimonialsSection from './testimonialsSection'
import Faq from '../landingPage/faq'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import InViewAnimation from '../majorUi/inViewAnimation'
import {BorderBeam} from "@/components/ui/border-beam"
import { motion } from 'framer-motion'
import ProcessSection from './processSection'
import Image from 'next/image'
import heroImage from '../../../public/assets/heroImage.png'
import ClientFocusedPath from './clientFocusedPart'

export default function LandingPage() {
  return (
    <div onClick={e=>{
      e.stopPropagation()
    }} className='w-full overflow-x-hidden bg-background '>
<div className='relative'>
  <BackgroundBeamsWithCollision className='min-h-[75vh] md:min-h-[95vh] flex flex-col justify-center pb-12 md:pb-24'>
    <HomeHero/>
  </BackgroundBeamsWithCollision>

  <div className='relative z-50 flex justify-center -mt-12 md:-mt-[4.5rem]'>
    <InViewAnimation 
      style={{}} className='relative z-10 flex justify-center w-full '
    >
      <div className="relative w-[95%] md:w-[70%] lg:w-[70%] max-w-5xl aspect-video bg-card rounded-md shadow-2xl border border-border/50 overflow-hidden">
        <BorderBeam
          size={150}
          borderWidth={3}
          initialOffset={20}
          className="from-transparent via-yellow-500 to-transparent"
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
        />
        <Image 
          className='w-full h-full object-cover object-top' 
          src={heroImage} 
          alt="Zelphine Digital Architecture" 
        />
      </div>
    </InViewAnimation>
  </div>
 <div className='mx-4'> <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className='h-[2px] mt-10 md:mt-20 mx-auto max-w-5xl bg-foreground rounded-full'></motion.div>
        </div></div>
      <div className='px-4 md:px-10 space-y-16 md:space-y-24'>
      <HomeWorkWithUs/>
      <ServiceContainer />
      <ClientFocusedPath/>
      <ProcessSection/>
      <div className='mt-20'>
        <TestimonialsSection/>
      </div>
      <Faq/>
      <ServiceCTA/>
      </div>
      <Footer/>
    </div>
  )
}
