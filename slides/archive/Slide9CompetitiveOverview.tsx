import React from 'react';
import { Trophy, Users, Target, Zap, BarChart3, TrendingUp, DollarSign, Crown } from 'lucide-react';

const Slide9CompetitiveOverview = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Competitive Landscape</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        {/* Shotflux Advantages */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl border border-green-500/20">
          <div className="flex items-center mb-4">
            <Crown className="text-green-500 mr-3" size={24} />
            <h3 className="text-xl font-bold text-green-400">Shotflux Market Leadership</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                <Trophy className="text-green-500" size={14} />
              </div>
              <span className="text-gray-300 text-sm sm:text-base">Industry's only complete audio-visual storyboarding solution</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                <DollarSign className="text-green-500" size={14} />
              </div>
              <span className="text-gray-300 text-sm sm:text-base">Unbeatable value at $19/month - 32-211% cheaper than competitors</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                <Zap className="text-green-500" size={14} />
              </div>
              <span className="text-gray-300 text-sm sm:text-base">Fastest "minutes not hours" generation speed</span>
            </li>
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-3 mt-1">
                <Users className="text-green-500" size={14} />
              </div>
              <span className="text-gray-300 text-sm sm:text-base">Professional quality with easy learning curve</span>
            </li>
          </ul>
        </div>

        {/* Market Position */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-xl border border-blue-500/20">
          <div className="flex items-center mb-4">
            <Target className="text-blue-500 mr-3" size={24} />
            <h3 className="text-xl font-bold text-blue-400">Market Position Analysis</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-700/50 p-3 rounded-lg">
              <h4 className="text-green-400 font-semibold text-sm sm:text-base mb-2">🎯 Target Segments</h4>
              <ul className="text-gray-300 text-xs sm:text-sm space-y-1">
                <li>• Independent Filmmakers ($19 vs Shai Creative $29 - 53% savings)</li>
                <li>• Content Creators ($19 vs Story-Boards.ai $35 - 84% savings)</li>
                <li>• Creative Agencies ($19 vs StoryboardHero.ai $25+ - better features)</li>
              </ul>
            </div>
            <div className="text-gray-300 text-sm sm:text-base">
              <p className="mb-2"><strong>Competitive Quadrant:</strong> High Features, Low Price</p>
              <p>Shotflux dominates with unique audio capabilities + aggressive pricing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Features */}
      <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-4 sm:p-6 rounded-xl border border-purple-500/30">
        <div className="flex items-center mb-4">
          <TrendingUp className="text-purple-500 mr-3" size={24} />
          <h3 className="text-xl font-bold text-purple-400">Revolutionary Features Coming Soon</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-2">🎭 Character Consistency</h4>
            <p className="text-gray-300 text-xs sm:text-sm">Maintains character appearance across scenes</p>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-2">🎬 Image-to-Video with Multi-Character Lipsync</h4>
            <p className="text-gray-300 text-xs sm:text-sm">Industry-first synchronized dialogue</p>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-2">🎥 Complete AI-Assisted Film Production</h4>
            <p className="text-gray-300 text-xs sm:text-sm">Indistinguishable from real shots and films - Full AI video generation pipeline</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9CompetitiveOverview;
