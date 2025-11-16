"use client"
import React from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui'
import {motion} from "framer-motion"


export default function ServiceCard({
    title,
    description,
    icon
}:{
    title:string,
    description:string,
    icon:React.JSX.Element
}) {
  return (
    <motion.div
    whileHover={{scale:1.005, y:-2}}
    className='w-full md:h-40'
    transition={{duration:.1,type:"spring",stiffness: 100, damping: 15}}
    >
    <Card className='py-4 md:py-6 h-32 md:h-36'>
      <CardHeader className='flex justify-center md:items-start items-center'>
        <div className='text-lg md:text-xl mr-3 mt-2'>
        {
          icon
        }
        </div>
        <div>
        <CardTitle className=" break-words whitespace-normal text-lg md:text-xl font-semibold text-shadow mb-1 md:mb-3 ">{title}</CardTitle>
        <p className="text-muted-foreground text-sm md:text-sm break-words whitespace-normal">{description}</p>
        </div>
      </CardHeader>
        </Card>
    </motion.div>
  )
}
