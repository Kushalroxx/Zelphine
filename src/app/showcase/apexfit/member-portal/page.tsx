"use client";

import AgencyPopup from "@/components/apexfit/agencyPopup";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MemberPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertConfig, setAlertConfig] = useState({ title: "", description: "", buttonText: "", autoFillMessage: "" });
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertConfig({
      title: "Showcase Environment",
      description: "This portal is a demonstration of Zelphine's premium client architecture. Want us to engineer a custom, high-end gateway like this for your own business?",
      buttonText: "Build My Portal",
      autoFillMessage: "Hi Zelphine team, I saw your Client Portal showcase and I'm interested in having a similar secure, high-end portal engineered for my own business. Let's discuss."
    });
    setShowAlert(true);
  };

  // Handle Reset Password Click
  const handleResetClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAlertConfig({
      title: "System Secured",
      description: "Automated resets are disabled for this demonstration. If you are a prospective client looking to elevate your digital presence, let's initialize a partnership.",
      buttonText: "Initialize Partnership",
      autoFillMessage: "Hi Zelphine team, I am looking to elevate my brand's digital infrastructure and would like to discuss a potential partnership."
    });
    setShowAlert(true);
  };
  return (
    <main className="h-screen w-full flex bg-[#050505] text-[#F3F4F6] font-sans overflow-hidden selection:bg-[#CCFF00] selection:text-black relative">
      <AgencyPopup showAlert={showAlert} setShowAlert={setShowAlert} alertConfig={alertConfig} />
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/djfquzcwz/image/upload/v1772971182/photo-1534438327276-14e5300c3a48.avif" 
          alt="Facility Background" 
          className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-[#050505]"></div>
      </div>
      <div className="hidden lg:flex flex-col justify-between absolute inset-y-0 left-0 w-2/3 p-16 z-10 pointer-events-none">
        <Link href="/showcase/apexfit" className="text-3xl font-black uppercase tracking-tighter text-white pointer-events-auto w-fit">
          Apex<span className="text-[#CCFF00]">Fit</span>
        </Link>
        
        <div>
          <h1 className="text-6xl xl:text-8xl font-black uppercase tracking-tighter mb-4 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">
            Discipline <br />
            <span className="text-[#CCFF00] [-webkit-text-stroke:0px]">Is Absolute.</span>
          </h1>
        </div>
      </div>
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="relative z-20 w-full lg:w-[500px] h-full bg-[#050505] border-l border-white/10 ml-auto flex flex-col justify-center px-8 sm:px-12 py-12 shadow-[-20px_0_50px_rgba(0,0,0,0.8)]"
      >
        <div className="lg:hidden mb-16">
          <Link href="/showcase/apexfit" className="text-3xl font-black uppercase tracking-tighter text-white">
            Apex<span className="text-[#CCFF00]">Fit</span>
          </Link>
        </div>

        <div className="mb-10">
          <div className="inline-block px-3 py-1 bg-[#CCFF00]/10 text-[#CCFF00] text-[10px] font-black uppercase tracking-widest mb-6 border border-[#CCFF00]/20">
            Secure Gateway
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Authorize Access</h2>
          <p className="text-[#9CA3AF] text-sm">Enter your credentials to access the vanguard portal.</p>
        </div>

        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
              Member ID
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#121212] border border-white/10 px-5 py-4 text-white text-base focus:outline-none focus:border-[#CCFF00] focus:bg-white/5 transition-all placeholder:text-white/20 rounded-none font-mono"
              placeholder="vanguard@apexfit.com"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <label className="block text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                Access Code
              </label>
              <button 
                type="button"
                onClick={handleResetClick}
                className="text-[10px] font-bold text-[#9CA3AF] hover:text-[#CCFF00] uppercase tracking-widest transition-colors mb-0.5"
              >
                Reset?
              </button>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#121212] border border-white/10 px-5 py-4 text-white text-base focus:outline-none focus:border-[#CCFF00] focus:bg-white/5 transition-all placeholder:text-white/20 rounded-none font-mono tracking-widest"
              placeholder="••••••••"
            />
          </div>

          <div className="pt-6">
            <button 
              type="submit" 
              className="w-full py-5 bg-[#CCFF00] text-[#050505] font-black uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Initiate Link
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </button>
          </div>
        </form>

        <div className="mt-auto pt-12 border-t border-white/5 text-center">
          <p className="text-[#9CA3AF] text-xs uppercase tracking-widest">
            Non-Member?{" "}
            <Link href="/showcase/apexfit#pricing" className="text-white font-bold hover:text-[#CCFF00] transition-colors">
              Submit Application
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}