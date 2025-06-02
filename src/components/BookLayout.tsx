
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import DateTimeDisplay from "./DateTimeDisplay";
import VisitCounter from "./VisitCounter";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import DesignGeneratorPage from "./pages/DesignGeneratorPage";
import ResumePage from "./pages/ResumePage";
import TestimonialsPage from "./pages/TestimonialsPage";
import GuitarPage from "./pages/GuitarPage";
import BlogPage from "./pages/BlogPage";
import GamePage from "./pages/GamePage";

interface BookLayoutProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const BookLayout = ({ currentPage, setCurrentPage }: BookLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { title: "Home", component: <HeroPage onNavigateToProjects={() => setCurrentPage(3)} />, animation: "animate-page-peel-in" },
    { title: "About", component: <AboutPage />, animation: "animate-page-peel-in" },
    { title: "Skills", component: <SkillsPage />, animation: "animate-page-peel-in" },
    { title: "Projects", component: <ProjectsPage />, animation: "animate-page-peel-in" },
    { title: "Resume", component: <ResumePage />, animation: "animate-page-peel-in" },
    { title: "Testimonials", component: <TestimonialsPage />, animation: "animate-page-peel-in" },
    { title: "Guitar", component: <GuitarPage />, animation: "animate-page-peel-in" },
    { title: "Blog", component: <BlogPage />, animation: "animate-page-peel-in" },
    { title: "Games", component: <GamePage />, animation: "animate-page-peel-in" },
    { title: "Contact", component: <ContactPage />, animation: "animate-page-peel-in" },
    { title: "AI Design", component: <DesignGeneratorPage />, animation: "animate-page-peel-in" },
  ];

  // Listen for custom navigation events
  useEffect(() => {
    const handleNavigateToPage = (event: CustomEvent) => {
      setCurrentPage(event.detail);
    };

    window.addEventListener('navigateToPage', handleNavigateToPage as EventListener);
    return () => {
      window.removeEventListener('navigateToPage', handleNavigateToPage as EventListener);
    };
  }, [setCurrentPage]);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    setIsMenuOpen(false);
  };

  return (
    <div className="h-screen flex items-center justify-center p-1 sm:p-2 md:p-4 relative">
      {/* Date and Time Display - More responsive positioning */}
      <div className="fixed top-1 right-1 sm:top-2 sm:right-2 md:top-4 md:right-4 z-50">
        <DateTimeDisplay />
      </div>

      {/* Visit Counter - Better responsive positioning */}
      <div className="fixed top-1 left-10 sm:left-12 md:left-20 z-50">
        <VisitCounter />
      </div>

      {/* Hamburger Menu - Improved sizing and positioning */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-1 left-1 sm:top-2 sm:left-2 md:top-4 md:left-4 z-50 p-1.5 sm:p-2 md:p-3 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-xl shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
      >
        {isMenuOpen ? <X size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <Menu size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />}
      </button>

      {/* Menu Overlay - Enhanced modern design */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex items-center justify-center animate-fade-in">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-4 md:p-8 max-w-sm sm:max-w-md w-full mx-4 animate-scale-in max-h-[85vh] overflow-hidden shadow-2xl border border-white/20">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-4 md:mb-6 text-center">
              Navigation
            </h3>
            <div className="space-y-2 md:space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-full p-3 md:p-4 rounded-xl text-left transition-all duration-300 text-sm md:text-base backdrop-blur-sm ${currentPage === index
                    ? 'bg-gradient-to-r from-[#ff9900] to-[#017020] text-white shadow-lg'
                    : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80 hover:shadow-md'
                    }`}
                >
                  <span className="font-semibold">{page.title}</span>
                  {currentPage === index && (
                    <span className="ml-2 text-xs md:text-sm opacity-75">(Current)</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Book Container - Enhanced responsive design */}
      <div className="w-full max-w-8xl mx-auto h-full relative">
        <div className="w-full lg:w-[95%] xl:w-[98%] mx-auto h-full bg-white/95 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl overflow-hidden relative animate-scale-in border border-white/20">
          {/* Page Content */}
          <div className="h-full relative">
            <div
              className={`h-full ${pages[currentPage].animation}`}
              key={currentPage}
            >
              <div className="h-full overflow-y-auto custom-scrollbar">
                <div className="p-2 sm:p-4 md:p-8 min-h-full">
                  {pages[currentPage].component}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Button - Bottom Left Corner with better responsiveness */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="fixed bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 z-50 p-2 sm:p-3 md:p-4 bg-black/30 backdrop-blur-xl rounded-full text-white transition-all duration-300 hover:bg-black/50 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg border border-white/20"
        >
          <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Next Button - Bottom Right Corner with better responsiveness */}
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50 p-2 sm:p-3 md:p-4 bg-black/30 backdrop-blur-xl rounded-full text-white transition-all duration-300 hover:bg-black/50 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg border border-white/20"
        >
          <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Page Counter - Bottom Center with better responsiveness */}
        <div className="fixed bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex items-center justify-center bg-black/30 backdrop-blur-xl p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg border border-white/20">
            <div className="text-white font-medium px-2 sm:px-3 md:px-4 py-1 md:py-2 bg-white/20 rounded-full text-xs sm:text-sm min-w-[50px] sm:min-w-[60px] md:min-w-[80px] text-center backdrop-blur-sm">
              {currentPage + 1} / {pages.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLayout;
