import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Fuel, ShieldCheck, ArrowRight, ExternalLink, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#12161f] text-white border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-none inline-block shadow">
              <img
                src="/images/flo/logo.svg"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://floenergy.net/wp-content/uploads/2018/05/Flo-1.png"; }}
                alt="FLO Energy Zimbabwe"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
              FLO Energy Zimbabwe (Ibhalabhala Pvt Ltd) is an established petroleum retailer and bulk fuel wholesaler supplying clean Diesel 50ppm, Unleaded Petrol, and Industrial Fuel Oils across Zimbabwe.
            </p>
            <div className="flex items-center space-x-2 text-[#ffb400] text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>ZERA Registered Petroleum Supplier</span>
            </div>
          </div>

          {/* Column 2: Industrial Offerings */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center space-x-2 border-b border-white/10 pb-2">
              <span className="w-2 h-2 bg-[#ffb400]"></span>
              <span>Our Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link to="/services" className="hover:text-[#ffb400] transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ffb400]" />
                  <span>Diesel 50ppm & E10 Petrol</span>
                </Link>
              </li>
              <li>
                <Link to="/bulk-fuel" className="hover:text-[#ffb400] transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ffb400]" />
                  <span>Bulk Tanker Logistics (10kL - 40kL)</span>
                </Link>
              </li>
              <li>
                <Link to="/fleet-card" className="hover:text-[#ffb400] transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ffb400]" />
                  <span>Commercial Fleet Card Control</span>
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-[#ffb400] transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ffb400]" />
                  <span>Harare & Bulawayo Terminals</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ffb400] transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ffb400]" />
                  <span>About FLO Energy History</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center space-x-2 border-b border-white/10 pb-2">
              <span className="w-2 h-2 bg-[#ffb400]"></span>
              <span>Contact & Dispatch</span>
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#ffb400] shrink-0 mt-0.5" />
                <span>Donnybrook, Harare & Burnside, Bulawayo, Zimbabwe</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#ffb400] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Adrian King: +263 77 224 5578</span>
                  <span>Nathan King: +263 71 221 3338</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#ffb400] shrink-0" />
                <a href="mailto:sales1@floenergy.net" className="hover:text-[#ffb400] transition">
                  sales1@floenergy.net
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 pt-1">
                <Clock className="w-4 h-4 text-[#ffb400] shrink-0 mt-0.5" />
                <span>Opening Hours: Mon - Sat 8.00 - 18.00 (24/7 Dispatch)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Official Portal */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center space-x-2 border-b border-white/10 pb-2">
              <span className="w-2 h-2 bg-[#ffb400]"></span>
              <span>Official Domain</span>
            </h4>
            <p className="text-gray-300 text-xs">
              Visit our corporate domain for official company announcements.
            </p>
            <a
              href="https://floenergy.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-3 border border-white/20 transition"
            >
              <span>https://floenergy.net</span>
              <ExternalLink className="w-4 h-4 text-[#ffb400]" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-white/5">
          <p>© {new Date().getFullYear()} FLO Energy Zimbabwe (Ibhalabhala Pvt Ltd). All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/faqs" className="hover:text-white transition">FAQs</Link>
            <Link to="/contact" className="hover:text-white transition">Customer Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
