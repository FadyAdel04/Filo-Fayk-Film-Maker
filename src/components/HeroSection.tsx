
import React from 'react';
import SocialLinks from './SocialLinks';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  personalInfo: {
    name: string;
    title: string;
    description: string;
    profileImage: string;
    social: Array<{
      platform: string;
      url: string;
    }>;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ personalInfo }) => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 overflow-hidden">
      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content - Left Side */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I'm <span className="text-primary">{personalInfo.name}</span> <br />
            <span className="text-white">{personalInfo.title}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            {personalInfo.description}
          </p>
          <SocialLinks links={personalInfo.social} />
          <button 
            onClick={scrollToWork}
            className="mt-8 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            View My Work
            <ArrowDown size={18} />
          </button>
        </div>

        {/* Image - Right Side */}
        <div className="flex justify-center relative">
          <div className="relative z-10 rounded-xl overflow-hidden w-full max-w-md shadow-xl animate-fade-in">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name} 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
          <ArrowDown size={24} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
