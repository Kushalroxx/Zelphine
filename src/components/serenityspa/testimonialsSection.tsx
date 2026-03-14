"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  { name: "Priya Sharma", role: "Regular Client · Gold Member", review: "Serenity Spa changed my life. The facial treatments here are unlike anything I've experienced. The ambiance, the team, everything feels world-class. I leave every session feeling reborn.", rating: 5, service: "Facial Therapy" },
  { name: "Meera Kapoor", role: "Bridal Client", review: "I booked their bridal package for my wedding and I looked absolutely stunning. My family and guests couldn't stop complimenting me. The team is incredibly skilled and made me feel so calm.", rating: 5, service: "Bridal Makeup" },
  { name: "Anjali Verma", role: "Platinum Member", review: "I've been a Platinum member for 2 years now. The body massage sessions here are therapeutic beyond words. My stress melts away the moment I walk through the door.", rating: 5, service: "Body Massage" },
  { name: "Kavya Menon", role: "Silver Member", review: "The hair spa treatment revived my damaged hair completely. In just 3 sessions, my hair looks healthier than ever. The staff is warm, professional, and genuinely caring.", rating: 5, service: "Hair Spa" },
  { name: "Riya Singh", role: "Walk-in Client", review: "I came in for a skin treatment and left completely blown away. The therapist customized everything for my skin type. Already booked my next appointment before I even left!", rating: 5, service: "Skin Treatment" },
];

export const SpaTestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(timer);
  }, [auto]);

  const t = testimonials[current];

  return (
    <section id="spa-testimonials" style={{ padding: "120px 24px", background: "#1A1A1A", position: "relative", overflow: "hidden" }}>
      {/* Decor */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,167,94,.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Playfair Display', serif", fontSize: "30rem", color: "rgba(255,255,255,.015)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>"</div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }} ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500, marginBottom: 16, paddingLeft: 40, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 28, height: 1, background: "#C6A75E" }} />
            Client Stories
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 500, color: "#FFF8F2", lineHeight: 1.15 }}>What Our Clients Say</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,248,242,.55)", marginTop: 12 }}>Real experiences from women who discovered their inner radiance.</p>
        </motion.div>

        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.5 }}
              style={{ background: "#fff", borderRadius: 20, padding: "40px 36px", border: "1px solid #ECD9CF", position: "relative", overflow: "hidden" }}>
              {/* Quote mark */}
              <div style={{ position: "absolute", top: -10, left: 24, fontFamily: "'Playfair Display', serif", fontSize: "8rem", color: "#C6A75E", opacity: 0.1, lineHeight: 1 }}>"</div>
              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>{"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "#C6A75E", fontSize: "1rem" }}>{s}</span>)}</div>
              {/* Service tag */}
              <div style={{ display: "inline-block", background: "rgba(198,167,94,.12)", color: "#C6A75E", fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, padding: "4px 14px", borderRadius: 9999, border: "1px solid rgba(198,167,94,.25)", marginBottom: 20 }}>{t.service}</div>
              {/* Review */}
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", lineHeight: 1.75, color: "#2B2B2B", fontStyle: "italic", marginBottom: 32 }}>"{t.review}"</p>
              {/* Client */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 54, height: 54, borderRadius: "50%", background: "linear-gradient(135deg, #C6A75E, #D4B96E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", border: "2.5px solid #C6A75E" }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 500, color: "#2B2B2B" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#7A6A62", fontWeight: 300 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 32 }}>
            <div style={{ display: "flex", gap: 10 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setAuto(false); setCurrent(i); }} style={{ width: i === current ? 32 : 10, height: 10, borderRadius: 5, background: i === current ? "#C6A75E" : "rgba(255,248,242,.2)", border: "none", cursor: "pointer", transition: "all .4s ease", padding: 0 }} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {[{ fn: () => { setAuto(false); setCurrent(p => (p - 1 + testimonials.length) % testimonials.length); }, icon: "←" }, { fn: () => { setAuto(false); setCurrent(p => (p + 1) % testimonials.length); }, icon: "→" }].map(({ fn, icon }) => (
                <button key={icon} onClick={fn} style={{ width: 48, height: 48, borderRadius: "50%", border: "1.5px solid rgba(255,248,242,.2)", background: "transparent", color: "rgba(255,248,242,.7)", fontSize: "1.1rem", cursor: "pointer", transition: "all .3s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C6A75E"; e.currentTarget.style.color = "#C6A75E"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,248,242,.2)"; e.currentTarget.style.color = "rgba(255,248,242,.7)"; }}>
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
