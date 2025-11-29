import React from 'react';
import { DollarSign, TrendingUp, Users, Award } from 'lucide-react';

const NewSlide5BusinessModel = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Business Model & Unit Economics</h2>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-5 rounded-xl border border-gray-600 text-center">
          <p className="text-gray-400 mb-1 text-sm">Starter</p>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">$8.99</p>
          <p className="text-green-400 text-base mb-2">500 Credits</p>
          <p className="text-gray-500 text-xs">For hobbyists</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/40 to-gray-800 p-4 sm:p-5 rounded-xl border-2 border-green-500 text-center transform sm:scale-105 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold py-1 px-3 rounded-full">
            MOST POPULAR
          </div>
          <p className="text-gray-400 mb-1 text-sm mt-2">Creator</p>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">$31.99</p>
          <p className="text-green-400 text-base mb-2">2,000 Credits</p>
          <p className="text-gray-500 text-xs">Indie filmmakers</p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-5 rounded-xl border border-purple-500/50 text-center">
          <p className="text-gray-400 mb-1 text-sm">Studio</p>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">$69.99</p>
          <p className="text-green-400 text-base mb-2">5,000 Credits</p>
          <p className="text-gray-500 text-xs">Teams & agencies</p>
        </div>
      </div>

      {/* Unit Economics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Metrics */}
        <div className="bg-gray-800 p-5 sm:p-6 rounded-xl border border-green-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Unit Economics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-2">
                <DollarSign className="text-green-400 w-5 h-5" />
                <span className="text-gray-300">ARPU (Monthly)</span>
              </div>
              <span className="text-green-400 font-bold text-lg">₹2,500</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-blue-400 w-5 h-5" />
                <span className="text-gray-300">Gross Margin</span>
              </div>
              <span className="text-blue-400 font-bold text-lg">78%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Users className="text-purple-400 w-5 h-5" />
                <span className="text-gray-300">CAC</span>
              </div>
              <span className="text-purple-400 font-bold text-lg">₹2,800</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-2">
                <Award className="text-yellow-400 w-5 h-5" />
                <span className="text-gray-300">LTV (6 months)</span>
              </div>
              <span className="text-yellow-400 font-bold text-lg">₹15,000</span>
            </div>
          </div>
        </div>

        {/* LTV:CAC Analysis */}
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-5 sm:p-6 rounded-xl border border-purple-500/30">
          <h3 className="text-xl font-bold text-white mb-4">Why This Works</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <p className="text-4xl font-bold text-green-400">5.3:1</p>
              <p className="text-sm text-gray-400">LTV:CAC Ratio</p>
              <p className="text-xs text-gray-500 mt-1">Target: 3:1</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg text-center">
              <p className="text-4xl font-bold text-blue-400">1.1</p>
              <p className="text-sm text-gray-400">Months to Payback</p>
              <p className="text-xs text-gray-500 mt-1">Target: &lt;12</p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <p className="text-gray-300">High margin enables aggressive reinvestment</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <p className="text-gray-300">Fast payback = sustainable growth</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <p className="text-gray-300">20% affiliate commission for referrals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlide5BusinessModel;
