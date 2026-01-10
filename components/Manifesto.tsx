import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const phrase = "We are not just a tech startup in Vietnam. In this dynamic land, we are committed to creating game-changing breakthroughs. By maximizing the power of technology, we shape the trends of the future. THAT IS EXACTLY OUR GOAL.";

export const Manifesto: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = phrase.split(" ");

  return (
    <section ref={container} className="min-h-[60vh] flex items-center justify-center px-4 md:px-20 py-24 bg-black">
      <div className="max-w-5xl flex flex-wrap gap-x-3 gap-y-2">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        })}
      </div>
    </section>
  );
};

interface WordProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="text-2xl md:text-5xl font-medium tracking-tight text-white transition-colors duration-500">
      {children}
    </motion.span>
  )
}