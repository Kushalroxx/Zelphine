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
      <div className='relative overflow-hidden h-full flex items-center justify-center pt-8'>
        <motion.section
          className="relative flex flex-col justify-center items-center z-10 text-center px-4 pt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col justify-center items-center"
            variants={itemVariants}
          >
            <div id="title" className="max-w-5xl">
              <h1 className="text-[29px] md:text-6xl lg:text-7xl font-bold tracking-tight md:leading-[1.01] leading-[1.2] text-foreground">
               <span className="text-primary">Product-Grade</span> Engineering <br />for Web & AI Platforms
              </h1>
            </div>
            <div
              className="mt-6 md:mt-10 max-w-2xl"
            >
              <p className=" text-base md:text-lg lg:text-xl text-muted-foreground">
              Clean architecture. Scalable systems. Built with the same rigor used inside product companies.
              </p>
            </div>
            <div
              className="flex flex-col justify-center sm:flex-row gap-3  md:gap-6 pt-6 md:pt-10"
            >
              <Button
                onClick={() => router.push("/contactus")}
                className="h-12 px-8 text-xs md:text-base font-semibold text-primary-foreground  shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105
                           bg-primary hover:shadow-xl"
              >
                Talk to an Engineer
              </Button>
              <Button
                onClick={() => router.push("/case-studies")}
                className="h-12 px-8 text-xs md:text-base font-semibold bg-card text-card-foreground border border-border/50 sm:border-border shadow-sm
                           hover:bg-muted transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                View Capabilities
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </>
  )
}