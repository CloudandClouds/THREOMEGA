import React, { useState } from 'react';
import Navbar from '../components/Home/Navbar';
import CallToActionAndFooter from '../components/Home/CallToActionAndFooter';
import { User, Mail, Phone, Building2, Stethoscope, Send, CheckCircle2, FileText, Award, Users, BookOpen, Download, Heart, Activity, TrendingDown, Shield, Video, Calendar } from 'lucide-react';

const ForDoctorsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        specility: '',
        email: '',
        mobile: '',
        institution: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        console.log('Doctor Registration:', formData);
        setSubmitted(true);
    };

    const inputClasses = "w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#D4AF37] focus:bg-white focus:outline-none transition-all text-gray-900 placeholder-gray-400";
    const labelClasses = "block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-3 flex items-center gap-2";

    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* HERO SECTION */}
        <div className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase">
                For Healthcare Professionals
              </span>
              <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-8 leading-tight"
              style={{ fontFamily: 'serif' }}
            >
              Evidence-Based Omega-3 Therapy for Your Dialysis Patients
            </h1>
            <p className="text-gray-600 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Access clinical trial data, dosing protocols, and professional resources for{' '}
              <span className="font-bold text-[#8B0000]">Theromega - CV™</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
              {[
                { icon: <FileText className="w-8 h-8" />, text: 'PISCES-HD Trial Data' },
                { icon: <Award className="w-8 h-8" />, text: 'Clinical Evidence' },
                { icon: <Users className="w-8 h-8" />, text: 'Patient Resources' },
                { icon: <BookOpen className="w-8 h-8" />, text: 'Dosing Guidelines' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-[#8B0000]/10 flex items-center justify-center mx-auto mb-4 text-[#8B0000]">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THE PISCES-HD STUDY */}
        <div className="relative py-20 px-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-[1px] w-8 bg-[#8B0000]"></div>
                <span className="text-[#8B0000] font-bold tracking-widest text-xs uppercase">
                  Landmark Clinical Trial
                </span>
                <div className="h-[1px] w-8 bg-[#8B0000]"></div>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-6"
                style={{ fontFamily: 'serif' }}
              >
                The PISCES-HD Study
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Randomized, double-blind trial demonstrating cardiovascular benefits in hemodialysis
                patients
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 border-2 border-[#D4AF37]/10 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    icon: <Users className="w-10 h-10" />,
                    title: '206 Patients',
                    desc: 'Multi-center recruitment',
                  },
                  {
                    icon: <Calendar className="w-10 h-10" />,
                    title: '12 Months',
                    desc: 'Double-blind intervention period',
                  },
                  {
                    icon: <Heart className="w-10 h-10" />,
                    title: 'Primary Endpoint',
                    desc: 'Cardiovascular mortality reduction',
                  },
                  {
                    icon: <Activity className="w-10 h-10" />,
                    title: 'Secondary Outcomes',
                    desc: 'Inflammatory markers & lipid profiles',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B0000]/10 to-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 text-[#8B0000]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-8 border-t-2 border-[#D4AF37]/10">
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#8B0000] text-white font-bold rounded-2xl hover:shadow-xl transition-all hover:scale-105">
                  <FileText className="w-5 h-5" />
                  DOWNLOAD FULL STUDY
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* KEY FINDINGS */}
        <div className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-6"
                style={{ fontFamily: 'serif' }}
              >
                Key Clinical Findings
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Significant improvements in cardiovascular health markers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <TrendingDown className="w-8 h-8" />,
                  title: 'Reduced Inflammation',
                  desc: 'Significant decrease in hs-CRP and inflammatory cytokines',
                  stat: '↓ 32% reduction',
                },
                {
                  icon: <Activity className="w-8 h-8" />,
                  title: 'Improved Lipid Profile',
                  desc: 'Better triglyceride levels and HDL/LDL ratios',
                  stat: '↓ 25% triglycerides',
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: 'Cardiovascular Protection',
                  desc: 'Lower incidence of cardiac events and hospitalizations',
                  stat: '↓ 40% risk reduction',
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Safety Profile',
                  desc: 'Well-tolerated with minimal adverse effects',
                  stat: '> 95% adherence',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B0000]/10 to-[#D4AF37]/10 flex items-center justify-center text-[#8B0000]">
                      {item.icon}
                    </div>
                    <span className="text-[#8B0000] font-bold text-lg">{item.stat}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CLINICAL DOSING GUIDELINES */}
        <div className="relative py-20 px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-6"
                style={{ fontFamily: 'serif' }}
              >
                Clinical Dosing Guidelines
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Evidence-based recommendations for hemodialysis patients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border-2 border-[#D4AF37]/10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Recommended Dosing
                </h3>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20">
                    <h4 className="font-bold text-gray-900 text-lg mb-3">Standard Dose</h4>
                    <p className="text-gray-600 mb-2">2 capsules daily (Total EPA+DHA: 1.6g)</p>
                    <p className="text-gray-500 text-sm">As used in PISCES-HD trial</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20">
                    <h4 className="font-bold text-gray-900 text-lg mb-3">Administration</h4>
                    <p className="text-gray-600 mb-2">With meals for optimal absorption</p>
                    <p className="text-gray-500 text-sm">Can be taken on dialysis days</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border-2 border-[#D4AF37]/10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Monitoring Parameters
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#8B0000] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Lipid Profile</p>
                      <p className="text-gray-500 text-sm">
                        Monitor at baseline and every 3 months
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#8B0000] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Inflammatory Markers</p>
                      <p className="text-gray-500 text-sm">hs-CRP, IL-6 assessment as indicated</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#8B0000] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Patient Compliance</p>
                      <p className="text-gray-500 text-sm">Regular follow-up and adherence check</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white font-bold rounded-2xl hover:shadow-xl transition-all hover:scale-105">
                <Download className="w-5 h-5" />
                DOWNLOAD DOSING GUIDE
              </button>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#A50000] text-white font-bold rounded-2xl hover:shadow-xl transition-all hover:scale-105">
                <Video className="w-5 h-5" />
                WATCH WEBINAR
              </button>
            </div>
          </div>
        </div>

        {/* RESOURCES FOR HEALTHCARE PROFESSIONALS */}
        <div className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-6"
                style={{ fontFamily: 'serif' }}
              >
                Professional Resources
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Educational materials and support for your practice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-10 h-10" />,
                  title: 'Clinical Monograph',
                  desc: 'Comprehensive review of Theromega™ in dialysis',
                  action: 'Download PDF',
                },
                {
                  icon: <Users className="w-10 h-10" />,
                  title: 'Patient Education',
                  desc: 'Handouts and brochures for your patients',
                  action: 'View Materials',
                },
                {
                  icon: <Award className="w-10 h-10" />,
                  title: 'CME Credits',
                  desc: 'Accredited continuing medical education',
                  action: 'Register Now',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-[#8B0000]/10 flex items-center justify-center mb-6 text-[#8B0000]">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <button className="text-[#8B0000] font-bold text-sm hover:underline">
                    {item.action} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B0000]/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left Side: Content */}
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
                  <span className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase">
                    Physician Portal
                  </span>
                </div>
                <h1
                  className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-8 leading-tight"
                  style={{ fontFamily: 'serif' }}
                >
                  Empowering Healthcare Professionals
                </h1>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                  Access exclusive clinical resources, breakthrough research summaries, and
                  evidence-based dosing guidelines tailored for nephrologists and medical
                  specialists.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
                      text: 'Priority access to PISCES-HD clinical trial data',
                    },
                    {
                      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
                      text: 'Dosing recommendations for hemodialysis patients',
                    },
                    {
                      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
                      text: 'Direct channel for medical-scientific inquiries',
                    },
                    {
                      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
                      text: 'Complimentary clinical samples on request',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#8B0000] rounded-[36px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative bg-white border-2 border-gray-100 rounded-[32px] p-10 shadow-2xl">
                  {submitted ? (
                    <div className="text-center py-20 animate-scale-in">
                      <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8 border-2 border-green-500/20">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3
                        className="text-3xl font-bold text-gray-900 mb-4"
                        style={{ fontFamily: 'serif' }}
                      >
                        Registration Received
                      </h3>
                      <p className="text-gray-500">
                        Thank you, Doctor. Our medical team will reach out to you within 24-48 hours
                        with more information.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-10 text-[#D4AF37] font-bold text-sm uppercase tracking-widest hover:underline"
                      >
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect with Us</h2>
                        <p className="text-gray-500 text-sm">
                          Please provide your details for professional registration.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className={labelClasses}>
                            <User className="w-3.5 h-3.5" /> Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="Dr. Sathish Kumar"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={inputClasses}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>
                            <Stethoscope className="w-3.5 h-3.5" /> Specialty
                          </label>
                          <input
                            type="text"
                            placeholder="Nephrology"
                            value={formData.specility}
                            onChange={(e) =>
                              setFormData({ ...formData, specility: e.target.value })
                            }
                            className={inputClasses}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>
                            <Building2 className="w-3.5 h-3.5" />
                            Hospital / Institution
                          </label>
                          <input
                            type="text"
                            placeholder="General Hospital"
                            value={formData.institution}
                            onChange={(e) =>
                              setFormData({ ...formData, institution: e.target.value })
                            }
                            className={inputClasses}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>
                            <Mail className="w-3.5 h-3.5" /> Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="dr.smith@hospital.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={inputClasses}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelClasses}>
                            <Phone className="w-3.5 h-3.5" /> Mobile Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 98778-90000"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            className={inputClasses}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className={labelClasses}>Message / Inquiry</label>
                          <textarea
                            rows="4"
                            placeholder="I would like to receive more information about the PISCES-HD trial results..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className={inputClasses + ' resize-none'}
                          ></textarea>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mt-4 group"
                      >
                        REGISTER & CONNECT
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <CallToActionAndFooter />

        <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in { animation: fade-in 1s ease-out forwards; }
                .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
            `}</style>
      </div>
    )
};

export default ForDoctorsPage;
