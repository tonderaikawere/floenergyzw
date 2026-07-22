import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AluwindZeraBadge: React.FC = () => {
  return (
    <div className="bg-white rounded-none p-6 border-l-4 border-[#4caf50] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
      <div className="flex items-center space-x-4">
        <div className="bg-[#d4edda] p-3 rounded-none text-[#2e7d32] shrink-0">
          <ShieldCheck className="w-8 h-8 text-[#2e7d32]" />
        </div>
        <div>
          <span className="text-[11px] font-black text-[#2e7d32] uppercase tracking-wider">Quality Standard Guarantee</span>
          <h4 className="text-lg font-black text-[#0f1f17]">ZERA Certified Water-Free Fuel Quality</h4>
          <p className="text-gray-600 text-xs mt-0.5">Strict laboratory testing for cetane rating, zero water contamination, and compliant ethanol ratio blending.</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-xs font-bold text-[#2e7d32] bg-[#d4edda] px-4 py-2 shrink-0">
        <CheckCircle2 className="w-4 h-4" />
        <span>100% Certified Clean</span>
      </div>
    </div>
  );
};

export default AluwindZeraBadge;
