import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
}

const TypewriterText = ({ text, speed = 50 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    setDisplayText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed]);

  useEffect(() => {
    if (!isTyping) {
      const pauseTimer = setTimeout(() => {
        setIsTyping(true);
        let index = 0;
        const typeInterval = setInterval(() => {
          if (index <= text.length) {
            setDisplayText(text.slice(0, index));
            index++;
          } else {
            setIsTyping(false);
            clearInterval(typeInterval);
          }
        }, speed);
        return () => clearInterval(typeInterval);
      }, 2500);
      return () => clearTimeout(pauseTimer);
    }
  }, [isTyping, text, speed]);

  return (
    <div className="h-5 sm:h-6 mb-1.5">
      <p className="text-xs sm:text-sm font-medium text-gray-700 truncate">
        {displayText}
        <span className={`inline-block w-0.5 h-3 sm:h-4 ml-0.5 align-middle bg-[#ff9900] ${isTyping ? 'animate-pulse' : ''}`}></span>
      </p>
    </div>
  );
};

export default TypewriterText;