import React from 'react';
import { Film, Mail, Phone, Globe, Play } from 'lucide-react';

const NewSlide12ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 py-8 min-h-[70vh]">
      <Film className="w-16 h-16 sm:w-20 text-green-400 mb-4" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
        ShotFlux™
      </h1>
      <p className="text-xl sm:text-2xl text-green-400 mb-8 italic">
        From Story to Film, In Minutes
      </p>

      {/* Key Stats Reminder */}
      <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 max-w-2xl">
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400">₹1.25Cr</p>
          <p className="text-xs sm:text-sm text-gray-400">Raising</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-blue-400">25%</p>
          <p className="text-xs sm:text-sm text-gray-400">Equity</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-purple-400">500</p>
          <p className="text-xs sm:text-sm text-gray-400">Users in 6mo</p>
        </div>
      </div>

      {/* Demo Link */}
      <a
        href="https://shotflux.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all transform hover:scale-105 shadow-lg mb-8 flex items-center gap-3"
      >
        <Play className="w-6 h-6" />
        Try Live Demo
      </a>

      {/* Contact Info */}
      <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 max-w-lg w-full mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Mail className="w-5 h-5 text-green-400" />
            <span>founders@shotflux.com</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Phone className="w-5 h-5 text-green-400" />
            <span>+91 98935 11135 (Dushyant)</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-300">
            <Globe className="w-5 h-5 text-green-400" />
            <span>shotflux.com</span>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <p className="text-gray-500 text-sm">
        DATCRAZY LLP • Mumbai, India
      </p>

      <p className="text-green-400 font-semibold mt-6 text-lg">
        Thank you for your time!
      </p>
    </div>
  );
};

export default NewSlide12ThankYou;
