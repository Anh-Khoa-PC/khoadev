import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Globe, Activity, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-neutral-950 text-white overflow-hidden flex flex-col justify-between p-6 md:p-12">
      
      {/* Background Grid - Subtle Tech Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950 pointer-events-none" />

      {/* Header Info - Micro Details */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg tracking-tight">KHOA DEV.</span>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
             <ShieldCheck size={12} className="text-white" />
             <span>SECURITY ARCHITECT</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs font-mono text-neutral-500 tracking-wider">
           <div className="flex items-center gap-2">
             <Globe size={14} />
             <span>SAIGON, VN</span>
           </div>
           <div className="flex items-center gap-2">
             <Activity size={14} className="text-green-500 animate-pulse" />
             <span>SYSTEM: ONLINE</span>
           </div>
        </div>
      </div>

      {/* Main Center - Typographic Impact */}
      <div className="relative z-10 flex-grow flex flex-col justify-center">
         <div className="relative select-none">
            {/* Line 1 */}
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17vw] md:text-[15vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-normal z-20 relative"
            >
              KHOA
            </motion.h1>
            
            {/* Line 2 */}
            <motion.h1 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[17vw] md:text-[15vw] leading-[0.8] font-black tracking-tighter text-neutral-900 text-right md:text-left md:ml-[18vw] z-10 relative"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
            >
              DEV
            </motion.h1>
            
            {/* Floating Badge - Accent */}
            <motion.div 
               initial={{ scale: 0, rotate: 0 }}
               animate={{ scale: 1, rotate: 12 }}
               transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
               whileHover={{ scale: 1.1, rotate: 0 }}
               className="absolute right-4 top-1/2 -translate-y-1/2 md:right-[15%] md:top-[60%] w-24 h-24 md:w-36 md:h-36 bg-white rounded-full flex flex-col items-center justify-center text-black z-30 shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer"
            >
               <span className="text-[10px] font-mono uppercase mb-1">Since 2022</span>
               <span className="font-black text-lg md:text-xl leading-none text-center">ELITE<br/>CLASS</span>
            </motion.div>
         </div>
      </div>

      {/* Footer / CTA - Bottom Anchor */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8 pb-4">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1 }}
           className="max-w-md"
         >
           <div className="h-[1px] w-12 bg-white mb-4" />
           <p className="text-lg md:text-2xl font-light text-neutral-300 leading-snug">
             Founder of <span className="text-white font-semibold">CR Startup</span> & <span className="text-white font-semibold">Nexus VN</span>. 
             <br/><span className="text-neutral-500">Engineering Digital Revolutions. Alone.</span>
           </p>
         </motion.div>

         <motion.a 
            href="mailto:kanh05113@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-4 group cursor-pointer"
         >
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors">Start Collaboration</span>
            <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
               <ArrowDownRight size={24} />
            </div>
         </motion.a>
      </div>

    </section>
  );
};