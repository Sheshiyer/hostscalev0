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

// Sample occupancy data by region
const occupancyByRegion = [
  { region: 'Bangkok', rate: 88, change: +2.5 },
  { region: 'Phuket', rate: 92, change: +5.1 },
  { region: 'Chiang Mai', rate: 85, change: +1.8 },
  { region: 'Koh Samui', rate: 90, change: +3.2 },
  { region: 'Pattaya', rate: 78, change: -1.5 },
  { region: 'Hua Hin', rate: 82, change: +0.7 }
];

// Sample occupancy trend data
const occupancyTrend = [
  { month: 'Jan', rate: 72 },
  { month: 'Feb', rate: 75 },
  { month: 'Mar', rate: 80 },
  { month: 'Apr', rate: 88 },
  { month: 'May', rate: 92 },
  { month: 'Jun', rate: 95 },
  { month: 'Jul', rate: 97 },
  { month: 'Aug', rate: 98 },
  { month: 'Sep', rate: 94 },
  { month: 'Oct', rate: 88 },
  { month: 'Nov', rate: 82 },
  { month: 'Dec', rate: 85 }
];

export function OccupancyRatePanel() {
  return (
    <motion.div 
      custom={2} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="w-full h-full"
    >
      <BentoPanel 
        variant="glassMedium" 
        hover="lift" 
        expandable={true}
        responsiveHeight="lg"
        className="w-full"
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2 sm:pb-4">
          <CardTitle className="text-[1.125rem] sm:text-[1.25rem]">Occupancy Rates</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full pt-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
            <div>
              <p className="text-[0.75rem] sm:text-[0.875rem]">Current average occupancy</p>
              <div className="flex items-end gap-2">
                <h3 className="text-[1.125rem] sm:text-[1.5rem] font-bold">88%</h3>
                <p className="text-[0.75rem] sm:text-[0.875rem] text-green-400 flex items-center pb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                  +3.2%
                </p>
              </div>
            </div>
            <div className="flex gap-1 sm:gap-2 w-full sm:w-auto">
              <Button variant="glass" size="sm" className="h-6 sm:h-7 text-[0.75rem] sm:text-[0.875rem]">Week</Button>
              <Button variant="glass" size="sm" className="h-6 sm:h-7 text-[0.75rem] sm:text-[0.875rem]">Month</Button>
              <Button variant="glass" size="sm" className="h-6 sm:h-7 text-[0.75rem] sm:text-[0.875rem]">Year</Button>
            </div>
          </div>
          
          {/* Occupancy Trend Chart */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-2 sm:p-4 rounded-xl border border-white/10 mb-4">
            <h3 className="text-[0.75rem] sm:text-[0.875rem] font-medium mb-2 sm:mb-3">Yearly Trend (2025)</h3>
            <div className="relative h-16 sm:h-20">
              <div className="absolute inset-0 flex items-end">
                {occupancyTrend.map((item, index) => {
                  const isCurrent = item.month === 'Apr'; // Current month
                  
                  return (
                    <div key={item.month} className="flex-1 flex flex-col items-center">
                      <motion.div 
                        className="w-full relative"
                        initial={{ height: 0 }}
                        animate={{ height: `${item.rate}%` }}
                        transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                      >
                        <motion.div 
                          className={`absolute bottom-0 left-0 right-0 ${index === 0 ? 'rounded-bl-sm' : ''} ${index === occupancyTrend.length - 1 ? 'rounded-br-sm' : ''}`}
                          style={{ 
                            height: `${item.rate}%`,
                            background: isCurrent 
                              ? 'linear-gradient(to top, rgba(0, 207, 253, 0.8), rgba(0, 207, 253, 0.3))' 
                              : 'linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))'
                          }}
                          whileHover={{ 
                            backgroundColor: isCurrent ? 'rgba(0, 207, 253, 0.8)' : 'rgba(255, 255, 255, 0.3)'
                          }}
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </div>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between mt-1 pt-1 border-t border-white/10">
                {occupancyTrend.filter((_, i) => i % 3 === 0).map((item) => (
                  <span key={item.month} className="text-[0.5rem] sm:text-[0.625rem] text-white/60">{item.month}</span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Occupancy by Region */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-2 sm:p-4 rounded-xl border border-white/10 overflow-y-auto" style={{ maxHeight: "300px" }}>
            <h3 className="text-[0.75rem] sm:text-[0.875rem] font-medium mb-2 sm:mb-3">Occupancy by Region</h3>
            <div className="space-y-2">
              {occupancyByRegion.map((item, index) => (
                <motion.div 
                  key={item.region}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-[0.75rem] sm:text-[0.875rem]">{item.region}</span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-16 sm:w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${item.rate}%` }}
                        transition={{ delay: 0.5 + (index * 0.1), duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[0.75rem] sm:text-[0.875rem] font-medium">{item.rate}%</span>
                      <span className={`text-[0.625rem] sm:text-[0.75rem] ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {item.change >= 0 ? '+' : ''}{item.change}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
