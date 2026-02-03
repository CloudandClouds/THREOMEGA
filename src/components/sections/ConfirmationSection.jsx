

import React from 'react';

const ConfirmationSection = ({ formData, onComplete }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">✓</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
            Registration Complete
          </h1>
          <p className="text-slate-600">Thank you, {formData.name || 'Dr. Participant'}!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">What Happens Next</h2>
          <div className="space-y-4">
            <div className="flex gap-4 pb-4 border-b border-slate-200">
              <div className="text-2xl">📅</div>
              <div>
                <p className="font-semibold text-slate-900">Draw Date</p>
                <p className="text-sm text-slate-600">March 15, 2026 (30 days from launch)</p>
              </div>
            </div>
            <div className="flex gap-4 pb-4 border-b border-slate-200">
              <div className="text-2xl">🎲</div>
              <div>
                <p className="font-semibold text-slate-900">Selection</p>
                <p className="text-sm text-slate-600">Computer random selection, video recorded</p>
              </div>
            </div>
            <div className="flex gap-4 pb-4 border-b border-slate-200">
              <div className="text-2xl">📧</div>
              <div>
                <p className="font-semibold text-slate-900">Notification</p>
                <p className="text-sm text-slate-600">Within 24 hours by email & phone</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🌐</div>
              <div>
                <p className="font-semibold text-slate-900">Announcement</p>
                <p className="text-sm text-slate-600">Results published on threomega.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
          <h3 className="font-bold text-slate-900 mb-4">Registration Summary</h3>
          <div className="space-y-2 text-sm">
            <p><span className="text-slate-600">Name:</span> <span className="font-semibold text-slate-900">{formData.name || '—'}</span></p>
            <p><span className="text-slate-600">Email:</span> <span className="font-semibold text-slate-900">{formData.email || '—'}</span></p>
            <p><span className="text-slate-600">Mobile:</span> <span className="font-semibold text-slate-900">{formData.mobile || '—'}</span></p>
            <p><span className="text-slate-600">City:</span> <span className="font-semibold text-slate-900">{formData.city || '—'}</span></p>
            <p><span className="text-slate-600">Qualification:</span> <span className="font-semibold text-slate-900">{formData.qualification || '—'}</span></p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onComplete}
            className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            CLOSE
          </button>
          <p className="text-center text-xs text-slate-500">
            📌 This participation is appreciation for evidence engagement and is not linked to product endorsement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationSection;