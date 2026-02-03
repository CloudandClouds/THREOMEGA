import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode';
import { ShieldCheck, Monitor, Smartphone, Clock, Award } from 'lucide-react';

const QRLanding = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const exerciseUrl = `${window.location.origin}/exercise/${sessionId}`;
    
    QRCode.toDataURL(exerciseUrl, { 
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    })
      .then(url => setQrCodeUrl(url))
      .catch(err => console.error(err));
  }, []);

  const handleDirectStart = () => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    navigate(`/exercise/${sessionId}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center p-6 text-white">
      {/* Premium Background Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8B0000] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Brand & Info */}
        <div className="flex flex-col space-y-8">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] font-semibold tracking-widest text-sm uppercase">Nephrology Innovation</span>
            </div>
            <h1 className="text-7xl font-bold gold-text-gradient mb-6" style={{fontFamily: 'serif'}}>
              PONOOGUN
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Bridging the gap between clinical evidence and daily practice in hemodialysis care.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-semibold text-white">3 Minute Exercise</h3>
                <p className="text-gray-500 text-sm">Quick, impactful evidence review</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[#EF4444] transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#EF4444]" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Evidence Based</h3>
                <p className="text-gray-500 text-sm">Focused on PISCES Trial (NEJM 2025)</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                <Award className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Appreciation Draw</h3>
                <p className="text-gray-500 text-sm">Complete to enter the prize draw</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: QR & Action */}
        <div className="premium-card rounded-3xl p-8 lg:p-12 flex flex-col items-center">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">PISCES-HD Evidence</h2>
            <p className="text-gray-400 text-sm">Scan to begin on your mobile device</p>
          </div>

          {/* QR Code Container */}
          <div className="relative group mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#8B0000] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-xl p-4 shadow-2xl">
              {qrCodeUrl ? (
                <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48 lg:w-64 lg:h-64" />
              ) : (
                <div className="w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center bg-gray-100 animate-pulse">
                  <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="flex items-center justify-center gap-4 text-gray-500 text-xs uppercase tracking-widest mb-2">
              <div className="h-[1px] flex-1 bg-gray-800"></div>
              <span>OR</span>
              <div className="h-[1px] flex-1 bg-gray-800"></div>
            </div>

            <button
              onClick={handleDirectStart}
              className="w-full bg-[#8B0000] hover:bg-[#A50000] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-red-900/20 flex items-center justify-center gap-3 group"
            >
              <Monitor className="w-5 h-5" />
              START ON THIS DEVICE
            </button>
            <p className="text-center text-gray-500 text-xs">
              Recommended for the best experience
            </p>
          </div>
        </div>
      </div>

      {/* Admin Access footer */}
      <button
        onClick={() => navigate('/login')}
        className="mt-12 text-gray-600 hover:text-[#D4AF37] text-sm uppercase tracking-widest transition-colors flex items-center gap-2"
      >
        <span className="w-4 h-[1px] bg-gray-800"></span>
        Admin Portal
        <span className="w-4 h-[1px] bg-gray-800"></span>
      </button>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QRLanding;
