// src/app/[locale]/page.tsx
'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/sections/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage({ params }: { params: { locale: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const locale = params.locale || 'en';

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <Navbar currentLocale={locale} />
          
          <main className="bg-gradient-ocean">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <PortfolioSection />
            <ContactSection />
          </main>
        </>
      )}
    </>
  );
}
