import { ArrowRight, Lightbulb } from 'lucide-react'

const InsightSection = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]"></div>

      <div className="max-w-xl w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="text-center mb-10 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
              <Lightbulb className="w-8 h-8 text-[#D4AF37]" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'serif' }}>
            Key Insight
          </h2>
          <div className="w-12 h-1 bg-[#8B0000] mx-auto rounded-full"></div>
        </div>

        <div className="premium-card rounded-3xl p-10 mb-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Lightbulb className="w-24 h-24 text-[#D4AF37]" />
          </div>
          <p
            className="text-2xl mb-8 leading-relaxed font-medium text-white relative z-10"
            style={{ fontFamily: 'serif' }}
          >
            The PISCES trial demonstrated a <span className="text-[#D4AF37]">43% reduction</span> in
            serious cardiovascular events using{' '}
            <span className="underline decoration-[#8B0000] underline-offset-4">
              EPA 1.6g + DHA 0.8g
            </span>{' '}
            daily in hemodialysis patients.
          </p>
          <div className="border-t border-gray-800 pt-8 relative z-10">
            <p className="text-gray-400 leading-relaxed text-sm italic">
              "Most available omega-3 formulations contain significantly lower doses, highlighting
              the urgency of adopting evidence-based dosing in clinical practice."
            </p>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-xl shadow-red-900/30 group mb-4"
        >
          CONTINUE
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default InsightSection
