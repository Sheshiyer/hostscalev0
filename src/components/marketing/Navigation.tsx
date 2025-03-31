"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

interface NavigationItem {
  id: string;
  label: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

export function Navigation({ items }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(items[0]?.id || '');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      // Calculate scroll progress (0 to 100)
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
      
      // Determine active section
      items.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative flex flex-col items-center">
        {/* Progress bar */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2">
          <div 
            className="absolute top-0 left-0 right-0 bg-primary transition-all duration-300"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Navigation dots */}
        <div className="flex flex-col gap-6 items-center">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group"
            >
              <div 
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeSection === item.id 
                    ? "bg-primary scale-125" 
                    : "bg-white/30 hover:bg-white/50"
                )}
              />
              <span className="absolute right-full mr-4 whitespace-nowrap text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface/80 backdrop-blur-sm px-2 py-1 rounded">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileNavigation({ items }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
      <Button
        variant="glass"
        className="rounded-full p-3 backdrop-blur-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </Button>
      
      {isOpen && (
        <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 bg-surface/95 backdrop-blur-xl rounded-lg p-4 min-w-[200px] border border-white/10">
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-2 hover:bg-white/10 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
