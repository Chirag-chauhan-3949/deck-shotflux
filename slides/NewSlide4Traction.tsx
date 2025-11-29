import React from 'react';
import { Users, TrendingUp, CheckCircle, Building, Star, MessageSquare } from 'lucide-react';

const NewSlide4Traction = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Traction & Validation</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6">
        {/* Development Status */}
        <div className="bg-gray-800 p-5 sm:p-6 rounded-xl border border-green-500/30">
          <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            Product Ready
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 bg-green-900/20 rounded-lg">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Core AI algorithms for script analysis - Complete</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-green-900/20 rounded-lg">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Full storyboard generation pipeline - Live</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-green-900/20 rounded-lg">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Audio suite (dialogue, music, SFX) - Complete</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-green-900/20 rounded-lg">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">UI/UX finalized and user-tested</span>
            </div>
          </div>
        </div>

        {/* Market Validation */}
        <div className="bg-gray-800 p-5 sm:p-6 rounded-xl border border-blue-500/30">
          <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Market Validation
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 bg-blue-900/20 rounded-lg">
              <MessageSquare className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">20+ indie filmmakers interviewed</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-blue-900/20 rounded-lg">
              <Star className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">90% satisfaction rate in beta testing</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-blue-900/20 rounded-lg">
              <Building className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">3 production companies in partnership talks</span>
            </div>
            <div className="flex items-center gap-3 p-2 bg-blue-900/20 rounded-lg">
              <TrendingUp className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-300 text-sm">MVP demo ready for investor presentations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 rounded-xl border border-green-500/30 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-green-400">90%</p>
          <p className="text-xs sm:text-sm text-gray-400">Beta Satisfaction</p>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 rounded-xl border border-blue-500/30 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-blue-400">20+</p>
          <p className="text-xs sm:text-sm text-gray-400">Filmmakers Interviewed</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 rounded-xl border border-purple-500/30 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-purple-400">3</p>
          <p className="text-xs sm:text-sm text-gray-400">Studio Partnerships</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-4 rounded-xl border border-yellow-500/30 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-yellow-400">Live</p>
          <p className="text-xs sm:text-sm text-gray-400">Product Status</p>
        </div>
      </div>

      {/* Next Milestone */}
      <div className="bg-gradient-to-r from-green-900/20 to-gray-800 p-4 sm:p-5 rounded-xl border border-green-500/30">
        <h3 className="text-lg font-bold text-white mb-2">Next Milestone</h3>
        <p className="text-gray-300 text-sm sm:text-base">
          With funding: Launch paid version, scale to <span className="text-green-400 font-bold">500 paying users</span> in 6 months,
          and establish product-market fit for Series A readiness.
        </p>
      </div>
    </div>
  );
};

export default NewSlide4Traction;
