"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=85",
  "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1920&q=85",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&q=85",
];

export const SpaHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => { 
      if (heroRef.current && heroRef.current.getBoundingClientRect().bottom > 0) {
        setScrollY(window.scrollY); 
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={heroRef} id="spa-hero" style={{ position: "relative", height: "100vh", minHeight: 700, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* Slideshow */}
      {slides.map((img, i) => (
        <div key={i} style={{
          position: "absolute", inset: "-10% 0",
          backgroundImage: `url('${img}')`, backgroundSize: "cover", backgroundPosition: "center",
          opacity: i === currentSlide ? 1 : 0, transition: "opacity 1.8s ease-in-out",
          transform: `translateY(${scrollY * 0.35}px) scale(1.08)`, willChange: "transform",
        }} />
      ))}
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(26,16,10,.62) 0%, rgba(43,27,20,.42) 50%, rgba(198,167,94,.14) 100%)", zIndex: 1 }} />
      {/* Gold orbs */}
      <div style={{ position: "absolute", top: "12%", left: "4%", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,167,94,.14) 0%, transparent 70%)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "8%", right: "4%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,167,94,.08) 0%, transparent 70%)", zIndex: 2, pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 960, padding: "0 24px" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 28, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "opacity .9s ease .15s, transform .9s ease .15s" }}>
          <div style={{ width: 44, height: 1, background: "#C6A75E" }} />
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500 }}>Premium Wellness Experience</span>
          <div style={{ width: 44, height: 1, background: "#C6A75E" }} />
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.2rem,9vw,7.5rem)", fontWeight: 600, color: "#FFF8F2", lineHeight: 1.04, letterSpacing: "-0.02em", marginBottom: 8, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)", transition: "opacity 1s ease .35s, transform 1s ease .35s" }}>
          Relax.{" "}<em style={{ color: "#C6A75E", fontStyle: "italic", display: "block" }}>Refresh.</em>Rejuvenate.
        </h1>

        {/* Subheadline */}
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "rgba(255,248,242,.80)", margin: "28px auto 52px", maxWidth: 600, lineHeight: 1.75, fontStyle: "italic", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "opacity .9s ease .6s, transform .9s ease .6s" }}>
          Experience premium self-care rituals designed to restore your inner glow and outer radiance — in a sanctuary made just for you.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", opacity: loaded ? 1 : 0, transition: "opacity .8s ease .85s" }}>
          <button onClick={() => scrollTo("spa-booking")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#C6A75E,#D4B96E)", color: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 44px", borderRadius: 9999, border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(198,167,94,.3)", transition: "all .4s ease" }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 35px rgba(198,167,94,.5)"; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(198,167,94,.3)"; }}>
            ✦ Book Appointment
          </button>
          <button onClick={() => scrollTo("spa-services")} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#FFF8F2", fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", padding: "17px 40px", borderRadius: 9999, border: "1.5px solid rgba(255,248,242,.50)", cursor: "pointer", transition: "all .4s ease" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,248,242,.9)"; e.currentTarget.style.background = "rgba(255,248,242,.10)"; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,248,242,.50)"; e.currentTarget.style.background = "transparent"; }}>
            View Services →
          </button>
        </div>

        {/* Trust bar */}
        <div style={{ marginTop: 68, display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap", opacity: loaded ? 1 : 0, transition: "opacity 1.2s ease 1.2s" }}>
          <div style={{ display: "flex" }}>{["👩","👩🏻","👩🏽","👩🏾"].map((e, i) => (<div key={i} style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,248,242,.18)", border: "2px solid rgba(255,248,242,.45)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", marginLeft: i > 0 ? -10 : 0 }}>{e}</div>))}</div>
          <div style={{ width: 1, height: 32, background: "rgba(255,248,242,.25)" }} />
          <div>
            <div style={{ display: "flex", gap: 2 }}>{"★★★★★".split("").map((s, i) => <span key={i} style={{ color: "#C6A75E", fontSize: "0.8rem" }}>{s}</span>)}</div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(255,248,242,.65)", marginTop: 2, fontWeight: 300 }}>Trusted by 5,000+ happy clients</p>
          </div>
          <div style={{ width: 1, height: 32, background: "rgba(255,248,242,.25)" }} />
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(255,248,242,.65)", fontWeight: 300, lineHeight: 1.5 }}>
            <span style={{ color: "#C6A75E", fontWeight: 500 }}>10+</span> Years of Excellence<br />
            <span style={{ color: "#C6A75E", fontWeight: 500 }}>25+</span> Expert Therapists
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", zIndex: 10, display: "flex", flexDirection: "column", gap: 10 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} style={{ width: 3, height: i === currentSlide ? 36 : 16, borderRadius: 2, background: i === currentSlide ? "#C6A75E" : "rgba(255,248,242,.35)", border: "none", cursor: "pointer", transition: "all .45s ease", padding: 0 }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: loaded ? 0.7 : 0, transition: "opacity 1s ease 2s" }}>
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,248,242,.5)" }}>Scroll</span>
        <div style={{ width: 1, height: 56, background: "linear-gradient(to bottom, #C6A75E, transparent)" }} />
      </div>
    </section>
  );
};
