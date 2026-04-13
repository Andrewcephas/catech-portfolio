import { useEffect, useState } from "react";
import { Page } from "@/types";
import { ChevronLeft, ChevronRight, Menu, X, Zap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface BookLayoutProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pages: Page[];
  direction: 'next' | 'prev' | 'fade';
}

const BookLayout = ({ currentPage, setCurrentPage, pages, direction }: BookLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleNavigateToPage = (event: CustomEvent) => setCurrentPage(event.detail);
    window.addEventListener('navigateToPage', handleNavigateToPage as EventListener);
    return () => window.removeEventListener('navigateToPage', handleNavigateToPage as EventListener);
  }, [setCurrentPage]);

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageLabel = (index: number) => {
    if (index === 0) return "CV";
    if (index === pages.length - 1) return "End";
    return pages[index].title;
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-0.5 sm:p-1">
      <div className="relative w-full h-full max-w-5xl flex flex-col md:flex-row">
        
        {/* Left Page - Previous */}
        <div className="hidden md:block w-1/2 h-full relative pr-0.5">
          <div 
            className="absolute inset-0 bg-white rounded-l-xl shadow-md"
            style={{boxShadow: '-8px 0 20px rgba(0,0,0,0.1), -4px 0 10px rgba(0,0,0,0.05)'}}
          >
            <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
            
            {/* Top label */}
            <div className="px-2 py-1.5 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500">{getPageLabel(Math.max(0, currentPage - 1))}</span>
              <button onClick={goToPrevPage} disabled={currentPage === 0}
                className="p-1 hover:bg-gray-100 rounded text-gray-400 disabled:opacity-30">
                <ChevronLeft size={12} />
              </button>
            </div>
            
            {/* Content */}
            <div className="h-[calc(100%-40px)] p-2 overflow-y-auto">
              {currentPage > 0 ? (
                <div className="text-xs">{pages[currentPage - 1]?.component}</div>
              ) : (
                <div className="text-xs text-gray-400 text-center py-8">First page</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Page - Current */}
        <div className="w-full md:w-1/2 h-full relative">
          <div 
            className="absolute inset-0 bg-white rounded-xl md:rounded-r-xl shadow-xl"
          >
            {/* Page curl */}
            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-16 h-16" style={{
                background: 'linear-gradient(135deg, #f0f0f0 50%, transparent 50%)',
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
              }} />
            </div>
            
            {/* Top Nav */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-2 py-1.5 bg-white border-b border-gray-100 rounded-t-xl">
              <div className="flex items-center gap-0.5 overflow-x-auto no-scrollbar">
                {pages.map((page, i) => (
                  <button key={i} onClick={() => setCurrentPage(i)}
                    className={`px-1.5 py-0.5 text-xs whitespace-nowrap transition-all ${
                      i === currentPage ? 'text-[#ff9900] font-bold' : 'text-gray-400 hover:text-[#ff9900]'
                    }`}
                  >
                    {getPageLabel(i)}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-0.5">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 hover:bg-gray-100 rounded text-gray-500">
                  {isMenuOpen ? <X size={12} /> : <Menu size={12} />}
                </button>
                <ThemeToggle />
              </div>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-40px)] overflow-y-auto p-2 sm:p-3">
              <div className="min-h-full">{pages[currentPage].component}</div>
            </div>

            {/* Bottom Nav */}
            <div className="sticky bottom-0 z-20 flex items-center justify-center gap-3 bg-white border-t border-gray-100 px-2 py-1.5 rounded-b-xl">
              <button onClick={goToPrevPage} disabled={currentPage === 0}
                className="p-1.5 bg-[#ff9900]/10 hover:bg-[#ff9900] hover:text-white text-[#ff9900] rounded-full disabled:opacity-30 disabled:hover:bg-[#ff9900]/10 disabled:hover:text-[#ff9900] transition-all">
                <ChevronLeft size={14} />
              </button>
              <div className="flex items-center gap-1">
                <Zap size={10} className="text-[#ff9900] fill-[#ff9900]" />
                <span className="text-xs font-medium text-gray-500">{currentPage + 1}/{pages.length}</span>
              </div>
              <button onClick={goToNextPage} disabled={currentPage === pages.length - 1}
                className="p-1.5 bg-[#017020]/10 hover:bg-[#017020] hover:text-white text-[#017020] rounded-full disabled:opacity-30 disabled:hover:bg-[#017020]/10 disabled:hover:text-[#017020] transition-all">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Spine */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 z-10">
          <div className="h-full bg-gradient-to-r from-[#b8860b] via-[#ff9900] to-[#b8860b] rounded-full shadow-sm">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1.5">
              {[...Array(3)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#017020]" />)}
            </div>
          </div>
        </div>

        {/* Mobile Dots */}
        <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1">
          {pages.slice(0, 5).map((_, i) => (
            <button key={i} onClick={() => setCurrentPage(i)}
              className={`h-1 rounded-full transition-all ${i === currentPage ? 'w-3 bg-[#ff9900]' : 'w-1 bg-gray-300'}`} />
          ))}
        </div>

        {/* Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-white rounded-xl p-3 max-w-xs w-full mx-3 shadow-xl" onClick={e => e.stopPropagation()}>
              <h3 className="text-base font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2 text-center">Pages</h3>
              <div className="space-y-1 max-h-60 overflow-y-auto">
                {pages.map((page, i) => (
                  <button key={i} onClick={() => { setCurrentPage(i); setIsMenuOpen(false); }}
                    className={`w-full p-2 rounded-lg text-sm text-left transition-all ${
                      i === currentPage ? 'bg-gradient-to-r from-[#ff9900] to-[#017020] text-white' : 'bg-gray-50 text-gray-600 hover:bg-[#ff9900]/10'
                    }`}
                  >
                    {getPageLabel(i)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookLayout;