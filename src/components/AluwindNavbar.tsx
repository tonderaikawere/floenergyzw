import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const AluwindNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'ENGINEERING', href: '/about' },
    { name: 'PRODUCTS', href: '/services' },
    { name: 'LOGISTICS', href: '/bulk-fuel' },
    { name: 'PROCESSES', href: '/faqs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-2xl font-black tracking-tight text-gray-800">ALU</span>
            <span className="text-2xl font-black tracking-tight text-aluwind-green">WIND</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-[11px] font-bold tracking-widest hover:text-aluwind-green transition-colors duration-200 ${
                  isActive(item.href) ? 'text-aluwind-green' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-aluwind-green hover:bg-aluwind-green/90 text-white font-bold text-[11px] px-6 py-3 tracking-widest transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-aluwind-green p-2 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block text-[11px] font-bold tracking-widest py-2 hover:text-aluwind-green transition-colors ${
                isActive(item.href) ? 'text-aluwind-green' : 'text-gray-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block text-center bg-aluwind-green text-white font-bold text-[11px] py-3 tracking-widest hover:bg-aluwind-green/90 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default AluwindNavbar;
