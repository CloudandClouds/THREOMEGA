import React, { Component } from 'react';

class PiscesTrial extends Component {
  render() {
    return (
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="relative">
              {/* Red border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]"></div>
              
              <div className="pl-8">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-[#DC2626]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                  <span className="text-gray-700 text-sm font-medium uppercase tracking-wide">
                    RECENT CLINICAL EVIDENCE
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-6 leading-tight">
                  PISCES TRIAL
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  High-quality clinical study published in New England Journal of Medicine (2025) evaluating omega-3 supplementation in hemodialysis patients
                </p>

                {/* Study Details Box */}
                <div className="bg-[#FFFBF0] border-l-4 border-[#C4973C] p-6 mb-8 rounded-r-lg">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">
                    WHAT WAS STUDIED:
                  </h3>

                  <div className="space-y-4">
                    {/* Omega-3 Supplementation */}
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Omega-3 Supplementation: <span className="font-normal">4g daily</span>
                      </p>
                      <p className="text-gray-600 text-sm">
                        (EPA 1.6g + DHA 0.8g)
                      </p>
                    </div>

                    {/* VS divider */}
                    <div className="flex items-center justify-center py-2">
                      <div className="flex-1 border-t border-gray-300"></div>
                      <span className="px-4 text-gray-500 font-medium">Vs.</span>
                      <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Placebo */}
                    <div>
                      <p className="font-semibold text-gray-900">
                        Placebo <span className="font-normal">in Hemodialysis Patients</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2 shadow-md hover:shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    WATCH 2-MIN VIDEO
                  </button>

                  <button className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-md font-medium transition-all flex items-center gap-2 shadow-md hover:shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    READ FULL STUDY
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image - Medical Room */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                {/* Medical room illustration */}
                <div className="relative h-96 bg-gradient-to-br from-blue-50 to-blue-100">
                  {/* Simulated medical room with monitors and equipment */}
                  <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Background - Room */}
                    <rect x="0" y="0" width="800" height="600" fill="url(#roomGradient)"/>
                    
                    <defs>
                      <linearGradient id="roomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#E0F2FE', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#BAE6FD', stopOpacity: 1}} />
                      </linearGradient>
                      
                      <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#1E3A8A', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    
                    {/* Ceiling lights */}
                    <rect x="100" y="30" width="200" height="15" rx="5" fill="#E0E7FF" opacity="0.8"/>
                    <rect x="350" y="30" width="200" height="15" rx="5" fill="#E0E7FF" opacity="0.8"/>
                    <rect x="600" y="30" width="150" height="15" rx="5" fill="#E0E7FF" opacity="0.8"/>
                    
                    {/* Monitor 1 - Left */}
                    <rect x="50" y="120" width="280" height="180" rx="10" fill="#1E293B"/>
                    <rect x="65" y="135" width="250" height="150" rx="5" fill="url(#screenGlow)"/>
                    {/* ECG line */}
                    <polyline points="70,180 120,180 140,150 160,210 180,180 230,180 250,160 270,200 300,180" 
                              stroke="#22D3EE" strokeWidth="3" fill="none"/>
                    <polyline points="70,220 100,220 115,200 130,240 150,220 200,220" 
                              stroke="#22D3EE" strokeWidth="2" fill="none" opacity="0.6"/>
                    
                    {/* Monitor 2 - Right Top */}
                    <rect x="470" y="100" width="280" height="160" rx="10" fill="#1E293B"/>
                    <rect x="485" y="115" width="250" height="130" rx="5" fill="url(#screenGlow)"/>
                    {/* Vital signs display */}
                    <text x="520" y="160" fill="#22D3EE" fontSize="24" fontWeight="bold">98</text>
                    <text x="520" y="185" fill="#93C5FD" fontSize="14">BPM</text>
                    <text x="620" y="160" fill="#22D3EE" fontSize="24" fontWeight="bold">120/80</text>
                    <text x="620" y="185" fill="#93C5FD" fontSize="14">mmHg</text>
                    
                    {/* Medical Equipment Cart */}
                    <rect x="350" y="320" width="180" height="220" rx="8" fill="#93C5FD"/>
                    <rect x="360" y="330" width="160" height="40" rx="4" fill="#1E40AF"/>
                    <rect x="360" y="380" width="160" height="80" rx="4" fill="#DBEAFE"/>
                    <circle cx="400" cy="540" r="15" fill="#334155"/>
                    <circle cx="480" cy="540" r="15" fill="#334155"/>
                    
                    {/* Medical Bed/Equipment */}
                    <rect x="80" y="350" width="220" height="180" rx="10" fill="#BFDBFE"/>
                    <rect x="90" y="360" width="200" height="30" rx="5" fill="#60A5FA"/>
                    <rect x="100" y="410" width="180" height="100" rx="8" fill="#DBEAFE"/>
                    
                    {/* IV Stand */}
                    <line x1="600" y1="280" x2="600" y2="480" stroke="#64748B" strokeWidth="8"/>
                    <circle cx="600" cy="270" r="20" fill="#94A3B8"/>
                    <rect x="570" y="260" width="60" height="8" rx="4" fill="#CBD5E1"/>
                    <circle cx="600" cy="490" r="12" fill="#475569"/>
                    
                    {/* Computer/Control Panel */}
                    <rect x="580" y="380" width="160" height="140" rx="8" fill="#475569"/>
                    <rect x="595" y="395" width="130" height="90" rx="4" fill="#1E3A8A"/>
                    <rect x="605" y="405" width="110" height="70" rx="2" fill="#3B82F6"/>
                    {/* Buttons */}
                    <circle cx="620" cy="505" r="8" fill="#22C55E"/>
                    <circle cx="650" cy="505" r="8" fill="#EAB308"/>
                    <circle cx="680" cy="505" r="8" fill="#EF4444"/>
                    
                    {/* Floor reflection effect */}
                    <ellipse cx="400" cy="580" rx="350" ry="15" fill="#94A3B8" opacity="0.2"/>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default PiscesTrial;