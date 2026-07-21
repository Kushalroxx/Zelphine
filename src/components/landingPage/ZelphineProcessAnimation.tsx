import React from 'react';
import InViewAnimation from '../majorUi/inViewAnimation';
import { motion } from 'framer-motion';

function ZelphineHeroBridge() {
return (
    <div
      className="hero"
      style={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <svg
        width="100%"
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Zelphine — AI Engine</title>

        <defs>
          {/* THE FIX: Premium Engineering Dot Grid Pattern */}
          <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#cbd5e1" opacity="0.4" />
          </pattern>

          {/* Real Light-Mode Drop Shadows */}
          <filter id="shadow-sm" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.06" />
          </filter>
          
          <filter id="shadow-md" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0f172a" floodOpacity="0.1" />
          </filter>

          <filter id="shadow-lg" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="20" stdDeviation="24" floodColor="#0f172a" floodOpacity="0.12" />
          </filter>

          {/* Crisp, vibrant gradients for the streams */}
          <linearGradient id="grad-stream1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="40%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="grad-stream2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="1" />
          </linearGradient>
          
          {/* Central Core Subtle Mesh */}
          <radialGradient id="grad-core-subtle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="grad-chart" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="grad-chart2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6" />
          </linearGradient>

          <clipPath id="clip-core">
            <circle cx="400" cy="250" r="27" />
          </clipPath>
        </defs>

        <style>
          {`
            @keyframes nodePulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.8; } }
            @keyframes streamFlow { 0% { stroke-dashoffset:600; opacity:0; } 10% { opacity:1; } 85% { opacity:1; } 100% { stroke-dashoffset:0; opacity:0; } }
            @keyframes particleMove { 0% { offset-distance:0%; opacity:0; } 8% { opacity:1; } 90% { opacity:1; } 100% { offset-distance:100%; opacity:0; } }
            @keyframes coreRotate { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
            @keyframes coreRotateRev { from { transform:rotate(0deg); } to { transform:rotate(-360deg); } }
            @keyframes scanLine { 0% { transform:translateY(-27px); opacity:1; } 100% { transform:translateY(54px); opacity:0; } }
            @keyframes cardFloat1 { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-8px); } }
            @keyframes cardFloat2 { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(6px); } }
            @keyframes dotBlink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
            @keyframes matBit0 { 0%,100%{opacity:0.3} 33%{opacity:0.9} 66%{opacity:0.4} }
            @keyframes matBit1 { 0%,100%{opacity:0.9} 33%{opacity:0.3} 66%{opacity:1.0} }
          `}
        </style>

        {/* BACKGROUND DOT GRID (This fills the empty space beautifully) */}
        <rect width="100%" height="100%" fill="url(#dot-grid)" />

        {/* BACKGROUND AMBIENT */}
        <ellipse cx="400" cy="250" rx="220" ry="160" fill="url(#grad-core-subtle)" />

        {/* LEFT: LOGIC NODES */}
        <g id="logic-nodes">
          {/* Binary Data Text */}
          <g fontFamily="'Courier New', monospace" fontSize="9" fill="#64748b" fontWeight="600">
            <text x="28" y="148" style={{ animation: 'matBit1 2.1s ease-in-out infinite' }}>1</text>
            <text x="40" y="148" style={{ animation: 'matBit0 1.8s ease-in-out infinite 0.3s' }}>0</text>
            <text x="52" y="148" style={{ animation: 'matBit1 2.5s ease-in-out infinite 0.1s' }}>1</text>
            <text x="64" y="148" style={{ animation: 'matBit1 1.9s ease-in-out infinite 0.6s' }}>1</text>
            <text x="76" y="148" style={{ animation: 'matBit0 2.3s ease-in-out infinite 0.2s' }}>0</text>
            <text x="22" y="162" style={{ animation: 'matBit0 2.0s ease-in-out infinite 0.4s' }}>0</text>
            <text x="34" y="162" style={{ animation: 'matBit1 1.7s ease-in-out infinite 0.7s' }}>1</text>
            <text x="46" y="162" style={{ animation: 'matBit0 2.4s ease-in-out infinite 0.1s' }}>0</text>
            <text x="58" y="162" style={{ animation: 'matBit1 2.1s ease-in-out infinite 0.5s' }}>1</text>
            <text x="70" y="162" style={{ animation: 'matBit0 1.9s ease-in-out infinite 0.3s' }}>0</text>
            <text x="82" y="162" style={{ animation: 'matBit1 2.2s ease-in-out infinite 0.8s' }}>1</text>
            <text x="28" y="176" style={{ animation: 'matBit1 2.3s ease-in-out infinite 0.2s' }}>1</text>
            <text x="40" y="176" style={{ animation: 'matBit1 1.8s ease-in-out infinite 0.6s' }}>1</text>
            <text x="52" y="176" style={{ animation: 'matBit0 2.5s ease-in-out infinite 0s' }}>0</text>
            <text x="64" y="176" style={{ animation: 'matBit1 2.0s ease-in-out infinite 0.4s' }}>1</text>
            <text x="76" y="176" style={{ animation: 'matBit0 1.7s ease-in-out infinite 0.9s' }}>0</text>
            <text x="22" y="190" style={{ animation: 'matBit0 2.2s ease-in-out infinite 0.3s' }}>0</text>
            <text x="34" y="190" style={{ animation: 'matBit1 2.0s ease-in-out infinite 0.7s' }}>1</text>
            <text x="46" y="190" style={{ animation: 'matBit1 1.9s ease-in-out infinite 0.1s' }}>1</text>
            <text x="58" y="190" style={{ animation: 'matBit0 2.4s ease-in-out infinite 0.5s' }}>0</text>
            <text x="70" y="190" style={{ animation: 'matBit1 2.1s ease-in-out infinite 0.2s' }}>1</text>
            <text x="82" y="190" style={{ animation: 'matBit0 1.8s ease-in-out infinite 0.8s' }}>0</text>
            <text x="28" y="204" style={{ animation: 'matBit1 2.3s ease-in-out infinite 0.6s' }}>1</text>
            <text x="40" y="204" style={{ animation: 'matBit0 2.0s ease-in-out infinite 0.1s' }}>0</text>
            <text x="52" y="204" style={{ animation: 'matBit1 1.7s ease-in-out infinite 0.4s' }}>1</text>
            <text x="64" y="204" style={{ animation: 'matBit1 2.5s ease-in-out infinite 0.3s' }}>1</text>
            <text x="76" y="204" style={{ animation: 'matBit0 2.1s ease-in-out infinite 0.7s' }}>0</text>
            <text x="22" y="218" style={{ animation: 'matBit0 1.9s ease-in-out infinite 0.5s' }}>0</text>
            <text x="34" y="218" style={{ animation: 'matBit1 2.4s ease-in-out infinite 0.2s' }}>1</text>
            <text x="46" y="218" style={{ animation: 'matBit0 2.2s ease-in-out infinite 0.8s' }}>0</text>
            <text x="58" y="218" style={{ animation: 'matBit1 1.8s ease-in-out infinite 0s' }}>1</text>
            <text x="70" y="218" style={{ animation: 'matBit0 2.0s ease-in-out infinite 0.6s' }}>0</text>
            <text x="82" y="218" style={{ animation: 'matBit1 2.5s ease-in-out infinite 0.3s' }}>1</text>
          </g>

          {/* Solid White Opaque Nodes */}
          <circle cx="112" cy="190" r="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#shadow-sm)" />
          <circle cx="112" cy="190" r="5" fill="#3b82f6" style={{ transformOrigin: '112px 190px', animation: 'nodePulse 2s ease-in-out infinite' }} />
          <circle cx="112" cy="190" r="12" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

          <circle cx="118" cy="250" r="28" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#shadow-sm)" />
          <circle cx="118" cy="250" r="6" fill="#2563eb" style={{ transformOrigin: '118px 250px', animation: 'nodePulse 2s ease-in-out infinite 0.5s' }} />
          <circle cx="118" cy="250" r="14" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

          <circle cx="108" cy="312" r="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#shadow-sm)" />
          <circle cx="108" cy="312" r="4.5" fill="#8b5cf6" style={{ transformOrigin: '108px 312px', animation: 'nodePulse 2s ease-in-out infinite 1s' }} />
          <circle cx="108" cy="312" r="11" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

          {/* Circuit traces */}
          <line x1="112" y1="190" x2="92" y2="222" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
          <line x1="92" y1="222" x2="118" y2="250" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
          <line x1="118" y1="250" x2="136" y2="270" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
          <line x1="136" y1="270" x2="108" y2="312" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />

          <text x="52" y="125" fontFamily="'Courier New', monospace" fontSize="9" fill="#334155" fontWeight="bold" letterSpacing="2">INPUT · LOGIC</text>
        </g>

        {/* CENTER: DATA STREAMS */}
        <g id="data-streams">
          <path d="M136 190 C 200 185, 285 195, 340 250" fill="none" stroke="url(#grad-stream1)" strokeWidth="2.5" strokeDasharray="600" strokeDashoffset="600" style={{ animation: 'streamFlow 2.6s cubic-bezier(0.25,1,0.5,1) infinite' }} />
          <path d="M146 250 C 200 242, 292 245, 340 250" fill="none" stroke="url(#grad-stream2)" strokeWidth="2.5" strokeDasharray="500" strokeDashoffset="500" style={{ animation: 'streamFlow 2.2s cubic-bezier(0.25,1,0.5,1) infinite 0.4s' }} />
          <path d="M130 312 C 200 308, 278 278, 340 250" fill="none" stroke="url(#grad-stream1)" strokeWidth="2.5" strokeDasharray="550" strokeDashoffset="550" style={{ animation: 'streamFlow 2.8s cubic-bezier(0.25,1,0.5,1) infinite 0.9s' }} />

          <circle r="4.5" fill="#3b82f6" filter="url(#shadow-sm)" style={{ offsetPath: "path('M136 190 C 200 185, 285 195, 340 250')", animation: 'particleMove 2.6s cubic-bezier(0.25,1,0.5,1) infinite' }} />
          <circle r="5" fill="#2563eb" filter="url(#shadow-sm)" style={{ offsetPath: "path('M146 250 C 200 242, 292 245, 340 250')", animation: 'particleMove 2.2s cubic-bezier(0.25,1,0.5,1) infinite 0.4s' }} />
          <circle r="4" fill="#8b5cf6" filter="url(#shadow-sm)" style={{ offsetPath: "path('M130 312 C 200 308, 278 278, 340 250')", animation: 'particleMove 2.8s cubic-bezier(0.25,1,0.5,1) infinite 0.9s' }} />
        </g>

        {/* CENTER: CORE ENGINE */}
        <g id="core-engine" transform="translate(400,250)">
          
          <circle cx="0" cy="0" r="70" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#shadow-lg)" />
          <circle cx="0" cy="0" r="60" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

          <g style={{ transformOrigin: '0px 0px', animation: 'coreRotate 12s linear infinite' }}>
            <circle cx="0" cy="0" r="50" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="50" cy="0" r="4" fill="#3b82f6" />
            <circle cx="-50" cy="0" r="4" fill="#8b5cf6" />
          </g>

          <g style={{ transformOrigin: '0px 0px', animation: 'coreRotateRev 20s linear infinite' }}>
            <polygon points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17" fill="none" stroke="#2563eb" strokeWidth="1.5" opacity="0.8" />
            <circle cx="0" cy="-35" r="3" fill="#2563eb" />
            <circle cx="30" cy="17" r="3" fill="#2563eb" />
            <circle cx="-30" cy="17" r="3" fill="#2563eb" />
          </g>

          <line x1="-80" y1="0" x2="-65" y2="0" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="65" y1="0" x2="80" y2="0" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="0" y1="-80" x2="0" y2="-65" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="0" y1="65" x2="0" y2="80" stroke="#cbd5e1" strokeWidth="2" />

          <line x1="-30" y1="0" x2="30" y2="0" stroke="#3b82f6" strokeWidth="2" opacity="0.8" clipPath="url(#clip-core)" style={{ animation: 'scanLine 2s ease-in-out infinite', transformOrigin: '0px 0px' }} />

          <circle cx="0" cy="0" r="8" fill="#1e293b" />
          <circle cx="0" cy="0" r="3" fill="#ffffff" />

          <text x="0" y="105" fontFamily="'Courier New', monospace" fontSize="9" fill="#334155" fontWeight="bold" letterSpacing="4" textAnchor="middle">AI · RAG · ENGINE</text>
        </g>

        {/* OUTPUT STREAMS */}
        <g id="output-streams">
          <path d="M470 250 C 510 240, 555 200, 608 175" fill="none" stroke="url(#grad-stream1)" strokeWidth="2.5" strokeDasharray="300" strokeDashoffset="300" style={{ animation: 'streamFlow 2.4s cubic-bezier(0.25,1,0.5,1) infinite' }} />
          <path d="M470 250 C 510 255, 558 268, 620 320" fill="none" stroke="url(#grad-stream2)" strokeWidth="2.5" strokeDasharray="300" strokeDashoffset="300" style={{ animation: 'streamFlow 2.8s cubic-bezier(0.25,1,0.5,1) infinite 0.6s' }} />
          <circle r="4" fill="#3b82f6" filter="url(#shadow-sm)" style={{ offsetPath: "path('M470 250 C 510 240, 555 200, 608 175')", animation: 'particleMove 2.4s cubic-bezier(0.25,1,0.5,1) infinite 0.2s' }} />
          <circle r="4" fill="#8b5cf6" filter="url(#shadow-sm)" style={{ offsetPath: "path('M470 250 C 510 255, 558 268, 620 320')", animation: 'particleMove 2.8s cubic-bezier(0.25,1,0.5,1) infinite 0.8s' }} />
        </g>

        {/* RIGHT: UI VIEWPORTS */}
        <g id="ui-viewport">
          {/* Card 1: Browser Frame */}
          <g style={{ animation: 'cardFloat1 6s cubic-bezier(0.25,1,0.5,1) infinite' }}>
            <rect x="580" y="80" width="190" height="140" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#shadow-md)" />
            
            <rect x="580" y="80" width="190" height="28" rx="12" fill="#f8fafc" />
            <path d="M 580 108 L 770 108" stroke="#e2e8f0" strokeWidth="1.5" />
            
            <circle cx="596" cy="94" r="4" fill="#ef4444" />
            <circle cx="610" cy="94" r="4" fill="#f59e0b" />
            <circle cx="624" cy="94" r="4" fill="#10b981" />
            
            <rect x="636" y="87" width="120" height="14" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <text x="644" y="97" fontFamily="'Courier New', monospace" fontSize="7" fill="#64748b" fontWeight="bold">zelphine.com/dash</text>
            
            <line x1="595" y1="193" x2="595" y2="120" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="595" y1="193" x2="755" y2="193" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="2 2" />
            
            <rect x="605" y="163" width="16" height="30" rx="3" fill="url(#grad-chart)" />
            <rect x="627" y="148" width="16" height="45" rx="3" fill="url(#grad-chart)" />
            <rect x="649" y="135" width="16" height="58" rx="3" fill="url(#grad-chart)" />
            <rect x="671" y="143" width="16" height="50" rx="3" fill="url(#grad-chart2)" />
            <rect x="693" y="165" width="16" height="28" rx="3" fill="url(#grad-chart2)" />
            <rect x="715" y="128" width="16" height="65" rx="3" fill="url(#grad-chart)" />
            
            <circle cx="580" cy="165" r="5" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="580" cy="165" r="2" fill="#3b82f6" />

            <text x="675" y="68" fontFamily="'Courier New', monospace" fontSize="8" fill="#334155" fontWeight="bold" letterSpacing="2" textAnchor="middle">ANALYTICS · UI</text>
          </g>

          {/* Card 2: Status Panel */}
          <g style={{ animation: 'cardFloat2 7s cubic-bezier(0.25,1,0.5,1) infinite 0.5s' }}>
            <rect x="610" y="270" width="170" height="130" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="url(#shadow-md)" />
            
            <rect x="610" y="270" width="170" height="28" rx="12" fill="#f8fafc" />
            <path d="M 610 298 L 780 298" stroke="#e2e8f0" strokeWidth="1.5" />
            
            <circle cx="626" cy="284" r="4" fill="#8b5cf6" style={{ animation: 'dotBlink 2s ease-in-out infinite' }} />
            <text x="638" y="287" fontFamily="'Courier New', monospace" fontSize="8" fill="#334155" fontWeight="bold">SYSTEM STATUS</text>
            <circle cx="764" cy="284" r="4" fill="#10b981" />
            
            <rect x="626" y="312" width="70" height="6" rx="3" fill="#cbd5e1" />
            <rect x="706" y="312" width="40" height="6" rx="3" fill="#3b82f6" />
            
            <rect x="626" y="326" width="55" height="6" rx="3" fill="#cbd5e1" />
            <rect x="691" y="326" width="55" height="6" rx="3" fill="#8b5cf6" />
            
            <rect x="626" y="340" width="80" height="6" rx="3" fill="#cbd5e1" />
            <rect x="716" y="340" width="30" height="6" rx="3" fill="#3b82f6" />
            
            <rect x="626" y="362" width="138" height="26" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            <text x="695" y="379" fontFamily="'Courier New', monospace" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle" letterSpacing="1.5">DEPLOY ›</text>
            
            <circle cx="610" cy="320" r="5" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2" />
            <circle cx="610" cy="320" r="2" fill="#8b5cf6" />
          </g>

          <text x="675" y="440" fontFamily="'Courier New', monospace" fontSize="8" fill="#334155" fontWeight="bold" letterSpacing="2" textAnchor="middle">REALIZATION · INTERFACE</text>
        </g>
      </svg>
    </div>
  );
}

export default function ZelphineProcessAnimation() {
  return (
    <div className="w-full select-none px-3">
         <div className='relative z-50 flex justify-center -mt-8 md:-mt-16'> 
          <InViewAnimation
            className='relative z-10 flex justify-center w-full max-w-[65.2rem]' 
          >
            {/* Crisp Light-Mode Glass Container */}
            <div className="relative w-full bg-white rounded-xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-neutral-200 overflow-hidden flex flex-col font-sans pt-5">
              
              {/* Core Presentation Layer */}
              <div className="relative z-10 w-ful">
                <ZelphineHeroBridge/>
              </div>
              
            </div>
          </InViewAnimation>
        </div>

        <div className='mx-4 mt-12 md:mt-16'> 
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='h-0.5 mx-auto max-w-5xl bg-gradient-to-r from-black/0 via-black/10 to-black/0 rounded-full'></motion.div>
        </div>
    </div>
  )
}