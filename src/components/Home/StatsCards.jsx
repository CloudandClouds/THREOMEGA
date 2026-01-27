import React, { Component } from 'react';

class StatsCards extends Component {
  render() {
    const stats = [
      {
        icon: (
          <svg className="w-8 h-8 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 8h2v10h-2V11z"/>
          </svg>
        ),
        number: '1,228',
        label: 'PATIENTS',
        color: 'text-[#C4973C]'
      },
      {
        icon: (
          <svg className="w-8 h-8 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        ),
        number: '26',
        label: 'SITES',
        color: 'text-[#C4973C]'
      },
      {
        icon: (
          <svg className="w-8 h-8 text-[#DC2626]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
          </svg>
        ),
        number: '3.5',
        label: 'YEARS',
        color: 'text-[#C4973C]'
      },
      {
        icon: (
          <svg className="w-8 h-8 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
            <path d="M9 7h6v2H9zm0 4h6v2H9z"/>
          </svg>
        ),
        number: 'RCT',
        label: 'DOUBLE-BLIND',
        color: 'text-[#C4973C]'
      }
    ];

    return (
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  {stat.icon}
                </div>

                {/* Number */}
                <h3 className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="text-gray-600 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCards;