import React, { useState } from 'react';
import AluwindHeaderTop from '../components/AluwindHeaderTop';
import AluwindNavbar from '../components/AluwindNavbar';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import ZeraBadge from '../components/ZeraBadge';
import DensityCalculator from '../components/DensityCalculator';
import DeliveryTracker from '../components/DeliveryTracker';
import { Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import WindLeafIcon from '../components/WindLeafIcon';

export const BulkFuel: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState('20,000 Liters');

  const tankerSizes = [
    { size: '10,000 Liters', desc: 'Ideal for agricultural farms, medium commercial fleets, and back-up generator tanks.' },
    { size: '20,000 Liters', desc: 'Optimal for mining sites, construction projects, and high-capacity transport hubs.' },
    { size: '40,000 Liters', desc: 'Heavy industrial tanker load with maximum volume price discounts.' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <AluwindHeaderTop />
      <AluwindNavbar />

      {/* Bulk Fuel Banner */}
      <section className="relative bg-aluwind-dark text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-2">
              <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Bulk Fuel Tanker Delivery & Storage
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Nationwide on-site fuel dispatch. Guaranteed clean, dry Diesel 50ppm and Petrol delivered directly to your commercial storage facilities.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-aluwind-green hover:bg-aluwind-green/90 text-white font-extrabold text-[11px] uppercase tracking-widest px-6 py-3.5 transition flex items-center space-x-2"
              >
                <span>Order Bulk Fuel Tanker</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/images/flo/tanker_fb.jpg"
              alt="FLO Fuel Station Tanker Facebook Photo"
              className="border border-white/20 shadow-2xl h-56 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tanker Fleet Selection */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-3">
            <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900">Metered Bulk Tanker Fleet</h2>
          <p className="text-gray-600 text-xs mt-1">
            Every FLO fuel tanker is equipped with calibrated flow meters and multi-stage fuel filtration systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tankerSizes.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCapacity(item.size)}
              className={`cursor-pointer p-6 border transition-all ${
                selectedCapacity === item.size
                  ? 'bg-gray-50 border-aluwind-green shadow-md ring-1 ring-aluwind-green'
                  : 'bg-white border-gray-200 hover:border-aluwind-green/40 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 bg-aluwind-light text-aluwind-dark flex items-center justify-center font-black mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.size}</h3>
              <p className="text-gray-600 text-xs mt-2 leading-relaxed">{item.desc}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-aluwind-green">
                <span>Select Capacity</span>
                <CheckCircle2 className="w-4 h-4 ml-auto text-aluwind-green" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-8 border border-gray-100 shadow-sm text-center space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Need Custom Tanker Deliveries or Contract Supply?</h3>
          <p className="text-gray-600 text-xs max-w-xl mx-auto">
            Contact our dedicated commercial sales dispatch in Harare or Bulawayo for scheduled weekly/monthly contract rates.
          </p>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="bg-aluwind-green hover:bg-aluwind-green/90 text-white font-extrabold text-[11px] uppercase tracking-widest px-6 py-3.5 transition inline-flex items-center space-x-2"
          >
            <span>Request Contract Quote ({selectedCapacity})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <DeliveryTracker />

        <DensityCalculator />

        <div className="mt-12">
          <ZeraBadge />
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct={`Bulk Diesel (${selectedCapacity})`} />
    </div>
  );
};

export default BulkFuel;
