import React, { useState } from 'react';

const Slide23SubredditsGTMPart2 = () => {
  const [filterType, setFilterType] = useState('All');
  const [selectedRow, setSelectedRow] = useState(null);

  const subreddits = [
    {
      name: 'r/VideoEditing',
      audience: 'Editors',
      plan: 'Shotlist → edit pipeline',
      adType: 'Promoted post',
      notes: 'Credit packs offer',
      category: 'Post-Production',
      subscribers: '300k',
      engagement: 'Medium'
    },
    {
      name: 'r/indiefilm',
      audience: 'Indie creators',
      plan: 'Founder AMA + roadmap',
      adType: 'Organic + small promos',
      notes: 'Community for referrals',
      category: 'Community',
      subscribers: '150k',
      engagement: 'High'
    },
    {
      name: 'r/shortfilms',
      audience: 'Short film makers',
      plan: 'Contest & showcase',
      adType: 'Organic + promos',
      notes: 'UGC focus',
      category: 'Community',
      subscribers: '120k',
      engagement: 'Medium'
    },
    {
      name: 'r/vfx',
      audience: 'VFX artists',
      plan: 'Storyboard → VFX prep',
      adType: 'Promoted post',
      notes: 'SFX generation demo',
      category: 'Technical',
      subscribers: '200k',
      engagement: 'Medium'
    },
    {
      name: 'r/AfterEffects',
      audience: 'Motion designers',
      plan: 'Animatics from boards',
      adType: 'Promoted post',
      notes: 'Export templates',
      category: 'Post-Production',
      subscribers: '180k',
      engagement: 'Medium'
    }
  ];

  const filteredSubreddits = filterType === 'All' ? subreddits : subreddits.filter(s => s.category === filterType);
  const categories = ['All', 'Technical', 'Post-Production', 'Community'];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Reddit Go-to-Market Strategy (2 of 2)</h2>
      <p className="text-gray-400 mb-6 sm:mb-8">Continued subreddit targeting and strategy overview</p>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterType(cat)}
            className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
              filterType === cat
                ? 'bg-green-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Table Section - 2/3 width */}
        <div className="lg:col-span-2 overflow-x-auto">
          <table className="w-full text-xs sm:text-sm min-w-[700px]">
            <thead className="bg-gray-800 sticky top-0">
              <tr>
                <th className="text-left p-3 sm:p-4 font-bold text-white">Subreddit</th>
                <th className="text-left p-3 sm:p-4 font-bold text-white">Audience</th>
                <th className="text-left p-3 sm:p-4 font-bold text-white">Plan</th>
                <th className="text-center p-3 sm:p-4 font-bold text-white">Ad Type</th>
                <th className="text-center p-3 sm:p-4 font-bold text-white">Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubreddits.map((sub, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-700 transition-all duration-200 cursor-pointer ${
                    selectedRow === index ? 'bg-orange-900/20 border-orange-500/50' : index % 2 === 1 ? 'bg-gray-800/50' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === index ? null : index)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInRow 0.5s ease-in-out forwards',
                    opacity: 0
                  }}
                >
                  <td className="p-3 sm:p-4 text-orange-400 font-bold">{sub.name}</td>
                  <td className="p-3 sm:p-4 text-gray-300">{sub.audience}</td>
                  <td className="p-3 sm:p-4 text-gray-300 text-xs">{sub.plan}</td>
                  <td className="p-3 sm:p-4 text-center">
                    <span className="px-2 py-1 rounded text-xs bg-blue-900/50 text-blue-400">
                      {sub.adType}
                    </span>
                  </td>
                  <td className="p-3 sm:p-4 text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        sub.category === 'Technical'
                          ? 'bg-purple-900/50 text-purple-400'
                          : sub.category === 'Community'
                          ? 'bg-yellow-900/50 text-yellow-400'
                          : 'bg-blue-900/50 text-blue-400'
                      }`}
                    >
                      {sub.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fixed Strategy Panel - 1/3 width */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-orange-500/50 sticky top-4 h-fit">
            <h3 className="text-lg font-bold text-white mb-4">Strategy Details</h3>
            {selectedRow !== null ? (
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Selected Subreddit</p>
                  <p className="text-lg font-bold text-orange-400">{filteredSubreddits[selectedRow].name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Strategy Notes</p>
                  <p className="text-sm text-gray-300">{filteredSubreddits[selectedRow].notes}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-700/30 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Subscribers</p>
                    <p className="text-sm text-green-400 font-semibold">{filteredSubreddits[selectedRow].subscribers}</p>
                  </div>
                  <div className="bg-gray-700/30 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Engagement</p>
                    <p className={`text-sm font-semibold ${filteredSubreddits[selectedRow].engagement === 'High' ? 'text-green-400' : 'text-yellow-400'}`}>
                      {filteredSubreddits[selectedRow].engagement}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-700/30 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Expected Reach</p>
                  <p className="text-sm text-green-400 font-semibold">
                    {filteredSubreddits[selectedRow].engagement === 'High' ? '5-10k impressions' : '2-5k impressions'}
                  </p>
                </div>
                <div className="bg-gray-700/30 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Est. Monthly Budget</p>
                  <p className="text-sm text-blue-400 font-semibold">
                    {filteredSubreddits[selectedRow].adType.includes('Organic') ? '₹5-10k' : '₹15-25k'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">Click on a row to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Reddit Strategy Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-green-400 mb-3">Organic Tactics</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Weekly showcase threads in r/Filmmakers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Founder AMA in r/indiefilm</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Before/After case studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                <span>Community engagement and support</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-blue-400 mb-3">Paid Promotions</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Promoted posts in high-traffic subreddits</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Targeted demos and tutorials</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Special offers and credit packs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Cross-promotion with YouTube content</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
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

export default Slide23SubredditsGTMPart2;
