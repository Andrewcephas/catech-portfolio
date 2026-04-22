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
    <div className="h-8 sm:h-10 mb-3">
      <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 leading-snug max-w-4xl">
        {displayText}
        <span className={`inline-block w-0.5 h-4 sm:h-5 ml-1 align-middle bg-[#e85d04] ${isTyping ? 'animate-pulse' : ''}`}></span>
      </p>
    </div>
  );
};

export default TypewriterText;