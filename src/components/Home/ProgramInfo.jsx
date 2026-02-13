

import React from 'react';
import { Trophy, Gift, Award, Target, ShieldCheck, Zap, Star, Sparkles } from 'lucide-react';

const ProgramInfo = () => {
    return (
        <section className="py-2 bg-white overflow-hidden relative" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] -mr-96 -mt-96"></div>
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#8B0000]/5 rounded-full blur-[120px] -ml-96 -mb-96"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-[10px] uppercase">The PISCES-HD Initiative</span>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#8B0000] bg-clip-text text-transparent mb-8 leading-tight" style={{ fontFamily: 'serif' }}>
                        Professional Recognition Program
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        We are committed to bridging the gap between clinical evidence and daily practice through an interactive evidence-based exercise and appreciation draw.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Program Goals & Stats */}
                    <div className="space-y-10">
                        <div className="bg-white border-2 border-gray-100 rounded-[20px] p-10 shadow-xl relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-700">
                             <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                                <Target className="w-48 h-48 text-[#8B0000]" />
                             </div>
                             
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                                <span className="w-12 h-12 rounded-[20px] bg-[#8B0000]/10 flex items-center justify-center">
                                    <Target className="w-6 h-6 text-[#8B0000]" />
                                </span>
                                Program Objective
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-5">
                                    <div className="mt-1 w-10 h-10 rounded-[20px] bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-100 shadow-sm">
                                        <ShieldCheck className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1 text-sm">Evidence Dissemination</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            Highlighting the breakthrough findings from the PISCES Trial (NEJM 2025) regarding high-dose Omega-3 in hemodialysis.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="mt-1 w-10 h-10 rounded-[20px] bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-sm">
                                        <Zap className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1 text-sm">Clinical Translation</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            Transforming academic evidence into practical clinical insights for immediate implementation in nephrology.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="mt-1 w-10 h-10 rounded-[20px] bg-orange-50 flex items-center justify-center flex-shrink-0 border border-orange-100 shadow-sm">
                                        <Award className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1 text-sm">Professional Recognition</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">
                                            Appreciating healthcare professionals dedicated to advancing the standard of care in dialysis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Impact Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative group overflow-hidden rounded-[20px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] to-[#600000] transition-transform duration-700 group-hover:scale-105"></div>
                                <div className="relative p-10 text-white">
                                    <Star className="w-8 h-8 text-[#D4AF37]/50 mb-6" />
                                    <p className="text-4xl font-bold mb-2">4g/d</p>
                                    <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-bold">Recommended Regimen</p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden border-2 border-[#D4AF37]/20 rounded-none rounded-br-[20px] rounded-tl-[20px]">
                                <div className="absolute inset-0 bg-white transition-colors duration-700 group-hover:bg-[#D4AF37]/5"></div>
                                <div className="relative p-10">
                                    <Sparkles className="w-8 h-8 text-[#D4AF37]/50 mb-6" />
                                    <p className="text-4xl font-bold text-gray-900 mb-2">43%</p>
                                    <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold">Reduction in CV Events</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Enhanced Appreciation Draw */}
                    <div className="space-y-8">
                        <div className="text-left mb-8">
                             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-6">
                                <Gift className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold">Recognition Rewards</span>
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>Appreciation Draw</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-md">Our program recognizes outstanding contributions with rewards designed for institutional and professional growth.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {/* Gold Prize */}
                            <div className="group relative bg-[#FDFBF7] border-2 border-[#D4AF37]/20 rounded-[20px] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                                <div className="flex items-center gap-6">
                                    <div className="text-5xl filter drop-shadow-lg scale-110 group-hover:scale-125 transition-transform duration-500">🥇</div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-xl font-bold text-gray-900">First Prize</h4>
                                            <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-white text-[9px] font-bold uppercase tracking-tighter">1 Winner</span>
                                        </div>
                                        <p className="text-[#D4AF37] font-bold text-base mb-3">₹3,50,000 Total Value</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">International Congress Sponsorship to ASN Kidney Week (USA) or ERA Congress (Europe), including all travel expenses.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Silver Prize */}
                            <div className="group relative bg-white border-2 border-gray-100 rounded-[20px] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                                <div className="flex items-center gap-6">
                                    <div className="text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-500">🥈</div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-xl font-bold text-gray-900">Second Prize</h4>
                                            <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-[9px] font-bold uppercase tracking-tighter">1 Winner</span>
                                        </div>
                                        <p className="text-[#D4AF37] font-bold text-base mb-3">₹1,00,000 Total Value</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">Professional Medical Package including a Portable Vascular Ultrasound device or institutional research grant.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bronze Prize */}
                            <div className="group relative bg-white border-2 border-gray-100 rounded-[20px] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                                <div className="flex items-center gap-6">
                                    <div className="text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-500">🥉</div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-xl font-bold text-gray-900">Third Prize</h4>
                                            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[9px] font-bold uppercase tracking-tighter">1 Winner</span>
                                        </div>
                                        <p className="text-[#D4AF37] font-bold text-base mb-3">₹50,000 Total Value</p>
                                        <p className="text-gray-500 text-xs leading-relaxed">Professional Development Package including premium medical library resources or national conference sponsorships.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex items-center gap-4 text-gray-400">
                            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                            <p className="text-[9px] uppercase tracking-[0.2em] leading-relaxed">Automated draw process conducted by an independent committee. Participation is open to all registered healthcare providers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramInfo;