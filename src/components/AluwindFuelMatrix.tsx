import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const AluwindFuelMatrix: React.FC = () => {
  const specs = [
    { property: 'Sulfur Content', diesel: '50ppm Max', petrol: 'N/A', ifo: '1.0% Max' },
    { property: 'Cetane Index', diesel: '51 Min', petrol: 'N/A', ifo: 'N/A' },
    { property: 'Density @ 20°C', diesel: '0.840 g/ml', petrol: '0.745 g/ml', ifo: '0.940 g/ml' },
    { property: 'Ethanol Blend Ratio', diesel: '0%', petrol: '10% E10', ifo: '0%' },
    { property: 'Water Content', diesel: '< 0.01%', petrol: '< 0.01%', ifo: '< 0.05%' },
  ];

  return (
    <div className="bg-white p-8 border-l-4 border-[#4caf50] shadow-sm font-sans my-8 space-y-4">
      <h3 className="text-xl font-black text-[#0f1f17]">Petroleum Product Specification Matrix</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#0f1f17] text-white uppercase font-extrabold">
            <tr>
              <th className="p-3">Specification Property</th>
              <th className="p-3 text-[#4caf50]">Diesel 50ppm</th>
              <th className="p-3">Unleaded E10</th>
              <th className="p-3">Industrial Fuel Oil (IFO)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-800 font-medium">
            {specs.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3 font-bold">{row.property}</td>
                <td className="p-3 text-[#2e7d32] font-black">{row.diesel}</td>
                <td className="p-3">{row.petrol}</td>
                <td className="p-3">{row.ifo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AluwindFuelMatrix;
