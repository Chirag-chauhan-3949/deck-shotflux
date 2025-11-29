import React from 'react';

const Slide3Problem = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10">Problem & Opportunity</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4 sm:mb-6">The Problem</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm sm:text-base">Script breakdown, shot lists & scheduling are manual and tedious</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm sm:text-base">Costs & errors increase with complexity of shoots</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm sm:text-base"><span className="text-red-400 font-bold">60%</span> of time spent on admin, not storytelling</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-4 sm:mb-6">The Opportunity</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm sm:text-base">AI automates breakdowns & shotlists in minutes</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm sm:text-base">Real-time collaboration eliminates miscommunication</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm sm:text-base">SaaS models scale across schools, studios & indie creators</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3Problem;
