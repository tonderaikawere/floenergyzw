import React, { useState } from 'react';
import { Search, X, Fuel, MapPin, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const siteLinks = [
    { title: 'Diesel 50ppm Bulk Delivery', category: 'Products', path: '/bulk-fuel' },
    { title: 'Unleaded Petrol E10', category: 'Products', path: '/services' },
    { title: 'Donnybrook Station (Harare)', category: 'Locations', path: '/locations' },
    { title: 'Burnside & Ironbridge Stations (Bulawayo)', category: 'Locations', path: '/locations' },
    { title: 'Commercial Fleet Card System', category: 'Services', path: '/fleet-card' },
    { title: 'ZERA Quality Assurance Testing', category: 'Compliance', path: '/about' },
  ];

  const results = siteLinks.filter(
    (l) => l.title.toLowerCase().includes(query.toLowerCase()) || l.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden border border-gray-100 p-6 space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
          <div className="flex items-center space-x-2 text-flo-purple font-black text-lg">
            <Search className="w-5 h-5" />
            <span>Search FLO Energy</span>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search fuels, stations, fleet cards..."
            className="w-full pl-4 pr-4 py-3.5 border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-flo-purple font-medium"
          />
        </div>

        <div className="space-y-2 max-h-64 overflow-y-auto">
          {results.map((r, idx) => (
            <Link
              key={idx}
              to={r.path}
              onClick={onClose}
              className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-xl transition text-xs font-semibold text-gray-800 border border-transparent hover:border-gray-200"
            >
              <span>{r.title}</span>
              <span className="text-[10px] uppercase font-bold text-flo-purple bg-flo-purple-subtle px-2 py-0.5 rounded-md">
                {r.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
