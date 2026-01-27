import React, { useState } from 'react';
import { Heart, User, CheckCircle, Package, Truck, CreditCard, HeadphonesIcon } from 'lucide-react';

const TestimonialsAndPricing = () => {
  const [activeTab, setActiveTab] = useState('all');

  const styles = {
    primary: '#1297E4',
    secondary: '#0F238C',
    silver: '#C0C0C0',
    gold: '#EAE136',
    text: '#2D2D2D',
    background: '#FFFFFF',
    lightBg: '#F8F9FA',
    red: '#C41E3A',
    green: '#10B981',
    darkBg: '#3A3A3A'
  };

  const testimonial = {
    name: 'Ramesh, 35 - Coimbatore',
    location: '2 years on Dialysis',
    treatment: 'Before THREOMEGA™:',
    beforePoints: [
      'Hospitalization/year',
      'Constant worry about heart',
      ''
    ],
    afterTitle: 'After 6 Months:',
    afterPoints: [
      'Zero hospitalizations',
      'Better energy',
      'Peace of mind'
    ],
    quote: '"My doctor is impressed with my progress."',
    author: 'VERIFIED PATIENT',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  };

  const packages = [
    {
      id: 'trial',
      name: 'TRIAL',
      duration: '15 days',
      capsules: '60 Capsules',
      price: '399',
      originalPrice: null,
      popular: false,
      savings: null
    },
    {
      id: 'monthly',
      name: 'MONTHLY',
      duration: '30 days',
      capsules: '120 Capsules',
      price: '1,349',
      originalPrice: '1,599',
      popular: true,
      savings: 'Save 15%'
    },
    {
      id: 'value',
      name: 'VALUE',
      duration: '90 days',
      capsules: '360 Capsules',
      price: '2,399',
      originalPrice: '4,047',
      popular: false,
      savings: 'Save 40%'
    }
  ];

  const benefits = [
    { icon: Package, text: 'SUBSCRIBE & SAVE EXTRA 10%' },
    { icon: Truck, text: 'Free Shipping on orders 799+' },
    { icon: CreditCard, text: '100% Secure Checkout' },
    { icon: HeadphonesIcon, text: '24/7hr Money-Back Guarantee' }
  ];

  return (
    <div>
      {/* Testimonials Section */}
      <div style={{ backgroundColor: styles.darkBg, padding: '64px 0' }}>
        <div style={{ marginLeft: '4%', marginRight: '4%' }}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 mr-3" style={{ color: styles.green }} />
              <h2 className="text-4xl font-bold text-white">
                REAL RESULTS FROM REAL PEOPLE
              </h2>
            </div>
            <div 
              className="w-24 h-1 mx-auto mb-8"
              style={{ backgroundColor: styles.gold }}
            ></div>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-8">
              {['All', 'Age 60+', 'HbA1c', 'Diabetes'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase().replace(/\s+/g, '-'))}
                  className="px-6 py-2 rounded-full font-semibold transition-all"
                  style={{
                    backgroundColor: activeTab === tab.toLowerCase().replace(/\s+/g, '-') ? styles.gold : 'transparent',
                    color: activeTab === tab.toLowerCase().replace(/\s+/g, '-') ? styles.text : styles.background,
                    border: `2px solid ${activeTab === tab.toLowerCase().replace(/\s+/g, '-') ? styles.gold : styles.silver}`
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial Card */}
          <div 
            className="border-2 rounded-lg p-8 max-w-4xl mx-auto"
            style={{
              backgroundColor: styles.background,
              borderColor: styles.silver
            }}
          >
            <div className="grid md:grid-cols-12 gap-6">
              {/* Profile Image */}
              <div className="md:col-span-3">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4"
                    style={{ borderColor: styles.gold }}
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold mb-1" style={{ color: styles.text }}>
                  {testimonial.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: styles.text, opacity: 0.6 }}>
                  {testimonial.location}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Before */}
                  <div>
                    <h4 className="font-bold mb-3" style={{ color: styles.text }}>
                      {testimonial.treatment}
                    </h4>
                    <div className="space-y-2">
                      {testimonial.beforePoints.map((point, idx) => (
                        point && (
                          <div key={idx} className="flex items-start">
                            <div className="w-2 h-2 mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: styles.red }}></div>
                            <span className="text-sm" style={{ color: styles.text }}>{point}</span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>

                  {/* After */}
                  <div>
                    <h4 className="font-bold mb-3" style={{ color: styles.green }}>
                      {testimonial.afterTitle}
                    </h4>
                    <div className="space-y-2">
                      {testimonial.afterPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" style={{ color: styles.green }} />
                          <span className="text-sm" style={{ color: styles.text }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div 
                  className="border-l-4 pl-4 py-2 mb-2"
                  style={{ 
                    borderColor: styles.gold,
                    backgroundColor: '#FFFBEB'
                  }}
                >
                  <p className="text-lg italic font-semibold" style={{ color: styles.text }}>
                    {testimonial.quote}
                  </p>
                </div>
                <p className="text-xs font-semibold" style={{ color: styles.gold }}>
                  {testimonial.author}
                </p>
              </div>
            </div>
          </div>

          {/* Show More Button */}
          <div className="text-center mt-8">
            <button 
              className="text-white font-semibold hover:opacity-80 transition-opacity"
              style={{ color: styles.background }}
            >
              Show More Stories →
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div style={{ backgroundColor: styles.lightBg, padding: '64px 0' }}>
        <div style={{ marginLeft: '4%', marginRight: '4%' }}>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Package className="w-8 h-8 mr-3" style={{ color: styles.gold }} />
              <h2 className="text-4xl font-bold" style={{ color: styles.text }}>
                CHOOSE YOUR PACKAGE
              </h2>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="relative border-2 rounded-lg p-6 text-center"
                style={{
                  backgroundColor: styles.background,
                  borderColor: pkg.popular ? styles.gold : styles.silver,
                  borderWidth: pkg.popular ? '3px' : '2px'
                }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: styles.red }}
                  >
                    ⭐ POPULAR
                  </div>
                )}

                {/* Savings Badge */}
                {pkg.savings && (
                  <div 
                    className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: styles.gold, color: styles.text }}
                  >
                    {pkg.savings}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2" style={{ color: styles.text }}>
                  {pkg.name}
                </h3>
                <p className="text-sm mb-1" style={{ color: styles.text, opacity: 0.6 }}>
                  {pkg.duration}
                </p>
                <p className="text-xs mb-4" style={{ color: styles.text, opacity: 0.5 }}>
                  {pkg.capsules}
                </p>

                {/* Price */}
                <div className="mb-4">
                  {pkg.originalPrice && (
                    <p className="text-sm line-through mb-1" style={{ color: styles.text, opacity: 0.4 }}>
                      ₹{pkg.originalPrice}
                    </p>
                  )}
                  <p className="text-4xl font-bold" style={{ color: styles.red }}>
                    ₹{pkg.price}
                  </p>
                  {pkg.savings && (
                    <p className="text-xs mt-1 font-semibold" style={{ color: styles.green }}>
                      {pkg.savings}
                    </p>
                  )}
                </div>

                {/* Order Button */}
                <button
                  className="w-full py-3 font-bold rounded-lg transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: pkg.popular ? styles.red : styles.background,
                    color: pkg.popular ? styles.background : styles.text,
                    border: `2px solid ${pkg.popular ? styles.red : styles.text}`
                  }}
                >
                  ORDER
                </button>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center p-4 border rounded-lg"
                  style={{
                    backgroundColor: styles.background,
                    borderColor: styles.silver
                  }}
                >
                  <IconComponent className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: styles.primary }} />
                  <span className="text-xs font-semibold" style={{ color: styles.text }}>
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndPricing;