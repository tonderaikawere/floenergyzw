import React, { useState } from 'react';
import { Fuel, RefreshCw } from 'lucide-react';

export const AluwindDensityCalculator: React.FC = () => {
  const [observedTemp, setObservedTemp] = useState<number>(30);
  const [observedVolume, setObservedVolume] = useState<number>(40000);
  const [standardDensity] = useState<number>(0.840);

  const coef = 0.0007;
  const tempDiff = observedTemp - 20;
  const correctedVolume = Math.round(observedVolume * (1 - coef * tempDiff));
  const varianceLiters = observedVolume - correctedVolume;

  return (
    <div className="bg-white p-8 border-l-4 border-[#4caf50] shadow-sm font-sans my-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="bg-[#d4edda] p-3 text-[#2e7d32]">
          <Fuel className="w-6 h-6" />
        </div>
        <div>
          <span className="text-[11px] font-black text-[#2e7d32] uppercase tracking-wider">Industrial Fuel Volume Metering</span>
          <h3 className="text-xl font-black text-[#0f1f17]">Temperature & Volume Correction Calculator</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        <div className="space-y-4">
          <div>
            <label className="block font-bold text-gray-800 mb-1">Ambient Fuel Temperature (°C)</label>
            <input
              type="number"
              value={observedTemp}
              onChange={(e) => setObservedTemp(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 font-bold"
            />
          </div>
          <div>
            <label className="block font-bold text-gray-800 mb-1">Loaded Tanker Volume (Liters)</label>
            <input
              type="number"
              value={observedVolume}
              onChange={(e) => setObservedVolume(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 font-bold"
            />
          </div>
        </div>

        <div className="bg-[#0f1f17] text-white p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-[#4caf50] uppercase tracking-widest">Corrected Volume @ 20°C Standard</span>
            <div className="text-3xl font-black text-white">{correctedVolume.toLocaleString()} Liters</div>
          </div>
          <div className="text-xs text-gray-300 border-t border-white/10 pt-3 flex justify-between">
            <span>Thermal Variance:</span>
            <span className="font-bold text-[#4caf50]">{varianceLiters > 0 ? `+${varianceLiters}` : varianceLiters} L</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AluwindDensityCalculator;
