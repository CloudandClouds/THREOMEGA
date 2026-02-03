import React, { useState, useEffect } from 'react';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '../../utils/url';

const Scoreboard = () => {
  const [winners, setWinners] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWinners();
  }, []);

  const fetchWinners = async () => {
    try {
      const response = await axios.get(`${API_URL}/winners/published`);
      if (response.data.published) {
        setWinners(response.data);
      }
    } catch (error) {
      console.error('Error fetching winners:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !winners || !winners.published) {
    return null; // Don't show anything if not published
  }

  const prizeData = [
    {
      rank: '1st',
      icon: Trophy,
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
      winner: winners.firstPrize,
      prize: '₹3.5 Lakhs'
    },
    {
      rank: '2nd',
      icon: Award,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-400',
      winner: winners.secondPrize,
      prize: '₹1 Lakh'
    },
    {
      rank: '3rd',
      icon: Medal,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-500',
      winner: winners.thirdPrize,
      prize: '₹50,000'
    }
  ];

  return (
    <div className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 rounded-full px-6 py-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold uppercase tracking-wider text-sm">
              Prize Winners Announced
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
            PISCES-HD Evidence Exercise
          </h2>
          <p className="text-gray-600 text-lg">
            Congratulations to our top performers!
          </p>
        </div>

        {/* Winners Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizeData.map((prize, idx) => {
            const Icon = prize.icon;
            return (
              <div
                key={idx}
                className={`${prize.bgColor} border-2 ${prize.borderColor} rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${prize.color} mb-4 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {prize.rank} Prize
                  </h3>
                  <p className="text-lg font-semibold text-gray-700">
                    {prize.prize}
                  </p>
                </div>

                <div className="space-y-3 bg-white rounded-xl p-6 border border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Winner</p>
                    <p className="text-lg font-bold text-gray-900">
                      {prize.winner?.name || 'TBA'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">City</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {prize.winner?.city || '—'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Qualification</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {prize.winner?.qualification === 'dm-nephro' ? 'DM Nephrology' :
                       prize.winner?.qualification === 'md-nephro' ? 'MD/DNB Nephrology' :
                       prize.winner?.qualification === 'md-medicine' ? 'MD Medicine' :
                       prize.winner?.qualification || '—'}
                    </p>
                  </div>
                  {prize.winner?.institution && (
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Institution</p>
                      <p className="text-sm font-semibold text-gray-700">
                        {prize.winner.institution}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            Winners will be contacted directly via email and phone for prize distribution
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
