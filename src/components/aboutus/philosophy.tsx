"use client"
import React, { forwardRef } from 'react';
import InViewAnimation from '../majorUi/inViewAnimation';
import { Layers, Target, ShieldCheck, Eye } from 'lucide-react';

const principles = [
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: "Architecture before implementation",
    desc: "We design systems before writing production code."
  },
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    title: "Build only what creates value",
    desc: "If a feature won't move your business forward, we'll tell you."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: "Every release should be maintainable",
    desc: "Readable code today saves hundreds of hours tomorrow."
  },
  {
    icon: <Eye className="w-5 h-5 text-primary" />,
    title: "Transparent engineering",
    desc: "Clear communication, documented decisions, and predictable delivery."
  }
];

const Philosophy = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-20 md:py-24">
      <div className="container mx-auto max-w-6xl ">
          
          <InViewAnimation>
              <div className="mb-8 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 md:mb-6">
                      Why Zelphine <span className='text-primary'>Exists</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-primary rounded-full"></div>
              </div>
          </InViewAnimation>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              
              {/* The Story */}
              <InViewAnimation delay={0.2}>
                  <div className="space-y-5 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                      <p>
                          Every business deserves software built for its goals—not software forced into a template.
                      </p>
                      <p>
                          Too many projects begin by discussing frameworks, languages, and features before understanding the real business problem. We built Zelphine around a different philosophy.
                      </p>
                      <ul className="pl-4 border-l-2 border-primary/30 space-y-2 text-foreground font-medium my-6">
                        <li>Understand the business first.</li>
                        <li>Design the architecture second.</li>
                        <li>Write code only after both are clear.</li>
                      </ul>
                      <p>
                          That process reduces unnecessary complexity, avoids expensive rebuilds, and creates software that continues delivering value long after launch.
                      </p>
                      <p className="font-medium text-foreground">
                          Whether we're improving an existing product or building one from scratch, every engineering decision is measured against one question: <span className="text-primary italic">Will this make the product stronger six months from now—not just today?</span>
                      </p>
                  </div>
              </InViewAnimation>

              {/* The Principles */}
              <InViewAnimation delay={0.4}>
                   <div className="bg-card p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg border border-border">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8">Principles That Guide Every Build</h3>
                      <ul className="space-y-6">
                          {principles.map((item, i) => (
                              <li key={i} className="flex items-start gap-4">
                                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 ">
                                      {item.icon}
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-foreground text-sm md:text-base mb-1">{item.title}</h4>
                                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                   </div>
              </InViewAnimation>
          </div>

      </div>
    </section>
  );
});

Philosophy.displayName = "Philosophy";
export default Philosophy;