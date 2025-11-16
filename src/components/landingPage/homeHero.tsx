import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui'
import { useRouter } from 'nextjs-toploader/app';

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut"
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HomeHero() {
  const router = useRouter();

  return (
    <>
      <div className='relative overflow-hidden h-full flex items-center justify-center pt-16'>
        <motion.section
          className="relative flex flex-col justify-center items-center z-10 text-center px-4 pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col justify-center items-center"
            variants={itemVariants}
          >
            <div id="title" className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.01] text-foreground">
                You Run Your Business<br />
                We’ll Run Your <span className="text-primary">Platform</span>
              </h1>
            </div>
            <div
              className="mt-8 md:mt-10 max-w-2xl"
            >
              <p className=" lg:text-xl text-muted-foreground">
                Focus on growth. We handle the engineering—reliable, high-performance, and built to scale. Stress-free, every step of the way.
              </p>
            </div>
            <div
              className="flex flex-col justify-center sm:flex-row gap-3  md:gap-6 pt-10"
            >
              <Button
                onClick={() => router.push("/contactus")}
                className="h-12 px-8 text-sm md:text-base font-semibold text-primary-foreground  shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105
                           bg-primary hover:shadow-xl"
              >
                Request a Quote
              </Button>
              <Button
                onClick={() => router.push("/services")}
                className="h-12 px-8 text-sm md:text-base font-semibold bg-card text-card-foreground border border-border shadow-sm
                           hover:bg-muted transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                See What We Do
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}