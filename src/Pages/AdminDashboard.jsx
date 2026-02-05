import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, Users, Award, Download, Search, Trophy, CheckCircle } from 'lucide-react';
import { API_URL } from '../utils/url';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('registrations'); // 'registrations' or 'prizes'
  const [registrations, setRegistrations] = useState([]);
  const [topScorers, setTopScorers] = useState([]);
  const [winners, setWinners] = useState(null);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterQualification, setFilterQualification] = useState('all');
  const [selectedWinners, setSelectedWinners] = useState({
    first: null,
    second: null,
    third: null
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const [regsResponse, statsResponse, topScorersResponse, winnersResponse] = await Promise.all([
        axios.get(`${API_URL}/registrations`, config),
        axios.get(`${API_URL}/registrations/stats`, config),
        axios.get(`${API_URL}/winners/top-scorers`, config),
        axios.get(`${API_URL}/winners/published`)
      ]);

      setRegistrations(regsResponse.data);
      setStats(statsResponse.data);
      setTopScorers(topScorersResponse.data);
      
      if (winnersResponse.data.published) {
        setWinners(winnersResponse.data);
        setSelectedWinners({
          first: winnersResponse.data.firstPrize?._id,
          second: winnersResponse.data.secondPrize?._id,
          third: winnersResponse.data.thirdPrize?._id
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  const handlePublishWinners = async () => {
    if (!selectedWinners.first || !selectedWinners.second || !selectedWinners.third) {
      alert('Please select all three prize winners');
      return;
    }

    if (!window.confirm('Are you sure you want to publish these winners? This action will make the results public.')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.post(`${API_URL}/winners/publish`, {
        firstPrizeId: selectedWinners.first,
        secondPrizeId: selectedWinners.second,
        thirdPrizeId: selectedWinners.third
      }, config);

      alert('Winners published successfully!');
      fetchData();
    } catch (error) {
      console.error('Error publishing winners:', error);
      alert(error.response?.data?.message || 'Error publishing winners');
    }
  };

  const handleUnpublishWinners = async () => {
    if (!window.confirm('Are you sure you want to unpublish the winners? This will remove them from the public page.')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.post(`${API_URL}/winners/unpublish`, {}, config);

      alert('Winners unpublished successfully!');
      setWinners(null);
      setSelectedWinners({ first: null, second: null, third: null });
      fetchData();
    } catch (error) {
      console.error('Error unpublishing winners:', error);
      alert(error.response?.data?.message || 'Error unpublishing winners');
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Mobile', 'City', 'Qualification', 'Institution', 'Score', 'Prize Preference', 'Completed At'];
    const rows = filteredRegistrations.map(reg => [
      reg.name,
      reg.email,
      reg.mobile,
      reg.city,
      reg.qualification,
      reg.institution || '',
      `${reg.score || 0}/8`,
      reg.prizePreference || '',
      new Date(reg.completedAt).toLocaleString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `registrations_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch =
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterQualification === 'all' || reg.qualification === filterQualification;

    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900" style={{fontFamily: 'Georgia, serif'}}>
              PONOOGUN Admin
            </h1>
            <p className="text-sm text-slate-600">Exercise Registration Dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('registrations')}
              className={`px-4 py-3 font-semibold transition-colors ${
                activeTab === 'registrations'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4 inline mr-2" />
              Registrations
            </button>
            <button
              onClick={() => setActiveTab('prizes')}
              className={`px-4 py-3 font-semibold transition-colors ${
                activeTab === 'prizes'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-4 h-4 inline mr-2" />
              Prize Announcement
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'registrations' ? (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6 ">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">Total Registrations</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{stats.total || 0}</p>
                  </div>
                  <Users className="w-12 h-12 text-blue-500 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 ">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">Today</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{stats.today || 0}</p>
                  </div>
                  <Award className="w-12 h-12 text-green-500 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 ">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">DM Nephro</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{stats.dmNephro || 0}</p>
                  </div>
                  <Award className="w-12 h-12 text-purple-500 opacity-20" />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 ">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 font-semibold">MD Nephro</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{stats.mdNephro || 0}</p>
                  </div>
                  <Award className="w-12 h-12 text-orange-500 opacity-20" />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search by name, email, or city..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={filterQualification}
                    onChange={(e) => setFilterQualification(e.target.value)}
                    className="px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    <option value="all">All Qualifications</option>
                    <option value="md-nephro">MD/DNB Nephrology</option>
                    <option value="dm-nephro">DM Nephrology</option>
                    <option value="md-medicine">MD Medicine</option>
                    <option value="other">Other</option>
                  </select>
                  <button
                    onClick={exportToCSV}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Export CSV
                  </button>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Showing {filteredRegistrations.length} of {registrations.length} registrations
              </p>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Mobile</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">City</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Qualification</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Score</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredRegistrations.map((reg, index) => (
                      <tr key={reg._id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-semibold text-slate-900">{reg.name}</div>
                          {reg.institution && <div className="text-xs text-slate-600">{reg.institution}</div>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{reg.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{reg.mobile}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{reg.city}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-md ${
                            reg.qualification === 'dm-nephro' ? 'bg-purple-100 text-gray-800' :
                            reg.qualification === 'md-nephro' ? 'bg-blue-100 text-gray-800' :
                            reg.qualification === 'md-medicine' ? 'bg-green-100 text-gray-800' :
                            'bg-slate-100 text-slate-800'
                          }`}>
                            {reg.qualification === 'dm-nephro' ? 'DM Nephro' :
                             reg.qualification === 'md-nephro' ? 'MD Nephro' :
                             reg.qualification === 'md-medicine' ? 'MD Medicine' : 'Other'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-lg font-bold text-blue-600">{reg.score || 0}/8</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                          {new Date(reg.completedAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Prize Announcement Tab */}
            <div className="space-y-6">
              {winners && winners.published ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-green-900">Winners Published</h3>
                  </div>
                  <p className="text-green-800 mb-4">The prize winners have been published and are now visible on the home page.</p>
                  <p className="text-sm text-green-700">Published on: {new Date(winners.publishedAt).toLocaleString()}</p>
                </div>
              ) : (
                <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Select Prize Winners</h3>
                  <p className="text-blue-800">Choose winners from the top 10 scorers below and publish the results.</p>
                </div>
              )}

              {winners && winners.published && (
                <button
                  onClick={handleUnpublishWinners}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  UNPUBLISH WINNERS
                </button>
              )}

              {/* Top 10 Scorers */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Top 10 Scorers</h3>
                <div className="space-y-4">
                  {topScorers.map((scorer, idx) => (
                    <div key={scorer._id} className="border-2 border-slate-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold text-slate-400">#{idx + 1}</span>
                            <div>
                              <p className="font-bold text-slate-900">{scorer.name}</p>
                              <p className="text-sm text-slate-600">{scorer.city} • {scorer.qualification}</p>
                              {scorer.institution && <p className="text-xs text-slate-500">{scorer.institution}</p>}
                            </div>
                          </div>
                        </div>
                        <div className="text-right mr-6">
                          <p className="text-3xl font-bold text-blue-600">{scorer.score}/8</p>
                          <p className="text-xs text-slate-500">{new Date(scorer.completedAt).toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedWinners({...selectedWinners, first: scorer._id})}
                            disabled={winners?.published}
                            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                              selectedWinners.first === scorer._id
                                ? 'bg-yellow-500 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-yellow-100'
                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                          >
                            1st
                          </button>
                          <button
                            onClick={() => setSelectedWinners({...selectedWinners, second: scorer._id})}
                            disabled={winners?.published}
                            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                              selectedWinners.second === scorer._id
                                ? 'bg-gray-400 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-gray-200'
                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                          >
                            2nd
                          </button>
                          <button
                            onClick={() => setSelectedWinners({...selectedWinners, third: scorer._id})}
                            disabled={winners?.published}
                            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                              selectedWinners.third === scorer._id
                                ? 'bg-orange-500 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-orange-100'
                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                          >
                            3rd
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {!winners?.published && (
                  <button
                    onClick={handlePublishWinners}
                    disabled={!selectedWinners.first || !selectedWinners.second || !selectedWinners.third}
                    className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Trophy className="w-5 h-5" />
                    PUBLISH WINNERS
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
