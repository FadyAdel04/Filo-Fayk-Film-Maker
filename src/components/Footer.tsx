import React from 'react';
import { Copyright } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import portfolioData from '@/data/portfolioData.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/10 py-8">
      <div className="section-container flex flex-col items-center justify-center text-center">

        {/* Static Social Icons */}
        <div className="mb-4 flex items-center gap-4">
          <a
            href="https://www.instagram.com/f.f_filmmaker/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61554001044975"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-2xl"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex items-center text-muted-foreground text-sm">
          <Copyright className="mr-2 h-4 w-4" />
          <span>{new Date().getFullYear()} {portfolioData.personalInfo.name}. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
