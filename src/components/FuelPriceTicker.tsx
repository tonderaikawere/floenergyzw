import React from 'react';
import { TrendingUp, ShieldCheck, Flame, Fuel, Droplet } from 'lucide-react';

export const FuelPriceTicker: React.FC = () => {
  const fuelRates = [
    { name: 'Diesel 50ppm (Bulk)', price: '$1.48 / Liter', change: 'ZERA Regulated', icon: Fuel },
    { name: 'Unleaded Petrol E10', price: '$1.52 / Liter', change: 'Clean Blend Guaranteed', icon: Droplet },
    { name: 'Industrial Fuel Oil (IFO)', price: 'Custom Commercial Rate', change: 'Tanker Delivery', icon: Flame },
    { name: 'LP Gas Cylinder Refill', price: '$1.85 / kg', change: 'Certified Pure Gas', icon: Flame },
  ];

  return (
    <div className="bg-flo-purple text-white border-y border-white/10 overflow-hidden py-3 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="hidden lg:flex items-center space-x-2 bg-flo-gold text-flo-dark font-extrabold text-xs uppercase px-3 py-1.5 rounded-lg shrink-0 mr-6 shadow">
          <TrendingUp className="w-4 h-4" />
          <span>Today's Fuel Rates</span>
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap text-sm">
            {fuelRates.concat(fuelRates).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full border border-white/15">
                  <Icon className="w-4 h-4 text-flo-gold" />
                  <span className="font-semibold text-white">{item.name}:</span>
                  <span className="font-bold text-flo-gold">{item.price}</span>
                  <span className="text-xs text-emerald-300 font-medium flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>({item.change})</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelPriceTicker;
