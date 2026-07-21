import React from 'react';
import { Phone } from 'lucide-react';

export const FloatingCallButton: React.FC = () => {
  return (
    <a
      href="tel:+263772245578"
      className="fixed bottom-6 right-6 z-40 sm:hidden bg-flo-gold text-flo-dark p-4 rounded-full shadow-2xl border-2 border-white flex items-center justify-center animate-bounce hover:scale-110 transition duration-300"
      aria-label="Call FLO Energy Sales"
    >
      <Phone className="w-6 h-6 fill-current text-flo-dark" />
    </a>
  );
};

export default FloatingCallButton;
