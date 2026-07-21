import React from 'react';
import { Leaf, ShieldCheck, Zap, Droplet } from 'lucide-react';

export const EnvironmentalPolicy: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-900 to-flo-dark text-white rounded-3xl p-8 sm:p-12 border border-emerald-500/20 shadow-xl my-12">
      <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <Leaf className="w-4 h-4 text-emerald-400" />
          <span>Eco-Efficiency & Sustainability</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
          Committed to Cleaner Energy & Zero Contamination
        </h3>

        <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
          FLO Energy Zimbabwe prioritizes clean-burning Low Sulfur Diesel 50ppm and renewable Ethanol E10 blends that minimize carbon emissions and engine wear while strictly obeying ZERA environmental standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-semibold">
          <div className="flex items-center space-x-2 text-emerald-300 bg-white/5 p-3.5 rounded-xl border border-white/10">
            <Droplet className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Low Sulfur 50ppm Emissions Reduction</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-300 bg-white/5 p-3.5 rounded-xl border border-white/10">
            <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Ethanol E10 Biofuel Integration</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-300 bg-white/5 p-3.5 rounded-xl border border-white/10">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Spill & Leakage Prevention Protocol</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalPolicy;
