import React, { useState } from 'react';
import { Phone, ArrowRight, Fuel } from 'lucide-react';
import QuoteModal from './QuoteModal';

export const InduzyCallToAction: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="bg-[#ffb400] text-[#12161f] py-14 px-4 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-xs font-black uppercase tracking-widest text-[#12161f] bg-black/10 px-3 py-1">
            // 24/7 BULK PETROLEUM DISPATCH
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#12161f] leading-tight">
            LOOKING FOR A RELIABLE PETROLEUM SUPPLIER IN ZIMBABWE?
          </h2>
          <p className="text-[#12161f]/80 text-xs sm:text-sm font-bold">
            Speak directly with Adrian King (+263 77 224 5578) or Nathan King (+263 71 221 3338) for instant tanker dispatch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="bg-[#1f2532] hover:bg-[#12161f] text-white font-black text-xs uppercase tracking-widest px-8 py-4 shadow-xl transition flex items-center justify-center space-x-2"
          >
            <span>GET IN TOUCH TODAY</span>
            <ArrowRight className="w-4 h-4 text-[#ffb400]" />
          </button>
          <a
            href="tel:+263772245578"
            className="bg-black/10 hover:bg-black/20 text-[#12161f] font-black text-xs uppercase tracking-widest px-8 py-4 border border-black/20 transition flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>+263 77 224 5578</span>
          </a>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
};

export default InduzyCallToAction;
