'use client';

import { ScanSearch, DraftingCompass, Zap, Lock, Unplug, ArrowRight } from 'lucide-react';
import { useRouter } from 'nextjs-toploader/app';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Feasibility & ROI Audit",
    description: "We vet every feature to ensure it drives real business value.",
    outcome: "Avoid wasted time, money, and effort on the wrong features.",
    icon: <ScanSearch className="w-5 h-5" />,
  },
  {
    id: "02",
    title: "Architecture Blueprint",
    description: "Before coding, we map your entire system with clear schematics and a prioritized roadmap.",
    outcome: "You know exactly what you're investing in and why it matters.",
    icon: <DraftingCompass className="w-5 h-5" />,
  },
  {
    id: "03",
    title: "Rapid Fabrication",
    description: "We run 2-week agile sprints with deployable links at the end of each cycle.",
    outcome: "See tangible progress every week and stay confident in the build.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "04",
    title: "Production Hardening",
    description: "Systems are stress-tested for traffic, security, and real-world scale.",
    outcome: "Your product won’t crash under pressure — your users stay happy.",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    id: "05",
    title: "The 'No-Handcuffs' Handoff",
    description: "We hand over all IP, repos, cloud access, and  walkthroughs for your future team.",
    outcome: "You maintain full control and independence from day one.",
    icon: <Unplug className="w-5 h-5" />,
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function ProcessGrid() {
  const router = useRouter();

  return (
    <section className="mb:py-12 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            The Execution <span className="text-indigo-600">Protocol</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Predictable engineering that drives real business outcomes.
          </p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
            //   @ts-ignore
              variants={itemVariants} 
              className={`
                relative bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group
              `}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="font-mono text-xs font-bold text-neutral-300 group-hover:text-indigo-600 transition-colors duration-300">
                  STEP {step.id}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="pt-4 border-t border-neutral-100 mt-auto">
                 <p className="text-xs font-bold text-indigo-600 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-3 h-3" /> 
                    {step.outcome}
                 </p>
              </div>
            </motion.div>
          ))}
          <motion.div 
        //   @ts-ignore
             variants={itemVariants}
             className="bg-indigo-600 p-8 rounded-2xl flex flex-col justify-center items-center text-center text-white shadow-xl hover:bg-indigo-700 transition-colors"
          >
             <h3 className= " text-xl md:text-2xl font-bold mb-2">Ready to Initialize?</h3>
             <p className="text-indigo-100 mb-6 text-sm">Stop guessing. Start building the right product.</p>
             <button 
               onClick={() => router.push('/contactus')}
               className="bg-white text-xs md:text-sm text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-neutral-100 transition-all hover:scale-105 active:scale-95"
             >
               Start Your Build →
             </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}