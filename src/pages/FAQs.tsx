import React, { useState } from 'react';
import AluwindHeaderTop from '../components/AluwindHeaderTop';
import AluwindNavbar from '../components/AluwindNavbar';
import Footer from '../components/Footer';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import WindLeafIcon from '../components/WindLeafIcon';

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
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <AluwindHeaderTop />
      <AluwindNavbar />

      {/* Hero */}
      <section className="relative bg-aluwind-dark text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0" />
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="flex justify-center mb-2">
            <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Find answers regarding FLO Energy fuel quality, bulk deliveries, payment options, and service station operations.
          </p>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        {/* Search */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. bulk delivery, diesel 50ppm)..."
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-none text-xs focus:ring-1 focus:ring-aluwind-green focus:border-transparent outline-none shadow-sm"
          />
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-gray-50 border border-gray-100 shadow-sm overflow-hidden transition">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center font-bold text-gray-900 text-sm hover:text-aluwind-green transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-aluwind-green transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
 
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 text-xs leading-relaxed border-t border-gray-200 pt-4">
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
