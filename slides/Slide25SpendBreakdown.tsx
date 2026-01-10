import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { DollarSign, TrendingUp, Shield, Zap, Users, Wrench, FileText } from 'lucide-react';

const Slide25SpendBreakdown = () => {
  const spendData = [
    { name: 'Team & Salaries', value: 35, amount: 140, color: '#3B82F6', icon: Users },
    { name: 'Marketing & Ads', value: 25, amount: 100, color: '#10B981', icon: TrendingUp },
    { name: 'Infrastructure & AI', value: 15, amount: 60, color: '#8B5CF6', icon: Zap },
    { name: 'Content & Legal', value: 9, amount: 36, color: '#EF4444', icon: FileText },
    { name: 'CRO & Operations', value: 6, amount: 24, color: '#06B6D4', icon: Wrench },
    { name: 'Contingency', value: 10, amount: 40, color: '#F59E0B', icon: Shield }
  ];

  const COLORS = spendData.map(item => item.color);

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Funding Allocation Breakdown</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Allocation of ₹4 Crore (3 Years)</h3>
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
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-blue-500/30">
          <h3 className="text-sm font-semibold text-blue-400 mb-3">Team & Salaries (35%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>Founder Salaries (3Y)</span>
              <span className="text-blue-400">₹72L</span>
            </li>
            <li className="flex justify-between">
              <span>Dev Team Hires</span>
              <span className="text-blue-400">₹48L</span>
            </li>
            <li className="flex justify-between">
              <span>Support & Community</span>
              <span className="text-blue-400">₹20L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-green-500/30">
          <h3 className="text-sm font-semibold text-green-400 mb-3">Marketing & Ads (25%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>Paid Advertising</span>
              <span className="text-green-400">₹50L</span>
            </li>
            <li className="flex justify-between">
              <span>Influencer/Collabs</span>
              <span className="text-green-400">₹30L</span>
            </li>
            <li className="flex justify-between">
              <span>Marketing Agency</span>
              <span className="text-green-400">₹20L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-purple-500/30">
          <h3 className="text-sm font-semibold text-purple-400 mb-3">Infrastructure & AI (15%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>AI/ML APIs (OpenAI)</span>
              <span className="text-purple-400">₹30L</span>
            </li>
            <li className="flex justify-between">
              <span>Cloud & Servers</span>
              <span className="text-purple-400">₹20L</span>
            </li>
            <li className="flex justify-between">
              <span>SaaS Tools</span>
              <span className="text-purple-400">₹10L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-red-500/30">
          <h3 className="text-sm font-semibold text-red-400 mb-3">Content & Legal (9%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>Content Production</span>
              <span className="text-red-400">₹20L</span>
            </li>
            <li className="flex justify-between">
              <span>Legal & Compliance</span>
              <span className="text-red-400">₹10L</span>
            </li>
            <li className="flex justify-between">
              <span>IP & Security</span>
              <span className="text-red-400">₹6L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-cyan-500/30">
          <h3 className="text-sm font-semibold text-cyan-400 mb-3">CRO & Operations (6%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>CRO Consulting</span>
              <span className="text-cyan-400">₹12L</span>
            </li>
            <li className="flex justify-between">
              <span>Analytics Tools</span>
              <span className="text-cyan-400">₹6L</span>
            </li>
            <li className="flex justify-between">
              <span>Operations</span>
              <span className="text-cyan-400">₹6L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-yellow-500/30">
          <h3 className="text-sm font-semibold text-yellow-400 mb-3">Contingency (10%)</h3>
          <ul className="space-y-1 text-xs text-gray-300">
            <li className="flex justify-between">
              <span>Buffer Fund</span>
              <span className="text-yellow-400">₹40L</span>
            </li>
            <li className="flex justify-between">
              <span>Purpose</span>
              <span className="text-yellow-400">Risk Buffer</span>
            </li>
            <li className="flex justify-between">
              <span>Coverage</span>
              <span className="text-yellow-400">~4 Months</span>
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
            <h4 className="text-green-400 font-semibold mb-2">Growth-Focused (60%)</h4>
            <p className="text-xs">
              35% on team + 25% on marketing ensures we have the right talent to build and the resources to scale user acquisition aggressively over 3 years.
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-semibold mb-2">Sustainable Foundation (40%)</h4>
            <p className="text-xs">
              15% infrastructure + 9% content/legal + 6% CRO + 10% contingency builds a robust, secure platform with optimized conversion and protection against challenges.
            </p>
          </div>
        </div>
      </div>

      <style>{`
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
