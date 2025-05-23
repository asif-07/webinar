
import { HeroSection } from '@/components/HeroSection';
import { WhyAttendSection } from '@/components/WhyAttendSection';
import { WhatYoullLearnSection } from '@/components/WhatYoullLearnSection';
import { ExpertsSection } from '@/components/ExpertsSection';
import { TargetAudienceSection } from '@/components/TargetAudienceSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { FloatingSupport } from '@/components/FloatingSupport';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <HeroSection />
      <WhyAttendSection />
      <WhatYoullLearnSection />
      <ExpertsSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <FloatingSupport />
    </div>
  );
};

export default Index;
