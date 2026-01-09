import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";
import InViewAnimation from "../majorUi/inViewAnimation";
import { ShieldCheck, FileCode, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const StandardsSection = () => {
  const commitments = [
    {
      title: "30-Day Bug Warranty",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      color: "border-t-emerald-500",
      text: "Any bug found within 30 days of launch is fixed immediately and free. You launch confidently, knowing we’ve got your back.",
    },
    {
      title: "Hire-Ready Documentation",
      icon: <FileCode className="w-6 h-6 text-indigo-500" />,
      color: "border-t-indigo-500",
      text: "Full technical documentation and setup guides included. Any new developer can pick up the project in under 24 hours no ramp-up delays.",
    },
    {
      title: "The ‘Expert-First’ Promise",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      color: "border-t-orange-500",
      text: "Your project is handled by our most experienced team members. Direct access to the engineers building your platform, no unnecessary middlemen or delays.",
    },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="pt-16 md:pt-24 pb-16 ">
      <InViewAnimation>
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Standards</span> We Don’t Compromise On
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto">Discipline, clear ownership, and zero shortcuts. We operate like your product team, not a vendor.
          </p>
        </div>
      </InViewAnimation>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="justify-center mx-auto px-4 flex flex-wrap gap-4 md:gap-6 mb-12"
      >
        {commitments.map((item, index) => (
          <motion.div
            key={index}
            variants={child}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="w-full md:w-[350px]"
          >
            <Card className={`h-full flex flex-col border-t-4 ${item.color} shadow-sm hover:shadow-xl transition-shadow bg-white`}>
              <CardHeader className="flex flex-col gap-4 pb-2">
                <div className="p-3 w-fit rounded-lg bg-neutral-50 shadow-sm border border-neutral-100">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* NEW CTA SECTION */}
      <InViewAnimation>
        <div className="flex justify-center">
          <button  className="relative px-6! bg-primary text-primary-foreground py-3! rounded-full font-bold transition-all shadow-xl flex items-center gap-2 group">
             <Link href="/case-studies" className="flex items-center gap-2">
                See How We Maintain Our Standards 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </button>
        </div>
      </InViewAnimation>
    </section>
  );
};

export default StandardsSection;