
import { useState } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import DesignGeneratorPage from "./pages/DesignGeneratorPage";

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
    <div className="h-screen flex items-center justify-center p-4 relative">
      {/* Hamburger Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-[#ff9900] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center animate-page-peel-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 animate-scale-in">
            <h3 className="text-2xl font-bold text-[#017020] mb-6 text-center">Navigation</h3>
            <div className="space-y-3">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${currentPage === index
                    ? 'bg-gradient-to-r from-[#ff9900] to-[#017020] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <span className="font-semibold">{page.title}</span>
                  {currentPage === index && (
                    <span className="ml-2 text-sm opacity-75">(Current)</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Book Container - Increased width for large screens */}
      <div className="w-full max-w-8xl mx-auto h-full relative">
        <div className="w-full lg:w-[70%] xl:w-[80%] mx-auto h-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden relative animate-scale-in">

          {/* Page Content - Enable scrolling for all pages */}
          <div className="h-full relative">
            <div
              className={`h-full ${pages[currentPage].animation}`}
              key={currentPage}
            >
              <div className="h-full overflow-y-auto">
                <div className="p-8">
                  {pages[currentPage].component}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Indicator and Navigation - Fixed positioning */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4 z-30">
          {/* Page Dots */}
          <div className="flex space-x-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                  ? 'bg-[#ff9900] scale-125 shadow-lg'
                  : 'bg-black/20 hover:bg-white/9s0'
                  }`}
              />
            ))}
          </div>

          {/* Page Number */}
          <div className="text-white/90 text-sm font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {currentPage + 1} / {pages.length}
          </div>

          {/* Navigation Arrows - Below page numbers */}
          <div className="flex space-x-6 mt-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-3 bg-black/20 backdrop-blur-sm rounded-full text-black transition-all duration-300 hover:bg-white/30 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-black transition-all duration-300 hover:bg-black/30 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLayout;
