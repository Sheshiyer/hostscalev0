"use client";

import { motion } from 'framer-motion';
import { BentoPanel } from '@/src/components/bento/grid';
import { CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  })
};

export function PerformancePanel() {
  return (
    <motion.div 
      custom={1} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 row-span-1 md:row-span-2"
    >
      <BentoPanel 
        variant="glass" 
        hover="lift" 
        expandable={true}
        responsiveHeight="lg"
        className="w-full"
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2 sm:pb-4">
          <CardTitle className="text-[1.125rem] sm:text-[1.25rem]">Portfolio Performance</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20V10"></path>
              <path d="M18 20V4"></path>
              <path d="M6 20v-4"></path>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full pt-0">
          <p className="mb-2 sm:mb-4 text-[0.875rem] sm:text-[1rem]">Track key metrics across your nationwide properties.</p>
          <div className="space-y-4 flex-grow">
            <motion.div 
              className="bg-gradient-to-br from-white/10 to-white/5 p-2 sm:p-4 rounded-xl border border-white/10 shadow-[0_0_10px_rgba(0,207,253,0.1)]"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 15px rgba(0, 207, 253, 0.3)'
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-[0.75rem] sm:text-[0.875rem] font-medium mb-1">Revenue</h3>
              <div className="flex items-center justify-between">
                <span className="text-[1rem] sm:text-[1.25rem] font-bold">฿3,850,000</span>
                <motion.span 
                  className="text-green-400 text-[0.875rem] flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                  +18%
                </motion.span>
              </div>
              <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-white/10 to-white/5 p-2 sm:p-4 rounded-xl border border-white/10 shadow-[0_0_10px_rgba(0,207,253,0.1)]"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 15px rgba(0, 207, 253, 0.3)'
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-[0.75rem] sm:text-[0.875rem] font-medium mb-1">Guest Satisfaction</h3>
              <div className="flex items-center justify-between">
                <span className="text-[1rem] sm:text-[1.25rem] font-bold">4.7/5</span>
                <motion.span 
                  className="text-green-400 text-[0.875rem] flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                  +0.2
                </motion.span>
              </div>
              <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '94%' }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
