"use client"
import React from 'react'
import { ContactForm } from './contactForm'
import InViewAnimation from '../majorUi/inViewAnimation'
import {motion} from "framer-motion"
import { Mail, Phone, MapPin } from 'lucide-react' 

export default function Contact() {
    return (
        <div className='pt-24 pb-20 relative w-full overflow-hidden'>
             <motion.div
                className="absolute bottom-20 left-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-chart-3/15 md:bg-chart-3/15 blur-3xl filter transform-gpu"
                animate={{
                  x: [0, 100, -50, 0],
                  y: [0, -50, 100, 0],
                  scale: [1, 1.2, 0.8, 1],
                  rotate: [0, 90, -30, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-20 right-0 h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-chart-3/10 md:bg-chart-3/15 blur-3xl filter transform-gpu"
                animate={{
                  x: [0, -80, 40, 0],
                  y: [0, 60, -100, 0],
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
            <div className='mb-8 md:mb-16 text-center'>
                <InViewAnimation className='flex justify-center' delay={0.15}>
                    <h1 className='text-foreground text-3xl md:text-5xl font-extrabold px-2 leading-tight max-w-4xl'>Let’s Build Your Digital Presence Together</h1>
                </InViewAnimation>
                <InViewAnimation className='flex justify-center mt-4' delay={0.2}>
                    <p className='text-foreground/80 text-lg max-w-2xl px-5'>
                        Fill out the form below, or reach out directly. We're excited to hear about your project.
                    </p>
                </InViewAnimation>
            </div>
            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 px-4 md:px-8 relative z-10'> 
                <InViewAnimation delay={0.3} className='flex flex-col justify-start space-y-4 md:space-y-6 pt-16 pb-12 md:pt-4'> 
                    <>
                    <div className="mb-4 md:mb-0">
                        <h3 className='text-xl md:text-2xl font-bold text-foreground'>Speak Directly with an Expert.</h3> {/* Slightly smaller font for mobile h3 */}
                        <p className='text-foreground/70 mt-1 md:mt-2 text-base md:text-lg'>Prefer to <span className='text-primary'>talk?</span> Here are our details.</p> 
                    </div>
                    <div className='space-y-3 md:space-y-4'> 
                        <a href="mailto:hello@valetrex.com" className='flex items-center gap-3 text-base md:text-lg text-foreground hover:text-primary transition-colors'> 
                            <Mail className='w-5 h-5 text-chart-4' />
                            <span>hello@valetrex.com</span>
                        </a>
                        <a href="tel:+1234567890" className='flex items-center gap-3 text-base md:text-lg text-foreground hover:text-primary transition-colors'> 
                            <Phone className='w-5 h-5 text-chart-1' />
                            <span>+91 9876543210</span>
                        </a>
                        <div className='flex items-start gap-3 text-base md:text-lg text-foreground'> 
                            <MapPin className='w-5 h-5 mt-1 text-chart-2' />
                            <div>
                                <p>123 Innovation Drive</p>
                                <p className='text-foreground/70'>Tech City, TX 12345</p>
                            </div>
                        </div>
                    </div>
                    </>
                </InViewAnimation>
                <InViewAnimation delay={0.4} className=''>
                    <ContactForm />
                </InViewAnimation>
            </div>
        </div>
    )
}