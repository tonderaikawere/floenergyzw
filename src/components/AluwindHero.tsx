import React from 'react';
import WindLeafIcon from './WindLeafIcon';

const AluwindHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gray-900 text-white overflow-hidden font-sans">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2000')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full py-20 z-10">
        <div className="max-w-2xl">
          {/* Leaf Icon Accent */}
          <div className="mb-6">
            <WindLeafIcon className="w-12 h-6 text-aluwind-green" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Global supplier of<br />offshore wind solutions
          </h1>

          <p className="text-sm md:text-base text-gray-300 mb-10 leading-relaxed max-w-xl">
            Through 20 years Aluwind has offered worldwide production, manufacturing and assembly for a wide range of offshore wind industry components.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#solutions" 
              className="bg-aluwind-green hover:bg-aluwind-green/90 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-4 transition duration-200"
            >
              VIEW OUR SOLUTIONS
            </a>
            <a 
              href="#contact" 
              className="border border-white hover:bg-white hover:text-gray-900 text-white font-bold text-[11px] uppercase tracking-widest px-8 py-4 transition duration-200"
            >
              CONTACT US
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 hidden md:block">
          <a href="#about" className="text-gray-400 hover:text-white transition duration-200 block">
            <svg 
              className="w-5 h-5 animate-bounce text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 13l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AluwindHero;
