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

interface StaffMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  taskCount: number;
  availability: 'Available' | 'Busy' | 'Unavailable';
}

// Sample staff data
const staffMembers: StaffMember[] = [
  { 
    id: 1, 
    name: 'Somchai Jaidee', 
    role: 'Maintenance Manager', 
    avatar: '👨‍🔧', 
    taskCount: 5,
    availability: 'Busy'
  },
  { 
    id: 2, 
    name: 'Nisa Srisuk', 
    role: 'Cleaning Supervisor', 
    avatar: '👩‍🔧', 
    taskCount: 3,
    availability: 'Available'
  },
  { 
    id: 3, 
    name: 'Chai Wattana', 
    role: 'Technician', 
    avatar: '👨‍🔧', 
    taskCount: 2,
    availability: 'Available'
  },
  { 
    id: 4, 
    name: 'Malee Thongchai', 
    role: 'Guest Relations', 
    avatar: '👩‍💼', 
    taskCount: 4,
    availability: 'Busy'
  },
  { 
    id: 5, 
    name: 'Prem Nakorn', 
    role: 'Pool Specialist', 
    avatar: '👨‍🔧', 
    taskCount: 1,
    availability: 'Available'
  },
  { 
    id: 6, 
    name: 'Siriwan Phuket', 
    role: 'Gardener', 
    avatar: '👩‍🌾', 
    taskCount: 0,
    availability: 'Unavailable'
  }
];

export function TaskAssignmentPanel() {
  return (
    <motion.div 
      custom={2} 
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
          <CardTitle>Staff Assignments</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <p>Manage staff and task assignments</p>
            <Button variant="glass" size="sm">Add Staff</Button>
          </div>
          <div className="space-y-3 flex-grow overflow-auto max-h-[400px] pr-2">
            {staffMembers.map((staff, index) => (
              <motion.div 
                key={staff.id}
                className="bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 15px rgba(0, 207, 253, 0.3)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                    {staff.avatar}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{staff.name}</h3>
                    <p className="text-sm text-white/70">{staff.role}</p>
                  </div>
                  <span className={`
                    px-2 py-1 rounded text-xs font-medium
                    ${staff.availability === 'Available' ? 'bg-green-500/20 text-green-300' : 
                      staff.availability === 'Busy' ? 'bg-amber-500/20 text-amber-300' : 
                      'bg-red-500/20 text-red-300'}
                  `}>
                    {staff.availability}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-white/60">Current tasks: {staff.taskCount}</span>
                  <Button variant="glass" size="sm" className="h-7 text-xs">Assign Task</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
