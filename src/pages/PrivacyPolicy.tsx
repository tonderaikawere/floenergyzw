import React from 'react';
import AluwindZeraBadge from '../components/AluwindZeraBadge';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto w-full font-sans space-y-8">
      <div className="space-y-3">
        <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>
        <h1 className="text-4xl font-black text-[#0f1f17]">Privacy Policy & Data Compliance</h1>
      </div>

      <div className="bg-white p-8 border-l-4 border-[#4caf50] shadow-sm space-y-4 text-xs text-gray-700 leading-relaxed font-medium">
        <p>FLO Energy Zimbabwe (Ibhalabhala Private Limited) respects customer privacy and corporate commercial data security in accordance with ZERA licensing guidelines.</p>
        <p>Driver PIN records, odometer entries, and commercial transaction details are secured under strict encryption protocols.</p>
      </div>

      <AluwindZeraBadge />
    </div>
  );
};

export default PrivacyPolicy;
