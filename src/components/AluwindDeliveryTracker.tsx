import React from 'react';
import { Truck, CheckCircle2, MapPin } from 'lucide-react';

export const AluwindDeliveryTracker: React.FC = () => {
  const steps = [
    { title: 'Tanker Dispatch', time: '06:30 AM', status: 'Completed (Meter Calibrated)' },
    { title: 'In Transit via Highway', time: '09:15 AM', status: 'GPS Tracking Active' },
    { title: 'On-Site Discharge', time: '11:45 AM', status: 'Customer Flow Receipt Issued' },
  ];

  return (
    <div className="bg-white p-8 border-l-4 border-[#388e3c] shadow-sm font-sans my-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="bg-[#d4edda] p-3 text-[#2e7d32]">
          <Truck className="w-6 h-6" />
        </div>
        <div>
          <span className="text-[11px] font-black text-[#2e7d32] uppercase tracking-wider">Live Commercial Logistics</span>
          <h3 className="text-xl font-black text-[#0f1f17]">Bulk Tanker Waybill Telematics Tracking</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((st, idx) => (
          <div key={idx} className="p-4 bg-gray-50 border border-gray-200 space-y-2 text-xs">
            <div className="flex justify-between items-center text-[#2e7d32] font-black">
              <span>{st.title}</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-gray-500 block font-bold">{st.time}</span>
            <span className="text-gray-700 font-medium block">{st.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AluwindDeliveryTracker;
