import React, { useState } from 'react';
import { Mail, MapPin, Search, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const AluwindHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'SERVICES', href: '/services' },
    { name: 'PRODUCTS', href: '/bulk-fuel' },
    { name: 'LOGISTICS', href: '/fleet-card' },
    { name: 'LOCATIONS', href: '/locations' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'FAQS', href: '/faqs' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full font-sans bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#0f1f17] text-gray-300 text-[11px] py-1.5 px-4 font-medium border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="mailto:inquiry@floenergy.net" className="flex items-center space-x-1.5 hover:text-[#4caf50] transition">
              <Mail className="w-3 h-3 text-[#4caf50]" />
              <span>inquiry@floenergy.net</span>
            </a>
            <Link to="/locations" className="flex items-center space-x-1.5 hover:text-[#4caf50] transition">
              <MapPin className="w-3 h-3 text-[#4caf50]" />
              <span>Our Locations (Harare & Bulawayo)</span>
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-6 text-gray-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">Company</Link>
            <Link to="/services" className="hover:text-white transition">Solutions</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/flo/logo_fb.jpg"
              alt="FLO Energy Zimbabwe"
              className="h-10 w-auto object-contain rounded-full shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-wider text-[#0f1f17] leading-none">FLO<span className="text-[#4caf50]">ENERGY</span></span>
              <span className="text-[9px] font-extrabold tracking-widest text-gray-500 uppercase">PETROLEUM ZIMBABWE</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-xs font-bold tracking-wider transition-colors ${
                  isActive(item.href) ? 'text-[#4caf50] border-b-2 border-[#4caf50] pb-1' : 'text-gray-700 hover:text-[#4caf50]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-3">
            <Link
              to="/contact"
              className="bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold text-xs uppercase tracking-widest px-5 py-2.5 rounded-none shadow transition flex items-center space-x-2"
            >
              <span>CONTACT US</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#4caf50]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0f1f17] text-white px-4 pt-3 pb-6 space-y-2 border-t border-white/10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 text-sm font-extrabold tracking-wider hover:text-[#4caf50]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default AluwindHeader;
