import React from 'react';
import { Fuel, Clock, Truck, Flame, CreditCard } from 'lucide-react';

interface StationFilterTabsProps {
  selectedAmenity: string;
  onSelectAmenity: (amenity: string) => void;
}

export const StationFilterTabs: React.FC<StationFilterTabsProps> = ({ selectedAmenity, onSelectAmenity }) => {
  const amenities = [
    { id: 'All', label: 'All Stations', icon: Fuel },
    { id: 'Diesel 50ppm', label: 'Diesel 50ppm', icon: Fuel },
    { id: 'High-Flow Pumps', label: 'High-Flow Pumps', icon: Truck },
    { id: 'LPG Exchange', label: 'LPG Exchange', icon: Flame },
    { id: 'Fleet Cards', label: 'Fleet Cards', icon: CreditCard },
  ];

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {amenities.map((item) => {
        const Icon = item.icon;
        const isActive = selectedAmenity === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelectAmenity(item.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
              isActive
                ? 'bg-flo-purple text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-flo-gold' : 'text-flo-purple'}`} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default StationFilterTabs;
