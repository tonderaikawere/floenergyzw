import React from 'react';
import { Link } from 'react-router-dom';

export const AluwindFooter: React.FC = () => {
  return (
    <footer className="bg-[#0a140e] text-white pt-16 pb-8 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Title */}
        <h2 className="text-3xl font-black text-[#4caf50] tracking-tight">
          Contact FLO Energy
        </h2>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-xs">
          {/* Location 1: Harare */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white border-b border-white/10 pb-1">Harare Main Terminal</h4>
            <p className="text-gray-400 leading-relaxed">
              Donnybrook Station<br />
              Arcturus Road, Harare, Zimbabwe
            </p>
            <p className="text-gray-300">
              <span className="font-bold">Phone:</span> +263 77 224 5578<br />
              <span className="font-bold">Email:</span> <a href="mailto:inquiry@floenergy.net" className="hover:text-[#4caf50]">inquiry@floenergy.net</a>
            </p>
          </div>

          {/* Location 2: Bulawayo */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white border-b border-white/10 pb-1">Bulawayo Logistics Hub</h4>
            <p className="text-gray-400 leading-relaxed">
              Burnside & Ironbridge Stations<br />
              Bulawayo Industrial, Zimbabwe
            </p>
            <p className="text-gray-300">
              <span className="font-bold">Phone:</span> +263 71 221 3338<br />
              <span className="font-bold">Email:</span> <a href="mailto:sales1@floenergy.net" className="hover:text-[#4caf50]">sales1@floenergy.net</a>
            </p>
          </div>

          {/* Location 3: Commercial Dispatch */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white border-b border-white/10 pb-1">Commercial Bulk Dispatch</h4>
            <p className="text-gray-400 leading-relaxed">
              Metered Tanker Fleet<br />
              24/7 Logistics Control
            </p>
            <p className="text-gray-300">
              <span className="font-bold">Direct Hotline:</span> +263 77 224 5578<br />
              <span className="font-bold">Support:</span> <a href="mailto:support@floenergy.net" className="hover:text-[#4caf50]">support@floenergy.net</a>
            </p>
          </div>

          {/* Brand & Summary */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/flo/logo_fb.jpg"
                alt="FLO Energy Zimbabwe Logo"
                className="h-10 w-auto object-contain rounded-full shadow"
              />
              <span className="font-black text-lg text-white">FLO<span className="text-[#4caf50]">ENERGY</span></span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-normal">
              Through 12+ years FLO Energy has offered nationwide supply, storage, and metered assembly for a wide range of petroleum components.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 pt-4">
          <p>Created and maintained for FLO Energy Zimbabwe (Ibhalabhala Pvt Ltd). © {new Date().getFullYear()} All Rights Reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/faqs" className="hover:text-gray-300">FAQs</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AluwindFooter;
