import { Download, Eye, ArrowRight } from "lucide-react";

interface ActionButtonsProps {
  onViewWork: () => void;
  onDownloadCV: () => void;
}

const ActionButtons = ({ onViewWork, onDownloadCV }: ActionButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center px-1">
      <button
        onClick={onViewWork}
        className="group w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
      >
        <span className="flex items-center justify-center gap-2">
          <Eye size={16} />
          View My Work
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
      <button
        onClick={onDownloadCV}
        className="group w-full sm:w-auto px-6 py-3 border border-[var(--brand-primary)] text-[var(--brand-primary)] rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-[var(--brand-primary)] hover:text-white hover:scale-105 hover:shadow-md"
      >
        <span className="flex items-center justify-center gap-2">
          <Download size={16} />
          Download CV
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;