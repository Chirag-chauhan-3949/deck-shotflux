import React from 'react';
import { Users, TrendingUp, Calendar, CheckCircle } from 'lucide-react';

const Slide10Traction = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Traction</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3">Development Progress</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">Core AI algorithms for script analysis completed</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">Budget optimization engine in testing phase</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">Scheduling algorithm prototype developed</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">UI/UX design finalized and user-tested</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3">Market Validation</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <Users className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">20+ indie filmmakers interviewed and provided feedback</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">90% satisfaction rate in beta testing</span>
              </li>
              <li className="flex items-start">
                <Calendar className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">Ongoing talks with major film institutes as enterprise clients</span>
              </li>
              <li className="flex items-start">
                <Calendar className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">Partnership discussions with 3 production companies</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">MVP demo ready for investor presentations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 bg-gray-800 p-4 sm:p-5 rounded-lg">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Next Milestones</h3>
        <p className="text-gray-300 text-sm sm:text-base">Year 1: Launch beta, acquire 2,000 paying users. Year 2: Scale to 10,000 users and achieve breakeven. Year 3: Expand to 25,000+ users with ₹24 Cr annual revenue and profitability.</p>
      </div>
    </div>
  );
};

export default Slide10Traction;
