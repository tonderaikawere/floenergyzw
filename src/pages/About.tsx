import React from 'react';
import AluwindHeaderTop from '../components/AluwindHeaderTop';
import AluwindNavbar from '../components/AluwindNavbar';
import Footer from '../components/Footer';
import EnvironmentalPolicy from '../components/EnvironmentalPolicy';
import SafetyStandards from '../components/SafetyStandards';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import WindLeafIcon from '../components/WindLeafIcon';

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
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <AluwindHeaderTop />
      <AluwindNavbar />

      {/* Hero */}
      <section className="relative bg-aluwind-dark text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-2">
              <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Powering Zimbabwe’s Industrial Growth</h1>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xl">
              FLO Energy Zimbabwe (FLO Petroleum) is a premier petroleum sales, retail, and bulk logistics provider committed to fuel purity, customer transparency, and operational excellence.
            </p>
          </div>

          <div className="lg:col-span-5">
            <img
              src="/images/flo/station_fb.jpg"
              alt="FLO Energy Station Facebook Photo"
              className="border border-white/20 shadow-2xl h-56 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-3">
            <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900">Our Journey & Growth</h2>
          <p className="text-gray-600 text-xs mt-1">A decade of continuous innovation and energy delivery across Zimbabwe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 border border-gray-100 shadow-sm relative">
              <div className="text-[10px] font-extrabold text-white bg-aluwind-green px-3 py-1 uppercase tracking-widest inline-block mb-4">
                {item.year}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50 border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center mb-3">
              <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Core Operational Values</h2>
            <p className="text-gray-600 text-xs mt-1">The standards that guide every liter of fuel we supply.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-100 space-y-3 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-aluwind-green" />
                <h4 className="text-base font-bold text-gray-900">{v.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <EnvironmentalPolicy />
          <SafetyStandards />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
