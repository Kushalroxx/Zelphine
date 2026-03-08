"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import InViewAnimation from '../majorUi/inViewAnimation'
import { FaChartLine, FaLaptopCode, FaShieldAlt, FaTachometerAlt, FaUserPlus, FaUsers } from "react-icons/fa";
import { MdOutlineHandshake, MdSupportAgent } from 'react-icons/md'
import { AiOutlineRobot } from 'react-icons/ai'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.15 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

const webAndAiServices = [
  {
    title: "Custom Web Platforms",
    description: "Fast, secure apps built to scale revenue, efficiency, and growth baked in from day one.",
    icon: <FaLaptopCode className="text-primary w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "AI & Automation",
    description: "AI only where it drives impact: chatbots, workflow automation, and data insights that move the needle.",
    icon: <AiOutlineRobot className="text-primary w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "UI/UX & Performance",
    description: "Interfaces that retain users and load instantly because speed and clarity matter to your product.",
    icon: <FaTachometerAlt className="text-primary w-5 h-5 md:w-6 md:h-6" />,
  },
];

const staffingServices = [
  {
    title: "Hire a Developer",
    description: "Plug in a vetted, senior engineer who takes ownership and drives results.",
    icon: <FaUserPlus className="text-primary w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Team Integration",
    description: "We work in your workflow and tools like we’re already on your team.",
    icon: <FaUsers className="text-primary w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Flexible Contracts",
    description: "Scale expertise up or down without wasted budget or friction.",
    icon: <MdOutlineHandshake className="text-primary w-5 h-5 md:w-6 md:h-6" />,
  },
];

const maintenanceServices = [
  {
    title: "Proactive Maintenance",
    description: "Updates, security, and performance handled before problems arise.",
    icon: <FaShieldAlt className="text-primary w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "On-Demand Support",
    description: "Expert engineers ready when you need them with zero downtime.",
    icon: <MdSupportAgent className="text-primary w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Technical SEO",
    description: "Continuous code and speed improvements to keep your platform performing at its peak.",
    icon: <FaChartLine className="text-primary w-5 h-5 md:w-6 md:h-6" />,
  },
];

export default function ServiceContainer() {
  return (
    <div id='services' className='w-full max-w-6xl mx-auto px-6 pb-16 md:pb-24'>
      <InViewAnimation className='flex flex-col items-center mt-16 md:mt-36 mb-12 md:mb-20'>
        <>
        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4 md:mb-6'>
          Our Services
        </div>
        <h1 className='text-foreground text-4xl sm:text-5xl md:text-6xl text-center font-black tracking-tighter'>
          Engineered for <span className="text-primary">Scale.</span>
        </h1>
        </>
      </InViewAnimation>
      <div className="space-y-16 md:space-y-24">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <div className='flex flex-col items-center mb-6 md:mb-10 text-center'>
            <h2 className='text-foreground text-2xl md:text-3xl font-bold tracking-tight'>Web Engineering & AI Integration</h2>
            <div className="h-1 w-12 bg-primary/20 rounded-full mt-3 md:mt-4"></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 rounded-3xl md:rounded-[2rem] border border-border/60 bg-card/20 backdrop-blur-md overflow-hidden shadow-sm'>
            {webAndAiServices.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`group relative p-6 sm:p-8 md:p-10 hover:bg-card/60 transition-colors duration-500 ${
                  index !== 2 ? 'border-b md:border-b-0 md:border-r border-border/50' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col gap-4 md:gap-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-background/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <div className='flex flex-col items-center mb-6 md:mb-10 text-center'>
            <h2 className='text-foreground text-2xl md:text-3xl font-bold tracking-tight'>Dedicated Staffing</h2>
            <div className="h-1 w-12 bg-primary/20 rounded-full mt-3 md:mt-4"></div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 rounded-3xl md:rounded-[2rem] border border-border/60 bg-card/20 backdrop-blur-md overflow-hidden shadow-sm'>
            {staffingServices.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`group relative p-6 sm:p-8 md:p-10 hover:bg-card/60 transition-colors duration-500 ${
                  index !== 2 ? 'border-b md:border-b-0 md:border-r border-border/50' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col gap-4 md:gap-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-background/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <div className='flex flex-col items-center mb-6 md:mb-10 text-center'>
            <h2 className='text-foreground text-2xl md:text-3xl font-bold tracking-tight'>Maintenance & Platform Support</h2>
            <div className="h-1 w-12 bg-primary/20 rounded-full mt-3 md:mt-4"></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 rounded-3xl md:rounded-[2rem] border border-border/60 bg-card/20 backdrop-blur-md overflow-hidden shadow-sm'>
            {maintenanceServices.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`group relative p-6 sm:p-8 md:p-10 hover:bg-card/60 transition-colors duration-500 ${
                  index !== 2 ? 'border-b md:border-b-0 md:border-r border-border/50' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col gap-4 md:gap-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border/50 bg-background/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500 shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}