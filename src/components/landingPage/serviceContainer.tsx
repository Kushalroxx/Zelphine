"use client"
import React  from 'react'
import InViewAnimation from '../majorUi/inViewAnimation'
import ServiceCard from './serviceCard'
import { motion,Variants } from 'framer-motion'
import { FaChartLine, FaLaptopCode,FaShieldAlt, FaTachometerAlt, FaUserPlus, FaUsers } from "react-icons/fa";
import { MdOutlineHandshake, MdSupportAgent } from 'react-icons/md'
import { AiOutlineRobot } from 'react-icons/ai'

const containerVariants:Variants = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      delayChildren:0.1,
      staggerChildren:0.1,
  }
}
}
const itemVariants:Variants = {
  hidden:{opacity:0, y:20},
  visible:{opacity:1,y:0}
}
const webAndAiServices = [
  {
    title: "Custom Web Platforms",
    description:
      "We build fast, scalable, and secure web applications tailored to your business goals.",
    icon: <FaLaptopCode className="text-primary" />,
  },
  {
    title: "AI & Automation",
    description:
      "From intelligent chatbots to workflow automation and data analysis, we integrate AI to drive real impact.",
    icon: <AiOutlineRobot className="text-accent" />,
  },
  {
    title: "UI/UX & Performance",
    description:
      "Thoughtful, high-performance interfaces designed for user retention and blazing-fast load times.",
    icon: <FaTachometerAlt className="text-chart-3" />,
  },
];

const maintenanceServices = [
  {
    title: "Proactive Maintenance",
    description:
      "We handle all updates, security, and performance tuning to keep your platform reliable and secure.",
    icon: <FaShieldAlt className="text-chart-2" />,
  },
  {
    title: "On-Demand Support",
    description:
      "Get expert technical support to handle any issues and keep your business running smoothly.",
    icon: <MdSupportAgent className="text-chart-5" />,
  },
  {
    title: "Technical SEO & Optimization",
    description:
      "We continuously monitor and optimize your platform's code and speed for peak performance.",
    icon: <FaChartLine className="text-primary" />,
  },
];

const staffingServices = [
  {
    title: "Hire a Developer",
    description:
      "Augment your team by hiring a vetted, senior-level developer from our roster.",
    icon: <FaUserPlus className="text-accent" />,
  },
  {
    title: "Team Integration",
    description:
      "Our developers integrate directly into your workflow, tools, and projects, acting as part of your team.",
    icon: <FaUsers className="text-chart-3" />,
  },
  {
    title: "Flexible Contracts",
    description:
      "Scale your in-house expertise up or down with flexible staffing options to meet your project's needs.",
    icon: <MdOutlineHandshake className="text-chart-5" />,
  },
];
export default function ServiceContainer(
) {
  
  return (
    <div id='services' className='w-full max-w-7xl mx-auto'>
        <InViewAnimation  >
      <h1 className='text-foreground text-3xl md:text-5xl text-center font-extrabold mt-24 md:mt-36'>Our Services</h1>
      </InViewAnimation>
      <motion.div variants={containerVariants} initial="hidden"  whileInView={"visible"} viewport={{once:true}} className="">
        <h1 className='text-foreground text-2xl md:text-4xl text-center font-bold mt-16 md:mt-24'>Web Engineering & AI Integration</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mx-auto items-center mt-12 md:mt-16 justify-center'>
        {
          webAndAiServices.map((webService, index) => (
            <motion.div className='' key={index} variants={itemVariants}>
            <ServiceCard key={index} title={webService.title} description={webService.description} icon={webService.icon} />
            </motion.div>
          ))
        }
        </div>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden"  whileInView={"visible"} viewport={{once:true}} className="">
        <h1 className='text-foreground text-2xl md:text-4xl text-center font-bold mt-20 md:mt-32'>Dedicated Staffing</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mx-auto items-center mt-12 justify-center'>
        {
          staffingServices.map((webService, index) => (
            <motion.div className='' key={index} variants={itemVariants}>
            <ServiceCard key={index} title={webService.title} description={webService.description} icon={webService.icon} />
            </motion.div>
          ))
        }
        </div>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden"  whileInView={"visible"} viewport={{once:true}} className="">
        <h1 className='text-foreground text-2xl md:text-4xl text-center font-bold mt-20 md:mt-32'>Maintenance & Platform Support</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mx-auto items-center mt-12 justify-center'>
        {
          maintenanceServices.map((webService, index) => (
            <motion.div className='' key={index} variants={itemVariants}>
            <ServiceCard key={index} title={webService.title} description={webService.description} icon={webService.icon} />
            </motion.div>
          ))
        }
        </div>
      </motion.div>
    </div>
  )
}
