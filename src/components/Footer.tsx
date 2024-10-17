import React from 'react';
import { Hexagon, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 bg-opacity-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Hexagon className="w-8 h-8 mr-2 text-yellow-400" />
            <span className="text-2xl font-bold">HEX.com</span>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-yellow-400 transition-colors">Features</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors">Testimonials</a></li>
              <li><a href="#cta" className="hover:text-yellow-400 transition-colors">Get Started</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} HEX.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;