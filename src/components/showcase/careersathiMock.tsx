import React from 'react';
import { motion } from 'framer-motion';
import { Map, MessageSquare } from "lucide-react";

const CareerSathiMock = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#09090B] via-[#111115] to-[#09090B] p-6 sm:p-8 flex items-center justify-center overflow-hidden">
    
    {/* Subtle Background Grid Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    
    {/* Dynamic Glowing Ambient Light */}
    <motion.div 
      className="absolute bottom-[-50px] right-[-50px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-primary/15 blur-[80px] rounded-full pointer-events-none"
      animate={{ 
        scale: [1, 1.15, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    />

    {/* Layout Wrapper */}
    <div className="relative w-full max-w-[320px] sm:max-w-[340px] mx-auto flex flex-col items-center">
      
      {/* Main Roadmap Card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#121214] border border-white/10 shadow-2xl rounded-2xl p-4 sm:p-5 w-full relative z-10 select-none backdrop-blur-sm"
      >
         {/* Card Header */}
         <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
           <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
             <Map className="w-4 h-4 text-primary" />
           </div>
           <span className="text-white/90 font-bold text-sm sm:text-base tracking-tight">AI Generated Roadmap</span>
         </div>

         {/* Steps Stack */}
         <div className="space-y-4">
            
            {/* Step 1: Active */}
            <div className="flex items-start gap-3.5">
              <motion.div 
                animate={{ boxShadow: ["0 0 0 0 rgba(37,99,235,0.4)", "0 0 12px 4px rgba(37,99,235,0.2)", "0 0 0 0 rgba(37,99,235,0.4)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5 shadow-[0_0_10px_rgba(37,99,235,0.4)]"
              >
                1
              </motion.div>
              <div className="space-y-2 flex-1 pt-0.5">
                <div className="h-2 w-1/3 bg-white/20 rounded"></div>
                
                {/* Simulated Loading/Processing Progress Bar */}
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div 
                    className="h-full bg-primary rounded-full"
                    animate={{ width: ["20%", "85%", "40%", "95%", "20%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Next */}
            <div className="flex items-start gap-3.5 opacity-40">
              <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">
                2
              </div>
              <div className="space-y-2 flex-1 pt-0.5">
                <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                <div className="h-1.5 w-3/4 bg-white/5 rounded"></div>
              </div>
            </div>

         </div>
      </motion.div>

      {/* AI Career Mentor Floating Chatbox */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [-4, 4, -4],
        }}
        transition={{ 
          opacity: { duration: 0.5, delay: 0.3 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-[-28px] left-[-8px] sm:left-[-16px] w-[88%] bg-primary text-white rounded-2xl rounded-bl-none p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] z-20 flex items-start gap-3 border border-white/10"
      >
        <div className="p-1.5 rounded-md bg-white/10 text-white shrink-0 mt-0.5">
          <MessageSquare className="w-3.5 h-3.5" />
        </div>
        <div className="space-y-0.5 flex-1 min-w-0">
          <div className="text-xs font-bold tracking-wide">AI Career Mentor</div>
          <div className="text-[10px] text-blue-100/90 leading-relaxed font-medium line-clamp-2">
            I've updated your daily tasks based on the UI simulation results.
          </div>
        </div>
      </motion.div>

    </div>
  </div>
);

export default CareerSathiMock;