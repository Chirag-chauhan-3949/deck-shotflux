
import {
  FileText,
  CheckSquare,
  Users,
  MapPin,
  Package,
  Shirt,
  Image,
  List,
  Film,
  Download,
  ArrowDown,
  Sparkles,
  Zap
} from 'lucide-react';

const Slide4WorkflowVisualization = () => {
  const workflowSteps = [
    {
      icon: FileText,
      title: 'Story/Screenplay',
      description: 'Start with your script or story idea',
      color: 'blue',
      userInput: true
    },
    {
      icon: CheckSquare,
      title: 'Industry Standard Formatting',
      description: 'Professional screenplay format',
      color: 'blue',
      userInput: true
    },
    {
      icon: Sparkles,
      title: 'Entity Extraction',
      description: 'Auto-identify Characters, Locations, Props, Costumes',
      color: 'green',
      automation: true,
      exports: ['Characters PDF', 'Locations PDF', 'Props PDF', 'Costumes PDF']
    },
    {
      icon: Image,
      title: 'Generate Visuals for Entities',
      description: 'AI creates images for all extracted elements',
      color: 'green',
      automation: true
    },
    {
      icon: List,
      title: 'Shotlist Generation',
      description: 'Auto-understands script with camera, dialogue, SFX, music presets',
      color: 'green',
      automation: true
    },
    {
      icon: Film,
      title: 'Storyboard Creation',
      description: 'Generates images, adds audio, synchronized perfectly',
      color: 'green',
      automation: true
    },
    {
      icon: Download,
      title: 'Export Final Output',
      description: 'Timed video with visuals + audio, ready for production',
      color: 'green',
      automation: true
    }
  ];

  const departments = [
    { icon: Users, name: 'Characters', color: 'purple' },
    { icon: MapPin, name: 'Locations', color: 'orange' },
    { icon: Package, name: 'Props', color: 'cyan' },
    { icon: Shirt, name: 'Costumes', color: 'pink' }
  ];

  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 py-4 sm:py-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 flex-shrink-0">ShotFlux Industry Standard Workflow</h2>
      <p className="text-lg sm:text-xl text-green-400 mb-6 sm:mb-8 font-semibold flex-shrink-0">From Screenplay to Production-Ready Assets in Minutes</p>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {/* Main Workflow */}
      <div className="max-w-4xl mx-auto space-y-4 mb-8">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          const isUserInput = step.userInput;
          const isAutomation = step.automation;

          return (
            <div key={index}>
              <div
                className={`bg-gradient-to-r ${
                  isUserInput
                    ? 'from-blue-900/40 to-blue-800/40 border-blue-500/50'
                    : 'from-green-900/40 to-green-800/40 border-green-500/50'
                } border-2 p-4 sm:p-6 rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideIn 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${
                    isUserInput ? 'bg-blue-500/20' : 'bg-green-500/20'
                  } p-3 rounded-lg flex-shrink-0`}>
                    <Icon className={`${
                      isUserInput ? 'text-blue-400' : 'text-green-400'
                    } w-6 h-6 sm:w-8 sm:h-8`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
                      {isAutomation && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded text-xs font-semibold text-green-400">
                          <Zap className="w-3 h-3" />
                          AI Automated
                        </span>
                      )}
                      {isUserInput && (
                        <span className="px-2 py-1 bg-blue-500/20 rounded text-xs font-semibold text-blue-400">
                          User Input
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-300">{step.description}</p>

                    {/* Department Exports */}
                    {step.exports && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {departments.map((dept, idx) => {
                          const DeptIcon = dept.icon;
                          return (
                            <div
                              key={idx}
                              className={`bg-${dept.color}-900/30 border border-${dept.color}-500/50 p-2 rounded-lg flex items-center gap-2`}
                            >
                              <DeptIcon className={`text-${dept.color}-400 w-4 h-4`} />
                              <span className="text-xs text-gray-300">{dept.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < workflowSteps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="text-gray-600 w-6 h-6" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">Workflow Legend</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <div>
              <p className="text-sm font-semibold text-white">User Input Steps</p>
              <p className="text-xs text-gray-400">Creator provides story and formatting</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <div>
              <p className="text-sm font-semibold text-white">AI Automation Steps</p>
              <p className="text-xs text-gray-400">ShotFlux handles everything automatically</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 rounded-xl border border-purple-500/30">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">Professional Output</h4>
          <p className="text-xs text-gray-300">Industry-standard formatting used by AD, casting, location managers, prop masters, wardrobe departments</p>
        </div>
        <div className="bg-gradient-to-br from-green-900/30 to-gray-800 p-4 rounded-xl border border-green-500/30">
          <h4 className="text-sm font-semibold text-green-400 mb-2">Massive Time Savings</h4>
          <p className="text-xs text-gray-300">Complete pre-production workflow in minutes instead of hours or days</p>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 rounded-xl border border-blue-500/30">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">Complete Integration</h4>
          <p className="text-xs text-gray-300">Seamless flow from script to final production-ready assets with audio + visuals</p>
        </div>
      </div>
      </div>

      <style >{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Slide4WorkflowVisualization;
