import React from 'react';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

const Slide14RevenueProjections = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Revenue Projections</h2>
      <div className="overflow-x-auto mb-6 sm:mb-8">
        <table className="w-full text-xs sm:text-sm min-w-[700px]">
          <thead className="bg-gray-800">
            <tr>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Year</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Users</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">ARPU ($)</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Revenue ($M)</th>
              <th className="text-center p-2 sm:p-3 font-bold text-white">Costs ($M)</th>
              <th className="text-center p-2 sm:p-3 font-bold text-green-400">Profit ($M)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">2025</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1,000</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">36</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.036</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.014</td>
              <td className="p-2 sm:p-3 text-center text-green-400">0.022</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">2026</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">10,000</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">36</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.36</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.14</td>
              <td className="p-2 sm:p-3 text-center text-green-400">0.22</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">2027</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">50,000</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">36</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">1.8</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">0.7</td>
              <td className="p-2 sm:p-3 text-center text-green-400">1.1</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">2028</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">150,000</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">36</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">5.4</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">2.1</td>
              <td className="p-2 sm:p-3 text-center text-green-400">3.3</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-gray-300 font-medium">2029</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">300,000</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">36</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">10.8</td>
              <td className="p-2 sm:p-3 text-center text-gray-300">4.2</td>
              <td className="p-2 sm:p-3 text-center text-green-400">6.6</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl sm:text-3xl font-bold text-white">300K+</p>
          <p className="text-gray-400 text-xs sm:text-sm">Users by 2029</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl sm:text-3xl font-bold text-white">$10.8M</p>
          <p className="text-gray-400 text-xs sm:text-sm">Revenue by 2029</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl sm:text-3xl font-bold text-white">$6.6M</p>
          <p className="text-gray-400 text-xs sm:text-sm">Profit by 2029</p>
        </div>
      </div>
    </div>
  );
};

export default Slide14RevenueProjections;
