"use client";

import { SpaNavBar } from "@/components/serenityspa/navBar";
import { SpaHeroSection } from "@/components/serenityspa/heroSection";
import { SpaServicesSection } from "@/components/serenityspa/servicesSection";
import { SpaAboutSection } from "@/components/serenityspa/aboutSection";
import { SpaPricingSection } from "@/components/serenityspa/pricingSection";
import { SpaTestimonialsSection } from "@/components/serenityspa/testimonialsSection";
import { SpaBookingSection } from "@/components/serenityspa/bookingSection";
import { SpaFooter } from "@/components/serenityspa/footerSection";

export default function SerenitySpaPage() {
  return (
    <main style={{ background: "#FFF8F2", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>
      <SpaNavBar />
      <SpaHeroSection />
      <SpaServicesSection />
      <SpaAboutSection />
      <SpaPricingSection />
      <SpaTestimonialsSection />
      <SpaBookingSection />
      <SpaFooter />
    </main>
  );
}
