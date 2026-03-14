"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const SpaNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(253,250,247,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 30px rgba(43,43,43,0.08)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(236,217,207,0.5)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 600, color: scrolled ? '#2B2B2B' : '#FFF8F2', transition: 'color 0.4s ease', letterSpacing: '0.02em' }}>
            Serenity
          </span>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.58rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C6A75E', fontWeight: 500, marginTop: '2px' }}>
            Spa & Beauty
          </span>
        </div>

        {/* Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {[{ label: 'Services', id: 'spa-services' }, { label: 'About', id: 'spa-about' }, { label: 'Pricing', id: 'spa-pricing' }, { label: 'Reviews', id: 'spa-testimonials' }].map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Jost', sans-serif", fontSize: '0.8rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: scrolled ? '#7A6A62' : 'rgba(255,248,242,0.85)',
                transition: 'color 0.3s ease', padding: '4px 0',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#7A6A62' : 'rgba(255,248,242,0.85)')}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('spa-booking')}
            style={{
              background: 'linear-gradient(135deg, #C6A75E, #D4B96E)',
              color: '#fff', border: 'none', cursor: 'pointer',
              fontFamily: "'Jost', sans-serif", fontSize: '0.78rem', fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '12px 28px', borderRadius: '9999px',
              boxShadow: '0 4px 20px rgba(198,167,94,0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(198,167,94,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(198,167,94,0.3)'; }}
          >
            Book Now
          </button>
        </nav>
      </div>
    </motion.header>
  );
};
