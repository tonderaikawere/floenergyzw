import React from 'react';
import { TrendingUp, ShieldCheck, Fuel, Droplet, Flame } from 'lucide-react';

export const AluwindPriceTicker: React.FC = () => {
  const fuelRates = [
    { name: 'Diesel 50ppm (Bulk)', price: '$1.48 / Liter', change: 'ZERA Regulated', icon: Fuel },
    { name: 'Unleaded Petrol E10', price: '$1.52 / Liter', change: 'Clean Blend Guaranteed', icon: Droplet },
    { name: 'Industrial Fuel Oil (IFO)', price: 'Custom Commercial Rate', change: 'Tanker Delivery', icon: Flame },
    { name: 'LP Gas Cylinder Refill', price: '$1.85 / kg', change: 'Certified Pure Gas', icon: Flame },
  ];

  return (
    <div className="bg-[#0a140e] text-white border-y border-white/10 py-2.5 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="hidden lg:flex items-center space-x-2 bg-[#4caf50] text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 shrink-0 mr-6 shadow">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>DAILY ZERA RATES</span>
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap text-xs">
            {fuelRates.concat(fuelRates).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="inline-flex items-center space-x-2 bg-white/5 px-3.5 py-1 border border-white/10">
                  <Icon className="w-3.5 h-3.5 text-[#4caf50]" />
                  <span className="font-bold text-gray-200">{item.name}:</span>
                  <span className="font-extrabold text-[#4caf50]">{item.price}</span>
                  <span className="text-[10px] text-gray-400 font-medium flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-[#4caf50]" />
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

export default AluwindPriceTicker;
