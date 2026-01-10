import React from 'react';
import { TrendingUp, Users, Target, BarChart3 } from 'lucide-react';

const Slide15GoToMarket = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10">Multi-Channel Go-to-Market</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <div className="bg-gradient-to-br from-red-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-red-500/30">
          <div className="bg-red-500 text-white text-sm sm:text-base font-bold py-1 px-3 rounded-full inline-block mb-4">1</div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Paid Advertising</h3>
          <p className="text-base sm:text-lg text-green-400 mb-3">Initial Push: ₹6L/month</p>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm">
            <p>• Hyper-targeted ads on Reddit, Facebook, Instagram</p>
            <p>• Key Subreddits: r/Filmmakers, r/Screenwriting, r/Storyboarding</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30">
          <div className="bg-purple-500 text-white text-sm sm:text-base font-bold py-1 px-3 rounded-full inline-block mb-4">2</div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">YouTube Partnerships</h3>
          <p className="text-base sm:text-lg text-green-400 mb-3">Affiliate Collaborations</p>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm">
            <p>• Filmmaking: Lessons from the Screenplay, Film Riot</p>
            <p>• AI-Focused: Fireship, Futurepedia, Theoretically Media</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-6 sm:mt-10">
        <div className="bg-gradient-to-br from-blue-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-blue-500/30">
          <div className="bg-blue-500 text-white text-sm sm:text-base font-bold py-1 px-3 rounded-full inline-block mb-4">3</div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Film School Partnerships</h3>
          <p className="text-base sm:text-lg text-green-400 mb-3">Educational Institution Outreach</p>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm">
            <p>• FTII, SRFTI, and regional film schools</p>
            <p>• Student discount programs and curriculum integration</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
          <div className="bg-green-500 text-white text-sm sm:text-base font-bold py-1 px-3 rounded-full inline-block mb-4">4</div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Community Building</h3>
          <p className="text-base sm:text-lg text-green-400 mb-3">User-Generated Content & Referrals</p>
          <div className="space-y-2 text-gray-300 text-xs sm:text-sm">
            <p>• 20% referral bonus program for early adopters</p>
            <p>• Creator spotlight program and success story campaigns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide15GoToMarket;
