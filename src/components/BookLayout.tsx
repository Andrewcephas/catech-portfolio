
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    { component: HeroPage, title: "Home", preview: "Welcome to my portfolio" },
    { component: AboutPage, title: "About", preview: "Learn about my journey" },
    { component: SkillsPage, title: "Skills", preview: "My technical expertise" },
    { component: ProjectsPage, title: "Projects", preview: "Recent work showcase" },
    { component: ContactPage, title: "Contact", preview: "Get in touch with me" },
    { component: DesignGeneratorPage, title: "Design Tool", preview: "AI-powered design generator" },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const CurrentPageComponent = pages[currentPage].component;
  const prevPageData = currentPage > 0 ? pages[currentPage - 1] : null;
  const nextPageData = currentPage < pages.length - 1 ? pages[currentPage + 1] : null;

  return (
    <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
      <div className="relative w-full max-w-6xl h-[85vh] perspective-1000">
        <div className="relative w-full h-full flex items-center justify-between">
          
          {/* Left Preview */}
          <div className="w-1/6 h-full flex flex-col justify-center p-4">
            {prevPageData && (
              <div
                onClick={() => setCurrentPage(currentPage - 1)}
                className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 rounded-lg border border-[#ff9900]/20 p-4 cursor-pointer hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <h4 className="text-[#ff9900] font-semibold text-sm mb-2">{prevPageData.title}</h4>
                <p className="text-gray-300 text-xs">{prevPageData.preview}</p>
              </div>
            )}
          </div>

          {/* Main Book */}
          <div className="w-2/3 h-full relative">
            <div 
              className={`w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border-4 border-[#ff9900] transform transition-all duration-500 relative overflow-hidden ${isFlipping ? 'rotate-y-180' : ''}`}
              style={{
                boxShadow: `0 25px 80px rgba(255, 153, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.6)`,
              }}
            >
              {/* Paper texture */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff9900' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
              
              {/* Book binding */}
              <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-[#017020] to-[#017020]/60 rounded-l-2xl" />
              
              {/* Page content */}
              <div className="p-8 h-full overflow-y-auto">
                <CurrentPageComponent />
              </div>
            </div>

            {/* Navigation arrows at bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || isFlipping}
                className="w-12 h-12 rounded-full bg-[#ff9900] hover:bg-[#ff9900]/80 flex items-center justify-center text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextPage}
                disabled={currentPage === pages.length - 1 || isFlipping}
                className="w-12 h-12 rounded-full bg-[#ff9900] hover:bg-[#ff9900]/80 flex items-center justify-center text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Preview */}
          <div className="w-1/6 h-full flex flex-col justify-center p-4">
            {nextPageData && (
              <div
                onClick={() => setCurrentPage(currentPage + 1)}
                className="bg-gradient-to-l from-[#017020]/10 to-[#ff9900]/10 rounded-lg border border-[#017020]/20 p-4 cursor-pointer hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <h4 className="text-[#017020] font-semibold text-sm mb-2">{nextPageData.title}</h4>
                <p className="text-gray-300 text-xs">{nextPageData.preview}</p>
              </div>
            )}
          </div>
        </div>

        {/* Page indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {pages.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentPage ? 'bg-[#ff9900] scale-125' : 'bg-gray-500 hover:bg-[#ff9900]/70'}`}
            />
          ))}
        </div>

        {/* Page counter */}
        <div className="absolute top-4 right-4 text-[#ff9900] font-semibold">
          {currentPage + 1}/{pages.length}
        </div>
      </div>
    </div>
  );
};

export default BookLayout;
