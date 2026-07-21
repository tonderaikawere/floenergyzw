import React from 'react';
import { ShieldCheck, Truck, Clock, Award, Check, Droplet, Flame, Users } from 'lucide-react';

export const InduzyWhyChooseUs: React.FC = () => {
  const stats = [
    { count: '12+', label: 'Years Experience', icon: Award },
    { count: '50+', label: 'Tanker Fleet', icon: Truck },
    { count: '100%', label: 'Quality Certified', icon: ShieldCheck },
    { count: '1000+', label: 'Corporate Clients', icon: Users },
  ];

  const points = [
    {
      title: 'ZERA Certified Fuel Quality',
      desc: 'Tested for precise cetane rating, zero water contamination, and compliant ethanol ratio blending.',
      icon: ShieldCheck,
    },
    {
      title: 'Metered Bulk Tanker Logistics',
      desc: 'Dedicated 10,000L to 40,000L tankers equipped with calibrated flow meters and discharge receipts.',
      icon: Truck,
    },
    {
      title: '24/7 Continuous Emergency Dispatch',
      desc: 'On-demand fuel logistics for mining sites, commercial farming pumps, and heavy transport fleets.',
      icon: Clock,
    },
    {
      title: 'Zero Cash Handling Risk',
      desc: 'Fleet Cards and RFID key tags with driver PIN verification and custom daily spending caps.',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-[#191e28] text-white px-4 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Upper Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/10 pb-16 text-center">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div key={idx} className="p-6 bg-white/5 border border-white/10 space-y-2">
                <Icon className="w-8 h-8 text-[#ffb400] mx-auto" />
                <div className="text-4xl sm:text-5xl font-black text-[#ffb400]">{st.count}</div>
                <div className="text-xs font-black uppercase tracking-wider text-gray-300">{st.label}</div>
              </div>
            );
          })}
        </div>

        {/* Lower Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black text-[#ffb400] uppercase tracking-widest bg-white/10 px-3.5 py-1.5 inline-block">
              // WHY CHOOSE FLO ENERGY ZIMBABWE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
              Engineering Fuel Purity & Delivery Excellence
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              We understand that fuel downtime halts operations. FLO Energy Zimbabwe combines rigorous laboratory testing with dependable tanker logistics to power your business without interruption.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4 bg-white/5 p-4 border border-white/10">
                    <div className="bg-[#ffb400] text-[#12161f] p-2.5 shrink-0 mt-0.5 font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-white text-sm">{pt.title}</h4>
                      <p className="text-gray-300 text-xs mt-0.5 leading-relaxed font-normal">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="/images/flo/station2.svg"
                alt="FLO Energy Bulk Tanker Terminal"
                className="w-full h-[540px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InduzyWhyChooseUs;
