"use client"
import React from 'react'
import { ContactForm } from './contactForm'
import InViewAnimation from '../majorUi/inViewAnimation'
import { Mail, MapPin } from 'lucide-react' 

export default function Contact() {
    return (
        <div className='min-h-screen relative overflow-hidden selection:bg-blue-100 selection:text-blue-900'>
            <div className="absolute inset-0 z-0 opacity-[0.03]"></div>

            <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-24 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-24">

                    <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4">
                        <div>
                            <InViewAnimation>
                                <>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-8 bg-blue-600"></span>
                                    <h3 className="text-xs tracking-widest uppercase font-bold text-blue-600">
                                        Contact Us
                                    </h3>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                    Ready to Engineer<br/>
                                    <span className="text-indigo-600">
                                         Scale?
                                    </span>
                                </h1>
                                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                                    We build high-performance web platforms, AI-powered systems, and automation that actually scale — so your team can grow faster, reduce risk, and focus on what matters.
                                </p>
                                </>
                            </InViewAnimation>

                            <InViewAnimation delay={0.2}>
                                <div className="space-y-10">
                                    
                                    <div className="group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                                <Mail size={18} />
                                            </div>
                                            <h4 className="text-xs font-mono uppercase text-slate-400">New Business</h4>
                                        </div>
                                    
                                        <a href="mailto:hello@zelphine.com" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors pl-11 block break-all">
                                            support@zelphine.com
                                        </a>
                                    </div>
                                    
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                             <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                                <MapPin size={18} />
                                            </div>
                                            <h4 className="text-xs font-mono uppercase text-slate-400">Headquarters</h4>
                                        </div>
                                        <p className="text-base font-medium text-slate-900 pl-11">
                                            Remote First Agency<br/>
                                            <span className="text-slate-500 font-normal">Operating Global / EST Timezone</span>
                                        </p>
                                    </div>
                                </div>
                            </InViewAnimation>
                        </div>

                        <InViewAnimation delay={0.4}>
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Typical response time: <span className="text-slate-900 font-bold">Under 24 Hours</span>
                                </p>
                            </div>
                        </InViewAnimation>
                    </div>

                    <div className="lg:col-span-7">
                        <InViewAnimation delay={0.2} className="h-full">
                            <div className="rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-200 p-5 md:p-10 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-0 translate-x-1/2 -translate-y-1/2"></div>
                                
                                <div className="relative z-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </InViewAnimation>
                    </div>

                </div>
            </div>
        </div>
    )
}