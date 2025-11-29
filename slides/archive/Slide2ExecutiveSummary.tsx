import React from 'react';
import { Users, Target, Cpu, TrendingUp } from 'lucide-react';

const Slide2ExecutiveSummary = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10">Executive Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
          <Users className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Massive Addressable Market</h3>
          <p className="text-gray-300 text-sm sm:text-base">Video production is booming, projected to reach over $746B by 2030</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
          <Target className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Clear Pain & Need</h3>
          <p className="text-gray-300 text-sm sm:text-base">Pre-production remains manual and costly; AI saves time & money</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
          <Cpu className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Unique AI Platform</h3>
          <p className="text-gray-300 text-sm sm:text-base">ShotFlux™ automates breakdowns, shotlists & storyboards in minutes</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
          <TrendingUp className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Compelling Growth Path</h3>
          <p className="text-gray-300 text-sm sm:text-base">6-month runway to 500 paying users with 78% gross margin and 5.3:1 LTV:CAC</p>
        </div>
      </div>
    </div>
  );
};

export default Slide2ExecutiveSummary;
