import React, { useState } from 'react';
import AluwindHeaderTop from '../components/AluwindHeaderTop';
import AluwindNavbar from '../components/AluwindNavbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock, Search, Navigation } from 'lucide-react';
import { getStationMapUrl } from '../lib/maps';
import StationFilterTabs from '../components/StationFilterTabs';
import WindLeafIcon from '../components/WindLeafIcon';

interface Station {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  amenities: string[];
  image: string;
}

export const Locations: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedAmenity, setSelectedAmenity] = useState('All');

  const stations: Station[] = [
    {
      id: 'donnybrook',
      name: 'Donnybrook Service Station',
      city: 'Harare',
      address: 'Arcturus Road, Donnybrook, Harare',
      phone: '+263 77 224 5578',
      hours: '24 Hours / 7 Days',
      amenities: ['Diesel 50ppm', 'Unleaded E10', 'High-Flow Pumps', 'LPG Exchange', 'Convenience Store'],
      image: '/images/flo/station_fb.jpg',
    },
    {
      id: 'burnside',
      name: 'Burnside Service Station',
      city: 'Bulawayo',
      address: 'Burnside Road, Bulawayo',
      phone: '+263 71 221 3338',
      hours: '24 Hours / 7 Days',
      amenities: ['Diesel 50ppm', 'Unleaded E10', 'Bulk Terminal', 'Fleet Cards', 'Lubricants Bay'],
      image: '/images/flo/tanker_fb.jpg',
    },
    {
      id: 'ironbridge',
      name: 'Ironbridge Station',
      city: 'Bulawayo',
      address: 'Ironbridge Road, Bulawayo',
      phone: '+263 77 224 5578',
      hours: '24 Hours / 7 Days',
      amenities: ['Heavy Haulage Pumps', 'Diesel 50ppm', 'Fast Card Lanes', 'Clean Fuel Guarantee'],
      image: '/images/flo/logo_fb.jpg',
    },
  ];

  const filteredStations = stations.filter((st) => {
    const matchesCity = selectedCity === 'All' || st.city === selectedCity;
    const matchesAmenity = selectedAmenity === 'All' || st.amenities.some((a) => a.toLowerCase().includes(selectedAmenity.toLowerCase()));
    const matchesSearch = st.name.toLowerCase().includes(search.toLowerCase()) || st.address.toLowerCase().includes(search.toLowerCase());
    return matchesCity && matchesAmenity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <AluwindHeaderTop />
      <AluwindNavbar />

      {/* Header Banner */}
      <section className="relative bg-aluwind-dark text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0" />
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="flex justify-center mb-2">
            <WindLeafIcon className="w-8 h-4 text-aluwind-green" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">Find a FLO Energy Station</h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Locate FLO Energy service stations across Harare, Bulawayo, and major transit corridors in Zimbabwe.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-gray-50 p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search station or address..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-white rounded-none text-xs focus:ring-1 focus:ring-aluwind-green focus:border-transparent outline-none"
            />
          </div>

          <div className="flex space-x-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {['All', 'Harare', 'Bulawayo'].map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2.5 font-bold text-[10px] uppercase tracking-widest transition whitespace-nowrap rounded-none ${
                  selectedCity === city
                    ? 'bg-aluwind-green text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <StationFilterTabs selectedAmenity={selectedAmenity} onSelectAmenity={setSelectedAmenity} />
      </section>

      {/* Station Cards */}
      <section className="pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStations.map((st) => (
            <div key={st.id} className="bg-gray-50 overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col">
              <img src={st.image} alt={st.name} className="h-48 w-full object-cover" />
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-extrabold text-aluwind-dark bg-aluwind-light px-2.5 py-1">
                      {st.city}
                    </span>
                    <span className="text-[11px] text-emerald-700 font-bold flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 mr-1" /> {st.hours}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{st.name}</h3>
                  <p className="text-gray-600 text-xs mt-2 flex items-start space-x-1.5">
                    <MapPin className="w-4 h-4 text-aluwind-green shrink-0 mt-0.5" />
                    <span>{st.address}</span>
                  </p>
                  <p className="text-gray-600 text-xs mt-1.5 flex items-center space-x-1.5">
                    <Phone className="w-4 h-4 text-aluwind-green shrink-0" />
                    <span>{st.phone}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-[10px] font-extrabold text-gray-700 uppercase tracking-widest mb-2">Available Amenities:</div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {st.amenities.map((am, idx) => (
                      <span key={idx} className="bg-white text-gray-600 text-xs px-2.5 py-1 border border-gray-100 font-medium">
                        {am}
                      </span>
                    ))}
                  </div>
                  <a
                    href={getStationMapUrl(st.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-aluwind-light hover:bg-aluwind-light/80 text-aluwind-dark font-bold text-[10px] uppercase tracking-widest transition flex items-center justify-center space-x-2"
                  >
                    <Navigation className="w-3.5 h-3.5 text-aluwind-dark" />
                    <span>Get Directions on Map</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
