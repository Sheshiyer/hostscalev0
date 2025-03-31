"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/src/components/ui/card';
import { cn } from '@/lib/utils/cn';

interface ProblemItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ProblemSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile for responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const problemItems: ProblemItem[] = [
    {
      id: 'multiple-accounts',
      title: 'Multiple Airbnb Accounts',
      description: 'Managing separate logins, notifications, and dashboards across multiple platforms creates confusion and missed opportunities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: 'guest-faqs',
      title: 'Repetitive Guest FAQs',
      description: 'Answering the same questions about check-in, WiFi, and amenities consumes hours of time that could be spent on growth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      )
    },
    {
      id: 'manual-coordination',
      title: 'Manual Coordination',
      description: 'Juggling cleaners, maintenance staff, and vendors through texts and calls leads to miscommunication and errors.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 'inconsistent-experience',
      title: 'Inconsistent Experience',
      description: 'Maintaining quality standards across properties becomes increasingly difficult as your portfolio grows.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      id: 'spreadsheet-overload',
      title: 'Spreadsheet Overload',
      description: 'Tracking property details, maintenance history, and guest information across multiple spreadsheets is unsustainable.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    }
  ];

  // Mobile layout - render items as cards
  const renderMobileLayout = () => (
    <div className="space-y-6">
      {activeItem ? (
        <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
          <button 
            onClick={() => setActiveItem(null)}
            className="flex items-center text-white/70 mb-2 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to all challenges
          </button>
          
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
            {problemItems.find(item => item.id === activeItem)?.icon}
          </div>
          <h3 className="text-2xl font-bold">
            {problemItems.find(item => item.id === activeItem)?.title}
          </h3>
          <p className="text-white/80">
            {problemItems.find(item => item.id === activeItem)?.description}
          </p>
        </div>
      ) : (
        <>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm mb-8">
            <h3 className="text-2xl font-bold mb-3">The Multiplying Complexity</h3>
            <p className="text-white/80">
              Tap any challenge below to learn more about how it impacts your property management business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {problemItems.map(item => (
              <button
                key={item.id}
                className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors text-left w-full"
                onClick={() => setActiveItem(item.id)}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-white/70 line-clamp-1">{item.description}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );

  // Desktop layout - interactive visualization
  const renderDesktopLayout = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Problem visualization */}
      <div className="lg:col-span-7 relative min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Central hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center z-20">
              <span className="text-white font-bold text-center text-sm">Operational Chaos</span>
            </div>
            
            {/* Problem items */}
            {problemItems.map((item, index) => {
              // Calculate position in a circle
              const angle = (index * (360 / problemItems.length) * Math.PI) / 180;
              const radius = 150; // Distance from center
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              
              return (
                <React.Fragment key={item.id}>
                  {/* Connection line - render BEFORE the button for proper z-index */}
                  <div 
                    className={cn(
                      "absolute top-1/2 left-1/2 h-0.5 origin-left z-10 transition-colors duration-300",
                      activeItem === item.id ? "bg-primary" : "bg-white/20"
                    )}
                    style={{
                      width: radius,
                      transform: `rotate(${angle}rad)`
                    }}
                  />
                  
                  {/* Problem node */}
                  <button
                    className={cn(
                      "absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                      activeItem === item.id
                        ? "bg-primary/30 border-primary scale-110"
                        : "bg-white/10 border-white/20 hover:bg-white/20",
                      "border backdrop-blur-sm"
                    )}
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setActiveItem(item.id === activeItem ? null : item.id)}
                    aria-label={item.title}
                  >
                    <span className="text-white">{item.icon}</span>
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Problem details */}
      <div className="lg:col-span-5">
        <Card variant="glassMedium" className="h-full">
          <CardContent className="p-6">
            {activeItem ? (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  {problemItems.find(item => item.id === activeItem)?.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {problemItems.find(item => item.id === activeItem)?.title}
                </h3>
                <p className="text-white/80">
                  {problemItems.find(item => item.id === activeItem)?.description}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">The Multiplying Complexity</h3>
                <p className="text-white/80">
                  Click on any challenge to learn more about how it impacts your property management business.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-semibold">Limited Growth</h4>
                    <p className="text-sm text-white/70">Operational bottlenecks prevent scaling</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-semibold">Rising Costs</h4>
                    <p className="text-sm text-white/70">Inefficiencies increase with each property</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-semibold">Quality Issues</h4>
                    <p className="text-sm text-white/70">Inconsistent guest experiences</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="font-semibold">Team Burnout</h4>
                    <p className="text-sm text-white/70">Manual processes overwhelm staff</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <section id="problem" className="py-20 px-4 bg-gradient-to-br from-[#0f0a1e]/80 to-[#1a1035]/80">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Challenge</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Managing multiple short-term rental properties across different platforms creates exponential complexity.
            As your portfolio grows from 60+ to 150+ properties, these challenges don't just increase—they multiply.
          </p>
        </div>

        {isMobile ? renderMobileLayout() : renderDesktopLayout()}
      </div>
    </section>
  );
}
