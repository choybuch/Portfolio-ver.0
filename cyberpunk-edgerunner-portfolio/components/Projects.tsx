import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    title: "Docu.Manage.Sys",
    type: "Enterprise Tool",
    description: "Full-stack file filtering and search system with Django/React.",
    tech: ["Django", "React", "Python"],
    link: "https://github.com/choybuch/DMS-fullstack"
  },
  {
    title: "I Need Coffee",
    type: "Lifestyle App",
    description: "Responsive site for satisfying caffeine cravings with style.",
    tech: ["JS", "HTML", "CSS"],
    link: "https://github.com/choybuch/I-need-coffee"
  },
  {
    title: "LocalHire",
    type: "Service Platform",
    description: "MERN stack professional services booking platform.",
    tech: ["MongoDB", "Express", "React", "Node"],
    link: "https://github.com/choybuch/localhire-final-"
  }
];

export const Projects: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-cyber-yellow uppercase tracking-tight">
          Active Gigs
        </h2>
        <span className="font-mono text-cyber-pink mb-2 animate-pulse">
          // ACCESSING DATABASE...
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.1 }}
            className="group relative bg-black border border-white/20 hover:border-cyber-yellow transition-all duration-300 flex flex-col h-full"
          >
            {/* Shard Visual Header */}
            <div className="h-2 bg-white/20 group-hover:bg-cyber-yellow transition-colors relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.5)_5px,rgba(0,0,0,0.5)_10px)] opacity-50" />
            </div>
            
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-cyber-yellow/10 rounded-full text-cyber-yellow group-hover:text-black group-hover:bg-cyber-yellow transition-colors">
                  <FolderOpen className="w-6 h-6" />
                </div>
                <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-cyber-yellow" />
              </div>

              <span className="text-xs font-mono text-cyber-cyan mb-2 block">{project.type}</span>
              <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyber-yellow transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-sm text-white/70 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-bold bg-white/10 px-2 py-1 text-white/90">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Glitch Overlay */}
            <div className="absolute inset-0 bg-cyber-yellow/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity mix-blend-overlay" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};
