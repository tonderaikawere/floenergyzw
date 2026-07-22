import React from 'react';
import { CreditCard, ShieldCheck } from 'lucide-react';

export const AluwindFleetAnalytics: React.FC = () => {
  const fleetData = [
    { vehicle: 'Haulage Truck #01 (AEB-9012)', driver: 'K. Ndlovu', litersThisMonth: '4,250 L', status: 'Active (PIN Verified)' },
    { vehicle: 'Delivery Van #04 (AFG-4410)', driver: 'S. Chikore', litersThisMonth: '1,120 L', status: 'Active (PIN Verified)' },
    { vehicle: 'Mining Excavator #02 (RIG-8821)', driver: 'M. Sibanda', litersThisMonth: '8,900 L', status: 'Active (PIN Verified)' },
  ];

  return (
    <div className="bg-white p-8 border-l-4 border-[#388e3c] shadow-sm font-sans my-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="bg-[#d4edda] p-3 text-[#2e7d32]">
          <CreditCard className="w-6 h-6" />
        </div>
        <div>
          <span className="text-[11px] font-black text-[#2e7d32] uppercase tracking-wider">Fleet Telematics Control</span>
          <h3 className="text-xl font-black text-[#0f1f17]">Vehicle Fuel Consumption Telematics</h3>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        {fleetData.map((item, idx) => (
          <div key={idx} className="p-4 bg-gray-50 border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="font-black text-[#0f1f17] text-sm">{item.vehicle}</span>
              <p className="text-gray-500">Driver: <span className="font-bold text-gray-700">{item.driver}</span></p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-black text-[#2e7d32] bg-[#d4edda] px-3 py-1">{item.litersThisMonth}</span>
              <span className="text-emerald-700 font-bold flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1 text-[#4caf50]" /> {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AluwindFleetAnalytics;
