"use client";

import { motion } from "framer-motion";

export const InfiniteTextScroll = () => {
  const words = ["STRENGTH", "DISCIPLINE", "POWER", "ENDURANCE", "GRIT"];
  
  return (
    <section className="absolute -bottom-10 z-10 w-full overflow-hidden py-24 flex items-center justify-center">
      <div className="absolute w-[110vw] left-1/2 -translate-x-1/2 -rotate-3 bg-[#CCFF00] py-4 md:py-6 flex whitespace-nowrap  z-10">
        <motion.div
          className="flex items-center gap-8 font-black text-2xl md:text-4xl uppercase tracking-tighter"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...Array(4)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex items-center gap-8">
              {words.map((word, wordIndex) => (
                <span key={`${arrayIndex}-${wordIndex}`} className="flex items-center gap-8">
                  <span 
                    className={
                      wordIndex % 2 === 0 
                        ? "text-[#050505]" 
                        : "text-transparent [-webkit-text-stroke:2px_#050505]"
                    }
                  >
                    {word}
                  </span>
                  <span className="text-2xl md:text-4xl text-[#050505] opacity-50">•</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};