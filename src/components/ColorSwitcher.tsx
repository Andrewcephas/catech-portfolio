import { Palette, Check } from "lucide-react";
import { useState, useEffect } from "react";

const colorThemes = [
  { name: "Green & Orange", primary: "#017020", secondary: "#ff9900" },
  { name: "Blue & Purple", primary: "#3B82F6", secondary: "#8B5CF6" },
  { name: "Pink & Cyan", primary: "#EC4899", secondary: "#06B6D4" },
  { name: "Red & Orange", primary: "#EF4444", secondary: "#F97316" },
  { name: "Teal & Lime", primary: "#14B8A6", secondary: "#84CC16" },
  { name: "Indigo & Pink", primary: "#6366F1", secondary: "#EC4899" },
];

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      const { primary, secondary } = JSON.parse(savedTheme);
      document.documentElement.style.setProperty('--brand-primary', primary);
      document.documentElement.style.setProperty('--brand-secondary', secondary);
      const index = colorThemes.findIndex(t => t.primary === primary);
      if (index !== -1) setActiveTheme(index);
    }
  }, []);

  const handleThemeChange = (index: number) => {
    setActiveTheme(index);
    const theme = colorThemes[index];
    
    document.documentElement.style.setProperty('--brand-primary', theme.primary);
    document.documentElement.style.setProperty('--brand-secondary', theme.secondary);
    
    localStorage.setItem('portfolio-theme', JSON.stringify({ primary: theme.primary, secondary: theme.secondary }));
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all shadow-sm"
        title="Change colors"
      >
        <Palette size={18} className="text-gray-700" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-12 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50 w-64">
          <h3 className="text-sm font-bold text-gray-800 mb-3">Choose Color Theme</h3>
          <div className="grid grid-cols-2 gap-2">
            {colorThemes.map((theme, index) => (
              <button
                key={index}
                onClick={() => handleThemeChange(index)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg border-2 transition-all ${
                  activeTheme === index ? 'border-gray-800' : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                <div className="flex gap-0.5">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <div 
                    className="w-4 h-4 rounded-full -ml-1"
                    style={{ backgroundColor: theme.secondary }}
                  />
                </div>
                <span className="text-xs text-gray-600">{theme.name}</span>
                {activeTheme === index && <Check size={12} className="text-gray-800" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSwitcher;