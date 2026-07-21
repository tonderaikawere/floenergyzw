import { useState } from 'react';
import { Menu, X, Phone, Mail, Clock, ShieldCheck, Fuel, Search, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
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
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'BULK FUEL', href: '/bulk-fuel' },
    { name: 'FLEET CARDS', href: '/fleet-card' },
    { name: 'LOCATIONS', href: '/locations' },
    { name: 'FAQS', href: '/faqs' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Tier 1: Induzy Dark Top Bar */}
      <div className="bg-[#1a1a1a] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#ffb400]" />
              <span>Opening Hours: Mon - Sat 8.00 - 18.00</span>
            </span>
            <span className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-3.5 h-3.5 text-[#ffb400]" />
              <span>Email: sales1@floenergy.net</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-3 text-gray-400">
              <a href="#" className="hover:text-[#ffb400] transition" aria-label="Facebook"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-[#ffb400] transition" aria-label="Twitter"><Twitter className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-[#ffb400] transition" aria-label="LinkedIn"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-[#ffb400] transition" aria-label="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
            </div>
            <a href="tel:+263772245578" className="flex items-center space-x-1.5 text-[#ffb400] font-bold">
              <Phone className="w-3.5 h-3.5" />
              <span>+263 77 224 5578</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2: Induzy Logo & 3 Info Columns Header */}
      <div className="bg-white py-4 px-4 hidden lg:block border-b border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              className="h-14 w-auto object-contain rounded-full shadow-sm"
              src="/images/flo/logo_fb.jpg"
              alt="FLO Energy Zimbabwe Facebook Logo"
            />
          </Link>

          {/* 3 Info Columns */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-full bg-[#ffb400]/15 text-[#ffb400] border border-[#ffb400]/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-flo-purple" />
              </div>
              <div className="text-xs">
                <span className="text-gray-400 font-semibold uppercase tracking-wider block">Our Location</span>
                <span className="font-extrabold text-gray-900">Donnybrook & Bulawayo</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-full bg-[#ffb400]/15 text-[#ffb400] border border-[#ffb400]/30 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-flo-purple" />
              </div>
              <div className="text-xs">
                <span className="text-gray-400 font-semibold uppercase tracking-wider block">Call Us 24/7</span>
                <span className="font-extrabold text-gray-900">+263 77 224 5578</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-full bg-[#ffb400]/15 text-[#ffb400] border border-[#ffb400]/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-flo-purple" />
              </div>
              <div className="text-xs">
                <span className="text-gray-400 font-semibold uppercase tracking-wider block">Working Hours</span>
                <span className="font-extrabold text-gray-900">Mon - Sat: 8am - 6pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3: Induzy Secondary Dark Navigation Bar */}
      <header className="bg-[#1f2532] sticky top-0 z-40 shadow-xl font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Logo View */}
            <div className="lg:hidden flex items-center">
              <Link to="/">
                <img
                  className="h-10 w-auto object-contain rounded-full border border-white/20 shadow-sm"
                  src="/images/flo/logo_fb.jpg"
                  alt="FLO Energy Zimbabwe Facebook Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-5 text-xs font-black tracking-wider transition-all border-b-2 ${
                    isActive(item.href)
                      ? 'text-[#ffb400] border-[#ffb400] bg-white/5 font-black'
                      : 'text-white border-transparent hover:text-[#ffb400] hover:bg-white/5'
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
                className="p-2 text-gray-300 hover:text-[#ffb400] transition"
                aria-label="Search site"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-[#ffb400] hover:bg-[#e09e00] text-[#12161f] font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-none shadow-md transition flex items-center space-x-2"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-white hover:text-[#ffb400] transition"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1a1a1a] border-t border-white/10 shadow-2xl">
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-black tracking-wider transition ${
                    isActive(item.href)
                      ? 'text-[#ffb400] bg-white/10'
                      : 'text-white hover:text-[#ffb400] hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsQuoteOpen(true);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-[#ffb400] text-[#12161f] font-black text-xs uppercase tracking-widest py-3.5 shadow-md"
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
