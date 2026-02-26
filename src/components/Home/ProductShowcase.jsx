import React from 'react';
import { Pill, Coffee, Utensils, CheckCircle2, ShoppingCart, Info, Award } from 'lucide-react';

const ProductShowcase = () => {
    return (
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#8B0000] bg-clip-text text-transparent mb-8"
              style={{ fontFamily: 'serif' }}
            >
              ThreOmega -CV
              <span className="text-2xl align-top text-sm ml-1 text-gray-400">™</span>{' '}
              <span className="text-gray-900">3ω </span>
            </h2>
            <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed italic">
              The definitive Omega-3 solution specifically engineered for the unique metabolic
              requirements of hemodialysis patients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Product Visual */}
            <div className="relative group">
              <div className="absolute -inset-10 bg-gradient-to-tr from-[#D4AF37]/10 to-[#8B0000]/10 rounded-full blur-[80px] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-[#FAF9F6] border-2 border-gray-100 rounded-[20px] p-12 shadow-2xl overflow-hidden group">
                {/* Floating Badges */}
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md border border-gray-100 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">
                    Clinical Formulation
                  </span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
                  alt="ThreOmega - CV Supplement Bottle"
                  className="w-full h-auto rounded-3xl mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />

                <div className="mt-8 flex justify-center">
                  <button className="px-10 py-5 bg-gray-900 hover:bg-black text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-2xl flex items-center gap-3">
                    <ShoppingCart className="w-5 h-5" />
                    ACQUIRE NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Technical Specifications */}
            <div className="space-y-8">
              {/* Precision Content */}
              <div className="bg-white border-2 border-gray-100 rounded-[20px] p-10 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl shadow-gray-100/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B0000]/5 flex items-center justify-center text-[#8B0000]">
                    <Pill className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Precision Content</h3>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                      EPA CONTENT
                    </p>
                    <p className="text-3xl font-black text-[#D4AF37]">400mg</p>
                    <p className="text-xs text-gray-500">Per individual capsule</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                      DHA CONTENT
                    </p>
                    <p className="text-3xl font-black text-[#8B0000]">200mg</p>
                    <p className="text-xs text-gray-500">Per individual capsule</p>
                  </div>
                </div>
              </div>

              {/* Evidence-Based Regimen */}
              <div className="bg-[#1a1a1a] rounded-[20px] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Info className="w-32 h-32" />
                </div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#D4AF37]">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Evidence Regimen</h3>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37] flex items-center justify-center text-black shadow-lg">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold">2 Capsules BD</p>
                      <p className="text-xs text-white/50">Morning with breakfast</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#8B0000] flex items-center justify-center text-white shadow-lg">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold">2 Capsules BD</p>
                      <p className="text-xs text-white/50">Evening with dinner</p>
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] flex items-center gap-2">
                  <CheckCircle2 className="w-3 h-3" /> Total daily dosage: 0.6g EPA / 0.8g DHA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
};

export default ProductShowcase;
