
import React from 'react';
import { Copyright } from 'lucide-react';
import SocialLinks from './SocialLinks';
import portfolioData from '@/data/portfolioData.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/10 py-8">
      <div className="section-container flex flex-col items-center justify-center text-center">
        <SocialLinks 
          links={portfolioData.personalInfo.social} 
          className="mb-4" 
        />
        
        <div className="flex items-center text-muted-foreground text-sm">
          <Copyright className="mr-2 h-4 w-4" />
          <span>{new Date().getFullYear()} {portfolioData.personalInfo.name}. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
