import {
  CheckCircle2,
  Headphones,
  Package,
  ShieldCheck,
  TrendingDown,
  Truck,
  UserCheck,
} from 'lucide-react'

const TestimonialsAndPricing = () => {
  const testimonials = [
    {
      name: 'Ramesh K.',
      age: 54,
      location: 'Coimbatore, TN',
      history: '2 Years on Dialysis',
      outcome: '43% LDL Reduction',
      quote:
        "The peace of mind I've gained since starting ThreOmega™ is invaluable. My energy levels have stabilized, and my medical team noted significant improvements in my CV markers.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Dr. Aruna V.',
      age: 48,
      location: 'Bangalore, KA',
      history: 'Nephrologist Review',
      outcome: 'Clinical Adherence',
      quote:
        'The ThreOmega protocol aligns perfectly with the PISCES-HD findings. It provides the precise EPA/DHA ratio required for dialysis-specific cardiac protection.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71f153a827?w=400&q=80',
    },
  ]

  const packages = [
    {
      id: 'trial',
      name: 'Initiation Duo',
      duration: '15 Day Protocol',
      capsules: '60 Premium Capsules',
      price: '399',
      savings: null,
      popular: false,
      accent: '#D4AF37',
    },
    {
      id: 'monthly',
      name: 'Standard Care',
      duration: '30 Day Protocol',
      capsules: '120 Premium Capsules',
      price: '1,349',
      originalPrice: '1,599',
      savings: 'Save 15%',
      popular: true,
      accent: '#8B0000',
    },
    {
      id: 'value',
      name: 'Long-term Support',
      duration: '90 Day Protocol',
      capsules: '360 Premium Capsules',
      price: '2,399',
      originalPrice: '4,047',
      savings: 'Save 40%',
      popular: false,
      accent: '#D4AF37',
    },
  ]

  return (
    <section className="bg-white">
      {/* Voices of Recovery */}
      <div className="py-20 bg-[#0F0F0F] relative overflow-hidden" style={{ padding: '80px 5%' }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-full h-full bg-[#8B0000] rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Compact Header */}
            <div className="lg:col-span-5">
              <div
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 mb-6"
                style={{ borderRadius: '20px' }}
              >
                <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-white/70 font-black tracking-[0.2em] text-[10px] uppercase">
                  Clinical Outcomes
                </span>
              </div>
              <h2
                className="text-5xl md:text-6xl font-black text-white leading-tight mb-6"
                style={{ fontFamily: 'serif' }}
              >
                Voices of <br />
                <span className="text-[#D4AF37]">Recovery.</span>
              </h2>
              <p className="text-white/40 text-lg italic border-l-2 border-[#8B0000] pl-6 max-w-sm">
                "Real clinical benchmarks from patients following the ThreOmega protocol."
              </p>
            </div>

            {/* Right: Testimonials */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 border border-white/10 p-8 overflow-hidden transition-all duration-500 hover:bg-white/10"
                  style={{ borderRadius: '20px' }}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{ borderRadius: '20px' }}
                    />
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-black text-white">{t.name}</h4>
                          <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">
                            {t.history}
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/10"
                          style={{ borderRadius: '20px' }}
                        >
                          <TrendingDown className="w-4 h-4 text-[#8B0000]" />
                          <span className="text-white font-black text-sm">{t.outcome}</span>
                        </div>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed italic">"{t.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white" style={{ padding: '80px 5%' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'serif' }}
            >
              Clinical <span className="text-[#8B0000]">Protocols</span>.
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
              Select the evidence-based regimen that aligns with your clinical objectives and
              cardiovascular health goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative group bg-white border-2 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
                  pkg.popular ? 'border-[#8B0000]' : 'border-gray-100 hover:border-[#D4AF37]/40'
                }`}
                style={{ borderRadius: '20px', padding: '36px' }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B0000] text-white px-6 py-2 text-[10px] font-black tracking-widest uppercase shadow-lg"
                    style={{ borderRadius: '20px' }}
                  >
                    Physician's Choice
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-black text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                      {pkg.duration}
                    </span>
                    {pkg.savings && (
                      <span
                        className="px-3 py-1 bg-[#8B0000]/5 text-[#8B0000] text-[10px] font-black uppercase tracking-widest border border-[#8B0000]/10"
                        style={{ borderRadius: '20px' }}
                      >
                        {pkg.savings}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-gray-400 text-xl font-bold">₹</span>
                  <span className="text-6xl font-black text-gray-900 tracking-tighter leading-none">
                    {pkg.price}
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-gray-300 text-base font-medium line-through ml-1">
                      ₹{pkg.originalPrice}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {pkg.capsules}
                  </li>
                  <li className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Clinical EPA:DHA Ratio
                  </li>
                  <li className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    GMP Certification
                  </li>
                </ul>

                <button
                  className={`w-full py-4 font-black transition-all text-sm uppercase tracking-widest ${
                    pkg.popular
                      ? 'bg-[#8B0000] text-white hover:bg-black'
                      : 'bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                  style={{ borderRadius: '20px' }}
                >
                  ACTIVATE PROTOCOL
                </button>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-gray-100"
          >
            {[
              { icon: <Truck className="w-6 h-6" />, label: 'Priority Logistics', color: '#D4AF37' },
              { icon: <ShieldCheck className="w-6 h-6" />, label: 'Secure Protocol', color: '#8B0000' },
              { icon: <Package className="w-6 h-6" />, label: 'Direct Procurement', color: '#D4AF37' },
              { icon: <Headphones className="w-6 h-6" />, label: 'Adherence Support', color: '#8B0000' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 text-center group">
                <div
                  className="w-14 h-14 bg-gray-50 flex items-center justify-center text-gray-400 transition-all duration-500 group-hover:scale-110"
                  style={{
                    borderRadius: '20px',
                    ['--hover-color']: item.color,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = item.color
                    e.currentTarget.style.background = item.color + '12'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = ''
                    e.currentTarget.style.background = ''
                  }}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-800 leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsAndPricing