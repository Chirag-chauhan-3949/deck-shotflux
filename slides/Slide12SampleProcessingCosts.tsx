
const Slide11SampleProcessingCosts = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Sample 4-Page Screenplay Processing Costs</h2>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-xs min-w-[700px]">
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
  );
};

export default Slide11SampleProcessingCosts;
