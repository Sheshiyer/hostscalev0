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

interface MaintenanceItem {
  id: number;
  property: string;
  issue: string;
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Urgent';
  assignee: string;
  scheduledDate: string;
  estimatedCost: string;
}

// Sample maintenance data
const maintenanceItems: MaintenanceItem[] = [
  { 
    id: 1, 
    property: 'Thonglor Loft', 
    issue: 'AC repair in master bedroom', 
    status: 'In Progress', 
    assignee: 'Maintenance Team',
    scheduledDate: '2025-04-02',
    estimatedCost: '฿3,500'
  },
  { 
    id: 2, 
    property: 'Pattaya Ocean View', 
    issue: 'Plumbing issue in bathroom', 
    status: 'Scheduled', 
    assignee: 'Plumbing Contractor',
    scheduledDate: '2025-04-05',
    estimatedCost: '฿2,800'
  },
  { 
    id: 3, 
    property: 'Silom Suites', 
    issue: 'Repaint living room walls', 
    status: 'Scheduled', 
    assignee: 'Painting Crew',
    scheduledDate: '2025-04-10',
    estimatedCost: '฿5,200'
  },
  { 
    id: 4, 
    property: 'Koh Samui Paradise', 
    issue: 'Pool pump replacement', 
    status: 'Urgent', 
    assignee: 'Pool Specialist',
    scheduledDate: '2025-04-03',
    estimatedCost: '฿12,000'
  },
  { 
    id: 5, 
    property: 'Chiang Mai Riverside Resort', 
    issue: 'Garden landscaping', 
    status: 'Completed', 
    assignee: 'Gardening Team',
    scheduledDate: '2025-03-28',
    estimatedCost: '฿4,500'
  }
];

export function PropertyMaintenancePanel() {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <motion.div 
      custom={3} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-1 md:col-span-1 lg:col-span-3 row-span-2"
    >
      <BentoPanel 
        variant="glassMedium" 
        hover="lift" 
        expandable={true}
        className="h-full"
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Maintenance Schedule</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <p>Track property maintenance and repairs</p>
            <Button variant="glass" size="sm">Schedule</Button>
          </div>
          <div className="space-y-3 flex-grow overflow-auto max-h-[400px] pr-2">
            {maintenanceItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className="bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 15px rgba(0, 207, 253, 0.3)'
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{item.issue}</h3>
                    <p className="text-sm text-white/70">{item.property}</p>
                  </div>
                  <span className={`
                    px-2 py-1 rounded text-xs font-medium
                    ${item.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 
                      item.status === 'Scheduled' ? 'bg-blue-500/20 text-blue-300' : 
                      item.status === 'In Progress' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-red-500/20 text-red-300'}
                  `}>
                    {item.status}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                  <span>{formatDate(item.scheduledDate)} • {item.assignee}</span>
                  <span>{item.estimatedCost}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
