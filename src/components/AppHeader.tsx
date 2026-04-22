import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, FolderKanban, Mail, Sparkles } from "lucide-react";
import VisitCounter from "./VisitCounter";
import ColorSwitcher from "./ColorSwitcher";

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
    { id: 'welcome', label: 'Welcome', icon: <Sparkles size={16} /> },
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))' }}>
                <Sparkles size={14} className="text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">
                Andrew Cephas
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-0.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onNavigate(section.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === section.id
                        ? 'text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  style={activeSection === section.id ? { background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))' } : {}}
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
              <ColorSwitcher />
              
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="max-h-96 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    onNavigate(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                      activeSection === section.id
                        ? 'text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  style={activeSection === section.id ? { background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))' } : {}}
                >
                  {section.icon}
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default AppHeader;