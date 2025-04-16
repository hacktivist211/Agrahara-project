
import React from 'react';
import { Leaf, Droplets, SunDim } from 'lucide-react';
import { cn } from '@/lib/utils';

const NatureSection = () => {
  return (
    <section id="nature" className="py-20 md:py-24 bg-white relative overflow-hidden lotus-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center mb-4">
              <Leaf className="h-5 w-5 text-agraharam-forest mr-2" />
              <span className="text-agraharam-forest font-medium">Sustainability</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Protected by Nature, Nourished by Waters
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Our Agraharam is designed to live in harmony with nature, utilizing traditional wisdom to create sustainable living spaces that protect and nourish the environment.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-agraharam-forest/10 rounded-full mr-4 mt-1">
                  <Droplets className="h-5 w-5 text-agraharam-forest" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-medium mb-2">Water Conservation</h3>
                  <p className="text-foreground/80">
                    Traditional pushkaranis (temple tanks) and modern rainwater harvesting systems work together to conserve water, while natural moats create microclimates and enhance biodiversity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-agraharam-terracotta/10 rounded-full mr-4 mt-1">
                  <SunDim className="h-5 w-5 text-agraharam-terracotta" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-medium mb-2">Renewable Energy</h3>
                  <p className="text-foreground/80">
                    Solar panels integrated into traditional architecture provide clean energy, while passive cooling systems reduce dependence on mechanical air conditioning.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-agraharam-sandalwood/20 rounded-full mr-4 mt-1">
                  <Leaf className="h-5 w-5 text-agraharam-earth" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-medium mb-2">Natural Boundaries</h3>
                  <p className="text-foreground/80">
                    Teak and mahogany trees create natural fencing around the community, providing shade, clean air, and a protective boundary that blends with the landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Sacred trees and water conservation" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-agraharam-forest/10 rounded-full flex items-center justify-center animate-pulse-soft">
                <span className="font-playfair text-sm text-agraharam-forest font-medium text-center leading-tight">
                  100% Natural<br />Resources
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NatureSection;
