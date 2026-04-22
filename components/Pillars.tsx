import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const pillars = [
  {
    id: "01",
    title: "RELENTLESS INNOVATION",
    desc: "Innovation is our breath; revolution is our compass. We don't follow rules; we change them."
  },
  {
    id: "02",
    title: "WE BUILD OUR OWN PATH",
    desc: "We don't wait for miracles. Every success is the result of relentless effort and deep insight."
  },
  {
    id: "03",
    title: "NEVER GIVE UP",
    desc: "Built by passion and a spirit that never yields. We are explorers conquering new heights."
  }
];

export const Pillars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-neutral-950">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        {pillars.map((pillar, index) => {
          return (
             <PillarCard 
                key={index} 
                data={pillar} 
                index={index} 
                total={pillars.length}
                progress={scrollYProgress} 
             />
          );
        })}
      </div>
    </section>
  );
};

interface PillarCardProps {
  data: any;
  index: number;
  total: number;
  progress: any;
}

const PillarCard: React.FC<PillarCardProps> = ({ data, index, total, progress }) => {
  // Calculate range for this specific card
  const step = 1 / total;
  const start = index * step;
  const end = start + step;

  const opacity = useTransform(progress, [start, start + step * 0.2, end - step * 0.2, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, start + step * 0.2, end - step * 0.2, end], [0.8, 1, 1, 1.2]);
  const y = useTransform(progress, [start, end], [50, -50]);

  return (
    <motion.div 
      style={{ opacity, scale, y }}
      className="absolute flex flex-col items-center justify-center max-w-4xl px-6 text-center"
    >
      <span className="font-mono text-sm text-neutral-500 mb-6 border border-neutral-800 px-3 py-1 rounded-full">THE HARD TRUTH</span>
      <h2 className="text-[12vw] md:text-[8vw] font-black leading-none text-white mix-blend-exclusion mb-8">
        {data.id}
      </h2>
      <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{data.title}</h3>
      <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
        {data.desc}
      </p>
    </motion.div>
  );
};