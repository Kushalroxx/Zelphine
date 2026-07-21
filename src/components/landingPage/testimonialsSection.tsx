"use client"
import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";
import InViewAnimation from "../majorUi/inViewAnimation";
import { AlertCircle, Lightbulb, Wrench, ArrowRight, Map, FileSearch, Shield } from "lucide-react";
import Link from "next/link";

const ProductIterationSection = () => {
const iterations = [
  {
    project: "CareerSathi AI",
    icon: <Map className="w-5 h-5 text-blue-500" />,
    color: "border-t-blue-500",
    challenge:
      "Students struggled with fragmented career advice, generic roadmaps, and uncertainty about what skills to learn next.",
    learned:
      "Users wanted an AI that understands their background, goals, and progress—not just a one-time roadmap generator.",
    changed:
      "Expanded the platform into an AI Career Mentor that analyzes student profiles, recommends personalized career paths, identifies skill gaps, suggests learning resources, compares career options, and continuously guides progress.",
    statusLabel: "Engineering Outcome",
    statusIcon: <Wrench className="w-4 h-4 text-emerald-500" />,
  },

  {
    project: "Aegis AI",
    icon: <Shield className="w-5 h-5 text-purple-500" />,
    color: "border-t-purple-500",
    challenge:
      "Organizations adopting LLMs lacked visibility into prompt risks, sensitive data exposure, and model behavior.",
    learned:
      "Security teams needed AI governance to be proactive, transparent, and integrated directly into production workflows rather than relying only on post-incident audits.",
    changed:
      "Designed an AI governance layer that monitors prompts and responses, detects prompt injection attempts, identifies sensitive data, performs policy validation, audits AI interactions, and generates compliance-ready logs.",
    statusLabel: "Engineering Outcome",
    statusIcon: <Wrench className="w-4 h-4 text-emerald-500" />,
  },

  {
    project: "HireWise",
    icon: <FileSearch className="w-5 h-5 text-emerald-500" />,
    color: "border-t-emerald-500",
    challenge:
      "Recruiters spent significant time manually reviewing resumes because keyword-based ATS systems often missed strong candidates.",
    learned:
      "Recruiters trusted AI recommendations only when every ranking included clear supporting evidence instead of an unexplained score.",
    changed:
      "Built a semantic candidate evaluation pipeline that analyzes job descriptions and resumes, ranks applicants using contextual matching, and highlights evidence snippets that explain every recommendation.",
    statusLabel: "Engineering Outcome",
    statusIcon: <Wrench className="w-4 h-4 text-emerald-500" />,
  },
];
  const fadeInUp: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
  
  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="pt-16 md:pt-24 pb-16 w-full max-w-[1200px] mx-auto">
      
      {/* Header Area */}
      <InViewAnimation>
        <div className="text-center mb-16 ">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
            Product Evolution
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
            Engineering Decisions Behind Our <span className="text-primary">Products.</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just ship code and walk away. We analyze user friction, learn from real-world testing, and continuously engineer better product experiences.
          </p>
        </div>
      </InViewAnimation>

      {/* Iteration Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        {iterations.map((item, index) => (
          <motion.div
            key={index}
            variants={child}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="h-full"
          >
            <Card className={`h-full flex flex-col border-t-4 ${item.color} shadow-sm hover:shadow-xl transition-all duration-300 bg-card overflow-hidden`}>
              
              {/* Project Title */}
              <CardHeader className="pb-4 border-b border-border/50 bg-muted/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-background shadow-sm border border-border/50">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {item.project}
                  </CardTitle>
                </div>
              </CardHeader>

              {/* Iteration Breakdown */}
              <CardContent className="pt-6 flex flex-col gap-6 flex-grow">
                
                {/* Challenge */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-red-400" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">The Challenge</h4>
                  </div>
                  <p className="text-sm font-medium text-foreground leading-relaxed pl-6">
                    {item.challenge}
                  </p>
                </div>

                {/* Insight */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">What We Learned</h4>
                  </div>
                  <p className="text-sm font-medium text-foreground leading-relaxed pl-6">
                    {item.learned}
                  </p>
                </div>

                {/* Execution */}
                <div className="mt-auto pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    {item.statusIcon}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">{item.statusLabel}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    {item.changed}
                  </p>
                </div>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA SECTION */}
      <InViewAnimation>
        <div className="flex justify-center px-4">
          <Link href="/case-studies">
            <button className="px-5 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-primary/25 flex items-center gap-2 group">
               See How We Built These Products
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </InViewAnimation>
    </section>
  );
};

export default ProductIterationSection;