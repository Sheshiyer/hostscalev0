"use client";

import { useState, useEffect } from 'react';
import { BentoGrid } from '@/src/components/bento/grid';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  DashboardHeader,
  DashboardTabs,
  PropertyOverviewPanel,
  PerformancePanel,
  TasksPanel,
  PropertyMapPanel,
  MessagesPanel,
  QuickActionsPanel,
  PropertyListPanel,
  PropertyBookingsPanel,
  PropertyMaintenancePanel,
  TaskCalendarPanel,
  TaskAssignmentPanel,
  GuestDirectoryPanel,
  GuestFeedbackPanel,
  RevenueAnalyticsPanel,
  OccupancyRatePanel
} from '@/src/components/dashboard';

export default function DashboardPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Property data
  const properties = [
    { id: 1, name: 'Sukhumvit Residence', location: 'Sukhumvit Soi 11, Bangkok', status: 'Occupied', revenue: '฿125,000', occupancy: 92 },
    { id: 2, name: 'Silom Suites', location: 'Silom Road, Bangkok', status: 'Vacant', revenue: '฿98,000', occupancy: 78 },
    { id: 3, name: 'Thonglor Loft', location: 'Thonglor, Bangkok', status: 'Maintenance', revenue: '฿145,000', occupancy: 85 },
    { id: 4, name: 'Phuket Beachfront Villa', location: 'Patong Beach, Phuket', status: 'Occupied', revenue: '฿235,000', occupancy: 95 },
    { id: 5, name: 'Chiang Mai Riverside Resort', location: 'Ping River, Chiang Mai', status: 'Occupied', revenue: '฿180,000', occupancy: 88 },
    { id: 6, name: 'Koh Samui Paradise', location: 'Chaweng Beach, Koh Samui', status: 'Vacant', revenue: '฿210,000', occupancy: 82 },
    { id: 7, name: 'Hua Hin Seaside Condo', location: 'Hua Hin Beach, Prachuap', status: 'Occupied', revenue: '฿115,000', occupancy: 90 },
    { id: 8, name: 'Pattaya Ocean View', location: 'Jomtien Beach, Pattaya', status: 'Maintenance', revenue: '฿165,000', occupancy: 75 }
  ];

  // Tasks data
  const tasks = [
    { id: 1, property: 'Sukhumvit Residence', task: 'AC maintenance', priority: 'High', assignee: 'Maintenance Team', dueDate: 'Today' },
    { id: 2, property: 'Silom Suites', task: 'Deep cleaning', priority: 'Medium', assignee: 'Cleaning Staff', dueDate: 'Tomorrow' },
    { id: 3, property: 'Phuket Beachfront Villa', task: 'Pool service', priority: 'Medium', assignee: 'Pool Technician', dueDate: 'Wednesday' },
    { id: 4, property: 'Koh Samui Paradise', task: 'Garden landscaping', priority: 'Low', assignee: 'Gardening Team', dueDate: 'Friday' }
  ];

  // Dashboard tabs
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'properties', label: 'Properties' },
    { id: 'tasks', label: 'Tasks' },
    { id: 'guests', label: 'Guests' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <BentoGrid className="grid-cols-12 gap-y-6" gap="md">
            <PropertyOverviewPanel />
            <PerformancePanel />
            <TasksPanel tasks={tasks} />
            <PropertyMapPanel properties={properties} />
            <MessagesPanel />
            <QuickActionsPanel />
          </BentoGrid>
        );
      case 'properties':
        return (
          <BentoGrid className="grid-cols-12 gap-y-6" gap="md">
            <PropertyListPanel properties={properties} />
            <PropertyMaintenancePanel />
            <PropertyMapPanel properties={properties} />
            <PropertyBookingsPanel />
          </BentoGrid>
        );
      case 'tasks':
        return (
          <BentoGrid className="grid-cols-12 gap-y-6" gap="md">
            <TaskCalendarPanel />
            <TasksPanel tasks={tasks} />
            <TaskAssignmentPanel />
          </BentoGrid>
        );
      case 'guests':
        return (
          <BentoGrid className="grid-cols-12 gap-y-6" gap="md">
            <GuestDirectoryPanel />
            <GuestFeedbackPanel />
            <MessagesPanel />
          </BentoGrid>
        );
      case 'analytics':
        return (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <RevenueAnalyticsPanel />
            </div>
            <div className="w-full md:w-1/2">
              <OccupancyRatePanel />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0a1e] to-[#1a1035] overflow-x-hidden">
      <motion.div 
        className="container mx-auto px-3 sm:px-4 py-4 sm:py-6"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <DashboardHeader />
        
        <DashboardTabs 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={handleTabChange} 
        />
        
        <AnimatePresence mode="wait">
          {!isLoaded ? (
            // Loading state
            <motion.div 
              className="grid grid-cols-12 gap-4 sm:gap-6 min-h-[80vh]"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div 
                  key={i}
                  className={`rounded-xl ${i < 2 ? 'col-span-1 md:col-span-2 lg:col-span-6 h-64' : 'col-span-1 lg:col-span-3 h-48'} bg-white/5`}
                  animate={{ 
                    backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    backgroundPosition: ['500px 0', '-500px 0'],
                    backgroundSize: '500px 100%',
                    backgroundRepeat: 'no-repeat'
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "linear"
                  }}
                />
              ))}
            </motion.div>
          ) : (
            // Loaded dashboard
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
