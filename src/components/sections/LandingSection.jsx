import React from 'react';
import { ChevronRight } from 'lucide-react';

const LandingSection = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden flex flex-col justify-between p-6">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
     
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        {/* Logo & Header */}
        <div className="mb-8 text-center animate-fade-in">
          <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 mb-3" style={{fontFamily: 'Georgia, serif'}}>
            PONOOGUN
          </div>
          <p className="text-slate-300 text-sm tracking-widest uppercase mb-8">Advancing Nephrology Care Through Innovation</p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-lg w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h1 className="text-3xl font-bold text-white mb-2" style={{fontFamily: 'Georgia, serif'}}>
            PISCES-HD Evidence Exercise
          </h1>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            A brief, evidence-based exploration of omega-3 dosing in hemodialysis patients
          </p>

          <div className="space-y-3 mb-8 text-sm">
            <div className="flex items-start gap-3 text-slate-300">
              <span className="text-blue-400 font-bold mt-0.5">✓</span>
              <span><strong>Based on:</strong> PISCES Trial (NEJM 2025), Outcome-trial dose analysis, Real-world practice patterns</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 pt-2 border-t border-white/10">
              <span className="text-blue-400 font-bold">⏱️</span>
              <span>Takes ~3 minutes</span>
            </div>
          </div>

          <div className="space-y-2 mb-8 text-xs text-slate-400">
            <p>✓ Educational exercise</p>
            <p>✓ Voluntary participation</p>
            <p>✓ No endorsement required</p>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
          >
            BEGIN EXERCISE
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Info */}
        <p className="text-slate-400 text-xs mt-6 text-center">
          🎁 Complete the exercise to enter the appreciation draw
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LandingSection;