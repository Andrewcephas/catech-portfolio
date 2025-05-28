
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light-theme');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-[#ff9900]/20 backdrop-blur-sm border border-[#ff9900]/30 hover:bg-[#ff9900]/30 transition-all duration-300"
    >
      {isDark ? (
        <Sun size={20} className="text-[#ff9900]" />
      ) : (
        <Moon size={20} className="text-[#017020]" />
      )}
    </button>
  );
};

export default ThemeToggle;
