import React from 'react';
import { ShieldCheck, Award, CheckCircle, Flame } from 'lucide-react';

export const ZeraBadge: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center space-x-4">
        <div className="bg-flo-gold/20 p-3 rounded-2xl text-flo-purple border border-flo-gold/40 shrink-0">
          <ShieldCheck className="w-8 h-8 text-flo-purple" />
        </div>
        <div>
          <span className="text-xs font-bold text-flo-purple uppercase tracking-wider">Quality Standard Guarantee</span>
          <h4 className="text-lg font-black text-gray-900">ZERA Certified Water-Free Petroleum</h4>
          <p className="text-gray-600 text-xs mt-0.5">Tested for cetane rating, zero water contamination, and precise ethanol blend ratios.</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200/60 shrink-0">
        <CheckCircle className="w-4 h-4" />
        <span>100% Verified Quality</span>
      </div>
    </div>
  );
};

export default ZeraBadge;
