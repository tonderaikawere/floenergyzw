import React from 'react';
import { MapPin, Fuel, ShieldCheck } from 'lucide-react';

export const InduzyGallery: React.FC = () => {
  const items = [
    {
      title: 'Donnybrook Station (Harare)',
      subtitle: '24/7 Retail & LPG Exchange Terminal',
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg',
    },
    {
      title: 'Bulk Fuel Logistics Terminal',
      subtitle: '10,000L - 40,000L Metered Fleet Dispatch',
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo2.jpg',
    },
    {
      title: 'Burnside Station (Bulawayo)',
      subtitle: 'High-Flow Diesel 50ppm & Fleet Cards',
      image: 'https://floenergy.net/wp-content/uploads/2018/05/Petrol.jpg',
    },
  ];

  return (
    <section className="py-20 bg-white px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-flo-purple uppercase tracking-widest bg-flo-purple-subtle px-3.5 py-1.5 rounded-full inline-block mb-3">
            FACILITIES & LOGISTICS TERMINALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">
            Our Infrastructure Across Zimbabwe
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-80">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-flo-dark/90 via-flo-dark/30 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-flo-gold flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  <span>{item.subtitle}</span>
                </span>
                <h3 className="text-xl font-black text-white mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InduzyGallery;
