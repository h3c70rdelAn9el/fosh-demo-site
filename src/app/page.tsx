import { AudienceSplit } from '@/components/AudienceSplit';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { SocialProof } from '@/components/SocialProof';
import { VisualBreak } from '@/components/VisualBreak';
import { WhatIsFosh } from '@/components/WhatIsFosh';
import { WhyFosh } from '@/components/WhyFosh';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Logo is now overlaid inside <Hero /> */}
      <Hero />
      <main>
        <WhatIsFosh />
        <VisualBreak />
        <HowItWorks />
        <WhyFosh />
        <AudienceSplit />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
