
import React, { useState, useEffect } from 'react';
import { Flower } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6",
        scrolled 
          ? "bg-agraharam-cream/90 backdrop-blur-md py-2 shadow-sm" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <Flower size={28} className="text-agraharam-terracotta" />
          <span className="font-playfair text-lg md:text-xl font-semibold text-agraharam-terracotta">Sacred Harmony Haven</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#vision" className="text-foreground hover:text-agraharam-terracotta transition-colors">Vision</a>
          <a href="#layout" className="text-foreground hover:text-agraharam-terracotta transition-colors">Layout</a>
          <a href="#nature" className="text-foreground hover:text-agraharam-terracotta transition-colors">Nature</a>
          <a href="#community" className="text-foreground hover:text-agraharam-terracotta transition-colors">Community</a>
          <a href="#contact" className="text-foreground hover:text-agraharam-terracotta transition-colors">Contact</a>
        </nav>
        
        <a 
          href="#reserve" 
          className="hidden md:inline-flex items-center justify-center rounded-md bg-agraharam-terracotta px-4 py-2 text-sm font-medium text-white hover:bg-agraharam-terracotta/90 transition-colors"
        >
          Reserve Your Plot
        </a>
        
        <button className="md:hidden text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
