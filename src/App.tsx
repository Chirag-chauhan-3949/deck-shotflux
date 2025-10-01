// Update one 
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Target, Cpu, TrendingUp, DollarSign, Film, Zap, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add custom scrollbar styles
  useEffect(() => {
    const style = document.createElement('style');
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const slides = [
    // Slide 1: Title
    {
      component: () => (
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <Film className="w-16 h-16 sm:w-20 md:w-24 text-green-400 mb-4 sm:mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">ShotFlux™</h1>
          <p className="text-2xl sm:text-3xl text-gray-300 mb-2 sm:mb-3">From Story to Storyboard</p>
          <p className="text-xl sm:text-2xl text-green-400 mb-6 sm:mb-8 italic">In Minutes, Not Weeks</p>
          <p className="text-base sm:text-lg text-gray-400 mb-2">From script to screen: faster, smarter, more creative</p>
          <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">September 29, 2025 • Mumbai, India</p>
          <p className="text-xs sm:text-sm text-gray-500">Shotflux.com (DATCRAZY LLP)</p>
        </div>
      )
    },
    
    // Slide 2: Executive Summary
    {
      component: () => (
        <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
              <Users className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Massive Addressable Market</h3>
              <p className="text-gray-300 text-sm sm:text-base">Video production is booming, projected to reach over $746B by 2030</p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
              <Target className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Clear Pain & Need</h3>
              <p className="text-gray-300 text-sm sm:text-base">Pre-production remains manual and costly; AI saves time & money</p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
              <Cpu className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Unique AI Platform</h3>
              <p className="text-gray-300 text-sm sm:text-base">ShotFlux™ automates breakdowns, shotlists & storyboards in minutes</p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/20 hover:border-green-500/50 transition-all">
              <TrendingUp className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Compelling Growth Path</h3>
              <p className="text-gray-300 text-sm sm:text-base">Scalable SaaS with high margins, expanding beyond film schools</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Problem
    {
      component: () => (
        <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10">Problem & Opportunity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
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
      )
    },

    // Slide 4: Solution
    {
      component: () => (
        <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10">Solution & Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
              <Cpu className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">AI Script Breakdown</h3>
              <p className="text-gray-300 text-sm sm:text-base">Identify characters, scenes, props & sets automatically</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
              <Zap className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Smart Shotlists</h3>
              <p className="text-gray-300 text-sm sm:text-base">Generate detailed shot lists with durations & departments</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
              <Film className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Visual Storyboards</h3>
              <p className="text-gray-300 text-sm sm:text-base">Create AI-assisted storyboards for each scene</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
              <Users className="w-8 h-8 sm:w-10 md:h-10 text-green-400 mb-2 sm:mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Collaborative Platform</h3>
              <p className="text-gray-300 text-sm sm:text-base">Invite teams, comment, and iterate in real-time</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Scalability
    {
      component: () => (
        <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10">Built to Scale</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-blue-500/30">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white font-bold text-base sm:text-lg py-1 sm:py-2 px-2 sm:px-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Auto-Scaling Infrastructure</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Current infrastructure is highly scalable and auto-scales with growing users. Completely hands-off, ensuring seamless performance as we grow from hundreds to thousands of concurrent users.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-start">
                <div className="bg-purple-500 text-white font-bold text-base sm:text-lg py-1 sm:py-2 px-2 sm:px-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Modular & Swappable AI Stack</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Modular and swappable structure for all in-app AI operations. We can switch to the latest and greatest models within days of new model launches, ensuring we always deliver cutting-edge performance.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
              <div className="flex items-start">
                <div className="bg-green-500 text-white font-bold text-base sm:text-lg py-1 sm:py-2 px-2 sm:px-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Enterprise-Grade Backend</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Supabase as backend, currently on Pro plan, soon to switch to Enterprise with Service Level Agreement and 99.99% uptime guarantee. Full digital privacy compliance and data protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: User Feedback
    {
      component: () => (
        <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-10">We Value User Feedback</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-green-500/30">
              <div className="flex items-start">
                <div className="bg-green-500 text-white font-bold text-base sm:text-lg py-1 sm:py-2 px-2 sm:px-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Non-Invasive Feedback Collection</h3>
                  <p className="text-gray-300 text-sm sm:text-base">All in-app operations end with a small, non-invasive feedback card, giving us a clear idea of what users love and what needs work. Every interaction is an opportunity to improve.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-blue-500/30">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white font-bold text-base sm:text-lg py-1 sm:py-2 px-2 sm:px-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Rapid Development Cycles</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Rapid dev cycles ensure that new features are shipped quickly. Users are informed of new versions with full changelog, keeping them in the loop on every improvement.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30">
              <div className="flex items-start">
                <div className="bg-purple-500 text-white font-bold text-base sm:text-lg py-1 sm:py-2 px-2 sm:px-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Transparent Product Evolution</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Changelog viewable inside the app. <span className="text-purple-400 font-bold">40+ updates</span> pushed between January 2025 to June 2025, showing our commitment to continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Market Size
    {
      component: () => {
        const marketData = [
          { year: '2023', value: 1.4 },
          { year: '2025', value: 2.3 },
          { year: '2027', value: 3.6 },
          { year: '2029', value: 5.6 },
          { year: '2031', value: 8.9 },
          { year: '2033', value: 14.1 }
        ];
        return (
          <div className="px-12 py-4">
            <h2 className="text-4xl font-bold text-white mb-6">Market Landscape & Growth</h2>
            <div className="grid grid-cols-2 gap-8 items-center">
              <div>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }} />
                    <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-gray-400 mt-2 text-xs">AI in Film Market (USD Billion)</p>
              </div>
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-4xl font-bold text-green-400 mb-1">$14.1B</p>
                  <p className="text-sm text-gray-300">AI in Film by 2033 (25.7% CAGR)</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-4xl font-bold text-blue-400 mb-1">$97B</p>
                  <p className="text-sm text-gray-300">Virtual Production by 2032</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <p className="text-4xl font-bold text-purple-400 mb-1">$99.48B</p>
                  <p className="text-sm text-gray-300">AI in M&E by 2030</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500 space-y-0.5">
              <p>Sources: market.us/report/ai-in-film-market/</p>
              <p>fortunebusinessinsights.com/virtual-production-market</p>
              <p>grandviewresearch.com AI in media & entertainment</p>
            </div>
          </div>
        );
      }
    },

    // Slide 8: Why Pre-Production
    {
      component: () => (
        <div className="px-12 py-6">
          <h2 className="text-4xl font-bold text-white mb-8">Why Pre-Production?</h2>
          <p className="text-xl text-green-400 mb-8 font-semibold">Pre-production attracts investment due to proven, measurable ROI</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-white mb-2">⚡ Efficiency and Speed</h3>
              <p className="text-gray-300 text-sm">AI tools automate time-consuming tasks like script breakdown, scheduling, and budget optimization</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-white mb-2">💰 Cost Reduction</h3>
              <p className="text-gray-300 text-sm">Automating labor-intensive processes offers clear, measurable ROI for production studios</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-white mb-2">📊 Data-Driven Insights</h3>
              <p className="text-gray-300 text-sm">Predictive analytics forecast box office success and audience reception with increased accuracy</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-white mb-2">🎨 Augmented Creativity</h3>
              <p className="text-gray-300 text-sm">AI augments creative decision-making without replacing human talent</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Competitive Landscape
    {
      component: () => (
        <div className="px-12 py-6">
          <h2 className="text-4xl font-bold text-white mb-8">Competitive Landscape</h2>
          <div className="overflow-hidden rounded-xl border border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-800">
                <tr>
                  <th className="text-left p-3 font-bold text-white">Feature</th>
                  <th className="text-left p-3 font-bold text-gray-400">Manual Workflow</th>
                  <th className="text-left p-3 font-bold text-gray-400">Generic Software</th>
                  <th className="text-left p-3 font-bold text-green-400">ShotFlux™</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="p-3 text-white font-semibold">Script Breakdown</td>
                  <td className="p-3 text-gray-400">Hours of manual tagging</td>
                  <td className="p-3 text-gray-400">Basic highlighting</td>
                  <td className="p-3 text-green-400 font-semibold">AI automated in minutes</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/50">
                  <td className="p-3 text-white font-semibold">Shotlist Generation</td>
                  <td className="p-3 text-gray-400">Dependent on AD teams</td>
                  <td className="p-3 text-gray-400">Spreadsheet templates</td>
                  <td className="p-3 text-green-400 font-semibold">Smart lists with durations</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-3 text-white font-semibold">Storyboards</td>
                  <td className="p-3 text-gray-400">Hand-drawn / outsourced</td>
                  <td className="p-3 text-gray-400">Generic stock images</td>
                  <td className="p-3 text-green-400 font-semibold">AI generated previews</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/50">
                  <td className="p-3 text-white font-semibold">Collaboration</td>
                  <td className="p-3 text-gray-400">Email threads</td>
                  <td className="p-3 text-gray-400">File sharing tools</td>
                  <td className="p-3 text-green-400 font-semibold">Real-time cloud platform</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },

    // Slide 10: Traction
    {
      component: () => {
        const tractionData = [
          { month: 'M1', scripts: 15 },
          { month: 'M2', scripts: 45 },
          { month: 'M3', scripts: 150 },
          { month: 'M4', scripts: 300 }
        ];
        return (
          <div className="px-12 py-6">
            <h2 className="text-4xl font-bold text-white mb-8">Early Traction & Adoption</h2>
            <div className="grid grid-cols-2 gap-10 items-center">
              <div>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={tractionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }} />
                    <Bar dataKey="scripts" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-center text-gray-400 mt-2 text-sm">Scripts Processed Over Time</p>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/20 to-transparent p-6 rounded-xl border border-green-500/30">
                  <p className="text-6xl font-bold text-green-400 mb-1">300+</p>
                  <p className="text-xl text-white">Scripts Processed</p>
                  <p className="text-gray-400 text-sm mt-1">Across pilots & early adopters</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-green-400">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="text-base">Feedback collected</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="text-base">Refinements delivered</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="text-base">Super fast dev cycles (3 days)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    },

    // Slide 11: Sample Processing Costs
    {
      component: () => (
        <div className="px-12 py-4">
          <h2 className="text-4xl font-bold text-white mb-6">Sample 4-Page Screenplay Processing Costs</h2>
          <div className="overflow-hidden rounded-xl border border-gray-700 mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-800">
                <tr>
                  <th className="text-left p-2 font-bold text-white">Operation</th>
                  <th className="text-center p-2 font-bold text-white">Credits</th>
                  <th className="text-center p-2 font-bold text-white">User Paid ($)</th>
                  <th className="text-center p-2 font-bold text-white">Cost to Us ($)</th>
                  <th className="text-center p-2 font-bold text-white">Profit ($)</th>
                  <th className="text-center p-2 font-bold text-green-400">Profit %</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-t border-gray-700">
                  <td className="p-2 text-gray-300">Screenplay Import & Extract</td>
                  <td className="p-2 text-center text-gray-300">42</td>
                  <td className="p-2 text-center text-gray-300">0.76</td>
                  <td className="p-2 text-center text-gray-300">0.006</td>
                  <td className="p-2 text-center text-green-400">0.75</td>
                  <td className="p-2 text-center text-green-400 font-bold">12,500%</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/50">
                  <td className="p-2 text-gray-300">Entity Image Generation</td>
                  <td className="p-2 text-center text-gray-300">13</td>
                  <td className="p-2 text-center text-gray-300">0.23</td>
                  <td className="p-2 text-center text-gray-300">0.087</td>
                  <td className="p-2 text-center text-green-400">0.15</td>
                  <td className="p-2 text-center text-green-400 font-bold">170%</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-2 text-gray-300">Shotlist</td>
                  <td className="p-2 text-center text-gray-300">41</td>
                  <td className="p-2 text-center text-gray-300">0.74</td>
                  <td className="p-2 text-center text-gray-300">0.0017</td>
                  <td className="p-2 text-center text-green-400">0.74</td>
                  <td className="p-2 text-center text-green-400 font-bold">44,253%</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/50">
                  <td className="p-2 text-gray-300">Storyboard Images Draft</td>
                  <td className="p-2 text-center text-gray-300">30</td>
                  <td className="p-2 text-center text-gray-300">0.54</td>
                  <td className="p-2 text-center text-gray-300">0.15</td>
                  <td className="p-2 text-center text-green-400">0.39</td>
                  <td className="p-2 text-center text-green-400 font-bold">259%</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-2 text-gray-300">Storyboard Dialogue Generation</td>
                  <td className="p-2 text-center text-gray-300">20</td>
                  <td className="p-2 text-center text-gray-300">0.36</td>
                  <td className="p-2 text-center text-gray-300">0.11</td>
                  <td className="p-2 text-center text-green-400">0.25</td>
                  <td className="p-2 text-center text-green-400 font-bold">226%</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/50">
                  <td className="p-2 text-gray-300">Storyboard SFX Generation</td>
                  <td className="p-2 text-center text-gray-300">116</td>
                  <td className="p-2 text-center text-gray-300">2.09</td>
                  <td className="p-2 text-center text-gray-300">0.64</td>
                  <td className="p-2 text-center text-green-400">1.45</td>
                  <td className="p-2 text-center text-green-400 font-bold">226%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-center text-xs">Real costs from actual 4-page screenplay using smallest plan with HiDream model</p>
        </div>
      )
    },

    // Slide 12: Revenue Model
    {
      component: () => (
        <div className="px-12 py-6">
          <h2 className="text-4xl font-bold text-white mb-8">Simple & Scalable Revenue</h2>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-6 rounded-xl border-2 border-blue-500/30 text-center">
              <p className="text-gray-400 mb-1 text-sm">Starter</p>
              <p className="text-4xl font-bold text-white mb-1">$8.99</p>
              <p className="text-green-400 text-lg mb-2">500 Credits</p>
              <p className="text-gray-400 text-xs">For light dabblers</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/40 to-gray-800 p-6 rounded-xl border-4 border-green-500 text-center transform scale-105">
              <div className="bg-green-500 text-black text-xs font-bold py-1 px-2 rounded-full inline-block mb-2">MOST POPULAR</div>
              <p className="text-gray-400 mb-1 text-sm">Creator</p>
              <p className="text-4xl font-bold text-white mb-1">$31.99</p>
              <p className="text-green-400 text-lg mb-2">2,000 Credits</p>
              <p className="text-gray-400 text-xs">Perfect monthly allowance</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-6 rounded-xl border-2 border-purple-500/30 text-center">
              <p className="text-gray-400 mb-1 text-sm">Studio</p>
              <p className="text-4xl font-bold text-white mb-1">$69.99</p>
              <p className="text-green-400 text-lg mb-2">5,000 Credits</p>
              <p className="text-gray-400 text-xs">Teams & daily renders</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-5 rounded-lg">
              <DollarSign className="w-8 h-8 text-green-400 mb-2" />
              <h3 className="text-lg font-bold text-white mb-1">Affiliate Program</h3>
              <p className="text-gray-300 text-sm">20% commission for 1 year on all referrals</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg">
              <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
              <h3 className="text-lg font-bold text-white mb-1">High Margins</h3>
              <p className="text-gray-300 text-sm">Built on high-margin AI service delivery</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 13: Profit Margins
    {
      component: () => {
        const profitData = [
          { model: 'GPT-4.1', margin: 85 },
          { model: 'FluxCtx', margin: 49 },
          { model: 'HiDream', margin: 59 },
          { model: 'G.Imagen', margin: 59 },
          { model: 'StbMusic', margin: 67 },
          { model: 'ElevenLb', margin: 56 },
          { model: 'SFX', margin: 56 }
        ];
        return (
          <div className="px-12 py-6">
            <h2 className="text-4xl font-bold text-white mb-8">Cost & Profit Analysis</h2>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="model" stroke="#9CA3AF" angle={-12} textAnchor="end" height={60} />
                <YAxis stroke="#9CA3AF" label={{ value: 'Profit Margin (%)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }} />
                <Bar dataKey="margin" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-gray-400 mt-4 text-base">High-margin model across all AI services (Average ~60% profit margin)</p>
          </div>
        );
      }
    },

    // Slide 14: Revenue Projections
    {
      component: () => {
        const revenueData = [
          { users: '100', revenue: 3200, profit: 1900 },
          { users: '500', revenue: 16000, profit: 9500 },
          { users: '1K', revenue: 32000, profit: 19000 },
          { users: '5K', revenue: 150000, profit: 89000 }
        ];
        return (
          <div className="px-12 py-6">
            <h2 className="text-4xl font-bold text-white mb-8">Scaling Profit Projections</h2>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="users" stroke="#9CA3AF" label={{ value: 'Active Users', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }} />
                <YAxis stroke="#9CA3AF" label={{ value: 'USD ($)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }} />
                <Bar dataKey="revenue" fill="#3B82F6" name="Revenue" />
                <Bar dataKey="profit" fill="#10B981" name="Profit" />
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-4 gap-3 mt-6">
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-400">$3.2K</p>
                <p className="text-gray-400 text-xs">100 users</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-400">$16K</p>
                <p className="text-gray-400 text-xs">500 users</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-400">$32K</p>
                <p className="text-gray-400 text-xs">1K users</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-400">$150K</p>
                <p className="text-gray-400 text-xs">5K users</p>
              </div>
            </div>
          </div>
        );
      }
    },

    // Slide 15: Go-to-Market
    {
      component: () => (
        <div className="px-12 py-6">
          <h2 className="text-4xl font-bold text-white mb-10">Multi-Channel Go-to-Market</h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-red-900/20 to-gray-800 p-6 rounded-xl border border-red-500/30">
              <div className="bg-red-500 text-white text-base font-bold py-1 px-3 rounded-full inline-block mb-4">1</div>
              <h3 className="text-2xl font-bold text-white mb-3">Paid Advertising</h3>
              <p className="text-lg text-green-400 mb-3">Initial Push: ₹6L/month</p>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>• Hyper-targeted ads on Reddit, Facebook, Instagram</p>
                <p>• Key Subreddits: r/Filmmakers, r/Screenwriting, r/Storyboarding</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-800 p-6 rounded-xl border border-purple-500/30">
              <div className="bg-purple-500 text-white text-base font-bold py-1 px-3 rounded-full inline-block mb-4">2</div>
              <h3 className="text-2xl font-bold text-white mb-3">YouTube Partnerships</h3>
              <p className="text-lg text-green-400 mb-3">Affiliate Collaborations</p>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>• Filmmaking: Lessons from the Screenplay, Film Riot</p>
                <p>• AI-Focused: Fireship, Futurepedia, Theoretically Media</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 16: Roadmap
    {
      component: () => (
        <div className="px-12 py-4">
          <h2 className="text-4xl font-bold text-white mb-6">Roadmap After Funding</h2>
          <div className="space-y-2">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-1">
                <div className="bg-yellow-500 text-black font-bold text-xs py-1 px-2 rounded mr-3">Month 0</div>
                <h3 className="text-base font-bold text-white">Transition Period</h3>
              </div>
              <p className="text-gray-300 ml-16 text-xs">Founders wrap up current responsibilities to fully focus on ShotFlux™</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-1">
                <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-3">Month 1</div>
                <h3 className="text-base font-bold text-white">Dev Hires, Security Audit & Marketing Kickoff</h3>
              </div>
              <p className="text-gray-300 ml-16 text-xs">Onboard devs, Image to video, Complete marketing onboarding</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-1">
                <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-3">Month 2</div>
                <h3 className="text-base font-bold text-white">Beta Optimization & Funnel Setup</h3>
              </div>
              <p className="text-gray-300 ml-16 text-xs">Scale affiliate onboarding, set up paid ad infra, refine landing pages</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-1">
                <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-3">Month 3</div>
                <h3 className="text-base font-bold text-white">Controlled User Acquisition</h3>
              </div>
              <p className="text-gray-300 ml-16 text-xs">Launch targeted campaigns, activate affiliates, community building</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-1">
                <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-3">Month 4</div>
                <h3 className="text-base font-bold text-white">Early Growth & Conversion Optimization</h3>
              </div>
              <p className="text-gray-300 ml-16 text-xs">Scale high-ROI ads, optimize affiliate incentives</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-1">
                <div className="bg-green-500 text-black font-bold text-xs py-1 px-2 rounded mr-3">Month 6+</div>
                <h3 className="text-base font-bold text-white">Retention & Revenue Growth</h3>
              </div>
              <p className="text-gray-300 ml-16 text-xs">Retargeting, influencer collabs, deepen affiliate partnerships</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 17: Funding
    {
      component: () => (
        <div className="px-12 py-6">
          <h2 className="text-4xl font-bold text-white mb-8">Seed Capital for Growth & Scale</h2>
          <div className="bg-gradient-to-r from-green-900/30 to-gray-800 p-8 rounded-2xl border-2 border-green-500/50 mb-6">
            <p className="text-2xl text-white mb-4">We are raising</p>
            <p className="text-6xl font-bold text-green-400 mb-4">₹4.5-5 Cr</p>
            <p className="text-2xl text-gray-300">~$550k-600k in Seed Capital</p>
            <p className="text-base text-gray-400 mt-4">18 months of runway to reach 3000+ active paying users/month</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-gray-800 p-5 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-400 mb-1">₹6.55L</p>
              <p className="text-gray-300 text-sm">Marketing & Growth/month</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-400 mb-1">₹7.5L</p>
              <p className="text-gray-300 text-sm">Team Expansion/month</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-400 mb-1">₹16L</p>
              <p className="text-gray-300 text-sm">Total Monthly Burn</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 18: Team
    {
      component: () => (
        <div className="px-12 py-6">
          <h2 className="text-4xl font-bold text-white mb-8">Founding Members & Partners</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Core Team</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-lg font-bold text-white mb-1">Agnimitra Sharma</p>
                  <p className="text-green-400 mb-1 text-sm">Film Industry Expert & Filmmaker</p>
                  <p className="text-gray-300 text-xs">Shaping platform with industry insights</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-lg font-bold text-white mb-1">Purushottam Kiri</p>
                  <p className="text-green-400 mb-1 text-sm">Product Development & Design</p>
                  <p className="text-gray-300 text-xs">Crafted ShotFlux™ UI, UX & Development</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-lg font-bold text-white mb-1">Dushyant Kiri</p>
                  <p className="text-green-400 mb-1 text-sm">Business Development Manager</p>
                  <p className="text-gray-300 text-xs">Investor relations & fund management</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-lg font-bold text-white mb-1">Abhishek Sharma</p>
                  <p className="text-green-400 mb-1 text-sm">Business Development Manager</p>
                  <p className="text-gray-300 text-xs">Investor meetups & commercial insights</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Marketing Partner</h3>
              <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-6 rounded-xl border-2 border-purple-500/30">
                <p className="text-2xl font-bold text-white mb-3">Whirlwind.co.in</p>
                <p className="text-gray-300 mb-3 text-sm">Trusted full-stack digital marketing agency</p>
                <p className="text-gray-300 mb-4 text-sm">Led by CEO Saumil Patel, managing digital marketing for major fintech firms</p>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 font-semibold text-sm">✓ Initial verbal agreement reached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 19: The Ask
    {
      component: () => (
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12">
          <Film className="w-16 h-16 sm:w-20 md:h-20 text-green-400 mb-4 sm:mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Join Us in Transforming Pre-Production</h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8">ShotFlux™ enables filmmakers to spend more time on creativity and less on paperwork</p>
          
          <div className="bg-gradient-to-r from-green-900/40 to-gray-800 p-6 sm:p-8 rounded-2xl border-2 border-green-500 mb-6 sm:mb-8 max-w-3xl w-full">
            <p className="text-lg sm:text-xl text-white mb-2 sm:mb-3">We are raising</p>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-400 mb-2 sm:mb-3">₹4-4.5 Cr</p>
            <p className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">~$480k-550k in Seed Capital</p>
            <p className="text-sm sm:text-base text-gray-400">18 months to 3000 users • ~$100K monthly revenue</p>
          </div>

          <div className="space-y-3 sm:space-y-4 w-full max-w-2xl">
            <p className="text-lg sm:text-xl md:text-2xl text-white">Reach out for a demo, pilot programme or investment discussion</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">Abhishek Sharma: 9867659005</p>
            <p className="text-sm sm:text-base text-gray-400">founders@shotflux.com • www.shotflux.com</p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mt-4 sm:mt-6">
              <a 
                href="tel:+919867659005"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 sm:px-8 rounded-xl text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg"
              >
                📞 Call Now
              </a>
              <a 
                href="https://shotflux.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 sm:px-8 rounded-xl text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg"
              >
                🚀 Try It Out
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  const SlideComponent = slides[currentSlide].component;

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col">
      {/* Main Content - takes remaining space */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-4">
        <div className="w-full max-w-7xl">
          <SlideComponent />
        </div>
      </div>

      {/* Navigation Bar - fixed at bottom */}
      <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between flex-shrink-0">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
            currentSlide === 0
              ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden">Prev</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-gray-400 text-xs sm:text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
          <div className="hidden sm:flex gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-green-500'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
            currentSlide === slides.length - 1
              ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default PitchDeck;