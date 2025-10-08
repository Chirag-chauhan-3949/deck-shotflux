import React from 'react';
import { Users, MousePointerClick, UserCheck, CreditCard } from 'lucide-react';

const Slide8ConversionFunnel = () => {
  const funnelStages = [
    { stage: 'Impressions', value: 100000, icon: Users, color: 'blue', percentage: 100 },
    { stage: 'Clicks', value: 1500, icon: MousePointerClick, color: 'purple', percentage: 1.5, conversionRate: '1.5% CTR' },
    { stage: 'Activations', value: 300, icon: UserCheck, color: 'green', percentage: 20, conversionRate: '20% Activation' },
    { stage: 'Paid Users', value: 165, icon: CreditCard, color: 'yellow', percentage: 55, conversionRate: '55% Convert to Paid' }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Conversion Funnel</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-4 w-full max-w-xl mx-auto lg:mx-0">
          {funnelStages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <div
                key={index}
                className="relative transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeIn 0.5s ease-in-out forwards',
                  opacity: 0
                }}
              >
                <div
                  className={`bg-gradient-to-r from-${stage.color}-900/40 to-gray-800 p-4 sm:p-5 rounded-xl border-2 border-${stage.color}-500/50 relative overflow-hidden w-full`}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <Icon className={`text-${stage.color}-400 w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0`} />
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{stage.stage}</h3>
                        {stage.conversionRate && (
                          <p className="text-xs sm:text-sm text-gray-400">{stage.conversionRate}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-white">{stage.value.toLocaleString()}</p>
                  </div>
                  <div className={`absolute inset-0 bg-${stage.color}-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
                {index < funnelStages.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="text-gray-500 text-2xl">↓</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Funnel Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                <span className="text-gray-300 text-sm sm:text-base">Click-Through Rate</span>
                <span className="text-blue-400 font-bold text-lg">1.5%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                <span className="text-gray-300 text-sm sm:text-base">Activation Rate</span>
                <span className="text-green-400 font-bold text-lg">20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                <span className="text-gray-300 text-sm sm:text-base">Paid Conversion</span>
                <span className="text-yellow-400 font-bold text-lg">55%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-900/30 rounded-lg border border-green-500/50">
                <span className="text-white font-bold text-sm sm:text-base">Overall Conversion</span>
                <span className="text-green-400 font-bold text-xl">0.165%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Optimization Strategy</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>CRO optimization in M2-M3 to improve activation rate</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>A/B testing landing pages for higher CTR</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Onboarding improvements to boost paid conversion</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Expected 20-30% uplift post-optimization</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-blue-500/30">
            <h3 className="text-lg font-bold text-white mb-2">Monthly Target</h3>
            <p className="text-3xl sm:text-4xl font-bold text-green-400">165 New Users</p>
            <p className="text-sm text-gray-400 mt-1">From 100k impressions per month (Month 3)</p>
          </div>
        </div>
      </div>

      <style jsx>{`
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

export default Slide8ConversionFunnel;
