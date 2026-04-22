import React from 'react';
import { motion } from 'framer-motion';

export const Ecosystem: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-20 border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
                <h3 className="text-xl font-bold text-white mb-2">THE ECOSYSTEM</h3>
                <div className="h-[1px] w-12 bg-white/50" />
            </div>
            
            <div className="w-full md:w-2/3">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl font-light leading-snug text-neutral-200"
                >
                    <span className="font-bold text-white">CR: Our Ideas.</span> Start from criticism and skepticism until it is recognized. Think deeply, have passion, and be feasible. Don't just dream.
                </motion.p>
                
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['DESIGN', 'CODE', 'SECURITY', 'SCALE'].map((item, i) => (
                        <div key={i} className="py-4 border-t border-neutral-800 text-neutral-500 font-mono text-sm">
                            0{i+1} / {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};