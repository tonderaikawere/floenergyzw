import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const AluwindContactSection = () => {
  return (
    <section className="py-20 bg-aluwind-dark text-white font-sans border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-extrabold text-white mb-12">Contact Aluwind</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Denmark */}
          <div>
            <h3 className="text-xs font-bold text-aluwind-green uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Denmark</h3>
            <div className="space-y-3">
              <p className="text-xs text-gray-400 flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-aluwind-green shrink-0 mt-0.5" />
                <span>Nordkystvej 30,<br />DK-9220 Aalborg Ø</span>
              </p>
              <p className="text-xs text-gray-400 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-aluwind-green shrink-0" />
                <a href="tel:+4592118877" className="hover:text-white transition">+45 9211 8877</a>
              </p>
              <p className="text-xs text-gray-400 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-aluwind-green shrink-0" />
                <a href="mailto:inquiry@aluwind.com" className="hover:text-white transition">inquiry@aluwind.com</a>
              </p>
            </div>
          </div>

          {/* Poland */}
          <div>
            <h3 className="text-xs font-bold text-aluwind-green uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Poland</h3>
            <div className="space-y-3">
              <p className="text-xs text-gray-400 flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-aluwind-green shrink-0 mt-0.5" />
                <span>Ul. Logistyczna 8, Bielany Wroclawskie,<br />PL 55-040 Kobierzyce</span>
              </p>
              <p className="text-xs text-gray-400 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-aluwind-green shrink-0" />
                <a href="tel:+48554990289" className="hover:text-white transition">+48 554 990 289</a>
              </p>
              <p className="text-xs text-gray-400 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-aluwind-green shrink-0" />
                <a href="mailto:inquiry@aluwind.com" className="hover:text-white transition">inquiry@aluwind.com</a>
              </p>
            </div>
          </div>

          {/* China */}
          <div>
            <h3 className="text-xs font-bold text-aluwind-green uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">China</h3>
            <div className="space-y-3">
              <p className="text-xs text-gray-400 flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-aluwind-green shrink-0 mt-0.5" />
                <span>Building 11-15, YF-15, No. 281<br />Longli Road, Jiangmen</span>
              </p>
              <p className="text-xs text-gray-400 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-aluwind-green shrink-0" />
                <a href="tel:+867503855597" className="hover:text-white transition">+86 750 3855 597</a>
              </p>
              <p className="text-xs text-gray-400 flex items-center space-x-2">
                <Mail className="w-4 h-4 text-aluwind-green shrink-0" />
                <a href="mailto:inquiry@aluwind.com" className="hover:text-white transition">inquiry@aluwind.com</a>
              </p>
            </div>
          </div>

          {/* Branding Column */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-xl font-black tracking-tight text-white">ALU</span>
                <span className="text-xl font-black tracking-tight text-aluwind-green">WIND</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Through 20 years Aluwind has offered worldwide production, manufacturing and assembly for a wide range of offshore wind industry components.
              </p>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-aluwind-green transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-aluwind-green transition-colors" aria-label="Mail">
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluwindContactSection;
