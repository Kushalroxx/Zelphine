import React from 'react';

export default function HireWiseMock() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-50 via-emerald-50/40 to-slate-100 p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden">
      
      <style>
        {`
          @keyframes scan-laser { 
            0% { transform: translateY(0); opacity: 0; } 
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(140px); opacity: 0; } 
          }
          @keyframes pulse-ring { 
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); } 
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); } 
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } 
          }
          @keyframes slide-up-fade {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* Main Application Window */}
      <div className="w-full h-full max-h-[420px] max-w-[600px] bg-white rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.12)] border border-emerald-100 flex flex-col overflow-hidden relative">
        
        {/* Mac-style Top Bar */}
        <div className="h-10 sm:h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 shrink-0 justify-between">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-300"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-300"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono text-emerald-700/70 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50 flex items-center gap-2">
            <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.95 11.95 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            pipeline/vector-match
          </div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 flex flex-col sm:flex-row overflow-hidden bg-[#fafafa]">
          
          {/* Left Panel: Resume Parsing Visualization */}
          <div className="w-full sm:w-[50%] p-4 sm:p-5 relative overflow-hidden flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100 shrink-0">
            
            {/* The Document */}
            <div className="w-full max-w-[200px] bg-white border border-slate-200 rounded-lg shadow-sm p-4 relative overflow-hidden">
              
              {/* Scanning Laser Animation */}
              <div 
                className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] z-20"
                style={{ top: '10px', animation: 'scan-laser 3s ease-in-out infinite' }}
              >
                <div className="absolute inset-0 bg-emerald-400/20 h-10 -top-10"></div>
              </div>

              {/* Doc Content (Skeleton) */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
                <div className="space-y-1.5 w-full">
                  <div className="h-2 w-3/4 bg-slate-300 rounded"></div>
                  <div className="h-1.5 w-1/2 bg-slate-200 rounded"></div>
                </div>
              </div>

              <div className="space-y-2.5 mb-4">
                <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                <div className="h-1.5 w-5/6 bg-slate-100 rounded"></div>
                <div className="h-1.5 w-4/6 bg-slate-100 rounded"></div>
              </div>

              {/* Extracted Skills */}
              <div className="flex flex-wrap gap-1.5 relative z-10">
                <div className="h-4 w-12 bg-emerald-100 border border-emerald-200 rounded text-[7px] font-bold text-emerald-700 flex items-center justify-center">React</div>
                <div className="h-4 w-14 bg-emerald-100 border border-emerald-200 rounded text-[7px] font-bold text-emerald-700 flex items-center justify-center">Node.js</div>
                <div className="h-4 w-16 bg-slate-100 border border-slate-200 rounded text-[7px] font-bold text-slate-400 flex items-center justify-center">Python</div>
              </div>
            </div>
            
            {/* Status pill */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">Parsing Data</span>
            </div>
          </div>

          {/* Right Panel: Vector Match Score */}
          <div className="flex-1 bg-white p-4 sm:p-5 flex flex-col justify-center relative overflow-hidden z-10">
            
            <div className="text-center mb-6">
              <h4 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Vector Match Score</h4>
              <p className="text-[9px] text-slate-400">Querying indexed profiles</p>
            </div>

            {/* Pulsing Match Ring */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto flex items-center justify-center mb-6">
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-100" style={{ animation: 'pulse-ring 2.5s infinite' }}></div>
              <div className="absolute inset-2 rounded-full border border-emerald-200 border-dashed" style={{ animation: 'coreRotate 15s linear infinite' }}></div>
              
              {/* Core Score */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 rounded-full border-2 border-emerald-400 flex flex-col items-center justify-center shadow-lg">
                <span className="text-emerald-600 font-black text-xl sm:text-2xl tracking-tighter">94%</span>
              </div>

              {/* Floating Match Nodes */}
              <div className="absolute -top-2 -right-2 bg-white px-2 py-0.5 rounded shadow border border-slate-100 text-[8px] font-bold text-emerald-600" style={{ animation: 'slide-up-fade 0.5s ease-out forwards 1s', opacity: 0 }}>Seniority</div>
              <div className="absolute -bottom-2 -left-2 bg-white px-2 py-0.5 rounded shadow border border-slate-100 text-[8px] font-bold text-emerald-600" style={{ animation: 'slide-up-fade 0.5s ease-out forwards 1.5s', opacity: 0 }}>Tech Stack</div>
            </div>

            {/* Action Button */}
            <div className="mx-auto w-full max-w-[140px] h-8 bg-slate-900 rounded-md flex items-center justify-center gap-2 shadow-md">
              <span className="text-[10px] font-semibold text-white">Approve Candidate</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}