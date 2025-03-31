"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/lib/utils/cn';

interface SolutionFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  subFeatures: {
    title: string;
    description: string;
  }[];
}

export function SolutionSection() {
  const [activeFeature, setActiveFeature] = useState<string>('ai-guest');
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile for responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const solutionFeatures: SolutionFeature[] = [
    {
      id: 'ai-guest',
      title: 'AI Guest Experience',
      description: 'Intelligent automation that delivers exceptional guest experiences while reducing your workload.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      subFeatures: [
        {
          title: 'Instant FAQ Responses',
          description: 'AI automatically answers common questions about check-in, amenities, and local recommendations.'
        },
        {
          title: 'Smart Escalation',
          description: 'Critical issues are intelligently routed to the right team member for rapid resolution.'
        },
        {
          title: 'Personalization',
          description: 'Guest preferences are tracked across stays for tailored experiences and recommendations.'
        }
      ]
    },
    {
      id: 'operational-workflows',
      title: 'Operational Workflows',
      description: 'Streamlined processes that ensure consistent quality and efficient management across your portfolio.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      subFeatures: [
        {
          title: 'Automated Scheduling',
          description: 'Cleaning and maintenance tasks are automatically created and assigned based on bookings.'
        },
        {
          title: 'Vendor Management',
          description: 'Centralized system for tracking service providers, performance, and payment history.'
        },
        {
          title: 'Task Tracking',
          description: 'Real-time visibility into all operational activities with photo verification of completion.'
        }
      ]
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      description: 'Comprehensive systems to maintain consistent standards across your entire property portfolio.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      subFeatures: [
        {
          title: 'Visual Verification',
          description: 'AI-powered analysis of cleaning and maintenance photos ensures quality standards are met.'
        },
        {
          title: 'Standardization',
          description: 'Property-specific checklists ensure consistent guest experiences across all locations.'
        },
        {
          title: 'Performance Analytics',
          description: 'Track quality metrics over time to identify trends and improvement opportunities.'
        }
      ]
    },
    {
      id: 'marketing-performance',
      title: 'Marketing Performance',
      description: 'Integrated tools to optimize your marketing efforts and maximize revenue across your portfolio.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20v-6M6 20V10M18 20V4"></path>
        </svg>
      ),
      subFeatures: [
        {
          title: 'UGC Generation',
          description: 'Automated systems to collect and leverage guest photos and testimonials for marketing.'
        },
        {
          title: 'Remarketing',
          description: 'Targeted campaigns to previous guests based on stay history and preferences.'
        },
        {
          title: 'Referral System',
          description: 'Structured program to incentivize and track guest and partner referrals.'
        }
      ]
    }
  ];

  // Mobile layout - render as cards with expandable sections
  const renderMobileLayout = () => (
    <div className="space-y-8">
      {/* Feature selector tabs */}
      <div className="flex overflow-x-auto pb-2 mb-4 gap-2 scrollbar-hide">
        {solutionFeatures.map((feature) => (
          <button
            key={feature.id}
            className={cn(
              "flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap",
              activeFeature === feature.id
                ? "bg-primary/20 border-primary text-white"
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10",
              "border"
            )}
            onClick={() => setActiveFeature(feature.id)}
          >
            <div className="flex items-center">
              <span className="mr-2">{feature.icon}</span>
              <span>{feature.title}</span>
            </div>
          </button>
        ))}
      </div>
      
      {/* Active feature card */}
      <Card variant="glassMedium" className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="mr-2 text-primary">
              {solutionFeatures.find(f => f.id === activeFeature)?.icon}
            </span>
            {solutionFeatures.find(f => f.id === activeFeature)?.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-white/80">
            {solutionFeatures.find(f => f.id === activeFeature)?.description}
          </p>
          
          <div className="space-y-4">
            {solutionFeatures.find(f => f.id === activeFeature)?.subFeatures.map((subFeature, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                <h4 className="font-semibold mb-1">{subFeature.title}</h4>
                <p className="text-sm text-white/70">{subFeature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-end">
            <Button variant="glass">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Desktop layout - interactive visualization with improved sub-feature positioning
  const renderDesktopLayout = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Solution visualization */}
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Background elements for visual interest */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/5 opacity-30"></div>
          </div>
          
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center z-30 shadow-glow">
            <div className="text-center">
              <div className="flex justify-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <span className="text-white font-bold text-sm">HostScale<br />Central Hub</span>
            </div>
          </div>
          
          {/* Feature nodes */}
          {solutionFeatures.map((feature, index) => {
            const angle = (index * (360 / solutionFeatures.length) * Math.PI) / 180;
            const radius = 180; // Distance from center
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            // Calculate positions for sub-features based on the quadrant
            const getSubFeaturePositions = (subIndex: number) => {
              // Get the angle in degrees for easier quadrant calculation
              const angleDegrees = (angle * 180 / Math.PI) % 360;
              
              // Determine which quadrant the main feature is in
              // 0: top-right (0-90), 1: bottom-right (90-180), 
              // 2: bottom-left (180-270), 3: top-left (270-360)
              const quadrant = Math.floor(angleDegrees / 90);
              
              // Calculate the spread factor based on the number of sub-features
              const spreadFactor = 0.5; // Larger value = more spread
              
              // Adjust sub-feature positions based on quadrant to prevent overlap
              let subAngle;
              let subRadius = radius + 120;
              
              // For top and bottom positions, we need to spread horizontally
              // For left and right positions, we can spread more vertically
              if (angleDegrees > 45 && angleDegrees < 135) {
                // Bottom area - spread horizontally
                subAngle = angle + (subIndex - 1) * spreadFactor - spreadFactor;
                subRadius += 20; // Push out a bit more
              } else if (angleDegrees > 225 && angleDegrees < 315) {
                // Top area - spread horizontally
                subAngle = angle + (subIndex - 1) * spreadFactor - spreadFactor;
                subRadius += 20; // Push out a bit more
              } else if (angleDegrees >= 135 && angleDegrees <= 225) {
                // Left area - spread vertically
                subAngle = angle + (subIndex - 1) * 0.3 - 0.3;
              } else {
                // Right area - spread vertically
                subAngle = angle + (subIndex - 1) * 0.3 - 0.3;
              }
              
              const subX = subRadius * Math.cos(subAngle);
              const subY = subRadius * Math.sin(subAngle);
              
              return { subAngle, subX, subY };
            };
            
            return (
              <React.Fragment key={feature.id}>
                {/* Connection line - render BEFORE the button for proper z-index */}
                <div 
                  className={cn(
                    "absolute top-1/2 left-1/2 h-0.5 origin-left transition-colors duration-300 z-10",
                    activeFeature === feature.id ? "bg-primary" : "bg-white/20"
                  )}
                  style={{
                    width: radius,
                    transform: `rotate(${angle}rad)`
                  }}
                />
                
                {/* Feature node */}
                <button
                  className={cn(
                    "absolute w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 z-20",
                    activeFeature === feature.id
                      ? "bg-primary/30 border-primary scale-110 shadow-glow"
                      : "bg-white/10 border-white/20 hover:bg-white/20",
                    "border backdrop-blur-sm text-center p-1"
                  )}
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setActiveFeature(feature.id)}
                  aria-label={feature.title}
                >
                  <span className="text-white mb-1">{feature.icon}</span>
                  <span className="text-white text-xs font-medium leading-tight">{feature.title.split(' ')[0]}</span>
                </button>
                
                {/* Sub-features (only for active feature) */}
                {activeFeature === feature.id && (
                  <div className="absolute inset-0 pointer-events-none z-10">
                    {feature.subFeatures.map((subFeature, subIndex) => {
                      const { subAngle, subX, subY } = getSubFeaturePositions(subIndex);
                      
                      return (
                        <div
                          key={`${feature.id}-${subIndex}`}
                          className="absolute flex items-center justify-center animate-fade-in"
                          style={{
                            top: `calc(50% + ${subY}px)`,
                            left: `calc(50% + ${subX}px)`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 15
                          }}
                        >
                          {/* Sub-connection line */}
                          <div 
                            className="absolute h-0.5 bg-primary/50 origin-center"
                            style={{
                              width: '60px',
                              top: '50%',
                              left: '50%',
                              transform: `translate(-50%, -50%) rotate(${Math.atan2(y - subY, x - subX) + Math.PI}rad)`
                            }}
                          />
                          
                          {/* Sub-feature card */}
                          <div 
                            className="bg-white/10 backdrop-blur-sm border border-primary/20 rounded-lg p-3 text-center shadow-glow w-32"
                            style={{ zIndex: 20 }}
                          >
                            <p className="text-xs font-medium text-white">{subFeature.title}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      
      {/* Feature details */}
      <div className="lg:col-span-5 order-1 lg:order-2">
        <Card variant="glassMedium" className="h-full" hover="lift">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2 text-primary">
                {solutionFeatures.find(f => f.id === activeFeature)?.icon}
              </span>
              {solutionFeatures.find(f => f.id === activeFeature)?.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-white/80">
              {solutionFeatures.find(f => f.id === activeFeature)?.description}
            </p>
            
            <div className="space-y-4">
              {solutionFeatures.find(f => f.id === activeFeature)?.subFeatures.map((subFeature, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="font-semibold mb-1">{subFeature.title}</h4>
                  <p className="text-sm text-white/70">{subFeature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-end">
              <Button variant="glass">Learn More</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <section id="solution" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Solution: HostScale</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            HostScale unifies your entire operation with an AI-powered central intelligence system 
            that scales effortlessly with your business.
          </p>
        </div>

        {isMobile ? renderMobileLayout() : renderDesktopLayout()}
      </div>
    </section>
  );
}
