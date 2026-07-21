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
      bgColor: 'bg-[#ffb400] text-[#12161f]',
      iconColor: 'text-[#12161f]',
      linkText: 'text-[#12161f]',
    },
    {
      num: '02',
      title: 'Metered Bulk Tanker Logistics',
      desc: '10,000L to 40,000L bulk fuel tankers dispatched 24/7 directly to commercial, agricultural & mining sites.',
      icon: Truck,
      link: '/bulk-fuel',
      bgColor: 'bg-[#1f2532] text-white',
      iconColor: 'text-[#ffb400]',
      linkText: 'text-[#ffb400]',
    },
    {
      num: '03',
      title: 'Smart Fleet Fuel Cards',
      desc: 'Driver PIN protection, real-time odometer logging, and zero cash handling risks across Zimbabwe.',
      icon: CreditCard,
      link: '/fleet-card',
      bgColor: 'bg-[#151922] text-white',
      iconColor: 'text-[#ffb400]',
      linkText: 'text-[#ffb400]',
    },
  ];

  return (
    <div className="relative font-sans bg-[#12161f]">
      {/* Main Hero Banner */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: "url('https://floenergy.net/wp-content/uploads/2018/05/Petrol.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12161f]/95 via-[#1a1f2b]/90 to-[#12161f]/95" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white w-full z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block bg-[#ffb400] text-[#12161f] font-black text-xs uppercase tracking-widest px-4 py-1.5 shadow">
              <span>// WELCOME TO FLO ENERGY ZIMBABWE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight text-white">
              PROVIDING HIGH QUALITY PETROLEUM & BULK LOGISTICS
            </h1>

            <p className="text-gray-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              Powering Zimbabwe's agricultural, mining, and commercial transport industries with clean Diesel 50ppm, Petrol E10, and metered 24/7 bulk tanker logistics.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/services"
                className="w-full sm:w-auto bg-[#ffb400] hover:bg-[#e09e00] text-[#12161f] font-black text-xs uppercase tracking-widest px-8 py-4 shadow-xl transition flex items-center justify-center space-x-2"
              >
                <span>OUR SERVICES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-[#12161f] text-white font-black text-xs uppercase tracking-widest px-8 py-4 transition flex items-center justify-center space-x-2"
              >
                <span>CONTACT US</span>
                <ChevronRight className="w-4 h-4 text-[#ffb400]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Induzy 3-Column Overlapping Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`${card.bgColor} p-8 flex flex-col justify-between space-y-6 transition hover:brightness-105`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-4xl font-black opacity-30">{card.num}</span>
                    <div className="p-3 bg-black/10 rounded-none">
                      <Icon className={`w-7 h-7 ${card.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight leading-snug">{card.title}</h3>
                  <p className="text-xs leading-relaxed opacity-90">{card.desc}</p>
                </div>

                <Link
                  to={card.link}
                  className={`inline-flex items-center space-x-2 font-black text-xs uppercase tracking-widest group pt-4 border-t border-black/10 ${card.linkText}`}
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
