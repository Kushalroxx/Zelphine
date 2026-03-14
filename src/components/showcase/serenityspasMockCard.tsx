"use client";
import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Star, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import SerenitySpasMock from './serenityspaMock'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function SerenitySpasMockCard() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp as any}
      className="group w-full overflow-hidden"
      style={{
        borderRadius: "2.5rem",
        border: "1px solid rgba(198,167,94,0.25)",
        background: "linear-gradient(135deg, #FFF8F2 0%, #F5EDE6 100%)",
        boxShadow: "0 4px 30px rgba(198,167,94,0.08)",
        transition: "all .7s ease",
      }}
    >
      {/* ── Top section: full-width mock panel ── */}
      <div className="w-full" style={{ minHeight: 380, position: "relative" }}>
        {/* Gold accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, #C6A75E, #E8C87D, #C6A75E, transparent)", zIndex: 10 }} />
        <SerenitySpasMock />
      </div>

      {/* ── Bottom section: content ── */}
      <div style={{ borderTop: "1px solid rgba(198,167,94,0.2)", padding: "0" }}>
        <div className="flex flex-col lg:flex-row">

          {/* Left: text content */}
          <div className="flex-1 p-8 md:p-12 lg:p-14" style={{ borderRight: "1px solid rgba(198,167,94,.1)" }}>
            {/* Category label */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <div style={{ width: 28, height: 1, background: "#C6A75E" }} />
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500 }}>Wellness & Beauty</span>
            </div>

            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 500, color: "#2B2B2B", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.01em" }}>
              Serenity Spa<br /><em style={{ fontStyle: "italic", color: "#C6A75E" }}>& Beauty</em>
            </h3>

            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: "#7A6A62", lineHeight: 1.75, marginBottom: 28, maxWidth: 460 }}>
              A premium luxury wellness platform engineered with smart appointment flows, membership tiers, interactive service cards, and an emotion-first brand experience.
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
              {["Luxury Brand", "Booking System", "Membership Tiers", "Full-Stack"].map(tag => (
                <span key={tag} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7A6A62", fontWeight: 400, padding: "6px 14px", borderRadius: 9999, border: "1px solid rgba(198,167,94,.3)", background: "rgba(198,167,94,.06)" }}>{tag}</span>
              ))}
            </div>

            <Link href="/showcase/serenityspa" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #C6A75E, #D4B96E)",
                color: "#fff", border: "none", cursor: "pointer",
                fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "14px 36px", borderRadius: 9999,
                boxShadow: "0 4px 20px rgba(198,167,94,.3)", transition: "all .4s ease",
                textDecoration: "none"
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(198,167,94,.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(198,167,94,.3)"; }}>
                ✦ Explore The Spa <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: feature highlights */}
          <div className="lg:w-80 p-8 md:p-10 flex flex-col justify-center" style={{ background: "rgba(198,167,94,.04)" }}>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500, marginBottom: 20 }}>What We Built</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: Sparkles, label: "6 Service Cards", desc: "Interactive booking flows" },
                { icon: Star, label: "3 Membership Tiers", desc: "Silver, Gold & Platinum" },
                { icon: Calendar, label: "Smart Booking Form", desc: "With validation & confirmations" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", borderRadius: 14, background: "#fff", border: "1px solid rgba(198,167,94,.2)", boxShadow: "0 2px 12px rgba(43,43,43,.04)" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(198,167,94,.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: 16, height: 16, color: "#C6A75E" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", fontWeight: 500, color: "#2B2B2B" }}>{label}</div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#7A6A62", fontWeight: 300, marginTop: 2 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stat pills */}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {[{ v: "10+", l: "Years" }, { v: "5K+", l: "Clients" }, { v: "25+", l: "Therapists" }].map(({ v, l }) => (
                <div key={l} style={{ flex: 1, textAlign: "center", padding: "10px 8px", borderRadius: 12, background: "#fff", border: "1px solid rgba(198,167,94,.2)" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "#C6A75E" }}>{v}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7A6A62", fontWeight: 300 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
