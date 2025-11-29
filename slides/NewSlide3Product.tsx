import React from 'react';
import {
  FileText,
  Sparkles,
  Image,
  List,
  Film,
  Download,
  ArrowRight,
  Zap,
  Users,
  MapPin,
  Package,
  Shirt
} from 'lucide-react';

const NewSlide3Product = () => {
  const workflowSteps = [
    { icon: FileText, title: 'Upload Script', desc: 'Paste or upload screenplay', type: 'input' },
    { icon: Sparkles, title: 'AI Extraction', desc: 'Characters, locations, props, costumes', type: 'ai' },
    { icon: Image, title: 'Visual Generation', desc: 'AI creates images for all entities', type: 'ai' },
    { icon: List, title: 'Shotlist', desc: 'Camera, dialogue, SFX presets', type: 'ai' },
    { icon: Film, title: 'Storyboard', desc: 'Synced images + audio', type: 'ai' },
    { icon: Download, title: 'Export', desc: 'Video, PDFs, images', type: 'output' },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">How ShotFlux Works</h2>
      <p className="text-lg text-green-400 mb-6 font-semibold">From Script to Production-Ready Assets in Minutes</p>

      {/* Workflow Pipeline */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          const bgColor = step.type === 'input' ? 'from-blue-900/40 to-blue-800/30' :
                         step.type === 'output' ? 'from-purple-900/40 to-purple-800/30' :
                         'from-green-900/40 to-green-800/30';
          const borderColor = step.type === 'input' ? 'border-blue-500/50' :
                             step.type === 'output' ? 'border-purple-500/50' :
                             'border-green-500/50';
          const iconColor = step.type === 'input' ? 'text-blue-400' :
                           step.type === 'output' ? 'text-purple-400' :
                           'text-green-400';

          return (
            <React.Fragment key={index}>
              <div className={`bg-gradient-to-br ${bgColor} p-3 sm:p-4 rounded-xl border ${borderColor} text-center min-w-[100px] sm:min-w-[120px]`}>
                <Icon className={`${iconColor} w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2`} />
                <p className="text-white font-semibold text-xs sm:text-sm">{step.title}</p>
                <p className="text-gray-400 text-xs hidden sm:block">{step.desc}</p>
                {step.type === 'ai' && (
                  <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 bg-green-500/20 rounded text-xs text-green-400">
                    <Zap className="w-3 h-3" /> AI
                  </span>
                )}
              </div>
              {index < workflowSteps.length - 1 && (
                <ArrowRight className="text-gray-600 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* What Gets Generated */}
        <div className="bg-gray-800 p-4 sm:p-5 rounded-xl border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">Auto-Generated Assets</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <Users className="text-purple-400 w-5 h-5" />
              <span className="text-gray-300 text-sm">Character Sheets</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <MapPin className="text-orange-400 w-5 h-5" />
              <span className="text-gray-300 text-sm">Location Guides</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <Package className="text-cyan-400 w-5 h-5" />
              <span className="text-gray-300 text-sm">Props List</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <Shirt className="text-pink-400 w-5 h-5" />
              <span className="text-gray-300 text-sm">Costume Breakdown</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <Film className="text-green-400 w-5 h-5" />
              <span className="text-gray-300 text-sm">Video Storyboard</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg">
              <List className="text-blue-400 w-5 h-5" />
              <span className="text-gray-300 text-sm">Complete Shotlist</span>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-green-500/30">
          <h3 className="text-lg font-bold text-white mb-4">Only Platform With</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-lg">✓</span>
              <div>
                <p className="text-white font-semibold">Complete Audio Suite</p>
                <p className="text-gray-400 text-xs">Dialogue, music & SFX generation</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-lg">✓</span>
              <div>
                <p className="text-white font-semibold">Industry-Standard Workflow</p>
                <p className="text-gray-400 text-xs">Used by AD, casting, location managers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-lg">✓</span>
              <div>
                <p className="text-white font-semibold">Fixed Pricing at $19/mo</p>
                <p className="text-gray-400 text-xs">No surprise costs or credits that run out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlide3Product;
