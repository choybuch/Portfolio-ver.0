import React from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Background } from './components/Background';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-cyber-black text-cyber-yellow overflow-hidden selection:bg-cyber-pink selection:text-white">
      <Background />
      
      {/* HUD Header / Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyber-pink origin-left z-50 shadow-[0_0_10px_#FF003C]"
        style={{ scaleX }}
      />
      
      <div className="fixed top-4 left-4 z-40 hidden md:block">
        <div className="border border-cyber-yellow/30 bg-black/50 p-2 text-xs font-mono backdrop-blur-sm">
          <p>SYS.STATUS: ONLINE</p>
          <p>NET.LINK: SECURE</p>
          <p className="animate-pulse text-cyber-cyan">V 2.0.77</p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 flex flex-col gap-24 md:gap-32">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        
        <footer className="text-center py-10 border-t border-cyber-yellow/20">
          <p className="text-cyber-yellow/50 text-sm font-mono tracking-widest">
            // END OF LINE // DESIGNED BY A LEGEND // 2025
          </p>
        </footer>
      </div>
      
      {/* Decorative HUD Elements */}
      <div className="fixed bottom-4 right-4 z-40 text-right hidden md:block pointer-events-none">
         <div className="text-6xl font-display text-white/5 font-bold">EDGERUNNER</div>
      </div>
    </div>
  );
};

export default App;