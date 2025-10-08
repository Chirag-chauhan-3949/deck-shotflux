
import { Film } from 'lucide-react';

const Slide1Title = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8">
      <Film className="w-16 h-16 sm:w-20 md:w-24 text-green-400 mb-4 sm:mb-6" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">ShotFlux™</h1>
      <p className="text-2xl sm:text-3xl text-gray-300 mb-2 sm:mb-3">From Story to Storyboard</p>
      <p className="text-xl sm:text-2xl text-green-400 mb-6 sm:mb-8 italic">In Minutes, Not Weeks</p>
      <p className="text-base sm:text-lg text-gray-400 mb-2">From script to screen: faster, smarter, more creative</p>
      <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">September 29, 2025 • Mumbai, India</p>
      <p className="text-xs sm:text-sm text-gray-500">Shotflux.com (DATCRAZY LLP)</p>
    </div>
  );
};

export default Slide1Title;
