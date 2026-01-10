import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Activity, Lock } from 'lucide-react';

const logs = [
    "INITIALIZING_DAEMON...",
    "LOADING_MODULES: [NEXUS_CORE, VULN_SCAN, PEN_TEST]",
    "CONNECTION_ESTABLISHED: SECURE_SOCKET_LAYER",
    "TARGET_ACQUIRED: ENTERPRISE_ASSETS",
    "> RUNNING_AUDIT...",
    "[SUCCESS] FIREWALL_BYPASS_SIMULATION",
    "[SUCCESS] XSS_VECTOR_ANALYSIS",
    "[SUCCESS] SQL_INJECTION_PROOFING",
    "GENERATING_REPORT...",
    "SYSTEM_STATUS: 100% SECURE"
];

export const Security: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let delay = 0;
    logs.forEach((log, index) => {
        delay += Math.random() * 500 + 200;
        setTimeout(() => {
            setLines(prev => {
                const newLines = [...prev, log];
                if (newLines.length > 7) return newLines.slice(1);
                return newLines;
            });
        }, delay);
    });
  }, []);

  return (
    <section className="py-32 bg-neutral-950 border-t border-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Typography */}
        <div className="lg:w-1/2 relative z-10">
            <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-mono text-xs text-green-500 tracking-widest">ACTIVE PROTECTION</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                UNBREAKABLE<br/>
                <span className="text-neutral-600">INFRASTRUCTURE.</span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-md">
                In a world of digital chaos, I provide order. As the founder of <strong className="text-white">Nexus VN</strong>, I build systems that don't just work—they survive.
            </p>

            <div className="grid grid-cols-2 gap-6">
                <div className="border-l border-neutral-800 pl-4">
                    <Shield className="w-6 h-6 text-white mb-2" />
                    <h4 className="font-bold text-white">White Hat</h4>
                    <p className="text-xs text-neutral-500 mt-1">Ethical Hacking & Audits</p>
                </div>
                <div className="border-l border-neutral-800 pl-4">
                    <Lock className="w-6 h-6 text-white mb-2" />
                    <h4 className="font-bold text-white">Zero Trust</h4>
                    <p className="text-xs text-neutral-500 mt-1">Architecture Design</p>
                </div>
            </div>
        </div>

        {/* Right: Realistic Terminal */}
        <div className="lg:w-1/2 w-full relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-green-500/10 blur-2xl rounded-full opacity-20" />
            
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative bg-[#0a0a0a] border border-neutral-800 rounded-lg overflow-hidden shadow-2xl"
            >
                {/* Window Bar */}
                <div className="bg-neutral-900/50 border-b border-neutral-800 px-4 py-3 flex items-center justify-between backdrop-blur-md">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs">
                        <Terminal size={12} />
                        <span>nexus_guard — zsh</span>
                    </div>
                    <div className="w-10" /> 
                </div>

                {/* Content */}
                <div className="p-6 h-[300px] font-mono text-sm text-green-500/90 relative">
                    {/* Scanline */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none" />
                    <motion.div 
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-px bg-green-500/30 z-20 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                    />

                    <div className="flex flex-col gap-2">
                        {lines.map((line, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="break-all"
                            >
                                <span className="text-neutral-600 mr-2">➜</span>
                                {line}
                            </motion.div>
                        ))}
                        <motion.div 
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-2 h-4 bg-green-500 mt-1"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Floating Widgets */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 -bottom-8 bg-neutral-900 border border-neutral-800 p-4 rounded-lg shadow-xl z-20 hidden md:block"
            >
                <div className="flex items-center gap-3">
                    <Activity className="text-green-500 w-5 h-5" />
                    <div>
                        <div className="text-[10px] text-neutral-500 uppercase font-mono">Network Load</div>
                        <div className="text-lg font-bold text-white">420 MB/s</div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};