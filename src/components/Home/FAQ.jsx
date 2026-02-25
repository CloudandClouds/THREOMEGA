import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText, Download, Bookmark, Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'Is a prescription required for ThreOmega™ - CV ?',
            answer: 'ThreOmega™ is formulated as a high-potency medical food/supplement and does not require a formal prescription. However, due to its clinical-strength formulation, we strongly advise consulting your nephrologist or dialysis team before initiation.'
        },
        {
            question: 'What is the expected timeframe for clinical results?',
            answer: 'Landmark clinical trials demonstrate significant cardiovascular risk reduction after 6 months of consistent adherence. Many patients report improvements in overall vitality and metabolic stability within the first 8-12 weeks.'
        },
        {
            question: 'Are there any documented side effects?',
            answer: 'ThreOmega™ is exceptionally well-tolerated. Rare reports of mild gastrointestinal effects (e.g., aftertaste) are typically mitigated by following the BD (twice daily) dosing protocol with meals.'
        },
        {
            question: 'Can ThreOmega™ be used with anticoagulant therapy?',
            answer: 'Omega-3 fatty acids possess mild naturally-occurring antiplatelet properties. Patients on blood-thinning medications should have their coagulation profiles monitored regularly by their healthcare provider.'
        },
        {
            question: 'What is the recommended storage protocol?',
            answer: 'Maintain in a cool, dry environment (below 25°C/77°F). Protect from direct UV exposure and ensure the airtight seal is maintained between uses to prevent oxidation of the delicate EPA/DHA molecules.'
        },
        {
            question: 'Is this product suitable for vegetarian diets?',
            answer: 'No. ThreOmega™ utilizes ultra-purify marine-sourced oils to achieve the specific EPA/DHA concentrations mandated by the FOCUS-HD protocol. It is encapsulated in pharmaceutical-grade bovine gelatin.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white">
            {/* FAQ Accordion */}
            <div className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-6 shadow-sm">
                            <HelpCircle className="w-4 h-4 text-[#8B0000]" />
                            <span className="text-gray-900 font-bold tracking-[0.2em] text-[10px] uppercase">Scientific Inquiries</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
                            Frequently <span className="text-[#D4AF37]">Asked</span>
                        </h2>
                    </div>

                    {/* Accordion List */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`group rounded-[32px] border-2 transition-all duration-500 overflow-hidden ${
                                    openIndex === index ? 'border-[#D4AF37] bg-[#FAF9F6]' : 'border-gray-100 bg-white hover:border-[#D4AF37]/30'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-8 py-8 flex items-center justify-between text-left"
                                >
                                    <span className="text-xl font-bold text-gray-900 pr-8 line-tight leading-tight">
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                                        openIndex === index ? 'bg-[#D4AF37] text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37]'
                                    }`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>
                                
                                <div className={`transition-all duration-500 ease-in-out ${
                                    openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                                }`}>
                                    <div className="px-8 pb-8 text-gray-500 text-lg leading-relaxed max-w-3xl">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Clinical Reference Card */}
            <div className="py-24 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white border-2 border-gray-100 rounded-[60px] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                        {/* Evidence Badge */}
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                            <Bookmark className="w-64 h-64 text-gray-900" />
                        </div>

                        <div className="relative z-10 text-center md:text-left">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-24 h-24 rounded-[32px] bg-[#8B0000]/5 flex items-center justify-center text-[#8B0000] flex-shrink-0">
                                    <FileText className="w-10 h-10" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xs font-black text-[#D4AF37] tracking-[0.3em] uppercase mb-4">Core Clinical Reference</h3>
                                    <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'serif' }}>
                                        Omega-3 fatty acid supplementation and Cardiovascular Outcome Risk in CKD Patients
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-400 mb-10">
                                        <span className="px-3 py-1 bg-gray-50 rounded-lg">NEJM, April 2021</span>
                                        <span className="px-3 py-1 bg-gray-50 rounded-lg">FOCUS-HD Protocol</span>
                                        <span className="px-3 py-1 bg-gray-50 rounded-lg">Global Study</span>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <button className="px-10 py-5 bg-gray-900 hover:bg-black text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
                                            <Download className="w-5 h-5" />
                                            FULL STUDY [PDF]
                                        </button>
                                        <button className="px-10 py-5 bg-white border-2 border-gray-100 hover:border-[#D4AF37] text-gray-900 font-bold rounded-2xl transition-all flex items-center justify-center gap-3">
                                            VIEW CITATION
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;