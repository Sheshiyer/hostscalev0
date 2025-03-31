"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/lib/utils/cn';

export function CTASection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    properties: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    setFormSubmitted(true);
  };

  return (
    <section id="cta" className="py-20 px-4 bg-gradient-to-br from-[#0f0a1e] to-[#1a1035]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Transform Your Property Management</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to scale your property portfolio without scaling your workload?
            Join our beta program and be among the first to experience the future of property management.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Beta program benefits */}
            <div className="lg:col-span-5">
              <Card variant="glassMedium" className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Beta Program Benefits</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Preferred Pricing</h4>
                        <p className="text-white/70">Special beta partner rates locked in for the first year.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Dedicated Implementation</h4>
                        <p className="text-white/70">Personalized onboarding and setup from our expert team.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Feature Influence</h4>
                        <p className="text-white/70">Direct input into product development and prioritization.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Priority Support</h4>
                        <p className="text-white/70">Immediate assistance when you need it most.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Early Access</h4>
                        <p className="text-white/70">First to receive new features and enhancements.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-7">
              <Card variant="glassMedium" className="h-full">
                <CardContent className="p-8">
                  {formSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                      <p className="text-white/70 mb-6">
                        We've received your information and will be in touch shortly to schedule your discovery call.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>Submit Another Request</Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-6">Schedule Your Discovery Call</h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                              placeholder="Your name"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="properties" className="block text-sm font-medium mb-2">Number of Properties</label>
                          <select
                            id="properties"
                            name="properties"
                            value={formState.properties}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                          >
                            <option value="" disabled>Select number of properties</option>
                            <option value="10-25">10-25 properties</option>
                            <option value="26-50">26-50 properties</option>
                            <option value="51-100">51-100 properties</option>
                            <option value="101-200">101-200 properties</option>
                            <option value="200+">200+ properties</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message (Optional)</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Tell us about your current challenges or questions"
                          ></textarea>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button type="submit" size="lg" className="px-8">Schedule Discovery Call</Button>
                        </div>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-16">
            <Card variant="glassMedium">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <blockquote className="text-xl italic mb-4">
                      "HostScale transformed our property management approach. We've grown from 45 to 120 properties in just 8 months, while actually reducing our operational team size. The AI guest response system alone saved us 30+ hours per week."
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <p className="font-bold">Alex Chen</p>
                        <p className="text-white/60 text-sm">CEO, Urban Stay Properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
