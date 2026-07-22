"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { 
  Laptop, Bot, Palette, ShieldCheck, PlusSquare, 
  ArrowRight, Shield, Code2, Server, FileText, Lock, Smartphone 
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import { Button } from '@/components/ui'

const includedGuarantees = [
  { icon: Smartphone, title: "Responsive Development", desc: "Flawless on all devices." },
  { icon: Server, title: "Production Deployment", desc: "Configured cloud hosting." },
  { icon: Shield, title: "30-Day Bug Warranty", desc: "Free fixes post-launch." },
  { icon: FileText, title: "Technical Documentation", desc: "Hire-ready codebases." },
  { icon: Lock, title: "Security Best Practices", desc: "Data and auth secured." },
  { icon: Code2, title: "Source Code Ownership", desc: "100% yours upon completion." }
];

// --- 1. WEB DEVELOPMENT ---
const webDevelopment = [
  {
    id: "1.1",
    title: "Portfolio & Landing Websites",
    description:
      "Modern, responsive websites designed to establish your online presence and generate leads.",
    bestFor:
      "Freelancers, creators, consultants, startups, portfolios, event pages, and small businesses.",
    indicativeTotal: "Starting from ₹12,000",
    timeline: "1–2 Weeks",
    sections: [
      {
        name: "Planning & Design",
        items: [
          {
            name: "Discovery & Content Planning",
            desc: "Requirement gathering, sitemap, and content structure.",
            price: "₹1,000–3,000"
          },
          {
            name: "Responsive UI Design",
            desc: "Modern layouts optimized for desktop, tablet, and mobile.",
            price: "₹3,000–8,000"
          }
        ]
      },
      {
        name: "Development",
        items: [
          {
            name: "Website Development",
            desc: "Responsive website built with modern technologies.",
            price: "₹6,000–12,000"
          },
          {
            name: "SEO & Lead Generation",
            desc: "Contact forms, metadata, sitemap, analytics, and basic SEO.",
            price: "₹2,000–5,000"
          }
        ]
      }
    ]
  },

  {
    id: "1.2",
    title: "Business & Marketing Websites",
    description:
      "Professional websites built to generate enquiries, strengthen your brand, and support business growth.",
    bestFor:
      "Growing businesses, agencies, service providers, healthcare, education, real estate, and corporate websites.",
    indicativeTotal: "Starting from ₹20,000",
    timeline: "2–4 Weeks",
    sections: [
      {
        name: "Strategy & Design",
        items: [
          {
            name: "Content Strategy",
            desc: "Site structure, page planning, and conversion-focused layouts.",
            price: "₹2,000–5,000"
          },
          {
            name: "Custom UI/UX Design",
            desc: "Professional page designs with reusable components.",
            price: "₹6,000–15,000"
          }
        ]
      },
      {
        name: "Development",
        items: [
          {
            name: "Website Development",
            desc: "CMS or custom-built responsive website.",
            price: "₹8,000–18,000"
          },
          {
            name: "SEO & Performance",
            desc: "Technical SEO, analytics, speed optimization, and deployment.",
            price: "₹3,000–8,000"
          }
        ]
      }
    ]
  },

  {
    id: "1.3",
    title: "E-commerce Platforms",
    description:
      "Secure online stores with product management, payments, inventory, and order tracking.",
    bestFor:
      "Retail stores, D2C brands, wholesalers, manufacturers, and digital product businesses.",
    indicativeTotal: "Starting from ₹35,000",
    timeline: "3–8 Weeks",
    sections: [
      {
        name: "Storefront",
        items: [
          {
            name: "Product Catalog & UI",
            desc: "Categories, product pages, search, filters, and responsive storefront.",
            price: "₹10,000–20,000"
          },
          {
            name: "Shopping Experience",
            desc: "Cart, checkout, wishlist, reviews, coupons, and user accounts.",
            price: "₹10,000–25,000"
          }
        ]
      },
      {
        name: "Backend & Operations",
        items: [
          {
            name: "Payments & Admin",
            desc: "Payment gateway, inventory, order management, and admin dashboard.",
            price: "₹10,000–25,000"
          },
          {
            name: "Integrations",
            desc: "Shipping, SMS, email notifications, invoices, and analytics.",
            price: "₹5,000–15,000"
          }
        ]
      }
    ]
  },

  {
    id: "1.4",
    title: "SaaS & Custom Web Applications",
    description:
      "Scalable web applications designed for startups and businesses with complex workflows and custom functionality.",
    bestFor:
      "SaaS platforms, startup MVPs, admin dashboards, CRM, ERP, booking systems, marketplaces, internal tools, and business automation.",
    indicativeTotal: "Starting from ₹60,000",
    timeline: "4–12 Weeks",
    sections: [
      {
        name: "Architecture & Foundation",
        items: [
          {
            name: "System Architecture",
            desc: "Database design, authentication, APIs, security, and scalable backend.",
            price: "₹10,000–25,000"
          },
          {
            name: "UI/UX Design",
            desc: "Application dashboard, workflows, and responsive interface.",
            price: "₹10,000–25,000"
          }
        ]
      },
      {
        name: "Application Development",
        items: [
          {
            name: "Core Business Features",
            desc: "Custom modules, dashboards, reports, workflows, and integrations.",
            price: "₹30,000–80,000"
          },
          {
            name: "Deployment & Quality Assurance",
            desc: "Testing, cloud deployment, monitoring, and production launch.",
            price: "₹8,000–20,000"
          }
        ]
      }
    ]
  },

  {
    id: "1.5",
    title: "Feature Development & System Upgrades",
    description:
      "Extend, improve, or modernize your existing application without rebuilding it from scratch.",
    bestFor:
      "Businesses needing new features, API integrations, dashboards, migrations, code refactoring, or performance improvements.",
    indicativeTotal: "Starting from ₹15,000",
    timeline: "3 Days – 3 Weeks",
    sections: [
      {
        name: "Development",
        items: [
          {
            name: "Feature Development",
            desc: "New modules, dashboards, workflows, APIs, and integrations.",
            price: "₹8,000–30,000"
          },
          {
            name: "Optimization & Refactoring",
            desc: "Performance improvements, AI-assisted refactoring, framework upgrades, and bug fixes.",
            price: "₹5,000–20,000"
          }
        ]
      }
    ]
  },

  {
    id: "1.6",
    title: "Enterprise Software",
    description:
      "Large-scale platforms requiring custom architecture, compliance, advanced integrations, and long-term engineering support.",
    bestFor:
      "Large organizations, enterprises, government projects, and mission-critical business systems.",
    indicativeTotal: "Custom Quote",
    timeline: "2–6+ Months",
    isEnterprise: true
  }
];

// --- 2. ADD-ONS & STANDALONE SERVICES ---
const addOns = [
  {
    id: "5",
    title: "Standalone Services & Add-Ons",
    description:
      "Need help with a specific feature or technical task? Our standalone engineering services can be added to an existing project or delivered independently.",
    bestFor:
      "Businesses, startups, agencies, and founders looking for targeted improvements without committing to a full product build.",
    indicativeTotal: "Starting from ₹2,000",
    timeline: "1–10 Business Days",
    sections: [
      {
        name: "Design & Website",
        items: [
          {
            name: "Landing Page Development",
            desc: "Fully responsive landing page matching your existing website or brand.",
            price: "₹5,000–15,000"
          },
          {
            name: "Additional Website Page",
            desc: "New page with UI implementation, responsive layout, and animations if required.",
            price: "₹3,000–8,000"
          },
          {
            name: "Hosting, Domain & Business Email Setup",
            desc: "Hosting deployment, SSL, DNS configuration, and professional email setup.",
            price: "₹2,000–5,000"
          }
        ]
      },

      {
        name: "Development & Integrations",
        items: [
          {
            name: "Payment Gateway Integration",
            desc: "Razorpay, Stripe, Cashfree, PhonePe or similar payment providers.",
            price: "₹6,000–15,000"
          },
          {
            name: "Third-Party API Integration",
            desc: "CRM, SMS, Email, Maps, Shipping, Analytics, ERP, or custom APIs.",
            price: "₹5,000–20,000"
          },
          {
            name: "Authentication System",
            desc: "Email/password, Google login, OTP, JWT, RBAC, and session management.",
            price: "₹8,000–20,000"
          },
          {
            name: "Admin Dashboard Module",
            desc: "CRUD panels, analytics, role management, and data tables.",
            price: "₹10,000–30,000"
          }
        ]
      },

      {
        name: "Performance & Engineering",
        items: [
          {
            name: "Performance Optimization",
            desc: "Improve Core Web Vitals, caching, bundle size, database queries, and API performance.",
            price: "₹5,000–20,000"
          },
          {
            name: "Technical SEO",
            desc: "Metadata, schema, sitemap, indexing, structured data, and performance improvements.",
            price: "₹4,000–12,000"
          },
          {
            name: "Security Audit & Hardening",
            desc: "Authentication review, API security, headers, dependency audit, and vulnerability fixes.",
            price: "₹8,000–25,000"
          },
          {
            name: "Code Review & Refactoring",
            desc: "Improve architecture, readability, scalability, and maintainability of existing codebases.",
            price: "₹8,000–30,000"
          }
        ]
      },

      {
        name: "AI & Automation",
        items: [
          {
            name: "AI Chatbot Integration",
            desc: "Integrate GPT/Gemini/Claude-powered chat into your application.",
            price: "₹10,000–35,000"
          },
          {
            name: "AI Feature Development",
            desc: "Recommendations, document search, summarization, classification, or custom AI workflows.",
            price: "₹15,000–50,000"
          },
          {
            name: "Workflow Automation",
            desc: "Automate business processes using APIs, AI, and background workflows.",
            price: "₹10,000–40,000"
          },
          {
            name: "Technical Consultation",
            desc: "Architecture reviews, product planning, technology selection, and engineering guidance.",
            price: "₹2,500–5,000 / hour"
          }
        ]
      }
    ]
  }
];

// --- 3. AI & AUTOMATION ---
const aiAutomation = [
  {
    id: "2.1",
    title: "AI Chatbots & Support Assistants",
    description:
      "Custom AI assistants that answer questions, automate customer support, and help employees using your own business knowledge.",
    bestFor:
      "Customer support, internal knowledge bases, FAQs, lead generation, and business process automation.",
    indicativeTotal: "Starting from ₹25,000",
    timeline: "2–4 Weeks",
    sections: [
      {
        name: "AI Foundation",
        items: [
          {
            name: "Knowledge Base Integration",
            desc: "Connect documents, PDFs, websites, manuals, or internal company data.",
            price: "₹8,000–20,000"
          },
          {
            name: "AI Model Configuration",
            desc: "Prompt engineering, conversation design, and response optimization.",
            price: "₹5,000–12,000"
          }
        ]
      },
      {
        name: "Deployment & Features",
        items: [
          {
            name: "Website & Platform Integration",
            desc: "Deploy on websites, dashboards, WhatsApp, or other supported platforms.",
            price: "₹5,000–12,000"
          },
          {
            name: "Analytics & Human Handoff",
            desc: "Conversation analytics, fallback handling, and live-agent escalation.",
            price: "₹5,000–12,000"
          }
        ]
      }
    ]
  },

  {
    id: "2.2",
    title: "AI Models & Predictive Systems",
    description:
      "Custom machine learning systems built with Python to analyze data, automate decisions, and generate business insights.",
    bestFor:
      "Prediction, recommendation systems, classification, forecasting, analytics, NLP, and computer vision projects.",
    indicativeTotal: "Starting from ₹40,000",
    timeline: "3–8 Weeks",
    sections: [
      {
        name: "Model Development",
        items: [
          {
            name: "Custom ML Models",
            desc: "Classification, regression, recommendation engines, forecasting, and anomaly detection.",
            price: "₹20,000–60,000"
          },
          {
            name: "Data Preparation",
            desc: "Data cleaning, preprocessing, feature engineering, and model training.",
            price: "₹10,000–30,000"
          }
        ]
      },
      {
        name: "Deployment & Optimization",
        items: [
          {
            name: "Model Deployment",
            desc: "REST APIs, cloud deployment, inference pipelines, and monitoring.",
            price: "₹10,000–30,000"
          },
          {
            name: "Model Evaluation",
            desc: "Performance analysis, retraining strategy, and continuous improvement.",
            price: "₹8,000–20,000"
          }
        ]
      }
    ]
  },

  {
    id: "2.3",
    title: "Custom AI Applications",
    description:
      "End-to-end AI products that combine intelligent automation, modern web applications, and scalable cloud infrastructure.",
    bestFor:
      "Startups and businesses building AI-powered SaaS products, internal tools, recommendation systems, AI search, or intelligent workflow platforms.",
    indicativeTotal: "Starting from ₹80,000",
    timeline: "4–12 Weeks",
    sections: [
      {
        name: "Architecture & Planning",
        items: [
          {
            name: "Solution Architecture",
            desc: "System design, AI workflows, integrations, and technical planning.",
            price: "₹10,000–20,000"
          },
          {
            name: "Knowledge & Data Layer",
            desc: "Vector databases, document processing, semantic search, and retrieval pipelines.",
            price: "₹15,000–35,000"
          }
        ]
      },
      {
        name: "Application Development",
        items: [
          {
            name: "AI Features",
            desc: "AI agents, recommendations, document intelligence, workflow automation, or custom ML capabilities.",
            price: "₹30,000–80,000"
          },
          {
            name: "Platform Development",
            desc: "Authentication, APIs, dashboards, deployment, testing, and production launch.",
            price: "₹25,000–60,000"
          }
        ]
      }
    ]
  },

  {
    id: "2.4",
    title: "AI Engineering & Code Modernization",
    description:
      "Improve existing applications using AI-assisted development, code refactoring, architecture modernization, and performance optimization.",
    bestFor:
      "Businesses with existing software that needs modernization, technical debt reduction, AI integration, or engineering improvements.",
    indicativeTotal: "Starting from ₹15,000",
    timeline: "1–4 Weeks",
    sections: [
      {
        name: "Modernization",
        items: [
          {
            name: "AI-Assisted Code Refactoring",
            desc: "Improve code quality, maintainability, architecture, and reduce technical debt.",
            price: "₹8,000–25,000"
          },
          {
            name: "Framework & Dependency Upgrades",
            desc: "Upgrade outdated frameworks, libraries, and project dependencies safely.",
            price: "₹5,000–20,000"
          }
        ]
      },
      {
        name: "Engineering Improvements",
        items: [
          {
            name: "Performance Optimization",
            desc: "Optimize databases, APIs, frontend performance, caching, and application speed.",
            price: "₹5,000–20,000"
          },
          {
            name: "Architecture Review",
            desc: "Identify bottlenecks and provide scalable engineering recommendations.",
            price: "₹5,000–15,000"
          }
        ]
      }
    ]
  }
];

// --- 5. MAINTENANCE & SUPPORT ---
const maintenanceSupport = [
  {
    id: "4.2",
    title: "Maintenance & Support",
    description:
      "Keep your product secure, reliable, and evolving after launch. Choose a maintenance plan for routine updates or an engineering retainer for continuous product development.",
    bestFor:
      "Business websites, e-commerce stores, SaaS platforms, AI applications, and growing digital products.",
    indicativeTotal: "Plans starting from ₹2,000 / month",
    timeline: "Monthly • Quarterly • Long-Term",
    sections: [
      {
        name: "Maintenance Plans",
        items: [
          {
            name: "Business Website Care",
            desc: "Security updates, backups, uptime monitoring, bug fixes, content updates, SSL assistance, and compatibility checks.",
            price: "From ₹2,000 / month"
          },
          {
            name: "E-commerce Maintenance",
            desc: "Everything in Website Care plus checkout testing, payment gateway monitoring, product updates, order flow verification, and performance improvements.",
            price: "From ₹5,000 / month"
          },
          {
            name: "SaaS & AI Product Maintenance",
            desc: "Application monitoring, dependency updates, security patches, database maintenance, backups, production issue resolution, and performance optimization.",
            price: "From ₹8,000 / month"
          }
        ]
      },
      {
        name: "Engineering Retainers",
        items: [
          {
            name: "Growth Retainer",
            desc: "Continuous feature development, API integrations, AI enhancements, architecture improvements, technical consulting, and priority engineering support.",
            price: "From ₹15,000 / month"
          },
          {
            name: "Dedicated Engineering Team",
            desc: "A long-term engineering partnership with dedicated developers for large products requiring continuous development, scaling, DevOps, infrastructure, and architecture support.",
            price: "Custom Quote"
          }
        ]
      }
    ]
  }
];

// Reusable Pricing Category Component
const PricingCategory = ({ title, icon: Icon, data }: { title: string; icon: any; data: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mb-20"
  >
    <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
      <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h2>
    </div>

    <Accordion type="multiple" className="w-full space-y-4">
      {data.map((item: any) => {
        // Special render for Enterprise without an Accordion
        if (item.isEnterprise) {
          return (
            <div key={item.id} className="border border-border bg-card rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="inline-block bg-muted/50 text-muted-foreground text-xs font-medium pl-6 py-2 rounded-full">
                  <span className="font-bold text-foreground">Best for:</span> {item.bestFor}
                </div>
              </div>
              <div className="shrink-0 text-left md:text-right w-full md:w-auto border-t md:border-t-0 border-border pt-4 md:pt-0">
                <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Starting From</div>
                <div className="text-lg md:text-xl font-black text-primary mb-2">{item.indicativeTotal}</div>
                <p className="text-xs text-muted-foreground max-w-[200px] ml-auto">
                  Projects at this scale require a technical discovery workshop before estimation.
                </p>
              </div>
            </div>
          );
        }

        // Standard Accordion Render
        return (
          <AccordionItem 
            key={item.id} 
            value={item.id} 
            className="border border-border bg-card rounded-2xl px-4 md:px-6 shadow-sm overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-6 data-[state=open]:border-b data-[state=open]:border-border/50">
              <div className="flex flex-col md:flex-row justify-between w-full text-left gap-6">
                
                {/* Left Side: Info */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 font-normal leading-relaxed">{item.description}</p>
                  <div className="inline-block bg-muted/50 text-muted-foreground text-xs font-medium pl-3 pr-2 py-2 rounded-2xl">
                    <span className="font-bold text-foreground">Best for:</span> {item.bestFor}
                  </div>
                </div>

                {/* Right Side: Price & Time */}
                <div className="shrink-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:gap-2 border-t md:border-t-0 border-border/50 pt-4 md:pt-0 mt-2 md:mt-0">
                  <div className="text-left md:text-right">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Indicative Investment</div>
                    <div className="text-lg md:text-xl font-black text-primary">{item.indicativeTotal}</div>
                  </div>
                  <div className="hidden md:block w-px h-6 bg-border mx-2"></div> {/* Divider for mobile */}
                  <div className="text-left md:text-right">
                    <div className="text-[8px] md:text-xs uppercase font-bold text-muted-foreground mb-1">Typical Timeline</div>
                    <div className="text-xs md:text-sm font-bold text-foreground">{item.timeline}</div>
                  </div>
                </div>

              </div>
            </AccordionTrigger>

            <AccordionContent className="pt-6 pb-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {item.sections.map((section: any, idx: number) => (
                  <div key={idx}>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 border-b border-border/50 pb-2">
                      {section.name}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((sub: any, sIdx: number) => (
                        <li key={sIdx} className="flex items-start justify-between gap-4 p-2.5 rounded-xl hover:bg-muted/50 transition-colors">
                          <div>
                            <div className="text-sm font-semibold text-foreground">{sub.name}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{sub.desc}</div>
                          </div>
                          <div className="text-sm font-bold text-foreground shrink-0 mt-0.5 whitespace-nowrap">{sub.price}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* In-Accordion CTA */}
              <div className="bg-muted/30 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border/50">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Not sure which components apply to your project?</h4>
                  <p className="text-xs text-muted-foreground mt-1">We'll recommend only what's necessary during discovery.</p>
                </div>
                <Link href="/contactus" className="w-full sm:w-auto px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center justify-center gap-2">
                  Discuss Your Project <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  </motion.div>
);

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background pt-12 md:pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Updated Premium Hero */}
       <div className="flex gap-10 mb-20 pt-8">          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="h-px w-8 bg-primary"></span>
                <h3 className="text-[10px] tracking-widest uppercase font-bold text-primary">
                  Transparent Pricing
                </h3>
            </div>
            <h1 className="text-[36px] md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-tight">
              Transparent Pricing. <br className="hidden sm:block"/>
              <span className="text-primary">
                Built Around Scope, Not Surprises.
              </span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Every software project is different. Instead of hiding behind "Contact Us for Pricing," we break down the major components that influence cost, so you understand exactly where your investment goes before we ever schedule a call.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block w-72 space-y-4 pointer-events-none mt-24 z-0"
          >
            <div className="bg-card border border-border shadow-2xl rounded-2xl p-4 transform rotate-6 animate-pulse-slow">
              <div className="h-2 w-1/3 bg-primary/20 rounded mb-4"></div>
              <div className="h-8 w-full bg-muted rounded-md mb-2"></div>
              <div className="h-8 w-full bg-muted rounded-md"></div>
            </div>
            <div className="bg-card border border-border shadow-2xl rounded-2xl p-4 transform -rotate-3 -translate-x-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                <div className="h-2 w-24 bg-muted-foreground/30 rounded"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Included in Every Project - Re-engineered to a 3-column horizontal grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-border flex-1 max-w-[100px]"></div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center">
              Included in Every Engagement
            </h3>
            <div className="h-px bg-border flex-1 max-w-[100px]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {includedGuarantees.map((item, i) => (
              <div key={i} className="bg-card border border-border/60 hover:border-primary/30 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-tight mb-1.5">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-20 max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-6 shadow-sm"
        >
          <div className="p-3 bg-background rounded-xl border border-primary/20 shrink-0">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-2">How to read this reference</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These are typical investment ranges based on our previous engineering builds. Final pricing strictly depends on functional complexity, third-party integrations, and infrastructure scale. During discovery, we will recommend <strong>only</strong> the components your architecture actually requires.
            </p>
          </div>
        </motion.div>

        {/* Categories rendering via Shadcn Accordion */}
        <PricingCategory title="Web Development" icon={Laptop} data={webDevelopment} />
        <PricingCategory title="Add-Ons & Essentials" icon={PlusSquare} data={addOns} />
        <PricingCategory title="AI & Automation" icon={Bot} data={aiAutomation} />
        <PricingCategory title="Maintenance & Support" icon={ShieldCheck} data={maintenanceSupport} />

        {/* --- PREMIUM CTA SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-24 md:mt-32 relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-16 text-center shadow-xl"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_60%)] opacity-[0.08] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 border border-primary/20">
              <Laptop className="w-6 h-6 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 tracking-tight leading-tight">
              Ready to scope your <br className="hidden sm:block"/> next <span className='text-primary'>project?</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
              Skip the guesswork. Let’s sit down, review your technical requirements, and architect a precise roadmap with exact timelines and transparent costs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-xs md:text-base font-bold px-8 py-4 md:py-6 rounded-full group shadow-[0_0_20px_rgba(var(--primary),0.3)]" 
                asChild
              >
                <Link href="/contactus">
                  Request Engineering Proposal
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-xs md:text-base font-bold px-8 py-4 md:py-6 rounded-full border-border hover:bg-muted" 
                asChild
              >
                <Link href="/case-studies">
                  Review Our Case Studies
                </Link>
              </Button>
            </div>
            
            <p className="mt-8 text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-widest">
              No commitment required • NDAs available
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}