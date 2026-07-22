import React from 'react';
import { Download, FileText } from 'lucide-react';

export const AluwindReceiptSimulator: React.FC = () => {
  return (
    <div className="bg-[#0f1f17] text-white p-6 border-t-4 border-[#4caf50] space-y-4 font-sans my-4 text-xs">
      <div className="flex justify-between items-center border-b border-white/10 pb-3">
        <div className="flex items-center space-x-2 font-black text-[#4caf50]">
          <FileText className="w-5 h-5" />
          <span className="uppercase text-sm">Commercial Quotation Receipt Preview</span>
        </div>
        <button className="bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold px-3.5 py-1.5 uppercase text-[10px] tracking-wider transition inline-flex items-center space-x-1">
          <Download className="w-3.5 h-3.5" />
          <span>Simulate PDF</span>
        </button>
      </div>

      <div className="space-y-1 text-gray-300">
        <div className="flex justify-between"><span>Supplier:</span><span className="font-bold text-white">FLO Petroleum (Ibhalabhala Pvt Ltd)</span></div>
        <div className="flex justify-between"><span>Regulated Product:</span><span className="font-bold text-[#4caf50]">Diesel 50ppm (Bulk)</span></div>
        <div className="flex justify-between"><span>Standard Volume:</span><span className="font-bold text-white">10,000 Liters</span></div>
        <div className="flex justify-between border-t border-white/10 pt-2 text-sm font-black text-white">
          <span>Estimated Total (Excl VAT):</span>
          <span className="text-[#4caf50]">$14,800.00 USD</span>
        </div>
      </div>
    </div>
  );
};

export default AluwindReceiptSimulator;
