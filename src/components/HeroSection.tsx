
import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80')] 
          bg-cover bg-center"
          style={{ filter: 'brightness(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-agraharam-cream via-transparent to-transparent opacity-90" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className={cn(
            "inline-block py-1 px-3 mb-6 rounded-full",
            "bg-agraharam-sandalwood/30 text-agraharam-forest",
            "border border-agraharam-forest/20",
            "animate-fade-in"
          )}>
            <span className="text-sm font-medium tracking-wide">Return to Sacred Living</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-agraharam-forest animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A Spiritual Settlement for the Modern Era
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-foreground/90 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            A self-sustaining Agraharam rooted in dharma, nature, and community — where tradition meets timeless design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#reserve" 
              className={cn(
                "inline-flex items-center justify-center rounded-md",
                "bg-agraharam-terracotta px-6 py-3",
                "text-base font-medium text-white",
                "hover:bg-agraharam-terracotta/90 transition-colors",
                "ripple-effect"
              )}
            >
              Reserve Your Plot
            </a>
            
            <a 
              href="#download" 
              className={cn(
                "inline-flex items-center justify-center rounded-md",
                "border border-agraharam-forest/30 bg-white/80 backdrop-blur-sm",
                "px-6 py-3 text-base font-medium text-agraharam-forest",
                "hover:bg-white/90 hover:border-agraharam-forest/50 transition-colors"
              )}
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Brochure
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#vision" className="flex flex-col items-center text-agraharam-forest/80 hover:text-agraharam-forest transition-colors">
          <span className="text-sm mb-2">Discover More</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
