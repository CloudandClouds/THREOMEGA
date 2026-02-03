import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode';

const QRLanding = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Generate unique session ID
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const exerciseUrl = `${window.location.origin}/exercise/${sessionId}`;
    
    // Generate QR code
    QRCode.toDataURL(exerciseUrl, { 
      width: 300,
      margin: 2,
      color: {
        dark: '#1e3a8a',
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden flex items-center justify-center p-6">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-2xl w-full">
        {/* Logo & Header */}
        <div className="mb-12 text-center">
          <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 mb-3" style={{fontFamily: 'Georgia, serif'}}>
            PONOOGUN
          </div>
          <p className="text-slate-300 text-sm tracking-widest uppercase">Advancing Nephrology Care Through Innovation</p>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 text-center" style={{fontFamily: 'Georgia, serif'}}>
            PISCES-HD Evidence Exercise
          </h1>
          <p className="text-slate-300 text-center mb-8">
            Scan the QR code below to begin the exercise on any device
          </p>

          {/* QR Code */}
          <div className="bg-white rounded-2xl p-8 mb-8 flex flex-col items-center">
            {qrCodeUrl ? (
              <>
                <img src={qrCodeUrl} alt="QR Code" className="mb-4" />
                <p className="text-slate-600 text-sm text-center">
                  Scan with your mobile camera or QR code app
                </p>
              </>
            ) : (
              <div className="w-64 h-64 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>

          {/* Direct Access Button */}
          <button
            onClick={handleDirectStart}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            START EXERCISE DIRECTLY
          </button>

          <p className="text-slate-300 text-xs text-center mt-6">
            ⏱️ Takes approximately 3 minutes • 🎁 Enter appreciation draw upon completion
          </p>
        </div>

        {/* Admin Access */}
        <div className="text-center">
          <button
            onClick={() => navigate('/login')}
            className="text-slate-400 hover:text-slate-200 text-sm underline transition-colors"
          >
            Admin Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRLanding;