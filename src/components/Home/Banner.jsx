import { Component } from 'react';
import image from "../../assets/womans-hand-holding-fish-oil-supplements.jpg"

class Banner extends Component {
  render() {
    return (
      <div className="bg-[#0B1838] min-h-[500px] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content - 65% width */}
            <div className="w-full lg:w-[65%] text-white space-y-6">
              {/* Badge */}
              <div className="inline-block">
                <span className="bg-[#DC2626] text-white px-4 py-2 rounded text-xs font-medium uppercase tracking-wide">
                  PUBLISHED IN NEW ENGLAND JOURNAL OF MEDICINE (NEJM 2025)
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
               ADVANCING CARDIOVASCULAR RISK
                <br />
                REDUCTION IN HEMODIALYSIS
                <br />
                PATIENT CARE
               
                


              </h1>

              {/* Subheading */}
              <p className="text-gray-300 text-lg md:text-xl">
               Evidence-Based Cardiac Protection for Dialysis Patients.
Integrating <br/> clinical research, guideline-driven care, and risk-reduction strategies <br/> to improve cardiovascular outcomes.
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Right Image - 35% width */}
            <div className="w-full lg:w-[35%] flex justify-center lg:justify-end">
              <img 
                src={image}
                alt="Cardiovascular illustration" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner