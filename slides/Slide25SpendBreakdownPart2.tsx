
import { DollarSign } from 'lucide-react';

const Slide25SpendBreakdownPart2 = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6 h-full flex flex-col">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Detailed Budget Breakdown</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto flex-1">
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-green-500/30 h-fit">
          <h3 className="text-sm sm:text-base font-semibold text-green-400 mb-3">Ads & Growth (32%)</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li className="flex justify-between">
              <span>Paid Ads (M1-M6)</span>
              <span className="text-green-400">₹19.5L</span>
            </li>
            <li className="flex justify-between">
              <span>YouTube Collabs</span>
              <span className="text-green-400">₹12.5L</span>
            </li>
            <li className="flex justify-between">
              <span>Marketing Agency</span>
              <span className="text-green-400">₹9L</span>
            </li>
            <li className="flex justify-between border-t border-green-500/30 pt-2 mt-2 font-bold">
              <span>Total</span>
              <span className="text-green-400">₹24L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-blue-500/30 h-fit">
          <h3 className="text-sm sm:text-base font-semibold text-blue-400 mb-3">Salaries & Operations (26%)</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li className="flex justify-between">
              <span>Founder Salaries (4)</span>
              <span className="text-blue-400">₹12L</span>
            </li>
            <li className="flex justify-between">
              <span>Operations</span>
              <span className="text-blue-400">₹3L</span>
            </li>
            <li className="flex justify-between">
              <span>SaaS Tools</span>
              <span className="text-blue-400">₹1.8L</span>
            </li>
            <li className="flex justify-between">
              <span>Support & Misc</span>
              <span className="text-blue-400">₹3L</span>
            </li>
            <li className="flex justify-between border-t border-blue-500/30 pt-2 mt-2 font-bold">
              <span>Total</span>
              <span className="text-blue-400">₹19.8L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-purple-500/30 h-fit">
          <h3 className="text-sm sm:text-base font-semibold text-purple-400 mb-3">Infrastructure & SaaS (18%)</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li className="flex justify-between">
              <span>Server/API Costs</span>
              <span className="text-purple-400">₹2.55L</span>
            </li>
            <li className="flex justify-between">
              <span>OpenAI/Image APIs</span>
              <span className="text-purple-400">₹9L</span>
            </li>
            <li className="flex justify-between">
              <span>Backend (Supabase)</span>
              <span className="text-purple-400">₹0.9L</span>
            </li>
            <li className="flex justify-between">
              <span>Misc SaaS</span>
              <span className="text-purple-400">₹1.25L</span>
            </li>
            <li className="flex justify-between border-t border-purple-500/30 pt-2 mt-2 font-bold">
              <span>Total</span>
              <span className="text-purple-400">₹13.7L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-cyan-500/30 h-fit">
          <h3 className="text-sm sm:text-base font-semibold text-cyan-400 mb-3">CRO & Optimization (6%)</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li className="flex justify-between">
              <span>GoodUI Consulting</span>
              <span className="text-cyan-400">₹4.15L</span>
            </li>
            <li className="flex justify-between">
              <span>Hotjar/Mixpanel</span>
              <span className="text-cyan-400">₹0.6L</span>
            </li>
            <li className="flex justify-between border-t border-cyan-500/30 pt-2 mt-2 font-bold">
              <span>Total</span>
              <span className="text-cyan-400">₹4.6L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-red-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-red-500/30 h-fit">
          <h3 className="text-sm sm:text-base font-semibold text-red-400 mb-3">Legal & Security (7%)</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li className="flex justify-between">
              <span>Legal (M1)</span>
              <span className="text-red-400">₹2L</span>
            </li>
            <li className="flex justify-between">
              <span>Security Audit (M3)</span>
              <span className="text-red-400">₹2.5L</span>
            </li>
            <li className="flex justify-between">
              <span>IP & Compliance</span>
              <span className="text-red-400">₹0.8L</span>
            </li>
            <li className="flex justify-between border-t border-red-500/30 pt-2 mt-2 font-bold">
              <span>Total</span>
              <span className="text-red-400">₹5.3L</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-4 sm:p-5 rounded-xl border border-yellow-500/30 h-fit">
          <h3 className="text-sm sm:text-base font-semibold text-yellow-400 mb-3">Contingency (11%)</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li className="flex justify-between">
              <span>Buffer Fund (10%)</span>
              <span className="text-yellow-400">₹8.3L</span>
            </li>
            <li className="flex justify-between">
              <span>Purpose</span>
              <span className="text-yellow-400 text-xs">Risk Buffer</span>
            </li>
            <li className="flex justify-between border-t border-yellow-500/30 pt-2 mt-2 font-bold">
              <span>Total</span>
              <span className="text-yellow-400">₹8.3L</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 bg-gradient-to-r from-green-900/20 to-gray-800 p-4 rounded-xl border border-green-500/30">
        <div className="flex items-center gap-3 mb-3">
          <DollarSign className="text-green-400 w-6 h-6 sm:w-8 sm:h-8" />
          <h3 className="text-base sm:text-xl font-bold text-white">Strategic Allocation</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300">
          <div>
            <h4 className="text-green-400 font-semibold mb-1">Growth-Focused (58%)</h4>
            <p className="text-xs">
              32% ads + 26% team ensures aggressive user acquisition with product quality.
            </p>
          </div>
          <div>
            <h4 className="text-blue-400 font-semibold mb-1">Sustainable Foundation (42%)</h4>
            <p className="text-xs">
              Infrastructure, legal, CRO, and contingency for robust, secure platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide25SpendBreakdownPart2;
