import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Slide1Title,
  Slide2ExecutiveSummary,
  Slide3Problem,
  Slide4WorkflowVisualization,
  Slide5Financials,
  Slide6CustomerGrowth,
  Slide7UnitEconomics,
  Slide9ConversionFunnel,
  Slide10AffiliateModel,
  Slide11WhyPreProduction,
  Slide12CompetitiveOverview,
  Slide13CompetitiveFeatures,
  Slide14Traction,
  Slide15SampleProcessingCosts,
  Slide16RevenueModel,
  Slide17ProfitMargins,
  Slide18RevenueProjections,
  Slide19GoToMarket,
  Slide20Roadmap,
  Slide21FundingMonthly,
  Slide22OneTimeCapitalCosts,
  Slide23YouTubeChannels,
  Slide24SubredditsGTMPart1,
  Slide25SubredditsGTMPart2,
  Slide26CACvsLTV,
  Slide27SpendBreakdownPart1,
  Slide28SpendBreakdownPart2,
  Slide29CROImpact,
  Slide30Team,
  Slide31FundingAskFinal,
  Slide32TheAsk
} from "../slides";

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');

  // Add custom scrollbar styles and transitions
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Custom scrollbar for webkit browsers */
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1f2937;
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #10b981;
        border-radius: 10px;
        border: 2px solid #1f2937;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #059669;
      }
      
      /* Custom scrollbar for Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #10b981 #1f2937;
      }

      /* Make tables scrollable on mobile */
      @media (max-width: 768px) {
        .table-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
      }

      /* Enhanced fade-in transition animations */
      @keyframes fadeInSlide {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(16, 185, 129, 0.3);
        }
        50% {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
        }
      }

      .slide-enter-next {
        animation: fadeInSlide 0.4s ease-out forwards;
      }

      .slide-enter-prev {
        animation: fadeInSlide 0.4s ease-out forwards;
      }

      .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
      }

      .slide-up {
        animation: slideUp 0.7s ease-out forwards;
      }

      .scale-in {
        animation: scaleIn 0.5s ease-out forwards;
      }

      .glow-pulse {
        animation: glow 2s ease-in-out infinite;
      }

      /* Stagger effect utilities */
      .stagger-1 { animation-delay: 0.1s; }
      .stagger-2 { animation-delay: 0.2s; }
      .stagger-3 { animation-delay: 0.3s; }
      .stagger-4 { animation-delay: 0.4s; }
      .stagger-5 { animation-delay: 0.5s; }
      .stagger-6 { animation-delay: 0.6s; }

      /* Hover microanimations */
      .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
      }

      .hover-glow {
        transition: box-shadow 0.3s ease;
      }

      .hover-glow:hover {
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Add meta tags and title
  useEffect(() => {
    // Set document title
    document.title = 'Shotflux Investor Pitch Deck';
    
    // Add or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', 'Raising ₹1.25 Cr to reach 500 active paying users in 6 months. AI-powered pre-production for filmmakers.');

    // Open Graph tags for social media
    setMetaTag('og:title', 'ShotFlux Investor Pitch Deck', true);
    setMetaTag('og:description', 'Raising ₹1.25 Cr to reach 500 active paying users in 6 months. AI-powered pre-production for filmmakers.', true);
    setMetaTag('og:type', 'website', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'ShotFlux Investor Pitch Deck');
    setMetaTag('twitter:description', 'Raising ₹1.25 Cr to reach 500 active paying users in 6 months. AI-powered pre-production for filmmakers.');
  }, []);

  const nextSlide = () => {
    setSlideDirection('next');
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };
  
  const prevSlide = () => {
    setSlideDirection('prev');
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const slides = [
    { component: Slide1Title },
    { component: Slide2ExecutiveSummary },
    { component: Slide3Problem },
    { component: Slide4WorkflowVisualization },
    { component: Slide5Financials },
    { component: Slide6CustomerGrowth },
    { component: Slide7UnitEconomics },
    { component: Slide9ConversionFunnel },
    { component: Slide10AffiliateModel },
    { component: Slide11WhyPreProduction },
    { component: Slide12CompetitiveOverview },
    { component: Slide13CompetitiveFeatures },
    { component: Slide14Traction },
    { component: Slide15SampleProcessingCosts },
    { component: Slide16RevenueModel },
    { component: Slide17ProfitMargins },
    { component: Slide18RevenueProjections },
    { component: Slide19GoToMarket },
    { component: Slide20Roadmap },
    { component: Slide21FundingMonthly },
    { component: Slide22OneTimeCapitalCosts },
    { component: Slide23YouTubeChannels },
    { component: Slide24SubredditsGTMPart1 },
    { component: Slide25SubredditsGTMPart2 },
    { component: Slide26CACvsLTV },
    { component: Slide27SpendBreakdownPart1 },
    { component: Slide28SpendBreakdownPart2 },
    { component: Slide29CROImpact },
    { component: Slide30Team },
    { component: Slide31FundingAskFinal },
    { component: Slide32TheAsk }
  ];

  const SlideComponent = slides[currentSlide].component;

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col overflow-hidden">
      {/* Main Content - takes remaining space with proper scrolling */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4">
        <div
          key={currentSlide}
          className={`w-full max-w-7xl mx-auto h-full slide-enter-${slideDirection}`}
        >
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
                onClick={() => {
                  setSlideDirection(index > currentSlide ? 'next' : 'prev');
                  setCurrentSlide(index);
                }}
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
