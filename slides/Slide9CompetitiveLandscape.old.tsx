import React from 'react';
import { Users, Target, Zap, BarChart3, TrendingUp, DollarSign } from 'lucide-react';

const Slide9CompetitiveLandscape = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Competitive Landscape</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3">Shotflux Advantages</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <Users className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">Comprehensive suite covering entire pre-production workflow</span>
              </li>
              <li className="flex items-start">
                <Target className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">Specialized focus on independent film production</span>
              </li>
              <li className="flex items-start">
                <Zap className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">Real-time collaboration tools for distributed teams</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base">Advanced analytics and predictive modeling</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-red-400 mb-3">Competitor Limitations</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-300 text-sm sm:text-base">Fragmented tools requiring manual data transfer</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-300 text-sm sm:text-base">Limited AI capabilities and predictive analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-300 text-sm sm:text-base">High cost and complexity for indie filmmakers</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-gray-300 text-sm sm:text-base">No integrated financial planning and budgeting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 bg-gray-800 p-4 sm:p-5 rounded-lg">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Market Position</h3>
        <p className="text-gray-300 text-sm sm:text-base">Shotflux uniquely addresses the gap in the market for affordable, comprehensive pre-production tools tailored to independent filmmakers, positioning us to capture significant market share in this underserved segment.</p>
      </div>
    </div>
  );
};

export default Slide9CompetitiveLandscape;
