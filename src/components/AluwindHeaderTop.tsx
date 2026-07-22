import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const AluwindHeaderTop = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const utilLinks = [
    { label: 'Home', href: '/' },
    { label: 'Company', href: '/about' },
    { label: 'References', href: '/services' },
    { label: 'Sales and Delivery terms', href: '/fleet-card' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 text-xs py-2.5 px-6 hidden md:block font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-600">
        <div className="flex items-center space-x-6">
          <a href="mailto:inquiry@aluwind.com" className="flex items-center space-x-1.5 hover:text-aluwind-green transition font-medium">
            <Mail className="w-3.5 h-3.5 text-aluwind-green" />
            <span>inquiry@aluwind.com</span>
          </a>
          <Link to="/locations" className={`flex items-center space-x-1.5 transition font-medium ${isActive('/locations') ? 'text-aluwind-green' : 'hover:text-aluwind-green'}`}>
            <MapPin className="w-3.5 h-3.5 text-aluwind-green" />
            <span>Our locations</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4 text-[11px] uppercase tracking-wider font-semibold">
          {utilLinks.map((link, i) => (
            <React.Fragment key={link.href}>
              {i > 0 && <span className="text-gray-300">|</span>}
              <Link
                to={link.href}
                className={`transition ${isActive(link.href) ? 'text-aluwind-green' : 'text-gray-500 hover:text-aluwind-green'}`}
              >
                {link.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AluwindHeaderTop;


