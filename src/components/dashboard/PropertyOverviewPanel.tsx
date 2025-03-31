"use client";

import { motion } from 'framer-motion';
import { BentoPanel } from '@/src/components/bento/grid';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';

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

export function PropertyOverviewPanel() {
  return (
    <motion.div 
      custom={0} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-6"
    >
      <BentoPanel 
        variant="glassMedium" 
        hover="glow" 
        expandable={true}
        responsiveHeight="md"
        className="w-full"
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2 sm:pb-4">
          <CardTitle className="text-[1.125rem] sm:text-[1.25rem]">Thailand Nationwide Properties</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full pt-0">
          <p className="mb-2 sm:mb-4 text-[0.875rem] sm:text-[1rem]">Manage your nationwide property portfolio from a single dashboard.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 flex-grow">
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_10px_rgba(0,207,253,0.2)] hover:shadow-[0_0_15px_rgba(0,207,253,0.4)] transition-all duration-300">
                <CardContent className="p-2 sm:p-4">
                  <h3 className="text-[1rem] sm:text-[1.125rem] font-semibold mb-1 sm:mb-2">45+ Properties</h3>
                  <p className="text-[0.75rem] sm:text-[0.875rem] text-white/70">Across Thailand</p>
                  <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_10px_rgba(0,207,253,0.2)] hover:shadow-[0_0_15px_rgba(0,207,253,0.4)] transition-all duration-300">
                <CardContent className="p-2 sm:p-4">
                  <h3 className="text-[1rem] sm:text-[1.125rem] font-semibold mb-1 sm:mb-2">88% Occupancy</h3>
                  <p className="text-[0.75rem] sm:text-[0.875rem] text-white/70">High season rate</p>
                  <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '88%' }}
                      transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_10px_rgba(0,207,253,0.2)] hover:shadow-[0_0_15px_rgba(0,207,253,0.4)] transition-all duration-300">
                <CardContent className="p-2 sm:p-4">
                  <h3 className="text-[1rem] sm:text-[1.125rem] font-semibold mb-1 sm:mb-2">฿3.85M</h3>
                  <p className="text-[0.75rem] sm:text-[0.875rem] text-white/70">Monthly revenue</p>
                  <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_0_10px_rgba(0,207,253,0.2)] hover:shadow-[0_0_15px_rgba(0,207,253,0.4)] transition-all duration-300">
                <CardContent className="p-2 sm:p-4">
                  <h3 className="text-[1rem] sm:text-[1.125rem] font-semibold mb-1 sm:mb-2">4.8/5</h3>
                  <p className="text-[0.75rem] sm:text-[0.875rem] text-white/70">Guest rating</p>
                  <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '92%' }}
                      transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
