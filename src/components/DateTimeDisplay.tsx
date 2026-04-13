
import { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-lg p-1.5 sm:p-2 md:p-3 shadow-lg border border-white/20">
      <div className="flex flex-col items-center space-y-0.5 sm:space-y-1 md:space-y-2 text-xs sm:text-sm">
        <div className="flex items-center space-x-1 sm:space-x-2 text-[#017020] font-semibold">
          <Clock size={10} className="sm:w-3 sm:h-3 md:w-4 md:h-4" />
          <span className="whitespace-nowrap text-[10px] sm:text-xs md:text-sm">{formatTime(currentTime)}</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600">
          <Calendar size={10} className="sm:w-3 sm:h-3 md:w-4 md:h-4" />
          <span className="whitespace-nowrap text-[8px] sm:text-[10px] md:text-xs">{formatDate(currentTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
