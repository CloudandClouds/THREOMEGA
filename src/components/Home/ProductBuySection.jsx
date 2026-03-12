import React, { useState } from 'react';
import { ShoppingCart, Star, Shield, CheckCircle2, Zap, Tag } from 'lucide-react';
import productBottle from '../../assets/ThreOmeganobg.png';

const ProductBuySection = () => {
  const [selectedPack, setSelectedPack] = useState('trial');

  const packs = [
    { id: 'trial', label: '15 Days', capsules: '60 Caps', price: 168, mrp: 299 },
    { id: 'monthly', label: '30 Days', capsules: '120 Caps', price: 299, mrp: 599 },
    { id: 'value', label: '90 Days', capsules: '360 Caps', price: 599, mrp: 1099 },
  ];

  const activePack = packs.find((p) => p.id === selectedPack);
  const savings = activePack ? activePack.mrp - activePack.price : 0;
  const savingsPct = activePack ? Math.round((savings / activePack.mrp) * 100) : 0;

  const keyInfo = [
    { label: 'EPA per Capsule', value: '400 mg' },
    { label: 'DHA per Capsule', value: '200 mg' },
    { label: 'Dosage', value: '2 Caps BD' },
    { label: 'Clinical Trial', value: 'PISCES-HD' },
    { label: 'Publication', value: 'NEJM 2025' },
    { label: 'Grade', value: 'Pharmaceutical' },
  ];

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #fff 0%, #faf9f6 60%, #fff8ee 100%)',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '15px',
        paddingBottom: '15px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(139,0,0,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Inner container — no max-width cap, fills the padded space */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ─────────────────────────────────────────
            LEFT  60% — Product Information
        ───────────────────────────────────────── */}
        <div style={{ flex: '0 0 calc(60% - 24px)', minWidth: '280px' }}>
          {/* Brand badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(139,0,0,0.06)',
              border: '1px solid rgba(139,0,0,0.12)',
              marginBottom: '24px',
            }}
          >
            <Shield size={13} color="#8B0000" />
            <span
              style={{
                fontSize: '10px',
                fontWeight: 900,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#8B0000',
              }}
            >
              NEJM Published · Clinical Grade
            </span>
          </div>

          {/* Product name */}
          <h2
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '10px',
              color: '#1a1a1a',
            }}
          >
            <span style={{ color: '#C4973C' }}>ThreOmega</span>
            <span style={{ color: '#DC2626' }}>CV</span>
            <sup
              style={{
                fontSize: '0.45em',
                color: '#C4973C',
                fontWeight: 900,
                verticalAlign: 'super',
              }}
            >
              ™
            </sup>{' '}
            <span style={{ color: '#3e26dc' }}>3ω</span>
          </h2>

          <p
            style={{
              fontSize: '14px',
              color: '#6b7280',
              fontStyle: 'italic',
              marginBottom: '32px',
              maxWidth: '520px',
              lineHeight: 1.6,
            }}
          >
            The definitive Omega-3 formulation engineered specifically for cardiovascular protection
            in hemodialysis patients — backed by landmark PISCES-HD clinical evidence.
          </p>

          {/* Key info grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '36px',
            }}
          >
            {keyInfo.map((item) => (
              <div
                key={item.label}
                style={{
                  background: '#fff',
                  border: '1.5px solid #f0ebe0',
                  borderRadius: '14px',
                  padding: '16px 14px',
                  transition: 'border-color 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#D4AF37')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#f0ebe0')}
              >
                <p
                  style={{
                    fontSize: '9px',
                    fontWeight: 800,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#9ca3af',
                    marginBottom: '4px',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 900,
                    color: '#1a1a1a',
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Trust row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            {[
              { icon: <CheckCircle2 size={15} color="#8B0000" />, text: '100% Pharmaceutical Grade' },
              { icon: <Star size={15} color="#D4AF37" />, text: 'Clinically Validated' },
              { icon: <Zap size={15} color="#3e26dc" />, text: '43% CV Risk Reduction' },
            ].map((t) => (
              <div
                key={t.text}
                style={{ display: 'flex', alignItems: 'center', gap: '7px' }}
              >
                {t.icon}
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#374151' }}>
                  {t.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────
            RIGHT  40% — Image + Buy Card
        ───────────────────────────────────────── */}
        <div
          style={{
            flex: '0 0 calc(40% - 24px)',
            minWidth: '260px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Product image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            {/* Glow behind image */}
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '50%',
                filter: 'blur(24px)',
              }}
            />
            <img
              src={productBottle}
              alt="ThreOmega CV™ 3ω Product Bottle"
              style={{
                position: 'relative',
                width: '1200px',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '500px',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04) translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) translateY(0)')}
            />
          </div>

          {/* Buy card */}
          <div
            style={{
              width: '100%',
              maxWidth: '360px',
              background: '#fff',
              border: '2px solid #f0ebe0',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
            }}
          >
           
             <h6
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '18px',
              fontWeight: 200,
              lineHeight: 1.1,
              marginBottom: '10px',
              color: '#1a1a1a',
            }}
          >
            <span style={{ color: '#C4973C' }}>ThreOmega</span>
            <span style={{ color: '#DC2626' }}>CV</span>
          </h6>
         
            {/* Price area */}
            <div
              style={{
                background: 'linear-gradient(135deg, #faf9f6, #fff8ee)',
                borderRadius: '16px',
                padding: '16px 18px',
                marginBottom: '16px',
                border: '1px solid #f0ebe0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: 'clamp(26px, 4vw, 32px)',
                    fontWeight: 900,
                    color: '#1a1a1a',
                    letterSpacing: '-0.5px',
                  }}
                >
                  ₹{activePack?.price.toLocaleString('en-IN')}
                </span>
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#9ca3af',
                    textDecoration: 'line-through',
                  }}
                >
                  MRP ₹{activePack?.mrp.toLocaleString('en-IN')}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                <Tag size={12} color="#8B0000" />
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#8B0000',
                    letterSpacing: '0.05em',
                  }}
                >
                  Save ₹{savings.toLocaleString('en-IN')} ({savingsPct}% off)
                </span>
              </div>
            </div>

            {/* Short description */}
            <p
              style={{
                fontSize: '12px',
                color: '#6b7280',
                lineHeight: 1.6,
                marginBottom: '18px',
              }}
            >
              EPA 400mg + DHA 200mg per capsule · Pharmaceutical grade · {activePack?.capsules} ·
              Clinically validated for dialysis patients
            </p>

            {/* Buy Now CTA — linked to kidneyneeds.com */}
            <a
              href="https://www.kidneyneeds.com/medicine-details/threomegacv-06-f821a"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #8B0000 0%, #6b0000 100%)',
                color: '#fff',
                fontWeight: 900,
                fontSize: '14px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 6px 24px rgba(139,0,0,0.28)',
                transition: 'all 0.25s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #a30000 0%, #8B0000 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 32px rgba(139,0,0,0.38)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #8B0000 0%, #6b0000 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(139,0,0,0.28)';
              }}
            >
              <ShoppingCart size={18} />
              Buy Now
            </a>

            {/* Trust micro-text */}
            <p
              style={{
                marginTop: '12px',
                textAlign: 'center',
                fontSize: '10px',
                color: '#9ca3af',
                fontWeight: 600,
                letterSpacing: '0.08em',
              }}
            >
              🔒 Secure Payment · Buy at kidneyNeeds.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBuySection;