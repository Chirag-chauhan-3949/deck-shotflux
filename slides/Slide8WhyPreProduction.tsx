import React from 'react';
import { Zap, DollarSign, BarChart3, Palette } from 'lucide-react';

const Slide8WhyPreProduction = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Why Pre-Production?</h2>
      <p className="text-lg sm:text-xl text-green-400 mb-6 sm:mb-8 font-semibold">Pre-production attracts investment due to proven, measurable ROI</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg border-l-4 border-green-500">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">⚡ Efficiency and Speed</h3>
          <p className="text-gray-300 text-xs sm:text-sm">AI tools automate time-consuming tasks like script breakdown, scheduling, and budget optimization</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg border-l-4 border-green-500">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">💰 Cost Reduction</h3>
          <p className="text-gray-300 text-xs sm:text-sm">Automating labor-intensive processes offers clear, measurable ROI for production studios</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg border-l-4 border-green-500">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">🎯 Reduced Chaos</h3>
          <p className="text-gray-300 text-xs sm:text-sm">Streamlined workflows eliminate pre-production chaos and miscommunication</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg border-l-4 border-green-500">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">🎨 Augmented Creativity</h3>
          <p className="text-gray-300 text-xs sm:text-sm">AI augments creative decision-making without replacing human talent</p>
        </div>
      </div>
    </div>
  );
};

export default Slide8WhyPreProduction;
