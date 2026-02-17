import React from 'react';
import { Cpu, Layout, GitBranch, Database, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Core Protocols",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "C#"],
      color: "border-cyber-yellow text-cyber-yellow"
    },
    {
      title: "Frontend Modules",
      icon: <Layout className="w-6 h-6" />,
      skills: ["React", "HTML5/CSS3", "Tailwind", "Framer Motion"],
      color: "border-cyber-cyan text-cyber-cyan"
    },
    {
      title: "Backend Systems",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Node.js", "Express", "Django", "SQL"],
      color: "border-cyber-pink text-cyber-pink"
    },
    {
      title: "Data Vaults",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "Mongoose", "Firebase", "PostgreSQL"],
      color: "border-purple-500 text-purple-500"
    },
    {
      title: "Dev Tools",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Vercel", "Figma"],
      color: "border-green-500 text-green-500"
    }
  ];

  return (
    <section>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight">
          Cyberware <span className="text-cyber-pink text-2xl md:text-4xl align-top">++</span>
        </h2>
        <div className="h-px flex-grow bg-white/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-black/40 border-2 ${cat.color.split(' ')[0]} p-6 relative overflow-hidden group hover:bg-white/5 transition-colors`}
          >
             {/* Background Tech Lines */}
             <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px]" />

            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className={`p-2 bg-black border ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className={`font-display font-bold text-xl uppercase ${cat.color.split(' ')[1]}`}>
                {cat.title}
              </h3>
            </div>

            <div className="space-y-3 relative z-10">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group/skill">
                  <div className="flex justify-between text-sm font-mono text-white/80 mb-1 group-hover/skill:text-white transition-colors">
                    <span>{skill}</span>
                    <span className="opacity-50">100%</span>
                  </div>
                  <div className="h-1 bg-white/10 w-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                      className={`h-full ${cat.color.replace('text', 'bg').replace('border', 'bg')}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Corner Bracket */}
            <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 ${cat.color.split(' ')[0]}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};