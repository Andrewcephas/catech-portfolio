import { ChevronLeft, ChevronRight, Zap } from "lucide-react";

interface AppFooterProps {
  currentPage: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
}

const AppFooter = ({ currentPage, totalPages, prevPage, nextPage }: AppFooterProps) => {
  const progress = ((currentPage + 1) / totalPages) * 100;

  return (
    <footer className="flex-shrink-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 z-40">
      <div className="relative flex items-center justify-center px-3 py-2">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5">
            <span className="text-sm font-medium text-gray-700">
              {currentPage + 1} / {totalPages}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-2 bg-[var(--brand-secondary)]/10 hover:bg-[var(--brand-secondary)] text-[var(--brand-secondary)] rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-30 disabled:hover:scale-100"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <div className="hidden md:block w-24 lg:w-32">
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--brand-primary)] rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="p-2 bg-[var(--brand-primary)]/10 hover:bg-[var(--brand-primary)] text-[var(--brand-primary)] rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-30 disabled:hover:scale-100"
            aria-label="Next page"
          >
            <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;