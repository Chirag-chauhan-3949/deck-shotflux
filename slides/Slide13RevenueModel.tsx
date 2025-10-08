import React from 'react';
import { DollarSign, TrendingUp, Users, CreditCard } from 'lucide-react';

const Slide12RevenueModel = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Simple & Scalable Revenue</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-blue-500/30 text-center">
          <p className="text-gray-400 mb-1 text-xs sm:text-sm">Starter</p>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">$8.99</p>
          <p className="text-green-400 text-base sm:text-lg mb-2">500 Credits</p>
          <p className="text-gray-400 text-xs">For light dabblers</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/40 to-gray-800 p-4 sm:p-6 rounded-xl border-4 border-green-500 text-center transform sm:scale-105">
          <div className="bg-green-500 text-black text-xs font-bold py-1 px-2 rounded-full inline-block mb-2">MOST POPULAR</div>
          <p className="text-gray-400 mb-1 text-xs sm:text-sm">Creator</p>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">$31.99</p>
          <p className="text-green-400 text-base sm:text-lg mb-2">2,000 Credits</p>
          <p className="text-gray-400 text-xs">Perfect monthly allowance</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-purple-500/30 text-center">
          <p className="text-gray-400 mb-1 text-xs sm:text-sm">Studio</p>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">$69.99</p>
          <p className="text-green-400 text-base sm:text-lg mb-2">5,000 Credits</p>
          <p className="text-gray-400 text-xs">Teams & daily renders</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
          <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2" />
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">Affiliate Program</h3>
          <p className="text-gray-300 text-xs sm:text-sm">20% commission for 1 year on all referrals</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
          <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2" />
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">High Margins</h3>
          <p className="text-gray-300 text-xs sm:text-sm">Built on high-margin AI service delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Slide12RevenueModel;
