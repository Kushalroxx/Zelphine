import React from 'react';
import { CalendarDays, Sparkles, CheckCircle2, Clock, Star, User, ChevronRight } from "lucide-react";

const SerenitySpaMock = () => (
  <div className="w-full h-full bg-[#0A0908] p-4 sm:p-8 md:p-12 relative flex flex-col justify-center items-center overflow-hidden">

    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px]"></div>
    <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#CBA365]/15 blur-[80px] md:blur-[120px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-[#CBA365]/25"></div>
    <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#E8D1A7]/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-[#E8D1A7]/20 group-hover:translate-x-10"></div>
    <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto transform transition-transform duration-700 ease-out group-hover:scale-[1.02]">
      <div className="absolute -top-12 -left-8 md:-top-16 md:-left-16 w-40 bg-[#161412]/90 backdrop-blur-md border border-white/5 rounded-2xl p-3 shadow-2xl z-0 transform -rotate-6 transition-all duration-700 ease-out group-hover:-rotate-12 group-hover:-translate-x-4 group-hover:-translate-y-4">
        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2 flex items-center gap-1">
          <CalendarDays className="w-3 h-3" /> Today
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="bg-white/5 border border-white/5 rounded-lg py-1.5 text-center text-white/60 text-[10px]">10:00 AM</div>
          <div className="bg-[#CBA365]/10 border border-[#CBA365]/30 rounded-lg py-1.5 text-center text-[#CBA365] text-[10px] font-bold">02:00 PM</div>
        </div>
      </div>
      <div className="absolute -top-6 -right-10 md:-top-10 md:-right-20 w-48 md:w-56 bg-gradient-to-br from-[#2A241D] to-[#12100E] border border-[#CBA365]/20 rounded-2xl p-4 shadow-2xl z-0 transform rotate-12 transition-all duration-700 ease-out group-hover:rotate-[18deg] group-hover:translate-x-6 group-hover:-translate-y-2">
         <div className="flex justify-between items-center mb-4">
            <div className="text-[9px] md:text-[10px] text-[#CBA365] font-bold tracking-[0.2em] uppercase">Platinum Tier</div>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#CBA365]" />
         </div>
         <div className="flex justify-between items-end">
           <div className="text-sm md:text-base font-serif italic text-white/90">Member</div>
           <div className="w-6 h-4 bg-white/10 rounded-sm"></div>
         </div>
      </div>

      <div className="relative bg-[#161412]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 flex flex-col gap-4">

        <div className="w-full h-[120px] md:h-[150px] rounded-2xl bg-gradient-to-br from-[#2D2620] to-[#161412] border border-white/5 relative overflow-hidden flex flex-col justify-end p-4">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#CBA365]/10 rounded-full blur-2xl"></div>
          <Sparkles className="absolute top-4 right-4 w-6 h-6 text-[#CBA365]/40" />
          
          <div className="relative z-10">
            <div className="text-[#CBA365] text-[9px] font-bold tracking-[0.2em] uppercase mb-1">Signature</div>
            <div className="text-white font-serif text-lg md:text-xl leading-tight">Balinese <br/> Deep Tissue</div>
          </div>
        </div>

        <div className="flex justify-between items-center px-2">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                <Clock className="w-3.5 h-3.5 text-white/60" />
             </div>
             <div>
               <div className="text-white text-xs font-medium">90 Minutes</div>
               <div className="text-white/40 text-[10px]">Full Body</div>
             </div>
          </div>
          <div className="text-white font-serif text-lg italic">₹ 1450</div>
        </div>
        <div className="w-full bg-[#CBA365] hover:bg-[#B59567] text-[#161412] rounded-xl py-3 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors mt-2">
          Reserve Slot <ChevronRight className="w-4 h-4" />
        </div>
      </div>
      <div className="absolute -bottom-8 -left-6 md:-bottom-12 md:-left-12 bg-[#1A1816] border border-white/10 rounded-full p-2 pr-4 shadow-xl z-20 flex items-center gap-3 transform transition-all duration-700 ease-out group-hover:-translate-x-4 group-hover:translate-y-2">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-[#CBA365] to-[#E8D1A7] flex items-center justify-center border-2 border-[#161412]">
          <User className="w-4 h-4 text-[#161412]" />
        </div>
        <div className="flex flex-col">
          <span className="text-white text-[10px] md:text-xs font-medium">Elena R.</span>
          <div className="flex items-center gap-0.5">
            <Star className="w-2.5 h-2.5 text-[#CBA365] fill-[#CBA365]" />
            <span className="text-white/50 text-[9px]">4.9 (120+)</span>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 -right-4 md:-bottom-16 md:-right-8 w-44 md:w-52 bg-[#CBA365] text-[#161412] rounded-2xl p-3 md:p-4 shadow-[0_20px_40px_rgba(203,163,101,0.2)] z-20 transform -rotate-3 transition-all duration-700 ease-out group-hover:rotate-0 group-hover:translate-x-4 group-hover:translate-y-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex flex-col">
            <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider">Confirmed</span>
            <span className="text-[#161412]/60 text-[9px]">Oct 24, 2:00 PM</span>
          </div>
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#161412]/10 flex items-center justify-center">
            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-[#161412]" />
          </div>
        </div>
        <div className="w-full flex gap-1 h-2 opacity-30">
          <div className="w-1 bg-[#161412] h-full"></div>
          <div className="w-2 bg-[#161412] h-full"></div>
          <div className="w-0.5 bg-[#161412] h-full"></div>
          <div className="w-3 bg-[#161412] h-full"></div>
          <div className="w-1 bg-[#161412] h-full"></div>
          <div className="w-4 bg-[#161412] h-full"></div>
          <div className="w-0.5 bg-[#161412] h-full"></div>
        </div>
      </div>

    </div>
  </div>
);

export default SerenitySpaMock;