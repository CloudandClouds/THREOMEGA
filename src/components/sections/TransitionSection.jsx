import { ArrowRight, CheckCircle2 } from 'lucide-react'

const TransitionSection = ({ onNext, onSkip }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-gray-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[180px] opacity-[0.06]"></div>

      <div className="max-w-md w-full text-center relative z-10">
        <div className="mb-10 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center border-2 border-green-500/30 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'serif' }}>
            Section A Complete
          </h2>
          <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-xs">
            Core Evidence Mastered
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-10 shadow-xl animate-slide-up">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Phase B: Practice Reflection</h3>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Exploration of real-world practice patterns and patient selection. These insights help
            bridge clinical data with daily care.
          </p>
          <div className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-50 rounded-lg inline-block mx-auto border border-gray-200">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">
              Optional selection
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={onNext}
            className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
          >
            CONTINUE TO PHASE B
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onSkip(12)}
            className="w-full bg-transparent hover:bg-gray-50 text-gray-600 hover:text-gray-900 font-semibold py-4 rounded-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
          >
            SKIP →
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default TransitionSection
