"use client"
import React from 'react'
import { ContactForm } from './contactForm'
import InViewAnimation from '../majorUi/inViewAnimation'
import { Mail, MapPin, MessageCircle, Clock } from 'lucide-react' 

export default function Contact() {
    return (
        <div className='min-h-screen bg-background relative overflow-hidden selection:bg-primary/20 selection:text-primary'>
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-32 pb-12 md:pb-24 relative z-10 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col justify-center h-full pt-4">
                        <div>
                            <InViewAnimation>
                                <>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-8 bg-primary"></span>
                                    <h3 className="text-[10px] tracking-widest uppercase font-bold text-primary">
                                        Start a Project
                                    </h3>
                                </div>
                                <h1 className="text-[36px] md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6 leading-[1.1]">
                                    Ready to Engineer<br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                                         Scale?
                                    </span>
                                </h1>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
                                    We build high-performance platforms, AI pipelines, and automation that actually scale—so you can grow faster and reduce technical debt.
                                </p>
                                </>
                            </InViewAnimation>

                            <InViewAnimation delay={0.2}>
                                <div className="space-y-8">
                                    
                                    {/* Email */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 md:mb-2">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                                <Mail size={18} />
                                            </div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">New Business</h4>
                                        </div>
                                        <a href="mailto:support@zelphine.com" className="text-base md:text-lg font-bold text-foreground hover:text-primary transition-colors pl-11 block">
                                            support@zelphine.com
                                        </a>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 md:mb-2">
                                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500 group-hover:scale-110 transition-transform">
                                                <MessageCircle size={18} />
                                            </div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Direct Chat</h4>
                                        </div>
                                        <a href="https://wa.me/918515013506?text=Hi%20Zelphine,%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold text-foreground hover:text-emerald-500 transition-colors pl-11 block">
                                            +91 85150 13506
                                        </a>
                                        <p className="text-[10px] text-muted-foreground pl-11 mt-1 leading-relaxed max-w-[280px]">
                                            For the fastest response. We respect your privacy—no promotional spam, we only reply to your inquiries.
                                        </p>
                                    </div>
                                    
                                    {/* Headquarters */}
                                    <div className="group">
                                        <div className="flex items-center gap-3 md:mb-2">
                                             <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                                <MapPin size={18} />
                                            </div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Headquarters</h4>
                                        </div>
                                        <p className="text-base font-bold text-foreground pl-11">
                                            Remote First Studio<br/>
                                            <span className="text-muted-foreground font-medium text-xs">Global Operations / EST & IST</span>
                                        </p>
                                    </div>
                                </div>
                            </InViewAnimation>
                        </div>

                        <InViewAnimation delay={0.4}>
                            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
                                <div className="flex items-start gap-3">
                                      <div className="">
                                <p className="text-sm text-muted-foreground font-medium flex items-center gap-3">
                                    <Clock size={16} className="text-primary" />
                                    Typical response time: <span className="text-foreground font-bold">Under 24 Hours</span>
                                </p>
                            </div>
                                </div>
                            </div>
                        </InViewAnimation>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7 mt-8 lg:mt-0">
                        <InViewAnimation delay={0.2} className="h-full">
                            <div className="relative w-full max-w-2xl mx-auto lg:ml-auto">
                                <ContactForm />
                            </div>
                        </InViewAnimation>
                    </div>

                </div>
            </div>
        </div>
    )
}