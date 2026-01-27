import React from 'react';
import { Pill, Coffee, Utensils, CheckCircle } from 'lucide-react';

const ProductShowcase = () => {
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

  return (
    <div style={{ backgroundColor: styles.lightBg, padding: '64px 0' }}>
      <div style={{ marginLeft: '4%', marginRight: '4%' }}>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ color: styles.text }}>
            THREOMEGA™ <span style={{ color: styles.gold }}>3Ω</span>
          </h1>
          <p className="text-base italic" style={{ color: styles.text, opacity: 0.7 }}>
            Omega-3 Supplementation for Hemodialysis Patients Formulated with Reference to<br />
            Emerging Clinical Evidence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Product Image */}
          <div>
            <div 
              className="border-2 rounded-lg p-8 text-center"
              style={{
                backgroundColor: styles.background,
                borderColor: styles.silver
              }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
                  alt="OMEGA-3 Product"
                  className="w-full h-auto rounded-lg mb-4"
                  style={{ maxWidth: '400px', margin: '0 auto' }}
                />
                <button
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 font-semibold rounded-full"
                  style={{
                    backgroundColor: styles.text,
                    color: styles.background
                  }}
                >
                  Buy it right now
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            {/* Precision Formulation */}
            <div 
              className="border-2 rounded-lg p-6"
              style={{
                backgroundColor: styles.background,
                borderColor: styles.silver
              }}
            >
              <div className="flex items-center mb-4">
                <Pill className="w-5 h-5 mr-2" style={{ color: styles.red }} />
                <h3 className="text-lg font-bold" style={{ color: styles.red }}>
                  PRECISION FORMULATION
                </h3>
              </div>
              <div className="space-y-2">
                <p className="font-semibold mb-3" style={{ color: styles.text }}>
                  Each Capsule Contains
                </p>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: styles.primary }}></div>
                  <span style={{ color: styles.text }}>EPA: 400 mg</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: styles.primary }}></div>
                  <span style={{ color: styles.text }}>DHA: 200 mg</span>
                </div>
              </div>
            </div>

            {/* Evidence-Based Dosing */}
            <div 
              className="border-2 rounded-lg p-6"
              style={{
                backgroundColor: styles.background,
                borderColor: styles.silver
              }}
            >
              <div className="flex items-center mb-4">
                <Utensils className="w-5 h-5 mr-2" style={{ color: styles.red }} />
                <h3 className="text-lg font-bold" style={{ color: styles.red }}>
                  EVIDENCE-BASED DOSING
                </h3>
              </div>
              <div className="space-y-4">
                <p className="font-semibold" style={{ color: styles.text }}>
                  4 capsules daily (2 BD)
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                      style={{ backgroundColor: styles.gold }}
                    >
                      <Coffee className="w-4 h-4" style={{ color: styles.text }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: styles.text }}>Morning: 2 capsules with breakfast</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                      style={{ backgroundColor: styles.red }}
                    >
                      <Utensils className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: styles.text }}>Evening: 2 capsules with dinner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Daily Dose */}
            <div 
              className="border-2 rounded-lg p-6"
              style={{
                backgroundColor: styles.background,
                borderColor: styles.silver
              }}
            >
              <p className="font-semibold mb-3" style={{ color: styles.text }}>
                Total Daily Dose:
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: styles.primary }}></div>
                  <span style={{ color: styles.text }}>EPA: 1.6 g/day</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: styles.primary }}></div>
                  <span style={{ color: styles.text }}>DHA: 0.8 g/day</span>
                </div>
              </div>
            </div>

            {/* Trial Results Badge */}
            <div 
              className="border-2 rounded-lg p-4"
              style={{
                backgroundColor: '#E8F5E9',
                borderColor: '#10B981'
              }}
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" style={{ color: '#10B981' }} />
                <p className="font-semibold" style={{ color: styles.text }}>
                  Dosing Aligned with FOCUS Trial Regimen
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                className="flex-1 px-6 py-3 font-bold border-2 rounded-lg transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: styles.background,
                  borderColor: styles.gold,
                  color: styles.text
                }}
              >
                VIEW PRICING
              </button>
              <button
                className="flex-1 px-6 py-3 font-bold border-2 rounded-lg transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: styles.red,
                  borderColor: styles.red,
                  color: styles.background
                }}
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;