import React, { useState } from 'react';
import { HelpCircle, FileText, Download, Bookmark, ChevronDown, ArrowUpRight } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        question: 'Is a prescription required for ThreOmegaCV™?',
        answer: 'ThreOmegaCV™ is formulated as a high-potency medical food/supplement and does not require a formal prescription. However, due to its clinical-strength formulation, we strongly advise consulting your nephrologist or dialysis team before initiation.',
      },
      {
        question: 'What is the expected timeframe for clinical results?',
        answer: 'Landmark clinical trials demonstrate significant cardiovascular risk reduction after 6 months of consistent adherence. Many patients report improvements in overall vitality and metabolic stability within the first 8-12 weeks.',
      },
      {
        question: 'Are there any documented side effects?',
        answer: 'ThreOmegaCV™ is exceptionally well-tolerated. Rare reports of mild gastrointestinal effects (e.g., aftertaste) are typically mitigated by following the BD (twice daily) dosing protocol with meals.',
      },
      {
        question: 'Can ThreOmegaCV™ be used with anticoagulant therapy?',
        answer: 'Omega-3 fatty acids possess mild naturally-occurring antiplatelet properties. Patients on blood-thinning medications should have their coagulation profiles monitored regularly by their healthcare provider.',
      },
      {
        question: 'What is the recommended storage protocol?',
        answer: 'Maintain in a cool, dry environment (below 25°C/77°F). Protect from direct UV exposure and ensure the airtight seal is maintained between uses to prevent oxidation of the delicate EPA/DHA molecules.',
      },
      {
        question: 'Is this product suitable for vegetarian diets?',
        answer: 'No. ThreOmega™ utilizes ultra-purified marine-sourced oils to achieve the specific EPA/DHA concentrations mandated by the FOCUS-HD protocol. It is encapsulated in pharmaceutical-grade bovine gelatin.',
      },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const leftFaqs = faqs.slice(0, 3);
    const rightFaqs = faqs.slice(3, 6);

    const FAQItem = ({ faq, index }) => (
        <div
            className={`group rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
                openIndex === index ? 'border-[#D4AF37] bg-[#FAF9F6]' : 'border-gray-100 bg-white hover:border-[#D4AF37]/30'
            }`}
        >
            <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-start justify-between text-left gap-4"
            >
                <span className="text-base font-bold text-gray-900 leading-snug">
                    {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                    openIndex === index
                        ? 'bg-[#D4AF37] text-white rotate-180'
                        : 'bg-gray-50 text-gray-400 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37]'
                }`}>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
            }`}>
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-white">
            {/* FAQ Accordion */}
            <div className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-6 shadow-sm">
                            <HelpCircle className="w-4 h-4 text-[#8B0000]" />
                            <span className="text-gray-900 font-bold tracking-[0.2em] text-[10px] uppercase">Scientific Inquiries</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'serif' }}>
                            Frequently <span className="text-[#D4AF37]">Asked</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            {leftFaqs.map((faq, i) => (
                                <FAQItem key={i} faq={faq} index={i} />
                            ))}
                        </div>
                        <div className="space-y-4">
                            {rightFaqs.map((faq, i) => (
                                <FAQItem key={i + 3} faq={faq} index={i + 3} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Clinical Reference Card — Minimal */}
            <div className="py-16 px-6 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        {/* Left: Label + Title */}
                        <div className="flex items-start gap-5">
                            <div className="w-10 h-10 rounded-xl bg-[#8B0000]/6 flex items-center justify-center text-[#8B0000] flex-shrink-0 mt-1">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-[#D4AF37] tracking-[0.3em] uppercase mb-1">Core Clinical Reference</p>
                                <p className="text-lg font-bold text-gray-900 leading-snug max-w-md" style={{ fontFamily: 'serif' }}>
                                    Omega-3 Supplementation & Cardiovascular Outcomes in CKD Patients
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {['NEJM, April 2021', 'FOCUS-HD Protocol', 'Global Study'].map(tag => (
                                        <span key={tag} className="text-[11px] font-semibold text-gray-400 px-2 py-0.5 bg-gray-50 rounded-md">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <button className="flex items-center gap-2 px-5 py-3 bg-gray-900 hover:bg-black text-white text-sm font-bold rounded-xl transition-all">
                                <Download className="w-4 h-4" />
                                Full Study
                            </button>
                            <button className="flex items-center gap-2 px-5 py-3 border border-gray-200 hover:border-[#D4AF37] text-gray-700 text-sm font-bold rounded-xl transition-all">
                                Citation
                                <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;