import React from 'react';
import { ChevronRight, ClipboardList, Timer, Target, HelpCircle } from 'lucide-react';

const InstructionSection = ({ onNext }) => {
  const instructions = [
    {
      icon: <Timer className="w-5 h-5 text-[#8B0000]" />,
      title: "Duration",
      description: "The entire exercise takes approximately 3 minutes to complete."
    },
    {
      icon: <Target className="w-5 h-5 text-[#D4AF37]" />,
      title: "Section A: Evidence Review",
      description: "5 questions focused on the clinical data and findings of the PISCES-HD trial."
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-[#8B0000]" />,
      title: "Section B: Practice Insight",
      description: "3 questions designed to gather clinical perspectives and real-world observations."
    },
    {
      icon: <ClipboardList className="w-5 h-5 text-[#D4AF37]" />,
      title: "Submission",
      description: "Review all data and answer each question. Feedback will be provided after each response."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col justify-center items-center p-6 text-gray-900">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8B0000] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.08]"></div>
      </div>
     
      <div className="relative z-10 max-w-2xl w-full">
        <div className="mb-12 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-semibold tracking-widest text-xs uppercase">Preparation</span>
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2" style={{fontFamily: 'serif'}}>
            Exercise Instructions
          </h2>
          <p className="text-gray-500 text-sm italic">Briefly review the process before starting the assessment.</p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-10 shadow-xl animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {instructions.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#D4AF37]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wider">{item.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onNext}
            className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl"
          >
            START THE TEST
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-6 text-center text-xs text-gray-400">
            Complete all sections to qualify for the appreciation draw.
          </p>
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
      `}</style>
    </div>
  );
};

export default InstructionSection;
