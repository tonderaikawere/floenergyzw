import React from 'react';
import WindLeafIcon from './WindLeafIcon';
import { IMAGES } from '../lib/images';
import { Link } from 'react-router-dom';

const AluwindProductionSection = () => {
  return (
    <section className="py-20 bg-white text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text column */}
        <div>
          <div className="mb-4">
            <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-6">
            Production of offshore wind<br />industry components
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-6">
            Our vision is to be our customers' preferred global partner within products and solutions for the wind industry. We are working towards for instances continuously expanding and improving our scope of services within development, manufacturing and logistics solutions on a global basis. With our global structure, our strong financial foundation and our employees' solid experience and competencies, we are in a strong position to achieve our goals for the preferred solution provider.
          </p>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-8">
            Our future depends on our ability to drive performance to the benefit of customers, employees and stakeholders. We do this by continuously looking for better solutions, understanding the needs of our customers and employees' development.
          </p>
          <Link
            to="/services"
            className="inline-block bg-aluwind-green hover:bg-aluwind-green/90 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-4 transition"
          >
            OUR SERVICES
          </Link>
        </div>

        {/* Right image column */}
        <div className="relative">
          <img
            src={IMAGES.turbinesSea}
            alt="Production of offshore wind industry components"
            className="w-full h-[380px] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AluwindProductionSection;
