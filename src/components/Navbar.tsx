import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Home, Briefcase, Star, Award, Mail } from 'lucide-react';

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

  const navItems = [
    { label: 'Home', icon: <Home size={18} />, section: 'home' },
    { label: 'Work', icon: <Briefcase size={18} />, section: 'work' },
    { label: 'Reviews', icon: <Star size={18} />, section: 'reviews' },
    { label: 'Featured', icon: <Award size={18} />, section: 'features' },
    { label: 'Contact', icon: <Mail size={18} />, section: 'contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/bac2036e-7771-4e8f-bf95-30b3a2f534ec.png" 
            alt="Filo Fayk Logo" 
            className="h-10 w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button 
              key={item.section}
              onClick={() => scrollToSection(item.section)} 
              className="text-white hover:text-primary transition-colors flex items-center gap-2"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
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
          {navItems.map((item) => (
            <button 
              key={item.section}
              onClick={() => scrollToSection(item.section)} 
              className="text-white py-2 hover:text-primary transition-colors text-left flex items-center gap-2"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
