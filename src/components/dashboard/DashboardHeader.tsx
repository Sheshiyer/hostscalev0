"use client";

import { motion } from 'framer-motion';

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
      <div className="flex items-center gap-2 sm:gap-3">
        <img 
          src="/images/hostscalelogo.png" 
          alt="HostScale Logo" 
          className="h-8 sm:h-10 w-auto"
        />
        <motion.h1 
          className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.875rem] font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Dashboard
        </motion.h1>
      </div>
      
      <motion.div 
        className="flex items-center gap-2 sm:gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <button className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        </button>
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-[0.875rem] font-medium">AR</span>
        </div>
      </motion.div>
    </div>
  );
}
