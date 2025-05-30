import { useState } from "react";
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
    { title: "Home", component: <HeroPage />, animation: "animate-page-peel-in" },
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
    <div className="h-screen flex items-center justify-center p-2 md:p-4 relative">
      {/* Date and Time Display - Responsive positioning */}
      <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50">
        <DateTimeDisplay />
      </div>

      {/* Visit Counter - Responsive positioning next to hamburger */}
      <div className="fixed top-2 left-12 md:top-4 md:left-20 z-50">
        <VisitCounter />
      </div>

      {/* Hamburger Menu - Responsive sizing */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-2 left-2 md:top-4 md:left-4 z-50 p-2 md:p-3 bg-[#ff9900] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        {isMenuOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
      </button>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center animate-page-peel-in">
          <div className="bg-white rounded-2xl p-4 md:p-8 max-w-md w-full mx-4 animate-scale-in max-h-[80vh] overflow-hidden">
            <h3 className="text-xl md:text-2xl font-bold text-[#017020] mb-4 md:mb-6 text-center">Navigation</h3>
            <div className="space-y-2 md:space-y-3 max-h-96 overflow-y-auto">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-full p-3 md:p-4 rounded-lg text-left transition-all duration-300 text-sm md:text-base ${currentPage === index
                    ? 'bg-gradient-to-r from-[#ff9900] to-[#017020] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
        <div className="w-full lg:w-[95%] xl:w-[98%] mx-auto h-full bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl overflow-hidden relative animate-scale-in">
          {/* Page Content */}
          <div className="h-full relative">
            <div
              className={`h-full ${pages[currentPage].animation}`}
              key={currentPage}
            >
              <div className="h-full overflow-y-auto">
                <div className="p-4 md:p-8 min-h-full">
                  {pages[currentPage].component}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Responsive Navigation Controls */}
        <div className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center justify-center space-x-2 md:space-x-4 bg-black/30 backdrop-blur-sm p-2 md:p-3 rounded-full">
            {/* Previous Button */}
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 bg-white/20 rounded-full text-white transition-all duration-300 hover:bg-white/30 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronLeft size={16} className="md:w-5 md:h-5" />
            </button>

            {/* Page Dots - Hidden on mobile */}
            <div className="hidden md:flex space-x-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${currentPage === index
                    ? 'bg-[#ff9900] scale-125 shadow-lg'
                    : 'bg-white/60 hover:bg-white/90'
                    }`}
                />
              ))}
            </div>

            {/* Page Number - Center */}
            <div className="text-white font-medium px-3 md:px-4 py-1 md:py-2 bg-white/20 rounded-full text-xs md:text-sm min-w-[60px] md:min-w-[80px] text-center">
              {currentPage + 1} / {pages.length}
            </div>

            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className="p-2 bg-white/20 rounded-full text-white transition-all duration-300 hover:bg-white/30 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronRight size={16} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLayout;
