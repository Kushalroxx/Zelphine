"use client"
import { HeroSection } from "@/components/apexfit/animatedHeadline";
import { BentoGrid } from "@/components/apexfit/bentoGrid";
import { FooterLeadCapture } from "@/components/apexfit/footer";
import { InteractiveSchedule } from "@/components/apexfit/interactiveSchedule";
import { NavBar } from "@/components/apexfit/navBar";
import { PricingSection } from "@/components/apexfit/pricingSection";
import { TestimonialsSection } from "@/components/apexfit/testimonials";

export default function GymLandingPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F3F4F6] selection:bg-[#CCFF00] selection:text-black font-sans overflow-x-hidden">
      
      <NavBar/>
      <HeroSection />
      <BentoGrid />
      <InteractiveSchedule />
      <PricingSection />
      <TestimonialsSection/>
      <FooterLeadCapture />
      
    </main>
  );
}