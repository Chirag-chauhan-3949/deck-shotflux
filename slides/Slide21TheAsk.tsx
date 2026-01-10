import React from 'react';
import { TrendingUp, Users, DollarSign, Calendar, Target } from 'lucide-react';

const Slide20TheAsk = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">The Ask</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-green-500">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Funding Requirements</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm sm:text-base">18-Month Operations</span>
                <span className="text-green-400 font-bold text-sm sm:text-base">₹360 Lakhs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm sm:text-base">Contingency (10%)</span>
                <span className="text-yellow-400 font-bold text-sm sm:text-base">₹40 Lakhs</span>
              </div>
              <div className="border-t border-gray-600 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-base sm:text-lg">Total Funding Ask</span>
                  <span className="text-green-400 font-bold text-xl sm:text-2xl">₹4 Crore</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">~$480,000 USD</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Use of Funds</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Team & Salaries</span>
                <span className="text-green-400 text-xs sm:text-sm">35% (₹140L)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Marketing & Ads</span>
                <span className="text-green-400 text-xs sm:text-sm">25% (₹100L)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Infrastructure & AI</span>
                <span className="text-green-400 text-xs sm:text-sm">15% (₹60L)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Content & Legal</span>
                <span className="text-green-400 text-xs sm:text-sm">9% (₹36L)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">CRO & Operations</span>
                <span className="text-green-400 text-xs sm:text-sm">6% (₹24L)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Contingency</span>
                <span className="text-green-400 text-xs sm:text-sm">10% (₹40L)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Expected Outcomes (3 Years)</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <Target className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-xs sm:text-sm">Year 1: 2,000 users, ₹2 Cr revenue</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-xs sm:text-sm">Year 2: 10,000 users, ₹11 Cr revenue (Breakeven)</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-xs sm:text-sm">Year 3: 25,000+ users, ₹24 Cr revenue, ₹23 Cr profit</span>
              </li>
              <li className="flex items-start">
                <Users className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-xs sm:text-sm">Series A readiness with validated PMF and profitability</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Investment Opportunity</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-3">High-margin SaaS platform addressing a massive underserved market with clear path to profitability. Enterprise discussions with major film institutes ongoing.</p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4">
              <p className="text-green-400 font-semibold text-center text-sm sm:text-base">Join us in revolutionizing film pre-production for indie creators worldwide</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Let's Build the Future of Filmmaking Together</h3>
        <p className="text-gray-400 text-sm sm:text-base">Contact us to discuss investment opportunities</p>
      </div>
    </div>
  );
};

export default Slide20TheAsk;
