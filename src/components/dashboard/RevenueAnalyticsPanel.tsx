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

// Sample revenue data for chart
const revenueData = [
  { month: 'Jan', amount: 2850000 },
  { month: 'Feb', amount: 3100000 },
  { month: 'Mar', amount: 3450000 },
  { month: 'Apr', amount: 3850000 },
  { month: 'May', amount: 4200000 },
  { month: 'Jun', amount: 4550000 },
  { month: 'Jul', amount: 4800000 },
  { month: 'Aug', amount: 4950000 },
  { month: 'Sep', amount: 4700000 },
  { month: 'Oct', amount: 4300000 },
  { month: 'Nov', amount: 3950000 },
  { month: 'Dec', amount: 4100000 }
];

// Sample revenue breakdown by property type
const revenueByPropertyType = [
  { type: 'Villas', percentage: 45, amount: '฿1,732,500', color: 'bg-blue-500' },
  { type: 'Condos', percentage: 30, amount: '฿1,155,000', color: 'bg-purple-500' },
  { type: 'Resorts', percentage: 15, amount: '฿577,500', color: 'bg-green-500' },
  { type: 'Houses', percentage: 10, amount: '฿385,000', color: 'bg-amber-500' }
];

export function RevenueAnalyticsPanel() {
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      maximumFractionDigits: 0
    }).format(amount).replace('฿', '฿ ');
  };

  // Find max value for scaling the chart
  const maxRevenue = Math.max(...revenueData.map(item => item.amount));

  return (
    <motion.div 
      custom={1} 
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
          <CardTitle className="text-[1.125rem] sm:text-[1.25rem]">Revenue Analytics</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full pt-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
            <div>
              <p className="text-[0.75rem] sm:text-[0.875rem]">Track revenue performance across properties</p>
              <h3 className="text-[1.125rem] sm:text-[1.5rem] font-bold mt-1">฿ 3,850,000</h3>
              <p className="text-[0.75rem] sm:text-[0.875rem] text-green-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                +11.6% from last month
              </p>
            </div>
            <div className="flex gap-1 sm:gap-2 w-full sm:w-auto">
              <Button variant="glass" size="sm" className="h-7 sm:h-8 text-[0.75rem] sm:text-[0.875rem]">Monthly</Button>
              <Button variant="glass" size="sm" className="h-7 sm:h-8 text-[0.75rem] sm:text-[0.875rem]">Quarterly</Button>
              <Button variant="glass" size="sm" className="h-7 sm:h-8 text-[0.75rem] sm:text-[0.875rem]">Yearly</Button>
            </div>
          </div>
          
          {/* Revenue Chart */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-2 sm:p-4 rounded-xl border border-white/10 mb-4">
            <h3 className="text-[0.75rem] sm:text-[0.875rem] font-medium mb-2 sm:mb-3">Monthly Revenue (2025)</h3>
            <div className="flex items-end h-24 sm:h-32 gap-1 sm:gap-2">
              {revenueData.map((item, index) => {
                const height = (item.amount / maxRevenue) * 100;
                const isCurrent = item.month === 'Apr'; // Current month
                
                return (
                  <div key={item.month} className="flex flex-col items-center flex-1">
                    <motion.div 
                      className={`w-full rounded-t-sm ${isCurrent ? 'bg-primary' : 'bg-white/20'}`}
                      style={{ height: `${height}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                      whileHover={{ 
                        backgroundColor: isCurrent ? 'rgba(0, 207, 253, 0.8)' : 'rgba(255, 255, 255, 0.3)'
                      }}
                    />
                    <span className={`text-[0.625rem] sm:text-[0.75rem] mt-1 ${isCurrent ? 'text-primary font-medium' : 'text-white/60'}`}>{item.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Revenue Breakdown */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-2 sm:p-4 rounded-xl border border-white/10 overflow-y-auto" style={{ maxHeight: "300px" }}>
            <h3 className="text-[0.75rem] sm:text-[0.875rem] font-medium mb-2 sm:mb-3">Revenue by Property Type</h3>
            <div className="space-y-2">
              {revenueByPropertyType.map((item, index) => (
                <motion.div 
                  key={item.type}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[0.75rem] sm:text-[0.875rem]">{item.type}</span>
                    <span className="text-[0.75rem] sm:text-[0.875rem]">{item.amount} ({item.percentage}%)</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.8, ease: "easeOut" }}
                    />
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
