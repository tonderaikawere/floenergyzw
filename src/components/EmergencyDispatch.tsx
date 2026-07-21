import React from 'react';
import { PhoneCall, Clock, ShieldAlert, Truck } from 'lucide-react';

export const EmergencyDispatch: React.FC = () => {
  return (
    <div className="bg-flo-dark text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center space-x-4">
        <div className="bg-flo-gold text-flo-dark p-3.5 rounded-2xl shrink-0 font-extrabold animate-pulse">
          <PhoneCall className="w-7 h-7" />
        </div>
        <div>
          <span className="text-xs font-black text-flo-gold uppercase tracking-widest">24/7 Logistics Priority</span>
          <h4 className="text-xl font-black text-white">Emergency Bulk Fuel Dispatch</h4>
          <p className="text-gray-300 text-xs mt-0.5">Need immediate generator diesel or emergency agricultural fuel? Call our dispatch line now.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
        <a
          href="tel:+263772245578"
          className="flo-gold-gradient text-flo-dark font-extrabold text-xs uppercase px-5 py-3 rounded-xl shadow-md text-center hover:brightness-105 transition"
        >
          +263 77 224 5578
        </a>
        <a
          href="tel:+263712213338"
          className="bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase px-5 py-3 rounded-xl border border-white/20 text-center transition"
        >
          +263 71 221 3338
        </a>
      </div>
    </div>
  );
};

export default EmergencyDispatch;
