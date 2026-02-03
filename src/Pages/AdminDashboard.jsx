import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, Users, Award, Download, Search, Filter } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterQualification, setFilterQualification] = useState('all');
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

      const [regsResponse, statsResponse] = await Promise.all([
        axios.get(`${API_URL}/registrations`, config),
        axios.get(`${API_URL}/registrations/stats`, config)
      ]);

      setRegistrations(regsResponse.data);
      setStats(statsResponse.data);
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

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Mobile', 'City', 'Qualification', 'Institution', 'Prize Preference', 'Completed At'];
    const rows = filteredRegistrations.map(reg => [
      reg.name,
      reg.email,
      reg.mobile,
      reg.city,
      reg.qualification,
      reg.institution || '',
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
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 font-semibold">Total Registrations</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{stats.total || 0}</p>
              </div>
              <Users className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 font-semibold">Today</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{stats.today || 0}</p>
              </div>
              <Award className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 font-semibold">DM Nephro</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{stats.dmNephro || 0}</p>
              </div>
              <Award className="w-12 h-12 text-purple-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-orange-500">
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
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Prize Pref</th>
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
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        reg.qualification === 'dm-nephro' ? 'bg-purple-100 text-purple-800' :
                        reg.qualification === 'md-nephro' ? 'bg-blue-100 text-blue-800' :
                        reg.qualification === 'md-medicine' ? 'bg-green-100 text-green-800' :
                        'bg-slate-100 text-slate-800'
                      }`}>
                        {reg.qualification === 'dm-nephro' ? 'DM Nephro' :
                         reg.qualification === 'md-nephro' ? 'MD Nephro' :
                         reg.qualification === 'md-medicine' ? 'MD Medicine' : 'Other'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">
                      {reg.prizePreference || '—'}
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
      </div>
    </div>
  );
};

export default AdminDashboard;