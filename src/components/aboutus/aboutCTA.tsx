"use client"
import React from 'react';
import InViewAnimation from '../majorUi/inViewAnimation';
import { Button } from '../ui';
import { useRouter } from 'nextjs-toploader/app';
import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  const router = useRouter();

  return (
    <section className="py-20 md:py-24 ">
      <div className="container mx-auto  max-w-4xl text-center">
        <InViewAnimation>
            <>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Build With Engineers Who <br className="hidden sm:block"/>
            <span className="text-primary">Think Beyond Delivery.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're validating an idea, modernizing an existing platform, or scaling a growing product, we'll help you choose the right technical approach before writing a single line of code.
          </p>
          <Button
              onClick={() => router.push("/contactus")}
              className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 text-sm md:text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all"
          >
              Discuss Your Project <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Button>
            </>
        </InViewAnimation>
      </div>
    </section>
  );
}