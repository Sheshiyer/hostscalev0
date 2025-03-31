import React from 'react';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Branding */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#0f0a1e] to-[#1a1035] p-8 md:p-12 flex flex-col justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold text-white">HostScale</Link>
          <h2 className="mt-12 text-3xl md:text-4xl font-bold text-white">
            Scale Your Property Empire
          </h2>
          <p className="mt-4 text-white/70 max-w-md">
            From 60+ to 150+ properties without the chaos. A transformative property management platform built for scale.
          </p>
        </div>
        
        <div className="hidden md:block">
          <div className="glass p-6 rounded-lg max-w-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                <span className="text-sm font-medium">AC</span>
              </div>
              <div>
                <h4 className="font-medium">Alex Chen</h4>
                <p className="text-sm text-white/70">Property Portfolio Owner</p>
              </div>
            </div>
            <p className="text-white/80 italic">
              "HostScale has transformed how we manage our 60+ properties. We've increased efficiency by 40% and guest satisfaction scores are at an all-time high."
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Side - Auth Form */}
      <div className="w-full md:w-1/2 bg-[#0a0718] p-8 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
