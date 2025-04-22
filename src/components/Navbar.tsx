
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold font-montserrat text-white">VideoPulse</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('work')} 
            className="text-white hover:text-primary transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden fixed left-0 right-0 bg-background/95 backdrop-blur-sm transition-all duration-300 shadow-md",
        isOpen ? "top-16 opacity-100" : "-top-full opacity-0"
      )}>
        <div className="flex flex-col p-4 space-y-4">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-white py-2 hover:text-primary transition-colors text-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('work')} 
            className="text-white py-2 hover:text-primary transition-colors text-left"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white py-2 hover:text-primary transition-colors text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
