import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuelPriceTicker from '../components/FuelPriceTicker';
import QuoteModal from '../components/QuoteModal';
import ZeraBadge from '../components/ZeraBadge';
import DensityCalculator from '../components/DensityCalculator';
import DeliveryTracker from '../components/DeliveryTracker';
import { Truck, Fuel, ShieldCheck, CheckCircle2, ArrowRight, Shield, Award, Clock } from 'lucide-react';

export const BulkFuel: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState('20,000 Liters');

  const tankerSizes = [
    { size: '10,000 Liters', desc: 'Ideal for agricultural farms, medium commercial fleets, and back-up generator tanks.' },
    { size: '20,000 Liters', desc: 'Optimal for mining sites, construction projects, and high-capacity transport hubs.' },
    { size: '40,000 Liters', desc: 'Heavy industrial tanker load with maximum volume price discounts.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <FuelPriceTicker />

      {/* Bulk Fuel Banner */}
      <section className="flo-hero-gradient text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-flo-gold text-flo-dark text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center space-x-1">
              <Truck className="w-4 h-4" />
              <span>FLO Commercial Logistics</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white">
              Bulk Fuel Tanker Delivery & Storage
            </h1>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              Nationwide on-site fuel dispatch. Guaranteed clean, dry Diesel 50ppm and Petrol delivered directly to your commercial storage facilities.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="flo-gold-gradient text-flo-dark font-extrabold text-sm uppercase px-6 py-3.5 rounded-xl shadow-lg hover:brightness-105 transition inline-flex items-center space-x-2"
              >
                <span>Order Bulk Fuel Tanker</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://floenergy.net/wp-content/uploads/2020/06/Flo2.jpg"
              alt="FLO Fuel Station Tanker"
              className="rounded-2xl border-2 border-white/20 shadow-2xl h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tanker Fleet Selection */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-flo-purple">Metered Bulk Tanker Fleet</h2>
          <p className="text-gray-600 text-sm mt-1">
            Every FLO fuel tanker is equipped with calibrated flow meters and multi-stage fuel filtration systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tankerSizes.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCapacity(item.size)}
              className={`cursor-pointer rounded-2xl p-6 border transition-all ${
                selectedCapacity === item.size
                  ? 'bg-white border-flo-purple shadow-xl ring-2 ring-flo-purple'
                  : 'bg-white border-gray-200 hover:border-flo-purple/40 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 bg-flo-purple-subtle text-flo-purple rounded-xl flex items-center justify-center font-black mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">{item.size}</h3>
              <p className="text-gray-600 text-xs mt-2 leading-relaxed">{item.desc}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-flo-purple">
                <span>Select Capacity</span>
                <CheckCircle2 className="w-4 h-4 ml-auto text-flo-emerald" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-md text-center space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Need Custom Tanker Deliveries or Contract Supply?</h3>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Contact our dedicated commercial sales dispatch in Harare or Bulawayo for scheduled weekly/monthly contract rates.
          </p>
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="flo-gold-gradient text-flo-dark font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow-md inline-flex items-center space-x-2"
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
