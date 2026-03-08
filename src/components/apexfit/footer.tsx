import { motion } from "framer-motion";

export const FooterLeadCapture = () => {
  return (
    <footer className="w-full bg-[#050505] pt-32 pb-8 px-4 md:px-12 flex flex-col items-center border-t border-white/10 relative overflow-hidden">
      
      {/* 1. The "Application" CTA */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-32 z-10">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#F3F4F6] mb-4">
            The Final <span className="text-[#CCFF00]">Evolution.</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-md">
            Membership is strictly capped to ensure uncompromising quality and access. Join the waitlist to request an evaluation.
          </p>
        </div>

        <form className="flex w-full md:w-auto flex-col sm:flex-row gap-0" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="ENTER EMAIL ADDRESS" 
            required
            className="w-full md:w-80 bg-[#121212] border border-white/20 px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#CCFF00] focus:bg-white/5 transition-all font-mono text-sm uppercase tracking-widest"
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-[#CCFF00] text-[#050505] font-bold uppercase tracking-wide hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            Request Access
            <motion.svg 
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </motion.svg>
          </button>
        </form>
      </div>

      {/* 2. Structured Information Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 z-10 border-t border-white/10 pt-16">
        
        {/* Brand Mission */}
        <div className="flex flex-col gap-6">
          <div className="text-[#F3F4F6] font-extrabold text-2xl tracking-tighter uppercase">
            Apex<span className="text-[#CCFF00]">Fit</span>
          </div>
          <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
            Engineered for the elite. 20,000 square feet of absolute discipline, premium recovery, and uncompromising iron.
          </p>
        </div>

        {/* Locations (Grounding it in reality) */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Facilities</h4>
          <div>
            <p className="text-white text-sm font-medium">Bandra West, Mumbai</p>
            <p className="text-[#9CA3AF] text-sm font-mono mt-1">Waterfield Road, 400050</p>
          </div>
          <div className="mt-2">
            <p className="text-white text-sm font-medium">Indiranagar, Bangalore</p>
            <p className="text-[#9CA3AF] text-sm font-mono mt-1">100 Feet Road, 560038</p>
          </div>
        </div>

        {/* Operations */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Operations</h4>
          <div className="flex justify-between max-w-[200px] text-sm">
            <span className="text-[#9CA3AF]">Mon - Fri</span>
            <span className="text-white font-mono">04:00 - 23:00</span>
          </div>
          <div className="flex justify-between max-w-[200px] text-sm">
            <span className="text-[#9CA3AF]">Sat - Sun</span>
            <span className="text-white font-mono">05:00 - 21:00</span>
          </div>
          <a href="mailto:concierge@apexfit.com" className="text-[#CCFF00] text-sm hover:underline mt-2">concierge@apexfit.com</a>
        </div>

        {/* Socials & Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Network</h4>
          <div className="flex flex-col gap-3 text-sm text-[#9CA3AF]">
            <a href="#" className="hover:text-white transition-colors w-fit">Instagram // @apexfit</a>
            <a href="#" className="hover:text-white transition-colors w-fit">Twitter // @apexfit_hq</a>
            <a href="#" className="hover:text-white transition-colors w-fit">Spotify // Training Anthems</a>
          </div>
        </div>

      </div>

      {/* 3. The Mega Watermark & Copyright */}
      <div className="w-full max-w-7xl flex flex-col items-center justify-center z-10 relative">
        <div className="w-full flex justify-between items-center text-[#9CA3AF] text-xs uppercase tracking-widest border-b border-white/5 pb-8 mb-4">
          <span>© {new Date().getFullYear()} APEX FIT HOLDINGS</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
        
        {/* Massive text that scales perfectly with the container */}
        <div className="w-full text-[16vw] leading-[0.75] font-black uppercase tracking-tighter text-white/[0.02] text-center select-none pointer-events-none mt-4">
          APEXFIT
        </div>
      </div>

    </footer>
  );
};