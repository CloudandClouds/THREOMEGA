import React from 'react';

const TransitionSection = ({ onNext, onSkip }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
            Section A Complete
          </h2>
          <p className="text-slate-600">Core Evidence Mastered</p>
        </div>

        <div className="bg-white rounded-xl p-6 mb-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-3">SECTION B: Practice Reflection</h3>
          <p className="text-slate-600 text-sm mb-4">
            These questions explore real-world practice patterns and patient selection. Optional but helps refine thinking.
          </p>
          <p className="text-xs text-slate-500">You may skip this section if pressed for time.</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onNext}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            CONTINUE
          </button>
          <button
            onClick={() => onSkip(11)}
            className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 rounded-lg transition-colors"
          >
            SKIP →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransitionSection;