import { ArrowRight, Beaker, Check } from 'lucide-react'

const BrandSection = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden text-gray-900">
      {/* Background Decorative Gradient */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.06]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8B0000] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.06]"></div>

      <div className="max-w-xl w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-7xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B0000] bg-clip-text text-transparent">3ω</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>
            ThreOmega™
          </h1>
          <p className="text-[#D4AF37] text-xs tracking-[0.3em] font-semibold uppercase">
            Omega-3 for Hemodialysis Patients
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 mb-10 shadow-xl relative overflow-hidden">
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center border-2 border-[#D4AF37]/30">
                  <Beaker className="w-4 h-4 text-[#D4AF37]" />
                </span>
                Precision Formulation
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
                  <span className="text-gray-500 text-xs block mb-1">EPA per capsule</span>
                  <span className="text-3xl font-bold text-gray-900">
                    400 <span className="text-sm font-normal text-gray-500">mg</span>
                  </span>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
                  <span className="text-gray-500 text-xs block mb-1">DHA per capsule</span>
                  <span className="text-3xl font-bold text-gray-900">
                    200 <span className="text-sm font-normal text-gray-500">mg</span>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center border-2 border-green-500/30">
                  <Check className="w-4 h-4 text-green-500" />
                </span>
                Evidence-Based Dosing
              </h3>
              <div className="space-y-3 bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm italic">Recommended daily dose</span>{' '}
                  <span className="text-gray-900 font-bold">4 capsules (2-BD)</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-gray-600 text-sm">Daily EPA total</span>{' '}
                  <span className="text-[#D4AF37] font-bold">1.6 g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Daily DHA total</span>{' '}
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
          className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
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
