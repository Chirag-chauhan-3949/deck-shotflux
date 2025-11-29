import React from 'react';
import { Target, Users, Youtube, GraduationCap, Share2 } from 'lucide-react';

const NewSlide7GoToMarket = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Go-to-Market Strategy</h2>

      {/* Target Segments */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center">
          <Target className="text-green-400 w-8 h-8 mx-auto mb-2" />
          <p className="text-white font-bold">Indie Filmmakers</p>
          <p className="text-gray-400 text-xs">Short films, music videos</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center">
          <Users className="text-blue-400 w-8 h-8 mx-auto mb-2" />
          <p className="text-white font-bold">Content Creators</p>
          <p className="text-gray-400 text-xs">YouTube, social media</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center">
          <GraduationCap className="text-purple-400 w-8 h-8 mx-auto mb-2" />
          <p className="text-white font-bold">Film Schools</p>
          <p className="text-gray-400 text-xs">Students & curriculum</p>
        </div>
      </div>

      {/* 4 Channel Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-red-900/20 to-gray-800 p-4 sm:p-5 rounded-xl border border-red-500/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-red-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">1</div>
            <h3 className="text-lg font-bold text-white">Paid Ads</h3>
          </div>
          <p className="text-green-400 font-semibold mb-2">₹19.5L over 6 months</p>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Reddit: r/Filmmakers, r/Screenwriting</li>
            <li>• Facebook & Instagram targeted</li>
            <li>• Google Ads for "storyboard software"</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-gray-800 p-4 sm:p-5 rounded-xl border border-purple-500/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">2</div>
            <h3 className="text-lg font-bold text-white">YouTube Partnerships</h3>
          </div>
          <p className="text-green-400 font-semibold mb-2">₹12.5L for influencer collabs</p>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Film Riot, Lessons from Screenplay</li>
            <li>• AI-focused: Fireship, Futurepedia</li>
            <li>• 20% affiliate commission model</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-gray-800 p-4 sm:p-5 rounded-xl border border-blue-500/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">3</div>
            <h3 className="text-lg font-bold text-white">Film Schools</h3>
          </div>
          <p className="text-green-400 font-semibold mb-2">Educational partnerships</p>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• FTII, SRFTI, Whistling Woods</li>
            <li>• Student discount programs</li>
            <li>• Curriculum integration</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-900/20 to-gray-800 p-4 sm:p-5 rounded-xl border border-green-500/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">4</div>
            <h3 className="text-lg font-bold text-white">Community & Referrals</h3>
          </div>
          <p className="text-green-400 font-semibold mb-2">20% referral bonus</p>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Creator spotlight program</li>
            <li>• Success story campaigns</li>
            <li>• Community-driven growth</li>
          </ul>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-3">Conversion Funnel</h3>
        <div className="flex items-center justify-between text-center">
          <div>
            <p className="text-2xl font-bold text-blue-400">100K</p>
            <p className="text-xs text-gray-400">Impressions</p>
          </div>
          <span className="text-gray-500">→</span>
          <div>
            <p className="text-2xl font-bold text-purple-400">1.5K</p>
            <p className="text-xs text-gray-400">Clicks (1.5%)</p>
          </div>
          <span className="text-gray-500">→</span>
          <div>
            <p className="text-2xl font-bold text-yellow-400">300</p>
            <p className="text-xs text-gray-400">Activations (20%)</p>
          </div>
          <span className="text-gray-500">→</span>
          <div>
            <p className="text-2xl font-bold text-green-400">165</p>
            <p className="text-xs text-gray-400">Paid (55%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlide7GoToMarket;
