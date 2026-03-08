"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'nextjs-toploader/app';

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

type ClassSession = {
  id: string;
  time: string;
  name: string;
  trainer: string;
  spotsLeft: number;
};

const classSchedule: Record<string, ClassSession[]> = {
  Mon: [
    { id: "m1", time: "06:00 AM", name: "HIIT Performance", trainer: "Alex", spotsLeft: 4 },
    { id: "m2", time: "12:00 PM", name: "Core & Mobility", trainer: "Jordan", spotsLeft: 12 },
    { id: "m3", time: "06:30 PM", name: "Heavy Lifts", trainer: "Sarah", spotsLeft: 2 },
  ],
  Tue: [
    { id: "t1", time: "07:00 AM", name: "Powerlifting Base", trainer: "Sarah", spotsLeft: 8 },
    { id: "t2", time: "05:30 PM", name: "Endurance Row", trainer: "Marcus", spotsLeft: 5 },
  ],
  Wed: [
    { id: "w1", time: "06:00 AM", name: "HIIT Performance", trainer: "Alex", spotsLeft: 1 },
    { id: "w2", time: "12:00 PM", name: "Active Recovery", trainer: "Jordan", spotsLeft: 15 },
    { id: "w3", time: "07:00 PM", name: "Combat Striking", trainer: "Leo", spotsLeft: 6 },
  ],
  Thu: [
    { id: "th1", time: "07:00 AM", name: "Kettlebell Flow", trainer: "Marcus", spotsLeft: 10 },
    { id: "th2", time: "06:30 PM", name: "Heavy Lifts", trainer: "Sarah", spotsLeft: 0 }, // Waitlist example
  ],
  Fri: [
    { id: "f1", time: "06:00 AM", name: "MetCon Friday", trainer: "Alex", spotsLeft: 3 },
    { id: "f2", time: "04:00 PM", name: "Open Gym", trainer: "Staff", spotsLeft: 20 },
  ],
};

export const InteractiveSchedule = () => {
  const [activeTab, setActiveTab] = useState(days[0]);
  const router = useRouter();

  return (
    <section id="schedule" className="w-full bg-[#050505] py-24 px-4">
      <div className="max-w-4xl mx-auto text-[#F3F4F6]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-2">Training Schedule</h2>
            <p className="text-[#9CA3AF]">Book your sessions up to 7 days in advance.</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-between items-center bg-[#121212] p-2 rounded-full mb-8 relative border border-white/5">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveTab(day)}
              className={`relative px-4 md:px-6 py-3 w-full text-center z-10 font-medium transition-colors duration-300 ${
                activeTab === day ? 'text-[#050505]' : 'text-[#9CA3AF] hover:text-white'
              }`}
            >
              {activeTab === day && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-[#CCFF00] rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {day}
            </button>
          ))}
        </div>
        
        {/* Dynamic Class List */}
        <div className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              {classSchedule[activeTab].map((session, index) => (
                <div 
                  key={session.id} 
                  className={`flex flex-col md:flex-row justify-between items-start md:items-center p-6 group hover:bg-white/5 transition-colors ${
                    index !== classSchedule[activeTab].length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  
                  {/* Time & Class Name */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-4 md:mb-0">
                    <span className="text-[#CCFF00] font-mono text-lg">{session.time}</span>
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-wide">{session.name}</h4>
                      <span className="text-[#9CA3AF] text-sm">w/ {session.trainer}</span>
                    </div>
                  </div>

                  {/* Booking Action */}
                  <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                    <span className={`text-sm font-mono ${session.spotsLeft === 0 ? 'text-red-500' : 'text-[#9CA3AF]'}`}>
                      {session.spotsLeft === 0 ? 'Waitlist' : `${session.spotsLeft} Spots Left`}
                    </span>
                    <button 
                    onClick={()=>router.push("/showcase/apexfit/member-portal")}
                      disabled={session.spotsLeft === 0}
                      className={`px-6 py-2 uppercase font-bold text-sm tracking-wide transition-all duration-300 border ${
                        session.spotsLeft === 0 
                          ? 'bg-transparent border-white/10 text-white/30 cursor-not-allowed'
                          : 'bg-transparent border-[#CCFF00] text-[#CCFF00] hover:bg-[#CCFF00] hover:text-black'
                      }`}
                    >
                      {session.spotsLeft === 0 ? 'Full' : 'Book'}
                    </button>
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};