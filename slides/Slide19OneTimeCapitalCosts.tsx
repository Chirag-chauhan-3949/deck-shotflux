import React from 'react';
import { DollarSign, Shield, Palette, Video, Users } from 'lucide-react';

const Slide18OneTimeCapitalCosts = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Capital Allocation (₹4 Cr / 3 Years)</h2>
      <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">Strategic investment breakdown for sustainable growth</p>

      <div className="overflow-x-auto mb-4">
        <table className="w-full text-xs sm:text-sm min-w-[600px]">
          <thead className="bg-gray-800">
            <tr>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Category</th>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Allocation</th>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Amount (₹L)</th>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-white font-semibold">Team & Salaries</td>
              <td className="p-2 sm:p-3 text-blue-400 font-bold">35%</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹140L</td>
              <td className="p-2 sm:p-3 text-gray-300">Founders, dev team, support staff over 3 years</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-white font-semibold">Marketing & Ads</td>
              <td className="p-2 sm:p-3 text-blue-400 font-bold">25%</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹100L</td>
              <td className="p-2 sm:p-3 text-gray-300">Paid ads, influencer collabs, agency partnerships</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-white font-semibold">Infrastructure & AI</td>
              <td className="p-2 sm:p-3 text-blue-400 font-bold">15%</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹60L</td>
              <td className="p-2 sm:p-3 text-gray-300">Cloud, AI APIs (OpenAI), SaaS tools</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-white font-semibold">Content & Legal</td>
              <td className="p-2 sm:p-3 text-blue-400 font-bold">9%</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹36L</td>
              <td className="p-2 sm:p-3 text-gray-300">Educational content, legal, IP protection</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-white font-semibold">CRO & Operations</td>
              <td className="p-2 sm:p-3 text-blue-400 font-bold">6%</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹24L</td>
              <td className="p-2 sm:p-3 text-gray-300">Conversion optimization, analytics, operations</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-white font-semibold">Contingency</td>
              <td className="p-2 sm:p-3 text-blue-400 font-bold">10%</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹40L</td>
              <td className="p-2 sm:p-3 text-gray-300">Buffer for unexpected costs, ~4 month runway</td>
            </tr>
            <tr className="border-t-2 border-green-500 bg-green-900/20">
              <td className="p-2 sm:p-3 text-white font-bold">Total</td>
              <td className="p-2 sm:p-3 text-white font-bold">100%</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹400L</td>
              <td className="p-2 sm:p-3 text-gray-300">₹4 Crore (~$480K USD)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-purple-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30 mt-4">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Enterprise Opportunity: Film Institutes</h3>
        <div className="space-y-2 text-gray-300 text-xs sm:text-sm">
          <p className="font-semibold text-white">Ongoing Discussions for Enterprise Partnership</p>
          <p>• Premium film institute with 1000+ students and faculty</p>
          <p>• Potential for institutional licensing and curriculum integration</p>
          <p>• Strong validation for B2B enterprise market segment</p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-blue-500/30 text-center">
          <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">₹400L</p>
          <p className="text-gray-400 text-xs sm:text-sm">Total Investment</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-green-500/30 text-center">
          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">₹37 Cr</p>
          <p className="text-gray-400 text-xs sm:text-sm">3-Year Revenue</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-purple-500/30 text-center">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">₹33 Cr</p>
          <p className="text-gray-400 text-xs sm:text-sm">Net Profit by Y3</p>
        </div>
      </div>
    </div>
  );
};

export default Slide18OneTimeCapitalCosts;
