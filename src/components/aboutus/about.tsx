"use client"
import React, { useRef } from 'react'
import { aboutInterFace } from '@/lib/interfaces';
import InViewAnimation from '../majorUi/inViewAnimation';
import { Button, CardHeader } from '../ui';
import { useRouter } from 'nextjs-toploader/app';
import { motion } from 'framer-motion';

export default function About() {
  const router = useRouter()
  const aboutRef = useRef<HTMLDivElement>(null);
  const [underlineVisible, setUnderlineVisible] = React.useState(false);
  const handleClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className='bg-background pt-20 md:pt-[5.5rem] px-2 pb-20  relative overflow-hidden'>
      <div className=" flex flex-col justify-center px-6 md:px-12  ">
        <InViewAnimation>
          <>
            <motion.div
              className="absolute top-32 right-0 h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-chart-3/10 md:bg-chart-3/20 blur-3xl filter transform-gpu"
              animate={{
                x: [0, -80, 40, 0],
                y: [0, 30, -100, 0],
                scale: [1, 1.1, 0.9, 1],
                rotate: [0, -60, 50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 5,
              }}
            />
          </>
        </InViewAnimation>
        <InViewAnimation delay={0.1}>
          <h3 className=" inline-block px-4 py-2 text-base md:text-xl font-extrabold text-background bg-orange-500/90 rounded-full">
            oh hey
          </h3>
        </InViewAnimation>
        <InViewAnimation delay={0.3}>
          <h1 className="mt-6 text-6xl md:text-5xl lg:text-8xl font-extrabold leading-tight tracking-tight text-foreground">
            We’re{" "}
            <span className="relative inline-block">
              <span onPointerEnter={() => setUnderlineVisible(true)} onPointerLeave={() => setUnderlineVisible(false)} className="bg-gradient-to-r to-primary via-primary from-chart-4 bg-clip-text text-transparent">ValetRex</span>
              <motion.span initial={{ width: "0%" }} animate={{ width: underlineVisible ? "100%" : "0%" }} transition={{ duration: 0.3, type: "tween" }} className={`absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-primary to-chart-4 rounded-full`}></motion.span>
            </span>
            <br />
            <span className="text-foreground font-[600]">Our work’s no Joke.</span>
          </h1>
        </InViewAnimation>
        <InViewAnimation delay={0.5}>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
            We blend strategy, design, and technology to help brands stand out, scale fast, and leave a lasting mark.
          </p>
        </InViewAnimation>
        <InViewAnimation delay={0.7}>
          <Button
            onClick={handleClick}
            className="mt-8 md:mt-10 py-5 md:py-6 md:text-lg text-sm font-semibold  transition-all duration-300 transform hover:-translate-y-1"
          >
            How We Made Brands Unforgettable{" "}
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">↓</span>
          </Button>

        </InViewAnimation>
      </div>

      <InViewAnimation>

        <h1 ref={aboutRef} className="mt-32 text-3xl md:text-5xl font-extrabold pb-4 text-center relative ">

          Who We Are

          <span className="block h-[6px] w-24 md:w-52 mb-4 bg-gradient-to-r from-primary via-primary to-chart-4 mx-auto mt-2 rounded"></span>

        </h1>

      </InViewAnimation>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 px-6 md:px-6 mt-10 md:mt-12 items-center">
        <InViewAnimation delay={0.2}>
          <div className="flex justify-center md:justify-start">
            <img
              src="assets/aboutUs.png"
              alt="About ValetRex - Our unique approach"
              className="w-full max-w-md h-auto rounded-lg shadow-xl"
            />
          </div>
        </InViewAnimation>
        <InViewAnimation delay={0.4}>
          <div className="space-y-6 md:space-y-8 flex flex-col justify-center items-center">
            <p className="text-foreground text-lg md:text-xl font-semibold ">
              We turn bold ideas into websites that make people stop, look, and buy.
            </p>
            <p className="text-foreground/80 text-lg md:text-xl ">
              Your business is <strong className="text-foreground">unique</strong> — your
              website should be <strong className="text-foreground">too</strong>. No
              cookie-cutter templates. No generic solutions. We craft sites that feel
              yours — and work <strong className="text-foreground">24/7</strong> to bring
              you customers, sales, and trust.
            </p>
            <p className="text-foreground/80 text-lg md:text-xl ">
              No tech headaches. No wasted time. Just a clear, simple process that
              takes you from{" "}
              <strong className="text-foreground">“I need a website”</strong> to{" "}
              <strong className="text-foreground">“I love my website”</strong> — faster than
              you thought possible.
            </p>
            <Button
              onClick={() => router.push("/contactus")}
              className='mt-8 w-full md:mt-10 py-6 md:text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1'
            >
              Let’s Get Started
            </Button>
          </div>
        </InViewAnimation>
      </div>
    </div>
  )
}
