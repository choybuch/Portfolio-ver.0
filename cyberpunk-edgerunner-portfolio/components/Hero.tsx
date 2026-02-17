import React from 'react';
import { motion } from 'framer-motion';
import { GlitchText } from './GlitchText';

export const Hero: React.FC = () => {
  const name = "[CHOY BUCH]"; // Placeholder as requested, but user provided projects with "choybuch", so inferring name.

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
      {/* Background large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-display font-black text-white/5 whitespace-nowrap select-none pointer-events-none z-0">
        EDGERUNNER
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Sandevistan Trail Effect */}
          <div className="absolute inset-0 blur-sm opacity-50 animate-pulse text-cyber-cyan select-none pointer-events-none transform translate-x-2 translate-y-2">
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase">{name}</h1>
          </div>
          <div className="absolute inset-0 blur-sm opacity-50 animate-pulse text-cyber-pink select-none pointer-events-none transform -translate-x-2 -translate-y-2 delay-75">
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase">{name}</h1>
          </div>

          <GlitchText 
            text={name} 
            as="h1" 
            className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase text-cyber-yellow drop-shadow-[0_0_15px_rgba(252,238,10,0.5)]" 
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-4 text-cyber-cyan font-mono text-lg md:text-xl tracking-widest bg-black/80 px-4 py-2 border border-cyber-cyan/30 clip-hud">
            <span className="animate-pulse">●</span>
            <span>NEURAL LINK ESTABLISHED</span>
          </div>
          <p className="text-white/80 font-mono text-md md:text-lg max-w-2xl mt-4 border-l-2 border-cyber-pink pl-4 text-left">
            // FULL-STACK DEVELOPER & CYBERDECK SPECIALIST <br/>
            // OPERATING IN THE NET
          </p>
        </motion.div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute bottom-10 w-full h-px bg-gradient-to-r from-transparent via-cyber-yellow to-transparent opacity-50" />
    </section>
  );
};