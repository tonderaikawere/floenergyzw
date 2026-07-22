import React, { useState } from 'react';
import AluwindHeaderTop from '../components/AluwindHeaderTop';
import AluwindNavbar from '../components/AluwindNavbar';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import FleetCardWidget from '../components/FleetCardWidget';
import FleetAnalytics from '../components/FleetAnalytics';
import { Shield, BarChart3, Lock, CheckCircle, Truck, ArrowRight } from 'lucide-react';
import WindLeafIcon from '../components/WindLeafIcon';

export const FleetCard: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const features = [
    {
      icon: Lock,
      title: 'PIN & Odometer Verification',
      description: 'Prevent fuel theft by requiring driver PINs and real-time odometer logging at every pump scan.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Consumption Analytics',
      description: 'Track liter usage per kilometer, view monthly spending statements, and receive automated alert reports.',
    },
    {
      icon: Truck,
      title: 'Nationwide Network Access',
      description: 'Accepted across all FLO Energy Zimbabwe service stations in Harare, Bulawayo, Gweru, and major highways.',
    },
    {
      icon: Shield,
      title: 'Custom Vehicle Daily Limits',
      description: 'Set custom spending caps per vehicle type (light vehicles, haulage trucks, mining fleets, buses).',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <AluwindHeaderTop />
      <AluwindNavbar />

      {/* Hero Banner */}
      <section className="relative bg-aluwind-dark text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-2">
              <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Smart Fuel Card & Fleet Management System
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              Take complete control of your commercial fleet fuel expenses with automated driver PIN verification, zero-cash security, and real-time fuel tracking across Zimbabwe.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="bg-aluwind-green hover:bg-aluwind-green/90 text-white font-extrabold text-[11px] uppercase tracking-widest px-6 py-4 transition flex items-center space-x-2 animate-pulse-subtle"
              >
                <span>Apply for Fleet Cards</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 space-y-6 text-white shadow-xl">
            <h3 className="text-lg font-bold border-b border-white/10 pb-3">Fleet Card Cardholder Benefits</h3>
            <ul className="space-y-4 text-xs text-gray-300">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-aluwind-green shrink-0 mt-0.5" />
                <span>Consolidated monthly invoicing with zero cash handling risks for drivers.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-aluwind-green shrink-0 mt-0.5" />
                <span>Instant SMS notifications on fuel transactions above designated thresholds.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-aluwind-green shrink-0 mt-0.5" />
                <span>Priority fueling lanes at high-density commercial stations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-center mb-3">
            <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900">Designed for Logistics & Fleet Operations</h2>
          <p className="text-gray-600 mt-2 text-xs">
            Whether operating 5 light delivery vans or 100 long-haul truck fleets, FLO Fleet Cards deliver complete clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-gray-50 p-6 border border-gray-100 shadow-sm hover:shadow-md transition space-y-4">
                <div className="w-12 h-12 bg-aluwind-light text-aluwind-dark flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <FleetAnalytics />
        <FleetCardWidget />
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultProduct="Fleet Card Service" />
    </div>
  );
};

export default FleetCard;
