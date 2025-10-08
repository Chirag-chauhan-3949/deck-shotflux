
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign } from 'lucide-react';

const Slide13ProfitMargins = () => {
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
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Cost & Profit Analysis</h2>
      <div className="h-64 sm:h-72 mb-6 sm:mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={profitData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="model" 
              stroke="#9CA3AF" 
              angle={-15} 
              textAnchor="end" 
              height={60}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              stroke="#9CA3AF" 
              label={{ 
                value: 'Profit Margin (%)', 
                angle: -90, 
                position: 'insideLeft', 
                fill: '#9CA3AF',
                fontSize: 12
              }} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #10B981',
                borderRadius: '8px',
                fontSize: '12px'
              }} 
            />
            <Bar dataKey="margin" fill="#10B981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
          <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2" />
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">High-Margin Model</h3>
          <p className="text-gray-300 text-xs sm:text-sm">Average ~60% profit margin across all AI services</p>
        </div>
        <div className="bg-gray-800 p-4 sm:p-5 rounded-lg">
          <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2" />
          <h3 className="text-base sm:text-lg font-bold text-white mb-1">Scalable Economics</h3>
          <p className="text-gray-300 text-xs sm:text-sm">Costs decrease significantly with volume and optimization</p>
        </div>
      </div>
    </div>
  );
};

export default Slide13ProfitMargins;
