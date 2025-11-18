import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollTextColorComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
const text = "Une école de pilotage professionnelle fondée par le champion du monde Guillaume Antiga, offrant des stages pour tous âges et niveaux avec réelle expérience sur piste."

  const words = text.split(' ');

  return (
    <div className=" ">
     

      {/* Main text component */}
      <div 
        ref={containerRef}
        className="flex items-center justify-center  w-fit "
      >
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            {words.map((word, index) => {
              // Calculate progress for each word
              const start = index / words.length;
              const end = (index + 1) / words.length;
              
              return (
                <Word
                  key={index}
                  word={word}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </h2>
        </div>
      </div>

      
    </div>
  );
};

interface WordProps {
  word: string;
  progress: any;
  start: number;
  end: number;
}

const Word: React.FC<WordProps> = ({ word, progress, start, end }) => {
  // Transform scroll progress to color opacity for this specific word
  const opacity = useTransform(
    progress,
    [start, end],
    [0, 1]
  );

  return (
    <span className="relative inline-block mr-3 mb-2 ">
      {/* Black text (base layer) */}
      <span className="text-zinc-200">{word}</span>
      
      {/* White text (overlay that fades in) */}
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0 text-black"
      >
        {word}
      </motion.span>
    </span>
  );
};

export default ScrollTextColorComponent;