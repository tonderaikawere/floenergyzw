import React, { useState } from 'react';
import { Calculator, Fuel, ShieldCheck, ArrowRight, DollarSign, Percent } from 'lucide-react';
import QuoteModal from './QuoteModal';

export const FuelCalculator: React.FC = () => {
  const [fuelType, setFuelType] = useState('diesel');
  const [liters, setLiters] = useState(10000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pricePerLiter = fuelType === 'diesel' ? 1.48 : 1.52;
  const standardCost = liters * pricePerLiter;
  
  // Bulk discount calculation
  let discountRate = 0;
  if (liters >= 25000) discountRate = 0.06;
  else if (liters >= 10000) discountRate = 0.04;
  else if (liters >= 5000) discountRate = 0.02;

  const savings = standardCost * discountRate;
  const estimatedCost = standardCost - savings;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-flo-purple/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-flo-purple-subtle/50 rounded-full blur-3xl -z-0"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Input Section */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-flo-purple-subtle text-flo-purple px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive Bulk Estimator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-flo-purple">
              Calculate Your Bulk Fuel Savings
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Select your required petroleum grade and volume for an instant commercial rate estimate.
            </p>
          </div>

          <div className="space-y-4">
            {/* Fuel Type Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                Fuel Grade
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFuelType('diesel')}
                  className={`py-3 px-4 rounded-xl font-bold text-sm border flex items-center justify-center space-x-2 transition ${
                    fuelType === 'diesel'
                      ? 'bg-flo-purple text-white border-flo-purple shadow-md'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Fuel className="w-4 h-4" />
                  <span>Diesel 50ppm</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFuelType('petrol')}
                  className={`py-3 px-4 rounded-xl font-bold text-sm border flex items-center justify-center space-x-2 transition ${
                    fuelType === 'petrol'
                      ? 'bg-flo-purple text-white border-flo-purple shadow-md'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <Fuel className="w-4 h-4" />
                  <span>Unleaded E10</span>
                </button>
              </div>
            </div>

            {/* Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Required Volume (Liters)
                </label>
                <span className="text-lg font-extrabold text-flo-purple bg-flo-purple-subtle px-3 py-1 rounded-lg">
                  {liters.toLocaleString()} Liters
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={liters}
                onChange={(e) => setLiters(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-flo-purple"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1,000 L</span>
                <span>25,000 L</span>
                <span>50,000 L+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Box */}
        <div className="lg:col-span-5 bg-flo-dark text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative border border-white/10">
          <div className="flex justify-between items-start border-b border-white/10 pb-4">
            <div>
              <span className="text-xs text-gray-400 uppercase font-semibold">Estimated Quote</span>
              <div className="text-3xl font-black text-flo-gold mt-1">
                ${estimatedCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            {discountRate > 0 && (
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 flex items-center space-x-1">
                <Percent className="w-3.5 h-3.5" />
                <span>{(discountRate * 100).toFixed(0)}% Discount</span>
              </span>
            )}
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Standard Market Rate:</span>
              <span className="line-through text-gray-400">${standardCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-emerald-400 font-semibold">
              <span>Bulk Order Savings:</span>
              <span>-${savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-gray-300 pt-2 border-t border-white/10">
              <span>ZERA Water Test & Cert:</span>
              <span className="text-emerald-400 font-medium flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1" /> Included Free
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-4 flo-gold-gradient text-flo-dark font-extrabold text-sm rounded-xl shadow-lg hover:brightness-110 transition flex items-center justify-center space-x-2"
          >
            <span>Lock In This Rate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProduct={fuelType === 'diesel' ? 'Bulk Diesel 50ppm' : 'Unleaded Petrol E10'}
      />
    </div>
  );
};

export default FuelCalculator;
