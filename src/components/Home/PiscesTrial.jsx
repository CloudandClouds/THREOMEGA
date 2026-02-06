import React from 'react';
import { Microscope, PlayCircle, FileText, Calendar, Users, Database, Globe, ArrowRight } from 'lucide-react';

const PiscesTrial = () => {
    return (
        <section className="py-32 px-6 bg-white overflow-hidden relative" id="science">
            {/* Background Architecture */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 -translate-x-32"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    
                    {/* Left: Narrative Content */}
                    <div className="relative">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#8B0000]/5 border border-[#8B0000]/10 mb-8">
                            <Microscope className="w-4 h-4 text-[#8B0000]" />
                            <span className="text-[#8B0000] font-black tracking-[0.2em] text-[10px] uppercase">
                                Landmark Clinical Research
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-8" style={{ fontFamily: 'serif' }}>
                            The <span className="text-[#D4AF37]">PISCES-HD</span><br />
                            Protocol.
                        </h2>

                        <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-xl">
                            A global, multicenter double-blind study establishing the new gold standard for cardiovascular risk reduction in hemodialysis patient care.
                        </p>

                        {/* Clinical Study Core Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            <div className="bg-[#FAF9F6] p-8 rounded-[10px] border border-gray-100 group hover:border-[#D4AF37]/30 transition-all duration-500">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#D4AF37] mb-6 transition-transform group-hover:scale-110">
                                    <Database className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-tight">Study Design</h3>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                    Randomized, Multi-center, Placebo-controlled intervention.
                                </p>
                            </div>

                            <div className="bg-[#FAF9F6] p-8 rounded-[10px] border border-gray-100 group hover:border-[#8B0000]/30 transition-all duration-500">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#8B0000] mb-6 transition-transform group-hover:scale-110">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-tight">Timeline</h3>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                    3.5 Years of longitudinal follow-up across 26 global sites.
                                </p>
                            </div>
                        </div>

                        {/* Dosage Callout */}
                        <div className="relative group p-10 rounded-[15px] bg-gray-900 overflow-hidden mb-12">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B0000]/20 rounded-full blur-3xl -tr-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div>
                                    <span className="text-[10px] font-black text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">Evidence-Based Dose</span>
                                    <h4 className="text-4xl font-black text-white mb-2 tracking-tight">4g / Day Protocol</h4>
                                    <p className="text-white/40 text-sm font-medium">1.6g EPA + 0.8g DHA Precision Ratio</p>
                                </div>
                                <button className="px-8 py-4 bg-white text-gray-900 font-black rounded-2xl hover:bg-[#D4AF37] hover:text-white transition-all text-xs uppercase tracking-widest">
                                    Protocol Details
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual Clinical Report */}
                    <div className="relative">
                        {/* Decorative Background for Image */}
                        <div className="absolute -inset-10 bg-gradient-to-tr from-[#D4AF37]/10 to-[#8B0000]/10 rounded-full blur-3xl"></div>
                        
                        <div className="bg-white border-[1px] border-gray-50 rounded-[10px] p-12 lg:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.08)] relative z-10">
                            {/* Header of the 'Report' */}
                            <div className="flex items-center justify-between mb-16">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#8B0000] flex items-center justify-center text-white font-black">NE</div>
                                    <span className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase">Scientific Journal 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-[10px] font-bold text-gray-900 tracking-widest uppercase">Verified Study</span>
                                </div>
                            </div>

                            {/* Stats List */}
                            <div className="space-y-12">
                                {[
                                    { label: 'Patient Population', val: '1,228 Randomized Patients', icon: <Users className="w-5 h-5" /> },
                                    { label: 'Primary Endpoint', val: 'Cardiovascular Mortality Reduction', icon: <Microscope className="w-5 h-5" /> },
                                    { label: 'Trial Integrity', val: '92% Patient Adherence Rate', icon: <Globe className="w-5 h-5" /> }
                                ].map((stat, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-[#D4AF37] transition-colors border border-gray-100">
                                            {stat.icon}
                                        </div>
                                        <div className="flex-grow pb-8 border-b border-gray-100 last:border-0">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                                            <p className="text-lg lg:text-xl font-black text-gray-800 tracking-tight">{stat.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Study CTA Section */}
                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 px-8 py-5 bg-gray-900 text-white font-black rounded-3xl hover:bg-black transition-all flex items-center justify-center gap-3 group">
                                    <PlayCircle className="w-5 h-5 text-[#D4AF37]" />
                                    FULL SUMMARY
                                </button>
                                <button className="flex-1 px-8 py-5 bg-white border-2 border-gray-100 text-gray-900 font-black rounded-3xl hover:border-[#D4AF37] transition-all flex items-center justify-center gap-3">
                                    <FileText className="w-5 h-5 text-[#8B0000]" />
                                    PDF REPORT
                                </button>
                            </div>
                        </div>

                        {/* Floating Credibility Card */}
                        <div className=" z-999 absolute -bottom-14 -right-12 bg-white/80 backdrop-blur-xl p-8 rounded-[20px] shadow-2xl border border-white/20 hidden xl:block animate-float">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <svg className="w-20 h-20 -rotate-90">
                                        <circle cx="40" cy="40" r="34" fill="none" stroke="#f3f4f6" strokeWidth="8"/>
                                        <circle cx="40" cy="40" r="34" fill="none" stroke="#D4AF37" strokeWidth="8" strokeDasharray="213" strokeDashoffset="42" className="transition-all duration-1000"/>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-gray-900">80%</div>
                                </div>
                                <div className="pr-4">
                                    <p className="text-xs font-black text-gray-900 uppercase tracking-widest leading-none mb-1">Impact Factor</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Clinical Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PiscesTrial;
