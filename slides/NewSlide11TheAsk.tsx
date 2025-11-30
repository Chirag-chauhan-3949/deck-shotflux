import React from 'react';
import { DollarSign, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

const NewSlide11TheAsk = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">The Ask</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Investment Details */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-900/40 to-gray-800 p-6 sm:p-8 rounded-2xl border-2 border-green-500">
            <p className="text-lg text-gray-300 mb-2">We are raising</p>
            <p className="text-5xl sm:text-6xl font-bold text-green-400 mb-2">₹69L</p>
            <p className="text-xl text-gray-300 mb-1">~$83,000 USD</p>
            <p className="text-lg text-white font-semibold mb-4">for 25% equity</p>
            <div className="border-t border-green-500/30 pt-4">
              <p className="text-sm text-gray-400">Pre-money valuation: ₹2.07 Cr (~$248K)</p>
              <p className="text-sm text-gray-400">Post-money valuation: ₹2.76 Cr (~$331K)</p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 sm:p-5 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-3">Use of Funds</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Growth Marketing (Ads + YT)</span>
                <span className="text-green-400 font-semibold">46%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Team & Operations</span>
                <span className="text-green-400 font-semibold">30%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Infrastructure & Tools</span>
                <span className="text-green-400 font-semibold">10%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">CRO & Optimization</span>
                <span className="text-green-400 font-semibold">6%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Contingency Buffer</span>
                <span className="text-green-400 font-semibold">8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-5 sm:p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-white mb-4">What You Get (6 Months)</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">500 Active Paying Users</p>
                  <p className="text-gray-400 text-sm">10x growth from launch</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">₹11.25L Monthly Revenue</p>
                  <p className="text-gray-400 text-sm">Path to profitability established</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">78% Gross Margin</p>
                  <p className="text-gray-400 text-sm">High-margin SaaS economics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">5.3:1 LTV:CAC Ratio</p>
                  <p className="text-gray-400 text-sm">Sustainable unit economics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Series A Ready</p>
                  <p className="text-gray-400 text-sm">Validated PMF for next round</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-5 sm:p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-3">Why Now?</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• AI video tools are exploding - first-mover advantage in pre-production</p>
              <p>• Product is ready - just need fuel for growth</p>
              <p>• $746B market with no dominant player in AI storyboarding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlide11TheAsk;
