import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Check, ArrowRight, Award, Fuel, Building2 } from 'lucide-react';

export const InduzyAboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Image Stack */}
        <div className="lg:col-span-6 relative">
          <div className="relative overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/images/flo/station1.svg"
              alt="FLO Energy Station Facility"
              className="w-full h-[460px] object-cover"
            />
          </div>

          {/* Induzy Yellow Experience Badge Overlay */}
          <div className="absolute -bottom-6 -right-6 bg-[#ffb400] text-[#12161f] p-8 shadow-2xl border-4 border-white text-center hidden sm:block">
            <div className="text-5xl font-black">12+</div>
            <div className="text-xs font-black uppercase tracking-widest mt-1">Years Of Experience</div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-black text-[#ffb400] uppercase tracking-widest bg-[#1f2532] px-3.5 py-1.5 inline-block mb-3">
              // ABOUT FLO ENERGY ZIMBABWE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-gray-900 leading-tight">
              12+ Years Of Experience In Petroleum & Industrial Supply
            </h2>
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
            FLO Energy Zimbabwe (Ibhalabhala Private Limited) operates fuel service stations and a dedicated bulk petroleum logistics fleet in Harare, Bulawayo, and commercial mining hubs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-[#ffb400] text-[#12161f] flex items-center justify-center font-bold shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-gray-900">ZERA Certified Quality</h4>
                <p className="text-gray-600 text-xs mt-0.5">Strict water testing and certified cetane rating specs.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-[#ffb400] text-[#12161f] flex items-center justify-center font-bold shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-gray-900">24/7 Bulk Dispatch</h4>
                <p className="text-gray-600 text-xs mt-0.5">Metered 10,000L to 40,000L tanker fleet for farms and mines.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-[#ffb400] text-[#12161f] flex items-center justify-center font-bold shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-gray-900">Fleet Card Control</h4>
                <p className="text-gray-600 text-xs mt-0.5">Zero-cash RFID key tags and driver PIN security.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-[#ffb400] text-[#12161f] flex items-center justify-center font-bold shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-gray-900">Safety & Compliance</h4>
                <p className="text-gray-600 text-xs mt-0.5">Environmental spill protection and hazard protocols.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/about"
              className="bg-[#1f2532] hover:bg-[#ffb400] text-white hover:text-[#12161f] font-black text-xs uppercase tracking-widest px-8 py-4 shadow-lg transition inline-flex items-center space-x-2"
            >
              <span>READ MORE ABOUT US</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InduzyAboutSection;
