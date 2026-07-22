import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AluwindHeroCards = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-6 z-20 -mt-16 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
        {/* Card 1: Dark Green */}
        <div className="bg-aluwind-dark text-white p-8 flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-base font-bold mb-3 tracking-wide">The values of Aluwind</h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              We pay attention to the needs of the customer and the market, and meet them with an innovative, flexible and solution-oriented attitude.
            </p>
          </div>
          <Link to="/about" className="group flex items-center justify-between text-[10px] font-extrabold tracking-widest text-gray-300 hover:text-white uppercase transition-colors">
            <span>Our values</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card 2: Medium Green */}
        <div className="bg-aluwind-green text-white p-8 flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-base font-bold mb-3 tracking-wide">Leading offshore solutions</h3>
            <p className="text-xs text-green-500-foreground text-gray-100 leading-relaxed mb-6">
              The core services offered by Aluwind include a global footprint of state-of-the-art production in various countries, based on the most modern technology.
            </p>
          </div>
          <Link to="/services" className="group flex items-center justify-between text-[10px] font-extrabold tracking-widest text-gray-100 hover:text-white uppercase transition-colors">
            <span>Our product range</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Card 3: Light Green */}
        <div className="bg-aluwind-light text-gray-800 p-8 flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-base font-bold mb-3 text-aluwind-dark tracking-wide">High-quality components</h3>
            <p className="text-xs text-gray-700 leading-relaxed mb-6">
              As we have the same production equipment and setup worldwide, you can rest assured that, wherever we work for you, we deliver high-quality solutions.
            </p>
          </div>
          <Link to="/locations" className="group flex items-center justify-between text-[10px] font-extrabold tracking-widest text-gray-700 hover:text-aluwind-dark uppercase transition-colors">
            <span>Global footprint</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-aluwind-dark" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AluwindHeroCards;
