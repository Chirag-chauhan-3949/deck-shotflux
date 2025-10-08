import React from 'react';
import { Calendar, TrendingUp, Users, DollarSign } from 'lucide-react';

const Slide17FundingMonthly = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">6-Month Financial Breakdown</h2>
      <div className="overflow-x-auto mb-6 sm:mb-8">
        <table className="w-full text-xs sm:text-sm min-w-[700px]">
          <thead className="bg-gray-800">
            <tr>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Month</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Ad Spend</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">YT Collabs</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Salaries</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Agency</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Infra</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">CRO</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Revenue</th>
              <th className="text-center p-2 sm:p-3 font-bold text-green-400">Total Spend</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">M1</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.2L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">0</td>
              <td className="p-2 sm:p-3 text-center text-green-400">7.0L</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">M2</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.25L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.08L</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">0</td>
              <td className="p-2 sm:p-3 text-center text-green-400">9.13L</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">M3</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.3L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.07L</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">1.5L</td>
              <td className="p-2 sm:p-3 text-center text-green-400">13.17L</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">M4</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">4.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">3.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.4L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">4.125L</td>
              <td className="p-2 sm:p-3 text-center text-green-400">11.7L</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">M5</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">6.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">3.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.6L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">7.5L</td>
              <td className="p-2 sm:p-3 text-center text-green-400">13.9L</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">M6</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">6.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">3.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.0L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.8L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">11.25L</td>
              <td className="p-2 sm:p-3 text-center text-green-400">14.1L</td>
            </tr>
            <tr className="border-t-2 border-green-500 bg-green-900/20">
              <td className="p-2 sm:p-3 text-white font-bold">Total</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">19.5L</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">12.5L</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">12.0L</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">9L</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">2.55L</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">4.15L</td>
              <td className="p-2 sm:p-3 text-center text-blue-400 font-bold">24.375L</td>
              <td className="p-2 sm:p-3 text-center text-green-400 font-bold">69.0L</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-blue-500/30">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Total Funding Ask</h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">₹1.3 Crore</p>
          <p className="text-gray-400 text-xs sm:text-sm">6-month runway (~$156k USD)</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-purple-500/30">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Total Revenue (6M)</h3>
          <p className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">₹24.375L</p>
          <p className="text-gray-400 text-xs sm:text-sm">From 500 paying users</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-green-500/30">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Net Burn</h3>
          <p className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">₹44.625L</p>
          <p className="text-gray-400 text-xs sm:text-sm">With 10% contingency: ₹75.9L</p>
        </div>
      </div>
    </div>
  );
};

export default Slide17FundingMonthly;
