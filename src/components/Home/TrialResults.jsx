import React from 'react';
import { Heart, HeartCrack, Activity, Zap, CheckCircle2, TrendingDown, Shield } from 'lucide-react';

const TrialResults = () => {
    const trialData = [
        {
            icon: Heart,
            percentage: '43%',
            label: 'Major CV Events',
            desc: 'Significant reduction in serious cardiovascular outcomes.',
            accent: '#8B0000',
            bg: 'bg-red-50'
        },
        {
            icon: HeartCrack,
            percentage: '45%',
            label: 'Cardiac Death',
            desc: 'Lower incidence of mortality related to heart conditions.',
            accent: '#8B0000',
            bg: 'bg-white'
        },
        {
            icon: Activity,
            percentage: '63%',
            label: 'Stroke Events',
            desc: 'Enhanced protection against cerebrovascular incidents.',
            accent: '#D4AF37',
            bg: 'bg-amber-50/30'
        },
        {
            icon: Zap,
            percentage: '44%',
            label: 'Heart Attack',
            desc: 'Reduced risk of acute myocardial infarction.',
            accent: '#8B0000',
            bg: 'bg-white'
        }
    ];

    return (
        <section className="py-10  bg-gray-50/50 " style={{ paddingLeft: '5%', paddingRight: '5%' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-100 mb-6 shadow-sm">
                        <TrendingDown className="w-4 h-4 text-[#8B0000]" />
                        <span className="text-[#8B0000] font-bold tracking-[0.2em] text-[10px] uppercase">Results of Cardiovascular Protection</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
                        Proven <span className="text-[#D4AF37]">Clinical Impact</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        The PISCES-HD trial demonstrated remarkable risk reductions across all primary cardiovascular endpoints.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trialData.map((stat, i) => (
                        <div 
                            key={stat.label} 
                            className={`${stat.bg} border-2 border-gray-100 rounded-[20px] p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                                <stat.icon className="w-8 h-8" style={{ color: stat.accent }} />
                            </div>
                            <div className="space-y-2 mb-6">
                                <span className="text-5xl font-black text-gray-900 leading-none">
                                    {stat.percentage}
                                </span>
                                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: stat.accent }}>Reduction</p>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{stat.label}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Evidence Footer */}
                <div className="mt-20 bg-white border-2 border-gray-100 rounded-[20px] p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                        <Shield className="w-64 h-64 text-[#D4AF37]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                <CheckCircle2 className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Safety Profile</h4>
                                <p className="text-gray-500 text-sm">Excellent tolerability recorded throughout the study.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-[#8B0000]/10 flex items-center justify-center text-[#8B0000] flex-shrink-0">
                                <CheckCircle2 className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Patient Adherence</h4>
                                <p className="text-gray-500 text-sm">High compliance rate of 92% across all participant groups.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                                <CheckCircle2 className="w-7 h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Consistent Benefits</h4>
                                <p className="text-gray-500 text-sm">Statistical significance achieved across all diverse cohorts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrialResults;