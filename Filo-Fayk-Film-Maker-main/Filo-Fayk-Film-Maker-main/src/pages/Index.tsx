
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturedToolsSection from '@/components/FeaturedToolsSection';
import portfolioData from '@/data/portfolioData.json';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroSection personalInfo={portfolioData.personalInfo} />
        <WorkSection 
          categories={portfolioData.categories} 
          videos={portfolioData.videos} 
        />
        <TestimonialsSection />
        <FeaturedToolsSection />
        <ContactSection 
          email={portfolioData.personalInfo.email}
          socialLinks={portfolioData.personalInfo.social}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

