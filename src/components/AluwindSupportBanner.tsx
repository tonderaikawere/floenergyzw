import React from 'react';
import { Link } from 'react-router-dom';

export const AluwindSupportBanner: React.FC = () => {
  return (
    <section className="relative font-sans bg-[#0f1f17] text-white py-24 px-4 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/flo/station_fb.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f17] via-[#0f1f17]/90 to-[#0f1f17]/80" />

      <div className="relative max-w-7xl mx-auto space-y-6 z-10">
        <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl">
          Optimized for supporting global fuel & turbine manufacturers
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
          The combination of our global logistics insight matched with on-the-ground green insights into petroleum products ensures that our continuous product development and delivery improvements are always based on suitability for regional haulage fleets.
        </p>

        <div className="pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 shadow-xl transition"
          >
            <span>INQUIRE ONLINE</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AluwindSupportBanner;
