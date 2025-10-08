import React from 'react';
import { Calendar, Users, Zap, Shield, BarChart3, TrendingUp } from 'lucide-react';

const Slide16Roadmap = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Roadmap After Funding</h2>
      <div className="space-y-2">
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500">
          <div className="flex items-start">
            <div className="bg-yellow-500 text-black font-bold text-xs py-1 px-2 rounded mr-2 sm:mr-3 flex-shrink-0">M0</div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Transition Period</h3>
              <p className="text-gray-300 text-xs">Founders wrap up current responsibilities to fully focus on ShotFlux™</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
          <div className="flex items-start">
            <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-2 sm:mr-3 flex-shrink-0">M1</div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Dev Hires, Security Audit & Marketing Kickoff</h3>
              <p className="text-gray-300 text-xs">Onboard devs, Image to video, Complete marketing onboarding</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
          <div className="flex items-start">
            <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-2 sm:mr-3 flex-shrink-0">M2</div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Beta Optimization & Funnel Setup</h3>
              <p className="text-gray-300 text-xs">Scale affiliate onboarding, set up paid ad infra, refine landing pages</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
          <div className="flex items-start">
            <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-2 sm:mr-3 flex-shrink-0">M3</div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Controlled User Acquisition</h3>
              <p className="text-gray-300 text-xs">Launch targeted campaigns, activate affiliates, community building</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
          <div className="flex items-start">
            <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-2 sm:mr-3 flex-shrink-0">M4</div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Early Growth & Conversion Optimization</h3>
              <p className="text-gray-300 text-xs">Scale high-ROI ads, optimize affiliate incentives</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
          <div className="flex items-start">
            <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-2 sm:mr-3 flex-shrink-0">M6+</div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">Retention & Revenue Growth</h3>
              <p className="text-gray-300 text-xs">Retargeting, influencer collabs, deepen affiliate partnerships</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Key Milestones</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="text-center">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-1" />
            <p className="text-xs sm:text-sm text-gray-300">500 Users</p>
            <p className="text-xs text-green-400">M3</p>
          </div>
          <div className="text-center">
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-1" />
            <p className="text-xs sm:text-sm text-gray-300">₹10L MRR</p>
            <p className="text-xs text-green-400">M6</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-1" />
            <p className="text-xs sm:text-sm text-gray-300">1500 Users</p>
            <p className="text-xs text-green-400">M9</p>
          </div>
          <div className="text-center">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-1" />
            <p className="text-xs sm:text-sm text-gray-300">3000 Users</p>
            <p className="text-xs text-green-400">M12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide16Roadmap;
