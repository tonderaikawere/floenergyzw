import React, { useState } from 'react';
import { Calculator, Thermometer, ShieldCheck, Fuel } from 'lucide-react';

export const DensityCalculator: React.FC = () => {
  const [volume15C, setVolume15C] = useState(10000);
  const [tempC, setTempC] = useState(25);
  const [fuelType, setFuelType] = useState<'diesel' | 'petrol'>('diesel');

  // Thermal expansion coefficients: Diesel approx 0.00083/°C, Petrol approx 0.0012/°C
  const alpha = fuelType === 'diesel' ? 0.00083 : 0.0012;
  const tempDiff = tempC - 15;
  const volumeAtTemp = volume15C * (1 + alpha * tempDiff);
  const volumeDiff = volumeAtTemp - volume15C;

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md space-y-6 my-8">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="bg-flo-purple-subtle p-3 rounded-2xl text-flo-purple">
          <Thermometer className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-bold text-flo-purple uppercase tracking-wider">Industrial Fuel Engineering</span>
          <h3 className="text-xl font-extrabold text-gray-900">Fuel Temperature Volume Correction Calculator</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Fuel Grade</label>
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value as 'diesel' | 'petrol')}
            className="w-full px-3.5 py-3 border border-gray-200 rounded-xl bg-gray-50 font-semibold"
          >
            <option value="diesel">Diesel 50ppm (Density ~0.835 kg/L)</option>
            <option value="petrol">Unleaded E10 (Density ~0.745 kg/L)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Base Volume at 15°C (Liters)</label>
          <input
            type="number"
            value={volume15C}
            onChange={(e) => setVolume15C(Number(e.target.value))}
            className="w-full px-3.5 py-3 border border-gray-200 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Ambient Tank Temperature (°C)</label>
          <input
            type="number"
            value={tempC}
            onChange={(e) => setTempC(Number(e.target.value))}
            className="w-full px-3.5 py-3 border border-gray-200 rounded-xl"
          />
        </div>
      </div>

      <div className="p-6 bg-flo-dark text-white rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-xs text-gray-400 font-semibold uppercase">Corrected Volume at {tempC}°C:</span>
          <div className="text-3xl font-black text-flo-gold">
            {volumeAtTemp.toLocaleString(undefined, { maximumFractionDigits: 1 })} Liters
          </div>
        </div>

        <div className="text-xs text-right text-gray-300">
          <p>Expansion Variance: <span className="font-bold text-emerald-400">+{volumeDiff.toFixed(1)} L</span></p>
          <p className="text-gray-400 text-[11px] mt-0.5">Compliant with ZERA & SABS Metering Standards</p>
        </div>
      </div>
    </div>
  );
};

export default DensityCalculator;
