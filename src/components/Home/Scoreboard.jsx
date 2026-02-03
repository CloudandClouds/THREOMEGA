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
    return null;
  }

  const prizeData = [
    {
      rank: '1st',
      icon: Trophy,
      bgColor: 'bg-yellow-50',
      iconBg: 'bg-yellow-500',
      borderColor: 'border-yellow-400',
      winner: winners.firstPrize,
      prize: '₹3.5 Lakhs'
    },
    {
      rank: '2nd',
      icon: Award,
      bgColor: 'bg-slate-50',
      iconBg: 'bg-slate-400',
      borderColor: 'border-slate-300',
      winner: winners.secondPrize,
      prize: '₹1 Lakh'
    },
    {
      rank: '3rd',
      icon: Medal,
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-600',
      borderColor: 'border-orange-400',
      winner: winners.thirdPrize,
      prize: '₹50,000'
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-100 border-2 border-yellow-400 rounded-full px-6 py-2 mb-3">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-bold uppercase tracking-wider text-xs">
              Prize Winners Announced
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
            PISCES-HD Evidence Exercise
          </h1>
          
          <p className="text-base text-gray-600">
            Congratulations to our top performers!
          </p>
        </div>

        {/* Winners Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {prizeData.map((prize, idx) => {
            const Icon = prize.icon;
            return (
              <div
                key={idx}
                className={`${prize.bgColor} border-2 ${prize.borderColor} rounded-xl p-5`}
              >
                {/* Icon and Prize Info */}
                <div className="text-center mb-5">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${prize.iconBg} mb-3`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {prize.rank} Prize
                  </h3>
                  <p className="text-base font-semibold text-gray-700">
                    {prize.prize}
                  </p>
                </div>

                {/* Winner Details - 2 Column Layout */}
                <div className="bg-white rounded-lg p-4 border border-gray-200 space-y-3">
                  {/* Row 1: Winner (Left) | City (Right) */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Winner
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {prize.winner?.name || 'TBA'}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        City
                      </p>
                      <p className="text-sm font-semibold text-gray-700">
                        {prize.winner?.city || '—'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Row 2: Qualification (Left) | Institution (Right) */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Qualification
                      </p>
                      <p className="text-sm font-semibold text-gray-700">
                        {prize.winner?.qualification === 'dm-nephro' ? 'DM Nephrology' :
                         prize.winner?.qualification === 'md-nephro' ? 'MD/DNB Nephrology' :
                         prize.winner?.qualification === 'md-medicine' ? 'MD Medicine' :
                         prize.winner?.qualification || '—'}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                        Institution
                      </p>
                      <p className="text-sm font-semibold text-gray-700">
                        {prize.winner?.institution || '—'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg px-5 py-2">
            <p className="text-sm text-gray-700">
              Winners will be contacted directly via email and phone for prize distribution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;