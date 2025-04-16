
import React from 'react';
import { MapPin, Mail, Calendar, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const ReserveSection = () => {
  return (
    <section id="reserve" className="py-20 md:py-24 bg-agraharam-forest relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="mandala" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#fff" strokeWidth="0.5" />
            <circle cx="25" cy="25" r="15" fill="none" stroke="#fff" strokeWidth="0.5" />
            <circle cx="25" cy="25" r="10" fill="none" stroke="#fff" strokeWidth="0.5" />
            <circle cx="25" cy="25" r="5" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#mandala)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
            Reserve Your Plot. Plant Your Dharma.
          </h2>
          
          <p className="text-lg text-white/80 leading-relaxed">
            Begin your journey to a more meaningful life in our sacred community. Choose from our selection of traditional row houses, spacious villas, farm plots, and commercial spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 text-white">
            <h3 className="font-playfair text-2xl font-medium mb-6">Available Options</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-agraharam-terracotta/20 rounded-full mr-4 mt-1">
                  <span className="font-playfair font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-medium mb-1">Traditional Row Houses</h4>
                  <p className="text-white/80 text-sm">
                    1000-1500 sq.ft homes in traditional Agraharam style near the temple
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-agraharam-sandalwood/20 rounded-full mr-4 mt-1">
                  <span className="font-playfair font-bold">B</span>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-medium mb-1">Spacious Villas</h4>
                  <p className="text-white/80 text-sm">
                    2000-3000 sq.ft private homes with gardens in the middle ring
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-agraharam-skyblue/20 rounded-full mr-4 mt-1">
                  <span className="font-playfair font-bold">C</span>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-medium mb-1">Farm Plots</h4>
                  <p className="text-white/80 text-sm">
                    Quarter acre to one acre plots for organic farming and homesteading
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/20 rounded-full mr-4 mt-1">
                  <span className="font-playfair font-bold">D</span>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-medium mb-1">Commercial Spaces</h4>
                  <p className="text-white/80 text-sm">
                    Shops, wellness centers, and service spaces in the outer ring
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Button className="bg-white text-agraharam-forest hover:bg-white/90">
                <FileText className="mr-2 h-4 w-4" />
                Download Floor Plans
              </Button>
              
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Site Visit
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl">
            <h3 className="font-playfair text-2xl font-medium mb-6 text-agraharam-forest">Contact Us</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-agraharam-sandalwood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-agraharam-terracotta/50"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-agraharam-sandalwood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-agraharam-terracotta/50"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-3 py-2 border border-agraharam-sandalwood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-agraharam-terracotta/50"
                  placeholder="Your Phone Number"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-foreground/80 mb-1">I'm Interested In</label>
                <select 
                  id="interest" 
                  className="w-full px-3 py-2 border border-agraharam-sandalwood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-agraharam-terracotta/50"
                >
                  <option value="">Select an option</option>
                  <option value="row-house">Traditional Row House</option>
                  <option value="villa">Spacious Villa</option>
                  <option value="farm-plot">Farm Plot</option>
                  <option value="commercial">Commercial Space</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-3 py-2 border border-agraharam-sandalwood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-agraharam-terracotta/50"
                  placeholder="Your Message or Questions"
                ></textarea>
              </div>
              
              <Button className="w-full bg-agraharam-terracotta hover:bg-agraharam-terracotta/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;
