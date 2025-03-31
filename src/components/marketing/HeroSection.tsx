"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 10, 30, 0) 50%), radial-gradient(circle at 80% 20%, rgba(0, 207, 253, 0.2) 0%, rgba(15, 10, 30, 0) 40%)',
          backgroundSize: '120% 120%',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Grid pattern */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Glowing orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[120px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.6 }}
      />
      
      {/* Content */}
      <motion.div 
        className="container mx-auto relative z-10 px-4 md:px-6"
        style={{ opacity, y }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/images/hostscalelogo.png" 
                alt="HostScale Logo" 
                className="h-20 w-auto"
              />
            </motion.div>
            
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-2">
                <motion.span 
                  className="block w-full h-full rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
              Property Management Platform
            </motion.div>
            
            {/* Main heading with animated gradient */}
            <motion.h1 
              ref={headingRef}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white">
                Optimize Your Property Portfolio
              </span>
            </motion.h1>
            
            {/* CTA buttons with modern styling */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg relative overflow-hidden group" 
                asChild
              >
                <Link href="/dashboard">
                  <motion.span 
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Get Started
                  </motion.span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="glass" 
                className="px-8 py-6 text-lg relative overflow-hidden group border border-white/20" 
              >
                <motion.span 
                  className="relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Book a Demo
                </motion.span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </motion.div>
            
            {/* Scroll indicator with smoother animation */}
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div 
                className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 mx-auto"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 bg-white/60 rounded-full"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
