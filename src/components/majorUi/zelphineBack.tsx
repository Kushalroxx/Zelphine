"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ZelphineBack({className}:{className?:string}) {
  return (
    <Link 
      href="/" 
      className={cn("group fixed top-2 left-2 z-[100] flex items-center rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border shadow-xl transition-all duration-300 border-[#CCFF00]/30 hover:border-[#CCFF00] hover:shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:-translate-y-1", className)}
    >
      {/* Icon Container */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent transition-colors duration-300 group-hover:bg-[#CCFF00]/10">
        <ArrowLeft className="w-5 h-5 text-[#CCFF00] transition-colors duration-300 group-hover:text-[#CCFF00]" />
      </div>

      {/* Expanding Text */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold uppercase tracking-widest text-[#CCFF00] opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-6">
        Back to Zelphine
      </span>
    </Link>
  );
}