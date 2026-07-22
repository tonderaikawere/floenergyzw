import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const AluwindNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'ENGINEERING', href: '/about' },
    { name: 'PRODUCTS', href: '/services' },
    { name: 'LOGISTICS', href: '/bulk-fuel' },
    { name: 'PROCESSES', href: '/faqs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`bg-white border-b border-gray-100 sticky top-0 z-50 font-sans transition-shadow duration-200 ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
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
                className={`text-[11px] font-bold tracking-widest hover:text-aluwind-green transition-colors duration-200 border-b-2 pb-1 ${
                  isActive(item.href)
                    ? 'text-aluwind-green border-aluwind-green'
                    : 'text-gray-600 border-transparent'
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
              className="bg-aluwind-green hover:bg-aluwind-green/90 text-white font-bold text-[11px] px-6 py-3 tracking-widest transition-colors duration-200 aluwind-btn"
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
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block text-[11px] font-bold tracking-widest py-3 border-b border-gray-100 last:border-0 hover:text-aluwind-green transition-colors ${
                isActive(item.href) ? 'text-aluwind-green' : 'text-gray-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/contact"
              className="block text-center bg-aluwind-green text-white font-bold text-[11px] py-3.5 tracking-widest hover:bg-aluwind-green/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AluwindNavbar;

