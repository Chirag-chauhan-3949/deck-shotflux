import React from 'react';
import { BarChart3, DollarSign, Zap, Users, Crown, Trophy } from 'lucide-react';

const Slide10CompetitiveFeatures = () => {
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 flex-shrink-0">Competitive Advantage: Feature & Pricing</h2>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {/* Feature Comparison Matrix */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Feature Comparison Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 p-2 text-left">Feature Category</th>
                <th className="border border-gray-700 p-2 text-center">
                  <div className="font-bold text-blue-400">Boords</div>
                  <div className="text-blue-400 text-xs">From $36/mo</div>
                </th>
                <th className="border border-gray-700 p-2 text-center">
                  <div className="flex items-center justify-center">
                    <Crown className="text-green-500 mr-1" size={14} />
                    <span className="font-bold text-green-400">ShotFlux</span>
                  </div>
                  <div className="text-green-500 text-xs">$19/month</div>
                </th>
                <th className="border border-gray-700 p-2 text-center">
                  <div className="font-bold text-purple-400">LTX Studio</div>
                  <div className="text-purple-400 text-xs">$0-125/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* AI & Automation */}
              <tr className="bg-gray-900/50">
                <td className="border border-gray-700 p-2 font-semibold text-gray-300">AI & Automation</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">Limited</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">Advanced</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">Cutting-Edge</td>
              </tr>

              {/* Script-to-Storyboard */}
              <tr className="bg-gray-900/30">
                <td className="border border-gray-700 p-2 text-gray-300">Script-to-Storyboard</td>
                <td className="border border-gray-700 p-2 text-center text-blue-400">✓</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">✓</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">✓</td>
              </tr>

              {/* AI Storyboarding */}
              <tr className="bg-gray-900/50">
                <td className="border border-gray-700 p-2 text-gray-300">AI Storyboarding</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">✗</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">✓</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">✓</td>
              </tr>

              {/* Multiple Visual Styles */}
              <tr className="bg-gray-900/30">
                <td className="border border-gray-700 p-2 text-gray-300">Multiple Visual Styles</td>
                <td className="border border-gray-700 p-2 text-center text-blue-400">✓</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">✓</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">✓</td>
              </tr>

              {/* Video Generation */}
              <tr className="bg-gray-900/50">
                <td className="border border-gray-700 p-2 text-gray-300">Video Generation</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">✗</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">✓</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">✓ Advanced</td>
              </tr>

              {/* Complete Video Pipeline */}
              <tr className="bg-gray-900/30">
                <td className="border border-gray-700 p-2 text-gray-300">Script-to-Edit Workflow</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">✗</td>
                <td className="border border-gray-700 p-2 text-center text-yellow-500">Coming Soon</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">✓</td>
              </tr>

              {/* Audio Features */}
              <tr className="bg-gray-900/50">
                <td className="border border-gray-700 p-2 font-semibold text-gray-300">Audio Features</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">None</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">Complete Suite</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">Limited</td>
              </tr>

              {/* Dialogue Generation */}
              <tr className="bg-gray-900/30">
                <td className="border border-gray-700 p-2 text-gray-300">Dialogue Generation</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">✗</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">✓</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">✗</td>
              </tr>

              {/* Music Generation */}
              <tr className="bg-gray-900/50">
                <td className="border border-gray-700 p-2 text-gray-300">Music Generation</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">✗</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">✓</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">✗</td>
              </tr>

              {/* Sound Effects (SFX) */}
              <tr className="bg-gray-909/30">
                <td className="border border-gray-700 p-2 text-gray-300">Sound Effects (SFX)</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">✗</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">✓</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">✗</td>
              </tr>

              {/* Collaboration Features */}
              <tr className="bg-gray-900/50">
                <td className="border border-gray-700 p-2 font-semibold text-gray-300">Collaboration</td>
                <td className="border border-gray-700 p-2 text-center text-blue-400">Excellent</td>
                <td className="border border-gray-700 p-2 text-center text-yellow-500">Coming Soon</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">Good</td>
              </tr>

              {/* Team Feedback Tools */}
              <tr className="bg-gray-900/30">
                <td className="border border-gray-700 p-2 text-gray-300">Team Feedback Tools</td>
                <td className="border border-gray-700 p-2 text-center text-blue-400">✓ Advanced</td>
                <td className="border border-gray-700 p-2 text-center text-yellow-500">Coming Soon</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">✓</td>
              </tr>

              {/* Export Options */}
              <tr className="bg-gray-900/50">
                <td className="border border-gray-700 p-2 text-gray-300">Export Options</td>
                <td className="border border-gray-700 p-2 text-center text-blue-400">PDF, Image</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">Video, Image, PDF</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">Video</td>
              </tr>

              {/* Character Consistency */}
              <tr className="bg-gray-900/30">
                <td className="border border-gray-700 p-2 text-gray-300">Character Consistency</td>
                <td className="border border-gray-700 p-2 text-center text-gray-500">Manual</td>
                <td className="border border-gray-700 p-2 text-center text-yellow-500">Coming Soon</td>
                <td className="border border-gray-700 p-2 text-center text-purple-400">✓ AI-Powered</td>
              </tr>

              {/* Pricing Model */}
              <tr className="bg-gray-900/50">
                <td className="border border-gray-700 p-2 font-semibold text-gray-300">Pricing Model</td>
                <td className="border border-gray-700 p-2 text-center text-blue-400">Fixed Tiers</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">Fixed $19/mo</td>
                <td className="border border-gray-700 p-2 text-center text-yellow-500">Variable (Computing)</td>
              </tr>

              {/* Availability */}
              <tr className="bg-gray-900/30">
                <td className="border border-gray-700 p-2 font-semibold text-gray-300">Availability</td>
                <td className="border border-gray-700 p-2 text-center text-blue-400">Public</td>
                <td className="border border-gray-700 p-2 text-center text-green-400">Public</td>
                <td className="border border-gray-700 p-2 text-center text-yellow-500">Invite-Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Pricing Advantage & Market Position */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-4 sm:p-6 rounded-xl border border-green-500/30">
          <div className="flex items-center mb-4">
            <DollarSign className="text-green-500 mr-3" size={24} />
            <h3 className="text-xl font-bold text-green-400">Pricing Advantage</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-gray-800/50 p-2 rounded">
              <span className="text-gray-300">ShotFlux</span>
              <span className="text-green-400 font-bold">$19/month</span>
            </div>
            <div className="flex justify-between items-center bg-gray-800/50 p-2 rounded">
              <span className="text-gray-300">Boords</span>
              <span className="text-blue-400">$36/month</span>
              <span className="text-blue-400 text-xs">+89%</span>
            </div>
            <div className="flex justify-between items-center bg-gray-800/50 p-2 rounded">
              <span className="text-gray-300">LTX Studio</span>
              <span className="text-purple-400">$0-125/month</span>
              <span className="text-yellow-500 text-xs">Variable</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-500/20 rounded-lg">
            <p className="text-green-400 text-sm font-semibold">ShotFlux offers predictable pricing with no hidden costs</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-4 sm:p-6 rounded-xl border border-blue-500/30">
          <div className="flex items-center mb-4">
            <Trophy className="text-blue-500 mr-3" size={24} />
            <h3 className="text-xl font-bold text-blue-400">Market Position</h3>
          </div>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="bg-gray-800/50 p-3 rounded">
              <div className="font-semibold text-blue-400 mb-1">Boords</div>
              <p className="text-gray-300 text-xs">Strong: Team collaboration, established platform</p>
              <p className="text-gray-400 text-xs">Weak: Limited AI, no audio features</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded">
              <div className="font-semibold text-green-400 mb-1">ShotFlux</div>
              <p className="text-gray-300 text-xs">Strong: Audio suite, affordable pricing, fast generation</p>
              <p className="text-gray-400 text-xs">Growing: Team features, character consistency in development</p>
            </div>
            <div className="bg-gray-800/50 p-3 rounded">
              <div className="font-semibold text-purple-400 mb-1">LTX Studio</div>
              <p className="text-gray-300 text-xs">Strong: Advanced AI, complete video pipeline</p>
              <p className="text-gray-400 text-xs">Weak: Unpredictable costs, limited access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 p-4 sm:p-6 rounded-xl border border-green-500/30">
        <h3 className="text-xl font-bold text-white mb-4">ShotFlux Unique Advantages</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 mt-1"></div>
            <div>
              <div className="text-green-400 font-semibold text-sm">Complete Audio Suite</div>
              <p className="text-gray-400 text-xs">Only platform with dialogue, music & SFX generation</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 mt-1"></div>
            <div>
              <div className="text-green-400 font-semibold text-sm">Industry Standard Workflow</div>
              <p className="text-gray-400 text-xs">Professional formatting used by AD, casting, location managers, prop masters, wardrobe departments</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 mt-1"></div>
            <div>
              <div className="text-green-400 font-semibold text-sm">Fixed, Transparent Pricing</div>
              <p className="text-gray-400 text-xs">$19/month - no surprises or variable costs</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 mt-1"></div>
            <div>
              <div className="text-green-400 font-semibold text-sm">Public Availability</div>
              <p className="text-gray-400 text-xs">Open access vs. invite-only competitors</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 mt-1"></div>
            <div>
              <div className="text-yellow-400 font-semibold text-sm">Character Consistency</div>
              <p className="text-gray-400 text-xs">Coming Soon - AI-powered character tracking</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 mt-1"></div>
            <div>
              <div className="text-yellow-400 font-semibold text-sm">Team Collaboration</div>
              <p className="text-gray-400 text-xs">Coming Soon - feedback and review tools</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 mt-1"></div>
            <div>
              <div className="text-yellow-400 font-semibold text-sm">Multi-Character Lipsync</div>
              <p className="text-gray-400 text-xs">Coming Soon - advanced dialogue sync</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2 mt-1"></div>
            <div>
              <div className="text-yellow-400 font-semibold text-sm">AI Video Generation Vision</div>
              <p className="text-gray-400 text-xs">Coming Soon - Platform for creating short and long videos 100% using AI with dialogue, music, SFX, and lipsync</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Slide10CompetitiveFeatures;
