import React from 'react';
import { TrendingUp, Calendar, ShieldCheck } from 'lucide-react';

export const PriceTrendChart: React.FC = () => {
  const history = [
    { month: 'Mar 2026', diesel: '$1.46', petrol: '$1.50' },
    { month: 'Apr 2026', diesel: '$1.47', petrol: '$1.51' },
    { month: 'May 2026', diesel: '$1.48', petrol: '$1.52' },
    { month: 'Jun 2026', diesel: '$1.48', petrol: '$1.52' },
    { month: 'Jul 2026 (Current)', diesel: '$1.48', petrol: '$1.52' },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md my-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="bg-flo-gold/20 p-3 rounded-2xl text-flo-purple border border-flo-gold/30">
          <TrendingUp className="w-6 h-6 text-flo-purple" />
        </div>
        <div>
          <span className="text-xs font-bold text-flo-purple uppercase tracking-wider">Regulatory Compliance</span>
          <h3 className="text-xl font-extrabold text-gray-900">ZERA Official Fuel Rate History (2026)</h3>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
        {history.map((h, idx) => (
          <div key={idx} className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 space-y-1">
            <span className="text-[11px] font-bold text-gray-500 uppercase">{h.month}</span>
            <div className="text-xs font-bold text-flo-purple">Diesel: {h.diesel}</div>
            <div className="text-xs font-bold text-flo-gold">Petrol: {h.petrol}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTrendChart;
