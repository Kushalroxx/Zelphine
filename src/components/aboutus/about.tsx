"use client"
import React, { useRef } from 'react';
import AboutHero from '@/components/aboutus/aboutHero';
import Philosophy from '@/components/aboutus/philosophy';
import Lifecycle from '@/components/aboutus/lifeCycle';
import AboutCTA from '@/components/aboutus/aboutCTA';

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  
  const scrollToStory = () => {
    if (storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-background px-4 min-h-screen relative overflow-hidden'>
      <AboutHero onScrollToStory={scrollToStory} />
      <Philosophy ref={storyRef} />
      <Lifecycle />
      <AboutCTA />
    </div>
  );
}