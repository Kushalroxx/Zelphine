import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'nextjs-toploader/app';
import React from 'react'

export default function AgencyPopup({showAlert, setShowAlert, alertConfig}:any) {
  const router = useRouter();
      const handleRedirect = () => {
    setShowAlert(false);
    router.push("/contactus")
  };

  return (
    <AnimatePresence>
        {showAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAlert(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-10 w-full max-w-md bg-[#121212] border border-white/10 p-8 shadow-2xl flex flex-col gap-6"
            >
              <div>
                <div className="text-[#CCFF00] mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">
                  {alertConfig.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {alertConfig.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
                <button 
                  onClick={() => setShowAlert(false)}
                  className="px-6 py-3 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleRedirect}
                  className="px-6 py-3 bg-[#CCFF00] text-[#050505] font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
                >
                  {alertConfig.buttonText}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
  )
}
