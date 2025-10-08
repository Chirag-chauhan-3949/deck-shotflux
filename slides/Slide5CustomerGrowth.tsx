
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Slide5CustomerGrowth = () => {
  const customerData = [
    { month: 'M1', adSpend: 0.5, newUsers: 50, payingUsers: 50, arpu: 2500, revenue: 0.00 },
    { month: 'M2', adSpend: 1.0, newUsers: 75, payingUsers: 75, arpu: 2500, revenue: 0.00 },
    { month: 'M3', adSpend: 2.0, newUsers: 165, payingUsers: 165, arpu: 2500, revenue: 1.50 },
    { month: 'M4', adSpend: 4.0, newUsers: 250, payingUsers: 250, arpu: 2500, revenue: 4.125 },
    { month: 'M5', adSpend: 6.0, newUsers: 375, payingUsers: 375, arpu: 2500, revenue: 7.50 },
    { month: 'M6', adSpend: 6.0, newUsers: 500, payingUsers: 500, arpu: 2500, revenue: 11.25 }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Customer Growth & Revenue Projections</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">User Acquisition Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value, name) => {
                  if (name === 'payingUsers') return [value, 'Paying Users'];
                  if (name === 'newUsers') return [value, 'New Users'];
                  return [value, name];
                }}
              />
              <Line type="monotone" dataKey="payingUsers" stroke="#10B981" strokeWidth={3} name="Paying Users" />
              <Line type="monotone" dataKey="newUsers" stroke="#3B82F6" strokeWidth={2} name="New Users" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Revenue Growth Trajectory</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" label={{ value: '₹Lakhs', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10B981' }}
                formatter={(value) => [`${value}L`, 'Revenue']}
              />
              <Line type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={3} name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-3 sm:p-4 rounded-lg text-center border border-green-500/30">
          <p className="text-xl sm:text-2xl font-bold text-green-400">500</p>
          <p className="text-xs sm:text-sm text-gray-300">Paying Users by M6</p>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-3 sm:p-4 rounded-lg text-center border border-blue-500/30">
          <p className="text-xl sm:text-2xl font-bold text-blue-400">11.25L</p>
          <p className="text-xs sm:text-sm text-gray-300">MRR by Month 6</p>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-3 sm:p-4 rounded-lg text-center border border-purple-500/30">
          <p className="text-xl sm:text-2xl font-bold text-purple-400">50 → 500</p>
          <p className="text-xs sm:text-sm text-gray-300">10x Growth Path</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-3 sm:p-4 rounded-lg text-center border border-yellow-500/30">
          <p className="text-xl sm:text-2xl font-bold text-yellow-400">₹24.375L</p>
          <p className="text-xs sm:text-sm text-gray-300">Total Revenue (6M)</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-gray-800 p-4 sm:p-6 rounded-xl border border-blue-500/30">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Key Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <p className="text-sm text-gray-300">ARPU (Average Revenue Per User)</p>
            <p className="text-xl font-bold text-blue-400">₹2,500/month</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Conversion Funnel</p>
            <p className="text-xl font-bold text-green-400">1.5% CTR → 20% Activation</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Gross Margin</p>
            <p className="text-xl font-bold text-purple-400">78%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5CustomerGrowth;
