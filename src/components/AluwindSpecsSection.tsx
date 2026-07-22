import React from 'react';
import { Link } from 'react-router-dom';

export const AluwindSpecsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4 font-sans text-[#0f1f17]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Feature Image */}
        <div className="lg:col-span-6 relative">
          <div className="overflow-hidden shadow-2xl border-4 border-gray-100">
            <img
              src="/images/flo/tanker_fb.jpg"
              alt="Metered Fuel Delivery Tanker Spec"
              className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Green Arc Icon Accent */}
          <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0f1f17] leading-tight">
            Robust, certified petroleum structures for commercial use
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed font-normal">
            FLO Energy has production, logistics, and sales locations in Harare, Bulawayo, and regional mining hubs. Each of our locations is established as a full-service unit, including full delivery scope, lab testing design, and sales functions.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed font-normal">
            As we have the same production equipment, quality management system, and water filtration systems, all of our delivery estimates hit exact specifications. You can rest assured that wherever we work for you, the result is the same: on-time delivery and certified clean fuel.
          </p>

          <div className="pt-2">
            <a
              href="/services"
              className="inline-flex items-center space-x-2 bg-[#d4edda] hover:bg-[#c3e6cb] text-[#2e7d32] font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 shadow transition"
            >
              <span>READ PETROLEUM SPECIFICATIONS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluwindSpecsSection;
