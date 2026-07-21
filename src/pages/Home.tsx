import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuelPriceTicker from '../components/FuelPriceTicker';
import FuelCalculator from '../components/FuelCalculator';
import QuoteModal from '../components/QuoteModal';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { useCountUp } from '../hooks/useCountUp';
import {
  Fuel,
  Truck,
  ShieldCheck,
  Award,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Droplet,
  Flame,
  CreditCard,
  Building2,
  PhoneCall
} from 'lucide-react';

const CounterCard = ({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) => {
  const { count, elementRef } = useCountUp({ end });

  return (
    <div ref={elementRef} className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
      <div className="text-4xl md:text-5xl font-black text-flo-gold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm font-semibold text-white/90 uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'retail' | 'bulk' | 'fleet' | 'lubricants'>('retail');

  const servicesData = {
    retail: {
      title: 'Modern Retail Service Stations',
      description: 'Clean, high-flow pumps supplying ZERA certified Diesel 50ppm, Unleaded Petrol E10, and cylinder LPG exchange.',
      points: ['24/7 Service Station Operations', 'Calibrated High-Speed Pumps', 'Well-Stocked Convenience Marts', 'Water-Free Fuel Quality Guarantee'],
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg',
    },
    bulk: {
      title: 'Commercial Bulk Fuel Supply',
      description: 'Direct tanker delivery to mining sites, agricultural farms, commercial fleets, and industrial plants across Zimbabwe.',
      points: ['Dedicated Fuel Tankers (10,000L - 40,000L)', 'Instant Delivery Scheduling', 'Laboratory Water & Purity Certification', 'Custom Commercial Pricing Contracts'],
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo2.jpg',
    },
    fleet: {
      title: 'Fleet Fuel Card Management',
      description: 'Zero-cash cashless cards and RFID key tags with PIN protection, automated odometer entry, and daily liter limits.',
      points: ['Driver PIN & Odometer Fraud Protection', 'Automated Transaction Reporting', 'Nationwide Acceptance', 'Customized Vehicle Spending Caps'],
      image: 'https://floenergy.net/wp-content/uploads/2018/05/Petrol.jpg',
    },
    lubricants: {
      title: 'Heavy Duty Industrial Lubricants',
      description: 'Premium engine oils, gear lubricants, hydraulic fluids, and greases engineered for harsh African terrain.',
      points: ['Heavy Machinery Engine Oils', 'High-Temp Industrial Greases', 'Transmission & Hydraulic Fluids', 'Technical Lubrication Support'],
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <FuelPriceTicker />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition duration-1000"
          style={{
            backgroundImage: "url('https://floenergy.net/wp-content/uploads/2018/05/Petrol.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-flo-dark/95 via-flo-purple/90 to-flo-dark/95" />

        {/* Floating Ambient Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-flo-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-flo-purple-light/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <ShieldCheck className="w-4 h-4 text-flo-gold" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-flo-gold">
                  ZERA Certified Petroleum & Energy Partner
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                Energy for <span className="flo-gold-text-gradient">Growth</span> across Zimbabwe
              </h1>

              <p className="text-base sm:text-xl text-gray-200 max-w-2xl leading-relaxed font-normal">
                FLO Energy Zimbabwe delivers premium grade Diesel 50ppm, Unleaded Petrol, Heavy Industrial Fuels, and Bulk Tanker Logistics with guaranteed purity and 24/7 reliability.
              </p>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto flo-gold-gradient text-flo-dark font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl hover:brightness-110 transition flex items-center justify-center space-x-2"
                >
                  <Fuel className="w-5 h-5 text-flo-dark" />
                  <span>Request Bulk Fuel Quote</span>
                </button>

                <Link
                  to="/locations"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md transition flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-5 h-5 text-flo-gold" />
                  <span>Locate Service Station</span>
                </Link>
              </div>

              {/* Stats Counters */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10">
                <CounterCard end={12} label="Years Active" suffix="+" />
                <CounterCard end={50} label="Bulk Tankers" suffix="+" />
                <CounterCard end={100} label="Clean Fuel %" suffix="%" />
              </div>
            </div>

            {/* Right Card Widget */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl space-y-6 text-white shadow-2xl">
                <div className="flex items-center space-x-3 border-b border-white/15 pb-4">
                  <div className="bg-flo-gold p-3 rounded-xl text-flo-dark">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Commercial Fuel Order</h3>
                    <p className="text-xs text-white/70">Fast On-Site Tanker Dispatch</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-flo-gold shrink-0 mt-0.5" />
                    <span><strong>10,000L - 40,000L Tankers</strong> dispatched nationwide.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-flo-gold shrink-0 mt-0.5" />
                    <span><strong>Water-Free Filtration Certificate</strong> with every load.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-flo-gold shrink-0 mt-0.5" />
                    <span><strong>24/7 Hotline:</strong> Speak directly with sales dispatch.</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full py-3.5 bg-white text-flo-purple hover:bg-flo-gold hover:text-flo-dark font-extrabold text-sm rounded-xl transition shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Get Instant Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fuel Savings Calculator Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full -mt-12 relative z-20">
        <FuelCalculator />
      </section>

      {/* Services Showcase */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-flo-purple uppercase tracking-widest bg-flo-purple-subtle px-3 py-1 rounded-full">
            Our Core Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-flo-purple mt-3">
            Comprehensive Energy & Petroleum Services
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Engineered to support corporate fleets, agricultural estates, mining operations, and daily motorist refueling.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(['retail', 'bulk', 'fleet', 'lubricants'] as const).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`px-5 py-3 rounded-xl font-bold text-sm capitalize transition ${
                activeTab === tabKey
                  ? 'bg-flo-purple text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tabKey} Service
            </button>
          ))}
        </div>

        {/* Selected Service Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {servicesData[activeTab].title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {servicesData[activeTab].description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesData[activeTab].points.map((pt, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-flo-emerald shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-flo-purple hover:text-flo-purple-light font-bold text-sm group"
              >
                <span>Learn full details on our services</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src={servicesData[activeTab].image}
              alt={servicesData[activeTab].title}
              className="rounded-2xl shadow-md object-cover h-72 w-full border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Station Network Preview Section */}
      <section className="py-16 bg-flo-dark text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold text-flo-gold uppercase tracking-widest">Station Finder</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Our Strategic Service Station Locations</h2>
            </div>
            <Link
              to="/locations"
              className="mt-4 md:mt-0 flo-gold-gradient text-flo-dark font-extrabold text-xs uppercase px-5 py-3 rounded-xl flex items-center space-x-2"
            >
              <span>View All Station Maps</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-flo-gold/50 transition">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-flo-gold bg-flo-gold/10 px-2.5 py-1 rounded-full">Harare</span>
                <span className="text-xs text-emerald-400 font-medium">Open 24/7</span>
              </div>
              <h4 className="text-xl font-bold text-white">Donnybrook Service Station</h4>
              <p className="text-gray-300 text-xs">Arcturus Road, Donnybrook, Harare</p>
              <div className="text-xs text-gray-400 space-y-1">
                <p>• High-Speed Diesel 50ppm</p>
                <p>• Unleaded Petrol E10</p>
                <p>• LPG Cylinder Swap</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-flo-gold/50 transition">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-flo-gold bg-flo-gold/10 px-2.5 py-1 rounded-full">Bulawayo</span>
                <span className="text-xs text-emerald-400 font-medium">Open 24/7</span>
              </div>
              <h4 className="text-xl font-bold text-white">Burnside Station</h4>
              <p className="text-gray-300 text-xs">Burnside Road, Bulawayo</p>
              <div className="text-xs text-gray-400 space-y-1">
                <p>• Bulk Delivery Terminal</p>
                <p>• Commercial Fleet Cards</p>
                <p>• Lubricants Bay</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-flo-gold/50 transition">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-flo-gold bg-flo-gold/10 px-2.5 py-1 rounded-full">Bulawayo</span>
                <span className="text-xs text-emerald-400 font-medium">Open 24/7</span>
              </div>
              <h4 className="text-xl font-bold text-white">Ironbridge Station</h4>
              <p className="text-gray-300 text-xs">Ironbridge Road, Bulawayo</p>
              <div className="text-xs text-gray-400 space-y-1">
                <p>• Heavy Haulage Pumps</p>
                <p>• Clean Fuel Filtration</p>
                <p>• Fast-Track Card Lanes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default Home;
