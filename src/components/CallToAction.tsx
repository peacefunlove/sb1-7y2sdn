import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-yellow-400 text-purple-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your HEX Journey?</h2>
        <p className="text-xl mb-8">Join thousands of investors who have already discovered the power of HEX.</p>
        <a
          href="https://hex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-purple-900 text-yellow-400 py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-800 transition-colors"
        >
          Get Started Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;