import React, { useState } from 'react';
import Navbar from '../components/Home/Navbar';
import CallToActionAndFooter from '../components/Home/CallToActionAndFooter';
import { User, Mail, Phone, MapPin, Heart, Send, CheckCircle2, Activity, TrendingDown, Shield, Clock, Download, ShoppingCart, FileText, Droplet } from 'lucide-react';

const ForPatientsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: '',
        mobile: '',
        city: '',
        dialysisType: '',
        dialysisDuration: '',
        currentMedications: '',
        heartConditions: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        console.log('Patient Registration:', formData);
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
                        <div className="h-[1px] w-8 bg-[#8B0000]"></div>
                        <span className="text-[#8B0000] font-bold tracking-widest text-xs uppercase">Trusted by Nephrologists & Dialysis Centers</span>
                        <div className="h-[1px] w-8 bg-[#8B0000]"></div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-8 leading-tight" style={{ fontFamily: 'serif' }}>
                        Protect Your Heart While On Dialysis
                    </h1>
                    <p className="text-gray-600 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                        Reduce cardiovascular risk in dialysis patients with <span className="font-bold text-[#8B0000]">Theromega™</span>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                        {[
                            { icon: <Heart className="w-8 h-8" />, text: "Helps reduce cardiovascular risk" },
                            { icon: <Shield className="w-8 h-8" />, text: "Supports heart health in dialysis patients" },
                            { icon: <Activity className="w-8 h-8" />, text: "Clinically studied formulation" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B0000]/10 to-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4 text-[#8B0000]">
                                    {item.icon}
                                </div>
                                <p className="text-gray-700 font-medium">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* WHY DIALYSIS PATIENTS NEED THIS */}
            <div className="relative py-20 px-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-6" style={{ fontFamily: 'serif' }}>
                            Why Dialysis Patients Need This
                        </h2>
                        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                            Why heart health matters during dialysis
                        </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 border-2 border-[#D4AF37]/10 shadow-lg">
                        <p className="text-gray-700 text-lg mb-12 text-center max-w-3xl mx-auto">
                            Dialysis patients have a significantly higher risk of cardiovascular disease due to:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {[
                                { icon: <Activity className="w-10 h-10" />, title: "Chronic inflammation", desc: "Persistent inflammatory markers" },
                                { icon: <TrendingDown className="w-10 h-10" />, title: "Oxidative stress", desc: "Increased cellular damage" },
                                { icon: <Droplet className="w-10 h-10" />, title: "Altered lipid metabolism", desc: "Abnormal cholesterol processing" }
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mx-auto mb-4 text-[#8B0000] border-2 border-[#D4AF37]/20">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="text-gray-700 font-semibold text-lg">
                                Theromega™ is designed to support heart health specifically for dialysis patients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* THE STUDY THAT CHANGED EVERYTHING */}
            <div className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-gray-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="h-[1px] w-8 bg-[#8B0000]"></div>
                            <span className="text-[#8B0000] font-bold tracking-widest text-xs uppercase">The Study That Changed Everything</span>
                            <div className="h-[1px] w-8 bg-[#8B0000]"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-6" style={{ fontFamily: 'serif' }}>
                            Clinically Proven Results
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: <TrendingDown className="w-8 h-8" />, title: "Reduced Inflammation", desc: "Helps lower markers linked to heart disease" },
                            { icon: <Activity className="w-8 h-8" />, title: "Improved Lipid Profile", desc: "Supports healthier cholesterol levels" },
                            { icon: <Heart className="w-8 h-8" />, title: "Better Cardiovascular Outcomes", desc: "Reduced cardiac risk in dialysis patients" },
                            { icon: <Shield className="w-8 h-8" />, title: "Well Tolerated", desc: "Safe and suitable for long-term use" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B0000]/10 to-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#8B0000]">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#8B0000] text-white font-bold rounded-2xl hover:shadow-xl transition-all hover:scale-105">
                            <FileText className="w-5 h-5" />
                            READ FULL STUDY
                        </button>
                    </div>
                </div>
            </div>

            {/* HOW TO TAKE THEROMEGA */}
            <div className="relative py-20 px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-6" style={{ fontFamily: 'serif' }}>
                            How To Take Theromega™
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Recommended Timing */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border-2 border-[#D4AF37]/10 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recommended Timing</h3>
                            
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#8B0000]/20 flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-[#8B0000]" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-lg">Morning</h4>
                                    </div>
                                    <p className="text-gray-600 ml-16">With breakfast</p>
                                    <p className="text-gray-500 text-sm ml-16">Improves absorption</p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#8B0000]/20 flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-[#8B0000]" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-lg">Evening</h4>
                                    </div>
                                    <p className="text-gray-600 ml-16">With dinner</p>
                                    <p className="text-gray-500 text-sm ml-16">Maintains consistency</p>
                                </div>
                            </div>
                        </div>

                        {/* Dosage Overview */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 border-2 border-[#D4AF37]/10 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Dosage Overview</h3>
                            
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#8B0000] flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-gray-700 font-medium mb-2">As prescribed by your nephrologist</p>
                                            <p className="text-gray-500 text-sm">Follow your doctor's specific instructions</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 border-2 border-[#D4AF37]/20">
                                    <div className="flex items-start gap-4">
                                        <Shield className="w-6 h-6 text-[#8B0000] flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-gray-700 font-medium mb-2">Do not exceed recommended dose</p>
                                            <p className="text-gray-500 text-sm">Safety is our priority</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white font-bold rounded-2xl hover:shadow-xl transition-all hover:scale-105">
                            <Download className="w-5 h-5" />
                            DOWNLOAD GUIDE
                        </button>
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#A50000] text-white font-bold rounded-2xl hover:shadow-xl transition-all hover:scale-105">
                            <ShoppingCart className="w-5 h-5" />
                            ORDER NOW
                        </button>
                    </div>
                </div>
            </div>

            {/* FORM SECTION */}
            <div className="relative py-20 px-6 bg-gradient-to-br from-zinc-100 via-slate-50 to-gray-50 overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#8B7500] bg-clip-text text-transparent mb-6" style={{ fontFamily: 'serif' }}>
                            Request Your Consultation
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Fill out the form below and our team will contact you with personalized guidance
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#8B0000] rounded-[36px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                        <div className="relative bg-white border-2 border-gray-100 rounded-[32px] p-10 shadow-2xl">
                            {submitted ? (
                                <div className="text-center py-20 animate-scale-in">
                                    <div className="w-20 h-20 rounded-full bg-[#8B0000]/5 flex items-center justify-center mx-auto mb-8 border-2 border-[#8B0000]/20">
                                        <CheckCircle2 className="w-10 h-10 text-[#8B0000]" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>Inquiry Sent Successfully</h3>
                                    <p className="text-gray-500">Thank you for reaching out. A wellness consultant will contact you shortly to answer your questions.</p>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="mt-10 text-[#8B0000] font-bold text-sm uppercase tracking-widest hover:underline"
                                    >
                                        Submit another inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="md:col-span-2">
                                            <label className={labelClasses}><User className="w-3.5 h-3.5" /> Full Name</label>
                                            <input 
                                                type="text" 
                                                placeholder="Arun Kumar"
                                                value={formData.name}
                                                onChange={e => setFormData({...formData, name: e.target.value})}
                                                className={inputClasses}
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}><User className="w-3.5 h-3.5" /> Age</label>
                                            <input 
                                                type="number" 
                                                placeholder="45"
                                                value={formData.age}
                                                onChange={e => setFormData({...formData, age: e.target.value})}
                                                className={inputClasses}
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}><User className="w-3.5 h-3.5" /> Gender</label>
                                            <select
                                                value={formData.gender}
                                                onChange={e => setFormData({...formData, gender: e.target.value})}
                                                className={inputClasses}
                                                required
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className={labelClasses}><MapPin className="w-3.5 h-3.5" /> City</label>
                                            <input 
                                                type="text" 
                                                placeholder="Mumbai"
                                                value={formData.city}
                                                onChange={e => setFormData({...formData, city: e.target.value})}
                                                className={inputClasses}
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}><Mail className="w-3.5 h-3.5" /> Email Address</label>
                                            <input 
                                                type="email" 
                                                placeholder="abc@example.com"
                                                value={formData.email}
                                                onChange={e => setFormData({...formData, email: e.target.value})}
                                                className={inputClasses}
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}><Phone className="w-3.5 h-3.5" /> Mobile Number</label>
                                            <input 
                                                type="tel" 
                                                placeholder="+91"
                                                value={formData.mobile}
                                                onChange={e => setFormData({...formData, mobile: e.target.value})}
                                                className={inputClasses}
                                                required 
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClasses}><Droplet className="w-3.5 h-3.5" /> Dialysis Type</label>
                                            <select
                                                value={formData.dialysisType}
                                                onChange={e => setFormData({...formData, dialysisType: e.target.value})}
                                                className={inputClasses}
                                                required
                                            >
                                                <option value="">Select Dialysis Type</option>
                                                <option value="hemodialysis">Hemodialysis</option>
                                                <option value="peritoneal">Peritoneal Dialysis</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className={labelClasses}><Clock className="w-3.5 h-3.5" /> Duration on Dialysis</label>
                                            <input 
                                                type="text" 
                                                placeholder="e.g., 2 years"
                                                value={formData.dialysisDuration}
                                                onChange={e => setFormData({...formData, dialysisDuration: e.target.value})}
                                                className={inputClasses}
                                                required 
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className={labelClasses}>Current Medications</label>
                                            <textarea 
                                                rows="3"
                                                placeholder="List your current medications..."
                                                value={formData.currentMedications}
                                                onChange={e => setFormData({...formData, currentMedications: e.target.value})}
                                                className={inputClasses + " resize-none"}
                                            ></textarea>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className={labelClasses}><Heart className="w-3.5 h-3.5" /> Existing Heart Conditions</label>
                                            <textarea 
                                                rows="3"
                                                placeholder="Please describe any existing heart conditions..."
                                                value={formData.heartConditions}
                                                onChange={e => setFormData({...formData, heartConditions: e.target.value})}
                                                className={inputClasses + " resize-none"}
                                            ></textarea>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className={labelClasses}>Additional Questions or Comments</label>
                                            <textarea 
                                                rows="4"
                                                placeholder="Any other information you'd like to share..."
                                                value={formData.message}
                                                onChange={e => setFormData({...formData, message: e.target.value})}
                                                className={inputClasses + " resize-none"}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button 
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[#8B0000] to-[#A50000] hover:from-[#A50000] hover:to-[#8B0000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mt-4 group"
                                    >
                                        SEND MY INQUIRY
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            )}
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
    );
};

export default ForPatientsPage;