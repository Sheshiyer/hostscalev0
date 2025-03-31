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

const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.02, 1],
    transition: { 
      duration: 2, 
      repeat: Infinity,
      ease: "easeInOut" 
    }
  }
};

interface Property {
  id: number;
  name: string;
  location: string;
  status: string;
  revenue: string;
  occupancy: number;
}

interface PropertyMapPanelProps {
  properties: Property[];
}

export function PropertyMapPanel({ properties }: PropertyMapPanelProps) {
  return (
    <motion.div 
      custom={3} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-6 row-span-1 md:row-span-2"
    >
      <BentoPanel 
        variant="glassHeavy" 
        hover="glow" 
        expandable={true}
        responsiveHeight="lg"
        className="w-full"
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2 sm:pb-4">
          <CardTitle className="text-[1.125rem] sm:text-[1.25rem]">Thailand Property Map</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full pt-0">
          <motion.div
            className="flex-grow bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 h-40 sm:h-48 md:h-64 flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(0,207,253,0.2)]"
            variants={pulse}
            initial="initial"
            animate="animate"
          >
            {/* Map placeholder with animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1035]/50 to-[#0f0a1e]/50"></div>
            
            {/* Animated map dots */}
            {properties.map((property, index) => {
              // Generate random positions for the demo
              const left = 15 + (index * 15) + Math.random() * 5;
              const top = 20 + (index * 10) + Math.random() * 10;
              
              return (
                <motion.div
                  key={property.id}
                  className={`absolute w-3 h-3 rounded-full ${
                    property.status === 'Occupied' ? 'bg-green-500' :
                    property.status === 'Vacant' ? 'bg-blue-500' :
                    'bg-amber-500'
                  }`}
                  style={{ left: `${left}%`, top: `${top}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.2, 1],
                    opacity: 1,
                    boxShadow: [
                      '0 0 0 rgba(0, 0, 0, 0)',
                      '0 0 10px rgba(255, 255, 255, 0.5)',
                      '0 0 5px rgba(255, 255, 255, 0.3)'
                    ]
                  }}
                  transition={{ 
                    delay: 1 + (index * 0.1),
                    duration: 0.8,
                    boxShadow: { repeat: Infinity, duration: 2 }
                  }}
                  whileHover={{ 
                    scale: 1.5,
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.7)'
                  }}
                />
              );
            })}
            
            <p className="text-white/50 relative z-10">Interactive Thailand property map</p>
          </motion.div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
