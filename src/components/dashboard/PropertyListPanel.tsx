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

interface Property {
  id: number;
  name: string;
  location: string;
  status: string;
  revenue: string;
  occupancy: number;
}

interface PropertyListPanelProps {
  properties: Property[];
}

export function PropertyListPanel({ properties }: PropertyListPanelProps) {
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
          <CardTitle>Property Directory</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <p>Manage all your properties across Thailand</p>
            <Button variant="glass" size="sm">Add Property</Button>
          </div>
          <div className="space-y-3 flex-grow overflow-auto max-h-[400px] pr-2">
            {properties.map((property, index) => (
              <motion.div 
                key={property.id}
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
                    <h3 className="font-medium">{property.name}</h3>
                    <p className="text-sm text-white/70">{property.location}</p>
                  </div>
                  <span className={`
                    px-2 py-1 rounded text-xs font-medium
                    ${property.status === 'Occupied' ? 'bg-green-500/20 text-green-300' : 
                      property.status === 'Vacant' ? 'bg-blue-500/20 text-blue-300' : 
                      'bg-amber-500/20 text-amber-300'}
                  `}>
                    {property.status}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                  <span>Occupancy: {property.occupancy}%</span>
                  <span>Revenue: {property.revenue}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
