import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AluwindSearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const siteLinks = [
    { title: 'Diesel 50ppm Bulk Tanker Delivery', category: 'Products', path: '/bulk-fuel' },
    { title: 'Unleaded Petrol E10 Blend', category: 'Products', path: '/services' },
    { title: 'Donnybrook Station (Harare)', category: 'Locations', path: '/locations' },
    { title: 'Burnside Station (Bulawayo)', category: 'Locations', path: '/locations' },
    { title: 'Commercial Fleet Card System', category: 'Services', path: '/fleet-card' },
    { title: 'ZERA Quality Assurance Standards', category: 'Compliance', path: '/about' },
  ];

  const results = siteLinks.filter(
    (l) => l.title.toLowerCase().includes(query.toLowerCase()) || l.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-white border-t-8 border-[#4caf50] shadow-2xl max-w-xl w-full p-6 space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <div className="flex items-center space-x-2 text-[#0f1f17] font-black text-base uppercase">
            <Search className="w-5 h-5 text-[#4caf50]" />
            <span>Search FLO Energy Solutions</span>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        <input
          type="text"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to search fuels, stations, fleet cards..."
          className="w-full p-3.5 border border-gray-300 text-sm focus:ring-2 focus:ring-[#4caf50] font-medium"
        />

        <div className="space-y-2 max-h-64 overflow-y-auto">
          {results.map((r, idx) => (
            <Link
              key={idx}
              to={r.path}
              onClick={onClose}
              className="flex justify-between items-center p-3 hover:bg-[#d4edda]/40 text-xs font-bold text-gray-900 border border-gray-100"
            >
              <span>{r.title}</span>
              <span className="text-[10px] uppercase font-extrabold text-[#2e7d32] bg-[#d4edda] px-2 py-0.5">
                {r.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AluwindSearchModal;
