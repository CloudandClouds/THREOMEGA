import React, { useState } from 'react';
import { ChevronRight, FileText, CheckCircle2 } from 'lucide-react';

const TermsAndConditionsSection = ({ onNext }) => {
  const [agreed, setAgreed] = useState(false);

  const points = [
    {
      title: "Professional Participation",
      description: "This evidence-based exercise is designed for healthcare professionals to review and analyze clinical data from the PISCES-HD trial (NEJM 2025)."
    },
    {
      title: "Appreciation Draw Eligibility",
      description: "Only participants who complete the entire exercise and provide valid professional credentials during registration are eligible for the appreciation draw."
    },
    {
      title: "Winner Selection Process",
      description: "Winners will be selected via a randomized system from the pool of eligible participants who have successfully completed the clinical evidence review."
    },
    {
      title: "Time-Sensitive Response",
      description: "Selected winners must respond to the prize notification via the provided contact method within 2 days (48 hours). If no response is received, the winner position will be forfeited, and a new winner will be selected and announced."
    },
    {
      title: "Data Integrity & Privacy",
      description: "The information provided, including professional credentials, will be used exclusively for verification purposes and for coordinating the delivery of appreciation rewards."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col justify-center items-center p-6 text-gray-900">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8B0000] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08]"></div>
      </div>
     
      <div className="relative z-10 max-w-2xl w-full">
        <div className="mb-8 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-semibold tracking-widest text-xs uppercase text-center">Participation Guidelines</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2" style={{fontFamily: 'serif'}}>
            Terms & Conditions
          </h2>
          <p className="text-gray-500 text-sm">Please review the following points before proceeding to the test.</p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-10 shadow-xl animate-slide-up">
          <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
            {points.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-xs border border-[#D4AF37]/20">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wider">{point.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200 mb-8 cursor-pointer group" onClick={() => setAgreed(!agreed)}>
            <div className={`mt-1 w-6 h-6 rounded-md border-2 transition-all flex items-center justify-center ${agreed ? 'bg-[#8B0000] border-[#8B0000]' : 'bg-white border-gray-300 group-hover:border-[#8B0000]'}`}>
              {agreed && <CheckCircle2 className="w-4 h-4 text-white" />}
            </div>
            <p className="text-sm text-gray-700 leading-snug">
              I have read and understood the terms and conditions, and I agree to participate in this clinical evidence exercise.
            </p>
          </div>

          <button
            onClick={onNext}
            disabled={!agreed}
            className={`w-full font-bold py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${
              agreed 
                ? 'bg-[#8B0000] hover:bg-[#A50000] text-white hover:shadow-xl transform hover:scale-[1.02]' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            PROCEED TO INSTRUCTIONS
            <ChevronRight className={`w-6 h-6 transition-transform ${agreed ? 'group-hover:translate-x-1' : ''}`} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #B8860B;
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditionsSection;
