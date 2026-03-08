"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Reusable Checkmark Icon
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CCFF00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const PRICING_DATA = {
  essential: { name: "Essential", monthly: 2500, annual: 2000 },
  elite: { name: "Elite", monthly: 3500, annual: 3000 },
  ultimate: { name: "Ultimate", monthly: 5500, annual: 5000 },
};

export const PricingSection = () => {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  const handleSelectPlan = (planKey: string) => {
    const billingCycle = isAnnual ? "annual" : "monthly";
    router.push(`/showcase/apexfit/checkout?plan=${planKey}&billing=${billingCycle}`);
  };

  return (
    <section id="pricing" className="py-24 bg-[#050505] text-[#F3F4F6] flex flex-col items-center relative">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold uppercase tracking-tight mb-4">Membership Tiers</h2>
        <p className="text-[#9CA3AF] max-w-xl mx-auto">Select the plan that aligns with your goals. No hidden fees. Cancel anytime.</p>
      </div>

      <div className="flex items-center gap-4 mb-16 px-4">
        <span className={`font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-[#9CA3AF]'}`}>Monthly</span>
        <button 
          onClick={() => setIsAnnual(!isAnnual)}
          className="w-16 h-8 bg-[#121212] rounded-full flex items-center px-1 cursor-pointer border border-white/10 relative"
        >
          <motion.div 
            className="w-6 h-6 bg-[#CCFF00] rounded-full"
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            animate={{ x: isAnnual ? 32 : 0 }}
          />
        </button>
        <span className={`font-medium transition-colors flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-[#9CA3AF]'}`}>
          Annually <span className="text-[10px] px-2 py-0.5 bg-[#CCFF00]/20 text-[#CCFF00] rounded-full uppercase tracking-wider font-bold hidden sm:inline-block">Save 20%</span>
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl w-full px-4 items-center relative z-0">
        {/* Essential */}
        <div className="flex flex-col h-full p-8 bg-[#121212]/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
          <h3 className="text-2xl font-bold mb-2">Essential</h3>
          <p className="text-[#9CA3AF] text-sm mb-6">For the dedicated self-starter.</p>
          <div className="text-5xl font-extrabold mb-8">₹{isAnnual ? PRICING_DATA.essential.annual : PRICING_DATA.essential.monthly}<span className="text-lg text-[#9CA3AF] font-normal">/mo</span></div>
          <ul className="flex flex-col gap-4 mb-8 flex-grow">
            <li className="flex gap-3 text-[#9CA3AF]"><CheckIcon /> Full facility access</li>
          </ul>
          <button onClick={() => handleSelectPlan("essential")} className="w-full py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors mt-auto font-bold tracking-wide uppercase text-sm">Select Essential</button>
        </div>

        {/* Elite */}
        <div className="relative flex flex-col h-full p-8 bg-[#121212] rounded-2xl border border-[#CCFF00]/50 shadow-[0_0_30px_rgba(204,255,0,0.1)] lg:-mt-8 lg:mb-8 z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CCFF00] text-black px-4 py-1 text-xs font-bold uppercase rounded-full tracking-widest">Most Popular</div>
          <h3 className="text-2xl font-bold mb-2">Elite</h3>
          <p className="text-[#9CA3AF] text-sm mb-6">The complete performance package.</p>
          <div className="text-5xl font-extrabold mb-8">₹{isAnnual ? PRICING_DATA.elite.annual : PRICING_DATA.elite.monthly}<span className="text-lg text-[#9CA3AF] font-normal">/mo</span></div>
          <ul className="flex flex-col gap-4 mb-8 flex-grow">
            <li className="flex gap-3 text-white"><CheckIcon /> Everything in Essential</li>
            <li className="flex gap-3 text-white"><CheckIcon /> Unlimited group classes</li>
          </ul>
          <button onClick={() => handleSelectPlan("elite")} className="w-full py-4 rounded-lg bg-[#CCFF00] text-black hover:bg-white transition-colors mt-auto font-bold tracking-wide uppercase text-sm">Select Elite</button>
        </div>

        {/* Ultimate */}
        <div className="flex flex-col h-full p-8 bg-[#121212]/50 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
          <h3 className="text-2xl font-bold mb-2">Ultimate</h3>
          <p className="text-[#9CA3AF] text-sm mb-6">Uncompromising VIP access.</p>
          <div className="text-5xl font-extrabold mb-8">₹{isAnnual ? PRICING_DATA.ultimate.annual : PRICING_DATA.ultimate.monthly}<span className="text-lg text-[#9CA3AF] font-normal">/mo</span></div>
          <ul className="flex flex-col gap-4 mb-8 flex-grow">
            <li className="flex gap-3 text-[#9CA3AF]"><CheckIcon /> Everything in Elite</li>
            <li className="flex gap-3 text-[#9CA3AF]"><CheckIcon /> 4 PT sessions/mo</li>
          </ul>
          <button onClick={() => handleSelectPlan("ultimate")} className="w-full py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors mt-auto font-bold tracking-wide uppercase text-sm">Select Ultimate</button>
        </div>
      </div>
    </section>
  );
};