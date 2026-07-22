import React from 'react';
import AluwindZeraBadge from '../components/AluwindZeraBadge';

export const About: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto w-full font-sans space-y-12">
      <div className="bg-[#0f1f17] text-white p-12 border-t-8 border-[#4caf50] space-y-6">
        <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>
        <h1 className="text-4xl font-black">About FLO Energy Zimbabwe</h1>
        <p className="text-gray-300 text-sm max-w-2xl">
          FLO Energy Zimbabwe (Ibhalabhala Pvt Ltd) is an established petroleum retailer and bulk fuel wholesaler supplying clean Diesel 50ppm, Unleaded Petrol, and Industrial Fuel Oils across Zimbabwe.
        </p>
      </div>

      <AluwindZeraBadge />
    </div>
  );
};

export default About;
