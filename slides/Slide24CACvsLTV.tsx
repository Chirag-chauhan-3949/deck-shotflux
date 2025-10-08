import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, DollarSign, Award } from 'lucide-react';

const Slide24CACvsLTV = () => {
  const data = [
    { metric: 'CAC', value: 2.8, label: '₹2,800', color: '#EF4444' },
    { metric: 'LTV', value: 15.0, label: '₹15,000', color: '#10B981' }
  ];

  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 flex-shrink-0">CAC vs LTV Analysis</h2>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Customer Acquisition Cost vs Lifetime Value</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="metric" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" label={{ value: '₹ (in thousands)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value, name) => [value.toFixed(1) + 'k', name]}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">LTV is 5.3x higher than CAC</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-red-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-red-500/50">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="text-red-400 w-10 h-10" />
              <div>
                <h3 className="text-lg font-bold text-white">Customer Acquisition Cost</h3>
                <p className="text-xs text-gray-400">Average cost to acquire one paying user</p>
              </div>
            </div>
            <p className="text-4xl sm:text-5xl font-bold text-red-400 mb-3">₹2,800</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Paid Ads</span>
                <span className="text-red-300">₹1,800</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">YouTube Collabs</span>
                <span className="text-red-300">₹600</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Marketing Agency</span>
                <span className="text-red-300">₹300</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">CRO & Tools</span>
                <span className="text-red-300">₹100</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-green-500/50">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="text-green-400 w-10 h-10" />
              <div>
                <h3 className="text-lg font-bold text-white">Lifetime Value</h3>
                <p className="text-xs text-gray-400">Average revenue per customer over lifetime</p>
              </div>
            </div>
            <p className="text-4xl sm:text-5xl font-bold text-green-400 mb-3">₹15,000</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">ARPU (Monthly)</span>
                <span className="text-green-300">₹2,500</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Avg. Lifetime</span>
                <span className="text-green-300">6 months</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
                <span className="text-gray-300">Gross Margin</span>
                <span className="text-green-300">78%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-green-900/30 rounded border border-green-500/50">
                <span className="text-white font-semibold">Net LTV</span>
                <span className="text-green-400 font-bold">₹11,700</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div
          className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all"
          style={{ animationDelay: '0ms', animation: 'slideUp 0.5s ease-out forwards', opacity: 0 }}
        >
          <Award className="text-purple-400 w-8 h-8 mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">LTV:CAC Ratio</h3>
          <p className="text-4xl font-bold text-purple-400 mb-2">5.3:1</p>
          <p className="text-xs text-gray-400">Healthy SaaS benchmark (target: 3:1)</p>
        </div>

        <div
          className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all"
          style={{ animationDelay: '100ms', animation: 'slideUp 0.5s ease-out forwards', opacity: 0 }}
        >
          <TrendingUp className="text-blue-400 w-8 h-8 mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">Payback Period</h3>
          <p className="text-4xl font-bold text-blue-400 mb-2">1.1 Months</p>
          <p className="text-xs text-gray-400">Time to recover CAC (target: &lt;12 months)</p>
        </div>

        <div
          className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30 hover:border-green-500/60 transition-all"
          style={{ animationDelay: '200ms', animation: 'slideUp 0.5s ease-out forwards', opacity: 0 }}
        >
          <DollarSign className="text-green-400 w-8 h-8 mb-3" />
          <h3 className="text-lg font-bold text-white mb-2">Unit Economics</h3>
          <p className="text-4xl font-bold text-green-400 mb-2">Strong</p>
          <p className="text-xs text-gray-400">Sustainable growth with high margins</p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
        <h3 className="text-xl font-bold text-white mb-4">Why This Matters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-2">Investor Perspective</h4>
            <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>LTV:CAC ratio of 5.3:1 exceeds industry benchmark of 3:1</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Fast payback period enables rapid reinvestment in growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>High gross margin (78%) provides cushion for scaling</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Growth Strategy</h4>
            <ul className="space-y-1 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Efficient customer acquisition enables aggressive scaling</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Revenue from earlier cohorts funds new customer acquisition</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✓</span>
                <span>Path to profitability while maintaining growth velocity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      <style>{`
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

export default Slide24CACvsLTV;
