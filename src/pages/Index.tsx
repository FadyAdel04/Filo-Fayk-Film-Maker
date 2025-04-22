
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import portfolioData from '@/data/portfolioData.json';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection personalInfo={portfolioData.personalInfo} />
      <WorkSection 
        categories={portfolioData.categories} 
        videos={portfolioData.videos} 
      />
      <ContactSection 
        email={portfolioData.personalInfo.email}
        socialLinks={portfolioData.personalInfo.social}
      />
    </div>
  );
};

export default Index;
