import React, { useState } from 'react';
import AluwindHeaderTop from '../components/AluwindHeaderTop';
import AluwindNavbar from '../components/AluwindNavbar';
import Footer from '../components/Footer';
import ZeraBadge from '../components/ZeraBadge';
import FuelComparisonTable from '../components/FuelComparisonTable';
import { Fuel, Truck, Droplet, Flame, ShieldCheck, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';
import WindLeafIcon from '../components/WindLeafIcon';

export const Services: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('Bulk Diesel 50ppm');

  const servicesList = [
    {
      id: 'diesel',
      icon: Fuel,
      title: 'Low Sulfur Diesel 50ppm',
      badge: 'ZERA Certified Standard',
      description: 'Ultra-low sulfur diesel compliant with modern heavy equipment engines, reducing wear and optimizing fuel consumption for fleets and power generators.',
      specs: ['Maximum 50ppm Sulfur Content', 'Water & Particle Micro-Filtration', 'High Cetane Rating for Clean Ignition', 'Available via Retail & Bulk Logistics'],
    },
    {
      id: 'petrol',
      icon: Droplet,
      title: 'Unleaded Petrol E10 Blend',
      badge: 'High Performance Blend',
      description: 'Refined ethanol-blended unleaded fuel providing smooth ignition, anti-knock protection, and reliable mileage for private and commercial vehicles.',
      specs: ['Strict Ethanol Ratio Compliance', 'Anti-Corrosion Fuel Additives', 'Delivered Clean & Dry to Stations', 'Engineering Standard Tested'],
    },
    {
      id: 'bulk',
      icon: Truck,
      title: 'Bulk Fuel Logistics & Tankers',
      badge: '10,000L to 40,000L Fleet',
      description: 'Dedicated fleet of metered bulk fuel tankers delivering fuel directly to agricultural farms, mining installations, construction sites, and corporate tanks.',
      specs: ['Calibrated Flow Metering', '24/7 Logistics Dispatch Tracking', 'Emergency On-Site Fuel Refills', 'Commercial Bulk Pricing Tiers'],
    },
    {
      id: 'lpg',
      icon: Flame,
      title: 'LP Gas Cylinder Exchange & Bulk',
      badge: 'Certified Safe Bottling',
      description: 'Industrial and domestic liquefied petroleum gas (LPG) solutions with safe, pressure-tested cylinder swaps and bulk tank refills.',
      specs: ['Certified Cylinder Pressure Testing', 'Clean Burning Domestic LPG', 'Commercial Kitchen & Bakery Supply', 'Safe Handling Compliance'],
    },
    {
      id: 'fleet',
      icon: CreditCard,
      title: 'Fleet Fuel Card Management',
      badge: 'Commercial Fleet Control',
      description: 'Smart RFID tags and fuel cards enabling corporate fleet managers to restrict spending by vehicle, prevent fuel theft, and access instant digital receipts.',
      specs: ['Driver PIN & Odometer Verification', 'Custom Liter Spending Limits', 'Real-Time Transaction Dashboards', 'Zero Cash Handling Risk'],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <AluwindHeaderTop />
      <AluwindNavbar />

      {/* Services Hero Header */}
      <section className="relative bg-aluwind-dark text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-2">
              <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Petroleum & Fuel Solutions
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Delivering high-performance fuels, bulk logistics, and fleet card services tailored to power Zimbabwe’s commercial, agricultural, and industrial sectors.
            </p>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
              alt="FLO Energy Station"
              className="border border-white/20 shadow-2xl h-56 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-gray-50 p-8 border border-gray-100 shadow-sm hover:shadow-md transition duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-aluwind-light p-3 text-aluwind-dark">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-aluwind-dark uppercase tracking-widest bg-aluwind-light px-2.5 py-1">
                        {service.badge}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {service.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[11px] font-semibold text-gray-700 bg-white p-2.5 border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-aluwind-green shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-aluwind-light/40 border border-aluwind-light text-center space-y-4">
                  <span className="text-[10px] font-extrabold text-gray-600 uppercase tracking-widest">Need This Service?</span>
                  <button
                    onClick={() => {
                      setSelectedProduct(service.title);
                      setIsQuoteOpen(true);
                    }}
                    className="w-full bg-aluwind-green hover:bg-aluwind-green/90 text-white font-extrabold text-[11px] uppercase tracking-widest px-5 py-3.5 transition flex items-center justify-center space-x-2"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <FuelComparisonTable />

        <div className="mt-12">
          <ZeraBadge />
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct={selectedProduct} />
    </div>
  );
};

export default Services;
