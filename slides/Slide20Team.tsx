import React from 'react';
import { Users, Award, Target, Cpu, TrendingUp } from 'lucide-react';

const Slide19Team = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Founding Members & Partners</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3 sm:mb-4">Core Team</h3>
          <div className="space-y-2 sm:space-y-3">
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
              <p className="text-base sm:text-lg font-bold text-white mb-1">Agnimitra Sharma</p>
              <p className="text-green-400 mb-1 text-xs sm:text-sm">Film Industry Expert & Filmmaker</p>
              <p className="text-gray-300 text-xs">Shaping platform with industry insights</p>
            </div>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
              <p className="text-base sm:text-lg font-bold text-white mb-1">Purushottam Kiri</p>
              <p className="text-green-400 mb-1 text-xs sm:text-sm">Product Development & Design</p>
              <p className="text-gray-300 text-xs">Crafted ShotFlux™ UI, UX & Development</p>
            </div>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
              <p className="text-base sm:text-lg font-bold text-white mb-1">Dushyant Kiri</p>
              <p className="text-green-400 mb-1 text-xs sm:text-sm">Business Development Manager</p>
              <p className="text-gray-300 text-xs">Investor relations & fund management</p>
            </div>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
              <p className="text-base sm:text-lg font-bold text-white mb-1">Abhishek Sharma</p>
              <p className="text-green-400 mb-1 text-xs sm:text-sm">Business Development Manager</p>
              <p className="text-gray-300 text-xs">Investor meetups & commercial insights</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3 sm:mb-4">Marketing Partner</h3>
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-purple-500/30">
            <p className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Whirlwind.co.in</p>
            <p className="text-gray-300 mb-2 sm:mb-3 text-xs sm:text-sm">Trusted full-stack digital marketing agency</p>
            <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">Led by CEO Saumil Patel, managing digital marketing for major fintech firms</p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 sm:p-3">
              <p className="text-green-400 font-semibold text-xs sm:text-sm">✓ Initial verbal agreement reached</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-6">
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-3 sm:mb-4">Advisors</h3>
            <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
              <p className="text-base sm:text-lg font-bold text-white mb-1">Industry Veterans</p>
              <p className="text-gray-300 text-xs sm:text-sm">Film industry veterans and tech entrepreneurs providing strategic guidance</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-blue-500/30 text-center">
          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">4</p>
          <p className="text-gray-400 text-xs sm:text-sm">Founders</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-green-500/30 text-center">
          <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">10+</p>
          <p className="text-gray-400 text-xs sm:text-sm">Years Combined Experience</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-5 rounded-lg border border-purple-500/30 text-center">
          <Target className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">1</p>
          <p className="text-gray-400 text-xs sm:text-sm">Strategic Partner</p>
        </div>
      </div>
    </div>
  );
};

export default Slide19Team;
