import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';

export const Locations: React.FC = () => {
  const stations = [
    {
      name: 'Donnybrook Service Station',
      city: 'Harare',
      address: 'Arcturus Road, Donnybrook, Harare',
      phone: '+263 77 224 5578',
      hours: '24 Hours / 7 Days',
      image: '/images/flo/station_fb.jpg',
    },
    {
      name: 'Burnside Service Station',
      city: 'Bulawayo',
      address: 'Burnside Road, Bulawayo',
      phone: '+263 71 221 3338',
      hours: '24 Hours / 7 Days',
      image: '/images/flo/tanker_fb.jpg',
    },
    {
      name: 'Ironbridge Station',
      city: 'Bulawayo',
      address: 'Ironbridge Road, Bulawayo',
      phone: '+263 77 224 5578',
      hours: '24 Hours / 7 Days',
      image: '/images/flo/logo_fb.jpg',
    },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto w-full font-sans space-y-12">
      <div className="space-y-3">
        <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>
        <h1 className="text-4xl font-black text-[#0f1f17]">Station & Logistics Terminals</h1>
        <p className="text-gray-600 text-sm">Operated retail service stations and bulk fuel terminals across Harare and Bulawayo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stations.map((st, idx) => (
          <div key={idx} className="bg-white border-l-4 border-[#4caf50] shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="h-48 relative overflow-hidden">
              <img src={st.image} alt={st.name} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 bg-[#4caf50] text-white font-extrabold text-[10px] uppercase px-2.5 py-1">
                {st.city}
              </span>
            </div>
            <div className="p-6 space-y-3 text-xs">
              <h3 className="text-lg font-black text-[#0f1f17]">{st.name}</h3>
              <p className="text-gray-600 flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-[#4caf50]" /> {st.address}</p>
              <p className="text-gray-600 flex items-center"><Phone className="w-3.5 h-3.5 mr-1 text-[#4caf50]" /> {st.phone}</p>
              <p className="text-gray-600 flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-[#4caf50]" /> {st.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
