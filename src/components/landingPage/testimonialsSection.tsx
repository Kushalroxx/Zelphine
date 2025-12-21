import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui";
import InViewAnimation from "../majorUi/inViewAnimation";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
  {
    name: "Rohit Verma",
    jobTitle: "CTO",
    company: "SaaS Co.", 
    stars: 5, 
    title: "SaaS Revamp Delivered Beyond Expectations",
    text: "We approached their team for a complete revamp of our SaaS dashboard. They understood our vision perfectly and delivered a fast, scalable, and elegant solution. Totally dependable!",
  },
  {
    name: "Sneha Kapoor",
    jobTitle: "Marketing Director", 
    company: "Launchify",
    stars: 5, 
    title: "Game-Changing Website for Our Marketing Launch",
    text: "Their attention to branding and detail helped us create a site that made our product launch 10x more impactful. They didn’t just deliver a site, they delivered conversions.",
  },
  {
    name: "Nikhil Sharma",
    jobTitle: "Founder",
    company: "TechScale", 
    stars: 4, 
    title: "Reliable Partner for Scalable Web Solutions",
    text: "What stood out was their ability to take ownership. From day one, it felt like they were part of our internal team. Fast, professional, and technically sound.",
  },
];
  const fadeInUp: Variants = {
    hidden: { opacity: 0},
    visible: { opacity:1,
      transition:{
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
  };
  const child = {
    hidden: { opacity: 0, y: 20},
    visible: { opacity:1, y: 0},
  }


  return (
    <section className=" pt-16 md:pt-24">
      <InViewAnimation >
        <h2
          className="text-3xl md:text-5xl text-center font-bold mb-16"
        >
         Client Success Stories
        </h2>
      </InViewAnimation>
      <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeInUp} className="justify-center mx-auto px-4 flex flex-wrap gap-4 md:gap-6">
  {testimonials.map((testimonial, index) => (
   <motion.div
  key={index}
  variants={child}
  whileHover={{ scale: 1.005, y: -2 }}
  transition={{ duration: 0.1, type: "spring", stiffness: 100, damping: 15 }}
  className="w-full md:w-xs"
>
  <Card className="md:h-[540px] flex flex-col justify-between md:p-5 md:pt-8">
    <CardHeader className="flex flex-col gap-4">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.stars
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <CardTitle className="text-lg md:text-xl font-semibold text-shadow">
        {testimonial.title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-sm md:text-lg break-words whitespace-normal">
        "{testimonial.text}"
      </p>
    </CardContent>
    <CardFooter className="border-t border-border mx-6 md:mx-0 pt-4">
      <div className="flex flex-col">
        <p className="font-semibold text-sm text-primary">
          {testimonial.name}
        </p>
        <p className="text-muted-foreground text-sm">
          {testimonial.jobTitle}, {testimonial.company}
        </p>
      </div>
    </CardFooter>
    
  </Card>
</motion.div>
  ))}
</motion.div>

    </section>
  );
};

export default TestimonialsSection;
