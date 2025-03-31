import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-[#0f0a1e]/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/hostscalelogo.png" 
                alt="HostScale Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/60 mb-4">
              Scale your property empire without scaling your workload.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Beta Program</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Integrations</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Guides</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Community</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HostScale. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
