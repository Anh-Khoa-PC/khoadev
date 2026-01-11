import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Rocket, Sparkles, X, ArrowUpRight, User, Quote, Heart, Zap, Users, Code, Globe, Cpu, Database, Eye, CheckCircle, Bug, Activity } from 'lucide-react';

export const DecisionTree: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [activeCard, setActiveCard] = useState<'hunter' | 'founder' | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeCard || showEasterEgg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeCard, showEasterEgg]);

  const handleGapClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 5) {
      setShowEasterEgg(true);
      setClickCount(0);
    }
  };

  return (
    <section className="relative py-24 bg-black border-t border-neutral-900 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm font-mono text-neutral-500 tracking-[0.3em] uppercase mb-4"
        >
          Choose The Persona
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
        >
          WHO ARE YOU <br/><span className="text-neutral-600">LOOKING FOR?</span>
        </motion.h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 relative">
          
          {/* The Hidden Trigger (Gap) */}
          <div 
            onClick={handleGapClick}
            className="absolute left-1/2 top-0 bottom-0 w-24 -ml-12 z-20 hidden lg:block cursor-default"
            aria-hidden="true"
          />

          {/* CARD 1: THE BUG HUNTER */}
          <HunterCard onClick={() => setActiveCard('hunter')} />

          {/* CARD 2: THE STARTUP FOUNDER */}
          <FounderCard onClick={() => setActiveCard('founder')} />

        </div>
      </div>

      {/* MODALS */}
      <AnimatePresence>
        {showEasterEgg && (
          <EasterEggModal onClose={() => setShowEasterEgg(false)} />
        )}
        {activeCard === 'founder' && (
          <CRModal onClose={() => setActiveCard(null)} />
        )}
        {activeCard === 'hunter' && (
          <HunterModal onClose={() => setActiveCard(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

// --- COMPONENTS ---

const HunterCard: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layoutId="hunter-card-container"
      className="relative group cursor-pointer"
    >
      {/* Glitchy Border */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-70 blur transition-opacity duration-300 ${isHovered ? 'animate-pulse' : ''}`} />
      
      <div className="relative h-full bg-neutral-950 border border-neutral-800 group-hover:border-green-500/50 p-8 rounded-lg overflow-hidden flex flex-col justify-between min-h-[500px] transition-colors duration-300">
        {/* Scanline Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20" />

        <div>
          <div className="flex items-center justify-between mb-8">
            <Terminal className="text-green-500" />
            <span className="font-mono text-xs text-green-500/50 uppercase">[ CLASSIFIED ]</span>
          </div>

          <motion.h3 
            animate={isHovered ? { x: [-2, 2, -1, 0], textShadow: "2px 0px 0px rgba(0,255,0,0.5), -2px 0px 0px rgba(255,0,0,0.5)" } : {}}
            className="text-4xl font-mono font-bold text-white mb-2"
          >
            THE BUG HUNTER
          </motion.h3>
          <p className="font-mono text-sm text-neutral-400 mb-8">
            &gt; EXECUTE: OFFENSIVE_SECURITY<br />
            &gt; TARGET: VULNERABILITIES
          </p>

          <div className="space-y-4 font-mono text-xs md:text-sm text-neutral-300">
            <div className="flex items-center gap-3">
              <ShieldAlert size={14} className="text-green-500" />
              <span>FOUNDER: <span className="text-white font-bold">NEXUS VN</span></span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldAlert size={14} className="text-green-500" />
              <span>STATUS: WHITE HAT ELITE</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldAlert size={14} className="text-green-500" />
              <span>EXP: SINCE AGE 13</span>
            </div>
          </div>
        </div>

        {/* Simulated Terminal Output */}
        <div className="mt-8 bg-black/50 p-4 rounded border border-green-500/20 font-mono text-[10px] text-green-400/80">
           <p>&gt; CONNECTING TO DATABASE...</p>
           <p>&gt; FETCHING BOUNTY_LOGS...</p>
           <p className="text-white">&gt; GOOGLE: CRITICAL FOUND</p>
           <p className="text-white">&gt; FACEBOOK: P1 RESOLVED</p>
           {isHovered && (
             <motion.p 
               initial={{ opacity: 0 }} 
               animate={{ opacity: [0, 1, 0] }} 
               transition={{ repeat: Infinity, duration: 0.5 }}
             >
               _
             </motion.p>
           )}
        </div>

        {/* Click Prompt */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-green-400">
            <ArrowUpRight size={24} />
        </div>
      </div>
    </motion.div>
  );
};

const FounderCard: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -10 }}
      layoutId="cr-card-container"
      className="relative group cursor-pointer"
    >
      {/* Clean Gradient Border */}
      <div className="absolute -inset-[1px] bg-gradient-to-tr from-blue-600 via-purple-600 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      <div className="relative h-full bg-[#050505] border border-neutral-800 group-hover:border-transparent p-8 rounded-lg overflow-hidden flex flex-col justify-between min-h-[500px]">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-purple-600/20 transition-colors duration-700" />

        <div>
          <div className="flex items-center justify-between mb-8">
            <Rocket className="text-blue-500" />
            <span className="font-sans text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full uppercase tracking-wider">Visionary</span>
          </div>

          <h3 className="text-4xl font-sans font-bold text-white mb-2 tracking-tight">
            The Startup Founder
          </h3>
          <p className="text-sm text-neutral-400 mb-8 font-light">
            Building the next generation of digital infrastructure. From 0 to 1, relentlessly.
          </p>

          <div className="space-y-6">
            <div className="relative pl-6 border-l border-neutral-800 group-hover:border-purple-500 transition-colors duration-500">
               <h4 className="text-white font-bold text-sm">Founder @ CR STARTUP</h4>
               <p className="text-xs text-neutral-500 mt-1">Established at age 13. Scaling digital solutions.</p>
            </div>
            <div className="relative pl-6 border-l border-neutral-800 group-hover:border-blue-500 transition-colors duration-500">
               <h4 className="text-white font-bold text-sm">Tech Visionary</h4>
               <p className="text-xs text-neutral-500 mt-1">Shaping future trends in Vietnam.</p>
            </div>
          </div>
        </div>

        {/* Minimalist Chart/Visual */}
        <div className="mt-8 flex items-end justify-between h-24 gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
            {[30, 50, 45, 70, 60, 90, 100].map((h, i) => (
                <motion.div 
                    key={i}
                    className="w-full bg-gradient-to-t from-blue-900 to-purple-500 rounded-t-sm"
                    initial={{ height: "10%" }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                />
            ))}
        </div>
        
        {/* Click Prompt */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
            <ArrowUpRight size={24} />
        </div>
      </div>
    </motion.div>
  );
};

// --- POPUPS ---

const EasterEggModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 cursor-auto">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-neutral-900 border border-neutral-700 p-12 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.2)] max-w-lg w-full text-center overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                 {[...Array(20)].map((_, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 0, x: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0], 
                            y: [0, Math.random() * -100 - 50], 
                            x: [(Math.random() - 0.5) * 100],
                            rotate: Math.random() * 360
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                        className="absolute left-1/2 top-1/2 w-2 h-2 bg-yellow-400 rounded-full"
                     />
                 ))}
            </div>

            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                THE HANDSOME<br/>TECH PRODIGY
            </h2>
            <p className="text-neutral-400 font-mono text-sm mb-8">
                (Yes, that's me. Nguyen Vo Anh Khoa.)
            </p>
            <button 
                onClick={onClose}
                className="px-6 py-2 bg-white text-black font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors rounded-full"
            >
                Acknowledge & Close
            </button>
        </motion.div>
    </div>
  );
};

// === STARTUP POPUP (CRMODAL) ===
const CRModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <motion.div 
        layoutId="cr-card-container"
        className="fixed inset-0 z-[9999] bg-[#050505] overflow-y-auto cursor-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
        {/* Navigation / Close */}
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 md:p-12 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none">
            {/* Minimal Header */}
            <span className="text-xs font-mono text-neutral-500 pointer-events-auto">EST. 2024</span>
            <button 
                onClick={onClose} 
                className="pointer-events-auto p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors text-white group"
            >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300"/>
            </button>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 md:px-12 pt-32 pb-24">
            
            {/* HERO - LOGO */}
            <section className="mb-24 flex flex-col items-center text-center">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-8"
                >
                    <h1 className="text-[25vw] leading-[0.8] font-black tracking-tighter text-white select-none">CR</h1>
                </motion.div>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl"
                >
                    Let's introduce ourselves clearly.
                </motion.p>
            </section>

            {/* MISSION & VISION */}
            <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <Zap className="text-blue-500 w-5 h-5" />
                        <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Our Mission</h2>
                    </div>
                    <p className="text-lg md:text-xl text-white leading-relaxed font-light">
                        To ignite breakthrough solutions and pioneer progress with <span className="text-blue-400 font-medium">limitless innovation</span>. We empower people and create positive community impact through revolutionary products built on unwavering self-reliance.
                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <ArrowUpRight className="text-purple-500 w-5 h-5" />
                        <h2 className="text-sm font-mono text-purple-500 uppercase tracking-widest">Our Vision</h2>
                    </div>
                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                        Leading disruptive change with a pioneer spirit. We build the future ourselves, <span className="text-purple-400 font-medium">transcending limits</span> to deliver distinctive, effective, and revolutionary solutions.
                    </p>
                </div>
            </section>

            {/* FOUNDER */}
            <section className="mb-32 border-y border-neutral-900 py-20 text-center">
                <h2 className="text-xs font-mono text-neutral-500 uppercase tracking-[0.3em] mb-12">Meet The Team</h2>
                <div className="inline-block relative group">
                    <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-48 h-48 mx-auto bg-neutral-900 rounded-full overflow-hidden border-2 border-neutral-800 flex items-center justify-center relative z-10">
                        <img 
                            src="/public/founder.jpg" 
                            alt="Nguyen Vo Anh Khoa" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="mt-8 relative z-10">
                        <p className="text-neutral-500 italic mb-4 font-light">"Just me, the founder, doing all."</p>
                        <h3 className="text-3xl font-bold text-white">Nguyen Vo Anh Khoa</h3>
                        <p className="text-blue-500 font-mono text-sm mt-2">FOUNDER & CEO</p>
                    </div>
                </div>
            </section>

            {/* ENVIRONMENT & VALUES */}
            <section className="mb-32">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">OUR ENVIRONMENT</h2>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        We are not just a startup; we are a story of extraordinary people united by a common goal. 
                        Starting from individual steps, CR has grown into a cohesive team where talent shines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Value 1 */}
                    <div className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:bg-neutral-900/50 transition-colors group">
                        <div className="mb-6 bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center">
                            <Users className="text-blue-500 w-6 h-6" />
                        </div>
                        <span className="text-4xl font-black text-neutral-800 mb-4 block group-hover:text-blue-900 transition-colors">01</span>
                        <h3 className="text-xl font-bold text-white mb-2">Teamwork & Commitment</h3>
                        <h4 className="text-xs font-mono text-blue-400 mb-4 uppercase">Listening & Execution</h4>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            We are companions on the same boat. Sharing joy, exploring new horizons, and supporting each other's growth.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:bg-neutral-900/50 transition-colors group">
                         <div className="mb-6 bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center">
                            <Heart className="text-purple-500 w-6 h-6" />
                        </div>
                        <span className="text-4xl font-black text-neutral-800 mb-4 block group-hover:text-purple-900 transition-colors">02</span>
                        <h3 className="text-xl font-bold text-white mb-2">Respect & Professionalism</h3>
                        <h4 className="text-xs font-mono text-purple-400 mb-4 uppercase">Evaluation & Selection</h4>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            Every personality is respected. We prioritize professionalism in every aspect, from workflow to product quality.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:bg-neutral-900/50 transition-colors group">
                         <div className="mb-6 bg-yellow-500/10 w-12 h-12 rounded-full flex items-center justify-center">
                            <Sparkles className="text-yellow-500 w-6 h-6" />
                        </div>
                        <span className="text-4xl font-black text-neutral-800 mb-4 block group-hover:text-yellow-900 transition-colors">03</span>
                        <h3 className="text-xl font-bold text-white mb-2">Passion & Enthusiasm</h3>
                        <h4 className="text-xs font-mono text-yellow-400 mb-4 uppercase">We Did It!</h4>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            Burning passion and tireless dedication are our fuel. We dare to think, act, dream, and make it reality.
                        </p>
                    </div>
                </div>
            </section>

            {/* MANIFESTO / HISTORY */}
            <section className="mb-32 relative">
                 <div className="absolute left-0 top-0 text-neutral-800 -z-10">
                    <Quote size={120} className="opacity-20" />
                 </div>
                 <div className="pl-8 md:pl-20 border-l-2 border-neutral-800">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        TURNING THOUGHTS<br/>INTO REALITY
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-3xl">
                        Founded on <span className="text-white font-bold">March 1, 2024</span>, by a visionary aged 13. CR embodies the belief that every action, no matter how small, carries immense meaning when we stand together.
                    </p>
                    <div className="bg-neutral-900/50 p-6 rounded-lg inline-block border border-neutral-800">
                        <p className="font-mono text-sm text-white italic">
                            "If you want to go fast, you must first learn to go slow."
                        </p>
                    </div>
                 </div>
            </section>

            {/* CONTACT FOOTER */}
            <div className="mt-32 pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start gap-12">
                 <div>
                     <h3 className="text-2xl font-bold text-white mb-6">Let's Start!</h3>
                     <div className="flex gap-4">
                        {['Facebook', 'Instagram', 'LinkedIn', 'X'].map(social => (
                            <span key={social} className="text-neutral-500 text-sm hover:text-white cursor-pointer transition-colors">{social}</span>
                        ))}
                     </div>
                 </div>

                 <div className="flex flex-col gap-4 text-right">
                     <div>
                         <span className="text-xs font-mono text-neutral-600 uppercase block mb-1">Always Available</span>
                         <a href="mailto:kanh05113@gmail.com" className="text-white hover:text-blue-400 transition-colors">kanh05113@gmail.com</a>
                     </div>
                     <div>
                         <span className="text-xs font-mono text-neutral-600 uppercase block mb-1">For Business</span>
                         <a href="mailto:kanh05113@gmail.com" className="text-white hover:text-blue-400 transition-colors">kanh05113@gmail.com</a>
                     </div>
                     <div className="mt-8 text-neutral-700 text-xs font-mono uppercase">
                        © 2025 CR Creative Revolution Startup<br/>
                        Driven by All Our Will
                     </div>
                 </div>
            </div>
        </div>
    </motion.div>
  );
};

// === BUG HUNTER POPUP (HUNTERMODAL) ===
const HunterModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <motion.div 
            layoutId="hunter-card-container"
            className="fixed inset-0 z-[9999] bg-[#000500] text-green-500 font-mono overflow-y-auto cursor-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background Matrix/Grid Effect */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(0,50,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,50,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />

            {/* Navigation / Close */}
            <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 md:p-12 bg-gradient-to-b from-black to-transparent pointer-events-none">
                <div className="flex items-center gap-2 pointer-events-auto">
                    <Terminal size={16} className="animate-pulse" />
                    <span className="text-xs tracking-widest uppercase">System: Root_Access</span>
                </div>
                <button 
                    onClick={onClose} 
                    className="pointer-events-auto p-2 border border-green-500/20 hover:bg-green-500/10 hover:border-green-500 rounded text-green-500 transition-all group"
                >
                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300"/>
                </button>
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-12 pt-32 pb-24 relative z-10">
                
                {/* INTRO */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-l-2 border-green-500 pl-6"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                            Hello, I am <br/>
                            <span className="text-green-500">Nguyen Vo Anh Khoa</span> 👋
                        </h1>
                        <p className="text-lg text-green-500/80 max-w-2xl leading-relaxed">
                            A versatile individual from Ho Chi Minh City, Vietnam. As the Founder of <span className="text-white">CR Startup</span>, I am building ambitious technological solutions.
                        </p>
                    </motion.div>
                </section>

                {/* GOALS */}
                <section className="mb-20 bg-green-900/5 border border-green-500/20 p-8 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                        <Rocket size={20} />
                        <h2 className="text-xl font-bold uppercase tracking-wider">Introduction & Goals</h2>
                    </div>
                    <p className="text-green-400">
                        Objective: Expand the startup and continue developing myself as a <span className="text-white font-bold">security expert</span> and developer.
                    </p>
                </section>

                {/* HALL OF FAME */}
                <section className="mb-20">
                    <div className="flex items-center gap-2 mb-8">
                        <ShieldAlert size={20} />
                        <h2 className="text-xl font-bold uppercase tracking-wider">Achievements & Contributions</h2>
                    </div>
                    <p className="mb-6 text-sm text-green-500/60">I have been recognized for security contributions to prestigious organizations:</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {['Plaid', 'Netflix', 'Facebook', 'Audible', 'Ring'].map((org, i) => (
                            <motion.div 
                                key={org}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="h-24 flex items-center justify-center bg-black border border-green-500/20 rounded hover:border-green-500 hover:bg-green-500/10 transition-all cursor-crosshair group"
                            >
                                <span className="font-bold text-lg group-hover:text-white transition-colors">{org}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* SKILLS */}
                <section className="mb-20">
                    <div className="flex items-center gap-2 mb-8">
                        <Code size={20} />
                        <h2 className="text-xl font-bold uppercase tracking-wider">Skills & Technologies</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Web Dev */}
                        <div>
                            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <Globe size={16} /> Web & Software Development
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Rust', 'Tailwind', 'PostgreSQL', 'Docker'].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-green-900/10 border border-green-500/20 rounded text-xs hover:bg-green-500 hover:text-black transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Security */}
                        <div>
                            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                <ShieldAlert size={16} /> Security Tools
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['OWASP ZAP', 'theHarvester', 'Shodan', 'Amap', 'ffuf', 'Subfinder', 'Amass', 'SQLMap', 'Nessus', 'Nikto', 'Recon-ng'].map(tool => (
                                    <span key={tool} className="px-3 py-1 bg-red-900/10 border border-red-500/20 text-red-400 rounded text-xs hover:bg-red-500 hover:text-black transition-colors">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS (Recreated with CSS Grid) */}
                <section className="mb-20">
                    <div className="flex items-center gap-2 mb-8">
                        <Activity size={20} />
                        <h2 className="text-xl font-bold uppercase tracking-wider">Activity & Statistics</h2>
                    </div>

                    <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 overflow-x-auto">
                        <div className="min-w-[600px]">
                             {/* Mock Contribution Graph */}
                             <div className="flex gap-1 mb-4">
                                {[...Array(52)].map((_, colIndex) => (
                                    <div key={colIndex} className="flex flex-col gap-1">
                                        {[...Array(7)].map((_, rowIndex) => {
                                            const opacity = Math.random() > 0.7 ? Math.random() : 0.1;
                                            return (
                                                <div 
                                                    key={rowIndex} 
                                                    className="w-3 h-3 rounded-sm bg-green-500" 
                                                    style={{ opacity }}
                                                />
                                            )
                                        })}
                                    </div>
                                ))}
                             </div>
                             <div className="flex justify-between text-xs text-neutral-500 font-sans">
                                 <span>Less</span>
                                 <span>More</span>
                             </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="p-4 border border-neutral-800 bg-black rounded">
                                <div className="text-xs text-neutral-500 mb-1">Total Commits (2025)</div>
                                <div className="text-2xl font-bold text-white">1,240</div>
                            </div>
                            <div className="p-4 border border-neutral-800 bg-black rounded">
                                <div className="text-xs text-neutral-500 mb-1">PRs Merged</div>
                                <div className="text-2xl font-bold text-white">342</div>
                            </div>
                            <div className="p-4 border border-neutral-800 bg-black rounded">
                                <div className="text-xs text-neutral-500 mb-1">Issues Solved</div>
                                <div className="text-2xl font-bold text-white">518</div>
                            </div>
                             <div className="p-4 border border-neutral-800 bg-black rounded">
                                <div className="text-xs text-neutral-500 mb-1">Current Streak</div>
                                <div className="text-2xl font-bold text-white">42 Days</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONNECT */}
                <section>
                    <div className="flex items-center gap-2 mb-8">
                        <Globe size={20} />
                        <h2 className="text-xl font-bold uppercase tracking-wider">Connect With Me</h2>
                    </div>
                    <div className="flex gap-4">
                        {['LinkedIn', 'Facebook', 'GitHub'].map(social => (
                            <button key={social} className="px-6 py-3 border border-green-500 text-green-500 font-bold uppercase hover:bg-green-500 hover:text-black transition-all">
                                {social}
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </motion.div>
    );
}