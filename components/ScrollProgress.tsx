import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Spring physics for the bar to match the heavy/smooth scroll feel
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
        {/* The Track */}
        <div className="fixed top-0 right-0 w-[2px] h-full bg-neutral-900/50 z-[9990] hidden md:block">
            {/* The Thumb / Bar */}
            <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="w-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            />
        </div>

        {/* Digital Percentage Counter */}
        <motion.div 
            className="fixed bottom-8 right-8 z-[9990] hidden md:flex flex-col items-end pointer-events-none mix-blend-difference"
            initial={{ opacity: 0 }}
            animate={{ opacity: percentage > 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">System Depth</span>
                <div className="w-12 h-[1px] bg-neutral-700" />
            </div>
            <span className="text-6xl font-black text-white tracking-tighter tabular-nums leading-none mt-1">
                {percentage < 10 ? `0${percentage}` : percentage}
                <span className="text-lg align-top opacity-50">%</span>
            </span>
        </motion.div>
    </>
  );
};