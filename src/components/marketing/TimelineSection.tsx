"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const nodeVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const lineVariants = {
    hidden: { 
      width: 0,
      opacity: 0
    },
    visible: { 
      width: "calc(100% - 3rem)",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const milestoneVariants = {
    hidden: { 
      opacity: 0,
      x: -10
    },
    visible: (i: number) => ({ 
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-br from-[#0f0a1e]/80 to-[#1a1035]/80">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Implementation Timeline</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Your journey to operational excellence follows a structured, proven process.
            From initial assessment to full launch, we ensure a smooth transition with minimal disruption.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline visualization - Mobile (vertical) and Desktop (horizontal) */}
          <div className="relative mb-16">
            {/* Desktop Timeline (horizontal) - Hidden on mobile */}
            <div className="hidden md:block relative py-16">
              {/* Timeline line - with gradient */}
              <motion.div 
                className="absolute left-0 right-0 h-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              ></motion.div>
              
              {/* Timeline nodes */}
              <motion.div 
                className="relative flex justify-between"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {phases.map((phase, index) => (
                  <motion.button
                    key={phase.id}
                    className="relative flex flex-col items-center group"
                    onClick={() => setActivePhase(phase.id)}
                    variants={nodeVariants}
                  >
                    {/* Node */}
                    <motion.div 
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500 shadow-lg",
                        activePhase === phase.id
                          ? "bg-gradient-to-br from-primary to-secondary"
                          : "bg-white/10 group-hover:bg-white/20 border border-white/20"
                      )}
                      whileHover={{ scale: 1.1 }}
                      animate={activePhase === phase.id ? { scale: [1, 1.1, 1], boxShadow: "0 0 15px rgba(0, 207, 253, 0.5)" } : {}}
                      transition={{ duration: 0.5, repeat: activePhase === phase.id ? Infinity : 0, repeatType: "reverse" }}
                    >
                      <span className={cn(
                        "text-sm font-bold transition-all duration-300",
                        activePhase === phase.id ? "text-white" : "text-white/80"
                      )}>
                        {index + 1}
                      </span>
                    </motion.div>
                    
                    {/* Phase title */}
                    <motion.div 
                      className={cn(
                        "absolute top-full mt-6 text-sm font-medium transition-all duration-300",
                        activePhase === phase.id
                          ? "text-white"
                          : "text-white/60"
                      )}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ 
                        opacity: activePhase === phase.id || false ? 1 : 0.6,
                        y: 0
                      }}
                      whileHover={{ opacity: 1 }}
                    >
                      {phase.title}
                    </motion.div>
                    
                    {/* Duration */}
                    <motion.div 
                      className={cn(
                        "absolute bottom-full mb-6 text-xs transition-all duration-300",
                        activePhase === phase.id
                          ? "text-primary"
                          : "text-white/40"
                      )}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ 
                        opacity: activePhase === phase.id ? 1 : 0.4,
                        y: 0
                      }}
                      whileHover={{ opacity: 1 }}
                    >
                      {phase.duration}
                    </motion.div>
                    
                    {/* Progress line */}
                    {index < phases.length - 1 && (
                      <motion.div 
                        className={cn(
                          "absolute h-2 top-1/2 -translate-y-1/2 left-6 rounded-full",
                          activePhase === phase.id || activePhase === phases[index + 1].id || 
                          phases.findIndex(p => p.id === activePhase) > index
                            ? "bg-gradient-to-r from-primary to-secondary"
                            : "bg-white/10"
                        )}
                        variants={lineVariants}
                        style={{ originX: 0 }}
                      ></motion.div>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </div>
            
            {/* Mobile Timeline (vertical) - Hidden on desktop */}
            <div className="md:hidden">
              <div className="flex flex-col space-y-6 relative">
                {/* Vertical timeline line */}
                <motion.div 
                  className="absolute left-4 top-6 bottom-6 w-2 bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30 rounded-full"
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "auto", opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1 }}
                ></motion.div>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {phases.map((phase, index) => (
                    <motion.button
                      key={phase.id}
                      className={cn(
                        "flex items-center p-4 rounded-lg transition-all duration-500",
                        activePhase === phase.id
                          ? "bg-gradient-to-r from-white/10 to-white/5 border-l-2 border-primary"
                          : "bg-white/5 hover:bg-white/8"
                      )}
                      onClick={() => setActivePhase(phase.id)}
                      variants={nodeVariants}
                      whileHover={{ x: 5 }}
                    >
                      {/* Node */}
                      <motion.div 
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center mr-5 transition-all duration-500 shadow-lg",
                          activePhase === phase.id
                            ? "bg-gradient-to-br from-primary to-secondary"
                            : "bg-white/10 border border-white/20"
                        )}
                        animate={activePhase === phase.id ? { scale: [1, 1.1, 1], boxShadow: "0 0 15px rgba(0, 207, 253, 0.5)" } : {}}
                        transition={{ duration: 0.5, repeat: activePhase === phase.id ? Infinity : 0, repeatType: "reverse" }}
                      >
                        <span className={cn(
                          "text-sm font-bold",
                          activePhase === phase.id ? "text-white" : "text-white/80"
                        )}>
                          {index + 1}
                        </span>
                      </motion.div>
                      
                      <div className="flex-1 text-left">
                        {/* Phase title */}
                        <div className={cn(
                          "text-sm font-medium transition-all duration-300",
                          activePhase === phase.id
                            ? "text-white"
                            : "text-white/80"
                        )}>
                          {phase.title}
                        </div>
                        
                        {/* Duration */}
                        <div className={cn(
                          "text-xs transition-all duration-300",
                          activePhase === phase.id
                            ? "text-primary"
                            : "text-white/40"
                        )}>
                          {phase.duration}
                        </div>
                      </div>
                      
                      {/* Indicator */}
                      {activePhase === phase.id && (
                        <motion.div 
                          className="ml-2"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Phase details */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Card variant="glassMedium" className="mb-12 max-w-full overflow-hidden">
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
                <motion.p 
                  className="text-white/80 mb-8"
                  key={activePhase + "-desc"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {phases.find(p => p.id === activePhase)?.description}
                </motion.p>
                
                <motion.div 
                  className="space-y-6"
                  key={activePhase + "-milestones"}
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {phases.find(p => p.id === activePhase)?.milestones.map((milestone, index) => (
                    <motion.div 
                      key={index} 
                      className="flex gap-4"
                      custom={index}
                      variants={milestoneVariants}
                    >
                      <div className="flex flex-col items-center">
                        <motion.div 
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <span className="text-xs font-bold">{index + 1}</span>
                        </motion.div>
                        {index < (phases.find(p => p.id === activePhase)?.milestones.length || 0) - 1 && (
                          <motion.div 
                            className="w-0.5 h-full bg-gradient-to-b from-primary/20 to-white/10 my-1"
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                          ></motion.div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{milestone.title}</h4>
                        <p className="text-sm text-white/70">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Implementation options */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Full platform access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Dedicated implementation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Ongoing optimization and strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Priority feature development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
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
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Core platform functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Google Sheets integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Initial setup and configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Basic training and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center mt-0.5">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
