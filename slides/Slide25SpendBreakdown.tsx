import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DollarSign, TrendingUp, Shield, Zap, Users, Wrench } from 'lucide-react';

const Slide25SpendBreakdown = () => {
  const spendData = [
    { name: 'Ads & Growth', value: 32, amount: 21, color: '#10B981', icon: TrendingUp },
    { name: 'Salaries & Ops', value: 26, amount: 18, color: '#3B82F6', icon: Users },
    { name: 'Infra & SaaS', value: 18, amount: 12, color: '#8B5CF6', icon: Zap },
    { name: 'Contingency', value: 11, amount: 7.8, color: '#F59E0B', icon: Shield },
    { name: 'Legal & Security', value: 7, amount: 4.5, color: '#EF4444', icon: Shield },
    { name: 'CRO & Optimization', value: 6, amount: 4, color: '#06B6D4', icon: Wrench }
  ];

  const COLORS = spendData.map(item => item.color);

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Funding Allocation Breakdown</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Allocation of ₹1.25 Crore</h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={spendData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {spendData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value, name) => [`${value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {spendData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideIn 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">{item.name}</h4>
                      <p className="text-xs text-gray-400">{item.value}% of total budget</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl sm:text-2xl font-bold" style={{ color: item.color }}>
                      ₹{item.amount}L
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-green-500/30">
          <h3 className="text-sm font-semibold text-green-400 mb-3">Ads & Growth (32%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>Paid Ads (M1-M6)</span>
              <span className="text-green-400">₹19.5L</span>
            </li>
            <li className="flex justify-between">
              <span>YouTube Collabs</span>
              <span className="text-green-400">₹12.5L</span>
            </li>
            <li className="flex justify-between">
              <span>Marketing Agency</span>
              <span className="text-green-400">₹9L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-blue-500/30">
          <h3 className="text-sm font-semibold text-blue-400 mb-3">Salaries & Operations (26%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>Founder Salaries</span>
              <span className="text-blue-400">₹8.4L</span>
            </li>
            <li className="flex justify-between">
              <span>Operations</span>
              <span className="text-blue-400">₹3L</span>
            </li>
            <li className="flex justify-between">
              <span>SaaS Tools</span>
              <span className="text-blue-400">₹1.8L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-purple-500/30">
          <h3 className="text-sm font-semibold text-purple-400 mb-3">Infrastructure & SaaS (18%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>Server/API Costs</span>
              <span className="text-purple-400">₹2.55L</span>
            </li>
            <li className="flex justify-between">
              <span>OpenAI/Image APIs</span>
              <span className="text-purple-400">₹1.5L</span>
            </li>
            <li className="flex justify-between">
              <span>Backend (Supabase)</span>
              <span className="text-purple-400">₹0.9L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-cyan-500/30">
          <h3 className="text-sm font-semibold text-cyan-400 mb-3">CRO & Optimization (6%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>GoodUI Consulting</span>
              <span className="text-cyan-400">₹4.15L</span>
            </li>
            <li className="flex justify-between">
              <span>Hotjar/Mixpanel</span>
              <span className="text-cyan-400">₹0.6L</span>
            </li>
            <li className="flex justify-between">
              <span>A/B Testing</span>
              <span className="text-cyan-400">Included</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-red-500/30">
          <h3 className="text-sm font-semibold text-red-400 mb-3">Legal & Security (7%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>Legal (M1)</span>
              <span className="text-red-400">₹2L</span>
            </li>
            <li className="flex justify-between">
              <span>Security Audit (M3)</span>
              <span className="text-red-400">₹2.5L</span>
            </li>
            <li className="flex justify-between">
              <span>IP Protection</span>
              <span className="text-red-400">Included</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-yellow-500/30">
          <h3 className="text-sm font-semibold text-yellow-400 mb-3">Contingency (11%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>Buffer Fund</span>
              <span className="text-yellow-400">₹7.8L</span>
            </li>
            <li className="flex justify-between">
              <span>Purpose</span>
              <span className="text-yellow-400">10% cushion</span>
            </li>
            <li className="flex justify-between">
              <span>Risk Mitigation</span>
              <span className="text-yellow-400">Essential</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
        <div className="flex items-center gap-3 mb-4">
          <DollarSign className="text-green-400 w-8 h-8" />
          <h3 className="text-xl font-bold text-white">Strategic Allocation Rationale</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <h4 className="text-green-400 font-semibold mb-2">Growth-Focused (58%)</h4>
            <p className="text-xs">
              32% on ads and growth marketing + 26% on team and operations ensures we can execute aggressive user
              acquisition while maintaining product quality and customer support.
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-semibold mb-2">Sustainable Foundation (42%)</h4>
            <p className="text-xs">
              18% infrastructure + 7% legal/security + 6% CRO + 11% contingency builds a robust, secure platform with
              optimized conversion and protection against unforeseen challenges.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Slide25SpendBreakdown;
