import React from 'react';
import { Award } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section className="border-t border-b border-cyber-pink/30 py-12 bg-black/40 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-8">
        <Award className="w-8 h-8 text-cyber-pink" />
        <h2 className="text-3xl font-display font-bold text-white uppercase">
          Certified Intel
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-white/10 p-4 hover:border-cyber-pink transition-colors relative group">
          <div className="absolute top-0 right-0 bg-cyber-pink text-black text-xs font-bold px-2 py-1">
            2025
          </div>
          <h3 className="text-xl font-bold text-cyber-yellow mb-1">Responsive Web Design</h3>
          <p className="text-white/60 text-sm font-mono">FreeCodeCamp / Standard Protocol</p>
        </div>
        
        <div className="border border-white/10 p-4 hover:border-cyber-pink transition-colors relative group">
          <div className="absolute top-0 right-0 bg-cyber-pink text-black text-xs font-bold px-2 py-1">
            2025
          </div>
          <h3 className="text-xl font-bold text-cyber-yellow mb-1">Back End Development & APIs</h3>
          <p className="text-white/60 text-sm font-mono">FreeCodeCamp / Server Side Ops</p>
        </div>
      </div>
    </section>
  );
};