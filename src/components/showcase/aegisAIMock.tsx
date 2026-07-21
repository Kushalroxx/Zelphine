import React from 'react';

export default function AegisAIMock() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
      
      <style>
        {`
          @keyframes stream-up {
            0% { transform: translateY(20px); opacity: 0; }
            10% { transform: translateY(0); opacity: 1; }
            80% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-20px); opacity: 0; }
          }
          @keyframes alert-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
            50% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
          }
          @keyframes shield-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes typing-line {
            0% { width: 0; }
            100% { width: 100%; }
          }
        `}
      </style>

      {/* Main Terminal Window */}
      <div className="w-full h-full max-h-[440px] max-w-[600px] bg-[#0A0A0A] rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col overflow-hidden relative ring-1 ring-white/5">
        
        {/* Mac-style Top Bar */}
        <div className="h-10 sm:h-12 bg-[#111111] border-b border-white/5 flex items-center px-4 shrink-0 justify-between">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ED6A5E]"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#F5BF4F]"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#61C554]"></div>
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono text-white/40 flex items-center gap-2">
            bash — aegis-proxy-live
          </div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 flex flex-col sm:flex-row overflow-hidden relative">
          
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-purple-500/20 blur-[80px] pointer-events-none z-0"></div>

          {/* Left Panel: Live Traffic Feed */}
          <div className="w-full sm:w-[45%] p-4 border-b sm:border-b-0 sm:border-r border-white/5 flex flex-col justify-end relative z-10 shrink-0">
            <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-4">Live Traffic Feed</div>
            
            <div className="space-y-3 font-mono text-[9px] sm:text-[10px]">
              
              {/* Allowed Request */}
              <div className="opacity-50">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <span>[200 OK]</span>
                  <span className="text-white/50">req_77B1...</span>
                </div>
                <div className="text-white/40 truncate">"Summarize the Q3 financial report..."</div>
              </div>

              {/* Allowed Request */}
              <div className="opacity-70">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <span>[200 OK]</span>
                  <span className="text-white/50">req_92C4...</span>
                </div>
                <div className="text-white/40 truncate">"Write a python script for..."</div>
              </div>

              {/* Blocked Request (Animated) */}
              <div style={{ animation: 'stream-up 4s infinite' }}>
                <div className="flex items-center gap-2 text-red-400 mb-1">
                  <span>[403 BLOCKED]</span>
                  <span className="text-white/50">req_89A2...</span>
                </div>
                <div className="text-white/90 bg-red-500/10 border border-red-500/20 p-2 rounded">
                  "Looking for energetic digital natives to join our fast-paced startup."
                </div>
              </div>

            </div>
          </div>

          {/* Right Panel: Intercept Details */}
          <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center relative z-10 bg-[#050505]">
            
            {/* The Security Alert Card */}
            <div className="bg-[#111111] border border-red-500/30 rounded-lg p-4 relative overflow-hidden" style={{ animation: 'alert-pulse 2s infinite' }}>
              
              {/* Threat Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-red-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">Intercepted</span>
                </div>
                <span className="text-[10px] font-mono text-purple-400 border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 rounded">24ms Latency</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-[9px] text-white/40 uppercase mb-1">Violation Type</div>
                  <div className="text-sm font-semibold text-white/90">Age Discrimination</div>
                </div>

                <div>
                  <div className="text-[9px] text-white/40 uppercase mb-1">Proxy Action</div>
                  <div className="font-mono text-[10px] text-red-400">
                    <span className="text-purple-400">return new</span> Response(<br/>
                    &nbsp;&nbsp;<span className="text-green-400">"Policy violation detected."</span>, <br/>
                    &nbsp;&nbsp;{'{'} status: 403 {'}'}<br/>
                    );
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-[9px] text-white/40 uppercase mb-0.5">Confidence</div>
                    <div className="text-xs font-bold text-white">98.2%</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-white/40 uppercase mb-0.5">Model</div>
                    <div className="text-xs font-bold text-white">Vertex AI</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}