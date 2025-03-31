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

export function QuickActionsPanel() {
  return (
    <motion.div 
      custom={5} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
    >
      <BentoPanel 
        variant="glass" 
        hover="glow" 
        expandable={true}
        responsiveHeight="sm"
        className="w-full"
      >
        <CardHeader className="pb-2 sm:pb-4">
          <CardTitle className="text-[1.125rem] sm:text-[1.25rem]">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-full pt-0">
          <div className="flex flex-wrap gap-2 flex-grow">
            <Button variant="glass" size="sm">Add Property</Button>
            <Button variant="glass" size="sm">Create Task</Button>
            <Button variant="glass" size="sm">Reports</Button>
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
