import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Truck, CreditCard, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import QuoteModal from './QuoteModal';

export const InduzyHero: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const featureCards = [
    {
      num: '01',
      title: 'ZERA Certified Quality Assurance',
      desc: 'Strict laboratory testing guaranteeing 100% water-free Diesel 50ppm and Ethanol E10 fuel grades.',
      icon: ShieldCheck,
      link: '/services',
    },
    {
      num: '02',
      title: 'Metered Bulk Tanker Logistics',
      desc: '10,000L to 40,000L bulk fuel tankers dispatched 24/7 directly to commercial, agricultural & mining sites.',
      icon: Truck,
      link: '/bulk-fuel',
    },
    {
      num: '03',
      title: 'Smart Fleet Fuel Cards',
      desc: 'Driver PIN protection, real-time odometer logging, and zero cash handling risks across Zimbabwe.',
      icon: CreditCard,
      link: '/fleet-card',
    },
  ];

  return (
    <div className="relative font-sans bg-flo-dark">
      {/* Main Hero Banner */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: "url('https://floenergy.net/wp-content/uploads/2018/05/Petrol.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-flo-dark/95 via-flo-purple/90 to-flo-dark/95" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white w-full z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-flo-gold text-flo-dark font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-flo-gold/50 shadow">
              <span>ESTABLISHED 2012 • PETROLEUM LOGISTICS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white">
              RELIABLE ENERGY & PETROLEUM LOGISTICS IN ZIMBABWE
            </h1>

            <p className="text-gray-200 text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
              FLO Energy Zimbabwe supplies high-performance Diesel 50ppm, Petrol E10, and Heavy Industrial Fuel Oils with guaranteed purity and 24/7 on-site tanker dispatch.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full sm:w-auto flo-gold-gradient text-flo-dark font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl hover:brightness-110 transition flex items-center justify-center space-x-2 border border-flo-gold/60"
              >
                <span>REQUEST BULK QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md transition flex items-center justify-center space-x-2"
              >
                <span>EXPLORE INDUSTRIAL SERVICES</span>
                <ChevronRight className="w-4 h-4 text-flo-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Induzy 3-Column Overlapping Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black text-flo-purple/20">{card.num}</span>
                    <div className="bg-flo-purple-subtle p-3 rounded-2xl text-flo-purple">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 leading-tight">{card.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{card.desc}</p>
                </div>

                <Link
                  to={card.link}
                  className="inline-flex items-center space-x-2 text-flo-purple hover:text-flo-gold font-black text-xs uppercase tracking-wider group pt-2 border-t border-gray-100"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default InduzyHero;
