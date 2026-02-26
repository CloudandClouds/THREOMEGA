import React from 'react';
import { Heart, Activity, PlayCircle, ShieldCheck, Zap, Microscope, Droplets, Target } from 'lucide-react';

const HowThreOmegaProtects = () => {
    const steps = [
        {
            number: 'PHASE 01',
            title: 'Precision Bio-Absorption',
            desc: 'Ultra-purity EPA/DHA molecules are encapsulated in targeted-release gels, ensuring maximum bioavailability through specialized intestinal transporters.',
            icon: <Droplets className="w-8 h-8" />,
            accent: '#D4AF37',
            detail: '98% Bioavailability Rate'
        },
        {
            number: 'PHASE 02',
            title: 'Cellular Integration',
            desc: 'Omega-3 molecules integrate directly into myocardial cell membranes, stabilizing electrical conduction and modulating inflammatory cytokines.',
            icon: <Microscope className="w-8 h-8" />,
            accent: '#8B0000',
            detail: 'Myocardial Stabilization'
        },
        {
            number: 'PHASE 03',
            title: 'Systemic CV Protection',
            desc: 'The optimized clinical ratio (2:1 EPA:DHA) triggers sustained reduction in cardiovascular stress markers and long-term arterial plasticity.',
            icon: <ShieldCheck className="w-8 h-8" />,
            accent: '#D4AF37',
            detail: 'Documented Risk Reduction'
        }
    ];

    return (
        <section className="py-32 px-6 bg-white relative overflow-hidden">
            {/* Background Architecture */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 translate-x-32"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-24">
                    {/* Left: Narrative */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#8B0000]/5 border border-[#8B0000]/10 mb-8">
                                <Activity className="w-4 h-4 text-[#8B0000]" />
                                <span className="text-[#8B0000] font-black tracking-[0.2em] text-[10px] uppercase">Molecular Architecture</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-[0.9]" style={{ fontFamily: 'serif' }}>
                                The <span className="text-[#D4AF37]">Mechanism</span> of Protection.
                            </h2>
                            
                            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                                ThreOmega™ - CV isn't just a supplement—it's a precision-engineered clinical protocol designed to safeguard the dialysis heart at a cellular level.
                            </p>

                            <button className="flex items-center gap-4 group">
                                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-white group-hover:bg-[#8B0000] transition-colors shadow-xl">
                                    <PlayCircle className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-black text-gray-900 uppercase tracking-widest leading-none mb-1">Watch Clinical</p>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Process Video [3:00]</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right: The Process (Vertical Architectural Path) */}
                    <div className="lg:w-2/3 relative">
                        {/* Central Path Line */}
                        <div className="absolute left-8 lg:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

                        <div className="space-y-20">
                            {steps.map((step, i) => (
                                <div key={i} className="relative pl-24 lg:pl-32 group">
                                    {/* Vertical Node */}
                                    <div className="absolute left-0 top-0">
                                        <div className="relative">
                                            {/* Glow Effect */}
                                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37] to-[#8B0000] rounded-[24px] opacity-0 group-hover:opacity-20 transition-all duration-700 blur-xl"></div>
                                            
                                            <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-[10px] bg-white border-2 border-gray-100 flex items-center justify-center shadow-xl relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:border-[#D4AF37]/50">
                                                <div style={{ color: step.accent }}>
                                                    {step.icon}
                                                </div>
                                            </div>

                                            {/* Connecting Dot */}
                                            <div className="absolute left-[50%] -translate-x-1/2 -bottom-10 w-3 h-3 rounded-full bg-gray-200 group-hover:bg-[#D4AF37] transition-colors"></div>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-white rounded-[20px] p-8 lg:p-12 border border-gray-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                            <div>
                                                <span className="text-[10px] font-black text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">{step.number}</span>
                                                <h3 className="text-xl lg:text-xl font-black text-gray-900 tracking-tight">{step.title}</h3>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="px-4 py-2 bg-gray-50 rounded-xl text-[10px] font-black text-gray-500 uppercase tracking-widest border border-gray-100">
                                                    {step.detail}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Final Outcome Marker */}
                        <div className="mt-20 pl-24 lg:pl-32 flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-[#8B0000]/10 flex items-center justify-center text-[#8B0000]">
                                <Target className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-black text-gray-400 uppercase tracking-widest">
                                Comprehensive Cardiovascular Shield Active
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowThreOmegaProtects;