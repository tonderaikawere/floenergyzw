import React from 'react';
import { Star, Building2, Truck, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Chiredzi Sugarcane Estate',
      category: 'Agricultural Operations',
      quote: 'FLO Energy’s 30,000L bulk fuel deliveries have kept our harvest tractors and water pumps running non-stop with zero fuel contamination issues.',
      rating: 5,
    },
    {
      name: 'Apex Logistics & Freight',
      category: 'Cross-Border Transport',
      quote: 'The FLO Fleet Card system reduced driver fuel fraud by over 90%. Real-time odometer logging gives us full visibility across our long-haul fleet.',
      rating: 5,
    },
    {
      name: 'Kwekwe Commercial Mining Ltd',
      category: 'Heavy Mining Site',
      quote: 'Direct on-site tanker dispatch within 24 hours. Their Diesel 50ppm quality is clean, water-free, and protects our heavy excavation engines.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-flo-purple uppercase tracking-widest bg-flo-purple-subtle px-3 py-1 rounded-full">
            Commercial Trust
          </span>
          <h2 className="text-3xl font-black text-flo-purple mt-3">What Our Partners Say</h2>
          <p className="text-gray-600 text-sm mt-1">Trusted by Zimbabwe's leading transport fleets, commercial farms, and mining sectors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative space-y-4 shadow-sm hover:shadow-md transition">
              <Quote className="w-8 h-8 text-flo-gold/40 absolute top-6 right-6" />
              <div className="flex space-x-1 text-flo-gold">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic leading-relaxed">"{rev.quote}"</p>
              <div className="pt-4 border-t border-gray-200/60">
                <h4 className="font-bold text-gray-900 text-base">{rev.name}</h4>
                <span className="text-xs font-semibold text-flo-purple">{rev.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
