import React from 'react';
import { Droplet, Target, Award, CheckCircle, Shield, TrendingUp } from 'lucide-react';

const WhyThreOmega = () => {
  const styles = {
    primary: '#1297E4',
    secondary: '#0F238C',
    silver: '#C0C0C0',
    gold: '#EAE136',
    text: '#2D2D2D',
    background: '#FFFFFF',
    lightBg: '#F8F9FA',
    red: '#C41E3A',
    green: '#10B981'
  };

  const features = [
    {
      id: 1,
      icon: Droplet,
      iconBg: '#FEF3C7',
      iconColor: styles.gold,
      title: 'Evidence-Informed Formulation',
      subtitle: 'Matches dosing protocol from the FOCUS/OMEMI trial',
      whatItMeans: 'What this means:',
      description: 'Dosing parameters were chosen that reflected from trial log (e.g. in 1:2d patients.'
    },
    {
      id: 2,
      icon: Target,
      iconBg: '#FECACA',
      iconColor: styles.red,
      title: 'Targeted Composition',
      subtitle: 'Optimal ratio (2:1) that matches specifically on hemodialysis patients',
      whatItMeans: 'What this means:',
      description: 'More targeted supplement. Protects that dialysis patients who needed them the most share.'
    },
    {
      id: 3,
      icon: Award,
      iconBg: '#FEF3C7',
      iconColor: styles.gold,
      title: 'Quality Assured',
      subtitle: 'Manufactured to high-quality pharmaceutical',
      whatItMeans: 'What this means:',
      description: 'Each capsule has undergone batch/QC/GMP certified manufacturing (Third party potency verified, No fish, affordable, friction issues)'
    },
    {
      id: 4,
      icon: CheckCircle,
      iconBg: '#D1FAE5',
      iconColor: styles.green,
      title: 'Simple Compliance',
      subtitle: 'Four capsules per day dosing matches was trial protocol',
      whatItMeans: 'What this means:',
      description: 'Just 2 capsules per day. In FOCUS trial, Capsules took 6 capsules per EVERY 10x - clearer results'
    },
    {
      id: 5,
      icon: Shield,
      iconBg: '#FEF3C7',
      iconColor: styles.gold,
      title: 'Protocol-Matched',
      subtitle: 'Same EPA/DHA ratio in a standard (2:1x/2ml trial',
      whatItMeans: 'What this means:',
      description: 'EPA > DHA week matches. This specific ratio reflected the Trial cardiovascular proportion.'
    },
    {
      id: 6,
      icon: TrendingUp,
      iconBg: '#FECACA',
      iconColor: styles.red,
      title: 'Evidence-Informed Dosing',
      subtitle: '1600 mg EPA+800 mg DHA ~ FOCUS Dosing',
      whatItMeans: 'What this means:',
      description: 'Studied dose used in the trial this worked in the largest HD trial ever conducted'
    }
  ];

  return (
    <div style={{ backgroundColor: styles.lightBg, padding: '64px 0' }}>
      <div style={{ marginLeft: '4%', marginRight: '4%' }}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2" style={{ color: styles.text }}>
            WHY THREOMEGA™ FOR YOUR HEMODIALYSIS<br />PATIENTS?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div
                key={feature.id}
                className="border-2 rounded-lg p-6"
                style={{
                  backgroundColor: styles.background,
                  borderColor: styles.silver
                }}
              >
                <div className={`grid md:grid-cols-12 gap-6 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Icon and Title - Left or Right based on index */}
                  <div className={`md:col-span-5 ${isEven ? 'md:col-start-8' : ''}`}>
                    <div className="flex items-start">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: feature.iconBg }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color: feature.iconColor }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: styles.text }}>
                          {feature.title}
                        </h3>
                        <p className="text-sm" style={{ color: styles.text, opacity: 0.7 }}>
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description - Right or Left based on index */}
                  <div className={`md:col-span-7 ${isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div
                      className="border-l-4 pl-4 py-2"
                      style={{ 
                        borderColor: styles.gold,
                        backgroundColor: '#FFFBEB'
                      }}
                    >
                      <p className="text-sm font-semibold mb-2" style={{ color: styles.text }}>
                        {feature.whatItMeans}
                      </p>
                      <p className="text-sm" style={{ color: styles.text, opacity: 0.8 }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-3 font-bold rounded-full transition-opacity hover:opacity-90"
            style={{
              backgroundColor: styles.gold,
              color: styles.text
            }}
          >
            FOR DOCTORS: PRESCRIBE NOW
          </button>
          <button
            className="px-8 py-3 font-bold rounded-full transition-opacity hover:opacity-90"
            style={{
              backgroundColor: styles.red,
              color: styles.background
            }}
          >
            FOR PATIENTS: ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyThreOmega;