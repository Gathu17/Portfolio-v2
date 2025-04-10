import React, { useEffect, useState, useRef } from 'react';

interface WaveTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  delay?: number;
  infinite?: boolean;
}

const WaveTypewriter: React.FC<WaveTextProps> = ({
  texts,
  className = '',
  speed = 100,
  delay = 2000,
  infinite = true,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const currentText = texts[currentTextIndex];
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const animate = () => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return currentText.slice(0, prev.length + 1);
      });

      let nextSpeed = speed;

      if (isDeleting) {
        nextSpeed = speed * 0.5; // Faster deletion
      }

      if (!isDeleting && displayText === currentText) {
        setIsWaiting(true);
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
          setIsWaiting(false);
        }, delay);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => 
          infinite ? (prev + 1) % texts.length : 
          prev < texts.length - 1 ? prev + 1 : prev
        );
        return;
      }

      timeoutRef.current = setTimeout(animate, nextSpeed);
    };

    timeoutRef.current = setTimeout(animate, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, displayText, isDeleting, isWaiting, speed, delay, texts, infinite]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <span className="inline-block relative">
        {displayText}
        <span 
          className={`
            absolute bottom-0 left-0 w-full h-0.5 bg-teal-500
            transform transition-transform duration-400 ease-in-out
            ${isWaiting ? 'scale-x-100' : 'scale-x-0'}
          `}
        />
        {/* <span 
          className={`
            ml-0.5 inline-block w-0.5 h-6 bg-blue-500
            animate-pulse
            ${isWaiting ? 'opacity-0' : 'opacity-100'}
          `}
        /> */}
      </span>
    </div>
  );
};


export default WaveTypewriter