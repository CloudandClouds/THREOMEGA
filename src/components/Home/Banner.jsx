import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="bg-[#0B1838] min-h-[500px] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              {/* Badge */}
              <div className="inline-block">
                <span className="bg-[#DC2626] text-white px-4 py-2 rounded text-xs font-medium uppercase tracking-wide">
                  PUBLISHED IN NEW ENGLAND JOURNAL OF MEDICINE (NEJM 2025)
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
                ADVANCING
                <br />
                CARDIOVASCULAR RISK
                <br />
                REDUCTION IN
                <br />
                HEMODIALYSIS PATIENTS
              </h1>

              {/* Subheading */}
              <p className="text-gray-300 text-lg md:text-xl">
                Evidence-Based Cardiac Protection for Dialysis Patients
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-[#C4973C] hover:bg-[#B38730] text-white px-8 py-3 rounded-full text-sm font-medium transition-all uppercase tracking-wide">
                  FOR PATIENTS
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-[#0B1838] text-white px-8 py-3 rounded-full text-sm font-medium transition-all uppercase tracking-wide">
                  FOR DOCTORS
                </button>
                <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-3 rounded-full text-sm font-medium transition-all uppercase tracking-wide flex items-center gap-2">
                  ORDER NOW
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C4973C] rounded-full"></div>
                  <span className="text-sm text-gray-300">NEJM Published Evidence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C4973C] rounded-full"></div>
                  <span className="text-sm text-gray-300">43% CV Risk Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C4973C] rounded-full"></div>
                  <span className="text-sm text-gray-300">1,225 Patients Studied</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-400 to-blue-300 rounded-3xl p-8 shadow-2xl">
                  {/* Heart Illustration */}
                  <div className="w-full max-w-md">
                    <svg
                      viewBox="0 0 400 400"
                      className="w-full h-auto"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Simple heart illustration */}
                      <defs>
                        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#EF4444', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      
                      {/* Heart shape */}
                      <path
                        d="M200,350 C200,350 50,250 50,150 C50,100 75,75 100,75 C125,75 150,90 200,150 C250,90 275,75 300,75 C325,75 350,100 350,150 C350,250 200,350 200,350 Z"
                        fill="url(#heartGradient)"
                        stroke="#B91C1C"
                        strokeWidth="3"
                      />
                      
                      {/* Blood vessels */}
                      <g className="opacity-80">
                        <circle cx="200" cy="120" r="8" fill="#3B82F6" />
                        <circle cx="180" cy="160" r="8" fill="#3B82F6" />
                        <circle cx="220" cy="160" r="8" fill="#3B82F6" />
                        <circle cx="160" cy="200" r="8" fill="#3B82F6" />
                        <circle cx="240" cy="200" r="8" fill="#3B82F6" />
                        <circle cx="200" cy="240" r="8" fill="#3B82F6" />
                        
                        {/* Connecting lines */}
                        <line x1="200" y1="120" x2="180" y2="160" stroke="#60A5FA" strokeWidth="4" />
                        <line x1="200" y1="120" x2="220" y2="160" stroke="#60A5FA" strokeWidth="4" />
                        <line x1="180" y1="160" x2="160" y2="200" stroke="#60A5FA" strokeWidth="4" />
                        <line x1="220" y1="160" x2="240" y2="200" stroke="#60A5FA" strokeWidth="4" />
                        <line x1="160" y1="200" x2="200" y2="240" stroke="#60A5FA" strokeWidth="4" />
                        <line x1="240" y1="200" x2="200" y2="240" stroke="#60A5FA" strokeWidth="4" />
                      </g>
                      
                      {/* Geometric pattern overlay */}
                      <g className="opacity-30">
                        <path d="M 150,140 L 250,140 L 200,200 Z" fill="#FFFFFF" />
                        <path d="M 150,240 L 250,240 L 200,180 Z" fill="#FFFFFF" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;