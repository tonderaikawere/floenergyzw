import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuelPriceTicker from '../components/FuelPriceTicker';
import { ShieldCheck, Award, Users, Fuel, Truck, CheckCircle2, TrendingUp, Shield } from 'lucide-react';

export const About: React.FC = () => {
  const timeline = [
    { year: '2012', title: 'Establishment of FLO Petroleum', desc: 'Founded in Zimbabwe to provide clean, reliable petroleum solutions for local industries.' },
    { year: '2016', title: 'Retail Station Network Expansion', desc: 'Opened flagship service stations in Harare (Donnybrook) and Bulawayo (Burnside & Ironbridge).' },
    { year: '2020', title: 'Bulk Fuel Logistics Fleet', desc: 'Acquired custom-metered 10,000L - 40,000L fuel tankers for direct commercial on-site delivery.' },
    { year: 'Present', title: 'National Energy Partner', desc: 'Supplying over 1,000 corporate clients, transport fleets, farms, and mines across Zimbabwe.' },
  ];

  const values = [
    { title: 'Quality Assurance', desc: '100% water-free, ZERA compliant fuel standard testing before every retail pump and tanker delivery.' },
    { title: 'Customer Reliability', desc: '24/7 continuous dispatch logistics ensuring commercial partners never face operational downtime.' },
    { title: 'Integrity & Transparency', desc: 'Accurate flow metering, clear commercial contract pricing, and zero compromise on specifications.' },
    { title: 'Safety & Compliance', desc: 'Strict safety standards for hazardous material transportation and environmental risk management.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <FuelPriceTicker />

      {/* Hero */}
      <section className="flo-hero-gradient text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-flo-gold text-flo-dark text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4" />
              <span>About FLO Energy Zimbabwe</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-black">Powering Zimbabwe’s Industrial Growth</h1>
            <p className="text-gray-200 text-base leading-relaxed">
              FLO Energy Zimbabwe (FLO Petroleum) is a premier petroleum sales, retail, and bulk logistics provider committed to fuel purity, customer transparency, and operational excellence.
            </p>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg"
              alt="FLO Energy Station"
              className="rounded-2xl border-2 border-white/20 shadow-2xl h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-flo-purple">Our Journey & Growth</h2>
          <p className="text-gray-600 text-sm mt-1">A decade of continuous innovation and energy delivery across Zimbabwe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative">
              <div className="text-xs font-extrabold text-flo-gold bg-flo-dark px-3 py-1 rounded-full inline-block mb-3">
                {item.year}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white border-t border-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-flo-purple">Core Operational Values</h2>
            <p className="text-gray-600 text-sm mt-1">The standards that guide every liter of fuel we supply.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
                <CheckCircle2 className="w-8 h-8 text-flo-emerald" />
                <h4 className="text-lg font-bold text-gray-900">{v.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
