"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { emoji: "🌸", title: "Facial Therapy", description: "Revitalize your skin with our signature luxury facial treatments using premium serums.", tag: "Most Popular", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80" },
  { emoji: "💆", title: "Hair Spa", description: "Nourish and restore your hair with intensive conditioning and scalp rituals.", tag: "", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
  { emoji: "🧘", title: "Body Massage", description: "Melt away tension with our therapeutic and aromatherapy full-body massage.", tag: "Bestseller", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" },
  { emoji: "👰", title: "Bridal Makeup", description: "Look flawlessly radiant on your special day with our expert bridal artists.", tag: "", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80" },
  { emoji: "💫", title: "Skin Treatment", description: "Advanced derma-care solutions tailored to your skin's unique needs.", tag: "New", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80" },
  { emoji: "🌿", title: "Aromatherapy", description: "Restore balance and harmony with our signature essential oil blends.", tag: "", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80" },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: (index % 3) * 0.12 }}
      style={{ background: "#fff", borderRadius: 20, border: "1px solid #ECD9CF", overflow: "hidden", cursor: "pointer", boxShadow: "0 4px 20px rgba(43,43,43,.05)", transition: "all .5s ease" }}
      whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(43,43,43,.12)" }}
    >
      <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
        <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .7s ease" }} onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = "scale(1.08)")} onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = "scale(1)")} />
        {service.tag && (
          <div style={{ position: "absolute", top: 16, left: 16, background: "#C6A75E", color: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, padding: "5px 14px", borderRadius: 9999 }}>{service.tag}</div>
        )}
        <div style={{ position: "absolute", bottom: 16, right: 16, width: 44, height: 44, borderRadius: "50%", background: "rgba(255,248,242,.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", boxShadow: "0 4px 12px rgba(0,0,0,.15)" }}>{service.emoji}</div>
      </div>
      <div style={{ padding: 28 }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 500, color: "#2B2B2B", marginBottom: 10, letterSpacing: "0.01em" }}>{service.title}</h3>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: "#7A6A62", lineHeight: 1.7, marginBottom: 20, fontWeight: 300 }}>{service.description}</p>
        <button onClick={() => document.getElementById("spa-booking")?.scrollIntoView({ behavior: "smooth" })}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#C6A75E", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", padding: "10px 24px", borderRadius: 9999, border: "1.5px solid #C6A75E", cursor: "pointer", transition: "all .4s ease" }}
          onMouseEnter={e => { const b = e.currentTarget; b.style.background = "#C6A75E"; b.style.color = "#fff"; }}
          onMouseLeave={e => { const b = e.currentTarget; b.style.background = "transparent"; b.style.color = "#C6A75E"; }}>
          Book Now →
        </button>
      </div>
    </motion.div>
  );
}

export const SpaServicesSection = () => (
  <section id="spa-services" style={{ padding: "120px 24px", background: "#FDFAF7" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{ display: "inline-block", fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500, marginBottom: 16, paddingLeft: 40, position: "relative" }}>
          <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 28, height: 1, background: "#C6A75E" }} />
          What We Offer
        </span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 500, color: "#2B2B2B", lineHeight: 1.15, letterSpacing: "-0.01em" }}>Our Signature<br />Services</h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontStyle: "italic", color: "#7A6A62", marginTop: 16 }}>Each treatment is crafted to bring you the ultimate luxury experience you deserve.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
        {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
      </div>
    </div>
  </section>
);
