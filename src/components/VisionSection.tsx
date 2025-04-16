import React from 'react';
import { Flower, Heart, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 md:py-24 bg-white relative overflow-hidden mandala-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-10 h-0.5 bg-agraharam-terracotta/50 mr-3" />
            <span className="text-agraharam-terracotta font-medium">Our Vision</span>
            <div className="w-10 h-0.5 bg-agraharam-terracotta/50 ml-3" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            A Spiritual Settlement for the Modern Era
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Inspired by the ancient Agraharams of India, our community is designed to revive Vedic wisdom through architecture, sustainability, and mindful living.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-agraharam-sandalwood/10 p-6 rounded-lg border border-agraharam-sandalwood/30 hover:border-agraharam-terracotta/30 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-agraharam-terracotta/10 rounded-full mb-4">
              <Flower className="h-6 w-6 text-agraharam-terracotta" />
            </div>
            <h3 className="font-playfair text-xl font-medium mb-3">Sacred Architecture</h3>
            <p className="text-foreground/80">
              Designed according to Vastu principles, our spaces harmonize with cosmic energies to create environments that nurture both body and spirit.
            </p>
          </div>
          
          <div className="bg-agraharam-sandalwood/10 p-6 rounded-lg border border-agraharam-sandalwood/30 hover:border-agraharam-terracotta/30 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-agraharam-forest/10 rounded-full mb-4">
              <Leaf className="h-6 w-6 text-agraharam-forest" />
            </div>
            <h3 className="font-playfair text-xl font-medium mb-3">Environmental Harmony</h3>
            <p className="text-foreground/80">
              Self-sustaining practices like rainwater harvesting, solar energy, and organic farming create a community that gives back to Mother Earth.
            </p>
          </div>
          
          <div className="bg-agraharam-sandalwood/10 p-6 rounded-lg border border-agraharam-sandalwood/30 hover:border-agraharam-terracotta/30 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center bg-agraharam-skyblue/20 rounded-full mb-4">
              <Heart className="h-6 w-6 text-agraharam-skyblue" />
            </div>
            <h3 className="font-playfair text-xl font-medium mb-3">Dharmic Community</h3>
            <p className="text-foreground/80">
              A like-minded community that shares values of simplicity, spirituality, and service, creating a supportive environment for personal growth.
            </p>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-lg italic text-foreground/90 max-w-2xl mx-auto">
            "In the sacred space where tradition meets sustainability, we've created not just homes, but a way of life that honors our ancient wisdom while embracing modern needs."
          </p>
          <p className="mt-4 text-agraharam-terracotta font-medium">— Founder, Sacred Harmony Haven</p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
