import React, { useState } from 'react';
import { Phone, ArrowRight, Fuel } from 'lucide-react';
import QuoteModal from './QuoteModal';

export const InduzyCallToAction: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="bg-flo-purple text-white py-16 px-4 font-sans relative overflow-hidden border-y border-flo-purple-light/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-black uppercase tracking-widest text-flo-gold bg-flo-gold/10 px-3.5 py-1 rounded-full border border-flo-gold/30">
            24/7 COMMERCIAL DISPATCH HOTLINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Need Bulk Fuel Delivered Direct to Your Site?
          </h2>
          <p className="text-gray-200 text-sm max-w-xl">
            Speak directly with Adrian King (+263 77 224 5578) or Nathan King (+263 71 221 3338) for instant tanker dispatch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="flo-gold-gradient text-flo-dark font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl hover:brightness-110 transition flex items-center justify-center space-x-2 border border-flo-gold/60"
          >
            <span>GET INSTANT QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="tel:+263772245578"
            className="bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md transition flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-flo-gold" />
            <span>+263 77 224 5578</span>
          </a>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
};

export default InduzyCallToAction;
