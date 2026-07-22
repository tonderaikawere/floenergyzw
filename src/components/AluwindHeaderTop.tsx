import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AluwindHeaderTop = () => {
  return (
    <div className="bg-white border-b border-gray-200 text-xs py-2.5 px-6 hidden md:block font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-600">
        <div className="flex items-center space-x-6">
          <a href="mailto:inquiry@aluwind.com" className="flex items-center space-x-1.5 hover:text-aluwind-green transition font-medium">
            <Mail className="w-3.5 h-3.5 text-aluwind-green" />
            <span>inquiry@aluwind.com</span>
          </a>
          <Link to="/locations" className="flex items-center space-x-1.5 hover:text-aluwind-green transition font-medium">
            <MapPin className="w-3.5 h-3.5 text-aluwind-green" />
            <span>Our locations</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4 text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
          <Link to="/" className="hover:text-aluwind-green transition">Home</Link>
          <span className="text-gray-300">|</span>
          <Link to="/about" className="hover:text-aluwind-green transition">Company</Link>
          <span className="text-gray-300">|</span>
          <Link to="/services" className="hover:text-aluwind-green transition">References</Link>
          <span className="text-gray-300">|</span>
          <Link to="/fleet-card" className="hover:text-aluwind-green transition">Sales and Delivery terms</Link>
          <span className="text-gray-300">|</span>
          <Link to="/contact" className="hover:text-aluwind-green transition">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default AluwindHeaderTop;
