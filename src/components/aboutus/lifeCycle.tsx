"use client"
import React from 'react';
import InViewAnimation from '../majorUi/inViewAnimation';
import { ArrowRight } from 'lucide-react';

const processSteps = [
  "Discovery", 
  "Architecture", 
  "Sprint Planning", 
  "Development", 
  "Testing", 
  "Launch", 
  "Iteration"
];

export default function Lifecycle() {
  return (
    <section className="py-16 md:py-24 border-y border-border">
      <div className="container mx-auto max-w-6xl text-center">
          <InViewAnimation>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 md:mb-16">
              Our Engineering <span className="text-primary">Lifecycle</span>
            </h2>
          </InViewAnimation>

          <InViewAnimation delay={0.2}>
            <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-2 md:gap-y-6 md:gap-x-4">
              {processSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="bg-muted px-3 md:px-4 py-1.5 md:py-2.5 rounded-full border border-border text-[10px] sm:text-sm md:text-base font-bold text-foreground whitespace-nowrap shadow-sm">
                    {step}
                  </div>
                  {index !== processSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/50 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </InViewAnimation>
      </div>
    </section>
  );
}