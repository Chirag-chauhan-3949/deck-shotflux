import React from 'react';
import { Crown, Check, X } from 'lucide-react';

const NewSlide6Competition = () => {
  // Verified pricing (Nov 2025):
  // ShotFlux: Credit packs - $9 (500cr), $32 (2000cr), $70 (5000cr) - no subscription yet
  // Storyboarder.ai: $39-349/mo (Starter $39-49, Pro $99-129, Production $279-349)
  // Boords: $9-49/mo (Lite $9, Standard $44-49)
  // LTX Studio: $0-125/mo (Free, Lite $12-15, Standard $28-35, Pro $100-125)

  const features = [
    { name: 'AI Storyboarding', shotflux: true, storyboarder: true, boords: true, ltx: true },
    { name: 'Script-to-Storyboard', shotflux: true, storyboarder: true, boords: true, ltx: true },
    { name: 'Director Style Profiles', shotflux: true, storyboarder: false, boords: false, ltx: false },
    { name: 'Dialogue/Voiceover', shotflux: true, storyboarder: false, boords: false, ltx: true },
    { name: 'Music Generation', shotflux: true, storyboarder: false, boords: false, ltx: true },
    { name: 'Sound Effects (SFX)', shotflux: true, storyboarder: false, boords: false, ltx: true },
    { name: 'Animatic/PDF Export', shotflux: true, storyboarder: true, boords: true, ltx: true },
    { name: 'Character Consistency', shotflux: 'soon', storyboarder: true, boords: true, ltx: true },
  ];

  const FeatureIcon = ({ value }: { value: boolean | string }) => {
    if (value === true) return <Check className="text-green-400 w-4 h-4" />;
    if (value === false) return <X className="text-gray-500 w-4 h-4" />;
    if (value === 'soon') return <span className="text-yellow-400 text-[10px] font-semibold">SOON</span>;
    return null;
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Competitive Landscape</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Comparison Table */}
        <div className="lg:col-span-2 overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="bg-gray-800">
                <th className="text-left p-2 font-bold text-white">Feature</th>
                <th className="text-center p-2">
                  <div className="flex items-center justify-center gap-1">
                    <Crown className="text-green-400 w-3 h-3" />
                    <span className="font-bold text-green-400 text-xs">ShotFlux</span>
                  </div>
                  <div className="text-green-400 text-[10px] font-normal">$9-70 packs</div>
                </th>
                <th className="text-center p-2">
                  <span className="font-bold text-orange-400 text-xs">Storyboarder</span>
                  <div className="text-orange-400 text-[10px] font-normal">$39-349/mo</div>
                </th>
                <th className="text-center p-2">
                  <span className="font-bold text-blue-400 text-xs">Boords</span>
                  <div className="text-blue-400 text-[10px] font-normal">$9-49/mo</div>
                </th>
                <th className="text-center p-2">
                  <span className="font-bold text-purple-400 text-xs">LTX Studio</span>
                  <div className="text-purple-400 text-[10px] font-normal">$0-125/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={`border-t border-gray-700 ${index % 2 === 0 ? 'bg-gray-900/30' : 'bg-gray-900/50'}`}>
                  <td className="p-2 text-gray-300 text-xs">{feature.name}</td>
                  <td className="p-2 text-center"><FeatureIcon value={feature.shotflux} /></td>
                  <td className="p-2 text-center"><FeatureIcon value={feature.storyboarder} /></td>
                  <td className="p-2 text-center"><FeatureIcon value={feature.boords} /></td>
                  <td className="p-2 text-center"><FeatureIcon value={feature.ltx} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Advantages */}
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-3 rounded-xl border border-green-500/30">
            <h3 className="text-sm font-bold text-green-400 mb-2">Why ShotFlux Wins</h3>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300"><span className="text-white font-semibold">Only</span> platform with Director Style Profiles</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300"><span className="text-white font-semibold">Complete audio</span> (unlike Storyboarder/Boords)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300"><span className="text-white font-semibold">Pay-as-you-go</span> - no monthly commitment</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <p className="text-gray-300"><span className="text-white font-semibold">$9 entry</span> vs $39/mo competitors</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-3 rounded-xl border border-yellow-500/30">
            <h3 className="text-sm font-bold text-yellow-400 mb-2">Coming Soon</h3>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-yellow-400">→</span>
                <p className="text-gray-300">Character consistency across scenes</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-400">→</span>
                <p className="text-gray-300">Subscription plans</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Positioning Statement */}
      <div className="bg-gradient-to-r from-green-900/20 to-gray-800 p-3 rounded-xl border border-green-500/30">
        <p className="text-center text-gray-300 text-sm">
          <span className="text-green-400 font-bold">ShotFlux</span> =
          <span className="text-white font-semibold"> Director-style AI storyboards + complete audio</span> with
          <span className="text-white font-semibold"> pay-as-you-go flexibility</span>
        </p>
      </div>
    </div>
  );
};

export default NewSlide6Competition;
