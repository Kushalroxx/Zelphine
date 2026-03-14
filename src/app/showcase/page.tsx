"use client";

import React from "react";
import Footer from "@/components/sections/footer";
import ShowCaseHero from "@/components/showcase/showCaseHero";
import CareerSathiMockCard from "@/components/showcase/careerSathiMockCard";
import ApexFitMockCard from "@/components/showcase/apexfitMockCard";
import SerenitySpasMockCard from "@/components/showcase/serenityspasMockCard";
import ShowcaseCTA from "@/components/showcase/showcaseCTA";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <ShowCaseHero />
      <section className="px-6 max-w-7xl mx-auto space-y-20 pb-20">
        <ApexFitMockCard />
        <CareerSathiMockCard />
        <SerenitySpasMockCard />
      </section>
      <ShowcaseCTA />
      <Footer/>
    </div>
  );
}