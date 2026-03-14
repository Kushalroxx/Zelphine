import { Sparkles, Clock, CheckCircle2 } from "lucide-react";

const SerenitySpasMock = () => (
  <div className="w-full h-full relative flex flex-col justify-center items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1A1218 0%, #0F0D10 100%)" }}>
    {/* Warm gold ambient glow */}
    <div style={{ position: "absolute", top: "20%", right: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(198,167,94,.12) 0%, transparent 70%)", pointerEvents: "none" }} />
    <div style={{ position: "absolute", bottom: 0, left: 0, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(244,184,197,.07) 0%, transparent 70%)", pointerEvents: "none" }} />
    {/* Soft grid texture */}
    <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

    <div className="relative z-10 w-full max-w-sm mx-auto" style={{ transform: "scale(1)", transition: "transform .7s ease" }}>
      {/* Floating ambient card */}
      <div style={{ position: "absolute", top: -32, left: -8, width: "70%", background: "rgba(255,248,242,.04)", border: "1px solid rgba(198,167,94,.15)", borderRadius: 16, padding: "12px 16px", transform: "rotate(-5deg)", backdropFilter: "blur(4px)" }}>
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6A75E", marginBottom: 4 }}>Signature Ritual</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#FFF8F2", fontWeight: 500 }}>Gold Facial</div>
      </div>

      {/* Main booking card */}
      <div style={{ background: "rgba(255,248,242,.06)", border: "1px solid rgba(198,167,94,.2)", borderRadius: 20, padding: 20, backdropFilter: "blur(10px)" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid rgba(255,248,242,.08)" }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(198,167,94,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Sparkles style={{ width: 16, height: 16, color: "#C6A75E" }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#FFF8F2", fontWeight: 500 }}>Deep Tissue Massage</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "rgba(255,248,242,.5)", marginTop: 2 }}>60 Min · Therapist: Priya</div>
          </div>
        </div>

        {/* Time slots */}
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,248,242,.4)", marginBottom: 10 }}>Select Time</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {[{ t: "10 AM", active: false }, { t: "12 PM", active: true }, { t: "3 PM", active: false }].map(({ t, active }) => (
            <div key={t} style={{ flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 10, fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", fontWeight: 500, border: `1px solid ${active ? "#C6A75E" : "rgba(255,248,242,.1)"}`, background: active ? "rgba(198,167,94,.15)" : "transparent", color: active ? "#C6A75E" : "rgba(255,248,242,.4)", transition: "all .3s ease" }}>{t}</div>
          ))}
        </div>

        {/* Therapist availability bar */}
        <div style={{ height: 4, background: "rgba(255,248,242,.06)", borderRadius: 4, overflow: "hidden", marginBottom: 6 }}>
          <div style={{ height: "100%", width: "66%", background: "linear-gradient(90deg, #C6A75E, #E8C87D)", borderRadius: 4 }} />
        </div>
        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", color: "rgba(255,248,242,.35)" }}>2 of 3 therapists available</div>
      </div>

      {/* Confirmed pill */}
      <div style={{ position: "absolute", bottom: -20, right: -16, background: "linear-gradient(135deg, #C6A75E, #E8C87D)", borderRadius: 16, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 24px rgba(198,167,94,.3)" }}>
        <CheckCircle2 style={{ width: 16, height: 16, color: "#1A1A1A", flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A1A1A" }}>CONFIRMED</div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", color: "rgba(26,26,26,.65)", marginTop: 1 }}>Tomorrow, 12:00 PM</div>
        </div>
      </div>

      {/* Floating clock badge */}
      <div style={{ position: "absolute", top: 8, right: -12, background: "rgba(255,248,242,.06)", border: "1px solid rgba(255,248,242,.1)", borderRadius: 10, padding: "6px 10px", display: "flex", alignItems: "center", gap: 6, backdropFilter: "blur(4px)" }}>
        <Clock style={{ width: 12, height: 12, color: "#C6A75E" }} />
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "rgba(255,248,242,.6)" }}>60 min</span>
      </div>
    </div>
  </div>
);

export default SerenitySpasMock;
