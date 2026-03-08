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
import ProcessSection from './processSection'
import ClientFocusedPath from './clientFocusedPart'
import HeroImage from './HeroImage'
import SelectedWork from './selectedWork'

export default function LandingPage() {
  return (
    <div onClick={e => {
      e.stopPropagation()
    }} className='w-full overflow-x-hidden bg-background '>
      
      <div className='relative'>
        <BackgroundBeamsWithCollision className='flex h-[40rem] flex-col justify-center pb-12 md:pb-24'>
          <HomeHero />
        </BackgroundBeamsWithCollision>     
      </div>
      <HeroImage/>
      <div className='px-4 md:px-10 space-y-16 md:space-y-24 mt-2 md:mt-8'>
        <HomeWorkWithUs />
        <SelectedWork />
        <ServiceContainer />
        <ClientFocusedPath />
        <ProcessSection />
        <div className='mt-20'>
          <TestimonialsSection />
        </div>
        <Faq />
        <ServiceCTA />
      </div>
      <Footer />
    </div>
  )
}