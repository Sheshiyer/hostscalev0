"use client";

import { motion } from 'framer-motion';
import { BentoPanel } from '@/src/components/bento/grid';
import { Button } from '@/src/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1]
    }
  })
};

interface Review {
  id: number;
  guest: string;
  property: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  responded: boolean;
}

// Sample review data
const reviews: Review[] = [
  { 
    id: 1, 
    guest: 'Sarah Johnson', 
    property: 'Phuket Beachfront Villa', 
    rating: 5, 
    comment: 'Absolutely stunning property with amazing views. The staff was incredibly attentive and the amenities were top-notch. Will definitely be back!',
    date: '2025-03-28',
    avatar: '👩🏼',
    responded: true
  },
  { 
    id: 2, 
    guest: 'Michael Chen', 
    property: 'Chiang Mai Riverside Resort', 
    rating: 4, 
    comment: 'Beautiful location and excellent service. The only minor issue was the WiFi being a bit slow in some areas of the resort.',
    date: '2025-03-25',
    avatar: '👨🏻',
    responded: false
  },
  { 
    id: 3, 
    guest: 'Emma Wilson', 
    property: 'Sukhumvit Residence', 
    rating: 5, 
    comment: 'Perfect location in Bangkok, close to everything. The apartment was clean, modern and had all the amenities I needed for my stay.',
    date: '2025-03-22',
    avatar: '👩🏻',
    responded: true
  },
  { 
    id: 4, 
    guest: 'David Thompson', 
    property: 'Koh Samui Paradise', 
    rating: 3, 
    comment: 'The beach and pool were amazing, but there were some maintenance issues in the bathroom that should be addressed.',
    date: '2025-03-20',
    avatar: '👨🏼',
    responded: false
  },
  { 
    id: 5, 
    guest: 'Akira Tanaka', 
    property: 'Silom Suites', 
    rating: 5, 
    comment: 'Excellent accommodation in the heart of Bangkok. Very clean and the staff was extremely helpful with all my requests.',
    date: '2025-03-18',
    avatar: '👨🏻',
    responded: true
  }
];

export function GuestFeedbackPanel() {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Generate star rating display
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill={i < rating ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={i < rating ? 'text-yellow-400' : 'text-gray-400'}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <motion.div 
      custom={2} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible"
      className="col-span-1 md:col-span-1 lg:col-span-3 row-span-2"
    >
      <BentoPanel 
        variant="glassMedium" 
        hover="lift" 
        expandable={true}
        className="h-full"
      >
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Guest Reviews</CardTitle>
          <motion.div 
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 207, 253, 0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </motion.div>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <p>Monitor and respond to guest feedback</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-white/70">Overall:</span>
              <div className="flex">
                {renderStars(4)}
              </div>
              <span className="text-white/70">4.4/5</span>
            </div>
          </div>
          <div className="space-y-3 flex-grow overflow-auto max-h-[400px] pr-2">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                className="bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 15px rgba(0, 207, 253, 0.3)'
                }}
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg mr-3">
                    {review.avatar}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{review.guest}</h3>
                      <span className="text-xs text-white/60">{formatDate(review.date)}</span>
                    </div>
                    <p className="text-sm text-white/70">{review.property}</p>
                    <div className="mt-1 mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-sm text-white/80 mb-2">{review.comment}</p>
                    <div className="flex justify-between items-center">
                      {review.responded ? (
                        <span className="text-xs text-green-300">✓ Responded</span>
                      ) : (
                        <Button variant="glass" size="sm" className="h-7 text-xs">Respond</Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </BentoPanel>
    </motion.div>
  );
}
