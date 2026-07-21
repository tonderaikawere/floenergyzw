import React from 'react';
import { BarChart3, ShieldCheck, Fuel, Truck, DollarSign } from 'lucide-react';

export const FleetAnalytics: React.FC = () => {
  const fleetData = [
    { vehicle: 'Haulage Truck #01 (AEB-9012)', driver: 'K. Ndlovu', litersThisMonth: '4,250 L', status: 'Active (PIN Ok)' },
    { vehicle: 'Delivery Van #04 (AFG-4410)', driver: 'S. Chikore', litersThisMonth: '1,120 L', status: 'Active (PIN Ok)' },
    { vehicle: 'Mining Excavator #02 (RIG-8821)', driver: 'M. Sibanda', litersThisMonth: '8,900 L', status: 'Active (PIN Ok)' },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md my-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="bg-flo-purple-subtle p-3 rounded-2xl text-flo-purple">
          <BarChart3 className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-bold text-flo-purple uppercase tracking-wider">Fleet Management Telematics</span>
          <h3 className="text-xl font-extrabold text-gray-900">Real-Time Vehicle Fuel Consumption Telematics</h3>
        </div>
      </div>

      <div className="space-y-3">
        {fleetData.map((item, idx) => (
          <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
            <div>
              <span className="font-bold text-gray-900 text-sm">{item.vehicle}</span>
              <p className="text-gray-500">Assigned Driver: <span className="font-semibold text-gray-700">{item.driver}</span></p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-extrabold text-flo-purple bg-flo-purple-subtle px-3 py-1 rounded-lg">{item.litersThisMonth}</span>
              <span className="text-emerald-600 font-bold flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1" /> {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetAnalytics;
