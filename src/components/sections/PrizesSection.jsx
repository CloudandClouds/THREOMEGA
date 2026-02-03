import React, { useState } from 'react';
import { ChevronRight, Gift, Trophy, Star, ArrowRight, ShieldCheck } from 'lucide-react';

const PrizesSection = ({ onNext }) => {
  const [expandedPrize, setExpandedPrize] = useState(null);

  const prizes = [
    {
      icon: "🥇",
      title: "First Prize",
      subtitle: "1 Winner • ₹3.5 Lakhs",
      details: [
        { label: "International Congress Sponsorship", items: ["ASN Kidney Week (USA) OR ERA Congress (Europe)", "Full conference registration", "Round-trip international airfare", "5-night accommodation", "Travel allowance"] },
        { label: "OR Research Grant", value: "₹3,00,000", sub: "For institutional research or charitable dialysis support" }
      ]
    },
    {
      icon: "🥈",
      title: "Second Prize",
      subtitle: "1 Winner • ₹1 Lakh",
      details: [
        { label: "Professional Medical Package", items: ["Portable Vascular Ultrasound Device", "OR Point-of-Care Ultrasound (POCUS)", "OR Medical Education Package", "All options include training & warranty"] },
        { label: "OR Research Grant", value: "₹1,00,000", sub: "Institutional research support" }
      ]
    },
    {
      icon: "🥉",
      title: "Third Prize",
      subtitle: "1 Winner • ₹50,000",
      details: [
        { label: "Professional Development Package", items: ["Premium Medical Books (₹50K)", "OR Digital Learning Package", "OR National Conference Package", "OR CME & Workshop Series"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-6 text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8B0000] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03]"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
              <Gift className="w-8 h-8 text-[#D4AF37]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2" style={{fontFamily: 'serif'}}>
            Appreciation Draw
          </h1>
          <p className="text-gray-500 text-sm tracking-wider uppercase">Institutional Recognition & Professional Development</p>
        </div>

        {/* Prizes List */}
        <div className="space-y-4 mb-10">
          {prizes.map((prize, idx) => (
            <div key={idx} className={`premium-card rounded-2xl overflow-hidden transition-all duration-300 ${expandedPrize === idx ? 'ring-1 ring-[#D4AF37]/30' : ''}`}>
              <button
                onClick={() => setExpandedPrize(expandedPrize === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <div className="flex items-center gap-6">
                   <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">{prize.icon}</div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-1">{prize.title}</h3>
                     <p className="text-[#D4AF37] text-sm font-medium">{prize.subtitle}</p>
                   </div>
                </div>
                <ChevronRight className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${expandedPrize === idx ? 'rotate-90 text-[#D4AF37]' : ''}`} />
              </button>
              
              {expandedPrize === idx && (
                <div className="px-8 pb-8 animate-slide-up">
                  <div className="space-y-6 pt-6 border-t border-gray-800">
                    {prize.details.map((detail, dIdx) => (
                      <div key={dIdx} className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                        <p className={`font-bold mb-4 uppercase tracking-widest text-xs ${detail.value ? 'text-[#D4AF37]' : 'text-white'}`}>
                           {detail.label}
                        </p>
                        {detail.items ? (
                           <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                             {detail.items.map((item, iIdx) => (
                               <li key={iIdx} className="flex items-start gap-2 text-sm text-gray-400">
                                 <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                 <span>{item}</span>
                               </li>
                             ))}
                           </ul>
                        ) : (
                           <div className="flex flex-col">
                              <span className="text-2xl font-bold gold-text-gradient">{detail.value}</span>
                              <span className="text-gray-500 text-xs mt-1">{detail.sub}</span>
                           </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Draw Process Card */}
        <div className="premium-card rounded-2xl p-8 mb-10 border-[#8B0000]/20">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-5 h-5 text-[#8B0000]" />
            <h3 className="text-lg font-bold text-white uppercase tracking-widest text-xs">Draw Protocol</h3>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center md:text-left">
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Timeline</p>
              <p className="text-sm font-semibold text-white">30 days post-launch</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Methodology</p>
              <p className="text-sm font-semibold text-white">Automated RNG selection</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Verification</p>
              <p className="text-sm font-semibold text-white">Email + Tele-verification</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Compliance</p>
              <p className="text-sm font-semibold text-white">Published Results</p>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-2xl shadow-red-900/30 group mb-6"
        >
          PROCEED TO REGISTRATION
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-start gap-3 justify-center px-4">
          <ShieldCheck className="w-5 h-5 text-gray-600 flex-shrink-0" />
          <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center leading-loose">
            Educational participation contribution • Independent of product prescription • Ethical compliance guidelines followed
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PrizesSection;
