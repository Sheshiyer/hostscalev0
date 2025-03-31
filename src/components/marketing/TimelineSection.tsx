"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/lib/utils/cn';

interface TimelinePhase {
  id: string;
  title: string;
  duration: string;
  description: string;
  milestones: {
    title: string;
    description: string;
  }[];
}

export function TimelineSection() {
  const [activePhase, setActivePhase] = useState<string>('discovery');

  const phases: TimelinePhase[] = [
    {
      id: 'discovery',
      title: 'Discovery',
      duration: '2 weeks',
      description: 'We analyze your current operations, map workflows, and identify key improvement opportunities.',
      milestones: [
        {
          title: 'Initial Assessment',
          description: 'Comprehensive review of your current property management approach and technology stack.'
        },
        {
          title: 'Workflow Mapping',
          description: 'Detailed documentation of your operational processes and identification of bottlenecks.'
        },
        {
          title: 'Opportunity Analysis',
          description: 'Quantification of potential improvements and ROI calculation.'
        }
      ]
    },
    {
      id: 'foundation',
      title: 'Foundation',
      duration: '3 weeks',
      description: 'We set up the core platform, create your property database, and onboard your team.',
      milestones: [
        {
          title: 'Central Hub Setup',
          description: 'Configuration of your HostScale environment and integration with existing systems.'
        },
        {
          title: 'Property Database Creation',
          description: 'Structured import of all property data into the 16-category system.'
        },
        {
          title: 'Team Onboarding',
          description: 'User setup, role configuration, and initial training sessions.'
        }
      ]
    },
    {
      id: 'core-features',
      title: 'Core Features',
      duration: '4 weeks',
      description: 'We implement and configure the essential operational systems for your business.',
      milestones: [
        {
          title: 'Guest Experience System',
          description: 'Setup of AI response system, guest profiles, and communication workflows.'
        },
        {
          title: 'Operational Workflows',
          description: 'Configuration of task management, vendor coordination, and quality control processes.'
        },
        {
          title: 'Quality Control Framework',
          description: 'Implementation of verification systems, checklists, and performance tracking.'
        }
      ]
    },
    {
      id: 'optimization',
      title: 'Optimization',
      duration: '3 weeks',
      description: 'We refine the system based on real-world usage and optimize for your specific needs.',
      milestones: [
        {
          title: 'AI Training & Refinement',
          description: 'Fine-tuning of AI responses based on your guest interactions and property specifics.'
        },
        {
          title: 'Performance Tuning',
          description: 'Optimization of workflows based on initial usage patterns and feedback.'
        },
        {
          title: 'Analytics Configuration',
          description: 'Setup of custom dashboards and reports for your key performance indicators.'
        }
      ]
    },
    {
      id: 'expansion',
      title: 'Expansion',
      duration: '2 weeks',
      description: 'We activate advanced features and prepare your system for ongoing growth.',
      milestones: [
        {
          title: 'Marketing Hub Activation',
          description: 'Implementation of UGC collection, remarketing, and referral systems.'
        },
        {
          title: 'Scaling Support Implementation',
          description: 'Configuration of property onboarding templates and resource optimization tools.'
        },
        {
          title: 'Full System Launch',
          description: 'Transition to full operational status with ongoing support and optimization.'
        }
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-br from-[#0f0a1e]/80 to-[#1a1035]/80">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Implementation Timeline</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Your journey to operational excellence follows a structured, proven process.
            From initial assessment to full launch, we ensure a smooth transition with minimal disruption.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline visualization */}
          <div className="relative mb-12">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 h-1 top-1/2 -translate-y-1/2 bg-white/10"></div>
            
            {/* Timeline nodes */}
            <div className="relative flex justify-between">
              {phases.map((phase, index) => (
                <button
                  key={phase.id}
                  className="relative flex flex-col items-center"
                  onClick={() => setActivePhase(phase.id)}
                >
                  {/* Node */}
                  <div 
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                      activePhase === phase.id
                        ? "bg-primary scale-125"
                        : "bg-white/20 hover:bg-white/30"
                    )}
                  >
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Phase title */}
                  <div className={cn(
                    "absolute top-full mt-4 text-sm font-medium transition-all duration-300",
                    activePhase === phase.id
                      ? "text-white"
                      : "text-white/60"
                  )}>
                    {phase.title}
                  </div>
                  
                  {/* Duration */}
                  <div className={cn(
                    "absolute bottom-full mb-4 text-xs transition-all duration-300",
                    activePhase === phase.id
                      ? "text-primary"
                      : "text-white/40"
                  )}>
                    {phase.duration}
                  </div>
                  
                  {/* Progress line */}
                  {index < phases.length - 1 && (
                    <div className={cn(
                      "absolute h-1 top-1/2 -translate-y-1/2 left-4 transition-all duration-500",
                      activePhase === phase.id || activePhase === phases[index + 1].id || 
                      phases.findIndex(p => p.id === activePhase) > index
                        ? "bg-primary"
                        : "bg-white/10"
                    )}
                    style={{ width: 'calc(100% - 2rem)' }}
                    ></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Phase details */}
          <Card variant="glassMedium" className="mb-12">
            <CardHeader className="p-6 border-b border-white/10">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">
                  Phase {phases.findIndex(p => p.id === activePhase) + 1}: {phases.find(p => p.id === activePhase)?.title}
                </CardTitle>
                <span className="text-sm text-white/60">
                  {phases.find(p => p.id === activePhase)?.duration}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-white/80 mb-8">
                {phases.find(p => p.id === activePhase)?.description}
              </p>
              
              <div className="space-y-6">
                {phases.find(p => p.id === activePhase)?.milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      {index < (phases.find(p => p.id === activePhase)?.milestones.length || 0) - 1 && (
                        <div className="w-0.5 h-full bg-white/10 my-1"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{milestone.title}</h4>
                      <p className="text-sm text-white/70">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Implementation options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="glassMedium" hover="lift">
              <CardHeader className="p-6 border-b border-white/10">
                <CardTitle>Strategic Partnership</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-white/80 mb-6">
                  A comprehensive monthly subscription that includes:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Full platform access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Dedicated implementation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Ongoing optimization and strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Priority feature development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Regular business reviews</span>
                  </li>
                </ul>
                <Button className="w-full">Request Pricing</Button>
              </CardContent>
            </Card>
            
            <Card variant="glassMedium" hover="lift">
              <CardHeader className="p-6 border-b border-white/10">
                <CardTitle>Standalone Solution</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-white/80 mb-6">
                  A one-time implementation with:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Core platform functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Google Sheets integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Initial setup and configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Basic training and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Standard support package</span>
                  </li>
                </ul>
                <Button className="w-full">Request Pricing</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
