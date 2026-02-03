const BrandSection = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-lg w-full relative z-10">
        <div className="text-center mb-12">
          <div className="text-7xl font-bold mb-2" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">3ω</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2" style={{fontFamily: 'Georgia, serif'}}>
            ThreOmega™
          </h1>
          <p className="text-slate-300 text-sm tracking-wide uppercase">Omega-3 for Hemodialysis Patients</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-8">
          <h3 className="text-slate-200 text-xs uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center">⚗️</span>
            Precision Formulation
          </h3>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <span className="text-slate-300">EPA per capsule</span>
              <span className="text-2xl font-bold text-blue-300">400 mg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">DHA per capsule</span>
              <span className="text-2xl font-bold text-cyan-300">200 mg</span>
            </div>
          </div>

          <h3 className="text-slate-200 text-xs uppercase tracking-widest font-bold mb-6 flex items-center gap-2 pt-4 border-t border-white/10">
            <span className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center">✓</span>
            Evidence-Based Dosing
          </h3>
          <div className="space-y-3 text-sm">
            <p className="flex justify-between"><span className="text-slate-300">Recommended daily dose</span> <span className="text-white font-semibold">4 capsules (2 BD)</span></p>
            <p className="flex justify-between"><span className="text-slate-300">Daily EPA total</span> <span className="text-white font-semibold">1.6 g</span></p>
            <p className="flex justify-between"><span className="text-slate-300">Daily DHA total</span> <span className="text-white font-semibold">0.8 g</span></p>
          </div>
        </div>

        <p className="text-slate-400 text-xs text-center mb-8">
          Dosing aligned with PISCES trial regimen • Specifically developed for dialysis patients with high cardiovascular burden
        </p>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          ENTER APPRECIATION DRAW
        </button>
      </div>
    </div>
  );
};

export default BrandSection;