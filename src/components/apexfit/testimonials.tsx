"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Vikram M.",
    role: "Powerlifter",
    text: "No distractions, no egos—just pure performance. The recovery facilities and raw iron here make it the only facility worth my time. It's a sanctuary for the obsessed.",
  },
  {
    id: 2,
    name: "Neha S.",
    role: "Endurance Athlete",
    text: "I’ve trained at luxury clubs across the globe. The attention to detail, the lighting, and the elite coaching staff here are completely unmatched.",
  },
  {
    id: 3,
    name: "Arjun K.",
    role: "Entrepreneur",
    text: "This isn't a gym; it's a high-performance proving ground. The energy shifts the exact moment you walk through the doors. Worth every single rupee.",
  },
  {
    id: 4,
    name: "Priya R.",
    role: "CrossFit Competitor",
    text: "The equipment is pristine, but the culture is what keeps me here. If you want to be surrounded by people who actually put in the work, this is the final destination.",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 bg-[#050505] w-full flex flex-col items-center justify-center overflow-hidden ">
      
      {/* Massive Background Decorative Quote Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif text-white/[0.02] leading-none pointer-events-none select-none z-0">
        "
      </div>

      <div 
        className="relative z-10 w-full max-w-5xl px-4 flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* The Spotlight Quote */}
        <div className="min-h-[250px] md:min-h-[300px] flex items-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="w-full"
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#F3F4F6] leading-[1.1]">
                "{testimonials[currentIndex].text}"
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls & Author Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
          
          {/* Author Details */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-xl md:text-2xl font-bold uppercase text-[#CCFF00] tracking-wide mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-[#9CA3AF] text-sm md:text-base uppercase tracking-widest">
                  {testimonials[currentIndex].role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation & Progress */}
          <div className="flex items-center gap-6">
            
            {/* Progress Indicators */}
            <div className="flex gap-2 mr-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: currentIndex === idx ? '40px' : '16px', backgroundColor: 'rgba(255,255,255,0.1)' }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                >
                  {currentIndex === idx && (
                    <motion.div
                      layoutId="activeProgress"
                      className="absolute inset-0 bg-[#CCFF00]"
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 5, ease: "linear" }} // Matches the 5000ms interval
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next/Prev Arrows */}
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white hover:bg-[#CCFF00] hover:border-[#CCFF00] hover:text-black transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};