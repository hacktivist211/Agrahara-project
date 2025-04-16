
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import ConcentricLayout from '@/components/ConcentricLayout';
import NatureSection from '@/components/NatureSection';
import CommunitySection from '@/components/CommunitySection';
import ReserveSection from '@/components/ReserveSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Ensure smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VisionSection />
      <ConcentricLayout />
      <NatureSection />
      <CommunitySection />
      <ReserveSection />
      <Footer />
    </div>
  );
};

export default Index;
