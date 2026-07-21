import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Truck, CreditCard, Droplet, Flame, ArrowRight, ShieldCheck, HeavyEquipment } from 'lucide-react';

export const InduzyServicesGrid: React.FC = () => {
  const services = [
    {
      title: 'Low Sulfur Diesel 50ppm',
      desc: 'Ultra-clean diesel engineered to protect heavy industrial engines, haulage trucks, and mining excavators.',
      icon: Fuel,
      image: 'https://floenergy.net/wp-content/uploads/2018/05/Petrol.jpg',
      link: '/services',
    },
    {
      title: 'Bulk Fuel Logistics & Tankers',
      desc: 'Metered 10,000L to 40,000L tanker dispatch to commercial tanks, farms, and remote operational sites.',
      icon: Truck,
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo2.jpg',
      link: '/bulk-fuel',
    },
    {
      title: 'Commercial Fleet Card System',
      desc: 'Cashless fuel management with driver PIN security, odometer entry, and daily liter limit controls.',
      icon: CreditCard,
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg',
      link: '/fleet-card',
    },
    {
      title: 'Unleaded Petrol E10 Blend',
      desc: 'ZERA compliant ethanol blended unleaded petrol for commercial fleets and retail motorists.',
      icon: Droplet,
      image: 'https://floenergy.net/wp-content/uploads/2018/05/Petrol.jpg',
      link: '/services',
    },
    {
      title: 'LP Gas Cylinder & Bulk Refill',
      desc: 'Domestic and commercial LPG solutions with certified pressure-tested cylinder exchange.',
      icon: Flame,
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo1.jpg',
      link: '/services',
    },
    {
      title: 'Heavy Engine Lubricants',
      desc: 'Industrial engine oils, transmission fluids, and high-temp greases for heavy African machinery.',
      icon: ShieldCheck,
      image: 'https://floenergy.net/wp-content/uploads/2020/06/Flo2.jpg',
      link: '/services',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4 font-sans border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-flo-purple uppercase tracking-widest bg-flo-purple-subtle px-3.5 py-1.5 rounded-full inline-block mb-3">
            OUR INDUSTRIAL SERVICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">
            High-Performance Petroleum & Energy Solutions
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Providing reliable fuel grades, certified bulk tanker logistics, and corporate fleet management across Zimbabwe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between group">
                <div className="relative overflow-hidden h-52">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-flo-dark text-flo-gold p-3 rounded-2xl shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-flo-purple transition">{s.title}</h3>
                    <p className="text-gray-600 text-xs mt-2 leading-relaxed">{s.desc}</p>
                  </div>

                  <Link
                    to={s.link}
                    className="inline-flex items-center space-x-2 text-flo-purple font-black text-xs uppercase tracking-wider group-hover:text-flo-gold transition pt-4 border-t border-gray-100"
                  >
                    <span>READ DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InduzyServicesGrid;
