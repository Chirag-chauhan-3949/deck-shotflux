import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const NewSlide8Financials = () => {
  const projectionData = [
    { month: 'M1', users: 50, revenue: 0, spend: 7.0 },
    { month: 'M2', users: 75, revenue: 0, spend: 9.1 },
    { month: 'M3', users: 165, revenue: 1.5, spend: 13.2 },
    { month: 'M4', users: 250, revenue: 4.1, spend: 11.7 },
    { month: 'M5', users: 375, revenue: 7.5, spend: 13.9 },
    { month: 'M6', users: 500, revenue: 11.25, spend: 14.1 },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">6-Month Financial Projections</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-3 sm:p-4 rounded-xl border border-green-500/30 text-center">
          <Users className="text-green-400 w-6 h-6 mx-auto mb-1" />
          <p className="text-2xl sm:text-3xl font-bold text-green-400">500</p>
          <p className="text-xs text-gray-400">Paying Users M6</p>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-3 sm:p-4 rounded-xl border border-blue-500/30 text-center">
          <TrendingUp className="text-blue-400 w-6 h-6 mx-auto mb-1" />
          <p className="text-2xl sm:text-3xl font-bold text-blue-400">₹11.25L</p>
          <p className="text-xs text-gray-400">MRR by M6</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-3 sm:p-4 rounded-xl border border-purple-500/30 text-center">
          <DollarSign className="text-purple-400 w-6 h-6 mx-auto mb-1" />
          <p className="text-2xl sm:text-3xl font-bold text-purple-400">₹24.4L</p>
          <p className="text-xs text-gray-400">Total Revenue</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-3 sm:p-4 rounded-xl border border-yellow-500/30 text-center">
          <DollarSign className="text-yellow-400 w-6 h-6 mx-auto mb-1" />
          <p className="text-2xl sm:text-3xl font-bold text-yellow-400">₹69L</p>
          <p className="text-xs text-gray-400">Total Spend</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-3">User Growth</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }} />
              <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={3} name="Users" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-3">Revenue vs Spend (₹ Lakhs)</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }} />
              <Bar dataKey="spend" fill="#EF4444" name="Spend" />
              <Bar dataKey="revenue" fill="#10B981" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Spend Breakdown */}
      <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-3">Use of Funds (₹69L over 6 months)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="text-center p-2 bg-gray-700/30 rounded-lg">
            <p className="text-lg font-bold text-green-400">₹19.5L</p>
            <p className="text-xs text-gray-400">Paid Ads</p>
            <p className="text-xs text-gray-500">28%</p>
          </div>
          <div className="text-center p-2 bg-gray-700/30 rounded-lg">
            <p className="text-lg font-bold text-blue-400">₹12.5L</p>
            <p className="text-xs text-gray-400">YT Collabs</p>
            <p className="text-xs text-gray-500">18%</p>
          </div>
          <div className="text-center p-2 bg-gray-700/30 rounded-lg">
            <p className="text-lg font-bold text-purple-400">₹12L</p>
            <p className="text-xs text-gray-400">Salaries</p>
            <p className="text-xs text-gray-500">17%</p>
          </div>
          <div className="text-center p-2 bg-gray-700/30 rounded-lg">
            <p className="text-lg font-bold text-yellow-400">₹9L</p>
            <p className="text-xs text-gray-400">Agency</p>
            <p className="text-xs text-gray-500">13%</p>
          </div>
          <div className="text-center p-2 bg-gray-700/30 rounded-lg">
            <p className="text-lg font-bold text-cyan-400">₹4.15L</p>
            <p className="text-xs text-gray-400">CRO</p>
            <p className="text-xs text-gray-500">6%</p>
          </div>
          <div className="text-center p-2 bg-gray-700/30 rounded-lg">
            <p className="text-lg font-bold text-red-400">₹11.85L</p>
            <p className="text-xs text-gray-400">Infra + Buffer</p>
            <p className="text-xs text-gray-500">18%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlide8Financials;
