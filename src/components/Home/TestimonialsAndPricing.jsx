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
        "The peace of mind I've gained since starting ThreOmega™ - CV is invaluable. My energy levels have stabilized, and my medical team noted significant improvements in my CV markers.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Dr. Aruna V.',
      age: 48,
      location: 'Bangalore, KA',
      history: 'Nephrologist Review',
      outcome: 'Clinical Adherence',
      quote:
        'The ThreOmega - CV protocol aligns perfectly with the PISCES-HD findings. It provides the precise EPA/DHA ratio required for dialysis-specific cardiac protection.',
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
      {/* Voices of Recovery - Compact Version */}
      <div className="py-20 px-6 bg-[#0F0F0F] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-full h-full bg-[#8B0000] rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Compact Header */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
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

            {/* Right: Focused Testimonials */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 border border-white/10 rounded-[40px] p-8 overflow-hidden transition-all duration-500 hover:bg-white/10"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-black text-white">{t.name}</h4>
                          <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">
                            {t.history}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
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
      <div className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2
              className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[0.9]"
              style={{ fontFamily: 'serif' }}
            >
              Clinical <span className="text-[#8B0000]">Protocols</span>.
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
              Select the evidence-based regimen that aligns with your clinical objectives and
              cardiovascular health goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative group rounded-[60px] p-12 lg:p-16 transition-all duration-700 bg-white border-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] ${
                  pkg.popular
                    ? 'border-[#8B0000] scale-105 z-10'
                    : 'border-gray-50 hover:border-[#D4AF37]/30'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#8B0000] text-white px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl">
                    Physician's Choice
                  </div>
                )}

                <div className="mb-16">
                  <h3 className="text-3xl font-black text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                      {pkg.duration}
                    </span>
                    {pkg.savings && (
                      <span className="px-4 py-1.5 bg-[#8B0000]/5 text-[#8B0000] text-[10px] font-black rounded-lg uppercase tracking-widest border border-[#8B0000]/10">
                        {pkg.savings}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-16 flex items-baseline gap-2">
                  <span className="text-gray-400 text-3xl font-bold">₹</span>
                  <span className="text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-none">
                    {pkg.price}
                  </span>
                </div>

                <ul className="space-y-6 mb-16">
                  <li className="flex items-center gap-4 text-gray-500 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    {pkg.capsules}
                  </li>
                  <li className="flex items-center gap-4 text-gray-500 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    Clinical EPA:DHA Ratio
                  </li>
                  <li className="flex items-center gap-4 text-gray-500 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    GMP Certification
                  </li>
                </ul>

                <button
                  className={`w-full py-6 rounded-3xl font-black transition-all text-sm uppercase tracking-widest ${
                    pkg.popular
                      ? 'bg-[#8B0000] text-white hover:bg-black shadow-2xl hover:-translate-y-1'
                      : 'bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white shadow-xl hover:-translate-y-1'
                  }`}
                >
                  ACTIVATE PROTOCOL
                </button>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-12 pt-24 border-t border-gray-100">
            <div className="flex flex-col items-center gap-6 text-center group">
              <div className="w-16 h-16 rounded-[24px] bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all duration-500 group-hover:scale-110">
                <Truck className="w-8 h-8" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-900">
                Priority Logistics
              </span>
            </div>
            <div className="flex flex-col items-center gap-6 text-center group">
              <div className="w-16 h-16 rounded-[24px] bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#8B0000] group-hover:bg-[#8B0000]/5 transition-all duration-500 group-hover:scale-110">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-900">
                Secure Protocol
              </span>
            </div>
            <div className="flex flex-col items-center gap-6 text-center group">
              <div className="w-16 h-16 rounded-[24px] bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all duration-500 group-hover:scale-110">
                <Package className="w-8 h-8" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-900">
                Direct Procurement
              </span>
            </div>
            <div className="flex flex-col items-center gap-6 text-center group">
              <div className="w-16 h-16 rounded-[24px] bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#8B0000] group-hover:bg-[#8B0000]/5 transition-all duration-500 group-hover:scale-110">
                <Headphones className="w-8 h-8" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-900">
                Adherence Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsAndPricing
