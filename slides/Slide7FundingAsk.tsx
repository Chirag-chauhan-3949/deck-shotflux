import React from 'react';
import { DollarSign, TrendingUp, Users } from 'lucide-react';

const Slide7FundingAsk = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <DollarSign className="w-16 h-16 sm:w-20 md:h-20 text-green-400 mb-4 sm:mb-6" />
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Strategic Investment Opportunity</h2>
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8">Join us in revolutionizing pre-production workflows</p>
      
      <div className="bg-gradient-to-r from-green-900/40 to-gray-800 p-6 sm:p-8 rounded-2xl border-2 border-green-500 mb-6 sm:mb-8 max-w-3xl w-full">
        <p className="text-lg sm:text-xl text-white mb-2 sm:mb-3">We are raising</p>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-400 mb-2 sm:mb-3">₹1.25 Cr</p>
        <p className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">~$150,000 USD - Seed Capital for 6-Month Runway</p>
        <p className="text-sm sm:text-base text-gray-400">Accelerated growth path to 500 active paying users by Month 6</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 w-full max-w-4xl">
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-blue-500/30">
          <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-3 mx-auto" />
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">₹11.25L/Month</p>
          <p className="text-sm sm:text-base text-gray-300">Projected MRR by M6</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-green-500/30">
          <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mb-3 mx-auto" />
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">500 Users</p>
          <p className="text-sm sm:text-base text-gray-300">Target Paying Users by M6</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-purple-500/30">
          <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 mb-3 mx-auto" />
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">78% Margin</p>
          <p className="text-sm sm:text-base text-gray-300">High-Profit SaaS Model</p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 w-full max-w-2xl">
        <p className="text-lg sm:text-xl md:text-2xl text-white">Strategic investment for exponential growth</p>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">Dushyant kiri: 9893511135</p>
        <p className="text-sm sm:text-base text-gray-400">founders@shotflux.com • www.shotflux.com</p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mt-4 sm:mt-6">
          <a 
            href="tel:+919867659005"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 sm:px-8 rounded-xl text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg"
          >
            📞 Schedule Meeting
          </a>
          <a 
            href="https://shotflux.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 sm:px-8 rounded-xl text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg"
          >
            🚀 View Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide7FundingAsk;
