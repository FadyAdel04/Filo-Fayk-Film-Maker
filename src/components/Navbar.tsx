import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Home, Briefcase, Star, Award, Mail } from 'lucide-react';

import logo from '../../public/images/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'reviews', 'features', 'contact'];
      const scrollPosition = window.scrollY + 100; 

      // Update navbar background
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find the current active section
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
          }
        }
      });
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
    <>
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4",
          scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Filo Fayk Logo" 
              className="object-contain"
              width={100}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.section}
                onClick={() => scrollToSection(item.section)} 
                className={cn(
                  "transition-colors flex items-center gap-2",
                  activeSection === item.section 
                    ? "text-[#ea384c]" 
                    : "text-white hover:text-primary"
                )}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none z-50" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col p-4 space-y-4 pt-24">
          {navItems.map((item) => (
            <button 
              key={item.section}
              onClick={() => scrollToSection(item.section)} 
              className={cn(
                "py-3 px-4 transition-colors text-left flex items-center gap-4 text-lg rounded-lg",
                activeSection === item.section 
                  ? "text-[#ea384c] bg-secondary" 
                  : "text-white hover:text-primary hover:bg-secondary/50"
              )}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;