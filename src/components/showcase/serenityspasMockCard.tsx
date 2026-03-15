"use client";
import React from 'react';
import { ArrowRight, Calendar, LayoutTemplate, Star } from 'lucide-react';
import Link from 'next/link';
import SerenitySpaMock from './serenitySpaMock';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
export default function SerenityShowcaseLayout() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp as any}
      className="w-full flex flex-col bg-[#FCFAF5] rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-[#E8E3D9] shadow-sm">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative bg-[#131111] overflow-hidden">
        <SerenitySpaMock />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full divide-y lg:divide-y-0 lg:divide-x divide-[#E8E3D9]">
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#D2B48C]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#CBA365] uppercase">
              Wellness & Beauty
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2C2825] mb-6 leading-tight">
            Serenity Spa <br />
            <span className="font-serif italic text-[#CBA365]">{"&"} Beauty</span>
          </h3>

          <p className="text-[#6B635A] text-base md:text-lg leading-relaxed mb-8 max-w-[90%]">
            A premium luxury wellness platform engineered with smart appointment flows, membership tiers, interactive service cards, and an emotion-first brand experience.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {['Luxury Brand', 'Booking System', 'Membership Tiers', 'Full-Stack'].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 border border-[#D2B48C]/40 rounded-full text-xs font-bold tracking-wider uppercase text-[#A68A5E]">
                {tag}
              </span>
            ))}
          </div>

          <Link href="/showcase/serenityspa" className="inline-flex items-center justify-center gap-2 bg-[#C8A97E] hover:bg-[#B59567] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-colors w-fit group/btn">
            Explore The Spa
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="lg:col-span-5 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h4 className="text-xs font-bold tracking-[0.2em] text-[#CBA365] uppercase mb-8">
            What We Built
          </h4>

          <div className="space-y-4">
            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#E8E3D9] flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[#E8E3D9]">
                <LayoutTemplate className="w-5 h-5 text-[#CBA365]" />
              </div>
              <div>
                <h5 className="text-[#2C2825] font-bold text-base">6 Service Cards</h5>
                <p className="text-[#8B8378] text-xs mt-1">Interactive booking flows</p>
              </div>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#E8E3D9] flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[#E8E3D9]">
                <Star className="w-5 h-5 text-[#CBA365]" />
              </div>
              <div>
                <h5 className="text-[#2C2825] font-bold text-base">3 Membership Tiers</h5>
                <p className="text-[#8B8378] text-xs mt-1">Silver, Gold & Platinum</p>
              </div>
            </div>

            <div className="bg-[#FCFAF5] p-5 rounded-2xl border border-[#E8E3D9] flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[#E8E3D9]">
                <Calendar className="w-5 h-5 text-[#CBA365]" />
              </div>
              <div>
                <h5 className="text-[#2C2825] font-bold text-base">Smart Booking Form</h5>
                <p className="text-[#8B8378] text-xs mt-1">With validation & confirmations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}