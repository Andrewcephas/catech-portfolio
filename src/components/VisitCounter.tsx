
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
    <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-[#ff9900]/20">
      <Eye size={16} className="text-[#017020]" />
      <span className="text-sm font-semibold text-gray-700">
        {visitCount.toLocaleString()} visits
      </span>
    </div>
  );
};

export default VisitCounter;
