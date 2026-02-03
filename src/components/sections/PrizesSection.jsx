import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const PrizesSection = ({ onNext }) => {
  const [expandedPrize, setExpandedPrize] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">🎁</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
            Appreciation Draw
          </h1>
          <p className="text-slate-600">As appreciation for engaging with nephrology evidence</p>
        </div>

        {/* Prize 1 */}
        <div className="mb-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
          <button
            onClick={() => setExpandedPrize(expandedPrize === 0 ? null : 0)}
            className="w-full p-6 text-left hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-colors flex justify-between items-center"
          >
            <div>
              <div className="text-4xl mb-2">🥇</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">First Prize</h3>
              <p className="text-slate-600 text-sm">1 Winner • ₹3.5 Lakhs</p>
            </div>
            <ChevronRight className={`w-6 h-6 text-slate-400 transition-transform ${expandedPrize === 0 ? 'rotate-90' : ''}`} />
          </button>
          {expandedPrize === 0 && (
            <div className="px-6 pb-6 border-t border-slate-200 space-y-4">
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4">
                <p className="font-bold text-slate-900 mb-3">📍 International Congress Sponsorship</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>✓ ASN Kidney Week (USA) OR ERA Congress (Europe)</li>
                  <li>✓ Full conference registration</li>
                  <li>✓ Round-trip international airfare</li>
                  <li>✓ 5-night accommodation</li>
                  <li>✓ Travel allowance</li>
                </ul>
              </div>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center">
                <p className="text-sm text-slate-600 mb-2">OR</p>
                <p className="font-bold text-slate-900">Research Grant: ₹3,00,000</p>
                <p className="text-xs text-slate-600 mt-1">For institutional research or charitable dialysis support</p>
              </div>
            </div>
          )}
        </div>

        {/* Prize 2 */}
        <div className="mb-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
          <button
            onClick={() => setExpandedPrize(expandedPrize === 1 ? null : 1)}
            className="w-full p-6 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-colors flex justify-between items-center"
          >
            <div>
              <div className="text-4xl mb-2">🥈</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Second Prize</h3>
              <p className="text-slate-600 text-sm">1 Winner • ₹1 Lakh</p>
            </div>
            <ChevronRight className={`w-6 h-6 text-slate-400 transition-transform ${expandedPrize === 1 ? 'rotate-90' : ''}`} />
          </button>
          {expandedPrize === 1 && (
            <div className="px-6 pb-6 border-t border-slate-200 space-y-4">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-4">
                <p className="font-bold text-slate-900 mb-3">📍 Professional Medical Package</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>✓ Portable Vascular Ultrasound Device</li>
                  <li>✓ OR Point-of-Care Ultrasound (POCUS)</li>
                  <li>✓ OR Medical Education Package</li>
                  <li>✓ All options include training & warranty</li>
                </ul>
              </div>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center">
                <p className="text-sm text-slate-600 mb-2">OR</p>
                <p className="font-bold text-slate-900">Research Grant: ₹1,00,000</p>
                <p className="text-xs text-slate-600 mt-1">Institutional research support</p>
              </div>
            </div>
          )}
        </div>

        {/* Prize 3 */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
          <button
            onClick={() => setExpandedPrize(expandedPrize === 2 ? null : 2)}
            className="w-full p-6 text-left hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-colors flex justify-between items-center"
          >
            <div>
              <div className="text-4xl mb-2">🥉</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Third Prize</h3>
              <p className="text-slate-600 text-sm">1 Winner • ₹50,000</p>
            </div>
            <ChevronRight className={`w-6 h-6 text-slate-400 transition-transform ${expandedPrize === 2 ? 'rotate-90' : ''}`} />
          </button>
          {expandedPrize === 2 && (
            <div className="px-6 pb-6 border-t border-slate-200 space-y-4">
              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-4">
                <p className="font-bold text-slate-900 mb-3">📍 Professional Development Package</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>✓ Premium Medical Books (₹50K)</li>
                  <li>✓ OR Digital Learning Package</li>
                  <li>✓ OR National Conference Package</li>
                  <li>✓ OR CME & Workshop Series</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Draw Process */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <h3 className="text-lg font-bold text-slate-900 mb-6">📋 Draw Process</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">Date</p>
              <p className="text-sm font-semibold text-slate-900">30 days after launch</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">Method</p>
              <p className="text-sm font-semibold text-slate-900">Computer random selection</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">Notification</p>
              <p className="text-sm font-semibold text-slate-900">Email + Phone within 24h</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">Announcement</p>
              <p className="text-sm font-semibold text-slate-900">Published on website</p>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 mb-4"
        >
          REGISTER FOR DRAW
        </button>

        <p className="text-center text-xs text-slate-500 px-4">
          📌 This appreciation draw is for participation in an evidence-based educational exercise and is not linked to product prescription or endorsement.
        </p>
      </div>
    </div>
  );
};

export default PrizesSection;