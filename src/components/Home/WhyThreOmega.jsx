import React from 'react';
import { Droplet, Target, Award, CheckCircle2, Shield, TrendingUp, Sparkles } from 'lucide-react';

const WhyThreOmega = () => {
    const features = [
        {
            icon: Droplet,
            title: 'Evidence-Informed',
            subtitle: 'Dosing protocol aligned with the latest clinical trials.',
            desc: 'Dosing parameters precisely reflect the protocols used in landmark trials for hemodialysis patients.',
            accent: '#D4AF37'
        },
        {
            icon: Target,
            title: 'Targeted Ratio',
            subtitle: 'Optimal 2:1 ratio for dialysis patients.',
            desc: 'Specifically formulated to protect those who need targeted cardiovascular support the most.',
            accent: '#8B0000'
        },
        {
            icon: Award,
            title: 'Quality Assured',
            subtitle: 'GMP certified manufacturing processes.',
            desc: 'Each capsule undergoes rigorous third-party potency verification and QC checks.',
            accent: '#D4AF37'
        },
        {
            icon: CheckCircle2,
            title: 'Simple Compliance',
            subtitle: 'Optimized daily capsule count.',
            desc: 'Simplifies trial-proven high dosing into a manageable routine for patients.',
            accent: '#8B0000'
        },
        {
            icon: Shield,
            title: 'Protocol-Matched',
            subtitle: 'Matched EPA/DHA specific ratio.',
            desc: 'Identical profiles to those used in the studies that showed the greatest CV benefits.',
            accent: '#D4AF37'
        },
        {
            icon: TrendingUp,
            title: 'Proven Results',
            subtitle: '1600mg EPA + 800mg DHA.',
            desc: 'The exact dose used in the largest hemodialysis trials ever conducted globally.',
            accent: '#8B0000'
        }
    ];

    return (
        <section className="py-24 px-6 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FAF9F6] border border-gray-100 mb-6 shadow-sm">
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-gray-900 font-bold tracking-[0.2em] text-[10px] uppercase">Why ThreOmega™ Stands Alone</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
                        Engineered for <br /><span className="text-[#D4AF37]">Dialysis Care</span>
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div 
                            key={i} 
                            className="group relative bg-white border-2 border-gray-100 rounded-[40px] p-10 transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]/20"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm">
                                    <feature.icon className="w-7 h-7" style={{ color: feature.accent }} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                    <p className="text-[10px] font-bold uppercase tracking-widest leading-none mt-1" style={{ color: feature.accent }}>{feature.subtitle}</p>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-gray-50">
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Action */}
                <div className="mt-20 flex flex-wrap justify-center gap-6">
                    <button className="px-10 py-5 bg-[#8B0000] hover:bg-[#A50000] text-white font-bold rounded-2xl transition-all shadow-xl shadow-red-900/10 flex items-center gap-3">
                        FOR DOCTORS: PRESCRIBE
                    </button>
                    <button className="px-10 py-5 bg-white border-2 border-gray-100 hover:border-[#D4AF37] text-gray-900 font-bold rounded-2xl transition-all flex items-center gap-3 shadow-lg shadow-gray-100/50">
                        FOR PATIENTS: ORDER
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyThreOmega;