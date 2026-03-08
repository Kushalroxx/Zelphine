"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'nextjs-toploader/app';
import { useEffect, useState } from 'react';

export const NavBar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-12 ${
        isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-[#F3F4F6] font-extrabold text-2xl tracking-tighter uppercase cursor-pointer">
          Apex<span className="text-[#CCFF00]">Fit</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-[#9CA3AF] uppercase tracking-wide">
          <a href="#facility" className="hover:text-white transition-colors">The Facility</a>
          <a href="#schedule" className="hover:text-white transition-colors">Classes</a>
          <a href="#pricing" className="hover:text-white transition-colors">Memberships</a>
        </div>

        {/* Secondary CTA */}
        <button onClick={()=>router.push('/showcase/apexfit/member-portal')} className="px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-[#CCFF00] hover:border-[#CCFF00] hover:text-black text-white font-bold text-sm uppercase tracking-wide transition-all duration-300">
          Member Login
        </button>

      </div>
    </motion.nav>
  );
};