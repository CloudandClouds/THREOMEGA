import React, { useState } from 'react';
import Navbar from '../components/Home/Navbar';
import CallToActionAndFooter from '../components/Home/CallToActionAndFooter';
import { User, Mail, Phone, MapPin, Heart, Send, CheckCircle2 } from 'lucide-react';

const ForPatientsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        mobile: '',
        city: '',
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
            
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#8B0000]/5 rounded-full blur-[100px] -ml-64 -mt-64"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] -mr-64 -mb-64"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left Side: Content */}
                        <div className="animate-fade-in">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <div className="h-[1px] w-8 bg-[#8B0000]"></div>
                                <span className="text-[#8B0000] font-bold tracking-widest text-xs uppercase">Patient Wellness Center</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-8 leading-tight" style={{ fontFamily: 'serif' }}>
                                Your Path to Better Dialysis Care
                            </h1>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                                Discover how pure, evidence-based Omega-3 support can improve your cardiovascular health and overall well-being during hemodialysis.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Heart className="w-5 h-5 text-[#8B0000]" />, text: "Protect your heart health during dialysis" },
                                    { icon: <Heart className="w-5 h-5 text-[#8B0000]" />, text: "Support for chronic inflammation management" },
                                    { icon: <Heart className="w-5 h-5 text-[#8B0000]" />, text: "Educational resources on renal nutrition" },
                                    { icon: <Heart className="w-5 h-5 text-[#8B0000]" />, text: "Direct support for product availability and guidance" }
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
                                        <div className="mb-10">
                                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Information</h2>
                                            <p className="text-gray-500 text-sm">Fill out the form below and we'll help you start your journey.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="md:col-span-2">
                                                <label className={labelClasses}><User className="w-3.5 h-3.5" /> Full Name</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="John Doe"
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
                                                    placeholder="john@example.com"
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
                                            <div className="md:col-span-2">
                                                <label className={labelClasses}>How can we help you?</label>
                                                <textarea 
                                                    rows="4"
                                                    placeholder="I would like to know about available centers or dosage..."
                                                    value={formData.message}
                                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                                    className={inputClasses + " resize-none"}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <button 
                                            type="submit"
                                            className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mt-4 group"
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
