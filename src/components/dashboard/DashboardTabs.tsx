"use client";

import { motion } from 'framer-motion';

export interface Tab {
  id: string;
  label: string;
}

interface DashboardTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function DashboardTabs({ tabs, activeTab, onTabChange }: DashboardTabsProps) {
  return (
    <motion.div 
      className="flex overflow-x-auto mb-4 sm:mb-6 md:mb-8 pb-2 scrollbar-thin no-scrollbar"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      {tabs.map((tab, index) => (
        <motion.button
          key={tab.id}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mr-2 text-[0.75rem] sm:text-[0.875rem] font-medium transition-all duration-300 ${
            activeTab === tab.id 
              ? "bg-primary text-black" 
              : "bg-white/5 hover:bg-white/10 text-white"
          }`}
          onClick={() => onTabChange(tab.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
        >
          {tab.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
