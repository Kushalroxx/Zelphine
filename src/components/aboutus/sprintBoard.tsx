"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function SprintBoard() {
  return (
    <div className="hidden md:block relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border shadow-2xl flex flex-col font-sans">
      
      {/* Top Nav / Breadcrumbs */}
      <div className="flex items-center justify-between px-4 md:px-5 py-3 md:py-4 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-muted-foreground">
          <span>ZELPHINE</span>
          <span>/</span>
          <span className="text-foreground truncate max-w-[80px] sm:max-w-none">CORE-MVP</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Active Sprint</span>
        </div>
      </div>

      {/* Sprint Header */}
      <div className="px-4 md:px-5 pt-4 md:pt-6 pb-4 bg-card">
        <div className="flex justify-between items-end mb-3">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">Sprint 14</h3>
            <p className="text-[10px] md:text-xs text-muted-foreground">Oct 12 - Oct 26</p>
          </div>
          <div className="text-[10px] md:text-xs font-mono text-muted-foreground">
            60% Complete
          </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="bg-primary h-full rounded-full"
            />
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-y-auto px-3 pb-3 flex flex-col gap-1.5 bg-card custom-scrollbar">
        
        {/* Task: Done */}
        <div className="flex items-center justify-between p-2.5 md:p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent">
          <div className="flex items-center gap-3 overflow-hidden pr-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-xs md:text-sm font-medium text-muted-foreground decoration-muted-foreground/50 truncate">Authentication & JWT</span>
          </div>
          <div className="flex items-center shrink-0">
            <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground/70">ZEL-102</span>
          </div>
        </div>

        {/* Task: Done */}
        <div className="flex items-center justify-between p-2.5 md:p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent">
          <div className="flex items-center gap-3 overflow-hidden pr-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-xs md:text-sm font-medium text-muted-foreground decoration-muted-foreground/50 truncate">Payment Gateway Webhooks</span>
          </div>
          <div className="flex items-center shrink-0">
            <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground/70">ZEL-105</span>
          </div>
        </div>

        {/* Task: In Progress (Highlighted) */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-between p-2.5 md:p-3 rounded-lg bg-muted/40 border border-border shadow-sm relative overflow-hidden group"
        >
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
          <div className="flex items-center gap-3 overflow-hidden pr-2">
              <svg className="animate-spin w-4 h-4 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-xs md:text-sm font-bold text-foreground truncate">AI Recommendation Engine</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <span className="px-1.5 md:px-2 py-0.5 rounded bg-primary/10 text-primary text-[8px] md:text-[10px] font-bold uppercase whitespace-nowrap">In Review</span>
            <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground hidden sm:block">ZEL-108</span>
          </div>
        </motion.div>

        {/* Task: Todo */}
        <div className="flex items-center justify-between p-2.5 md:p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent">
          <div className="flex items-center gap-3 overflow-hidden pr-2">
              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/40 border-dashed shrink-0"></div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground truncate">E2E Testing Suite</span>
          </div>
          <div className="flex items-center shrink-0">
            <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground/70">ZEL-110</span>
          </div>
        </div>

        {/* Task: Todo */}
        <div className="flex items-center justify-between p-2.5 md:p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent">
          <div className="flex items-center gap-3 overflow-hidden pr-2">
              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/40 border-dashed shrink-0"></div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground truncate">Production Deployment</span>
          </div>
          <div className="flex items-center shrink-0">
            <span className="text-[9px] md:text-[10px] font-mono text-muted-foreground/70">ZEL-112</span>
          </div>
        </div>

      </div>

    </div>
  );
}