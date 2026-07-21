import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuelPriceTicker from '../components/FuelPriceTicker';
import QuoteModal from '../components/QuoteModal';
import FleetCardWidget from '../components/FleetCardWidget';
import FleetAnalytics from '../components/FleetAnalytics';
import { CreditCard, Shield, BarChart3, Lock, CheckCircle, Truck, UserCheck, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <FuelPriceTicker />

      {/* Hero Banner */}
      <section className="flo-hero-gradient text-white py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center space-x-2 bg-flo-gold text-flo-dark px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
              <CreditCard className="w-4 h-4" />
              <span>FLO Commercial Fleet Solutions</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Smart Fuel Card & Fleet Management System
            </h1>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
              Take complete control of your commercial fleet fuel expenses with automated driver PIN verification, zero-cash security, and real-time fuel tracking across Zimbabwe.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="flo-gold-gradient text-flo-dark font-extrabold text-sm px-6 py-4 rounded-xl shadow-lg hover:brightness-105 transition flex items-center space-x-2"
              >
                <span>Apply for Fleet Cards</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl space-y-6 text-white shadow-2xl">
            <h3 className="text-xl font-bold border-b border-white/15 pb-3">Fleet Card Cardholder Benefits</h3>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-flo-gold shrink-0 mt-0.5" />
                <span>Consolidated monthly invoicing with zero cash handling risks for drivers.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-flo-gold shrink-0 mt-0.5" />
                <span>Instant SMS notifications on fuel transactions above designated thresholds.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-flo-gold shrink-0 mt-0.5" />
                <span>Priority fueling lanes at high-density commercial stations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-flo-purple">Designed for Logistics & Fleet Operations</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Whether operating 5 light delivery vans or 100 long-haul truck fleets, FLO Fleet Cards deliver complete clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition space-y-4">
                <div className="w-12 h-12 bg-flo-purple-subtle text-flo-purple rounded-xl flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
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
