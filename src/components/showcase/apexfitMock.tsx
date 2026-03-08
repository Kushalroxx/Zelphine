import { CreditCard, Dumbbell } from "lucide-react";

const ApexFitMock = () => (
  <div className="w-full h-full bg-[#050505] p-8 md:p-12 relative flex flex-col justify-center items-center overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#CCFF00]/10 blur-[100px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-[#CCFF00]/20"></div>
    <div className="relative z-10 w-full max-w-sm mx-auto transform transition-transform duration-700 group-hover:scale-[1.05]">
      <div className="absolute -top-12 -right-6 w-3/4 bg-[#1A1A1A] border border-white/5 rounded-2xl p-5 shadow-2xl opacity-50 transform rotate-6">
         <div className="text-xs text-gray-400 mb-1">Annual Plan</div>
         <div className="text-2xl font-black text-white">₹36,000</div>
      </div>

      <div className="relative bg-[#121212] border border-white/10 rounded-2xl p-5 shadow-2xl z-10 -ml-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="font-black text-white text-xl tracking-tighter">HIIT Core <span className="text-[#CCFF00]">Crusher</span></div>
            <div className="text-sm text-gray-400 mt-1">45 Min • Advanced</div>
          </div>
          <Dumbbell className="w-6 h-6 text-[#CCFF00]" />
        </div>
        <div className="h-24 w-full bg-white/5 rounded-xl flex items-center justify-center border border-white/5">
          <div className="w-10 h-10 rounded-full bg-[#CCFF00] flex items-center justify-center text-black pl-1">
            ▶
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 -right-8 w-5/6 bg-[#CCFF00] text-black rounded-2xl p-4 shadow-2xl z-20 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm">Secure Checkout</span>
          <CreditCard className="w-4 h-4" />
        </div>
        <div className="bg-black/10 rounded-lg p-2.5 text-sm font-medium flex justify-between">
          <span>Pay via UPI</span>
          <span className="font-black">Pay Now</span>
        </div>
      </div>
    </div>
  </div>
);
export default ApexFitMock;