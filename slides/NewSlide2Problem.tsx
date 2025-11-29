import React from 'react';
import { Clock, DollarSign, AlertTriangle, Zap } from 'lucide-react';

const NewSlide2Problem = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">The Problem</h2>
      <p className="text-lg text-gray-400 mb-6 sm:mb-8">Pre-production is the bottleneck killing indie filmmaking</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
        {/* Problems */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-red-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-red-500/30">
            <div className="flex items-start gap-3">
              <Clock className="text-red-400 w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">60% Time Wasted on Admin</h3>
                <p className="text-gray-300 text-sm">Script breakdowns, shot lists & scheduling are manual and tedious</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-red-500/30">
            <div className="flex items-start gap-3">
              <DollarSign className="text-red-400 w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Expensive & Error-Prone</h3>
                <p className="text-gray-300 text-sm">Costs and errors increase exponentially with shoot complexity</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-red-500/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-red-400 w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Miscommunication Chaos</h3>
                <p className="text-gray-300 text-sm">Scattered docs and emails lead to on-set confusion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-br from-green-900/40 to-gray-800 p-6 rounded-xl border-2 border-green-500/50">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-green-400 w-10 h-10" />
            <h3 className="text-2xl font-bold text-green-400">ShotFlux Solution</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <div>
                <p className="text-white font-semibold">AI-Automated Breakdowns</p>
                <p className="text-gray-400 text-sm">Script to breakdown in minutes, not days</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <div>
                <p className="text-white font-semibold">Complete Audio-Visual Storyboards</p>
                <p className="text-gray-400 text-sm">Images, dialogue, music & SFX generated automatically</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 text-lg">✓</span>
              <div>
                <p className="text-white font-semibold">Industry-Standard Exports</p>
                <p className="text-gray-400 text-sm">PDFs for every department: casting, props, wardrobe, locations</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
            <p className="text-center text-green-400 font-bold text-lg">
              80%+ Time & Cost Savings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlide2Problem;
