import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const codeSnippet = `
> TARGET: SYSTEM_CORE
> ACCESS: RESTRICTED
> BYPASSING FIREWALL...
> INJECTING PAYLOAD...
> SUCCESS.
> RETRIEVING DATA...
> 
> VULNERABILITY FOUND: XSS IN MODULE 4
> PATCHING...
> SYSTEM SECURED.
`;

export const SecurityChamber: React.FC = () => {
  const [text, setText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= codeSnippet.length) {
        setText(codeSnippet.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black border-y border-neutral-900 overflow-hidden relative">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-xs overflow-hidden leading-3 text-green-500 whitespace-pre-wrap select-none blur-[1px]">
        {Array(50).fill("01 10 01 00 11 01 01 11 00 10 11 00 01 10 01 01 \n").join('')}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-neutral-950 border border-neutral-800 rounded-sm p-2 shadow-2xl font-mono text-sm md:text-base"
        >
          <div className="flex items-center gap-2 mb-4 px-2 py-1 border-b border-neutral-900 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-auto text-xs text-neutral-600">bash — 80x24</span>
          </div>
          <div className="p-4 min-h-[300px] text-green-500/80">
            <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></pre>
          </div>
        </motion.div>

        {/* Info */}
        <div className="text-right lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            SECURITY ELITE
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-neutral-400"
          >
            <p className="text-lg">
              Specializing in offensive security and penetration testing. 
              Currently safeguarding digital assets at <span className="text-white font-bold">Nexus VN</span>.
            </p>
            
            <div className="flex flex-wrap gap-2 lg:justify-start justify-end">
              {['PENETRATION TESTING', 'NETWORK ANALYSIS', 'CRYPTOGRAPHY', 'ZERO-DAY RESEARCH'].map((tag) => (
                <span key={tag} className="px-3 py-1 border border-neutral-800 text-xs font-mono tracking-wider hover:bg-white hover:text-black transition-colors cursor-crosshair">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};