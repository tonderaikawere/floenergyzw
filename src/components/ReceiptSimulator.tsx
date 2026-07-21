import React from 'react';
import { FileText, Download, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ReceiptSimulatorProps {
  product: string;
  volume: string;
  location: string;
  totalEst: string;
}

export const ReceiptSimulator: React.FC<ReceiptSimulatorProps> = ({
  product,
  volume,
  location,
  totalEst,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-gray-800 space-y-4 text-xs font-mono">
      <div className="flex justify-between items-center border-b border-gray-300 pb-3">
        <div>
          <h4 className="font-bold text-sm text-flo-purple font-sans">FLO ENERGY ZIMBABWE (PVT) LTD</h4>
          <p className="text-gray-500">Official Commercial Quote Summary</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500">Quote Reference:</p>
          <span className="font-bold text-gray-900">FLO-Q-{Math.floor(100000 + Math.random() * 900000)}</span>
        </div>
      </div>

      <div className="space-y-1.5 font-sans text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600">Product Grade:</span>
          <span className="font-bold text-gray-900">{product}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Required Quantity:</span>
          <span className="font-bold text-gray-900">{volume} Liters</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Destination:</span>
          <span className="font-bold text-gray-900">{location}</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-gray-200 text-sm">
          <span className="font-bold text-flo-purple">Estimated Total:</span>
          <span className="font-extrabold text-flo-purple">{totalEst}</span>
        </div>
      </div>

      <div className="flex items-center space-x-1 text-emerald-600 font-sans font-semibold text-[11px]">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Includes ZERA Water Test & Meter Calibration Certificate</span>
      </div>
    </div>
  );
};

export default ReceiptSimulator;
