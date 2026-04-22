import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, FolderKanban, Mail, Sparkles } from "lucide-react";
import VisitCounter from "./VisitCounter";

interface AppHeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const AppHeader = ({ activeSection, onNavigate }: AppHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', label: 'Home', icon: <Home size={16} /> },
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-md">
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
          <div
            className="h-full transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%`, backgroundColor: 'var(--brand-primary)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm bg-gray-900 text-white font-mono text-xs">
                {`</>`}
              </div>
              <span className="font-black text-xl text-gray-900 tracking-tighter uppercase">
                Andrew CEPHAS
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-0.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onNavigate(section.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === section.id
                    ? 'text-white shadow-sm bg-[var(--brand-primary)]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <VisitCounter />
              </div>

              {/* Mobile Menu Button - Now on the right */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-200 md:hidden"
              >
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex flex-col gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      onNavigate(section.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full px-4 py-4 text-left flex items-center gap-4 rounded-xl transition-all ${activeSection === section.id
                      ? 'text-white bg-[var(--brand-primary)] shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    <div className={activeSection === section.id ? 'text-white' : 'text-[var(--brand-primary)]'}>
                      {section.icon}
                    </div>
                    <span className="font-bold uppercase tracking-widest text-xs">{section.label}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-auto mb-10 pt-6 border-t border-gray-100">
                <VisitCounter />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppHeader;