import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "VANTAGE V-AI",
    category: "HIGH-PERFORMANCE AI INFRASTRUCTURE",
    description: "The Fastest Long-Context Retrieval Infrastructure for AI Agents. A stateless graph engine designed for hyper-scale data architectures, processing 10^12 nodes with ~0MB RAM footprint. Engineered for 10M+ tokens scanning in < 0.15s with 100.00% accuracy.",
    tags: ["Graph Engine", "Stateless", "O(1) Complexity", "Throughput: 82M+ tokens/sec"],
    color: "#22C55E",
    link: "https://github.com/Anh-Khoa-PC/VANTAGE-V-AI"
  },
  {
    id: "02",
    title: "XRGO SECURITIES",
    category: "ENTERPRISE CYBERSECURITY",
    description: "Co-Founded to provide enterprise-level digital defense. Leading a global team to expose hidden vulnerabilities and block billions of DDoS attempts for high-stakes infrastructure.",
    tags: ["Threat Hunting", "AI Security", "Zero Trust"],
    color: "#EF4444",
    link: "https://xrgosecurities.com/"
  },
  {
    id: "03",
    title: "CR STARTUP",
    category: "DIGITAL REVOLUTION",
    description: "Not just a tech startup, but a breakthrough engine. A typography-driven digital manifesto redefining how technology shapes the future in Vietnam. Bold, Visionary, Relentless.",
    tags: ["Brand Identity", "Manifesto", "Future Tech"],
    color: "#FFFFFF",
    link: "http://crvn.netlify.app/"
  },
  {
    id: "04",
    title: "HACKER GEN Z: ROOTS",
    category: "PERSONAL MEMOIR / VOL. 1",
    description: "An intimate narrative of my journey into the digital abyss. This Vietnamese memoir documents the first chapters of my life—from my first line of code at age 7 to the philosophy that drives my security research today.",
    tags: ["Biography", "Philosophy", "Vietnamese", "Hacker Culture"],
    color: "#3B82F6",
    link: "https://bit.ly/4aNe3lU"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="bg-neutral-950 py-32 px-4 md:px-12 relative z-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-end justify-between border-b border-neutral-800 pb-8">
            <div>
                <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase block mb-2">// SELECTED WORKS</span>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase">Portfolios</h2>
            </div>
            <div className="hidden md:block text-right">
                <p className="text-neutral-400 font-mono text-sm">2023 — 2026</p>
                <p className="text-neutral-400 font-mono text-sm">PROPRIETARY_V3</p>
            </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { 
      damping: 20, 
      stiffness: 80,
      mass: 0.5 
  });

  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 1], [50, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="group border-b border-neutral-900 pb-20 last:border-0"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full">
                {project.id}
            </span>
            <span className="font-mono text-[10px] text-white uppercase tracking-[0.2em]" style={{ color: project.color }}>
                ● {project.category}
            </span>
        </div>
        
        <h3 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase leading-none">
            {project.title}
        </h3>
        
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl font-light">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono text-neutral-400 bg-neutral-900/50 border border-neutral-800 px-3 py-1 rounded-sm uppercase tracking-wider">
                    {tag}
                </span>
            ))}
        </div>

        <div className="flex items-center gap-6">
            <a 
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-green-500 transition-colors group/btn border border-neutral-800 px-6 py-3 rounded-sm hover:border-green-500/50"
            >
                <span>Launch Project</span>
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
        </div>
      </div>
    </motion.div>
  );
};