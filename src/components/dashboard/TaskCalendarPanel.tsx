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

// Get current date and month information
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// Sample task data for calendar
const tasksByDate: Record<string, {count: number, highPriority: boolean}> = {
  '2025-04-01': { count: 2, highPriority: true },
  '2025-04-03': { count: 1, highPriority: false },
  '2025-04-05': { count: 3, highPriority: true },
  '2025-04-08': { count: 1, highPriority: false },
  '2025-04-10': { count: 2, highPriority: false },
  '2025-04-12': { count: 1, highPriority: true },
  '2025-04-15': { count: 4, highPriority: true },
  '2025-04-18': { count: 2, highPriority: false },
  '2025-04-22': { count: 1, highPriority: false },
  '2025-04-25': { count: 2, highPriority: true },
  '2025-04-28': { count: 1, highPriority: false },
};

export function TaskCalendarPanel() {
  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 border border-white/5 rounded-md bg-white/5 opacity-30"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `2025-04-${day.toString().padStart(2, '0')}`;
      const isToday = day === currentDate.getDate();
      const hasTasks = tasksByDate[dateString];
      
      days.push(
        <motion.div 
          key={day}
          className={`h-12 border ${isToday ? 'border-primary/40' : 'border-white/5'} rounded-md bg-white/5 p-1 relative ${hasTasks ? 'cursor-pointer' : ''}`}
          whileHover={hasTasks ? { scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' } : {}}
        >
          <span className={`text-xs ${isToday ? 'text-primary font-bold' : 'text-white/70'}`}>{day}</span>
          {hasTasks && (
            <div className="absolute bottom-1 right-1 flex gap-1">
              <span className={`w-2 h-2 rounded-full ${hasTasks.highPriority ? 'bg-red-400' : 'bg-blue-400'}`}></span>
              {hasTasks.count > 1 && <span className="text-[10px] text-white/70">+{hasTasks.count}</span>}
            </div>
          )}
        </motion.div>
      );
    }
    
    return (
      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{monthNames[currentMonth]} {currentYear}</h3>
          <div className="flex gap-2">
            <Button variant="glass" size="sm" className="w-8 h-8 p-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Button>
            <Button variant="glass" size="sm" className="w-8 h-8 p-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs text-white/50">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  return (
    <motion.div 
      custom={1} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-1 md:col-span-2 lg:col-span-6 row-span-1"
    >
      <BentoPanel 
        variant="glassMedium" 
        hover="lift" 
        expandable={true}
        className="h-full"
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Task Calendar</CardTitle>
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
          <div className="flex justify-between items-center mb-2">
            <p>View and schedule tasks across properties</p>
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                <span className="text-white/70">High Priority</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="text-white/70">Normal</span>
              </div>
            </div>
          </div>
          {generateCalendarDays()}
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
