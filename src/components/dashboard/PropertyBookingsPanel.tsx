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

interface Booking {
  id: number;
  property: string;
  guest: string;
  checkIn: string;
  checkOut: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  guestCount: number;
}

// Sample booking data
const bookings: Booking[] = [
  { 
    id: 1, 
    property: 'Phuket Beachfront Villa', 
    guest: 'Sarah Johnson', 
    checkIn: '2025-04-05', 
    checkOut: '2025-04-12', 
    status: 'Confirmed',
    guestCount: 4
  },
  { 
    id: 2, 
    property: 'Chiang Mai Riverside Resort', 
    guest: 'Michael Chen', 
    checkIn: '2025-04-10', 
    checkOut: '2025-04-15', 
    status: 'Pending',
    guestCount: 2
  },
  { 
    id: 3, 
    property: 'Sukhumvit Residence', 
    guest: 'Emma Wilson', 
    checkIn: '2025-04-03', 
    checkOut: '2025-04-07', 
    status: 'Completed',
    guestCount: 1
  },
  { 
    id: 4, 
    property: 'Koh Samui Paradise', 
    guest: 'David Thompson', 
    checkIn: '2025-04-15', 
    checkOut: '2025-04-22', 
    status: 'Confirmed',
    guestCount: 6
  },
  { 
    id: 5, 
    property: 'Hua Hin Seaside Condo', 
    guest: 'Lisa Rodriguez', 
    checkIn: '2025-04-08', 
    checkOut: '2025-04-11', 
    status: 'Cancelled',
    guestCount: 3
  }
];

export function PropertyBookingsPanel() {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <motion.div 
      custom={2} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-1 md:col-span-1 lg:col-span-6 row-span-1"
    >
      <BentoPanel 
        variant="glassMedium" 
        hover="lift" 
        expandable={true}
        className="h-full"
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Upcoming Bookings</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <p>Manage upcoming guest reservations</p>
            <Button variant="glass" size="sm">New Booking</Button>
          </div>
          <div className="space-y-3 flex-grow overflow-auto max-h-[300px] pr-2">
            {bookings.map((booking, index) => (
              <motion.div 
                key={booking.id}
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
                    <h3 className="font-medium">{booking.property}</h3>
                    <p className="text-sm text-white/70">Guest: {booking.guest}</p>
                  </div>
                  <span className={`
                    px-2 py-1 rounded text-xs font-medium
                    ${booking.status === 'Confirmed' ? 'bg-green-500/20 text-green-300' : 
                      booking.status === 'Pending' ? 'bg-amber-500/20 text-amber-300' : 
                      booking.status === 'Completed' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-red-500/20 text-red-300'}
                  `}>
                    {booking.status}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                  <span>{formatDate(booking.checkIn)} - {formatDate(booking.checkOut)}</span>
                  <span>{booking.guestCount} {booking.guestCount === 1 ? 'Guest' : 'Guests'}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
