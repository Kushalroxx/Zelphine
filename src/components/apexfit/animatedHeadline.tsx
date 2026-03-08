import React, { useRef, MouseEvent } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { InfiniteTextScroll } from './infiniteTextScroll';

export const AnimatedHeadline = ({ text }: { text: string }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { 
      opacity: 0, 
      y: "100%", 
      filter: "blur(10px)", 
      rotateX: -45,        
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      rotateX: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.2, 0.65, 0.3, 0.9] 
      },
    },
  };

  return (
    <motion.h1 
      variants={container} 
      initial="hidden" 
      animate="visible"
      className="text-6xl md:text-8xl font-extrabold uppercase tracking-tighter text-[#F3F4F6] flex flex-wrap justify-center gap-x-6 gap-y-2"
      style={{ perspective: "1000px" }} 
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex overflow-hidden pb-2">
          {word.split("").map((char, charIndex) => (
            <motion.span 
              variants={child as any} 
              key={charIndex} 
              className="inline-block origin-bottom"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
};

// --- Magnetic CTA Button ---
export const MagneticCTAButton = ({ label }: { label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3); // Magnetic pull strength
    y.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ scale: 1, opacity: 1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block p-4"
    >
      <button className="relative px-8 py-4 bg-[#CCFF00] text-[#050505] font-bold uppercase tracking-wide text-lg rounded-none overflow-hidden group hover:scale-105 transition-transform duration-300">
        <span className="relative z-10">{label}</span>
        <div className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
      </button>
    </motion.div>
  );
};

// --- Hero Composition ---
export const HeroSection = () => {
  return (
    <section className="relative py-[9rem] w-full flex flex-col items-center justify-center bg-[#050505]">
      <div className="absolute inset-0 z-0 bg-black/60">
         <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50 ">
           <source src="https://res.cloudinary.com/djfquzcwz/video/upload/v1772302231/10988084-hd_1920_1080_25fps_nwpr5n.mp4" type="video/mp4" />
         </video>
      </div>
      <div className="relative z-10 text-center space-y-8 max-w-5xl px-4 " >
        <AnimatedHeadline text="YOUR POTENTIAL, WEAPONIZED." />
        <motion.p initial={{ opacity: 0, scale: 0.95 }}
      animate={{ scale: 1, opacity: 1 }} className="text-[#9CA3AF] text-xl max-w-2xl mx-auto">Architected for the obsessed. 20,000 square feet of uncompromising iron, sanctuary, and discipline.</motion.p>
        <MagneticCTAButton label="Apply For Membership" />
      </div>
        <InfiniteTextScroll />
    </section>
  );
};