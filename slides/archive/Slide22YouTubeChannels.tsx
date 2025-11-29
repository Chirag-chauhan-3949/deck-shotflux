import React, { useState } from 'react';
import { Youtube, TrendingUp, DollarSign, Target } from 'lucide-react';

const Slide22YouTubeChannels = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const channels = [
    {
      name: 'Film Riot',
      category: 'Filmmaking Tutorials',
      audienceFit: 'Strong',
      format: 'Mid-roll',
      views: '80k-150k',
      slotType: 'Integrated',
      budget: '1.0-1.5L',
      months: 'M3-M5',
      hook: 'Pre-production automation for indie filmmakers',
      cta: '50% off first month',
      offer: 'Free storyboard pack'
    },
    {
      name: 'Lessons from the Screenplay',
      category: 'Screenwriting',
      audienceFit: 'Strong',
      format: 'Mid-roll',
      views: '100k-200k',
      slotType: 'Integrated',
      budget: '1.2-1.8L',
      months: 'M3-M5',
      hook: 'From script to shotlist in minutes',
      cta: 'Try ShotFlux free',
      offer: 'Premium template bundle'
    },
    {
      name: 'StudioBinder',
      category: 'Production Mgmt',
      audienceFit: 'Strong',
      format: 'Dedicated',
      views: '60k-120k',
      slotType: 'Dedicated',
      budget: '1.5-2.5L',
      months: 'M3-M6',
      hook: 'AI-powered pre-production workflow',
      cta: 'Book a demo',
      offer: 'Extended trial + onboarding'
    },
    {
      name: 'Cinecom.net',
      category: 'Filmmaking Hacks',
      audienceFit: 'Medium',
      format: 'Mid-roll',
      views: '50k-120k',
      slotType: 'Integrated',
      budget: '0.8-1.2L',
      months: 'M3-M6',
      hook: 'Hack your pre-production time',
      cta: 'Start creating faster',
      offer: 'Quick-start guide'
    },
    {
      name: 'Indy Mogul',
      category: 'Indie Filmmaking',
      audienceFit: 'Medium',
      format: 'Mid-roll',
      views: '40k-100k',
      slotType: 'Integrated',
      budget: '0.8-1.1L',
      months: 'M3-M6',
      hook: 'Budget filmmaking tool for indies',
      cta: 'Try free for 14 days',
      offer: 'Indie filmmaker bundle'
    },
    {
      name: 'Corridor Crew',
      category: 'VFX & Film',
      audienceFit: 'Broad',
      format: 'Mid-roll',
      views: '300k-600k',
      slotType: 'Integrated',
      budget: '2.5-3.0L',
      months: 'M5-M6',
      hook: 'VFX pre-viz made simple',
      cta: 'See it in action',
      offer: 'VFX storyboard templates'
    },
    {
      name: 'Fireship',
      category: 'AI/Dev Tools',
      audienceFit: 'Medium',
      format: 'Mid-roll',
      views: '200k-400k',
      slotType: 'Integrated',
      budget: '1.8-2.5L',
      months: 'M4-M6',
      hook: 'AI meets filmmaking',
      cta: 'Explore AI tools',
      offer: 'Developer-friendly API'
    },
    {
      name: 'Futurepedia',
      category: 'AI Tools',
      audienceFit: 'Medium',
      format: 'Mid-roll',
      views: '80k-150k',
      slotType: 'Integrated',
      budget: '0.8-1.2L',
      months: 'M3-M6',
      hook: 'Next-gen film pre-production',
      cta: 'Join the waitlist',
      offer: 'Early adopter pricing'
    },
    {
      name: 'Theoretically Media',
      category: 'AI + Video',
      audienceFit: 'Medium',
      format: 'Mid-roll',
      views: '50k-120k',
      slotType: 'Integrated',
      budget: '0.7-1.0L',
      months: 'M3-M6',
      hook: 'AI-powered video pre-production',
      cta: 'Get started today',
      offer: 'AI toolkit bundle'
    }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">YouTube Channel Strategy</h2>
      <p className="text-gray-400 mb-6 sm:mb-8">Priority channels for sponsored content and integrations</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 rounded-lg border border-green-500/30">
          <Youtube className="text-green-400 w-8 h-8 mb-2" />
          <p className="text-2xl font-bold text-white">9 Channels</p>
          <p className="text-sm text-gray-400">Priority partners</p>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 rounded-lg border border-blue-500/30">
          <TrendingUp className="text-blue-400 w-8 h-8 mb-2" />
          <p className="text-2xl font-bold text-white">M3-M6</p>
          <p className="text-sm text-gray-400">Rollout timeline</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 rounded-lg border border-purple-500/30">
          <DollarSign className="text-purple-400 w-8 h-8 mb-2" />
          <p className="text-2xl font-bold text-white">₹12.5L</p>
          <p className="text-sm text-gray-400">Total YT budget (6M)</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-4 rounded-lg border border-yellow-500/30">
          <Target className="text-yellow-400 w-8 h-8 mb-2" />
          <p className="text-2xl font-bold text-white">Capped ₹3L</p>
          <p className="text-sm text-gray-400">Max per month (M5-M6)</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm min-w-[1000px]">
          <thead className="bg-gray-800 sticky top-0">
            <tr>
              <th className="text-left p-3 font-bold text-white">Channel</th>
              <th className="text-left p-3 font-bold text-white">Category</th>
              <th className="text-center p-3 font-bold text-white">Audience Fit</th>
              <th className="text-center p-3 font-bold text-white">Format</th>
              <th className="text-center p-3 font-bold text-white">Est. Views</th>
              <th className="text-center p-3 font-bold text-white">Slot Type</th>
              <th className="text-center p-3 font-bold text-white">Budget (₹)</th>
              <th className="text-center p-3 font-bold text-white">Months</th>
            </tr>
          </thead>
          <tbody>
            {channels.map((channel, index) => (
              <tr
                key={index}
                className={`border-t border-gray-700 transition-all duration-300 cursor-pointer ${
                  hoveredRow === index ? 'bg-green-900/20 border-green-500/50' : index % 2 === 1 ? 'bg-gray-800/50' : ''
                }`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInRow 0.5s ease-in-out forwards',
                  opacity: 0
                }}
              >
                <td className="p-3 text-white font-medium">{channel.name}</td>
                <td className="p-3 text-gray-300">{channel.category}</td>
                <td className="p-3 text-center">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      channel.audienceFit === 'Strong'
                        ? 'bg-green-900/50 text-green-400'
                        : channel.audienceFit === 'Medium'
                        ? 'bg-blue-900/50 text-blue-400'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {channel.audienceFit}
                  </span>
                </td>
                <td className="p-3 text-center text-gray-300">{channel.format}</td>
                <td className="p-3 text-center text-gray-300">{channel.views}</td>
                <td className="p-3 text-center">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      channel.slotType === 'Dedicated' ? 'bg-purple-900/50 text-purple-400' : 'bg-blue-900/50 text-blue-400'
                    }`}
                  >
                    {channel.slotType}
                  </span>
                </td>
                <td className="p-3 text-center text-green-400 font-semibold">{channel.budget}</td>
                <td className="p-3 text-center text-gray-300">{channel.months}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hoveredRow !== null && (
        <div className="mt-6 bg-gradient-to-r from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/50 animate-fadeIn">
          <h3 className="text-lg font-bold text-white mb-3">Creative Brief: {channels[hoveredRow].name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Hook</p>
              <p className="text-sm text-white">{channels[hoveredRow].hook}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Call to Action</p>
              <p className="text-sm text-green-400 font-semibold">{channels[hoveredRow].cta}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Offer</p>
              <p className="text-sm text-blue-400">{channels[hoveredRow].offer}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInRow {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
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

export default Slide22YouTubeChannels;
