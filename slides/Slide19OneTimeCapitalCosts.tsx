import React from 'react';
import { DollarSign, Shield, Palette, Video, Users } from 'lucide-react';

const Slide18OneTimeCapitalCosts = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">One-Time Capital for Growth & Scale</h2>
      <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">One-Time / Campaign-Based Costs (Non-Recurring)</p>
      
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-xs sm:text-sm min-w-[600px]">
          <thead className="bg-gray-800">
            <tr>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Category</th>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Cost (INR)</th>
              <th className="text-left p-2 sm:p-3 font-bold text-white">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-white font-semibold">Content & Media Production</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹10,00,000</td>
              <td className="p-2 sm:p-3 text-gray-300">Educational videos, promos, launch content</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-white font-semibold">Product Development Upgrades</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹5,00,000–₹8,00,000</td>
              <td className="p-2 sm:p-3 text-gray-300">Major feature development, integrations, scaling architecture</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-white font-semibold">Legal & Compliance</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹1,00,000–₹2,00,000</td>
              <td className="p-2 sm:p-3 text-gray-300">Company structure, IP filings, contracts, privacy policy, T&C</td>
            </tr>
            <tr className="border-t border-gray-700 bg-gray-800/50">
              <td className="p-2 sm:p-3 text-white font-semibold">Branding & Launch Collateral</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹1,00,000–₹2,00,000</td>
              <td className="p-2 sm:p-3 text-gray-300">Visual identity upgrade, website, launch events, PR kits, marketing material</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="p-2 sm:p-3 text-white font-semibold">Initial Agency Retainer (whirlwind.co.in)</td>
              <td className="p-2 sm:p-3 text-green-400 font-bold">₹2,00,000</td>
              <td className="p-2 sm:p-3 text-gray-300">Digital marketing setup & launch campaign</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-purple-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30 mt-4">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Additional Costs and Buffer</h3>
        <div className="space-y-2 text-gray-300 text-xs sm:text-sm">
          <p className="font-semibold text-white">Customer Support & Community Ops</p>
          <p>• Hiring 1–2 support/community managers after launch (~₹1L–₹1.5L/month total)</p>
          <p>• Essential for retention, especially for SaaS & filmmakers.</p>
          
          <p className="font-semibold text-white mt-3">Partnerships & Events Budget</p>
          <p>• Workshops, filmmaker summits, co-branded events, influencer collabs.</p>
          
          <p className="font-semibold text-white mt-3">Contingency for AI Model Costs & API Changes</p>
          <p>• AI platforms can increase prices or usage may spike → budget 10–15% buffer for infra.</p>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-blue-500/30 text-center">
          <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">₹25L</p>
          <p className="text-gray-400 text-xs sm:text-sm">Minimum One-Time Costs</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-green-500/30 text-center">
          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">₹35L</p>
          <p className="text-gray-400 text-xs sm:text-sm">Realistic Budget</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-purple-500/30 text-center">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">₹45L</p>
          <p className="text-gray-400 text-xs sm:text-sm">Buffered Budget</p>
        </div>
      </div>
    </div>
  );
};

export default Slide18OneTimeCapitalCosts;
