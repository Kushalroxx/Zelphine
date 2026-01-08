"use client"
import React from 'react'
import InViewAnimation from '../majorUi/inViewAnimation'
import { Button, Card, CardDescription, CardHeader } from '../ui'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import communicationHome from '../../../public/assets/communicationHome.svg'
import strategyHome from '../../../public/assets/strategyHome.svg'
import dataHome from '../../../public/assets/data.svg'
import solutionHome from '../../../public/assets/solutionHome.svg'

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
     responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 844,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
  };

const trustBuilders = [
  {
    title: "Clear Communication",
    description:
      "No jargon. No surprises. Regular updates, honest timelines, and open feedback — so you always know where your project stands.",
    image: communicationHome,
  },
  {
    title: "Built for Growth, Not Just Launch Day",
    description:
      "We build platforms that scale. From MVP to full performance optimization, every decision fuels long-term growth, not just launch day hype.",
    image: strategyHome, 
  },
  {
    title: "Reliable Timelines",
    description:
      "We deliver on time. No shortcuts. No delays. You get predictable timelines so your business can move forward with confidence.",
    image: dataHome, 
  },
  {
    title: "No Wasted Code. No Wasted Budget.",
    description:
      "Only what you need, nothing extra. Lean, custom, scalable — designed to hit your business goals without wasting time or budget.",
    image: solutionHome, 
  }
];

export default function HomeWorkWithUs() {
  const router = useRouter()
  return (
    <div id='caseStudies' className=' pt-16 md:pt-24 px-2'>
      <InViewAnimation className='flex flex-col justify-center items-center'>
        <>
        <h3 className='text-green-600 bg-green-200/90 py-2 px-4 rounded-full text-xs md:text-sm font-semibold mb-8 md:mb-12'>Our Client Pledge</h3>
      <h1 className='text-foreground text-3xl md:text-5xl text-center font-extrabold'>Modern Platforms, Built for Growth with <span className="text-primary">AI</span></h1>
        </>
      </InViewAnimation>
      <InViewAnimation  className='flex justify-center items-center' >
      <p className='text-muted-foreground mt-6 md:mt-8 break-words whitespace-normal text-base md:text-lg text-center max-w-5xl'>We build high-performance web platforms that scale — with AI only where it drives real impact.</p>
      </InViewAnimation>
        <div className="max-w-5xl mx-auto pt-16 md:pt-24 mb-3 space-y-12  md:space-y-16">
        {
          trustBuilders && trustBuilders.map((trustBuilder, index) => (
            <InViewAnimation whileHover={{scale: 1.005}} key={index} >
            <Card className='py-10'>
              <CardHeader className='flex flex-col md:flex-row justify-center items-center md:gap-16 gap-8'>
                <Image src={trustBuilder.image} alt="aboutImage" className='w-[90%] md:w-[300px]' />
              <CardDescription>
                 <h1 className='text-foreground text-xl mb-4 md:mb-6 md:text-3xl font-extrabold tracking-tight'>{trustBuilder.title}</h1>
                <p className='text-foreground/60 break-words whitespace-normal text-sm md:text-base tracking-tight'>{trustBuilder.description}</p>
              </CardDescription>
              </CardHeader>
            </Card>
            </InViewAnimation>))
        }
                {/* <div className='md:mt-10 mt-8 flex flex-col md:flex-row text-sm md:text-base items-center justify-center gap-2 md:gap-4'>
                <span>Ready for real result ?</span> <Button onClick={e=>{router.push("/contactus")}} 
                className='font-semibold text-xs md:text-sm  px-4 '>Book a call NOW!</Button>
                </div> */}
        </div>
    </div>
  )
}
