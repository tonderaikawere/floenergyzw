import React from 'react';
import { Link } from 'react-router-dom';

export const AluwindPartnerSection: React.FC = () => {
  const cards = [
    {
      title: 'Engineering',
      desc: 'Our cooperation with commercial partners is based on complete responsibility for fuel standard specifications.',
      image: '/images/flo/station_fb.jpg',
      link: '/services',
    },
    {
      title: 'Production & Storage',
      desc: 'The core services offered by FLO Energy include state-of-the-art metered storage terminal facilities.',
      image: '/images/flo/tanker_fb.jpg',
      link: '/bulk-fuel',
    },
    {
      title: 'Logistics & Tankers',
      desc: 'At FLO Energy we have developed strong competencies in 10kL to 40kL metered bulk tanker logistics.',
      image: '/images/flo/logo_fb.jpg',
      link: '/fleet-card',
    },
  ];

  return (
    <section className="py-20 bg-[#0f1f17] text-white px-4 font-sans border-y border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="w-10 h-2 bg-[#4caf50] rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Experienced partner in the global energy industry
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm font-normal leading-relaxed">
              Based on a team of competent logistics engineers, project managers, and external transport partners, FLO Energy offers solutions within product delivery ranging from day-to-day technical support to large-scale supply projects.
            </p>
          </div>

          <Link
            to="/about"
            className="bg-[#4caf50] hover:bg-[#388e3c] text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3 shadow transition shrink-0"
          >
            <span>OUR QUALIFICATIONS</span>
          </Link>
        </div>

        {/* 3 Full-Height Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="group relative overflow-hidden shadow-2xl h-[420px] border border-white/10 flex flex-col justify-end p-6"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f17] via-[#0f1f17]/50 to-transparent" />

              <div className="relative z-10 space-y-2">
                <h3 className="text-2xl font-black text-white group-hover:text-[#4caf50] transition">{card.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed font-normal opacity-90">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AluwindPartnerSection;
