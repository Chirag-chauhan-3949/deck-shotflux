import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Users, DollarSign, TrendingUp } from 'lucide-react';

const Slide9AffiliateModel = () => {
  const growthData = [
    { month: 'M1', paidUsers: 50, affiliateUsers: 0, total: 50 },
    { month: 'M2', paidUsers: 75, affiliateUsers: 0, total: 75 },
    { month: 'M3', paidUsers: 150, affiliateUsers: 15, total: 165 },
    { month: 'M4', paidUsers: 220, affiliateUsers: 30, total: 250 },
    { month: 'M5', paidUsers: 320, affiliateUsers: 55, total: 375 },
    { month: 'M6', paidUsers: 425, affiliateUsers: 75, total: 500 }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Affiliate Growth Model</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Paid vs Affiliate Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value, name) => {
                  if (name === 'paidUsers') return [value, 'Paid Users'];
                  if (name === 'affiliateUsers') return [value, 'Affiliate Users'];
                  if (name === 'total') return [value, 'Total Users'];
                  return [value, name];
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="paidUsers"
                stackId="1"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.6}
                name="Paid Users"
              />
              <Area
                type="monotone"
                dataKey="affiliateUsers"
                stackId="1"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.6}
                name="Affiliate Users"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30 hover:border-green-500/60 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="text-green-400 w-8 h-8" />
              <h3 className="text-xl font-bold text-white">Commission Structure</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Commission Rate</span>
                <span className="text-green-400 font-bold text-lg">20%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Duration</span>
                <span className="text-green-400 font-bold text-lg">12 Months</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Per User (Monthly)</span>
                <span className="text-green-400 font-bold text-lg">₹500</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-blue-400 w-8 h-8" />
              <h3 className="text-xl font-bold text-white">Affiliate Impact</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Active Affiliates</span>
                <span className="text-blue-400 font-bold text-lg">5</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Users per Affiliate</span>
                <span className="text-blue-400 font-bold text-lg">3-5</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Total by M6</span>
                <span className="text-blue-400 font-bold text-lg">75 Users</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="text-purple-400 w-6 h-6" />
              <h3 className="text-lg font-bold text-white">Growth Contribution</h3>
            </div>
            <p className="text-3xl font-bold text-purple-400">15%</p>
            <p className="text-sm text-gray-400 mt-1">Of total user base from affiliates by M6</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all" style={{ animationDelay: '0ms', animation: 'slideUp 0.5s ease-out forwards' }}>
          <h4 className="text-sm text-gray-400 mb-2">Affiliate Revenue Share (Monthly)</h4>
          <p className="text-2xl font-bold text-green-400">₹37,500</p>
          <p className="text-xs text-gray-500 mt-1">At 75 users × ₹500/user</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all" style={{ animationDelay: '100ms', animation: 'slideUp 0.5s ease-out forwards' }}>
          <h4 className="text-sm text-gray-400 mb-2">Cost per Affiliate User</h4>
          <p className="text-2xl font-bold text-blue-400">₹6,000</p>
          <p className="text-xs text-gray-500 mt-1">12 months × ₹500 commission</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all" style={{ animationDelay: '200ms', animation: 'slideUp 0.5s ease-out forwards' }}>
          <h4 className="text-sm text-gray-400 mb-2">ROI vs Paid Ads</h4>
          <p className="text-2xl font-bold text-purple-400">Comparable</p>
          <p className="text-xs text-gray-500 mt-1">Similar to CAC of ₹2,800</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Slide9AffiliateModel;
