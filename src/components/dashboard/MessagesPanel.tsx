"use client";

import { motion } from 'framer-motion';
import { BentoPanel } from '@/src/components/bento/grid';
import { Button } from '@/src/components/ui/button';
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

export function MessagesPanel() {
  return (
    <motion.div 
      custom={4} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
    >
      <BentoPanel 
        variant="glass" 
        hover="none" 
        expandable={true}
        responsiveHeight="md"
        className="w-full"
      >
        <CardHeader className="pb-2 sm:pb-4">
          <CardTitle className="text-[1.125rem] sm:text-[1.25rem]">Guest Messages</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full pt-0">
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-2 sm:p-3 rounded-xl border border-white/10 mb-2 flex-grow hover:shadow-[0_0_15px_rgba(0,207,253,0.3)] transition-all duration-300">
            <p className="text-[0.75rem] sm:text-[0.875rem]">New message from Somchai K. regarding early check-in at Sukhumvit Residence.</p>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-2 sm:p-3 rounded-xl border border-white/10 mb-2 flex-grow hover:shadow-[0_0_15px_rgba(0,207,253,0.3)] transition-all duration-300">
            <p className="text-[0.75rem] sm:text-[0.875rem]">Message from Sarah J. about extending stay at Phuket Beachfront Villa.</p>
          </div>
          <Button variant="glass" size="sm" className="w-full">View All Messages</Button>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
