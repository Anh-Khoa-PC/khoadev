import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Cpu, Code2, ArrowRight } from 'lucide-react';

const skills = [
    {
        icon: <Layers className="w-5 h-5" />,
        title: "Full-Stack Architecture",
        desc: "Designing ecosystems. Scalable backends in Rust/Node to fluid frontends in React/WebGL.",
        stat: "100% COVERAGE"
    },
    {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Nexus Security Elite",
        desc: "Founder of Nexus VN. Code born secure. Deep audits and pentests ensuring bulletproof delivery.",
        stat: "SECURE CORE"
    },
    {
        icon: <Cpu className="w-5 h-5" />,
        title: "System Design",
        desc: "Building for millions. Optimizing micro-second latency. Architecture that survives scale.",
        stat: "< 50ms LATENCY"
    },
    {
        icon: <Code2 className="w-5 h-5" />,
        title: "The Solo Founder",
        desc: "Founder of CR Startup. Handling the entire product lifecycle: Ideation to Deployment.",
        stat: "END-TO-END"
    }
];

export const Capability: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-4"
                >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">System Capabilities</span>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-medium tracking-tight text-white max-w-2xl"
                >
                    ONE MIND.<br/>
                    <span className="text-neutral-500">COMPLETE DOMINANCE.</span>
                </motion.h2>
            </div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="hidden md:block max-w-xs text-sm text-neutral-500 font-mono"
            >
                [ SPEC_SHEET_V1.0 ]<br/>
                OPTIMIZED FOR PERFORMANCE<br/>
                SECURITY FIRST ARCHITECTURE
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900">
            {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
    skill: {
        icon: React.ReactNode;
        title: string;
        desc: string;
        stat: string;
    };
    index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-neutral-950 p-8 h-full hover:bg-neutral-900/50 transition-colors duration-500"
        >
            <div className="flex justify-between items-start mb-12">
                <div className="text-neutral-500 group-hover:text-white transition-colors duration-300">
                    {skill.icon}
                </div>
                <span className="font-mono text-[10px] text-neutral-600 border border-neutral-800 px-2 py-0.5 rounded group-hover:border-white/20 transition-colors">
                    0{index + 1}
                </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {skill.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-8 group-hover:text-neutral-300">
                {skill.desc}
            </p>

            <div className="absolute bottom-8 left-8 right-8 pt-4 border-t border-neutral-900 flex justify-between items-center">
                <span className="font-mono text-xs text-white/50 group-hover:text-white transition-colors">{skill.stat}</span>
                <ArrowRight className="w-4 h-4 text-neutral-700 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
        </motion.div>
    );
}