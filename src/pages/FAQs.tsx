import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuelPriceTicker from '../components/FuelPriceTicker';
import { HelpCircle, ChevronDown, Search, Fuel, ShieldCheck } from 'lucide-react';

export const FAQs: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'What petroleum grades does FLO Energy supply?',
      answer: 'FLO Energy Zimbabwe supplies Low Sulfur Diesel 50ppm, Unleaded Petrol E10, Industrial Fuel Oil (IFO), Liquefied Petroleum Gas (LPG), and heavy-duty lubricants.',
    },
    {
      question: 'How do I place a bulk fuel tanker order?',
      answer: 'You can request a quote online via our website calculator or contact our sales representatives: Adrian King at +263 77 224 5578, Nathan King at +263 71 221 3338, or email sales1@floenergy.net.',
    },
    {
      question: 'Are FLO Energy fuels tested and ZERA compliant?',
      answer: 'Yes. All FLO Energy fuel shipments undergo rigorous laboratory filtration tests for water contamination and ethanol blend compliance prior to pump discharge and bulk tanker delivery.',
    },
    {
      question: 'What is the minimum volume for bulk tanker delivery?',
      answer: 'Our bulk tanker deliveries start from 10,000 Liters up to 40,000 Liters with calibrated flow meters and delivery certificates.',
    },
    {
      question: 'Where are FLO Energy service stations located?',
      answer: 'Our primary service stations are located in Harare (Donnybrook Station on Arcturus Rd) and Bulawayo (Burnside & Ironbridge Stations).',
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <FuelPriceTicker />

      {/* Hero */}
      <section className="flo-hero-gradient text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-flo-gold text-flo-dark text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center space-x-1">
            <HelpCircle className="w-4 h-4" />
            <span>Customer Knowledge Base</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">Frequently Asked Questions</h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto">
            Find answers regarding FLO Energy fuel quality, bulk deliveries, payment options, and service station operations.
          </p>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        {/* Search */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. bulk delivery, diesel 50ppm)..."
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl text-sm shadow-sm focus:ring-2 focus:ring-flo-purple focus:border-transparent"
          />
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center font-bold text-gray-900 text-base hover:text-flo-purple transition"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-flo-purple transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
