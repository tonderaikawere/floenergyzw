import React from 'react';
import { TrendingUp, ShieldCheck } from 'lucide-react';

export const AluwindPriceTrend: React.FC = () => {
  const trendData = [
    { period: 'Jan 2026', diesel: '$1.46', petrol: '$1.50' },
    { period: 'Mar 2026', diesel: '$1.47', petrol: '$1.51' },
    { period: 'May 2026', diesel: '$1.48', petrol: '$1.52' },
    { period: 'Current ZERA', diesel: '$1.48', petrol: '$1.52' },
  ];

  return (
    <div className="bg-white p-8 border-l-4 border-[#4caf50] shadow-sm font-sans my-8 space-y-4">
      <div className="flex justify-between items-center border-b border-gray-100 pb-3">
        <div className="flex items-center space-x-2 font-black text-[#0f1f17]">
          <TrendingUp className="w-5 h-5 text-[#4caf50]" />
          <span className="uppercase text-base">ZERA Regulated Fuel Price History</span>
        </div>
        <div className="flex items-center space-x-1 text-xs font-bold text-[#2e7d32] bg-[#d4edda] px-3 py-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Official Benchmark</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        {trendData.map((d, idx) => (
          <div key={idx} className="p-4 bg-gray-50 border border-gray-200 text-center space-y-1">
            <span className="font-bold text-gray-500 block">{d.period}</span>
            <div className="font-black text-[#2e7d32]">Diesel 50ppm: {d.diesel}</div>
            <div className="font-bold text-gray-800">Petrol E10: {d.petrol}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AluwindPriceTrend;
