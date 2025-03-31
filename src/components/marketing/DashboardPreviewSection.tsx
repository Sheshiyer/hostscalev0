"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/lib/utils/cn';

interface DashboardTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export function DashboardPreviewSection() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const dashboardTabs: DashboardTab[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    },
    {
      id: 'properties',
      label: 'Properties',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: 'tasks',
      label: 'Tasks',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
          <path d="M12 6v6l4 2"></path>
        </svg>
      )
    },
    {
      id: 'guests',
      label: 'Guests',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10"></path>
          <path d="M18 20V4"></path>
          <path d="M6 20v-4"></path>
        </svg>
      )
    }
  ];

  // Mock data for dashboard preview
  const propertyStatuses = [
    { id: 1, name: 'Oceanview Condo', location: 'Miami Beach', status: 'Occupied', checkOut: 'Apr 5', cleanliness: 98 },
    { id: 2, name: 'Downtown Loft', location: 'San Francisco', status: 'Vacant', checkIn: 'Apr 3', cleanliness: 100 },
    { id: 3, name: 'Mountain Cabin', location: 'Aspen', status: 'Maintenance', checkIn: 'Apr 7', cleanliness: 85 },
    { id: 4, name: 'Beachfront Villa', location: 'Malibu', status: 'Occupied', checkOut: 'Apr 10', cleanliness: 95 },
    { id: 5, name: 'City Apartment', location: 'New York', status: 'Vacant', checkIn: 'Apr 2', cleanliness: 92 }
  ];

  const pendingTasks = [
    { id: 1, property: 'Mountain Cabin', task: 'Fix broken shower head', priority: 'High', assignee: 'Maintenance Team' },
    { id: 2, property: 'Oceanview Condo', task: 'Replace air filter', priority: 'Medium', assignee: 'John D.' },
    { id: 3, property: 'Downtown Loft', task: 'Restock kitchen supplies', priority: 'Low', assignee: 'Inventory Team' }
  ];

  const recentMessages = [
    { id: 1, guest: 'Sarah M.', property: 'Beachfront Villa', message: 'Is early check-in possible tomorrow?', time: '10m ago' },
    { id: 2, guest: 'David L.', property: 'City Apartment', message: 'The WiFi password isn\'t working.', time: '25m ago' },
    { id: 3, guest: 'Emma W.', property: 'Oceanview Condo', message: 'Thanks for the restaurant recommendations!', time: '1h ago' }
  ];

  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Dashboard Experience Preview</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience your entire property empire at a glance with our intuitive dashboard.
            Monitor property status, manage tasks, and respond to guests from a single unified interface.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard mockup */}
          <div className="rounded-xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl">
            {/* Dashboard header */}
            <div className="bg-white/10 backdrop-blur-md p-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/hostscalelogo.png" 
                  alt="HostScale Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="flex items-center gap-4">
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </button>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-medium">AR</span>
                </div>
              </div>
            </div>
            
            {/* Dashboard tabs */}
            <div className="flex border-b border-white/10">
              {dashboardTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors",
                    activeTab === tab.id
                      ? "border-b-2 border-primary text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Dashboard content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Stats row */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card variant="glassMedium">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-white/60">Total Properties</p>
                            <p className="text-2xl font-bold">42</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center text-xs text-green-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                          <span className="ml-1">+3 this month</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card variant="glassMedium">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-white/60">Occupancy Rate</p>
                            <p className="text-2xl font-bold">87%</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20V10"></path>
                              <path d="M18 20V4"></path>
                              <path d="M6 20v-4"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center text-xs text-green-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                          <span className="ml-1">+5% from last month</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card variant="glassMedium">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-white/60">Pending Tasks</p>
                            <p className="text-2xl font-bold">12</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center text-xs text-red-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                          <span className="ml-1">3 high priority</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card variant="glassMedium">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-white/60">Guest Messages</p>
                            <p className="text-2xl font-bold">8</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center text-xs text-blue-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                          <span className="ml-1">5 auto-resolved</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Property status table */}
                  <Card variant="glassMedium">
                    <CardHeader className="p-4 border-b border-white/10">
                      <CardTitle className="text-lg">Property Status</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-white/10">
                              <th className="text-left p-4 text-sm font-medium text-white/60">Property</th>
                              <th className="text-left p-4 text-sm font-medium text-white/60">Location</th>
                              <th className="text-left p-4 text-sm font-medium text-white/60">Status</th>
                              <th className="text-left p-4 text-sm font-medium text-white/60">Next Check-in/out</th>
                              <th className="text-left p-4 text-sm font-medium text-white/60">Cleanliness</th>
                            </tr>
                          </thead>
                          <tbody>
                            {propertyStatuses.map((property) => (
                              <tr key={property.id} className="border-b border-white/5 hover:bg-white/5">
                                <td className="p-4 text-sm">{property.name}</td>
                                <td className="p-4 text-sm">{property.location}</td>
                                <td className="p-4 text-sm">
                                  <span className={cn(
                                    "px-2 py-1 rounded-full text-xs",
                                    property.status === 'Occupied' && "bg-green-500/20 text-green-300",
                                    property.status === 'Vacant' && "bg-blue-500/20 text-blue-300",
                                    property.status === 'Maintenance' && "bg-yellow-500/20 text-yellow-300"
                                  )}>
                                    {property.status}
                                  </span>
                                </td>
                                <td className="p-4 text-sm">
                                  {property.checkOut ? `Check-out: ${property.checkOut}` : `Check-in: ${property.checkIn}`}
                                </td>
                                <td className="p-4 text-sm">
                                  <div className="flex items-center gap-2">
                                    <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                                      <div 
                                        className={cn(
                                          "h-full rounded-full",
                                          property.cleanliness >= 95 ? "bg-green-500" :
                                          property.cleanliness >= 90 ? "bg-blue-500" :
                                          "bg-yellow-500"
                                        )}
                                        style={{ width: `${property.cleanliness}%` }}
                                      ></div>
                                    </div>
                                    <span className="text-xs">{property.cleanliness}%</span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Tasks and messages */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pending tasks */}
                    <Card variant="glassMedium">
                      <CardHeader className="p-4 border-b border-white/10">
                        <CardTitle className="text-lg">Pending Tasks</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          {pendingTasks.map((task) => (
                            <div key={task.id} className="p-3 rounded-lg bg-white/5 border border-white/10">
                              <div className="flex justify-between">
                                <span className="text-sm font-medium">{task.task}</span>
                                <span className={cn(
                                  "text-xs px-2 py-0.5 rounded-full",
                                  task.priority === 'High' && "bg-red-500/20 text-red-300",
                                  task.priority === 'Medium' && "bg-yellow-500/20 text-yellow-300",
                                  task.priority === 'Low' && "bg-blue-500/20 text-blue-300"
                                )}>
                                  {task.priority}
                                </span>
                              </div>
                              <div className="flex justify-between mt-2 text-xs text-white/60">
                                <span>{task.property}</span>
                                <span>{task.assignee}</span>
                              </div>
                            </div>
                          ))}
                          <Button variant="glass" size="sm" className="w-full">View All Tasks</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Recent messages */}
                    <Card variant="glassMedium">
                      <CardHeader className="p-4 border-b border-white/10">
                        <CardTitle className="text-lg">Recent Messages</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          {recentMessages.map((message) => (
                            <div key={message.id} className="p-3 rounded-lg bg-white/5 border border-white/10">
                              <div className="flex justify-between">
                                <span className="text-sm font-medium">{message.guest}</span>
                                <span className="text-xs text-white/60">{message.time}</span>
                              </div>
                              <p className="text-sm mt-1">{message.message}</p>
                              <div className="mt-2 text-xs text-white/60">
                                <span>{message.property}</span>
                              </div>
                            </div>
                          ))}
                          <Button variant="glass" size="sm" className="w-full">View All Messages</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
              
              {activeTab !== 'overview' && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <p className="text-white/60 mb-2">This is a preview of the {dashboardTabs.find(t => t.id === activeTab)?.label} tab</p>
                    <Button variant="glass">Explore in Demo</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white/60 mb-4">Experience the full interactive dashboard during your personalized demo</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">Schedule Demo</Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <a href="/dashboard">View Dashboard</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
