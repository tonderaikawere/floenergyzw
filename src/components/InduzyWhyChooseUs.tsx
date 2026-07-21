import React from 'react';
import { ShieldCheck, Truck, Clock, Award, CheckCircle2, Droplet, Flame } from 'lucide-react';

export const InduzyWhyChooseUs: React.FC = () => {
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
      iconColor: 'text-flo-gold',
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
    <section className="py-20 bg-flo-dark text-white px-4 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-extrabold text-flo-gold uppercase tracking-widest bg-flo-gold/10 px-3.5 py-1.5 rounded-full inline-block border border-flo-gold/30">
            WHY FLO ENERGY ZIMBABWE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Engineering Fuel Purity & Delivery Excellence
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We understand that fuel downtime halts operations. FLO Energy Zimbabwe combines rigorous laboratory testing with dependable tanker logistics to power your business without interruption.
          </p>

          <div className="space-y-4 pt-2">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div key={idx} className="flex items-start space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="bg-flo-gold text-flo-dark p-2.5 rounded-xl shrink-0 mt-0.5 font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base">{pt.title}</h4>
                    <p className="text-gray-300 text-xs mt-0.5 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image Feature */}
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src="https://floenergy.net/wp-content/uploads/2020/06/Flo2.jpg"
              alt="FLO Energy Bulk Tanker Terminal"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InduzyWhyChooseUs;
