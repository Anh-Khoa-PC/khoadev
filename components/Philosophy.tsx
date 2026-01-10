import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const principles = [
  {
    id: "I",
    title: "INNOVATION",
    subtitle: "IS OUR COMPASS",
    desc: "We don't follow rules; we change them. Standard solutions are for standard problems."
  },
  {
    id: "II",
    title: "SELF-MADE",
    subtitle: "WE BUILD THE PATH",
    desc: "CR Startup was born from skepticism. Every success is the result of relentless effort."
  },
  {
    id: "III",
    title: "RELENTLESS",
    subtitle: "SPIRIT NEVER YIELDS",
    desc: "I am an explorer conquering new heights. Good enough is never enough."
  }
];

export const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white text-black">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Text Texture */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
             <div className="text-[40vw] font-black leading-none tracking-tighter">CR</div>
        </div>

        <div className="relative w-full max-w-7xl px-6 md:px-12 flex flex-col justify-center h-full">
            {principles.map((p, i) => (
                <PrincipleItem key={i} data={p} index={i} total={principles.length} progress={scrollYProgress} />
            ))}
        </div>

        <div className="absolute bottom-12 left-0 w-full text-center">
             <div className="inline-flex flex-col items-center gap-2">
                 <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Core Philosophy</span>
                 <div className="w-px h-12 bg-black/20" />
             </div>
        </div>
      </div>
    </section>
  );
};

const PrincipleItem: React.FC<{ data: any, index: number, total: number, progress: any }> = ({ data, index, total, progress }) => {
    const step = 1 / total;
    const start = index * step;
    const end = start + step;

    // Animation logic
    const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
    const y = useTransform(progress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);
    const filter = useTransform(progress, [start, start + 0.1, end - 0.1, end], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

    return (
        <motion.div 
            style={{ opacity, y, filter }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center"
        >
            <span className="font-black text-9xl md:text-[12rem] leading-[0.8] tracking-tighter mb-4 block">
                {data.title}
            </span>
            <span className="text-2xl md:text-5xl font-light tracking-tight block mb-8 text-neutral-600">
                {data.subtitle}
            </span>
            <p className="max-w-xl text-sm md:text-lg font-mono text-neutral-500 uppercase tracking-wide leading-relaxed">
                / {data.desc}
            </p>
        </motion.div>
    );
};