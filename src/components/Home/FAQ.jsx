import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText, Download } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const styles = {
    primary: '#1297E4',
    secondary: '#0F238C',
    silver: '#C0C0C0',
    gold: '#EAE136',
    text: '#2D2D2D',
    background: '#FFFFFF',
    lightBg: '#F8F9FA',
    red: '#C41E3A'
  };

  const faqs = [
    {
      question: 'Do I need a prescription?',
      answer: 'ThreOmega™ is available without a prescription. However, we recommend consulting with your healthcare provider before starting any new supplement, especially if you are on dialysis or have existing medical conditions.'
    },
    {
      question: 'When will I see results?',
      answer: 'Clinical trials showed cardiovascular benefits after 6 months of consistent use. However, individual results may vary. Some patients report feeling better energy levels within the first few weeks of supplementation.'
    },
    {
      question: 'Any side effects?',
      answer: 'ThreOmega™ is generally well-tolerated. Some people may experience mild digestive discomfort, fishy aftertaste, or burping. Taking the capsules with food can help minimize these effects. Consult your doctor if you experience any unusual symptoms.'
    },
    {
      question: 'Can I take with my medications?',
      answer: 'Omega-3 supplements can interact with blood thinners and other medications. Always inform your doctor about all supplements you are taking. Your healthcare provider can advise on the best timing and dosage for your specific situation.'
    },
    {
      question: 'What if I miss a dose?',
      answer: 'If you miss a dose, take it as soon as you remember. If it\'s close to your next scheduled dose, skip the missed dose and continue with your regular schedule. Do not double up on doses to make up for a missed one.'
    },
    {
      question: 'Is this vegetarian?',
      answer: 'No, ThreOmega™ contains fish oil-derived EPA and DHA. It is not suitable for vegetarians or vegans. If you follow a plant-based diet, consult your healthcare provider about alternative omega-3 sources.'
    },
    {
      question: 'How is this different from eating fish?',
      answer: 'ThreOmega™ provides a concentrated, standardized dose of EPA and DHA (1600mg EPA + 800mg DHA daily) that matches the FOCUS trial protocol. This specific ratio and dosage would be difficult to achieve through diet alone, especially for dialysis patients with dietary restrictions.'
    },
    {
      question: 'What about storage?',
      answer: 'Store ThreOmega™ in a cool, dry place away from direct sunlight. Keep the bottle tightly closed when not in use. Do not refrigerate unless the label specifically instructs to do so. Keep out of reach of children.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* FAQ Section */}
      <div style={{ backgroundColor: styles.lightBg, padding: '64px 0' }}>
        <div style={{ marginLeft: '4%', marginRight: '4%' }}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-8 h-8 mr-3" style={{ color: styles.red }} />
              <h2 className="text-4xl font-bold" style={{ color: styles.text }}>
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            <div 
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: styles.gold }}
            ></div>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 rounded-lg overflow-hidden"
                style={{
                  backgroundColor: styles.background,
                  borderColor: styles.silver
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: styles.background }}
                >
                  <div className="flex items-center">
                    <span className="text-lg mr-3" style={{ color: styles.red }}>?</span>
                    <span className="font-semibold text-left" style={{ color: styles.text }}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    style={{ color: styles.text }}
                  />
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div 
                    className="px-6 py-4 border-t"
                    style={{ 
                      backgroundColor: styles.lightBg,
                      borderColor: styles.silver
                    }}
                  >
                    <p style={{ color: styles.text, opacity: 0.8 }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clinical Reference Section */}
      <div style={{ backgroundColor: styles.background, padding: '64px 0', borderTop: `1px solid ${styles.silver}` }}>
        <div style={{ marginLeft: '4%', marginRight: '4%' }}>
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                <FileText className="w-8 h-8" style={{ color: '#10B981' }} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4" style={{ color: styles.text }}>
              📚 CLINICAL REFERENCE
            </h3>

            {/* Description */}
            <p className="text-base mb-2" style={{ color: styles.text, opacity: 0.8 }}>
              U.S.C.T. (2024-01-15): Omega-3 fatty acid supplementation in US and<br />
              Global 200-500ml supplementation and its role on Reducing Potentially life<br />
              Threatening Events in CKD Patients
            </p>
            <p className="text-sm italic mb-8" style={{ color: styles.text, opacity: 0.6 }}>
              N Engl J Med, April 7, 2021
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-3 font-bold border-2 rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center"
                style={{
                  backgroundColor: styles.background,
                  borderColor: styles.gold,
                  color: styles.text
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                📄 READ FULL STUDY
              </button>
              <button
                className="px-8 py-3 font-bold border-2 rounded-lg transition-opacity hover:opacity-90 flex items-center justify-center"
                style={{
                  backgroundColor: styles.background,
                  borderColor: styles.gold,
                  color: styles.text
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                📥 DOWNLOAD PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;