import React from 'react';
import { Calendar, Users, Zap, Shield, BarChart3, TrendingUp } from 'lucide-react';

const Slide16Roadmap = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">3-Year Roadmap</h2>
      <div className="space-y-3">
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500">
          <div className="flex items-start">
            <div className="bg-yellow-500 text-black font-bold text-xs py-1 px-2 rounded mr-2 sm:mr-3 flex-shrink-0">Y1</div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Foundation & Launch (Year 1)</h3>
              <p className="text-gray-300 text-xs">Team building, platform development, beta launch, acquire 2,000 paying users, generate ₹30L revenue</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-start">
            <div className="bg-blue-500 text-black font-bold text-xs py-1 px-2 rounded mr-2 sm:mr-3 flex-shrink-0">Y2</div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Growth & Breakeven (Year 2)</h3>
              <p className="text-gray-300 text-xs">Scale marketing, enterprise partnerships (Whistling Woods), reach 10,000 users, ₹150L revenue, achieve breakeven</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
          <div className="flex items-start">
            <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-2 sm:mr-3 flex-shrink-0">Y3</div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Profitability & Expansion (Year 3)</h3>
              <p className="text-gray-300 text-xs">Global expansion, 25,000+ users, ₹350L revenue, ₹240L profit, Series A readiness</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Key Milestones</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="text-center">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-1" />
            <p className="text-xs sm:text-sm text-gray-300">2,000 Users</p>
            <p className="text-xs text-green-400">Year 1</p>
          </div>
          <div className="text-center">
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-1" />
            <p className="text-xs sm:text-sm text-gray-300">Breakeven</p>
            <p className="text-xs text-blue-400">Year 2</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-1" />
            <p className="text-xs sm:text-sm text-gray-300">25,000+ Users</p>
            <p className="text-xs text-green-400">Year 3</p>
          </div>
          <div className="text-center">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-1" />
            <p className="text-xs sm:text-sm text-gray-300">₹240L Profit</p>
            <p className="text-xs text-purple-400">Year 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide16Roadmap;
