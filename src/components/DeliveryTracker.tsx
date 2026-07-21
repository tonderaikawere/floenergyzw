import React, { useState } from 'react';
import { Truck, CheckCircle2, Clock, MapPin, Search } from 'lucide-react';

export const DeliveryTracker: React.FC = () => {
  const [waybill, setWaybill] = useState('');
  const [trackingData, setTrackingData] = useState<{
    id: string;
    destination: string;
    driver: string;
    status: string;
    volume: string;
    eta: string;
  } | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackingData({
      id: waybill || 'FLO-78921',
      destination: 'Chiredzi Agricultural Estate (Harare Dispatch)',
      driver: 'T. Moyo (Tanker #FL-401)',
      status: 'In Transit - En Route (Water Test Passed)',
      volume: '30,000 Liters Diesel 50ppm',
      eta: '45 Minutes',
    });
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md my-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
        <div className="bg-flo-gold/20 p-3 rounded-2xl text-flo-purple border border-flo-gold/30">
          <Truck className="w-6 h-6 text-flo-purple" />
        </div>
        <div>
          <span className="text-xs font-bold text-flo-purple uppercase tracking-wider">Live Dispatch Logistics</span>
          <h3 className="text-xl font-extrabold text-gray-900">Bulk Tanker Waybill Delivery Tracker</h3>
        </div>
      </div>

      <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={waybill}
            onChange={(e) => setWaybill(e.target.value)}
            placeholder="Enter FLO Waybill # (e.g. FLO-78921)"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-flo-purple"
          />
        </div>
        <button
          type="submit"
          className="flo-gold-gradient text-flo-dark font-extrabold text-xs uppercase px-6 py-3 rounded-xl shadow transition shrink-0"
        >
          Track Tanker Status
        </button>
      </form>

      {trackingData && (
        <div className="p-6 bg-flo-purple-subtle/40 rounded-2xl border border-flo-purple/10 space-y-4 animate-fade-in">
          <div className="flex justify-between items-center border-b border-flo-purple/10 pb-3">
            <span className="text-xs font-bold text-flo-purple">Waybill ID: {trackingData.id}</span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> {trackingData.status}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-gray-500">Destination:</span>
              <p className="font-bold text-gray-900">{trackingData.destination}</p>
            </div>
            <div>
              <span className="text-gray-500">Volume Cargo:</span>
              <p className="font-bold text-gray-900">{trackingData.volume}</p>
            </div>
            <div>
              <span className="text-gray-500">Estimated Arrival:</span>
              <p className="font-bold text-flo-purple">{trackingData.eta}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryTracker;
