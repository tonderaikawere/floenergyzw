import React from 'react';
import WindLeafIcon from './WindLeafIcon';
import { IMAGES } from '../lib/images';
import { Link } from 'react-router-dom';

const AluwindRobustSection = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left image column */}
        <div className="relative order-2 lg:order-1">
          <img
            src={IMAGES.machinedMetal}
            alt="Robust lightweight aluminium structures for offshore use"
            className="w-full h-[380px] object-cover shadow-xl"
          />
        </div>

        {/* Right text column */}
        <div className="order-1 lg:order-2">
          <div className="mb-4">
            <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-6">
            Robust, lightweight<br />aluminium structures for<br />offshore use
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-6">
            Aluwind has production, logistics and sales locations in Europe, North America and Asia – we are on the spot in the major wind energy markets. Each of our locations is established as a full-service unit, including full production scope, design and sales functions.
          </p>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-8">
            As we have the same production equipment, management system, quality system, ERP systems etc. at all of our production facilities locations, you can rest assured that, wherever we work for you, the result is the same: on time delivery, high-quality components and structures.
          </p>
          <Link
            to="/bulk-fuel"
            className="inline-block bg-aluwind-light text-aluwind-dark font-extrabold text-[11px] uppercase tracking-widest px-8 py-4 hover:bg-aluwind-light/80 transition duration-200"
          >
            READ OFFSHORE WIND PAGE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AluwindRobustSection;
