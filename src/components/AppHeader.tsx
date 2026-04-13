import { Menu, X, Home, User, Code, FolderKanban, FileText, MessageSquare, Music, BookOpen, Gamepad2, Mail, Palette, Briefcase } from "lucide-react";
import DateTimeDisplay from "./DateTimeDisplay";
import VisitCounter from "./VisitCounter";
import ThemeToggle from "./ThemeToggle";

interface AppHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  pages: { title: string }[];
  currentPage: number;
  goToPage: (pageIndex: number) => void;
}

const AppHeader = ({ isMenuOpen, setIsMenuOpen, pages, currentPage, goToPage }: AppHeaderProps) => {
  const getPageIcon = (title: string) => {
    const icons: Record<string, React.ReactNode> = {
      Home: <Home size={16} />,
      About: <User size={16} />,
      Skills: <Code size={16} />,
      Projects: <FolderKanban size={16} />,
      Resume: <FileText size={16} />,
      Testimonials: <MessageSquare size={16} />,
      Guitar: <Music size={16} />,
      Blog: <BookOpen size={16} />,
      Games: <Gamepad2 size={16} />,
      Contact: <Mail size={16} />,
      "Create Poster": <Palette size={16} />,
      "Manage Projects": <Briefcase size={16} />,
    };
    return icons[title] || <FolderKanban size={16} />;
  };

  return (
    <>
      <header className="flex-shrink-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-[#ff9900]/10 hover:bg-[#ff9900] text-[#ff9900] hover:text-white rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <div className="hidden sm:block">
              <VisitCounter />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DateTimeDisplay />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in" 
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-4 md:p-6 max-w-sm w-full mx-4 shadow-2xl animate-scale-in max-h-[80vh] overflow-hidden border border-gray-200" 
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-4 text-center">
              Navigation
            </h3>
            <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-full p-3 rounded-xl text-left transition-all duration-300 text-sm flex items-center gap-3 ${
                    currentPage === index
                      ? 'bg-gradient-to-r from-[#ff9900] to-[#017020] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#ff9900]/10 hover:text-[#ff9900]'
                  }`}
                >
                  <span className="opacity-70">{getPageIcon(page.title)}</span>
                  <span className="font-medium">{page.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppHeader;