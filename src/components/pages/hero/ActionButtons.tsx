import { Download, Eye, ArrowRight } from "lucide-react";

interface ActionButtonsProps {
  onViewWork: () => void;
  onDownloadCV: () => void;
}

const ActionButtons = ({ onViewWork, onDownloadCV }: ActionButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 justify-center px-1">
      <button
        onClick={onViewWork}
        className="group px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#ff9900] to-[#017020] text-white rounded-full font-semibold text-xs transition-all duration-300 hover:scale-105 hover:shadow-md"
      >
        <span className="flex items-center justify-center gap-1">
          <Eye size={12} />
          View My Work
          <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </button>
      <button
        onClick={onDownloadCV}
        className="group px-4 py-1.5 sm:py-2 border border-[#ff9900] text-[#ff9900] rounded-full font-semibold text-xs transition-all duration-300 hover:bg-[#ff9900] hover:text-white hover:scale-105 hover:shadow-md"
      >
        <span className="flex items-center justify-center gap-1">
          <Download size={12} />
          Download CV
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;