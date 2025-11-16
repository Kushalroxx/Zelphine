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

export default function LandingPage() {
  return (
    <div onClick={e=>{
      e.stopPropagation()
    }} className='w-full overflow-x-hidden bg-background'>

      <BackgroundBeamsWithCollision className='h-[95vh]'>
      <HomeHero/>
      </BackgroundBeamsWithCollision>
        <InViewAnimation 
            className='relative z-10 flex justify-center w-full '
          >
            <div className="w-[90%] md:w-[70%] lg:w-[55%] max-w-6xl p-2 bg-card rounded-xl shadow-2xl border border-border/50">
              <img 
                className='rounded-lg w-full' 
                src="/assets/heroImage.png" 
                alt="App screenshot placeholder" 
              />
            </div>
          </InViewAnimation>
      <div className='px-4 md:px-10 space-y-24'>
      <HomeWorkWithUs/>
      <ServiceContainer />
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
