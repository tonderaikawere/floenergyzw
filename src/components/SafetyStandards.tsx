import React from 'react';
import { Shield, Flame, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const SafetyStandards: React.FC = () => {
  const protocols = [
    { title: 'Hazmat Driver Certification', desc: 'All tanker drivers undergo annual hazardous material transport safety training.' },
    { title: 'Double-Walled Underground Tanks', desc: 'Retail stations feature zero-leakage double-containment storage infrastructure.' },
    { title: 'Automatic Overfill Prevention', desc: 'Equipped with shut-off valves and vapor recovery systems during discharge.' },
    { title: 'Emergency Spill Response', desc: 'On-site containment kits and 24/7 environmental emergency protocols.' },
  ];

  return (
    <div className="bg-flo-dark text-white rounded-3xl p-8 border border-white/10 shadow-xl my-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
        <div className="bg-flo-gold text-flo-dark p-3 rounded-2xl shrink-0">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-bold text-flo-gold uppercase tracking-wider">Health, Safety & Environment</span>
          <h3 className="text-2xl font-black text-white">Petroleum Safety & Compliance Standards</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {protocols.map((p, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-flo-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-white">{p.title}</h4>
              <p className="text-gray-300 text-xs mt-0.5 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyStandards;
