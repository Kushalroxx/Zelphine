const footerLinks = {
  Services: ["Facial Therapy", "Hair Spa", "Body Massage", "Bridal Makeup", "Skin Treatment", "Aromatherapy"],
  Company: ["About Us", "Our Team", "Careers", "Press"],
  Support: ["Book Appointment", "FAQ", "Cancellation Policy", "Gift Cards"],
};

export const SpaFooter = () => (
  <footer style={{ background: "#1A1A1A", color: "rgba(255,248,242,0.7)", padding: "80px 0 0", fontFamily: "'Jost', sans-serif" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
      {/* CTA Strip */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingBottom: 60, borderBottom: "1px solid rgba(255,248,242,.1)", marginBottom: 60 }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 500, color: "#FFF8F2", marginBottom: 16 }}>
          Your sanctuary <em style={{ color: "#C6A75E", fontStyle: "italic" }}>awaits.</em>
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,248,242,.55)", maxWidth: 480, lineHeight: 1.75, marginBottom: 32 }}>
          Step in. Slow down. Let us take care of everything else.
        </p>
        <button onClick={() => document.getElementById("spa-booking")?.scrollIntoView({ behavior: "smooth" })}
          style={{ background: "linear-gradient(135deg,#C6A75E,#D4B96E)", color: "#fff", border: "none", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 48px", borderRadius: 9999, boxShadow: "0 4px 20px rgba(198,167,94,.3)", transition: "all .4s ease" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 35px rgba(198,167,94,.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(198,167,94,.3)"; }}>
          ✦ Book Appointment
        </button>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 60, borderBottom: "1px solid rgba(255,248,242,.1)" }} className="spa-footer-grid">
        {/* Brand */}
        <div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 600, color: "#FFF8F2", letterSpacing: "0.02em", lineHeight: 1 }}>Serenity</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500, marginTop: 4 }}>Spa & Beauty</div>
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", lineHeight: 1.8, fontSize: "0.95rem", maxWidth: 280, marginBottom: 28 }}>Where luxury meets wellness. Every visit is a journey to inner peace and outer radiance.</p>
          <div style={{ display: "flex", gap: 12 }}>
            {["IN", "FB", "YT"].map(s => (
              <a key={s} href="#" style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(255,248,242,.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,248,242,.6)", textDecoration: "none", fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.05em", transition: "all .3s ease" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#C6A75E"; el.style.color = "#C6A75E"; el.style.background = "rgba(198,167,94,.1)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,248,242,.2)"; el.style.color = "rgba(255,248,242,.6)"; el.style.background = "transparent"; }}>
                {s}
              </a>
            ))}
          </div>
        </div>
        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4 style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C6A75E", fontWeight: 500, marginBottom: 24 }}>{group}</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {links.map(link => (
                <li key={link}>
                  <a href="#" style={{ color: "rgba(255,248,242,.6)", textDecoration: "none", fontSize: "0.9rem", fontFamily: "'Jost', sans-serif", fontWeight: 300, transition: "color .3s ease" }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = "#FFF8F2")}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = "rgba(255,248,242,.6)")}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <p style={{ fontSize: "0.82rem", fontWeight: 300 }}>© {new Date().getFullYear()} Serenity Spa & Beauty. All rights reserved.</p>
        <p style={{ fontSize: "0.82rem", fontStyle: "italic", color: "#C6A75E", fontFamily: "'Cormorant Garamond', serif" }}>Crafted with love for your wellness.</p>
      </div>

      {/* Watermark */}
      <div style={{ width: "100%", textAlign: "center", fontSize: "14vw", fontWeight: 900, fontFamily: "'Playfair Display', serif", color: "rgba(255,248,242,.018)", lineHeight: 0.8, userSelect: "none", pointerEvents: "none", paddingTop: 8, paddingBottom: 16, letterSpacing: "-0.02em" }}>SERENITY</div>
    </div>
    <style>{`@media (max-width: 768px) { .spa-footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 480px) { .spa-footer-grid { grid-template-columns: 1fr !important; } }`}</style>
  </footer>
);
