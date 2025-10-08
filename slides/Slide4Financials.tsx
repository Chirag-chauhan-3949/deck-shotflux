import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Slide4Financials = () => {
  // Updated financial data based on 6-month runway and ₹1.25 Cr funding
  const fundUtilizationData = [
    { month: 'M1', opening: 125, spend: 7.0, revenue: 0, closing: 118.0 },
    { month: 'M2', opening: 118.0, spend: 9.13, revenue: 0, closing: 108.87 },
    { month: 'M3', opening: 108.87, spend: 13.17, revenue: 1.5, closing: 97.2 },
    { month: 'M4', opening: 97.2, spend: 11.7, revenue: 4.125, closing: 89.625 },
    { month: 'M5', opening: 89.625, spend: 13.9, revenue: 7.5, closing: 83.225 },
    { month: 'M6', opening: 83.225, spend: 14.1, revenue: 11.25, closing: 80.375 }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Financial Projections - 6 Month Runway</h2>
      
      <div className="bg-gradient-to-r from-green-900/30 to-gray-800 p-6 sm:p-8 rounded-2xl border-2 border-green-500/50 mb-6 sm:mb-8">
        <p className="text-xl sm:text-2xl text-white mb-3 sm:mb-4">Funding Target</p>
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-400 mb-3 sm:mb-4">₹1.25 Cr</p>
        <p className="text-xl sm:text-2xl text-gray-300">6-Month Runway</p>
        <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">Conservative projections with healthy buffer</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Monthly Burn Rate</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={fundUtilizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" label={{ value: '₹Lakhs', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value) => [`${value}L`, 'Amount']}
              />
              <Bar dataKey="spend" fill="#EF4444" name="Total Spend" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={fundUtilizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" label={{ value: '₹Lakhs', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value) => [`${value}L`, 'Amount']}
              />
              <Bar dataKey="revenue" fill="#10B981" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">₹5.3L</p>
          <p className="text-gray-300 text-xs sm:text-sm">Avg Marketing & Growth/month</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">₹3.5L</p>
          <p className="text-gray-300 text-xs sm:text-sm">Avg Team & Agency/month</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg text-center">
          <p className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">₹11.5L</p>
          <p className="text-gray-300 text-xs sm:text-sm">Avg Monthly Burn</p>
        </div>
      </div>
    </div>
  );
};

export default Slide4Financials;
