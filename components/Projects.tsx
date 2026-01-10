import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "GROWTH OPERATOR",
    category: "REVENUE ACCELERATION",
    description: "A guarantee-backed agency scaling system. Dark-mode aesthetics meet high-performance funnels to add $10k+ recurring revenue in 90 days. Built for limited client capacity with high-ticket precision.",
    tags: ["Conversion System", "Agency Scaling", "Dark UI"],
    color: "#FF5C00", 
    image: "/grow_2.png" // Abstract orange/black graph/dashboard feel
  },
  {
    id: "02",
    title: "CR STARTUP",
    category: "DIGITAL REVOLUTION",
    description: "Not just a tech startup, but a breakthrough engine. A typography-driven digital manifesto redefining how technology shapes the future in Vietnam. Bold, Visionary, Relentless.",
    tags: ["Brand Identity", "Manifesto", "Future Tech"],
    color: "#FFFFFF",
    image: "/cr.png" // Cyberpunk/Tech vibe
  },
  {
    id: "03",
    title: "KONA APP",
    category: "SUPER APP ECOSYSTEM",
    description: "Pioneering automation in delivery. A fleet of robots and drones managed via a sleek, futuristic mobile interface. Delivering intelligence 24/7.",
    tags: ["Flutter", "Robotics", "Super App"],
    color: "#00C853",
    image: "/kona.png" // Mobile/Tech
  },
  {
    id: "04",
    title: "NEXUS PROFILE",
    category: "SECURITY IDENTITY",
    description: "The digital fortress of a Founder. Showcasing bug bounties from Netflix, Facebook, and Google. A living documentation of elite security achievements.",
    tags: ["Open Source", "Bug Bounty", "Profile"],
    color: "#3B82F6",
    image: "/nexus.png" // Matrix/Hacker code
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="bg-neutral-950 py-32 px-4 md:px-12 relative z-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-end justify-between border-b border-neutral-800 pb-8">
            <div>
                <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase block mb-2">// SELECTED WORKS</span>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">CASE STUDIES</h2>
            </div>
            <div className="hidden md:block text-right">
                <p className="text-neutral-400 font-mono text-sm">2023 — 2026</p>
                <p className="text-neutral-400 font-mono text-sm">ARCHIVE_V2</p>
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 md:gap-32">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof projects[0], index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-neutral-900/50 pb-20 last:border-0"
    >
      {/* Project Info */}
      <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
        <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full">
                {project.id}
            </span>
            <span className="font-mono text-xs text-white uppercase tracking-wider" style={{ color: project.color }}>
                ● {project.category}
            </span>
        </div>
        
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight group-hover:text-neutral-200 transition-colors">
            {project.title}
        </h3>
        
        <p className="text-neutral-400 text-lg leading-relaxed mb-8 pl-6 border-l border-neutral-800">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-neutral-500 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded">
                    {tag}
                </span>
            ))}
        </div>

        <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors group/btn">
                <span>View Case Study</span>
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
        </div>
      </div>

      {/* Project Image */}
      <div className="lg:col-span-7 h-[50vh] md:h-[60vh] relative overflow-hidden rounded-lg order-1 lg:order-2 bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors duration-500">
        <motion.div 
            className="absolute inset-0 bg-neutral-950"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
             <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </motion.div>
  );
};