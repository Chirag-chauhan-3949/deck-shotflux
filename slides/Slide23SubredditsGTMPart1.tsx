import React, { useState } from 'react';
import { MessageSquare, Target, TrendingUp, Users } from 'lucide-react';

const Slide23SubredditsGTMPart1 = () => {
  const [filterType, setFilterType] = useState('All');
  const [hoveredRow, setHoveredRow] = useState(null);

  const subreddits = [
    {
      name: 'r/Filmmakers',
      audience: 'Filmmakers (pro/amateur)',
      plan: 'Weekly threads, showcase demos',
      adType: 'Promoted post + text',
      notes: 'Strict rules; CTA to demo',
      category: 'Core',
      subscribers: '1.2M',
      engagement: 'High'
    },
    {
      name: 'r/Filmmaking',
      audience: 'Filmmaking workflows',
      plan: 'Q&A + case studies',
      adType: 'Promoted post',
      notes: 'Emphasize time saved',
      category: 'Core',
      subscribers: '800k',
      engagement: 'High'
    },
    {
      name: 'r/Screenwriting',
      audience: 'Writers',
      plan: 'Script → shots case studies',
      adType: 'Promoted post',
      notes: 'Before/After breakdown',
      category: 'Core',
      subscribers: '600k',
      engagement: 'Medium'
    },
    {
      name: 'r/cinematography',
      audience: 'DPs, camera dept',
      plan: 'Scene planning demos',
      adType: 'Promoted + comments',
      notes: 'Visual shotlists',
      category: 'Technical',
      subscribers: '400k',
      engagement: 'High'
    },
    {
      name: 'r/videography',
      audience: 'Videographers',
      plan: 'Tutorials + tool stack',
      adType: 'Promoted post',
      notes: 'Tie-in with YT content',
      category: 'Production',
      subscribers: '350k',
      engagement: 'Medium'
    }
  ];

  const filteredSubreddits = filterType === 'All' ? subreddits : subreddits.filter(s => s.category === filterType);
  const categories = ['All', 'Core', 'Technical', 'Production'];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Reddit Go-to-Market Strategy (1 of 2)</h2>
      <p className="text-gray-400 mb-6 sm:mb-8">Target subreddits for community engagement and paid promotions</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 p-4 rounded-lg border border-orange-500/30">
          <MessageSquare className="text-orange-400 w-8 h-8 mb-2" />
          <p className="text-2xl font-bold text-white">10 Subreddits</p>
          <p className="text-sm text-gray-400">Priority communities</p>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 rounded-lg border border-blue-500/30">
          <Users className="text-blue-400 w-8 h-8 mb-2" />
          <p className="text-2xl font-bold text-white">4.3M+</p>
          <p className="text-sm text-gray-400">Total subscribers</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 rounded-lg border border-green-500/30">
          <Target className="text-green-400 w-8 h-8 mb-2" />
          <p className="text-2xl font-bold text-white">Mixed</p>
          <p className="text-sm text-gray-400">Organic + Paid</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 rounded-lg border border-purple-500/30">
          <TrendingUp className="text-purple-400 w-8 h-8 mb-2" />
          <p className="text-2xl font-bold text-white">High ROI</p>
          <p className="text-sm text-gray-400">Niche targeting</p>
        </div>
      </div>

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

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm min-w-[900px]">
          <thead className="bg-gray-800 sticky top-0">
            <tr>
              <th className="text-left p-3 sm:p-4 font-bold text-white">Subreddit</th>
              <th className="text-left p-3 sm:p-4 font-bold text-white">Audience</th>
              <th className="text-left p-3 sm:p-4 font-bold text-white">Plan</th>
              <th className="text-center p-3 sm:p-4 font-bold text-white">Ad Type</th>
              <th className="text-center p-3 sm:p-4 font-bold text-white">Category</th>
              <th className="text-center p-3 sm:p-4 font-bold text-white">Subscribers</th>
              <th className="text-center p-3 sm:p-4 font-bold text-white">Engagement</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubreddits.map((sub, index) => (
              <tr
                key={index}
                className={`border-t border-gray-700 transition-all duration-300 cursor-pointer ${
                  hoveredRow === index ? 'bg-orange-900/20 border-orange-500/50' : index % 2 === 1 ? 'bg-gray-800/50' : ''
                }`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
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
                      sub.category === 'Core'
                        ? 'bg-green-900/50 text-green-400'
                        : sub.category === 'Technical'
                        ? 'bg-purple-900/50 text-purple-400'
                        : 'bg-blue-900/50 text-blue-400'
                    }`}
                  >
                    {sub.category}
                  </span>
                </td>
                <td className="p-3 sm:p-4 text-center text-gray-300">{sub.subscribers}</td>
                <td className="p-3 sm:p-4 text-center">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      sub.engagement === 'High' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
                    }`}
                  >
                    {sub.engagement}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hoveredRow !== null && (
        <div className="mt-6 bg-gradient-to-r from-orange-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-orange-500/50 animate-fadeIn">
          <h3 className="text-lg font-bold text-white mb-2">Strategy Notes: {filteredSubreddits[hoveredRow].name}</h3>
          <p className="text-sm text-gray-300">{filteredSubreddits[hoveredRow].notes}</p>
          <div className="mt-3 flex gap-4">
            <div className="flex-1">
              <p className="text-xs text-gray-500">Expected Reach</p>
              <p className="text-sm text-green-400 font-semibold">
                {filteredSubreddits[hoveredRow].engagement === 'High' ? '5-10k impressions' : '2-5k impressions'}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500">Est. Monthly Budget</p>
              <p className="text-sm text-blue-400 font-semibold">
                {filteredSubreddits[hoveredRow].adType.includes('Organic') ? '₹5-10k' : '₹15-25k'}
              </p>
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

export default Slide23SubredditsGTMPart1;
