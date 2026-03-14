"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const SERVICES = ["Facial Therapy", "Hair Spa", "Body Massage", "Bridal Makeup", "Skin Treatment", "Aromatherapy"];
const SUGGESTIONS: Record<string, string[]> = {
  "Facial Therapy": ["Hydrating Glow Facial", "Anti-Aging Deep Cleanse", "Brightening Vitamin C Treatment"],
  "Hair Spa": ["Keratin Nourishing Spa", "Scalp Detox Ritual", "Protein Repair Treatment"],
  "Body Massage": ["Swedish Relaxing Massage", "Deep Tissue Therapy", "Hot Stone Ritual"],
  "Bridal Makeup": ["Full Bridal Package", "Pre-Bridal Ritual (3 sessions)", "Day-of Glam Session"],
  "Skin Treatment": ["Acne Control Peel", "Pigmentation Correction", "Pore Refining Treatment"],
  "Aromatherapy": ["Lavender Calm Session", "Citrus Energy Ritual", "Rose Rejuvenation"],
};
const TIME_SLOTS = ["10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"];
const today = new Date().toISOString().split("T")[0];

const inp = (err?: string): React.CSSProperties => ({ width: "100%", padding: "16px 20px", background: "#fff", border: `1.5px solid ${err ? "#E6B7C1" : "#ECD9CF"}`, borderRadius: 12, fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "#2B2B2B", outline: "none", transition: "all .3s ease", WebkitAppearance: "none" });

export const SpaBookingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", service: "", sub: "", date: "", time: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter a valid 10-digit mobile number";
    if (!form.service) e.service = "Please select a service";
    if (!form.date) e.date = "Please select a date";
    if (!form.time) e.time = "Please select a time";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true);
  };

  const lblStyle: React.CSSProperties = { display: "block", fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A6A62", fontWeight: 500, marginBottom: 8 };
  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => { e.target.style.borderColor = "#C6A75E"; e.target.style.boxShadow = "0 0 0 4px rgba(198,167,94,.12)"; };
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => { e.target.style.borderColor = "#ECD9CF"; e.target.style.boxShadow = "none"; };

  if (done) return (
    <section id="spa-booking" style={{ padding: "120px 24px", background: "#F5EDE6" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }}>
          <div style={{ fontSize: "4rem", marginBottom: 24 }}>✨</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", color: "#2B2B2B", marginBottom: 16 }}>Booking Confirmed!</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontStyle: "italic", color: "#7A6A62", marginBottom: 32 }}>Thank you, <strong>{form.name}</strong>. We'll call you to confirm your <strong>{form.service}</strong> appointment.</p>
          <button onClick={() => { setDone(false); setForm({ name: "", phone: "", service: "", sub: "", date: "", time: "" }); }}
            style={{ background: "linear-gradient(135deg,#C6A75E,#D4B96E)", color: "#fff", border: "none", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 44px", borderRadius: 9999, boxShadow: "0 4px 20px rgba(198,167,94,.3)" }}>
            Book Another Session
          </button>
        </motion.div>
      </div>
    </section>
  );

  return (
    <section id="spa-booking" style={{ padding: "120px 24px", background: "#F5EDE6" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }} ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500, marginBottom: 16, paddingLeft: 40, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 28, height: 1, background: "#C6A75E" }} />
            Book Now
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 500, color: "#2B2B2B", lineHeight: 1.15 }}>Reserve Your<br />Luxury Session</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: "#7A6A62", marginTop: 12 }}>Choose your preferred service and time. Our team will confirm within 1 hour.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.2 }}
          style={{ maxWidth: 680, margin: "0 auto", background: "#fff", borderRadius: 24, padding: "56px 48px", boxShadow: "0 20px 60px rgba(43,43,43,.1)", border: "1px solid #ECD9CF" }} className="spa-booking-card">
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="spa-form-row">
              <div>
                <label style={lblStyle}>Full Name</label>
                <input type="text" placeholder="Your name" value={form.name} onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }} style={inp(errors.name)} onFocus={focus} onBlur={blur} />
                {errors.name && <p style={{ color: "#C0666F", fontSize: "0.75rem", marginTop: 6, fontFamily: "'Jost', sans-serif" }}>{errors.name}</p>}
              </div>
              <div>
                <label style={lblStyle}>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }} style={inp(errors.phone)} onFocus={focus} onBlur={blur} />
                {errors.phone && <p style={{ color: "#C0666F", fontSize: "0.75rem", marginTop: 6, fontFamily: "'Jost', sans-serif" }}>{errors.phone}</p>}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={lblStyle}>Select Service</label>
              <select value={form.service} onChange={e => { setForm({ ...form, service: e.target.value, sub: "" }); setErrors({ ...errors, service: "" }); }} style={{ ...inp(errors.service), cursor: "pointer" }} onFocus={focus} onBlur={blur}>
                <option value="">— Choose a service —</option>
                {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p style={{ color: "#C0666F", fontSize: "0.75rem", marginTop: 6, fontFamily: "'Jost', sans-serif" }}>{errors.service}</p>}
            </div>

            {SUGGESTIONS[form.service]?.length > 0 && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} style={{ marginBottom: 20 }}>
                <label style={lblStyle}>✦ Recommended Treatments</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {SUGGESTIONS[form.service].map(s => (
                    <button key={s} type="button" onClick={() => setForm({ ...form, sub: s })}
                      style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", padding: "8px 18px", borderRadius: 9999, border: `1.5px solid ${form.sub === s ? "#C6A75E" : "#ECD9CF"}`, background: form.sub === s ? "rgba(198,167,94,.12)" : "transparent", color: form.sub === s ? "#C6A75E" : "#7A6A62", cursor: "pointer", transition: "all .25s ease", fontWeight: form.sub === s ? 500 : 300 }}>
                      {s}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }} className="spa-form-row">
              <div>
                <label style={lblStyle}>Preferred Date</label>
                <input type="date" value={form.date} min={today} onChange={e => { setForm({ ...form, date: e.target.value }); setErrors({ ...errors, date: "" }); }} style={inp(errors.date)} onFocus={focus} onBlur={blur} />
                {errors.date && <p style={{ color: "#C0666F", fontSize: "0.75rem", marginTop: 6, fontFamily: "'Jost', sans-serif" }}>{errors.date}</p>}
              </div>
              <div>
                <label style={lblStyle}>Preferred Time</label>
                <select value={form.time} onChange={e => { setForm({ ...form, time: e.target.value }); setErrors({ ...errors, time: "" }); }} style={{ ...inp(errors.time), cursor: "pointer" }} onFocus={focus} onBlur={blur}>
                  <option value="">Select time</option>
                  {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.time && <p style={{ color: "#C0666F", fontSize: "0.75rem", marginTop: 6, fontFamily: "'Jost', sans-serif" }}>{errors.time}</p>}
              </div>
            </div>

            <button type="submit" style={{ width: "100%", padding: 18, borderRadius: 9999, border: "none", background: "linear-gradient(135deg,#C6A75E,#D4B96E)", color: "#fff", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", boxShadow: "0 4px 20px rgba(198,167,94,.3)", transition: "all .4s ease" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 35px rgba(198,167,94,.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(198,167,94,.3)"; }}>
              ✦ Confirm Appointment
            </button>
            <p style={{ textAlign: "center", fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "#7A6A62", marginTop: 16, fontWeight: 300 }}>🔒 Your privacy is protected. We never share your data.</p>
          </form>
        </motion.div>
      </div>
      <style>{`@media (max-width: 640px) { .spa-booking-card { padding: 32px 24px !important; } .spa-form-row { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};
