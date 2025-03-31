"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/src/components/ui/card';
import { cn } from '@/lib/utils/cn';

interface ChecklistCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

export function PropertyChecklistSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [gridCols, setGridCols] = useState(4);
  
  useEffect(() => {
    const handleResize = () => {
      setGridCols(window.innerWidth >= 768 ? 4 : 2);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories: ChecklistCategory[] = [
    {
      id: 'basic-info',
      title: 'Basic Information',
      description: 'Essential details about the property that guests and staff need to know.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      items: ['Property details', 'Access information', 'House rules', 'Emergency contacts']
    },
    {
      id: 'safety',
      title: 'Safety & Security',
      description: 'Critical information to ensure guest safety and property security.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      items: ['Emergency contacts', 'Security systems', 'Fire safety', 'First aid locations']
    },
    {
      id: 'kitchen',
      title: 'Kitchen & Dining',
      description: 'Inventory and information about kitchen facilities and dining options.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      ),
      items: ['Appliance inventory', 'Dining capacity', 'Special equipment', 'Cooking essentials']
    },
    {
      id: 'bedrooms',
      title: 'Bedrooms',
      description: 'Details about sleeping arrangements and bedroom amenities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4v16"></path>
          <path d="M22 4v16"></path>
          <path d="M2 12h20"></path>
          <path d="M2 8h20"></path>
          <path d="M2 16h20"></path>
        </svg>
      ),
      items: ['Bed configurations', 'Extra bedding', 'Sleeping capacity', 'Blackout options']
    },
    {
      id: 'bathrooms',
      title: 'Bathrooms',
      description: 'Inventory and information about bathroom facilities and amenities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path>
          <line x1="12" y1="8" x2="20" y2="8"></line>
        </svg>
      ),
      items: ['Towel inventory', 'Amenities provided', 'Special features', 'Accessibility features']
    },
    {
      id: 'technology',
      title: 'Technology',
      description: 'Details about tech amenities and how to use them.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      items: ['Wi-Fi details', 'Entertainment systems', 'Smart home features', 'Charging stations']
    },
    {
      id: 'cleaning',
      title: 'Laundry & Cleaning',
      description: 'Information about cleaning supplies and laundry facilities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6l3 18h12l3-18H3zm10 13v-4m-4 4v-7m8 7V9"></path>
        </svg>
      ),
      items: ['Washer/dryer instructions', 'Cleaning supplies', 'Service schedules', 'Linen inventory']
    },
    {
      id: 'outdoor',
      title: 'Outdoor Spaces',
      description: 'Details about outdoor areas and amenities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 14h.01"></path>
          <path d="M7 7h.01"></path>
          <path d="M7 14h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M12 7h.01"></path>
          <path d="M17 7h.01"></path>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        </svg>
      ),
      items: ['Furniture inventory', 'Maintenance needs', 'Seasonal items', 'BBQ/cooking facilities']
    },
    {
      id: 'building',
      title: 'Building Amenities',
      description: 'Information about shared facilities in the building.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      items: ['Access details', 'Rules and hours', 'Contact information', 'Reservation procedures']
    },
    {
      id: 'hvac',
      title: 'HVAC & Utilities',
      description: 'Information about heating, cooling, and utility systems.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
          <path d="M12 7v-4"></path>
          <path d="M12 21v-4"></path>
          <path d="M7 12h-4"></path>
          <path d="M21 12h-4"></path>
        </svg>
      ),
      items: ['Thermostat instructions', 'Utility contacts', 'Seasonal settings', 'Energy-saving tips']
    },
    {
      id: 'local',
      title: 'Local Information',
      description: 'Details about the neighborhood and local services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      items: ['Recommendations', 'Emergency services', 'Transportation options', 'Local attractions']
    },
    {
      id: 'luxury',
      title: 'Luxury Amenities',
      description: 'Information about premium features and services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21l2.3-7-6-4.6h7.6z"></path>
        </svg>
      ),
      items: ['Special features', 'Operating instructions', 'Maintenance contacts', 'Concierge services']
    },
    {
      id: 'accessibility',
      title: 'Accessibility',
      description: 'Information about accessible features and accommodations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>
      ),
      items: ['Features available', 'Limitations', 'Special equipment', 'Nearby accessible services']
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      description: 'Information about eco-friendly features and practices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20"></path>
          <path d="M12 2v20"></path>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      items: ['Energy features', 'Recycling systems', 'Conservation tips', 'Sustainable amenities']
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      description: 'Information about property maintenance and common issues.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      items: ['Common issues', 'Vendor contacts', 'Maintenance history', 'Troubleshooting guides']
    },
    {
      id: 'administrative',
      title: 'Administrative',
      description: 'Legal and administrative information about the property.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      items: ['Legal documents', 'Insurance information', 'Property performance', 'Ownership details']
    }
  ];

  return (
    <section id="checklist" className="py-20 px-4 bg-gradient-to-br from-[#0f0a1e]/80 to-[#1a1035]/80">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Intelligent Property Database</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            At the core of HostScale is a comprehensive property information system with 16 detailed categories.
            This structured data powers everything from AI responses to operational workflows, ensuring consistency and excellence at scale.
          </p>
        </div>

        <div className="relative">
          {/* Central circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center z-10">
            <div className="text-center">
              <span className="text-white font-bold text-sm">Property<br />Database</span>
            </div>
          </div>
          
          {/* Categories grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-0">
            {categories.map((category, index) => {
              // Calculate position for connection line
              const row = Math.floor(index / gridCols);
              const col = index % gridCols;
              
              // Center point of the grid
              const centerRow = Math.floor(categories.length / gridCols / 2);
              const centerCol = (gridCols - 1) / 2;
              
              // Direction from center
              const dirX = col - centerCol;
              const dirY = row - centerRow;
              
              return (
                <div key={category.id} className="relative">
                  <button
                    className={cn(
                      "w-full aspect-square rounded-xl backdrop-blur-sm border transition-all duration-300 flex flex-col items-center justify-center p-4 text-center",
                      activeCategory === category.id
                        ? "bg-primary/20 border-primary shadow-glow"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    )}
                    onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                  >
                    <div className="mb-3 text-white">{category.icon}</div>
                    <h3 className="font-medium text-sm md:text-base">{category.title}</h3>
                  </button>
                </div>
              );
            })}
          </div>
          
          {/* Category details */}
          {activeCategory && (
            <div className="mt-12 animate-fade-in">
              <Card variant="glassMedium" className="max-w-3xl mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      {categories.find(c => c.id === activeCategory)?.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {categories.find(c => c.id === activeCategory)?.title}
                      </h3>
                      <p className="text-white/80 mb-4">
                        {categories.find(c => c.id === activeCategory)?.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                        {categories.find(c => c.id === activeCategory)?.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
