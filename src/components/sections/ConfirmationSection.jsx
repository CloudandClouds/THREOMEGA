import React from 'react';
import { CheckCircle, Calendar, Sparkles, Mail, ShieldCheck, Home } from 'lucide-react';

const ConfirmationSection = ({ formData, onComplete }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500 rounded-full mix-blend-screen filter blur-[180px] opacity-[0.03]"></div>

      <div className="max-w-xl w-full relative z-10">
        <div className="text-center mb-10 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-[0_0_50px_rgba(34,197,94,0.1)] relative">
              <CheckCircle className="w-12 h-12 text-green-500" />
              <div className="absolute -top-1 -right-1">
                 <Sparkles className="w-6 h-6 text-[#D4AF37] animate-pulse" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2" style={{fontFamily: 'serif'}}>
            Registration Confirmed
          </h1>
          <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-xs">Thank you for your engagement, {formData.name?.split(' ')[0] || 'Doctor'}</p>
        </div>

        <div className="premium-card rounded-3xl p-8 mb-8 shadow-2xl relative overflow-hidden">
          <h2 className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Next Steps & Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Draw Date</p>
                <p className="text-xs text-gray-500 mt-1">March 15, 2026</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[#EF4444] transition-colors">
                <Sparkles className="w-5 h-5 text-[#EF4444]" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Selection</p>
                <p className="text-xs text-gray-500 mt-1">Certified RNG Process</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Notification</p>
                <p className="text-xs text-gray-500 mt-1">24h Direct Contact</p>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[#EF4444] transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#EF4444]" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Publishing</p>
                <p className="text-xs text-gray-500 mt-1">Official Result List</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/40 rounded-2xl p-6 mb-8 border border-gray-800">
           <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-4">
              <span className="text-[10px] uppercase font-bold text-gray-600 tracking-widest">Digital Audit Trail</span>
              <span className="text-[10px] font-mono text-[#D4AF37]">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
           </div>
           <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs">
              <span className="text-gray-500 italic">Credential Name</span>
              <span className="text-white font-medium text-right">{formData.name || '—'}</span>
              <span className="text-gray-500 italic">Verified Mobile</span>
              <span className="text-white font-medium text-right">{formData.mobile || '—'}</span>
              <span className="text-gray-500 italic">Clinical Hub</span>
              <span className="text-white font-medium text-right">{formData.city || '—'}</span>
           </div>
        </div>

        <div className="space-y-6">
          <button
            onClick={onComplete}
            className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-2xl shadow-red-900/30 group mb-6"
          >
            <Home className="w-5 h-5" />
            RETURN TO PORTAL
          </button>
          
          <div className="flex items-center justify-center gap-3 opacity-30">
            <ShieldCheck className="w-4 h-4" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-center">
               Independently Audited Evidence Participation
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ConfirmationSection;
