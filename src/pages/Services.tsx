import React, { useState } from 'react';
import AluwindFuelMatrix from '../components/AluwindFuelMatrix';
import AluwindPriceTrend from '../components/AluwindPriceTrend';
import AluwindQuoteModal from '../components/AluwindQuoteModal';
import { Fuel, Droplet, Truck, Flame, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('Diesel 50ppm (Bulk)');

  const services = [
    {
      id: 'diesel',
      icon: Fuel,
      title: 'Low Sulfur Diesel 50ppm',
      badge: 'ZERA Certified Standard',
      description: 'Ultra-low sulfur diesel compliant with modern heavy equipment engines, reducing wear and optimizing fuel consumption for fleets.',
      specs: ['Maximum 50ppm Sulfur Content', 'Water Micro-Filtration', 'High Cetane Rating', 'Bulk Logistics Available'],
    },
    {
      id: 'petrol',
      icon: Droplet,
      title: 'Unleaded Petrol E10 Blend',
      badge: 'High Performance Blend',
      description: 'Refined ethanol-blended unleaded fuel providing smooth ignition, anti-knock protection, and reliable mileage.',
      specs: ['Strict Ethanol Ratio Compliance', 'Anti-Corrosion Fuel Additives', 'Delivered Clean & Dry', 'Engine Tested Specs'],
    },
    {
      id: 'bulk',
      icon: Truck,
      title: 'Bulk Fuel Logistics & Tankers',
      badge: '10,000L to 40,000L Fleet',
      description: 'Dedicated fleet of metered bulk fuel tankers delivering fuel directly to agricultural farms, mining installations, and corporate tanks.',
      specs: ['Calibrated Flow Metering', '24/7 Logistics Dispatch Tracking', 'Emergency On-Site Refills', 'Bulk Pricing Tiers'],
    },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto w-full font-sans space-y-12">
      <div className="space-y-3">
        <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>
        <h1 className="text-4xl font-black text-[#0f1f17]">Petroleum & Energy Services</h1>
        <p className="text-gray-600 text-sm">Comprehensive petroleum supply, metered logistics, and quality assurance solutions across Zimbabwe.</p>
      </div>

      <div className="space-y-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="bg-white p-8 border-l-4 border-[#4caf50] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#d4edda] p-3 text-[#2e7d32]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#2e7d32] bg-[#d4edda] px-2.5 py-0.5">{service.badge}</span>
                    <h3 className="text-2xl font-black text-[#0f1f17]">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {service.specs.map((sp, idx) => (
                    <div key={idx} className="flex items-center space-x-2 font-bold text-gray-700 bg-gray-50 p-2 border border-gray-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4caf50]" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#0f1f17] text-white p-6 space-y-3 text-center">
                <span className="text-xs font-bold text-gray-300">Commercial Quote</span>
                <button
                  onClick={() => {
                    setSelectedProduct(service.title);
                    setIsQuoteOpen(true);
                  }}
                  className="w-full bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold text-xs uppercase py-3 shadow transition flex items-center justify-center space-x-2"
                >
                  <span>Request Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <AluwindFuelMatrix />
      <AluwindPriceTrend />
      <AluwindQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct={selectedProduct} />
    </div>
  );
};

export default Services;
