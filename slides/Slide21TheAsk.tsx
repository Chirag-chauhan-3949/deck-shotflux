
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const Slide20TheAsk = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">The Ask</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border-2 border-green-500">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Funding Requirements</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm sm:text-base">6-Month Operations</span>
                <span className="text-green-400 font-bold text-sm sm:text-base">₹69.0 Lakhs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm sm:text-base">Revenue (6 months)</span>
                <span className="text-blue-400 font-bold text-sm sm:text-base">₹24.375 Lakhs</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm sm:text-base">Contingency (10%)</span>
                <span className="text-yellow-400 font-bold text-sm sm:text-base">₹6.9 Lakhs</span>
              </div>
              <div className="border-t border-gray-600 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-base sm:text-lg">Total Funding Ask</span>
                  <span className="text-green-400 font-bold text-xl sm:text-2xl">₹1.3 Crore</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">~$156,000 USD</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Use of Funds</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Ads & Growth Marketing</span>
                <span className="text-green-400 text-xs sm:text-sm">42%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Salaries & Operations</span>
                <span className="text-green-400 text-xs sm:text-sm">28%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Other Operations</span>
                <span className="text-green-400 text-xs sm:text-sm">13%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">CRO & Optimization</span>
                <span className="text-green-400 text-xs sm:text-sm">5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Infrastructure & SaaS</span>
                <span className="text-green-400 text-xs sm:text-sm">3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-xs sm:text-sm">Contingency</span>
                <span className="text-green-400 text-xs sm:text-sm">9%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Expected Outcomes (6 Months)</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <Target className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-xs sm:text-sm">500 active paying users by Month 6</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-xs sm:text-sm">₹11.25L monthly recurring revenue</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-xs sm:text-sm">78% gross margin with LTV:CAC of 5.3:1</span>
              </li>
              <li className="flex items-start">
                <Users className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-xs sm:text-sm">Validated product-market fit for Series A readiness</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Investment Opportunity</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-3">High-margin SaaS platform addressing a massive underserved market with proven demand and clear path to profitability</p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4">
              <p className="text-green-400 font-semibold text-center text-sm sm:text-base">Join us in revolutionizing film pre-production for indie creators worldwide</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 sm:mt-8 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Let's Build the Future of Filmmaking Together</h3>
        <p className="text-gray-400 text-sm sm:text-base">Contact us to discuss investment opportunities</p>
      </div>
    </div>
  );
};

export default Slide20TheAsk;
