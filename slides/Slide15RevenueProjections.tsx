import React from 'react';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

const Slide14RevenueProjections = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Revenue Projections (3-Year)</h2>
      <div className="overflow-x-auto mb-6 sm:mb-8">
        <table className="w-full text-xs sm:text-sm min-w-[700px]">
          <thead className="bg-gray-800">
            <tr>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Year</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Users</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">ARPU (₹/yr)</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Revenue (₹L)</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Spend (₹Cr)</th>
              <th className="text-center p-2 sm:p-3 font-bold text-green-400">Net (₹L)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">Year 1</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2,000</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹10,000</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">₹2 Cr</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹2 Cr</td>
              <td className="p-2 sm:p-3 text-center text-green-400">+₹0 Cr</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">Year 2</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">10,000</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹11,000</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">₹11 Cr</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹4 Cr</td>
              <td className="p-2 sm:p-3 text-center text-green-400">+₹7 Cr</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">Year 3</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">25,000+</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹9,600</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">₹24 Cr</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹6 Cr</td>
              <td className="p-2 sm:p-3 text-center text-green-400">+₹18 Cr</td>
            </tr>
            <tr className="border-t-2 border-green-500 bg-green-900/20">
              <td className="p-2 sm:p-3 text-white font-bold">Total (3Y)</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">25,000+</td>
              <td className="p-2 sm:p-3 text-center text-gray-400">-</td>
              <td className="p-2 sm:p-3 text-center text-blue-400 font-bold">₹37 Cr</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">₹12 Cr</td>
              <td className="p-2 sm:p-3 text-center text-green-400 font-bold">+₹25 Cr</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-xs text-gray-400 mb-4">
        *ARPU decreases slightly in Y3 due to enterprise pricing tiers and volume discounts
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl sm:text-3xl font-bold text-white">25,000+</p>
          <p className="text-gray-400 text-xs sm:text-sm">Users by Year 3</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl sm:text-3xl font-bold text-white">₹37 Cr</p>
          <p className="text-gray-400 text-xs sm:text-sm">Total Revenue (3Y)</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl sm:text-3xl font-bold text-white">₹33 Cr</p>
          <p className="text-gray-400 text-xs sm:text-sm">Net Profit (3Y)</p>
        </div>
      </div>
    </div>
  );
};

export default Slide14RevenueProjections;
