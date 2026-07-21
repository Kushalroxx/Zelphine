'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);
  const pathName = usePathname();

  // IMPORTANT: Replace with your actual WhatsApp business number (Include country code, no + or spaces)
  const phoneNumber = "918515013506"; 
  const prefilledMessage = "Hi Zelphine! I'm interested in discussing a new project.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  // Auto-hide the tooltip after 8 seconds so it doesn't clutter the screen
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Hide on showcase pages
  if (pathName?.startsWith("/showcase/")) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-4 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 w-56 origin-bottom-right pointer-events-auto"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowTooltip(false);
              }}
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-700 transition-colors rounded-full hover:bg-slate-100"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            
            <p className="text-sm font-medium text-slate-700 pr-3 leading-snug">
              Prefer to talk to a human? Chat directly with our engineering team.
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-200 transform rotate-45 pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 p-3 md:px-5 md:py-3 rounded-full shadow-2xl bg-[#25D366] border border-[#128C7E] group hover:bg-[#20ba5a] hover:shadow-[#25D366]/30 transition-all duration-300 pointer-events-auto"
      >
        <div className="relative flex items-center justify-center w-6 h-6 md:w-8 md:h-8 text-white">
          {/* Authentic WhatsApp SVG Icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
        <div className="hidden md:flex flex-col items-start text-left">
          <span className="text-[10px] font-mono font-bold uppercase text-white/80 leading-none mb-0.5 group-hover:text-white transition-colors">
            Talk to an engineer
          </span>
          <span className="text-sm font-bold text-white leading-none">
            WhatsApp Us
          </span>
        </div>
      </motion.a>
    </div>
  );
}