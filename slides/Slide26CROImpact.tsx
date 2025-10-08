import React from 'react';
import { ArrowRight, TrendingUp, Users, Target, Zap } from 'lucide-react';

const Slide26CROImpact = () => {
  const beforeFunnel = [
    { stage: 'Impressions', value: 100000 },
    { stage: 'Clicks', value: 1500, rate: '1.5% CTR' },
    { stage: 'Activations', value: 300, rate: '20% Activation' },
    { stage: 'Paid Users', value: 165, rate: '55% Conversion' }
  ];

  const afterFunnel = [
    { stage: 'Impressions', value: 100000 },
    { stage: 'Clicks', value: 1800, rate: '1.8% CTR', improvement: '+20%' },
    { stage: 'Activations', value: 396, rate: '22% Activation', improvement: '+10%' },
    { stage: 'Paid Users', value: 218, rate: '55% Conversion', improvement: '+32%' }
  ];

  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 flex-shrink-0">CRO Impact Analysis</h2>
      <p className="text-gray-400 mb-6 sm:mb-8 flex-shrink-0">
        Expected 20-30% conversion uplift from GoodUI optimization in Months 2-3
      </p>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-gradient-to-br from-red-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-red-500/50">
            <h3 className="text-xl font-bold text-white mb-3">Before CRO</h3>
            <p className="text-4xl font-bold text-red-400 mb-2">165</p>
            <p className="text-sm text-gray-400">Paid users per 100k impressions</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-green-500/50">
            <h3 className="text-xl font-bold text-white mb-3">After CRO</h3>
            <p className="text-4xl font-bold text-green-400 mb-2">218</p>
            <p className="text-sm text-gray-400">Paid users per 100k impressions</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30">
            <Zap className="text-purple-400 w-8 h-8 mb-2" />
            <h3 className="text-lg font-bold text-white mb-2">Total Uplift</h3>
            <p className="text-4xl font-bold text-purple-400">+32%</p>
            <p className="text-sm text-gray-400 mt-1">Additional conversions</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl font-bold text-white mb-6">Funnel Comparison</h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-4 text-center">Before Optimization</h4>
                <div className="space-y-3">
                  {beforeFunnel.map((stage, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/50 p-3 rounded-lg border border-red-500/30"
                      style={{
                        width: `${(stage.value / beforeFunnel[0].value) * 100}%`,
                        minWidth: '50%',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}
                    >
                      <div className="text-center">
                        <p className="text-xs text-gray-400">{stage.stage}</p>
                        <p className="text-lg font-bold text-white">{stage.value.toLocaleString()}</p>
                        {stage.rate && <p className="text-xs text-red-400">{stage.rate}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-green-400 mb-4 text-center">After Optimization</h4>
                <div className="space-y-3">
                  {afterFunnel.map((stage, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/50 p-3 rounded-lg border border-green-500/30 relative"
                      style={{
                        width: `${(stage.value / afterFunnel[0].value) * 100}%`,
                        minWidth: '50%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        animationDelay: `${index * 100}ms`,
                        animation: 'slideIn 0.5s ease-out forwards',
                        opacity: 0
                      }}
                    >
                      <div className="text-center">
                        <p className="text-xs text-gray-400">{stage.stage}</p>
                        <p className="text-lg font-bold text-white">{stage.value.toLocaleString()}</p>
                        {stage.rate && <p className="text-xs text-green-400">{stage.rate}</p>}
                        {stage.improvement && (
                          <p className="text-xs font-bold text-yellow-400 mt-1">{stage.improvement}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div
          className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-all"
          style={{ animationDelay: '0ms', animation: 'fadeIn 0.5s ease-out forwards', opacity: 0 }}
        >
          <TrendingUp className="text-blue-400 w-6 h-6 mb-2" />
          <p className="text-sm text-gray-400">CTR Improvement</p>
          <p className="text-2xl font-bold text-blue-400">+20%</p>
          <p className="text-xs text-gray-500 mt-1">1.5% → 1.8%</p>
        </div>

        <div
          className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all"
          style={{ animationDelay: '100ms', animation: 'fadeIn 0.5s ease-out forwards', opacity: 0 }}
        >
          <Users className="text-green-400 w-6 h-6 mb-2" />
          <p className="text-sm text-gray-400">Activation Lift</p>
          <p className="text-2xl font-bold text-green-400">+10%</p>
          <p className="text-xs text-gray-500 mt-1">20% → 22%</p>
        </div>

        <div
          className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all"
          style={{ animationDelay: '200ms', animation: 'fadeIn 0.5s ease-out forwards', opacity: 0 }}
        >
          <Target className="text-purple-400 w-6 h-6 mb-2" />
          <p className="text-sm text-gray-400">Extra Users/Month</p>
          <p className="text-2xl font-bold text-purple-400">+53</p>
          <p className="text-xs text-gray-500 mt-1">Per 100k impressions</p>
        </div>

        <div
          className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-4 rounded-lg border border-yellow-500/30 hover:border-yellow-500/60 transition-all"
          style={{ animationDelay: '300ms', animation: 'fadeIn 0.5s ease-out forwards', opacity: 0 }}
        >
          <ArrowRight className="text-yellow-400 w-6 h-6 mb-2" />
          <p className="text-sm text-gray-400">Revenue Impact</p>
          <p className="text-2xl font-bold text-yellow-400">+₹1.3L</p>
          <p className="text-xs text-gray-500 mt-1">Additional MRR</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-cyan-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-cyan-500/30">
          <h3 className="text-lg font-bold text-white mb-4">CRO Investment Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
              <span className="text-gray-300 text-sm">GoodUI Consulting</span>
              <span className="text-cyan-400 font-semibold">₹4.15L</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
              <span className="text-gray-300 text-sm">Analytics Tools (Hotjar/Mixpanel)</span>
              <span className="text-cyan-400 font-semibold">₹0.6L</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-700/30 rounded">
              <span className="text-gray-300 text-sm">A/B Testing Implementation</span>
              <span className="text-cyan-400 font-semibold">Included</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-cyan-900/30 rounded border border-cyan-500/50">
              <span className="text-white font-bold text-sm">Total CRO Budget</span>
              <span className="text-cyan-400 font-bold">₹4.75L</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
          <h3 className="text-lg font-bold text-white mb-4">Why This Matters</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span>
                <strong className="text-white">Lower CAC:</strong> Same ad spend yields 32% more users, reducing
                effective CAC from ₹2,800 to ₹2,100
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span>
                <strong className="text-white">Faster Growth:</strong> Reach 500 users faster with same marketing
                budget, accelerating path to profitability
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span>
                <strong className="text-white">Proven ROI:</strong> ₹4.75L investment returns ₹7.8L+ in additional
                revenue over 6 months
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2 mt-1">✓</span>
              <span>
                <strong className="text-white">Compounding Effect:</strong> Improvements apply to all future marketing
                spend, creating lasting value
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-purple-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30">
        <h3 className="text-lg font-bold text-white mb-3">Optimization Timeline</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-700/30 p-3 rounded-lg">
            <p className="text-xs text-gray-400 mb-1">Month 2</p>
            <p className="text-sm font-semibold text-white">Discovery & Analysis</p>
            <p className="text-xs text-gray-500 mt-1">User research, heatmaps, funnel analysis</p>
          </div>
          <div className="bg-gray-700/30 p-3 rounded-lg">
            <p className="text-xs text-gray-400 mb-1">Month 3</p>
            <p className="text-sm font-semibold text-white">Implementation & Testing</p>
            <p className="text-xs text-gray-500 mt-1">A/B tests, UI improvements, messaging</p>
          </div>
          <div className="bg-green-900/30 p-3 rounded-lg border border-green-500/50">
            <p className="text-xs text-gray-400 mb-1">Month 4-6</p>
            <p className="text-sm font-semibold text-green-400">Results & Iteration</p>
            <p className="text-xs text-gray-500 mt-1">20-30% uplift realized, continuous optimization</p>
          </div>
        </div>
      </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Slide26CROImpact;
