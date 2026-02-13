// import React from 'react';
// import { ArrowRight, ShieldCheck, Activity, Award } from 'lucide-react';
// import image from "../../assets/womans-hand-holding-fish-oil-supplements.jpg";

// const Banner = () => {
//     return (
//         <section className="relative pt-6 lg:pt-5 pb-16 px-6 bg-white overflow-hidden">
//             {/* Background Accents */}
//             <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 translate-x-32 hidden lg:block"></div>
            
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
//                     {/* Content */}
//                     <div className="flex-1 text-center lg:text-left">
//                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B0000]/5 border border-[#8B0000]/10 mb-8 animate-fade-in">
//                             <ShieldCheck className="w-4 h-4 text-[#8B0000]" />
//                             <span className="text-[#8B0000] font-black tracking-widest text-[10px] uppercase">
//                                 NEJM Published Clinical Evidence (2025)
//                             </span>
//                         </div>
                        
//                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-8" style={{ fontFamily: 'serif' }}>
//                             Advanced 
//                             <span className="text-[#D4AF37]"> Cardiac</span> <br />
//                             Protection.
//                         </h1>
                        
//                         <p className="text-lg md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
//                             Integrating landmark clinical research and guideline-driven care to reduce cardiovascular risk in hemodialysis patients.
//                         </p>

//                         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                             <button className="px-10 py-5 bg-[#8B0000] hover:bg-black text-white font-black rounded-2xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group">
//                                 INITIATE PROTOCOL
//                                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                             </button>
//                             <button className="px-10 py-5 bg-white border-2 border-gray-100 hover:border-[#D4AF37] text-gray-900 font-black rounded-2xl transition-all flex items-center justify-center">
//                                 VIEW THE STUDY
//                             </button>
//                         </div>

//                         {/* Trust Bar */}
//                         <div className="mt-6 pt-8 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-8">
//                             <div className="flex items-center gap-3 group">
//                                 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] transition-colors">
//                                     <Activity className="w-5 h-5" />
//                                 </div>
//                                 <div className="text-left">
//                                     <p className="text-lg font-black text-gray-900 leading-none">43%</p>
//                                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Risk Reduction</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-center gap-3 group">
//                                 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#8B0000] transition-colors">
//                                     <Award className="w-5 h-5" />
//                                 </div>
//                                 <div className="text-left">
//                                     <p className="text-lg font-black text-gray-900 leading-none">NEJM</p>
//                                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Publication</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Visual */}
//                     <div className="flex-1 relative order-first lg:order-last">
//                         <div className="relative group">
//                             {/* Decorative Elements */}
//                             <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37] to-[#8B0000] rounded-[60px] opacity-10 group-hover:opacity-20 transition-all duration-700 blur-2xl"></div>
                            
//                             <img 
//                                 src={image} 
//                                 alt="ThreOmega Pharmaceutical Grade" 
//                                 className="relative rounded-[20px] shadow-xl transition-transform duration-700 group-hover:scale-[1.02] border-8 border-white"
//                             />
                            
//                             {/* Floating Card */}
//                             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[10px] shadow-xl border border-gray-50 hidden md:block animate-float">
//                                 <p className="text-[10px] font-black text-[#D4AF37] tracking-[0.2em] uppercase mb-2">Clinical Purity</p>
//                                 <p className="text-2xl font-black text-gray-900">Pharmaceutical <br />Grade EPA/DHA</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;


import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Award } from 'lucide-react';
import image from "../../assets/womans-hand-holding-fish-oil-supplements.jpg";

const Banner = () => {
    return (
        <section className="relative pt-6 lg:pt-5 pb-16 bg-white overflow-hidden" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 translate-x-32 hidden lg:block"></div>
            
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B0000]/5 border border-[#8B0000]/10 mb-8 animate-fade-in">
                            <ShieldCheck className="w-4 h-4 text-[#8B0000]" />
                            <span className="text-[#8B0000] font-black tracking-widest text-[9px] uppercase">
                                NEJM Published Clinical Evidence (2025)
                            </span>
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] mb-6" style={{ fontFamily: 'serif' }}>
                            Advanced 
                            <span className="text-[#D4AF37]"> Cardiac</span> <br />
                            Protection.
                        </h1>
                        
                        <p className="text-sm md:text-base text-gray-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Integrating landmark clinical research and guideline-driven care to reduce cardiovascular risk in hemodialysis patients.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-10 py-5 bg-[#8B0000] hover:bg-black text-white font-black rounded-[20px] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group">
                                INITIATE PROTOCOL
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-10 py-5 bg-white border-2 border-gray-100 hover:border-[#D4AF37] text-gray-900 font-black rounded-[20px] transition-all flex items-center justify-center">
                                VIEW THE STUDY
                            </button>
                        </div>

                        {/* Trust Bar */}
                        <div className="mt-6 pt-8 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-8">
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-[20px] bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-base font-black text-gray-900 leading-none">43%</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Risk Reduction</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-[20px] bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#8B0000] transition-colors">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-base font-black text-gray-900 leading-none">NEJM</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Global Publication</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="flex-1 relative order-first lg:order-last">
                        <div className="relative group">
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37] to-[#8B0000] rounded-[60px] opacity-10 group-hover:opacity-20 transition-all duration-700 blur-2xl"></div>
                            
                            <img 
                                src={image} 
                                alt="ThreOmega Pharmaceutical Grade" 
                                className="relative rounded-[20px] shadow-xl transition-transform duration-700 group-hover:scale-[1.02] border-8 border-white"
                            />
                            
                            {/* Floating Card */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[20px] shadow-xl border border-gray-50 hidden md:block animate-float">
                                <p className="text-[9px] font-black text-[#D4AF37] tracking-[0.2em] uppercase mb-2">Clinical Purity</p>
                                <p className="text-xl font-black text-gray-900">Pharmaceutical <br />Grade EPA/DHA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;