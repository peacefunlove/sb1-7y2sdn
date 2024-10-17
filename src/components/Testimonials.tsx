import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Crypto Investor',
      content: 'HEX has revolutionized my investment strategy. The returns are incredible!',
      rating: 5
    },
    {
      name: 'Jane Smith',
      role: 'Financial Advisor',
      content: 'I recommend HEX to all my clients. It\'s secure, profitable, and easy to use.',
      rating: 5
    },
    {
      name: 'Mike Johnson',
      role: 'Tech Entrepreneur',
      content: 'The innovative staking model of HEX is truly game-changing. I\'m all in!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-300">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;