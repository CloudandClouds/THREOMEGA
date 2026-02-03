const InsightSection = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">💡</div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
            Key Insight
          </h2>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <p className="text-lg mb-6 leading-relaxed font-medium">
            The PISCES trial demonstrated a <strong>43% reduction in serious cardiovascular events</strong> using EPA 1.6g + DHA 0.8g daily in hemodialysis patients.
          </p>
          <div className="border-t border-white/30 pt-6">
            <p className="text-sm opacity-90">
              Most available omega-3 formulations contain significantly lower doses, highlighting the importance of evidence-based supplementation dosing.
            </p>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default InsightSection;
