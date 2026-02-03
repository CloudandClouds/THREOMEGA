import React from 'react';
import { ChevronRight, ShieldCheck, Clock, Award } from 'lucide-react';

const LandingSection = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col justify-center items-center p-6 text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8B0000] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
     
      <div className="relative z-10 max-w-2xl w-full">
        {/* Brand Header */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-semibold tracking-widest text-xs uppercase">Premium Clinical Evidence</span>
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
          </div>
          <h1 className="text-6xl font-bold gold-text-gradient mb-4" style={{fontFamily: 'serif'}}>
            PONOOGUN
          </h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-8">Advancing Nephrology Care Through Innovation</p>
        </div>

        {/* Main Content Card */}
        <div className="premium-card rounded-3xl p-8 lg:p-10 animate-slide-up">
          <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily: 'serif'}}>
            PISCES-HD Evidence Exercise
          </h2>
          <p className="text-gray-400 text-base mb-8 leading-relaxed">
            A brief, evidence-based exploration of omega-3 dosing in hemodialysis patients, focusing on the latest clinical breakthroughs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="block text-white text-sm font-semibold">Evidence Based</span>
                <span className="text-gray-500 text-xs">PISCES Trial (NEJM 2025)</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#EF4444]" />
              </div>
              <div>
                <span className="block text-white text-sm font-semibold">Quick Session</span>
                <span className="text-gray-500 text-xs">Takes ~3 minutes</span>
              </div>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 group shadow-xl shadow-red-900/20"
          >
            BEGIN EXERCISE
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-8 pt-8 border-t border-gray-800 flex items-center justify-center gap-3 text-gray-400">
            <Award className="w-5 h-5 text-[#D4AF37]" />
            <p className="text-xs uppercase tracking-widest">Complete to enter the appreciation draw</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default LandingSection;
