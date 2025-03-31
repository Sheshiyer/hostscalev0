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

interface Guest {
  id: number;
  name: string;
  email: string;
  phone: string;
  nationality: string;
  status: 'Current' | 'Upcoming' | 'Past' | 'VIP';
  stays: number;
  lastStay: string;
  avatar: string;
}

// Sample guest data
const guests: Guest[] = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    email: 'sarah.j@example.com', 
    phone: '+1 555-123-4567', 
    nationality: 'USA',
    status: 'Current',
    stays: 3,
    lastStay: '2025-04-01',
    avatar: '👩🏼'
  },
  { 
    id: 2, 
    name: 'Michael Chen', 
    email: 'mchen@example.com', 
    phone: '+65 9123 4567', 
    nationality: 'Singapore',
    status: 'Upcoming',
    stays: 1,
    lastStay: '2024-11-15',
    avatar: '👨🏻'
  },
  { 
    id: 3, 
    name: 'Emma Wilson', 
    email: 'emma.w@example.com', 
    phone: '+44 20 1234 5678', 
    nationality: 'UK',
    status: 'Past',
    stays: 2,
    lastStay: '2024-12-22',
    avatar: '👩🏻'
  },
  { 
    id: 4, 
    name: 'David Thompson', 
    email: 'david.t@example.com', 
    phone: '+61 2 1234 5678', 
    nationality: 'Australia',
    status: 'VIP',
    stays: 7,
    lastStay: '2025-03-15',
    avatar: '👨🏼'
  },
  { 
    id: 5, 
    name: 'Akira Tanaka', 
    email: 'akira.t@example.com', 
    phone: '+81 3 1234 5678', 
    nationality: 'Japan',
    status: 'Current',
    stays: 2,
    lastStay: '2025-04-01',
    avatar: '👨🏻'
  },
  { 
    id: 6, 
    name: 'Lisa Rodriguez', 
    email: 'lisa.r@example.com', 
    phone: '+34 91 123 4567', 
    nationality: 'Spain',
    status: 'Upcoming',
    stays: 0,
    lastStay: '',
    avatar: '👩🏽'
  }
];

export function GuestDirectoryPanel() {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    if (!dateString) return 'First stay';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <motion.div 
      custom={1} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-1 md:col-span-2 lg:col-span-6 row-span-2"
    >
      <BentoPanel 
        variant="glassMedium" 
        hover="lift" 
        expandable={true}
        className="h-full"
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Guest Directory</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <p>Manage guest information and preferences</p>
            <div className="flex gap-2">
              <Button variant="glass" size="sm">Add Guest</Button>
              <Button variant="glass" size="sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Search
              </Button>
            </div>
          </div>
          <div className="space-y-3 flex-grow overflow-auto max-h-[400px] pr-2">
            {guests.map((guest, index) => (
              <motion.div 
                key={guest.id}
                className="bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 15px rgba(0, 207, 253, 0.3)'
                }}
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg mr-3">
                    {guest.avatar}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{guest.name}</h3>
                      <span className={`
                        px-2 py-1 rounded text-xs font-medium
                        ${guest.status === 'Current' ? 'bg-green-500/20 text-green-300' : 
                          guest.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-300' : 
                          guest.status === 'VIP' ? 'bg-purple-500/20 text-purple-300' :
                          'bg-gray-500/20 text-gray-300'}
                      `}>
                        {guest.status}
                      </span>
                    </div>
                    <p className="text-sm text-white/70">{guest.email} • {guest.nationality}</p>
                    <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                      <span>Stays: {guest.stays}</span>
                      <span>Last stay: {formatDate(guest.lastStay)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
