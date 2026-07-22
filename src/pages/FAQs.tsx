import React from 'react';
import AluwindZeraBadge from '../components/AluwindZeraBadge';

export const FAQs: React.FC = () => {
  const faqs = [
    { q: 'What is the minimum volume for bulk tanker delivery?', a: 'Our minimum bulk tanker delivery starts at 10,000 Liters nationwide.' },
    { q: 'Are your petroleum products ZERA certified?', a: 'Yes, 100% of our fuel is tested for cetane rating and zero water contamination.' },
    { q: 'How do I register for commercial fleet cards?', a: 'You can apply online via our Fleet Card page or contact commercial dispatch.' },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto w-full font-sans space-y-12">
      <div className="space-y-3">
        <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>
        <h1 className="text-4xl font-black text-[#0f1f17]">Frequently Asked Questions</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white p-6 border-l-4 border-[#4caf50] shadow-sm space-y-2 text-xs">
            <h3 className="text-base font-black text-[#0f1f17]">{faq.q}</h3>
            <p className="text-gray-600 leading-relaxed font-medium">{faq.a}</p>
          </div>
        ))}
      </div>

      <AluwindZeraBadge />
    </div>
  );
};

export default FAQs;
