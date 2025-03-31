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

interface Task {
  id: number;
  property: string;
  task: string;
  priority: string;
  assignee: string;
  dueDate: string;
}

interface TasksPanelProps {
  tasks: Task[];
}

export function TasksPanel({ tasks }: TasksPanelProps) {
  return (
    <motion.div 
      custom={2} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 row-span-1 md:row-span-2"
    >
      <BentoPanel 
        variant="glassMedium" 
        hover="lift" 
        expandable={true}
        responsiveHeight="lg"
        className="w-full"
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2 sm:pb-4">
          <CardTitle className="text-[1.125rem] sm:text-[1.25rem]">Property Tasks</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full pt-0">
          <p className="mb-2 sm:mb-4 text-[0.875rem] sm:text-[1rem]">Coordinate operations across your nationwide properties.</p>
          <div className="space-y-3 flex-grow">
            {tasks.map((task, index) => (
              <motion.div 
                key={task.id}
                className="bg-gradient-to-br from-white/10 to-white/5 p-2 sm:p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 15px rgba(0, 207, 253, 0.3)'
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-[0.875rem] sm:text-[1rem]">{task.task}</h3>
                    <p className="text-[0.75rem] sm:text-[0.875rem] text-white/70">{task.property}</p>
                  </div>
                  <span className={`
                    px-2 py-1 rounded text-[0.75rem] font-medium
                    ${task.priority === 'High' ? 'bg-red-500/20 text-red-300' : 
                      task.priority === 'Medium' ? 'bg-amber-500/20 text-amber-300' : 
                      'bg-blue-500/20 text-blue-300'}
                  `}>
                    {task.dueDate}
                  </span>
                </div>
                <div className="mt-1 sm:mt-2 flex items-center justify-between text-[0.75rem] text-white/60">
                  <span>{task.assignee}</span>
                  <span className={`
                    px-2 py-0.5 rounded-full
                    ${task.priority === 'High' ? 'bg-red-500/20 text-red-300' : 
                      task.priority === 'Medium' ? 'bg-amber-500/20 text-amber-300' : 
                      'bg-blue-500/20 text-blue-300'}
                  `}>
                    {task.priority}
                  </span>
                </div>
              </motion.div>
            ))}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button variant="glass" size="sm" className="w-full mt-2">
                View All Tasks
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
