import React from 'react';
import { Shield, Clock, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-yellow-400" />,
      title: 'Secure Staking',
      description: 'Your investments are protected by advanced blockchain technology.'
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-400" />,
      title: 'Time-locked Rewards',
      description: 'Earn higher rewards by committing to longer staking periods.'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: 'Fast Transactions',
      description: 'Experience lightning-fast transactions on the HEX network.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-indigo-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose HEX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;