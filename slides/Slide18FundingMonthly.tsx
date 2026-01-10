import React from 'react';
import { Calendar, TrendingUp, Users, DollarSign } from 'lucide-react';

const Slide17FundingMonthly = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">3-Year Financial Breakdown</h2>
      <div className="overflow-x-auto mb-6 sm:mb-8">
        <table className="w-full text-xs sm:text-sm min-w-[700px]">
          <thead className="bg-gray-800">
            <tr>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Year</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Team & Salaries</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Marketing & Ads</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Infrastructure</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Content & Legal</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">CRO & Ops</th>
              <th className="text-center p-2 sm:p-3 font-bold text-blue-400">Revenue</th>
              <th className="text-center p-2 sm:p-3 font-bold text-green-400">Total Spend</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">Year 1</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹56L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹40L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹24L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹14.4L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹9.6L</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">₹2 Cr</td>
              <td className="p-2 sm:p-3 text-center text-green-400">₹160L</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">Year 2</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹45.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹32.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹19.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹11.7L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹7.8L</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">₹11 Cr</td>
              <td className="p-2 sm:p-3 text-center text-green-400">₹130L</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">Year 3</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹38.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹27.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹16.5L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹9.9L</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">₹6.6L</td>
              <td className="p-2 sm:p-3 text-center text-blue-400">₹24 Cr</td>
              <td className="p-2 sm:p-3 text-center text-green-400">₹110L</td>
            </tr>
            <tr className="border-t-2 border-green-500 bg-green-900/20">
              <td className="p-2 sm:p-3 text-white font-bold">Total (3Y)</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">₹140L</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">₹100L</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">₹60L</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">₹36L</td>
              <td className="p-2 sm:p-3 text-center text-white font-bold">₹24L</td>
              <td className="p-2 sm:p-3 text-center text-blue-400 font-bold">₹37 Cr</td>
              <td className="p-2 sm:p-3 text-center text-green-400 font-bold">₹400L</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-xs text-gray-400 mb-4">
        *Additional 10% contingency (₹40L) included in total. Yearly spend decreases as revenue grows.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-blue-500/30">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Total Funding Ask</h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">₹4 Crore</p>
          <p className="text-gray-400 text-xs sm:text-sm">3-year runway (~$480K USD)</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-purple-500/30">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Total Revenue (3Y)</h3>
          <p className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">₹37 Cr</p>
          <p className="text-gray-400 text-xs sm:text-sm">From 25,000+ paying users</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-green-500/30">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Net Position Year 3</h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">₹33 Cr Profit</p>
          <p className="text-gray-400 text-xs sm:text-sm">Profitable & Series A ready</p>
        </div>
      </div>
    </div>
  );
};

export default Slide17FundingMonthly;
