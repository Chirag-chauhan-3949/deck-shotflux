import React from 'react';
import { Users, Film, Code, Briefcase, Building } from 'lucide-react';

const NewSlide10Team = () => {
  const team = [
    {
      name: 'Agnimitra Sharma',
      role: 'Film Industry Expert',
      desc: 'Shaping platform with industry insights',
      icon: Film,
      color: 'green'
    },
    {
      name: 'Purushottam Kiri',
      role: 'Product & Development',
      desc: 'Built ShotFlux UI, UX & core platform',
      icon: Code,
      color: 'blue'
    },
    {
      name: 'Dushyant Kiri',
      role: 'Business Development',
      desc: 'Investor relations & fund management',
      icon: Briefcase,
      color: 'purple'
    },
    {
      name: 'Abhishek Sharma',
      role: 'Business Development',
      desc: 'Commercial strategy & partnerships',
      icon: Briefcase,
      color: 'yellow'
    }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">The Team</h2>

      {/* Founding Team */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {team.map((member, index) => {
          const Icon = member.icon;
          return (
            <div
              key={index}
              className={`bg-gray-800 p-4 rounded-xl border border-${member.color}-500/30 hover:border-${member.color}-500/60 transition-all`}
            >
              <div className={`bg-${member.color}-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                <Icon className={`text-${member.color}-400 w-6 h-6`} />
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className={`text-${member.color}-400 text-sm mb-1`}>{member.role}</p>
              <p className="text-gray-400 text-xs">{member.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Partners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-5 rounded-xl border border-purple-500/30">
          <div className="flex items-center gap-3 mb-3">
            <Building className="text-purple-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold text-white">Whirlwind.co.in</h3>
              <p className="text-purple-400 text-sm">Marketing Partner</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Full-stack digital marketing agency led by CEO Saumil Patel, managing marketing for major fintech firms.
          </p>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2">
            <p className="text-green-400 text-sm font-semibold text-center">✓ Agreement reached for growth partnership</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-5 rounded-xl border border-blue-500/30">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-blue-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold text-white">Advisory Network</h3>
              <p className="text-blue-400 text-sm">Industry Guidance</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-3">
            Film industry veterans and tech entrepreneurs providing strategic guidance on product and market positioning.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2">
            <p className="text-blue-400 text-sm font-semibold text-center">Building advisory board post-funding</p>
          </div>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <p className="text-3xl font-bold text-green-400">4</p>
          <p className="text-gray-400 text-sm">Co-Founders</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <p className="text-3xl font-bold text-blue-400">Film + Tech</p>
          <p className="text-gray-400 text-sm">Domain Expertise</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl text-center">
          <p className="text-3xl font-bold text-purple-400">1</p>
          <p className="text-gray-400 text-sm">Growth Partner</p>
        </div>
      </div>
    </div>
  );
};

export default NewSlide10Team;
