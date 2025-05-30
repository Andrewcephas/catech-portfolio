
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
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-[#ff9900]/20">
      <div className="flex flex-col items-center space-y-2 text-sm">
        <div className="flex items-center space-x-2 text-[#017020] font-semibold">
          <Clock size={16} />
          <span>{formatTime(currentTime)}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar size={16} />
          <span>{formatDate(currentTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
