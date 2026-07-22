import React from 'react';
import WindLeafIcon from './WindLeafIcon';
import { IMAGES } from '../lib/images';

const AluwindOptimizedSection = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center text-white text-center font-sans"
      style={{ backgroundImage: `url(${IMAGES.optimizedBg})` }}
    >
      <div className="absolute inset-0 bg-aluwind-dark/85" />
      <div className="relative max-w-4xl mx-auto px-6 z-10 flex flex-col items-center">
        <div className="mb-4">
          <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6 max-w-2xl">
          Optimized for supporting global<br />wind turbine manufacturers
        </h2>
        <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-2xl mb-8">
          The combination of our global production insight with green insight into applying the products ensures that our efforts of product development and product improvement are always based on suitability for the production globally.
        </p>
        <a
          href="mailto:inquiry@aluwind.com"
          className="bg-aluwind-green hover:bg-aluwind-green/90 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-4 transition duration-200"
        >
          INQUIRY@ALUWIND.COM
        </a>
      </div>
    </section>
  );
};

export default AluwindOptimizedSection;
