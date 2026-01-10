import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Slide4Financials = () => {
  // Updated financial data based on 18-month runway and ₹4 Cr funding
  const yearlyData = [
    { year: 'Year 1', opening: 400, spend: 2, revenue: 2, closing: 440 },
    { year: 'Year 2', opening: 440, spend: 4, revenue: 11, closing: 1410 },
    { year: 'Year 3', opening: 1410, spend: 6, revenue: 24, closing: 3700 }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Financial Projections - 18 Months</h2>

      <div className="bg-gradient-to-r from-green-900/30 to-gray-800 p-6 sm:p-8 rounded-2xl border-2 border-green-500/50 mb-6 sm:mb-8">
        <p className="text-xl sm:text-2xl text-white mb-3 sm:mb-4">Funding Target</p>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-400 mb-3 sm:mb-4">₹4 Cr</p>
        <p className="text-xl sm:text-2xl text-gray-300">18-Month Runway (~$480,000 USD)</p>
        <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">Breakeven by Year 2, Profitable by Year 3</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Yearly Spend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" label={{ value: '₹Crore', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value) => [`₹${value} Cr`, 'Amount']}
              />
              <Bar dataKey="spend" fill="#EF4444" name="Total Spend" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={yearlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="year" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" label={{ value: '₹Crore', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value) => [`₹${value} Cr`, 'Amount']}
              />
              <Bar dataKey="revenue" fill="#10B981" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">₹400L</p>
          <p className="text-gray-300 text-xs sm:text-sm">Total Investment (18 Months)</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">₹37 Cr</p>
          <p className="text-gray-300 text-xs sm:text-sm">Projected Revenue (3 Years)</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">₹33 Cr</p>
          <p className="text-gray-300 text-xs sm:text-sm">Net Profit by Year 3</p>
        </div>
      </div>
    </div>
  );
};

export default Slide4Financials;
