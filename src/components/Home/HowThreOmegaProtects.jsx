import React from 'react';
import { Heart, Activity, PlayCircle } from 'lucide-react';

const HowThreOmegaProtects = () => {
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

  const steps = [
    {
      id: 1,
      number: '1',
      title: 'ABSORPTION',
      description: 'Dissolves in stomach; EPA/DHA released into bloodstream',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80'
    },
    {
      id: 2,
      number: '2',
      title: 'CELLULAR PROTECTION',
      description: 'Omega-3 molecules stabilize heart cells, reduce inflammation',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&q=80'
    },
    {
      id: 3,
      number: '3',
      title: 'CLINICAL OUTCOMES',
      description: 'Fewer heart attacks, strokes, cardiac deaths',
      image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&q=80'
    }
  ];

  return (
    <div style={{ backgroundColor: styles.lightBg, padding: '64px 0' }}>
      <div style={{ marginLeft: '4%', marginRight: '4%' }}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-10 h-10 mr-3" style={{ color: styles.primary }} />
            <h2 className="text-4xl font-bold" style={{ color: styles.red }}>
              HOW THREOMEGA™ PROTECTS YOUR HEART
            </h2>
          </div>
          <div 
            className="w-24 h-1 mx-auto"
            style={{ backgroundColor: styles.gold }}
          ></div>
        </div>

        {/* Steps Section */}
        <div className="relative mb-12">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5" style={{ backgroundColor: styles.gold, zIndex: 0 }}>
            <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-32 h-0.5" style={{ backgroundColor: styles.gold }}></div>
            <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-32 h-0.5" style={{ backgroundColor: styles.gold }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Number Circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl font-bold relative z-20"
                  style={{
                    backgroundColor: styles.gold,
                    color: styles.text
                  }}
                >
                  {step.number}
                </div>

                {/* Image Card */}
                <div
                  className="border-2 rounded-lg overflow-hidden mb-4 w-full"
                  style={{
                    borderColor: styles.silver,
                    backgroundColor: styles.background
                  }}
                >
                  <div className="relative h-48">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Title and Description */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2" style={{ color: styles.text }}>
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{ color: styles.text, opacity: 0.7 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Watch Video Button */}
        <div className="text-center">
          <button
            className="px-8 py-3 font-bold rounded-full transition-opacity hover:opacity-90 flex items-center justify-center mx-auto"
            style={{
              backgroundColor: styles.red,
              color: styles.background
            }}
          >
            <PlayCircle className="w-5 h-5 mr-2" />
            WATCH FULL VIDEO: 3 Minutes
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowThreOmegaProtects;