import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, Users, Zap, Shield, Wrench, FileText } from 'lucide-react';

const Slide25SpendBreakdownPart1 = () => {
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
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6 h-full flex flex-col">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Funding Allocation Overview</h2>
      <p className="text-lg sm:text-xl text-gray-400 mb-6">Total Funding Ask: <span className="text-green-400 font-bold">₹4 Crore</span> (3-Year Runway)</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Budget Allocation</h3>
          <div className="flex-1 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={spendData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {spendData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                  formatter={(value) => [`${value}%`]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-3 overflow-y-auto">
          {spendData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all hover-lift"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideIn 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">{item.name}</h4>
                      <p className="text-xs text-gray-400">{item.value}% of total budget</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg sm:text-2xl font-bold" style={{ color: item.color }}>
                      ₹{item.amount}L
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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

export default Slide25SpendBreakdownPart1;
