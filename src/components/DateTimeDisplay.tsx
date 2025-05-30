
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
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 md:p-3 shadow-lg border border-[#ff9900]/20">
      <div className="flex flex-col items-center space-y-1 md:space-y-2 text-xs md:text-sm">
        <div className="flex items-center space-x-1 md:space-x-2 text-[#017020] font-semibold">
          <Clock size={12} className="md:w-4 md:h-4" />
          <span className="whitespace-nowrap">{formatTime(currentTime)}</span>
        </div>
        <div className="flex items-center space-x-1 md:space-x-2 text-gray-600">
          <Calendar size={12} className="md:w-4 md:h-4" />
          <span className="whitespace-nowrap text-xs">{formatDate(currentTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
