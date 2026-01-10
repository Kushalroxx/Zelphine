"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, FileSearch, Map, CheckCircle2 } from "lucide-react";
import { useRouter } from "nextjs-toploader/app";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      icon: Mail,
      title: "Share Your Challenge",
      description: "Describe the bottleneck holding you back technical, product, or scale-related. No phone number. No pressure. Just an email.",
      outcome: "You start without committing time to a call.",
    },
    {
      id: "02",
      icon: FileSearch,
      title: "Expert Diagnostic",
      description: "A real engineer reviews your request not a salesperson. You receive a written technical assessment with clear tradeoffs. Optional 15-min sync available.",
      outcome: "You get clarity before spending a single dollar.",
    },
    {
      id: "03",
      icon: Map,
      title: "The Solution Roadmap",
      description: "We send you a concrete plan covering scope, timeline, architecture, and cost. It’s yours to keep even if you don’t move forward with us.",
      outcome: "You know exactly what to build and what it will take.",
    },
  ];
 const router =  useRouter()
  return (
    <section className=" py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            From Rough Idea to <br className="hidden md:block"/>
            <span className="text-primary">
              Shipped Asset
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No sales funnels. No vague promises. Just a clear, engineering-led path that turns uncertainty into a working product.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-slate-200 border-t border-dashed border-slate-300 -z-10" />

          {steps.map((step) => (
            <motion.div
              key={step.id}
            //   @ts-ignore
              variants={itemVariants}
              className="group relative flex flex-col h-full"
            >
              <div className="flex-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-50 transition-colors duration-300">
                    <step.icon className="text-slate-600 group-hover:text-purple-600 transition-colors" size={24} />
                  </div>
                  <span className="text-5xl font-black text-slate-100 select-none group-hover:text-slate-50 transition-colors">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="mt-auto bg-slate-50 border border-slate-100 rounded-xl p-3 flex gap-3 items-start">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                  <p className="text-xs font-semibold text-slate-700">
                    <span className="block text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Outcome</span>
                    {step.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
            
            <button onClick={()=> router.push("/contactus")} className="relative px-6! bg-primary text-primary-foreground py-3! rounded-full font-bold transition-all shadow-xl flex items-center gap-2 group">
              Get Your Technical Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="mt-4 text-xs text-slate-500 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Typical response time: Under 24 hours
          </p>
        </motion.div>

      </div>
    </section>
  );
}