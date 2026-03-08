import { Map, MessageSquare } from "lucide-react";

const CareerSathiMock = () => (
  <div className="w-full h-full bg-[#09090B] p-8 md:p-12 relative flex flex-col justify-center items-center overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-primary/30"></div>
    <div className="relative z-10 w-full max-w-sm mx-auto transform transition-transform duration-700 group-hover:scale-[1.05]">
      <div className="bg-[#121212] border border-white/10 shadow-2xl rounded-2xl p-5 w-full relative z-10">
         <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-4">
           <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
             <Map className="w-4 h-4 text-primary" />
           </div>
           <span className="text-white font-bold text-lg">AI Generated Roadmap</span>
         </div>
         <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs mt-0.5 shadow-[0_0_15px_rgba(37,99,235,0.5)]">1</div>
              <div className="space-y-1.5 flex-1">
                <div className="h-2.5 w-1/3 bg-white/20 rounded"></div>
                <div className="h-2 w-full bg-white/10 rounded"></div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-white/20 flex items-center justify-center text-white/50 text-xs mt-0.5">2</div>
              <div className="space-y-1.5 flex-1">
                <div className="h-2.5 w-1/2 bg-white/10 rounded"></div>
                <div className="h-2 w-3/4 bg-white/5 rounded"></div>
              </div>
            </div>
         </div>
      </div>
      <div className="absolute -bottom-8 -left-6 w-[85%] bg-primary text-white rounded-2xl rounded-bl-none p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 flex items-start gap-3 border border-white/20">
        <MessageSquare className="w-4 h-4 shrink-0 mt-0.5" />
        <div className="space-y-1 flex-1">
          <div className="text-sm font-bold">AI Career Mentor</div>
          <div className="text-xs text-blue-100 leading-relaxed">I've updated your daily tasks based on the UI simulation results.</div>
        </div>
      </div>
    </div>
  </div>
);

export default CareerSathiMock;