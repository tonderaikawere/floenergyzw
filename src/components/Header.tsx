import { useState } from 'react';
import { Menu, X, Phone, Mail, Clock, ShieldCheck, Fuel, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import QuoteModal from './QuoteModal';
import SearchModal from './SearchModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Locations', href: '/locations' },
    { name: 'Bulk Fuel', href: '/bulk-fuel' },
    { name: 'Fleet Cards', href: '/fleet-card' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-flo-dark text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1 text-flo-gold font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ZERA Certified Wholesaler & Retailer</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-flo-gold" />
              <span>Harare & Bulawayo Terminals</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="tel:+263772245578" className="flex items-center space-x-1 text-gray-300 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-flo-gold" />
              <span>+263 77 224 5578</span>
            </a>
            <a href="mailto:sales1@floenergy.net" className="flex items-center space-x-1 text-gray-300 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-flo-gold" />
              <span>sales1@floenergy.net</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <img
                  className="h-12 sm:h-14 w-auto object-contain transition group-hover:scale-105"
                  src="https://floenergy.net/wp-content/uploads/2018/05/Flo-1.png"
                  alt="FLO Energy Zimbabwe"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-semibold transition-all rounded-lg ${
                    isActive(item.href)
                      ? 'text-flo-purple bg-flo-purple-subtle font-bold'
                      : 'text-gray-700 hover:text-flo-purple hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
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
                className="hidden sm:flex items-center space-x-2 flo-gold-gradient text-flo-dark font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md hover:brightness-105 transition"
              >
                <Fuel className="w-4 h-4 text-flo-dark" />
                <span>Get Instant Quote</span>
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
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition ${
                    isActive(item.href)
                      ? 'text-flo-purple bg-flo-purple-subtle font-bold'
                      : 'text-gray-700 hover:text-flo-purple hover:bg-gray-50'
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
                  className="w-full flex items-center justify-center space-x-2 flo-gold-gradient text-flo-dark font-bold text-sm py-3 rounded-xl shadow-md"
                >
                  <Fuel className="w-4 h-4 text-flo-dark" />
                  <span>Get Instant Quote</span>
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
