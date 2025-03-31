"use client";

import React from 'react';
import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
}

export function BentoGrid({
  children,
  className,
  gap = 'md',
  ...props
}: BentoGridProps) {
  const gapClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  }[gap];

  return (
    <div
      className={cn(
        'grid grid-cols-12 w-full mx-auto',
        gapClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  variant?: 'glass' | 'glassMedium' | 'glassHeavy';
  hover?: 'none' | 'lift' | 'glow';
  expandable?: boolean;
  responsiveHeight?: 'auto' | 'full' | 'sm' | 'md' | 'lg';
}

export function BentoPanel({
  children,
  className,
  colSpan = 3,
  rowSpan = 1,
  variant = 'glass',
  hover = 'lift',
  expandable = true,
  responsiveHeight = 'auto',
  ...props
}: BentoPanelProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const variantClass = {
    glass: 'backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/10',
    glassMedium: 'backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/8 border border-white/15',
    glassHeavy: 'backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20',
  }[variant];

  const hoverClass = {
    none: '',
    lift: 'transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg',
    glow: 'transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,207,253,0.6)]',
  }[hover];

  const handleExpand = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
  };

  if (isExpanded) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={handleExpand}
      >
        <div
          className={cn(
            'w-[90vw] h-[90vh] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,207,253,0.4)]',
            variantClass
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          <div className="p-6 h-full overflow-auto">
            {children}
          </div>
        </div>
      </div>
    );
  }

  // We don't use simple string interpolation for column spans anymore
  // as it doesn't work well with responsive designs
  const colSpanClass = colSpan > 12 ? 'col-span-12' : `col-span-${colSpan}`;
  
  // Row spans
  const rowSpanClass = `row-span-${rowSpan}`;
  
  // Height classes based on responsiveHeight prop
  const heightClass = {
    'auto': 'h-auto',
    'full': 'h-full',
    'sm': 'h-40 sm:h-48 md:h-56 lg:h-64',
    'md': 'h-48 sm:h-56 md:h-64 lg:h-72',
    'lg': 'h-56 sm:h-64 md:h-72 lg:h-80',
  }[responsiveHeight];

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden mb-4 w-full',
        heightClass,
        colSpanClass,
        rowSpanClass,
        variantClass,
        hoverClass,
        expandable && 'cursor-pointer',
        isHovered && 'shadow-[0_0_20px_rgba(0,207,253,0.4)]',
        className
      )}
      onClick={handleExpand}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="p-3 sm:p-4 h-full flex flex-col relative overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
      >
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {children}
      </div>
    </div>
  );
}
