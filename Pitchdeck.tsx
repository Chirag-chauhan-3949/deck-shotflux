import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Slide1Title,
  Slide2ExecutiveSummary,
  Slide3Problem,
  Slide4WorkflowVisualization,
  Slide5Financials,
  Slide6CustomerGrowth,
  Slide7UnitEconomics,
  Slide8FundingAsk,
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
} from './slides';

const PitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');

  // Inject custom styles/animations once
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar { width: 10px; height: 10px; }
      ::-webkit-scrollbar-track { background: #1f2937; border-radius: 10px; }
      ::-webkit-scrollbar-thumb { background: #10b981; border-radius: 10px; border: 2px solid #1f2937; }
      ::-webkit-scrollbar-thumb:hover { background: #059669; }
      * { scrollbar-width: thin; scrollbar-color: #10b981 #1f2937; }

      @media (max-width: 768px) {
        .table-container { overflow-x: auto; -webkit-overflow-scrolling: touch; }
      }

      @keyframes fadeInSlide { from { opacity: 0; } to { opacity: 1; } }
      @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
      @keyframes slideUp { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
      @keyframes scaleIn { from { opacity: 0; transform: scale(0.95);} to { opacity: 1; transform: scale(1);} }
      @keyframes glow { 0%,100%{ box-shadow: 0 0 5px rgba(16,185,129,0.3);} 50%{ box-shadow: 0 0 20px rgba(16,185,129,0.6);} }

      .slide-enter-next { animation: fadeInSlide 0.4s ease-out forwards; }
      .slide-enter-prev { animation: fadeInSlide 0.4s ease-out forwards; }
      .fade-in { animation: fadeIn 0.6s ease-out forwards; }
      .slide-up { animation: slideUp 0.7s ease-out forwards; }
      .scale-in { animation: scaleIn 0.5s ease-out forwards; }
      .glow-pulse { animation: glow 2s ease-in-out infinite; }

      .stagger-1 { animation-delay: 0.1s; opacity: 0; }
      .stagger-2 { animation-delay: 0.2s; opacity: 0; }
      .stagger-3 { animation-delay: 0.3s; opacity: 0; }
      .stagger-4 { animation-delay: 0.4s; opacity: 0; }
      .stagger-5 { animation-delay: 0.5s; opacity: 0; }
      .stagger-6 { animation-delay: 0.6s; opacity: 0; }

      .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(16,185,129,0.3); }
      .hover-glow { transition: box-shadow 0.3s ease; }
      .hover-glow:hover { box-shadow: 0 0 20px rgba(16,185,129,0.4); }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Meta tags + title
  useEffect(() => {
    document.title = 'Shotflux Investor Pitch Deck';
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

    setMetaTag('description', 'Raising ₹1.25 Cr to reach 500 active paying users in 6 months. AI-powered pre-production for filmmakers.');
    setMetaTag('og:title', 'ShotFlux Investor Pitch Deck', true);
    setMetaTag('og:description', 'Raising ₹1.25 Cr to reach 500 active paying users in 6 months. AI-powered pre-production for filmmakers.', true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', 'ShotFlux Investor Pitch Deck');
    setMetaTag('twitter:description', 'Raising ₹1.25 Cr to reach 500 active paying users in 6 months. AI-powered pre-production for filmmakers.');
  }, []);

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

  const nextSlide = () => {
    setSlideDirection('next');
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setSlideDirection('prev');
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Click/tap left-right navigation
  const handleSlideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const { left, width } = currentTarget.getBoundingClientRect();
    const clickX = clientX - left;

    if (clickX < width / 3) {
      prevSlide();
    } else if (clickX > width / 3) {
      nextSlide();
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col overflow-hidden">
      {/* Main Content */}
      <div
        className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4 cursor-pointer"
        onClick={handleSlideClick}
      >
        <div
          key={currentSlide}
          className={`w-full max-w-7xl mx-auto min-h-full flex items-center slide-enter-${slideDirection}`}
        >
          <div className="w-full py-4">
            <SlideComponent />
          </div>
        </div>
      </div>

      {/* Navigation Bar - fixed at bottom and mobile friendly */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div
          className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between"
          role="navigation"
          aria-label="Slide navigation"
        >
          {/* Previous button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-disabled={currentSlide === 0}
            aria-label="Previous slide"
            className={`flex items-center justify-center gap-2 w-28 sm:w-auto px-4 py-3 rounded-lg font-semibold text-sm transition-all shadow-sm ${
              currentSlide === 0
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-white sm:hidden">Prev</span>
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Slide count + dots */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-gray-400 text-sm sm:text-base font-medium">
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
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-green-500' : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  style={{ minWidth: index === currentSlide ? 32 : 8 }}
                />
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            aria-disabled={currentSlide === slides.length - 1}
            aria-label="Next slide"
            className={`flex items-center justify-center gap-2 w-28 sm:w-auto px-4 py-3 rounded-lg font-semibold text-sm transition-all shadow-sm ${
              currentSlide === slides.length - 1
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            <span className="text-white sm:hidden">Next</span>
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
