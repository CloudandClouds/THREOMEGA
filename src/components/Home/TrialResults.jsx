import React from 'react';
import { Heart, HeartCrack, Activity, Zap, CheckCircle } from 'lucide-react';

const TrialResults = () => {
  const styles = {
    primary: '#1297E4',
    secondary: '#0F238C',
    silver: '#C0C0C0',
    gold: '#EAE136',
    text: '#2D2D2D',
    background: '#FFFFFF',
    darkBg: '#3A3A3A'
  };

  const trialData = [
    {
      id: 1,
      icon: Heart,
      percentage: '43%',
      reduction: 'REDUCTION',
      description: 'Serious CV Events',
      color: '#DC3545'
    },
    {
      id: 2,
      icon: HeartCrack,
      percentage: '45%',
      reduction: 'REDUCTION',
      description: 'Cardiac Death',
      color: '#DC3545'
    },
    {
      id: 3,
      icon: Activity,
      percentage: '63%',
      reduction: 'REDUCTION',
      description: 'Stroke Events',
      color: '#DC3545'
    },
    {
      id: 4,
      icon: Zap,
      percentage: '44%',
      reduction: 'REDUCTION',
      description: 'Heart Attack',
      color: '#EAB308'
    }
  ];

  const benefits = [
    'Excellent Safety Profile',
    'High Patient Adherence (92%)',
    'Consistent Benefits Across All Groups'
  ];

  return (
    <div style={{ backgroundColor: styles.darkBg, padding: '64px 0' }}>
      <div style={{ marginLeft: '4%', marginRight: '4%' }}>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
              style={{ backgroundColor: '#DC3545' }}
            >
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 
              className="text-4xl font-bold text-white"
              style={{ letterSpacing: '0.5px' }}
            >
              TRIAL RESULTS: CARDIOVASCULAR PROTECTION
            </h2>
          </div>
          <div 
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: styles.gold }}
          ></div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {trialData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="border-2 rounded-lg p-8 text-center"
                style={{
                  backgroundColor: styles.background,
                  borderColor: styles.silver
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <IconComponent 
                      className="w-8 h-8"
                      style={{ color: item.color }}
                    />
                  </div>
                </div>
                <h3
                  className="text-6xl font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.percentage}
                </h3>
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: styles.text, letterSpacing: '1px' }}
                >
                  {item.reduction}
                </p>
                <p
                  className="text-base"
                  style={{ color: styles.text, opacity: 0.8 }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Benefits List */}
        <div className="space-y-3 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: '#10B981' }}
              >
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-white text-lg font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="px-8 py-4 font-bold text-lg transition-opacity hover:opacity-90 rounded-full"
            style={{
              backgroundColor: styles.gold,
              color: styles.text,
              letterSpacing: '1px'
            }}
          >
            LEARN MORE ABOUT BENEFITS
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialResults;