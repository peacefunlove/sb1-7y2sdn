import React from 'react';
import { TrendingUp, Lock, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to HEX</h1>
        <p className="text-xl mb-8">The Future of Cryptocurrency Investment</p>
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-yellow-400" />
            <span>High Yield</span>
          </div>
          <div className="flex items-center">
            <Lock className="w-6 h-6 mr-2 text-yellow-400" />
            <span>Secure</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-6 h-6 mr-2 text-yellow-400" />
            <span>Profitable</span>
          </div>
        </div>
        <a href="#cta" className="bg-yellow-400 text-purple-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors">
          Start Investing Now
        </a>
      </div>
    </section>
  );
};

export default Hero;