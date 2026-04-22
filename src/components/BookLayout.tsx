import { useEffect, useState, useCallback, useRef } from "react";
import { Page } from "@/types";
import { ChevronLeft, ChevronRight, Menu, X, Zap, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface BookLayoutProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pages: Page[];
  direction: 'next' | 'prev' | 'fade';
}

const BookLayout = ({ currentPage, setCurrentPage, pages, direction }: BookLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const handleNavigateToPage = (event: CustomEvent) => setCurrentPage(event.detail);
    window.addEventListener('navigateToPage', handleNavigateToPage as EventListener);
    return () => window.removeEventListener('navigateToPage', handleNavigateToPage as EventListener);
  }, [setCurrentPage]);

  const animateFlip = useCallback((targetPage: number) => {
    if (isFlipping) return;
    
    const nextPage = targetPage > currentPage ? 'next' : 'prev';
    setFlipDirection(nextPage);
    setIsFlipping(true);
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const duration = 1200;
      const progress = Math.min(elapsed / duration, 1);
      
      const eased = 1 - Math.pow(1 - progress, 3);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentPage(targetPage);
        setIsFlipping(false);
        setFlipDirection(null);
        startTimeRef.current = null;
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  }, [currentPage, isFlipping, setCurrentPage]);

  const goToNextPage = useCallback(() => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      animateFlip(currentPage + 1);
    }
  }, [currentPage, pages.length, isFlipping, animateFlip]);

  const goToPrevPage = useCallback(() => {
    if (currentPage > 0 && !isFlipping) {
      animateFlip(currentPage - 1);
    }
  }, [currentPage, isFlipping, animateFlip]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const getPageLabel = (index: number) => {
    if (index === 0) return "GET TO KNOW ME";
    if (index === pages.length - 1) return "END";
    return pages[index].title;
  };

  const getFlipProgress = () => {
    if (!startTimeRef.current || !isFlipping) return 0;
    return 0;
  };

  const progress = getFlipProgress();

  const getFlippingPageStyle = () => {
    if (!isFlipping || !flipDirection) return {};
    
    if (flipDirection === 'next') {
      return {
        transform: 'perspective(1200px) rotateY(-180deg)',
        transformOrigin: 'left center',
      };
    } else {
      return {
        transform: 'perspective(1200px) rotateY(180deg)',
        transformOrigin: 'right center',
      };
    }
  };

  const getCurlingStyle = () => {
    if (!isFlipping || !flipDirection) return {};
    
    return {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '40%',
      background: flipDirection === 'next' 
        ? 'linear-gradient(90deg, rgba(0,0,0,0.15) 0%, transparent 100%)'
        : 'linear-gradient(270deg, rgba(0,0,0,0.15) 0%, transparent 100%)',
      transform: flipDirection === 'next' ? 'skewY(-5deg)' : 'skewY(5deg)',
      transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
    };
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-1 sm:p-2">
      <div className="relative w-full h-full max-w-6xl flex flex-col md:flex-row">
        
        {/* Book Cover - Left Side */}
        <div className="hidden md:block w-1.5 h-full rounded-l-xl" style={{
          background: 'linear-gradient(90deg, #5c3d2e 0%, #8b5a3c 50%, #5c3d2e 100%)',
          boxShadow: '-8px 0 20px rgba(0,0,0,0.4), inset 2px 0 4px rgba(0,0,0,0.3)'
        }}>
          <div className="h-full w-full" style={{
            background: 'repeating-linear-gradient(180deg, transparent 0px, transparent 8px, rgba(0,0,0,0.15) 8px, rgba(0,0,0,0.15) 10px)'
          }} />
        </div>

        {/* Left Page - Previous */}
        <div className="hidden md:block w-[calc(50%-3px)] h-full relative pr-1">
          <div 
            className="absolute inset-0 rounded-l-xl transition-transform duration-[1200ms]"
            style={{
              background: 'linear-gradient(90deg, #f5f0e8 0%, #fff 100%)',
              boxShadow: '-8px 0 25px rgba(0,0,0,0.15), -4px 0 10px rgba(0,0,0,0.08)',
              transform: 'perspective(500px) rotateY(-3deg)',
              transformOrigin: 'right center',
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{
              background: 'linear-gradient(180deg, #e8dcc8 0%, #d4c4a8 50%, #e8dcc8 100%)',
              boxShadow: '2px 0 4px rgba(0,0,0,0.1)'
            }} />
            
            <div className="absolute right-2 top-4 bottom-4 w-16" style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.03) 20%, rgba(0,0,0,0.08) 80%, transparent)',
              transform: 'skewY(-2deg)'
            }}>
              {[...Array(20)].map((_, i) => (
                <div key={i} className="h-px mb-3" style={{
                  background: `rgba(0,0,0,${0.02 + Math.random() * 0.05})`,
                  transform: `translateX(${Math.random() * 3}px)`
                }} />
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-4" style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 100%)',
              borderRadius: '0 0 0 100%'
            }} />
            
            <div className="px-4 py-3 border-b border-gray-200/50 flex items-center justify-between" style={{
              background: 'linear-gradient(180deg, #fff 0%, #faf8f5 100%)'
            }}>
              <span className="text-xs font-bold text-gray-400 tracking-wider">{getPageLabel(Math.max(0, currentPage - 1))}</span>
              <button onClick={goToPrevPage} disabled={currentPage === 0 || isFlipping}
                className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 disabled:opacity-30 transition-all">
                <ChevronLeft size={14} />
              </button>
            </div>
            
            <div className="h-[calc(100%-56px)] p-4 overflow-y-auto" style={{
              background: 'linear-gradient(180deg, #fff 0%, #fdfcfa 100%)'
            }}>
              {currentPage > 0 ? (
                <div className="text-sm leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>{pages[currentPage - 1]?.component}</div>
              ) : (
                <div className="text-sm text-gray-400 text-center py-16 flex items-center justify-center">
                  <Sparkles size={24} className="animate-pulse text-gray-300" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Spine */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 z-10">
          <div className="h-full rounded-sm" style={{
            background: 'linear-gradient(90deg, #8b5a3c 0%, #a67c52 30%, #c9a86c 50%, #a67c52 70%, #8b5a3c 100%)',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)'
          }}>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1 h-[calc(100%-32px)]" style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.2) 90%, transparent 100%)',
              borderRadius: '1px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full" style={{
                  background: 'radial-gradient(circle at 30% 30%, #d4a574, #8b5a3c)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }} />
              ))}
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2" style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.2) 100%)'
          }} />
        </div>

        {/* Right Page - Current */}
        <div className="w-full md:w-[calc(50%-3px)] h-full relative">
          <div 
            className="absolute inset-0 rounded-r-xl transition-transform"
            style={{
              background: 'linear-gradient(270deg, #f5f0e8 0%, #fff 100%)',
              boxShadow: '8px 0 25px rgba(0,0,0,0.15), 4px 0 10px rgba(0,0,0,0.08)',
              transform: 'perspective(500px) rotateY(3deg)',
              transformOrigin: 'left center',
              transitionDuration: isFlipping ? '0s' : '500ms',
              ...getFlippingPageStyle()
            }}
          >
            {/* Page curl effect */}
            {isFlipping && <div style={getCurlingStyle()} />}
            
            <div className="absolute right-2 top-4 bottom-4 w-16" style={{
              background: 'linear-gradient(270deg, transparent, rgba(0,0,0,0.03) 20%, rgba(0,0,0,0.08) 80%, transparent)',
              transform: 'skewY(2deg)'
            }}>
              {[...Array(20)].map((_, i) => (
                <div key={i} className="h-px mb-3" style={{
                  background: `rgba(0,0,0,${0.02 + Math.random() * 0.05})`,
                  transform: `translateX(-${Math.random() * 3}px)`
                }} />
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-4" style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 100%)',
              borderRadius: '0 0 100% 0'
            }} />
            
            {/* Top Nav */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-sm border-b border-gray-200/50 rounded-t-xl" style={{
              background: 'linear-gradient(180deg, #fff 0%, #faf8f5 100%)'
            }}>
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                {pages.map((page, i) => (
                  <button key={i} onClick={() => !isFlipping && animateFlip(i)}
                    className={`px-2.5 py-1.5 text-xs whitespace-nowrap transition-all rounded-md ${
                      i === currentPage ? 'text-[#ff9900] font-bold bg-[#ff9900]/10' : 'text-gray-400 hover:text-[#ff9900] hover:bg-gray-100'
                    }`}
                  >
                    {getPageLabel(i)}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500 transition-all">
                  {isMenuOpen ? <X size={14} /> : <Menu size={14} />}
                </button>
                <ThemeToggle />
              </div>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-56px)] overflow-y-auto p-4 sm:p-5" style={{
              background: 'linear-gradient(180deg, #fff 0%, #fdfcfa 100%)'
            }}>
              <div className="min-h-full leading-relaxed" style={{fontFamily: 'Georgia, serif'}}>{pages[currentPage].component}</div>
            </div>

            {/* Bottom Nav */}
            <div className="sticky bottom-0 z-20 flex items-center justify-center gap-4 bg-white/90 backdrop-blur-sm border-t border-gray-200/50 px-4 py-3 rounded-b-xl" style={{
              background: 'linear-gradient(0deg, #faf8f5 0%, #fff 100%)'
            }}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button onClick={goToPrevPage} disabled={currentPage === 0 || isFlipping}
                    className="p-2 bg-[#ff9900]/10 hover:bg-[#ff9900] hover:text-white text-[#ff9900] rounded-full disabled:opacity-30 disabled:hover:bg-[#ff9900]/10 disabled:hover:text-[#ff9900] transition-all shadow-sm">
                    <ChevronLeft size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go to previous section</p>
                </TooltipContent>
              </Tooltip>
              <div className="flex items-center gap-1.5">
                <Zap size={12} className="text-[#ff9900] fill-[#ff9900] animate-pulse" />
                <span className="text-sm font-medium text-gray-500">{currentPage + 1}/{pages.length}</span>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button onClick={goToNextPage} disabled={currentPage === pages.length - 1 || isFlipping}
                    className="p-2 bg-[#017020]/10 hover:bg-[#017020] hover:text-white text-[#017020] rounded-full disabled:opacity-30 disabled:hover:bg-[#017020]/10 disabled:hover:text-[#017020] transition-all shadow-sm">
                    <ChevronRight size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Go to next section</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Book Cover - Right Side */}
        <div className="hidden md:block w-1.5 h-full rounded-r-xl" style={{
          background: 'linear-gradient(90deg, #5c3d2e 0%, #8b5a3c 50%, #5c3d2e 100%)',
          boxShadow: '8px 0 20px rgba(0,0,0,0.4), inset -2px 0 4px rgba(0,0,0,0.3)'
        }}>
          <div className="h-full w-full" style={{
            background: 'repeating-linear-gradient(180deg, transparent 0px, transparent 8px, rgba(0,0,0,0.15) 8px, rgba(0,0,0,0.15) 10px)'
          }} />
        </div>

        {/* Mobile Dots */}
        <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {pages.slice(0, 5).map((_, i) => (
            <button key={i} onClick={() => !isFlipping && setCurrentPage(i)}
              className={`h-1.5 rounded-full transition-all ${i === currentPage ? 'w-4 bg-[#ff9900]' : 'w-1.5 bg-gray-300'}`} />
          ))}
        </div>

        {/* Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-white rounded-2xl p-4 max-w-xs w-full mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
              <h3 className="text-lg font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-3 text-center">Pages</h3>
              <div className="space-y-1.5 max-h-64 overflow-y-auto">
                {pages.map((page, i) => (
                  <button key={i} onClick={() => { setCurrentPage(i); setIsMenuOpen(false); }}
                    className={`w-full p-2.5 rounded-xl text-sm text-left transition-all ${
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