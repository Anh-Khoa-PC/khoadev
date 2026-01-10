import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const socials = [
    { name: "GitHub", href: "https://github.com/Anh-Khoa-PC" },
    { name: "Facebook", href: "https://www.facebook.com/anhkhoavnk/" },
  ];

  return (
    <footer className="w-full bg-neutral-950 pt-32 pb-12 px-4 md:px-12 flex flex-col justify-between min-h-[60vh] relative border-t border-neutral-900">
      
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12vw] font-black tracking-tighter leading-none text-white text-center mb-12"
        >
            LET'S BUILD.
        </motion.h2>

        <div className="flex flex-col items-center gap-8">
            <a 
                href="mailto:kanh05113@gmail.com"
                className="text-2xl md:text-4xl text-neutral-400 hover:text-white transition-colors duration-300 font-light border-b border-transparent hover:border-white pb-1"
            >
                kanh05113@gmail.com
            </a>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
                {socials.map((social) => (
                    <a 
                        key={social.name}
                        href={social.href}
                        className="px-6 py-2 border border-neutral-800 rounded-full bg-neutral-900/50 text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm font-mono flex items-center gap-2 group"
                    >
                        {social.name}
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                ))}
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs font-mono uppercase tracking-wider">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center md:text-left">
            <span>© 2026 KHOA DEV</span>
            <span className="hidden md:block w-1 h-1 bg-neutral-800 rounded-full" />
            <span>Saigon, Vietnam 🇻🇳</span>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Operational</span>
        </div>
      </div>
    </footer>
  );
};