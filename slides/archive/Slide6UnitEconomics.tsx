import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Slide6UnitEconomics = () => {
  const unitEconomicsData = [
    { operation: 'Screenplay Import', credits: 42, userPaid: 0.76, costToUs: 0.006, profit: 0.75, profitPercent: 12500 },
    { operation: 'Entity Images', credits: 13, userPaid: 0.23, costToUs: 0.087, profit: 0.15, profitPercent: 170 },
    { operation: 'Shotlist', credits: 41, userPaid: 0.74, costToUs: 0.0017, profit: 0.74, profitPercent: 44253 },
    { operation: 'Storyboards', credits: 30, userPaid: 0.54, costToUs: 0.15, profit: 0.39, profitPercent: 259 },
    { operation: 'Dialogue', credits: 20, userPaid: 0.36, costToUs: 0.11, profit: 0.25, profitPercent: 226 },
    { operation: 'SFX', credits: 116, userPaid: 2.09, costToUs: 0.64, profit: 1.45, profitPercent: 226 }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Unit Economics - 4-Page Screenplay</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Profit Margin Analysis</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={unitEconomicsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="operation" stroke="#9CA3AF" angle={-15} textAnchor="end" height={60} />
              <YAxis stroke="#9CA3AF" label={{ value: 'Profit %', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value, name) => {
                  if (name === 'profitPercent') return [`${value}%`, 'Profit %'];
                  if (name === 'profit') return [`$${value}`, 'Profit $'];
                  if (name === 'costToUs') return [`$${value}`, 'Cost $'];
                  if (name === 'userPaid') return [`$${value}`, 'Revenue $'];
                  return [value, name];
                }}
              />
              <Bar dataKey="profitPercent" fill="#10B981" name="Profit %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Key Financial Highlights</h3>
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-400">79%</p>
              <p className="text-sm text-gray-300">Average Profit Margin</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-blue-400">$3.82</p>
              <p className="text-sm text-gray-300">Total Profit per 4-Page Screenplay</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-purple-400">262</p>
              <p className="text-sm text-gray-300">Total Credits Required</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-yellow-400">$4.82</p>
              <p className="text-sm text-gray-300">Total Revenue per Screenplay</p>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container overflow-x-auto">
        <table className="w-full text-xs min-w-[700px]">
          <thead className="bg-gray-800">
            <tr>
              <th className="text-left p-2 font-bold text-white">Operation</th>
              <th className="text-center p-2 font-bold text-white">Credits</th>
              <th className="text-center p-2 font-bold text-white">Revenue ($)</th>
              <th className="text-center p-2 font-bold text-white">Cost ($)</th>
              <th className="text-center p-2 font-bold text-white">Profit ($)</th>
              <th className="text-center p-2 font-bold text-green-400">Profit %</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {unitEconomicsData.map((item, index) => (
              <tr key={index} className={`border-t border-gray-700 ${index % 2 === 1 ? 'bg-gray-800/50' : ''}`}>
                <td className="p-2 text-gray-300">{item.operation}</td>
                <td className="p-2 text-center text-gray-300">{item.credits}</td>
                <td className="p-2 text-center text-gray-300">{item.userPaid}</td>
                <td className="p-2 text-center text-gray-300">{item.costToUs}</td>
                <td className="p-2 text-center text-green-400">{item.profit}</td>
                <td className="p-2 text-center text-green-400 font-bold">{item.profitPercent}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="text-gray-400 text-center text-xs mt-3">High-margin AI service delivery with exceptional profitability</p>
    </div>
  );
};

export default Slide6UnitEconomics;
