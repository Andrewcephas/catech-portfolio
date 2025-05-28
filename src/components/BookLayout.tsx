
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroPage from "./pages/HeroPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

interface BookLayoutProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const BookLayout = ({ currentPage, setCurrentPage }: BookLayoutProps) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const pages = [
    { component: HeroPage, title: "Home" },
    { component: AboutPage, title: "About" },
    { component: SkillsPage, title: "Skills" },
    { component: ProjectsPage, title: "Projects" },
    { component: ContactPage, title: "Contact" },
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

  return (
    <div className="flex items-center justify-center min-h-screen p-4 pt-20">
      <div className="relative w-full max-w-7xl h-[80vh] perspective-1000">
        {/* Book Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Left Side Pages */}
          <div className="absolute left-0 w-1/4 h-full flex flex-col space-y-4 p-4">
            {pages.map((page, index) => (
              index !== currentPage && (
                <div
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`
                    flex-1 bg-gradient-to-r from-[#ff9900]/20 to-[#017020]/20 
                    rounded-lg border border-[#ff9900]/30 p-4 cursor-pointer
                    transition-all duration-300 hover:scale-105 hover:border-[#ff9900]
                    backdrop-blur-sm animate-fade-in
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-[#ff9900] font-bold text-sm mb-2">{page.title}</h3>
                  <div className="text-gray-300 text-xs">Click to view</div>
                </div>
              )
            ))}
          </div>

          {/* Main Book Page */}
          <div className="w-1/2 h-full mx-8 relative">
            <div 
              className={`
                w-full h-full bg-gradient-to-br from-white to-gray-100 
                rounded-2xl shadow-2xl border-4 border-[#ff9900]
                transform transition-all duration-500 relative overflow-hidden
                ${isFlipping ? 'rotate-y-180' : ''}
              `}
              style={{
                boxShadow: `
                  0 20px 60px rgba(255, 153, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.6)
                `,
              }}
            >
              {/* Paper Texture Overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff9900' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
              
              {/* Book Binding */}
              <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-r from-[#017020] to-[#017020]/80 rounded-l-2xl"></div>
              
              {/* Page Content */}
              <div className="p-8 h-full overflow-y-auto">
                <CurrentPageComponent />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevPage}
              disabled={currentPage === 0 || isFlipping}
              className={`
                absolute left-2 top-1/2 transform -translate-y-1/2 
                w-12 h-12 rounded-full bg-[#ff9900] hover:bg-[#ff9900]/80
                flex items-center justify-center text-white
                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg hover:shadow-xl hover:scale-110
              `}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1 || isFlipping}
              className={`
                absolute right-2 top-1/2 transform -translate-y-1/2 
                w-12 h-12 rounded-full bg-[#ff9900] hover:bg-[#ff9900]/80
                flex items-center justify-center text-white
                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg hover:shadow-xl hover:scale-110
              `}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Right Side Pages */}
          <div className="absolute right-0 w-1/4 h-full flex flex-col space-y-4 p-4">
            {pages.map((page, index) => (
              index !== currentPage && (
                <div
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`
                    flex-1 bg-gradient-to-l from-[#ff9900]/20 to-[#017020]/20 
                    rounded-lg border border-[#017020]/30 p-4 cursor-pointer
                    transition-all duration-300 hover:scale-105 hover:border-[#017020]
                    backdrop-blur-sm animate-fade-in
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-[#017020] font-bold text-sm mb-2">{page.title}</h3>
                  <div className="text-gray-300 text-xs">Click to view</div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Page Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {pages.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`
                w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                ${index === currentPage ? 'bg-[#ff9900] scale-125' : 'bg-gray-500 hover:bg-[#ff9900]/70'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookLayout;
