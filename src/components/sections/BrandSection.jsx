import { ArrowRight, Beaker, Check } from 'lucide-react'

const BrandSection = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 relative overflow-hidden text-white">
      {/* Background Decorative Gradient */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8B0000] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]"></div>

      <div className="max-w-xl w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-7xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
            <span className="gold-text-gradient">3ω</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'serif' }}>
            ThreOmega™
          </h1>
          <p className="text-[#D4AF37] text-xs tracking-[0.3em] font-semibold uppercase">
            Omega-3 for Hemodialysis Patients
          </p>
        </div>

        <div className="premium-card rounded-3xl p-8 mb-10 shadow-2xl relative overflow-hidden border-[#D4AF37]/10">
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                  <Beaker className="w-4 h-4 text-[#D4AF37]" />
                </span>
                Precision Formulation
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                  <span className="text-gray-500 text-xs block mb-1">EPA per capsule</span>
                  <span className="text-3xl font-bold text-white">
                    400 <span className="text-sm font-normal text-gray-500">mg</span>
                  </span>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                  <span className="text-gray-500 text-xs block mb-1">DHA per capsule</span>
                  <span className="text-3xl font-bold text-white">
                    200 <span className="text-sm font-normal text-gray-500">mg</span>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <Check className="w-4 h-4 text-green-500" />
                </span>
                Evidence-Based Dosing
              </h3>
              <div className="space-y-3 bg-gray-900/30 p-6 rounded-2xl border border-gray-800">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm italic">Recommended daily dose</span>{' '}
                  <span className="text-white font-bold">4 capsules (2-BD)</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-800">
                  <span className="text-gray-400 text-sm">Daily EPA total</span>{' '}
                  <span className="text-[#D4AF37] font-bold">1.6 g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Daily DHA total</span>{' '}
                  <span className="text-[#D4AF37] font-bold">0.8 g</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-[10px] text-center mb-10 leading-relaxed uppercase tracking-widest italic">
          Dosing aligned with PISCES trial regimen • Specifically developed for dialysis patients
        </p>

        <button
          onClick={onNext}
          className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-2xl shadow-red-900/30 group"
        >
          ENTER APPRECIATION DRAW
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

export default BrandSection
