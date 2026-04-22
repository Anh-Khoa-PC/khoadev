import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: "CR_SYSTEM", subtitle: "Operating System", size: "large", img: "https://picsum.photos/800/600?grayscale&random=1" },
  { id: 2, title: "NEXUS_GUARD", subtitle: "Cybersecurity Tool", size: "small", img: "https://picsum.photos/400/400?grayscale&random=2" },
  { id: 3, title: "VOID_UI", subtitle: "Component Library", size: "small", img: "https://picsum.photos/400/400?grayscale&random=3" },
  { id: 4, title: "ECHO_CHAT", subtitle: "E2E Encrypted Msg", size: "medium", img: "https://picsum.photos/600/400?grayscale&random=4" },
];

export const Bento: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">ARTIFACTS</h2>
          <p className="font-mono text-neutral-500">SELECTED WORKS 2023-2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-[120vh] md:h-[80vh]">
          {projects.map((project, i) => (
            <BentoCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const isLarge = project.size === 'large';
  const isMedium = project.size === 'medium';
  
  const spanClass = isLarge 
    ? "md:col-span-2 md:row-span-2" 
    : isMedium 
      ? "md:col-span-2 md:row-span-1" 
      : "md:col-span-1 md:row-span-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative group overflow-hidden border border-neutral-900 bg-neutral-900/20 ${spanClass}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={project.img} 
          alt={project.title}
          className="w-full h-full object-cover opacity-50 transition-opacity duration-700 group-hover:opacity-30"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end h-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-mono text-xs text-neutral-400 mb-2 block tracking-widest uppercase">0{index + 1} // {project.subtitle}</span>
          <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:stroke-white transition-all duration-300" style={{ WebkitTextStroke: "1px white" }}>
            {project.title}
          </h3>
        </motion.div>
        
        <motion.div 
          className="w-full h-[1px] bg-white mt-6 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" 
        />
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};