import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoImg from '../../../public/assets/logo.png'

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-16 bg-background">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start flex-wrap max-w-7xl mx-auto">
        
        {/* Brand Section */}
        <div className="lg:w-1/4 min-w-[250px] space-y-5">
           <Link href="/" className="text-xl md:text-2xl flex items-center gap-3">
             <Image src={logoImg} className="w-8 md:w-10 h-8 md:h-10" alt="Zelphine Logo" />
             <span className="font-black tracking-tight text-foreground">ZELPHINE</span>
           </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Engineering scalable software, custom AI pipelines, and high-performance digital platforms.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 flex-grow">
          
          <div>
            <h2 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest">Location</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>Remote First Studio</li>
              <li>HQ: West Bengal, India</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest">Contact</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="mailto:support@zelphine.com" className="hover:text-primary transition-colors font-medium">
                  support@zelphine.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/918515013506" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">
                  WhatsApp: +91 85150 13506
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest">Social</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="https://x.com/zelphinetech" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter (X)</a></li>
              <li><a href="https://www.linkedin.com/company/zelphine" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/orgs/Zelphine-Tech" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest">Company</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing Structure</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="text-xs text-muted-foreground font-medium">
          © {new Date().getFullYear()} ZELPHINE. All rights reserved.
        </div>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}