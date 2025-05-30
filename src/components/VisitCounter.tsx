
import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(5002);

  useEffect(() => {
    // Get stored visit count or use default
    const storedCount = localStorage.getItem('visitCount');
    if (storedCount) {
      setVisitCount(parseInt(storedCount));
    } else {
      // First visit, increment from 5002
      const newCount = 5002 + 1;
      setVisitCount(newCount);
      localStorage.setItem('visitCount', newCount.toString());
    }

    // Increment visit count on each page load
    const currentCount = parseInt(localStorage.getItem('visitCount') || '5002');
    const incrementedCount = currentCount + 1;
    setVisitCount(incrementedCount);
    localStorage.setItem('visitCount', incrementedCount.toString());
  }, []);

  return (
    <div className="flex items-center space-x-1 md:space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 md:px-3 py-1 md:py-2 shadow-lg border border-[#ff9900]/20">
      <Eye size={14} className="text-[#017020] md:w-4 md:h-4" />
      <span className="text-xs md:text-sm font-semibold text-gray-700">
        {visitCount.toLocaleString()} visits
      </span>
    </div>
  );
};

export default VisitCounter;
