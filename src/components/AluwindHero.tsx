import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, ChevronRight, ArrowRight } from 'lucide-react';
import AluwindQuoteModal from './AluwindQuoteModal';

export const AluwindHero: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="relative font-sans bg-[#0f1f17] text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="relative min-h-[75vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/flo/tanker_fb.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f17] via-[#0f1f17]/90 to-[#0f1f17]/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
          <div className="max-w-2xl space-y-6">
            {/* Green Arc Icon Accent */}
            <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
              Global supplier of petroleum & bulk energy solutions
            </h1>

            <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Through over 12 years FLO Energy has offered nationwide supply, storage, and metered delivery for a wide range of commercial petroleum energy consumers.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/services"
                className="w-full sm:w-auto bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold text-xs uppercase tracking-widest px-7 py-3.5 shadow transition text-center"
              >
                <span>VIEW OUR SOLUTIONS</span>
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto bg-transparent border border-white/40 hover:border-white text-white font-extrabold text-xs uppercase tracking-widest px-7 py-3.5 transition text-center"
              >
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Hero Feature Cards Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
          {/* Card 1: Dark Forest */}
          <div className="bg-[#0a140e] p-8 border-t-4 border-[#4caf50] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-lg font-black text-white">The values of FLO Energy</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                We pay attention to the needs of the customer and the market, and meet them with an innovative, flexible and solution-oriented attitude.
              </p>
            </div>
            <Link to="/about" className="inline-flex items-center space-x-2 text-[11px] font-bold text-[#4caf50] uppercase tracking-wider">
              <span>OUR VALUES</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Medium Green */}
          <div className="bg-[#388e3c] p-8 border-t-4 border-white text-white space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-lg font-black text-white">Leading offshore & bulk solutions</h3>
              <p className="text-xs text-white/90 leading-relaxed">
                The services offered by FLO Energy include a global and state-of-the-art metered tanker delivery fleet based on the most modern technology.
              </p>
            </div>
            <Link to="/bulk-fuel" className="inline-flex items-center space-x-2 text-[11px] font-bold text-white uppercase tracking-wider">
              <span>OUR PRODUCTS</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Light Mint */}
          <div className="bg-[#d4edda] p-8 border-t-4 border-[#388e3c] text-[#0f1f17] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-lg font-black text-[#0f1f17]">High-quality fuel components</h3>
              <p className="text-xs text-[#0f1f17]/80 leading-relaxed">
                As we have the same quality standards and certified testing specs, you can rest assured that wherever we work for you, we deliver high-quality clean fuels.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center space-x-2 text-[11px] font-bold text-[#2e7d32] uppercase tracking-wider">
              <span>ZERA SPECIFICATIONS</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AluwindHero;
