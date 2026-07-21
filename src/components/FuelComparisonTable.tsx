import React from 'react';
import { ShieldCheck, Check, Fuel } from 'lucide-react';
import { FUEL_SPECS } from '../lib/fuelSpecs';

export const FuelComparisonTable: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md my-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="bg-flo-purple-subtle p-3 rounded-2xl text-flo-purple">
          <Fuel className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-bold text-flo-purple uppercase tracking-wider">Technical Specifications</span>
          <h3 className="text-2xl font-black text-gray-900">Petroleum Grade Specification Matrix</h3>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-gray-700 font-bold uppercase tracking-wider">
              <th className="p-4">Product Name</th>
              <th className="p-4">Max Sulfur</th>
              <th className="p-4">Standard Density</th>
              <th className="p-4">Cetane / Octane Rating</th>
              <th className="p-4">ZERA Standard</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Object.values(FUEL_SPECS).map((spec, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition">
                <td className="p-4 font-bold text-gray-900">{spec.name} ({spec.code})</td>
                <td className="p-4 text-flo-purple font-semibold">{spec.sulfurPpm} ppm max</td>
                <td className="p-4 text-gray-600">{spec.density}</td>
                <td className="p-4 font-semibold text-gray-800">{spec.cetaneOctane}</td>
                <td className="p-4">
                  <span className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <Check className="w-3.5 h-3.5 mr-1" /> Fully Certified
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FuelComparisonTable;
