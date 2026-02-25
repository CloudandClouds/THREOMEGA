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
      
    </section>
  )
}

export default TestimonialsAndPricing
