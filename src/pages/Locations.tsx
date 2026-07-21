import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuelPriceTicker from '../components/FuelPriceTicker';
import { MapPin, Phone, Clock, Search, ShieldCheck, Fuel, Car, Coffee, CheckCircle2 } from 'lucide-react';

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

  const stations: Station[] = [
    {
      id: 'donnybrook',
      name: 'Donnybrook Service Station',
      city: 'Harare',
      address: 'Arcturus Road, Donnybrook, Harare',
      phone: '+263 77 224 5578',
      hours: '24 Hours / 7 Days',
      amenities: ['Diesel 50ppm', 'Unleaded E10', 'High-Flow Pumps', 'LPG Exchange', 'Convenience Store'],
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg',
    },
    {
      id: 'burnside',
      name: 'Burnside Service Station',
      city: 'Bulawayo',
      address: 'Burnside Road, Bulawayo',
      phone: '+263 71 221 3338',
      hours: '24 Hours / 7 Days',
      amenities: ['Diesel 50ppm', 'Unleaded E10', 'Bulk Terminal', 'Fleet Cards', 'Lubricants Bay'],
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo2.jpg',
    },
    {
      id: 'ironbridge',
      name: 'Ironbridge Station',
      city: 'Bulawayo',
      address: 'Ironbridge Road, Bulawayo',
      phone: '+263 77 224 5578',
      hours: '24 Hours / 7 Days',
      amenities: ['Heavy Haulage Pumps', 'Diesel 50ppm', 'Fast Card Lanes', 'Clean Fuel Guarantee'],
      image: 'https://floenergy.net/wp-content/uploads/2018/05/Petrol.jpg',
    },
  ];

  const filteredStations = stations.filter((st) => {
    const matchesCity = selectedCity === 'All' || st.city === selectedCity;
    const matchesSearch = st.name.toLowerCase().includes(search.toLowerCase()) || st.address.toLowerCase().includes(search.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <FuelPriceTicker />

      {/* Header Banner */}
      <section className="flo-hero-gradient text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-flo-gold text-flo-dark text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>FLO Retail & Terminal Network</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-black">Find a FLO Energy Station</h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto">
            Locate FLO Energy service stations across Harare, Bulawayo, and major transit corridors in Zimbabwe.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8 px-4 max-w-7xl mx-auto w-full">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search station or address..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-flo-purple focus:border-transparent"
            />
          </div>

          <div className="flex space-x-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {['All', 'Harare', 'Bulawayo'].map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase transition whitespace-nowrap ${
                  selectedCity === city
                    ? 'bg-flo-purple text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Station Cards */}
      <section className="pb-16 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStations.map((st) => (
            <div key={st.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition duration-300 flex flex-col">
              <img src={st.image} alt={st.name} className="h-48 w-full object-cover" />
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-flo-gold bg-flo-gold/10 px-2.5 py-1 rounded-md">
                      {st.city}
                    </span>
                    <span className="text-xs text-emerald-600 font-semibold flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 mr-1" /> {st.hours}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900">{st.name}</h3>
                  <p className="text-gray-600 text-xs mt-1 flex items-start space-x-1">
                    <MapPin className="w-4 h-4 text-flo-purple shrink-0 mt-0.5" />
                    <span>{st.address}</span>
                  </p>
                  <p className="text-gray-600 text-xs mt-1 flex items-center space-x-1">
                    <Phone className="w-4 h-4 text-flo-purple shrink-0" />
                    <span>{st.phone}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold text-gray-700 mb-2">Available Amenities:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {st.amenities.map((am, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md font-medium">
                        {am}
                      </span>
                    ))}
                  </div>
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
