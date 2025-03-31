import { HeroSection } from '@/src/components/marketing/HeroSection';
import { Navigation, MobileNavigation } from '@/src/components/marketing/Navigation';
import { ProblemSection } from '@/src/components/marketing/ProblemSection';
import { SolutionSection } from '@/src/components/marketing/SolutionSection';
import { PropertyChecklistSection } from '@/src/components/marketing/PropertyChecklistSection';
import { DashboardPreviewSection } from '@/src/components/marketing/DashboardPreviewSection';
import { TimelineSection } from '@/src/components/marketing/TimelineSection';
import { CTASection } from '@/src/components/marketing/CTASection';
import { Footer } from '@/src/components/marketing/Footer';

export default function Home() {
  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'problem', label: 'Challenge' },
    { id: 'solution', label: 'Solution' },
    { id: 'checklist', label: 'Property Database' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'timeline', label: 'Implementation' },
    { id: 'cta', label: 'Get Started' },
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navigation */}
      <Navigation items={navigationItems} />
      <MobileNavigation items={navigationItems} />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PropertyChecklistSection />
        <DashboardPreviewSection />
        <TimelineSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
