import React from 'react';
import { Hexagon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-purple-900 bg-opacity-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Hexagon className="w-8 h-8 mr-2 text-yellow-400" />
          <span className="text-2xl font-bold">HEX.com</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-yellow-400 transition-colors">Features</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors">Testimonials</a></li>
            <li><a href="#cta" className="hover:text-yellow-400 transition-colors">Get Started</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;