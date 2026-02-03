import React from 'react';
import { Mail, Phone, MapPin, Building2, User, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

const RegistrationSection = ({ formData, setFormData, onSubmit, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.mobile || !formData.city || !formData.qualification) {
      alert('Please fill all required fields');
      return;
    }
    
    onSubmit(formData);
  };

  const inputClasses = "w-full px-5 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:border-[#D4AF37]/50 focus:outline-none transition-all text-white placeholder-gray-600";
  const labelClasses = "block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-3 flex items-center gap-2";

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-6 text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-[#8B0000] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03]"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10 animate-fade-in">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 mb-6">
             <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">Appreciation Draw Registration</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3" style={{fontFamily: 'serif'}}>
            Professional Credentials
          </h1>
          <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">Please provide your details to formalize your entry into the clinical evidence appreciation draw.</p>
        </div>

        <form onSubmit={handleSubmit} className="premium-card rounded-3xl p-8 lg:p-12 space-y-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="md:col-span-2">
              <label className={labelClasses}>
                <User className="w-3.5 h-3.5" />
                Full Name <span className="text-[#8B0000]">*</span>
              </label>
              <input
                type="text"
                placeholder="Dr. Sharma"
                value={formData.name || ''}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={inputClasses}
                required
              />
            </div>

            {/* Qualification */}
            <div className="md:col-span-2">
              <label className={labelClasses}>
                <GraduationCap className="w-3.5 h-3.5" />
                Qualification <span className="text-[#8B0000]">*</span>
              </label>
              <select
                value={formData.qualification || ''}
                onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                className={`${inputClasses} appearance-none cursor-pointer`}
                required
              >
                <option value="" className="bg-gray-900">Select qualification</option>
                <option value="md-nephro" className="bg-gray-900">MD/DNB Nephrology</option>
                <option value="dm-nephro" className="bg-gray-900">DM Nephrology</option>
                <option value="md-medicine" className="bg-gray-900">MD Medicine</option>
                <option value="other" className="bg-gray-900">Other Specialist</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label className={labelClasses}>
                <MapPin className="w-3.5 h-3.5" />
                City <span className="text-[#8B0000]">*</span>
              </label>
              <input
                type="text"
                placeholder="Mumbai"
                value={formData.city || ''}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className={inputClasses}
                required
              />
            </div>

            {/* Institution */}
            <div>
              <label className={labelClasses}>
                <Building2 className="w-3.5 h-3.5" />
                Institution
              </label>
              <input
                type="text"
                placeholder="Hospital/Center"
                value={formData.institution || ''}
                onChange={(e) => setFormData({...formData, institution: e.target.value})}
                className={inputClasses}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelClasses}>
                <Mail className="w-3.5 h-3.5" />
                Email Address <span className="text-[#8B0000]">*</span>
              </label>
              <input
                type="email"
                placeholder="doctor@healthcare.com"
                value={formData.email || ''}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={inputClasses}
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className={labelClasses}>
                <Phone className="w-3.5 h-3.5" />
                Mobile <span className="text-[#8B0000]">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91"
                value={formData.mobile || ''}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className={inputClasses}
                required
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4 pt-8 border-t border-gray-800">
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className="relative flex items-center mt-1">
                <input
                  type="checkbox"
                  checked={formData.sendPDF || false}
                  onChange={(e) => setFormData({...formData, sendPDF: e.target.checked})}
                  className="w-5 h-5 rounded border-gray-700 bg-gray-900 text-[#D4AF37] focus:ring-[#D4AF37] transition-all cursor-pointer"
                />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Send me PISCES trial summary (Executive PDF)</span>
            </label>
            <label className="flex items-start gap-4 cursor-pointer group">
               <div className="relative flex items-center mt-1">
                <input
                  type="checkbox"
                  checked={formData.futureUpdates || false}
                  onChange={(e) => setFormData({...formData, futureUpdates: e.target.checked})}
                  className="w-5 h-5 rounded border-gray-700 bg-gray-900 text-[#D4AF37] focus:ring-[#D4AF37] transition-all cursor-pointer"
                />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Notify me of future clinical evidence updates</span>
            </label>
          </div>

          {/* Prize Preference */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-6">Draw Preference (For 1st/2nd Prize)</p>
            <div className="flex flex-wrap gap-4">
              {['Conference/Equipment', 'Research Grant', 'No preference'].map((pref) => (
                <label key={pref} className={`flex-1 min-w-[140px] flex items-center gap-3 cursor-pointer p-4 rounded-xl border transition-all ${
                  formData.prizePreference === pref 
                    ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-white shadow-[0_0_15px_rgba(212,175,55,0.1)]' 
                    : 'border-gray-800 bg-transparent text-gray-500 hover:border-gray-700'
                }`}>
                  <input
                    type="radio"
                    name="preference"
                    value={pref}
                    checked={formData.prizePreference === pref}
                    onChange={(e) => setFormData({...formData, prizePreference: e.target.value})}
                    className="hidden"
                  />
                  {formData.prizePreference === pref && <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />}
                  <span className="text-sm font-medium">{pref}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-2xl shadow-red-900/30 group"
          >
            COMPLETE REGISTRATION
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
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

export default RegistrationSection;
