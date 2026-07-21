import React from 'react';
import { MapPin, Fuel, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InduzyGallery: React.FC = () => {
  const items = [
    {
      title: 'Donnybrook Station (Harare)',
      subtitle: '24/7 Retail & LPG Exchange Terminal',
      image: '/images/flo/station1.svg',
      link: '/locations',
    },
    {
      title: 'Bulk Fuel Logistics Terminal',
      subtitle: '10,000L - 40,000L Metered Fleet Dispatch',
      image: '/images/flo/station2.svg',
      link: '/bulk-fuel',
    },
    {
      title: 'Burnside Station (Bulawayo)',
      subtitle: 'High-Flow Diesel 50ppm & Fleet Cards',
      image: '/images/flo/hero_petrol.svg',
      link: '/locations',
    },
  ];

  return (
    <section className="py-20 bg-white px-4 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black text-[#ffb400] uppercase tracking-widest bg-[#1f2532] px-3.5 py-1.5 inline-block mb-3">
            // OUR INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 leading-tight">
            Facilities & Petroleum Logistics Terminals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden shadow-xl border border-gray-200 h-80">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12161f]/95 via-[#12161f]/40 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-bold text-[#ffb400] flex items-center space-x-1 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  <span>{item.subtitle}</span>
                </span>
                <h3 className="text-xl font-black uppercase text-white mt-1">{item.title}</h3>
                <Link
                  to={item.link}
                  className="inline-flex items-center space-x-2 text-[#ffb400] font-black text-xs uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition"
                >
                  <span>VIEW TERMINAL DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InduzyGallery;
