import { useState } from 'react';
import { Menu, X, Phone, Mail, Clock, ShieldCheck, Fuel, Search, MapPin, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import QuoteModal from './QuoteModal';
import SearchModal from './SearchModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICES', href: '/services' },
    { name: 'BULK FUEL', href: '/bulk-fuel' },
    { name: 'FLEET CARDS', href: '/fleet-card' },
    { name: 'LOCATIONS', href: '/locations' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'FAQS', href: '/faqs' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Induzy Top Info Bar */}
      <div className="bg-flo-dark text-white text-xs py-2.5 px-4 border-b border-white/10 hidden lg:block font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-flo-gold" />
              <span>Working Hours: Mon - Sat 07:00 - 18:00 (24/7 Bulk Dispatch)</span>
            </span>
            <span className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-flo-gold" />
              <span>Harare & Bulawayo Terminals</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="tel:+263772245578" className="flex items-center space-x-2 text-gray-300 hover:text-flo-gold transition">
              <Phone className="w-3.5 h-3.5 text-flo-gold" />
              <span className="font-bold">+263 77 224 5578</span>
            </a>
            <a href="mailto:sales1@floenergy.net" className="flex items-center space-x-2 text-gray-300 hover:text-flo-gold transition">
              <Mail className="w-3.5 h-3.5 text-flo-gold" />
              <span>sales1@floenergy.net</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Induzy Header */}
      <header className="bg-white sticky top-0 z-40 border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group py-2">
                <img
                  className="h-12 sm:h-14 w-auto object-contain"
                  src="https://floenergy.net/wp-content/uploads/2018/05/Flo-1.png"
                  alt="FLO Energy Zimbabwe"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3.5 py-2 text-xs font-black tracking-wider transition-all rounded-lg ${
                    isActive(item.href)
                      ? 'text-flo-purple bg-flo-purple-subtle font-extrabold border-b-2 border-flo-purple'
                      : 'text-gray-800 hover:text-flo-purple hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Search */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-xl text-gray-700 hover:text-flo-purple hover:bg-gray-100 transition"
                aria-label="Search site"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="hidden sm:flex items-center space-x-2 flo-gold-gradient text-flo-dark font-black text-xs uppercase tracking-widest px-5 py-3.5 rounded-xl shadow-md hover:brightness-105 transition border border-flo-gold/50"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2.5 rounded-xl text-gray-700 hover:text-flo-purple hover:bg-gray-100 transition"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-2xl">
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-black tracking-wider transition ${
                    isActive(item.href)
                      ? 'text-flo-purple bg-flo-purple-subtle'
                      : 'text-gray-800 hover:text-flo-purple hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsQuoteOpen(true);
                  }}
                  className="w-full flex items-center justify-center space-x-2 flo-gold-gradient text-flo-dark font-black text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-md"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quote & Search Modals */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
