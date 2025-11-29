import React from 'react';
import { Calendar, Users, TrendingUp, Zap, Target } from 'lucide-react';

const NewSlide9Roadmap = () => {
  const milestones = [
    { month: 'M0', title: 'Transition', desc: 'Founders go full-time on ShotFlux', color: 'yellow' },
    { month: 'M1', title: 'Launch Prep', desc: 'Hire devs, security audit, marketing setup', color: 'green' },
    { month: 'M2', title: 'Beta Optimization', desc: 'Affiliate onboarding, paid ad infrastructure', color: 'green' },
    { month: 'M3', title: 'User Acquisition', desc: 'Launch campaigns, 165 paying users', color: 'green' },
    { month: 'M4-5', title: 'Scale & Optimize', desc: 'High-ROI ads, conversion optimization', color: 'green' },
    { month: 'M6', title: 'Growth Target', desc: '500 paying users, ₹11.25L MRR', color: 'blue' },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Roadmap & Milestones</h2>

      {/* Timeline */}
      <div className="space-y-3 mb-8">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`bg-gray-800 p-3 sm:p-4 rounded-lg border-l-4 ${
              milestone.color === 'yellow' ? 'border-yellow-500' :
              milestone.color === 'blue' ? 'border-blue-500' :
              'border-green-500'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`${
                milestone.color === 'yellow' ? 'bg-yellow-500' :
                milestone.color === 'blue' ? 'bg-blue-500' :
                'bg-green-500'
              } text-black font-bold text-xs py-1 px-2 rounded flex-shrink-0`}>
                {milestone.month}
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-white">{milestone.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{milestone.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Targets */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 rounded-xl border border-green-500/30 text-center">
          <Users className="text-green-400 w-8 h-8 mx-auto mb-2" />
          <p className="text-2xl font-bold text-green-400">165</p>
          <p className="text-xs text-gray-400">Users by M3</p>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 rounded-xl border border-blue-500/30 text-center">
          <Target className="text-blue-400 w-8 h-8 mx-auto mb-2" />
          <p className="text-2xl font-bold text-blue-400">500</p>
          <p className="text-xs text-gray-400">Users by M6</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 rounded-xl border border-purple-500/30 text-center">
          <TrendingUp className="text-purple-400 w-8 h-8 mx-auto mb-2" />
          <p className="text-2xl font-bold text-purple-400">₹11.25L</p>
          <p className="text-xs text-gray-400">MRR by M6</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-4 rounded-xl border border-yellow-500/30 text-center">
          <Zap className="text-yellow-400 w-8 h-8 mx-auto mb-2" />
          <p className="text-2xl font-bold text-yellow-400">3,000</p>
          <p className="text-xs text-gray-400">Users by M12</p>
        </div>
      </div>

      {/* Long Term Vision */}
      <div className="bg-gradient-to-r from-purple-900/20 to-gray-800 p-4 sm:p-5 rounded-xl border border-purple-500/30">
        <h3 className="text-lg font-bold text-white mb-3">Long-Term Vision</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-purple-400 font-semibold mb-1">Year 1</p>
            <p className="text-gray-300">3,000 users, ₹67.5L MRR, Series A readiness</p>
          </div>
          <div>
            <p className="text-purple-400 font-semibold mb-1">Year 2</p>
            <p className="text-gray-300">10,000 users, expand to international markets</p>
          </div>
          <div>
            <p className="text-purple-400 font-semibold mb-1">Year 3+</p>
            <p className="text-gray-300">Full AI video production pipeline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlide9Roadmap;
