import React from 'react';
import { Users, MapPin, Calendar, Microscope, Activity, ShieldCheck } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-[#8B0000]" />,
      number: '1,228',
      label: 'Total Patients',
      sub: 'Multi-center clinical trial population',
      color: 'from-[#8B0000]/10 to-transparent'
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#D4AF37]" />,
      number: '26',
      label: 'Clinical Sites',
      sub: 'Across major specialized renal centers',
      color: 'from-[#D4AF37]/10 to-transparent'
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#8B0000]" />,
      number: '3.5',
      label: 'Trial Years',
      sub: 'Rigorous long-term clinical evaluation',
      color: 'from-[#8B0000]/10 to-transparent'
    },
    {
      icon: <Microscope className="w-8 h-8 text-[#D4AF37]" />,
      number: 'RCT',
      label: 'Double-Blind',
      sub: 'Gold standard randomized controlled trial',
      color: 'from-[#D4AF37]/10 to-transparent'
    }
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
          <Activity className="w-full h-full text-gray-900" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Icon Container */}
              <div className="relative mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-white transition-colors duration-500 shadow-sm group-hover:shadow-md">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="relative mb-2">
                <h3 className="text-5xl font-bold text-gray-900 tracking-tight group-hover:scale-105 transition-transform duration-500 origin-left">
                  {stat.number}
                </h3>
              </div>

              {/* Label */}
              <div className="relative">
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {stat.sub}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-[-10px] right-[-10px] opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-500">
                  <ShieldCheck className="w-24 h-24 text-gray-900" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCards;