import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from 'framer-motion';

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity: number;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Apply scroll velocity effect
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  // Reusable text block
  const TextBlock = () => (
    <span className="block mr-16 text-6xl md:text-8xl font-black uppercase tracking-tighter italic text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>
      {children}
    </span>
  );

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap py-8 border-y border-neutral-900 bg-black/50 backdrop-blur-sm">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <TextBlock />
        <TextBlock />
        <TextBlock />
        <TextBlock />
      </motion.div>
    </div>
  );
};

export const Ticker: React.FC = () => {
  return (
    <section className="relative z-20 py-24 bg-black">
        <ParallaxText baseVelocity={-2}>
             CODING SINCE 2ND GRADE — FOUNDER @ CR — SECURITY ELITE — FULL STACK — 
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
             10,000+ COMMITS — 50+ VULNERABILITIES FOUND — COFFEE OVERDOSE —
        </ParallaxText>
    </section>
  );
};