
import React from 'react';
import { cn } from '@/lib/utils';

const ConcentricLayout = () => {
  return (
    <section id="layout" className="py-20 md:py-24 bg-agraharam-sandalwood/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 animate-spin-slow">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#C06B4D" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#C06B4D" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#C06B4D" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="#C06B4D" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-10 h-0.5 bg-agraharam-terracotta/50 mr-3" />
            <span className="text-agraharam-terracotta font-medium">Community Design</span>
            <div className="w-10 h-0.5 bg-agraharam-terracotta/50 ml-3" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Designed Like a Mandala. Lived Like a Philosophy.
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our Agraharam follows a sacred concentric pattern, with each ring serving a specific purpose in community life.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-square rounded-full border-2 border-agraharam-terracotta/30 flex items-center justify-center p-8 md:p-12 bg-white/40 backdrop-blur-sm">
            <div className="aspect-square rounded-full border-2 border-agraharam-forest/30 flex items-center justify-center p-8 md:p-10 bg-white/40">
              <div className="aspect-square rounded-full border-2 border-agraharam-skyblue/30 flex items-center justify-center p-6 md:p-8 bg-white/40">
                <div className="aspect-square rounded-full border-2 border-agraharam-sandalwood/50 flex items-center justify-center bg-agraharam-sandalwood/20 relative overflow-hidden">
                  <div className="text-center">
                    <span className="block text-agraharam-forest font-playfair font-medium text-sm md:text-base">
                      Temple
                    </span>
                    <span className="block text-agraharam-terracotta text-xs md:text-sm mt-1">Sacred Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Labels for each ring */}
          <div className="absolute top-1/2 right-0 transform translate-x-[105%] -translate-y-1/2 bg-white p-3 rounded-lg shadow-sm border border-agraharam-sandalwood/30 max-w-[150px] md:max-w-[200px]">
            <h4 className="font-playfair text-sm md:text-base font-medium text-agraharam-terracotta">Outer Ring</h4>
            <p className="text-xs md:text-sm text-foreground/80 mt-1">Commercial spaces, markets, and wellness centers</p>
          </div>
          
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[105%] bg-white p-3 rounded-lg shadow-sm border border-agraharam-sandalwood/30 max-w-[150px] md:max-w-[200px]">
            <h4 className="font-playfair text-sm md:text-base font-medium text-agraharam-forest">Middle Ring</h4>
            <p className="text-xs md:text-sm text-foreground/80 mt-1">Private villas surrounded by gardens and walking paths</p>
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[105%] bg-white p-3 rounded-lg shadow-sm border border-agraharam-sandalwood/30 max-w-[150px] md:max-w-[200px]">
            <h4 className="font-playfair text-sm md:text-base font-medium text-agraharam-skyblue">Inner Ring</h4>
            <p className="text-xs md:text-sm text-foreground/80 mt-1">Traditional row houses for community living</p>
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-x-[105%] -translate-y-1/2 bg-white p-3 rounded-lg shadow-sm border border-agraharam-sandalwood/30 max-w-[150px] md:max-w-[200px]">
            <h4 className="font-playfair text-sm md:text-base font-medium text-agraharam-sandalwood">Center</h4>
            <p className="text-xs md:text-sm text-foreground/80 mt-1">Sacred temple at the heart of our community</p>
          </div>
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/80">
            This concentric design is more than aesthetic—it's functional. The layout facilitates community interaction while preserving personal space, creating a balanced environment that supports both collective and individual pursuits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConcentricLayout;
