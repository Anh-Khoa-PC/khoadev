import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Cpu, Laptop, GraduationCap } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <section className="py-32 bg-black text-white overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-7">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center gap-2 mb-6"
            >
              <div className="w-12 h-[1px] bg-neutral-700" />
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-[0.3em]">The Narrative / Roots</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase"
            >
              Hacker <br/>
              <span className="text-neutral-800">Gen Z.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5 pb-4">
             <p className="text-neutral-500 font-mono text-sm uppercase leading-relaxed max-w-sm">
               "I didn't wait to be 'old enough' to succeed. I created my own success from my father's old, worn-out Asus laptop."
             </p>
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-40 items-start">
          
          {/* Chapter 1: The Root */}
          <div className="space-y-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group p-8 border border-neutral-900 bg-neutral-950/20 hover:border-neutral-700 transition-all duration-700"
            >
              <div className="mb-8 flex items-center justify-between">
                <Laptop className="w-8 h-8 text-neutral-500 group-hover:text-white transition-colors" />
                <span className="font-mono text-[10px] text-neutral-700">CHAPTER 1 / 01</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">The 10-Year-Old Asus</h3>
              <p className="text-neutral-400 leading-relaxed font-light text-lg">
                While others were busy with cartoons and toys, my world was confined to a 14-inch yellow-tinted screen. 
                It was an old laptop my father bought 10 years prior to learn Photoshop—a clunky machine with a cooling fan that roared under heavy tasks. 
                But to me, it wasn't a heap of scrap metal; it was the gateway to a universe where I held supreme power.
              </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group p-8 border border-neutral-900 bg-neutral-950/20 hover:border-neutral-700 transition-all duration-700"
            >
              <div className="mb-8 flex items-center justify-between">
                <GraduationCap className="w-8 h-8 text-neutral-500 group-hover:text-white transition-colors" />
                <span className="font-mono text-[10px] text-neutral-700">CHAPTER 1 / 02</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Knowledge for $0 Campaign</h3>
              <p className="text-neutral-400 leading-relaxed font-light text-lg">
                Without the means to afford expensive courses, I began "seeking the path" on the Internet. 
                Every day, I scoured every corner of Google for free knowledge. 
                From my first lines of code at age 7 to the battle for justice over a Redis bug at age 15—I don't just hunt for bugs; I hunt for decency.
              </p>
            </motion.div>
          </div>

          {/* Chapter 2: The Breakthrough */}
          <div className="space-y-12 md:mt-40">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group p-8 border border-neutral-900 bg-neutral-950/20 hover:border-neutral-700 transition-all duration-700"
            >
              <div className="mb-8 flex items-center justify-between">
                <Cpu className="w-8 h-8 text-neutral-500 group-hover:text-white transition-colors" />
                <span className="font-mono text-[10px] text-neutral-700">CHAPTER 2 / 01</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Breaking Age Stereotypes</h3>
              <p className="text-neutral-400 leading-relaxed font-light text-lg">
                Adults often saw a 2nd grader glued to a computer and assumed it was "mischief" or "gaming addiction." 
                I wanted to prove that a child's intellect isn't limited to memorizing textbooks. 
                Hacker Gen Z is proof that age is just a number, and competency is the true measure of value.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-12 bg-white text-black rounded-sm overflow-hidden group"
            >
              <Quote className="absolute -top-4 -left-4 w-32 h-32 text-black/5 rotate-12" />
              <div className="relative z-10">
                <p className="text-2xl font-bold italic leading-tight mb-8">
                  "I chose the Anonymous mask not to hide, but to begin a journey into the light. In the world of code, intellect is the only thing that defines you, not the age on your ID card."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                    <img 
                      src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/550185295_791983950143972_6426325782382129587_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=fF9giXsGc6EQ7kNvwGCjj5A&_nc_ohc=fF9giXsGc6EQ7kNvwGCjj5A&_nc_oc=AdqOlj-N0lePP2agTqT_IL-67_KMy2HXMIV-msL4GTzfAmPlZbxtLd754WjS5RTIQca3fls4BNYxyGHDRTf-4Z6u&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=h5YabpLCqR848RFHacadsw&_nc_ss=7a3a8&oh=00_Af0kc9UTaDmXM_n8fdoQAPsv7OU53hvwgIZxYKan0gpJtg&oe=69EE8DFD" 
                      alt="Khoa Dev" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-xs tracking-widest">Khoa Dev</p>
                    <p className="text-[10px] font-mono text-neutral-500 uppercase">Cybersecurity Researcher</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Massive Callout */}
        <div className="mt-40 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block py-4 px-8 border-y border-neutral-800"
            >
               <span className="text-6xl md:text-9xl font-black tracking-tighter opacity-10 uppercase">
                  Relentless Spirit
               </span>
            </motion.div>
        </div>

      </div>
    </section>
  );
};
