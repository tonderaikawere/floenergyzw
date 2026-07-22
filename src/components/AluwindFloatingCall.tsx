import React from 'react';
import { Phone } from 'lucide-react';

export const AluwindFloatingCall: React.FC = () => {
  return (
    <a
      href="tel:+263772245578"
      className="fixed bottom-6 right-6 z-40 bg-[#4caf50] hover:bg-[#388e3c] text-white p-4 shadow-2xl flex items-center space-x-2 font-black text-xs uppercase tracking-widest transition sm:hidden border border-white/20"
      aria-label="Call FLO Energy Dispatch"
    >
      <Phone className="w-5 h-5 animate-pulse" />
      <span>CALL DISPATCH</span>
    </a>
  );
};

export default AluwindFloatingCall;
