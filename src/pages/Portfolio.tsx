import { useState, useEffect } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Navigation } from '@/components/Navigation';
import { Preloader } from '@/components/Preloader';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TrustedCompaniesSection } from '@/components/sections/TrustedCompaniesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false); // Temporarily disable preloader

  useEffect(() => {
    // Prevent scrolling during preloader
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {/* Preloader - temporarily disabled */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Global Components */}
        <CustomCursor />
        <ScrollProgress />
        <Navigation />

        {/* Sections */}
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TrustedCompaniesSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;