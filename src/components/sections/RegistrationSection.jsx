import React from 'react';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

const RegistrationSection = ({ formData, setFormData, onSubmit, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.city || !formData.qualification) {
      alert('Please fill all required fields');
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
            Registration
          </h1>
          <p className="text-slate-600">Enter the appreciation draw</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Dr. Sharma"
              value={formData.name || ''}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-slate-50"
              required
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              Qualification <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.qualification || ''}
              onChange={(e) => setFormData({...formData, qualification: e.target.value})}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-slate-50"
              required
            >
              <option value="">Select qualification</option>
              <option value="md-nephro">MD/DNB Nephrology</option>
              <option value="dm-nephro">DM Nephrology</option>
              <option value="md-medicine">MD Medicine</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-600" />
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Mumbai"
              value={formData.city || ''}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-slate-50"
              required
            />
          </div>

          {/* Institution */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-600" />
              Institution/Hospital
            </label>
            <input
              type="text"
              placeholder="Your Hospital Name"
              value={formData.institution || ''}
              onChange={(e) => setFormData({...formData, institution: e.target.value})}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-slate-50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-600" />
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="doctor@email.com"
              value={formData.email || ''}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-slate-50"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-600" />
              Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.mobile || ''}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-slate-50"
              required
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 pt-4 border-t-2 border-slate-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.sendPDF || false}
                onChange={(e) => setFormData({...formData, sendPDF: e.target.checked})}
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">Send me PISCES trial summary (PDF)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.futureUpdates || false}
                onChange={(e) => setFormData({...formData, futureUpdates: e.target.checked})}
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">Notify me of future nephrology evidence updates</span>
            </label>
          </div>

          {/* Prize Preference */}
          <div className="pt-4 border-t-2 border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-3">If selected, I prefer: (1st & 2nd prize)</p>
            <div className="space-y-2">
              {['Conference/Equipment', 'Research Grant', 'No preference'].map((pref) => (
                <label key={pref} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="preference"
                    value={pref}
                    checked={formData.prizePreference === pref}
                    onChange={(e) => setFormData({...formData, prizePreference: e.target.value})}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">{pref}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 mt-8"
          >
            SUBMIT REGISTRATION
          </button>

          <p className="text-xs text-slate-500 text-center">
            Fields marked with <span className="text-red-500">*</span> are required
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationSection;