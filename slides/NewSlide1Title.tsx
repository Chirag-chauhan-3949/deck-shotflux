import React from "react";
import { Film } from "lucide-react";

const NewSlide1Title = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 py-8 min-h-[70vh]">
      <Film className="w-16 h-16 sm:w-20 md:w-24 text-green-400 mb-4 sm:mb-6" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
        ShotFlux™
      </h1>
      <p className="text-2xl sm:text-3xl text-gray-300 mb-2 sm:mb-3">
        From Script to Storyboards
      </p>
      <p className="text-xl sm:text-2xl text-green-400 mb-6 sm:mb-8 italic">
        In Minutes, Not Weeks
      </p>
      <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-6 max-w-2xl mx-auto text-center">
        AI-powered pre-production platform that automates{" "}
        <span className="text-white font-semibold">script breakdown, shotlists & storyboards</span>
        {" "}— saving{" "}
        <span className="text-green-400 font-semibold">80%+ time and costs</span>
        {" "}for filmmakers worldwide.
      </p>

      <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-4 mb-8">
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400">$746B</p>
          <p className="text-xs sm:text-sm text-gray-400">Market by 2030</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400">78%</p>
          <p className="text-xs sm:text-sm text-gray-400">Gross Margin</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400">₹1.25Cr</p>
          <p className="text-xs sm:text-sm text-gray-400">Raising (Seed)</p>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-4">
        Shotflux.com • DATCRAZY LLP • Mumbai, India
      </p>
    </div>
  );
};

export default NewSlide1Title;
