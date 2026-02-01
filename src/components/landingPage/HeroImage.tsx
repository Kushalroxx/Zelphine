import React from 'react'
import InViewAnimation from '../majorUi/inViewAnimation'
import { BorderBeam } from "@/components/ui/border-beam" 
import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Home, PieChart, Users, Settings, Search, Plus, Activity, MoreHorizontal, CheckCircle2 } from 'lucide-react' 
import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="w-full">
         <div className='relative z-50 flex justify-center -mt-8 md:-mt-16 px-2 md:px-4'> 
          <InViewAnimation
            className='relative z-10 flex justify-center w-full max-w-6xl' 
          >
            <div className="relative w-full h-[390px] md:h-auto md:aspect-video bg-white dark:bg-zinc-950 rounded-lg md:rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-border/50 overflow-hidden flex flex-col font-sans">
              <BorderBeam
                size={300}
                duration={15}
                delay={9}
                borderWidth={1.5}
                className="from-transparent via-primary/80 to-transparent" 
              />
              <div className="h-9 md:h-11 w-full border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/90 flex items-center px-3 md:px-4 space-x-4 shrink-0 z-20 relative">
                <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                </div>
                <div className="hidden md:flex items-center h-7 w-64 bg-white dark:bg-zinc-800 rounded-md border border-slate-200 dark:border-zinc-700 shadow-sm px-3 opacity-60">
                     <Search size={12} className="text-slate-400 mr-2" />
                    <div className="h-1.5 w-24 bg-slate-200 dark:bg-zinc-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-1 w-full overflow-hidden relative">
                  <div className="hidden md:flex w-52 border-r border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 flex-col shrink-0 z-20">
                      <div className="h-14 flex items-center px-4 border-b border-slate-100 dark:border-zinc-800/50">
                        <Image src="/assets/logo.png" alt="Logo" width={24} height={24} className="object-contain mr-2" />
                        <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm tracking-tight">Zelphine</span>
                      </div>
                      <div className="p-2 space-y-0.5 mt-2">
                         <SidebarItem active icon={<Home size={15} />} text="Overview" />
                         <SidebarItem icon={<PieChart size={15} />} text="Analytics" />
                         <SidebarItem icon={<Users size={15} />} text="Team" />
                         <SidebarItem icon={<Activity size={15} />} text="Live View" />
                      </div>
                       <div className="p-2 space-y-0.5 mt-4">
                         <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">System</div>
                         <SidebarItem icon={<Settings size={15} />} text="Settings" />
                      </div>
                      <div className="mt-auto p-3 border-t border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50">
                        <div className="flex items-center space-x-3">
                             <div className="h-7 w-7 rounded-full bg-slate-200 dark:bg-zinc-700 border border-slate-300 dark:border-zinc-600"></div>
                             <div className="flex flex-col space-y-1">
                                 <div className="h-1.5 w-16 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
                                 <div className="h-1 w-10 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                             </div>
                        </div>
                      </div>
                  </div>
                  <div className="relative flex-1 bg-slate-50/50 dark:bg-zinc-950 flex flex-col min-w-0">
                        <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                        <div className="hidden relative z-10 w-full h-12 md:h-14 border-b border-slate-200/60 dark:border-zinc-800 md:flex items-center justify-between px-4 md:px-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
                            <div className='flex items-center space-x-2'>
                                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Project Monitor</h3>
                                <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-medium border border-green-200 hidden sm:block">Active</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="cursor-default font-semibold h-8 px-3 rounded-md bg-white border border-slate-200 text-slate-500 text-xs shadow-sm hover:bg-slate-50 transition hidden sm:block">Filter</button>
                                <button className="cursor-default h-8 px-3 rounded-md bg-primary text-white text-xs font-semibold  items-center shadow-sm hover:bg-primary transition whitespace-nowrap hidden sm:flex">
                                    <Plus size={14} className="mr-1"/> 
                                    <span className="">Start New</span>
                                   
                                </button>
                            </div>
                        </div>
                        <div className="relative z-10 flex-1 p-3 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-4 overflow-hidden">
                            <div className="lg:col-span-3 bg-white dark:bg-zinc-900 rounded-xl md:shadow-sm md:border border-slate-200 dark:border-zinc-800 flex flex-col h-full overflow-hidden relative group">
                                <div className="p-3 md:p-4 border-b border-slate-100 dark:border-zinc-800 hidden md:flex justify-between items-center shrink-0 z-20 relative bg-white dark:bg-zinc-900">
                                    <div className="flex items-center space-x-2">
                                        <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                                        <span className="text-xs font-medium text-slate-500">Live Data Ingestion</span>
                                    </div>
                                    <MoreHorizontal size={14} className="text-slate-400" />
                                </div>
                                <div className="flex-1 relative flex items-center justify-center bg-slate-50/50 dark:bg-zinc-900/50 overflow-hidden min-h-0">
                                     <div className="absolute w-full h-full bg-primary/5 blur-3xl"></div>
                                     <div className="w-[150%] md:w-full h-full max-w-none md:max-w-2xl px-0 md:px-8 flex items-center justify-center transform-gpu  origin-center">
                                        <DotLottieReact
                                            src="/business.lottie" 
                                            loop
                                            autoplay
                                            className="w-full h-full object-contain"
                                        />
                                     </div>
                                </div>
                                <div className="h-10 border-t border-slate-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hidden md:flex items-center px-4 space-x-4 shrink-0 z-20 relative">
                                     <div className="h-1.5 w-1/4 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full w-2/3 bg-primary/50"></div>
                                     </div>
                                     <div className="text-[10px] text-slate-400">Processing...</div>
                                </div>
                            </div>
                            <div className="hidden lg:flex lg:col-span-1 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-800 flex-col">
                                <div className="p-4 border-b border-slate-100 dark:border-zinc-800">
                                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">System Activity</span>
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="mt-0.5 text-green-500"><CheckCircle2 size={12} /></div>
                                        <div className="space-y-1.5 w-full">
                                            <div className="h-1.5 w-20 bg-slate-200 dark:bg-zinc-700 rounded-full"></div>
                                            <div className="h-1 w-full bg-slate-100 dark:bg-zinc-800 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="mt-0.5 text-slate-400"><CheckCircle2 size={12} /></div>
                                        <div className="space-y-1.5 w-full">
                                            <div className="h-1.5 w-16 bg-slate-200 dark:bg-zinc-700 rounded-full"></div>
                                            <div className="h-1 w-2/3 bg-slate-100 dark:bg-zinc-800 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
            </div>
          </InViewAnimation>
        </div>

        <div className='mx-4 mt-12 md:mt-16'> 
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='h-0.5 mx-auto max-w-5xl bg-linear-to-r from-black/0 via-black/60  to-black/0  rounded-full'></motion.div>
        </div>
    </div>
  )
}

function SidebarItem({ icon, text, active = false }: { icon: React.ReactNode, text: string, active?: boolean }) {
    return (
        <div className={`flex items-center px-3 py-2 rounded-md transition-colors group cursor-default ${
            active 
            ? 'bg-primary/5 dark:bg-zinc-800 text-primary dark:text-purple-400' 
            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-800/50'
        }`}>
            <span className={`transition-colors ${active ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'}`}>{icon}</span>
            <span className="ml-3 text-xs font-medium">{text}</span>
        </div>
    )
}