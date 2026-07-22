import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const AluwindProductionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4 font-sans text-[#0f1f17]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <div className="lg:col-span-6 space-y-6">
          {/* Green Arc Icon Accent */}
          <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0f1f17] leading-tight">
            Production of clean fuel & energy components
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed font-normal">
            Our vision is to be our customers' preferred partner within clean petroleum products and solutions for commercial transportation and heavy industry. We are expanding our scope of services within development, manufacturing, and metered logistics on a nationwide basis.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed font-normal">
            With our robust supply chain structure, strong financial foundation, and experienced logistics specialists, we are in a strong position to deliver on your goals for clean fuel availability.
          </p>

          <div className="pt-2">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 shadow transition"
            >
              <span>OUR PRODUCT SERVICES</span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6 relative">
          <div className="overflow-hidden shadow-2xl border-4 border-gray-100">
            <img
              src="/images/flo/station_fb.jpg"
              alt="Production & Fuel Storage Facility"
              className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluwindProductionSection;
