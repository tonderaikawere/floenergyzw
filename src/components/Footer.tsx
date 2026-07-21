import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Fuel, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-flo-dark text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="bg-white/90 p-3 rounded-xl inline-block">
              <img
                src="https://floenergy.net/wp-content/uploads/2018/05/Flo-1.png"
                alt="FLO Energy Zimbabwe"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              FLO Energy Zimbabwe (FLO Petroleum) is a leading fuel sales and bulk energy solutions company dedicated to powering transport, agriculture, mining, and industry across Zimbabwe.
            </p>
            <div className="flex items-center space-x-2 text-flo-gold text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>ZERA Registered Petroleum Retailer & Wholesaler</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-flo-gold"></span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/services" className="hover:text-flo-gold transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-flo-gold" />
                  <span>Petroleum Products & Services</span>
                </Link>
              </li>
              <li>
                <Link to="/bulk-fuel" className="hover:text-flo-gold transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-flo-gold" />
                  <span>Bulk Fuel Delivery Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-flo-gold transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-flo-gold" />
                  <span>Service Station Network</span>
                </Link>
              </li>
              <li>
                <Link to="/fleet-card" className="hover:text-flo-gold transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-flo-gold" />
                  <span>Commercial Fleet Cards</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-flo-gold transition flex items-center space-x-2">
                  <ArrowRight className="w-3.5 h-3.5 text-flo-gold" />
                  <span>About FLO Energy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-flo-gold"></span>
              <span>Contact Us</span>
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-flo-gold shrink-0 mt-0.5" />
                <span>Donnybrook, Harare & Burnside, Bulawayo, Zimbabwe</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-flo-gold shrink-0" />
                <div className="flex flex-col">
                  <span>Adrian King: +263 77 224 5578</span>
                  <span>Nathan King: +263 71 221 3338</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-flo-gold shrink-0" />
                <a href="mailto:sales1@floenergy.net" className="hover:text-flo-gold transition">
                  sales1@floenergy.net
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Official Portal */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-flo-gold"></span>
              <span>Official Website</span>
            </h4>
            <p className="text-gray-300 text-sm">
              Visit our primary corporate web domain for official announcements and customer portals.
            </p>
            <a
              href="https://floenergy.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-4 py-3 rounded-xl border border-white/20 transition"
            >
              <span>https://floenergy.net</span>
              <ExternalLink className="w-4 h-4 text-flo-gold" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} FLO Energy Zimbabwe. All Rights Reserved.</p>
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
