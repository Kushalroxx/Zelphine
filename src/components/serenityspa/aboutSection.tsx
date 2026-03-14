"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  { icon: "🌸", title: "Clean Beauty", desc: "We use only certified, skin-safe products free from harmful chemicals." },
  { icon: "🤲", title: "Expert Hands", desc: "Our therapists are trained at premier wellness institutes worldwide." },
  { icon: "✨", title: "Personalized Care", desc: "Every session is tailored uniquely to your skin, hair, and wellness needs." },
  { icon: "🌿", title: "Holistic Wellness", desc: "We nurture your mind, body, and spirit — not just your appearance." },
];

export const SpaAboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="spa-about" style={{ padding: "120px 24px", background: "#FFF8F2", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }} ref={ref}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="spa-about-grid">
          {/* Image side */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }} style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=85" alt="Luxury spa interior" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(43,27,20,.3) 0%, transparent 60%)" }} />
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", bottom: 40, right: -24, background: "#fff", borderRadius: 16, padding: "20px 24px", boxShadow: "0 12px 40px rgba(43,43,43,.12)", border: "1px solid #ECD9CF", textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 600, color: "#C6A75E", lineHeight: 1 }}>10+</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7A6A62", marginTop: 4 }}>Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}>
            <span style={{ display: "inline-block", fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500, marginBottom: 16, paddingLeft: 40, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 28, height: 1, background: "#C6A75E" }} />
              Our Story
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 500, color: "#2B2B2B", lineHeight: 1.2, marginBottom: 24 }}>Born From a Passion<br />for True Wellness</h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontStyle: "italic", color: "#7A6A62", lineHeight: 1.85, marginBottom: 40 }}>
              Founded in 2015, Serenity Spa was born from a simple belief: every woman deserves a sanctuary. A place where she can escape the chaos, reconnect with herself, and leave feeling truly radiant. Over a decade, we have built that sanctuary — one treatment at a time.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {pillars.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  style={{ padding: 20, borderRadius: 16, background: "rgba(245,237,230,.6)", border: "1px solid #ECD9CF", transition: "all .3s ease" }}
                  whileHover={{ background: "rgba(245,237,230,1)", borderColor: "rgba(198,167,94,.4)" }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: 8 }}>{p.icon}</div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 500, color: "#2B2B2B", marginBottom: 6 }}>{p.title}</h4>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#7A6A62", lineHeight: 1.6, fontWeight: 300 }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .spa-about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
};
