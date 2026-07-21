import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Award, Fuel, Building2 } from 'lucide-react';

export const InduzyAboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Image Stack */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg"
              alt="FLO Energy Station Facility"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Induzy Experience Badge Overlay */}
          <div className="absolute -bottom-6 -right-6 bg-flo-dark text-white p-8 rounded-3xl border-4 border-white shadow-2xl space-y-1 text-center hidden sm:block">
            <div className="text-5xl font-black text-flo-gold">12+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-300">Years Active in Petroleum</div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-extrabold text-flo-purple uppercase tracking-widest bg-flo-purple-subtle px-3.5 py-1.5 rounded-full inline-block mb-3">
              ABOUT FLO ENERGY ZIMBABWE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">
              Leading Commercial Petroleum Supplier & Bulk Tanker Logistics
            </h2>
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            FLO Energy Zimbabwe (FLO Petroleum / Ibhalabhala Pvt Ltd) operates high-flow retail service stations and a dedicated bulk logistics fleet across Harare, Bulawayo, and major industrial hubs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-1">
              <div className="flex items-center space-x-2 text-flo-purple font-extrabold text-sm">
                <CheckCircle2 className="w-4 h-4 text-flo-emerald shrink-0" />
                <span>ZERA Certified Quality</span>
              </div>
              <p className="text-gray-600 text-xs">Strict water testing and certified cetane rating specs.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-1">
              <div className="flex items-center space-x-2 text-flo-purple font-extrabold text-sm">
                <CheckCircle2 className="w-4 h-4 text-flo-emerald shrink-0" />
                <span>24/7 Bulk Dispatch</span>
              </div>
              <p className="text-gray-600 text-xs">Metered 10,000L to 40,000L tanker fleet for farms and mines.</p>
            </div>
          </div>

          <div className="pt-2 flex items-center space-x-6">
            <Link
              to="/about"
              className="flo-gold-gradient text-flo-dark font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:brightness-105 transition inline-flex items-center space-x-2 border border-flo-gold/50"
            >
              <span>LEARN MORE ABOUT US</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InduzyAboutSection;
