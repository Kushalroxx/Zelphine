"use client"
import React, { useRef } from 'react'
import InViewAnimation from '../majorUi/inViewAnimation';
import { Button } from '../ui';
import { useRouter } from 'nextjs-toploader/app';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const router = useRouter()
  const storyRef = useRef<HTMLDivElement>(null);
  
  const scrollToStory = () => {
    if (storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='bg-background min-h-screen relative overflow-hidden'>
      
      {/* --- HERO SECTION: SPLIT LAYOUT --- */}
      <section className="container mx-auto px-6 pt-24 pb-24 md:pt-36 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col items-start text-left">
            <InViewAnimation delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                 <span className="h-px w-8 bg-blue-600"></span>
                 <h3 className="text-xs tracking-widest uppercase font-bold text-blue-600">
                    The Mission
                 </h3>
              </div>
            </InViewAnimation>

            <InViewAnimation delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-8">
                Builders at heart.<br/>
                <span className="">
                  Engineers by trade.
                </span>
              </h1>
            </InViewAnimation>

            <InViewAnimation delay={0.3}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
                We aren't just a design agency. We are a technical partner that bridges the gap between complex engineering and intuitive design to build platforms that scale.
              </p>
            </InViewAnimation>

            <InViewAnimation delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={scrollToStory}
                  className="h-12 px-8 text-base font-semibold rounded-full "
                >
                  Read Our Story ↓
                </Button>
                <Button
                    variant="outline"
                    onClick={() => router.push("/contactus")}
                    className="h-12 px-8 text-base font-semibold rounded-full border border-muted-foreground/50 hover:border-muted-foreground hover:bg-slate-100"
                >
                    Work With Us
                </Button>
              </div>
            </InViewAnimation>
          </div>

          {/* Right: Visual / Image */}
          {/* Using a gradient placeholder or team photo here is best */}
          <InViewAnimation delay={0.3}>
             <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-100 shadow-2xl">
                {/* Replace this src with a real team photo or abstract 3D shape */}
                <Image 
                  src="/assets/aboutUs.png" // Ensure this image is high quality
                  alt="The Zelphine Team"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay Card for "Stats" or "Vibe" */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-lg">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs font-mono uppercase text-slate-500 mb-1">Founded</p>
                            <p className="text-2xl font-bold text-slate-900">2023</p>
                        </div>
                         <div>
                            <p className="text-xs font-mono uppercase text-slate-500 mb-1">HQ</p>
                            <p className="text-2xl font-bold text-slate-900">Remote First</p>
                        </div>
                    </div>
                </div>
             </div>
          </InViewAnimation>

        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section ref={storyRef} className="py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
            
            <InViewAnimation>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        More than just code.
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>
            </InViewAnimation>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                <InViewAnimation delay={0.2}>
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p>
                            In a world of templates and drag-and-drop builders, <strong className="text-slate-900">craftsmanship</strong> is dying. We started Zelphine to fix that.
                        </p>
                        <p>
                            We believe that your software shouldn't just "work"—it should be a competitive advantage. That means clean code, scalable architecture, and a user experience that feels like magic.
                        </p>
                        <p>
                             Whether we're automating your workflow or building a SaaS from scratch, we bring the same <strong className="text-slate-900">Product Mindset</strong> to every line of code.
                        </p>
                    </div>
                </InViewAnimation>

                <InViewAnimation delay={0.4}>
                     <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Our Core Values</h3>
                        <ul className="space-y-4">
                            {[
                                { title: "Ownership", desc: "We build it like we own it." },
                                { title: "Transparency", desc: "No hidden fees. No tech jargon." },
                                { title: "Velocity", desc: "Ship fast, iterate faster." },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
                                        {i+1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Button
                            onClick={() => router.push("/contactus")}
                            className='w-full mt-8 h-12 text-base font-bold'
                        >
                            Start Your Project
                        </Button>
                     </div>
                </InViewAnimation>
            </div>

        </div>
      </section>

    </div>
  )
}