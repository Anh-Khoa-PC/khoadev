import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  { year: "2022", title: "THE AWAKENING", description: "Wrote my first line of Python. Hacked my school's Wi-Fi (ethically, of course). The obsession began." },
  { year: "2023", title: "THE CR FOUNDATION", description: "Founded CR Startup. A collective of teenage rebels building the next web. We shipped 3 products in 6 months." },
  { year: "2024", title: "NEXUS SECURITY", description: "Joined Nexus VN as Security Elite. Pentesting enterprise systems. Protecting the digital frontier." },
  { year: "NOW", title: "THE ACCELERATION", description: "Building at lightspeed. Mastering Next.js, Rust, and WebGL. The singularity is near." },
];

export const Chronicle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative min-h-[200vh] py-32 px-4 md:px-20 border-t border-neutral-900">
      <div className="sticky top-20 mb-20">
         <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">THE ORIGIN</h2>
         <div className="h-1 w-20 bg-white" />
      </div>

      <div className="max-w-4xl mx-auto space-y-40">
        {timelineData.map((item, index) => {
          return (
            <TimelineItem key={index} item={item} index={index} />
          );
        })}
      </div>
      
      {/* Background Line */}
      <motion.div 
        style={{ scaleY: scrollYProgress }}
        className="absolute left-8 md:left-[50%] top-0 bottom-0 w-[1px] bg-neutral-800 origin-top -z-10" 
      />
    </section>
  );
};

const TimelineItem: React.FC<{ item: any, index: number }> = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y, scale }}
      className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="flex-1 w-full">
        <div className="p-8 border border-neutral-900 bg-neutral-950/50 backdrop-blur-sm hover:border-white/50 transition-colors duration-500 group">
            <span className="font-mono text-sm text-neutral-500 mb-2 block tracking-widest">{item.year}</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{item.title}</h3>
            <p className="text-neutral-400 font-light leading-relaxed group-hover:text-neutral-200">{item.description}</p>
        </div>
      </div>
      <div className="hidden md:block w-4 h-4 bg-white rounded-full mt-8 shadow-[0_0_20px_rgba(255,255,255,0.5)] z-10" />
      <div className="flex-1" /> {/* Spacer */}
    </motion.div>
  );
};