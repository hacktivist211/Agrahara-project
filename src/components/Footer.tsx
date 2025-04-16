
import React from 'react';
import { Lotus, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-agraharam-cream py-12 md:py-16 border-t border-agraharam-sandalwood/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Lotus size={28} className="text-agraharam-terracotta" />
              <span className="font-playfair text-xl font-semibold text-agraharam-terracotta">Sacred Harmony Haven</span>
            </div>
            
            <p className="text-sm text-foreground/80 mb-4">
              Agraharam Reimagined – Where Dharma Lives.
            </p>
            
            <div className="flex space-x-3">
              <a 
                href="#facebook" 
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-agraharam-terracotta/10 text-agraharam-terracotta hover:bg-agraharam-terracotta/20 transition-colors"
              >
                <Facebook size={16} />
              </a>
              
              <a 
                href="#instagram" 
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-agraharam-terracotta/10 text-agraharam-terracotta hover:bg-agraharam-terracotta/20 transition-colors"
              >
                <Instagram size={16} />
              </a>
              
              <a 
                href="#twitter" 
                aria-label="Twitter"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-agraharam-terracotta/10 text-agraharam-terracotta hover:bg-agraharam-terracotta/20 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-playfair text-base font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#vision" className="text-foreground/80 hover:text-agraharam-terracotta transition-colors">Our Vision</a></li>
              <li><a href="#layout" className="text-foreground/80 hover:text-agraharam-terracotta transition-colors">Community Layout</a></li>
              <li><a href="#nature" className="text-foreground/80 hover:text-agraharam-terracotta transition-colors">Nature & Sustainability</a></li>
              <li><a href="#community" className="text-foreground/80 hover:text-agraharam-terracotta transition-colors">Community Living</a></li>
              <li><a href="#reserve" className="text-foreground/80 hover:text-agraharam-terracotta transition-colors">Reserve Your Plot</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-playfair text-base font-medium mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-agraharam-terracotta flex-shrink-0" />
                <span className="text-foreground/80">
                  123 Sacred Path, Harmony District<br />
                  Tamil Nadu, India 600001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-agraharam-terracotta flex-shrink-0" />
                <span className="text-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-agraharam-terracotta flex-shrink-0" />
                <span className="text-foreground/80">info@sacredharmonyhaven.com</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-playfair text-base font-medium mb-4">Newsletter</h4>
            <p className="text-sm text-foreground/80 mb-3">
              Subscribe to receive updates about our community developments.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full px-3 py-2 text-sm border border-agraharam-sandalwood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-agraharam-terracotta/50"
              />
              <button 
                type="submit" 
                className="w-full bg-agraharam-terracotta text-white px-4 py-2 rounded-md text-sm hover:bg-agraharam-terracotta/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="mt-4">
              <a 
                href="https://wa.me/919876543210" 
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633C16.242 3.471 13.321 2.273 10.189 2.273C5.768 2.273 2.182 5.86 2.18 10.281C2.179 11.775 2.548 13.235 3.254 14.537L2.082 19.336L6.986 18.188C8.239 18.827 9.621 19.16 11.029 19.16H11.033C15.453 19.16 19.038 15.573 19.04 11.152C19.041 8.032 17.854 5.104 15.691 2.941L18.403 5.633ZM10.189 17.74H10.186C8.917 17.739 7.674 17.421 6.581 16.814L6.303 16.651L3.391 17.337L4.09 14.491L3.909 14.203C3.239 13.072 2.887 11.792 2.888 10.479C2.889 6.641 6.002 3.529 10.192 3.529C12.796 3.53 15.214 4.541 17.044 6.371C18.874 8.203 19.884 10.621 19.883 13.226C19.881 17.066 16.768 20.179 10.189 17.74ZM14.66 12.222C14.426 12.105 13.21 11.508 12.996 11.431C12.783 11.353 12.628 11.314 12.473 11.549C12.318 11.784 11.845 12.342 11.709 12.497C11.573 12.651 11.438 12.671 11.204 12.554C10.97 12.437 10.146 12.154 9.165 11.275C8.401 10.591 7.886 9.751 7.75 9.516C7.615 9.281 7.734 9.157 7.848 9.042C7.95 8.939 8.075 8.771 8.191 8.636C8.307 8.5 8.346 8.402 8.423 8.247C8.501 8.093 8.462 7.957 8.404 7.84C8.346 7.723 7.835 6.505 7.641 6.035C7.451 5.58 7.258 5.642 7.115 5.635C6.979 5.627 6.824 5.625 6.669 5.625C6.514 5.625 6.262 5.683 6.048 5.918C5.834 6.153 5.197 6.751 5.197 7.97C5.197 9.188 6.073 10.367 6.189 10.521C6.305 10.676 7.883 13.091 10.29 14.173C10.861 14.418 11.309 14.565 11.658 14.674C12.225 14.85 12.738 14.82 13.144 14.761C13.596 14.695 14.582 14.171 14.776 13.622C14.969 13.072 14.969 12.603 14.912 12.497C14.854 12.392 14.699 12.339 14.66 12.222Z" fill="currentColor"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-agraharam-sandalwood/30 text-center text-sm text-foreground/70">
          <p>© {new Date().getFullYear()} Sacred Harmony Haven. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#privacy" className="hover:text-agraharam-terracotta transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-agraharam-terracotta transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-agraharam-terracotta transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
