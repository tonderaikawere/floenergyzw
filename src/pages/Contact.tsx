import React from 'react';
import AluwindFeedbackWidget from '../components/AluwindFeedbackWidget';
import AluwindQuoteModal from '../components/AluwindQuoteModal';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = React.useState(false);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto w-full font-sans space-y-12">
      <div className="bg-[#0f1f17] text-white p-12 border-t-8 border-[#4caf50] space-y-4">
        <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>
        <h1 className="text-4xl font-black">Contact FLO Energy</h1>
        <p className="text-gray-300 text-sm max-w-xl">Speak directly with Adrian King (+263 77 224 5578) or Nathan King (+263 71 221 3338).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        <div className="p-6 bg-white border-l-4 border-[#4caf50] shadow-sm space-y-2">
          <MapPin className="w-6 h-6 text-[#4caf50]" />
          <h4 className="font-black text-sm text-[#0f1f17]">Harare Terminal</h4>
          <p className="text-gray-600">Arcturus Road, Donnybrook, Harare</p>
        </div>
        <div className="p-6 bg-white border-l-4 border-[#4caf50] shadow-sm space-y-2">
          <Phone className="w-6 h-6 text-[#4caf50]" />
          <h4 className="font-black text-sm text-[#0f1f17]">Commercial Dispatch</h4>
          <p className="text-gray-600">+263 77 224 5578 / +263 71 221 3338</p>
        </div>
        <div className="p-6 bg-white border-l-4 border-[#4caf50] shadow-sm space-y-2">
          <Mail className="w-6 h-6 text-[#4caf50]" />
          <h4 className="font-black text-sm text-[#0f1f17]">Email Inquiries</h4>
          <p className="text-gray-600">inquiry@floenergy.net / sales1@floenergy.net</p>
        </div>
      </div>

      <AluwindFeedbackWidget />
      <AluwindQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default Contact;
