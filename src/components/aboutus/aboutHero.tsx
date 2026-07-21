"use client"
import React from 'react';
import InViewAnimation from '../majorUi/inViewAnimation';
import { Button } from '../ui';
import { useRouter } from 'nextjs-toploader/app';
import SprintBoard from './sprintBoard';
import { ArrowDown } from 'lucide-react';

export default function AboutHero({ onScrollToStory }: { onScrollToStory: () => void }) {
  const router = useRouter();

  return (
    <section className="container mx-auto pt-20  md:pt-36 md:pb-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-start text-left">
          
          <InViewAnimation delay={0.1}>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="h-px w-8 bg-primary"></span>
                <h3 className="text-[10px] tracking-widest uppercase font-bold text-primary">
                  Engineering Philosophy
                </h3>
            </div>
          </InViewAnimation>

          <InViewAnimation delay={0.2}>
            <h1 className="text-[36px] md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-4 md:mb-8">
              Engineering Products That <span className="text-primary">Survive Beyond Launch.</span>
            </h1>
          </InViewAnimation>

          <InViewAnimation delay={0.3}>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mb-8 md:mb-10">
              Most software works on launch day. The challenge is making it maintainable, scalable, and easy to evolve months later. That's the standard we engineer toward.
            </p>
          </InViewAnimation>

          <InViewAnimation delay={0.4} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <Button
                onClick={onScrollToStory}
                className="w-full sm:w-auto h-11 px-8 text-xs md:text-sm font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
              >
                How We Work <ArrowDown/>
              </Button>
              <Button
                  variant="outline"
                  onClick={() => router.push("/contactus")}
                  className="w-full sm:w-auto h-11 px-8 text-xs md:text-sm font-semibold rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground"
              >
                  Discuss Your Project
              </Button>
            </div>
          </InViewAnimation>

        </div>

        <InViewAnimation delay={0.3}>
            <SprintBoard />
        </InViewAnimation>

      </div>
    </section>
  );
}