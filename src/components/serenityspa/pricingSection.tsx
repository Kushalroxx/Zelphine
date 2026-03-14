"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    tier: "Silver", icon: "🥈", price: "₹2,999", period: "/ month",
    description: "Perfect for your wellness beginnings",
    features: ["2 Facial Treatments", "1 Hair Spa Session", "10% Off All Services", "Priority Booking", "Wellness Consultation"],
    cta: "Start Silver", primary: false,
  },
  {
    tier: "Gold", icon: "🥇", price: "₹5,999", period: "/ month",
    description: "Our most loved luxury plan",
    features: ["4 Facial Treatments", "2 Hair Spa Sessions", "1 Body Massage", "20% Off All Services", "Complimentary Aromatherapy", "VIP Priority Access", "Personal Beauty Consultant"],
    cta: "Choose Gold", primary: true,
  },
  {
    tier: "Platinum", icon: "💎", price: "₹9,999", period: "/ month",
    description: "The pinnacle of luxury self-care",
    features: ["Unlimited Facial Treatments", "4 Hair Spa Sessions", "2 Body Massages", "30% Off All Services", "Full Bridal Package Discount", "Dedicated Therapist", "Home Visit Consultations", "Exclusive Product Gifts"],
    cta: "Go Platinum", primary: false,
  },
];

export const SpaPricingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="spa-pricing" style={{ padding: "120px 24px", background: "#F5EDE6" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }} ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500, marginBottom: 16, paddingLeft: 40, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 28, height: 1, background: "#C6A75E" }} />
            Membership Plans
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 500, color: "#2B2B2B", lineHeight: 1.15 }}>Choose Your<br />Luxury Journey</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: "#7A6A62", marginTop: 12 }}>Invest in yourself with our thoughtfully curated wellness plans.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }} className="spa-pricing-grid">
          {plans.map((plan, index) => (
            <motion.div key={plan.tier}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: plan.primary ? -8 : -6 }}
              style={{
                padding: "44px 36px", borderRadius: 20, position: "relative",
                marginTop: plan.primary ? -16 : 0,
                background: "#fff", border: plan.primary ? "2px solid rgba(198,167,94,.5)" : "1px solid #ECD9CF",
                boxShadow: plan.primary ? "0 0 30px rgba(198,167,94,.1)" : "0 4px 20px rgba(43,43,43,.05)",
              }}>
              {plan.primary && (
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%) translateY(-50%)", background: "#C6A75E", color: "#fff", padding: "4px 16px", borderRadius: 9999, fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Most Loved ✦</div>
              )}
              <div style={{ textAlign: "center", marginBottom: 28 }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{plan.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 500, color: "#2B2B2B", marginBottom: 6 }}>{plan.tier}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", fontStyle: "italic", color: "#7A6A62" }}>{plan.description}</p>
              </div>
              <div style={{ textAlign: "center", marginBottom: 32, padding: 20, borderRadius: 12, background: plan.primary ? "rgba(198,167,94,.08)" : "rgba(245,237,230,.6)" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 600, color: plan.primary ? "#C6A75E" : "#2B2B2B", letterSpacing: "-0.02em" }}>{plan.price}</span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", color: "#7A6A62", fontWeight: 300 }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: "#2B2B2B", fontWeight: 300 }}>
                    <span style={{ color: "#C6A75E", fontSize: "0.75rem", flexShrink: 0, fontWeight: 700 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <button onClick={() => document.getElementById("spa-booking")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  width: "100%", padding: "16px", borderRadius: 9999, border: plan.primary ? "none" : "1.5px solid #2B2B2B",
                  background: plan.primary ? "linear-gradient(135deg,#C6A75E,#D4B96E)" : "transparent",
                  color: plan.primary ? "#fff" : "#2B2B2B", cursor: "pointer", fontFamily: "'Jost', sans-serif",
                  fontSize: "0.88rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                  boxShadow: plan.primary ? "0 4px 20px rgba(198,167,94,.3)" : "none", transition: "all .4s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              >{plan.cta}</button>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          style={{ textAlign: "center", fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#7A6A62", marginTop: 36, fontWeight: 300 }}>
          All plans include complimentary welcome drink & consultation. Cancel anytime.
        </motion.p>
      </div>
      <style>{`@media (max-width: 1024px) { .spa-pricing-grid { grid-template-columns: 1fr !important; } .spa-pricing-grid > *:nth-child(2) { margin-top: 0 !important; } }`}</style>
    </section>
  );
};
