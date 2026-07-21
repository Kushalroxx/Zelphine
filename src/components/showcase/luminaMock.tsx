import React from 'react';

export default function LuminaMock() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-50 via-orange-50/30 to-amber-100/50 p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden">
      
      <style>
        {`
          @keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
          @keyframes float2 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(6px) translateX(4px); } }
          @keyframes float3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
          @keyframes pulse-soft { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
          @keyframes load-bar { 0% { width: 0%; } 100% { width: 100%; } }
        `}
      </style>

      {/* Main Application Window */}
      <div className="w-full h-full max-h-[420px] max-w-[600px] bg-white rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(251,191,36,0.15)] border border-amber-200/60 flex flex-col overflow-hidden relative">
        
        {/* Mac-style Top Bar */}
        <div className="h-10 sm:h-12 bg-amber-50/50 border-b border-amber-100 flex items-center px-4 shrink-0 justify-between">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono text-amber-700/60 bg-white/60 px-3 py-1 rounded-full border border-amber-200/50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            lumina.api/generate-scene
          </div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 flex flex-col sm:flex-row overflow-hidden bg-[#fafafa]">
          
          {/* Left/Top: The Dynamic Visualization Scene */}
          <div className="flex-1 p-4 relative overflow-hidden flex items-center justify-center min-h-[160px]">
            {/* Background Grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid-lumina" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#d97706" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-lumina)" />
            </svg>

            {/* Dynamic Node Generation */}
            <div className="relative w-full max-w-[200px] aspect-square">
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <line x1="50%" y1="20%" x2="20%" y2="70%" stroke="#fcd34d" strokeWidth="2" strokeDasharray="4" style={{ animation: 'pulse-soft 2s infinite' }} />
                <line x1="50%" y1="20%" x2="80%" y2="70%" stroke="#fcd34d" strokeWidth="2" strokeDasharray="4" style={{ animation: 'pulse-soft 2s infinite 0.5s' }} />
                <line x1="20%" y1="70%" x2="80%" y2="70%" stroke="#fcd34d" strokeWidth="2" strokeDasharray="4" style={{ animation: 'pulse-soft 2s infinite 1s' }} />
              </svg>

              {/* Node 1 (Top) */}
              <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl shadow-lg border border-amber-200 flex items-center justify-center z-10" style={{ animation: 'float1 4s ease-in-out infinite' }}>
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                </div>
              </div>

              {/* Node 2 (Bottom Left) */}
              <div className="absolute top-[60%] left-[10%] w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg border border-orange-200 flex items-center justify-center z-10" style={{ animation: 'float2 5s ease-in-out infinite' }}>
                <div className="w-5 h-5 rounded-md bg-orange-100 border border-orange-200"></div>
              </div>

              {/* Node 3 (Bottom Right) */}
              <div className="absolute top-[60%] right-[10%] w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-lg border border-yellow-200 flex items-center justify-center z-10" style={{ animation: 'float3 4.5s ease-in-out infinite' }}>
                <div className="w-5 h-5 rounded-full border-2 border-yellow-400"></div>
              </div>
            </div>
          </div>

          {/* Right/Bottom: Server Data & Coursework Panel */}
          <div className="w-full sm:w-[45%] lg:w-[40%] bg-white border-t sm:border-t-0 sm:border-l border-amber-100 p-4 sm:p-5 flex flex-col gap-4 overflow-y-auto shrink-0 z-10">
            
            {/* Context Section */}
            <div>
              <div className="h-3 sm:h-4 w-1/2 bg-amber-100 rounded mb-3"></div>
              <div className="space-y-2">
                <div className="h-2 sm:h-2.5 w-full bg-gray-100 rounded"></div>
                <div className="h-2 sm:h-2.5 w-5/6 bg-gray-100 rounded"></div>
                <div className="h-2 sm:h-2.5 w-4/6 bg-gray-100 rounded"></div>
              </div>
            </div>

            {/* API Processing Card */}
            <div className="mt-auto border border-amber-200 bg-amber-50/50 rounded-lg p-3 sm:p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] sm:text-[10px] font-bold text-amber-700 uppercase tracking-wider">Compiling Scene</span>
                <span className="text-[9px] font-mono text-amber-500">24ms</span>
              </div>
              
              {/* Data Rows */}
              <div className="space-y-2 mb-3">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-sm bg-amber-200 shrink-0"></div>
                  <div className="h-1.5 w-full bg-amber-200/50 rounded"></div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-sm bg-orange-200 shrink-0"></div>
                  <div className="h-1.5 w-4/5 bg-orange-200/50 rounded"></div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-amber-200/40 rounded-full overflow-hidden mt-3">
                <div className="h-full bg-amber-500 rounded-full" style={{ animation: 'load-bar 3s ease-out infinite' }}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}