
import React from 'react';
import { Utensils, SquareUser } from 'lucide-react';
import { cn } from '@/lib/utils';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 md:py-24 bg-agraharam-sandalwood/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-10 h-0.5 bg-agraharam-terracotta/50 mr-3" />
            <span className="text-agraharam-terracotta font-medium">Community Living</span>
            <div className="w-10 h-0.5 bg-agraharam-terracotta/50 ml-3" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Sacred Nourishment for Body and Soul
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our community is centered around the sacred practices of cow protection and sattvik food preparation, nurturing both physical health and spiritual growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sacred Goshala" 
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-medium mb-3">The Sacred Goshala</h3>
              <p className="text-foreground/80 mb-4">
                Our community goshala houses 50-100 indigenous cow breeds, cared for according to traditional practices. These sacred animals provide milk for the community, while their presence creates an atmosphere of purity and peace.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-agraharam-terracotta rounded-full mr-2"></span>
                  <span>Protection of indigenous cow breeds</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-agraharam-terracotta rounded-full mr-2"></span>
                  <span>Organic milk and ghee production</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-agraharam-terracotta rounded-full mr-2"></span>
                  <span>Natural fertilizer for community gardens</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Community Kitchen" 
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="p-6">
              <h3 className="font-playfair text-2xl font-medium mb-3">Sattvik Community Kitchen</h3>
              <p className="text-foreground/80 mb-4">
                Our community kitchen serves fresh, locally grown sattvik meals that nourish the body and elevate consciousness. Residents can choose to dine together or prepare meals in their homes with ingredients from our organic farms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-agraharam-forest rounded-full mr-2"></span>
                  <span>Farm-to-table organic produce</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-agraharam-forest rounded-full mr-2"></span>
                  <span>Traditional Ayurvedic cooking principles</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-agraharam-forest rounded-full mr-2"></span>
                  <span>Community dining fostering connections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-6">
            More Than a Home — A Way of Life
          </h3>
          
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-lg shadow-sm border border-agraharam-sandalwood/30">
              <SquareUser className="h-8 w-8 mx-auto mb-3 text-agraharam-terracotta" />
              <h4 className="font-playfair font-medium mb-2">For Seekers</h4>
              <p className="text-sm text-foreground/80">
                A supportive environment for spiritual practice and growth.
              </p>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow-sm border border-agraharam-sandalwood/30">
              <Utensils className="h-8 w-8 mx-auto mb-3 text-agraharam-forest" />
              <h4 className="font-playfair font-medium mb-2">For Families</h4>
              <p className="text-sm text-foreground/80">
                A safe, wholesome environment for raising children with values.
              </p>
            </div>
            
            <div className="p-5 bg-white rounded-lg shadow-sm border border-agraharam-sandalwood/30">
              <svg className="h-8 w-8 mx-auto mb-3 text-agraharam-skyblue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16V13M12 13V7M12 13H9M12 13H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h4 className="font-playfair font-medium mb-2">For Retirees</h4>
              <p className="text-sm text-foreground/80">
                A peaceful environment for meaningful living in later years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
