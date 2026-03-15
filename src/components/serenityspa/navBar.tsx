"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import ZelphineBack from '../majorUi/zelphineBack'; 
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', id: 'spa-services' },
  { label: 'About', id: 'spa-about' },
  { label: 'Pricing', id: 'spa-pricing' },
  { label: 'Reviews', id: 'spa-testimonials' }
];

export const SpaNavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };
  const isDarkText = scrolled || isMobileMenuOpen;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-[500] transition-colors duration-400 ease-in-out ${
        isDarkText
          ? 'bg-[#FDFAF7]/95 backdrop-blur-xl shadow-[0_1px_30px_rgba(43,43,43,0.08)] border-b border-[#ECD9CF]/50'
          : 'bg-transparent'
      }`}
    >
      <ZelphineBack className="absolute top-3 md:top-5 left-4 z-[501]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-center md:justify-between relative">
        <Link 
          href="/showcase/serenityspa" 
          className="flex flex-col leading-none items-center md:items-start text-center md:text-left z-20"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span 
            className={`font-['Playfair_Display'] text-xl md:text-2xl font-semibold tracking-[0.02em] transition-colors duration-400 ${
              isDarkText ? 'text-[#2B2B2B]' : 'text-[#FFF8F2]'
            }`}
          >
            Serenity
          </span>
          <span className="font-['Jost'] text-[0.55rem] md:text-[0.58rem] tracking-[0.35em] uppercase text-[#C6A75E] font-medium mt-0.5 ml-1">
            Spa & Beauty
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.id)}
              className={`font-['Jost'] text-[0.8rem] font-medium tracking-[0.12em] uppercase transition-colors duration-300 py-1 hover:text-[#C6A75E] ${
                scrolled ? 'text-[#7A6A62]' : 'text-white/85'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('spa-booking')}
            className="bg-gradient-to-br from-[#C6A75E] to-[#D4B96E] text-white font-['Jost'] text-[0.78rem] font-medium tracking-[0.1em] uppercase py-3 px-7 rounded-full shadow-[0_4px_20px_rgba(198,167,94,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(198,167,94,0.5)] transition-all duration-300 border-none cursor-pointer"
          >
            Book Now
          </button>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`absolute right-4 top-1/2 -translate-y-1/2 md:hidden z-20 p-2 transition-colors ${
            isDarkText ? 'text-[#2B2B2B]' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-[#FDFAF7] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-b border-[#ECD9CF]/50 py-8 px-6 flex flex-col items-center md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.id)}
                  className="font-['Jost'] text-base font-medium tracking-[0.15em] uppercase text-[#7A6A62] hover:text-[#C6A75E] transition-colors w-full py-2"
                >
                  {link.label}
                </button>
              ))}
              
              <div className="w-12 h-px bg-[#ECD9CF] my-2"></div>
              
              <button
                onClick={() => scrollTo('spa-booking')}
                className="w-full max-w-[240px] bg-gradient-to-br from-[#C6A75E] to-[#D4B96E] text-white font-['Jost'] text-sm font-medium tracking-[0.1em] uppercase py-4 px-6 rounded-full shadow-[0_4px_20px_rgba(198,167,94,0.3)] active:scale-95 transition-all"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};