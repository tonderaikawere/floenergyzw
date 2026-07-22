import React from 'react';
import WindLeafIcon from './WindLeafIcon';
import { IMAGES } from '../lib/images';
import { Link } from 'react-router-dom';

const AluwindPartnerSection = () => {
  return (
    <section className="py-20 bg-aluwind-dark text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div className="max-w-2xl">
            <div className="mb-4">
              <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-4">
              Experienced partner in the<br />global wind industry
            </h2>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
              Based on a team of competent designers, project managers and external partners, Aluwind offers solutions within product development ranging from day-to-day technical support to big projects where Aluwind solves the entire project from idea to entire production.
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <Link
              to="/about"
              className="inline-block bg-aluwind-green hover:bg-aluwind-green/90 text-white font-bold text-[11px] uppercase tracking-widest px-6 py-4 transition"
            >
              OUR CERTIFICATIONS
            </Link>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div 
            className="relative h-[320px] flex flex-col justify-end p-8 bg-cover bg-center overflow-hidden shadow-lg group"
            style={{ backgroundImage: `url(${IMAGES.engineering})` }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition duration-300" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Engineering</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Our cooperation with clients is based on our overall responsibility for development of new products according to specifications.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="relative h-[320px] flex flex-col justify-end p-8 bg-cover bg-center overflow-hidden shadow-lg group"
            style={{ backgroundImage: `url(${IMAGES.production})` }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition duration-300" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Production</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                The core services offered by Aluwind include a global footprint of state-of-the-art production facilities using the most recent technology.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="relative h-[320px] flex flex-col justify-end p-8 bg-cover bg-center overflow-hidden shadow-lg group"
            style={{ backgroundImage: `url(${IMAGES.logistics})` }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition duration-300" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Logistics</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                At Aluwind we have developed strong competencies in solutions of logistics which is seen as an obvious extension of our production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluwindPartnerSection;
