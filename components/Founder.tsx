import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export const Founder: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mousePosition = useMousePosition();

  // We need local coordinates relative to the section, but for simplicity in this constrained env, 
  // we will use fixed positioning logic or a simplified mask approach.
  
  // Since useMousePosition returns client coordinates, let's use a CSS variable approach for performance
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setPosition({
        x: e.clientX - left,
        y: e.clientY - top
    });
    setIsHovered(true);
  };

  return (
    <section 
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden cursor-none"
    >
        {/* Hidden Content (Always visible but dark) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-neutral-900 text-center px-4">
                I AM THE FOUNDER.<br />
                I BUILD EVERYTHING ALONE.
            </h2>
        </div>

        {/* Revealed Content (Masked) */}
        <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-white pointer-events-none text-black mix-blend-normal"
            style={{
                maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
                WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
            }}
        >
             <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-center px-4">
                I AM THE FOUNDER.<br />
                I BUILD EVERYTHING ALONE.
            </h2>
        </motion.div>
        
        <div className="absolute bottom-12 uppercase font-mono text-xs text-neutral-500 tracking-widest z-30">
            [ Move Cursor to Reveal ]
        </div>
    </section>
  );
};