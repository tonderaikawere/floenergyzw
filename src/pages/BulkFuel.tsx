import React, { useState } from 'react';
import AluwindDensityCalculator from '../components/AluwindDensityCalculator';
import AluwindDeliveryTracker from '../components/AluwindDeliveryTracker';
import AluwindQuoteModal from '../components/AluwindQuoteModal';
import { Truck, ArrowRight } from 'lucide-react';

export const BulkFuel: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto w-full font-sans space-y-12">
      <div className="bg-[#0f1f17] text-white p-12 border-t-8 border-[#4caf50] space-y-6">
        <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>
        <h1 className="text-4xl font-black">Bulk Fuel Tanker Delivery Logistics</h1>
        <p className="text-gray-300 text-sm max-w-2xl">
          Dedicated fleet of metered 10,000L to 40,000L tankers equipped with calibrated flow meters and real-time telematics dispatch.
        </p>
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 transition inline-flex items-center space-x-2"
        >
          <span>Order Bulk Tanker Dispatch</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <AluwindDensityCalculator />
      <AluwindDeliveryTracker />
      <AluwindQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct="Diesel 50ppm (Bulk)" />
    </div>
  );
};

export default BulkFuel;
