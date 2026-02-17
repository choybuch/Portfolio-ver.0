import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = "h1" }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      {/* Main Text */}
      <Component className="relative z-10">{text}</Component>
      
      {/* Glitch Layer 1 (Cyan) */}
      <Component 
        className="absolute top-0 left-0 -z-10 text-cyber-cyan opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity duration-100 select-none"
        style={{ clipPath: 'inset(0 0 0 0)', transform: 'translate(-2px, -2px)' }}
      >
        {text}
      </Component>

      {/* Glitch Layer 2 (Pink) */}
      <Component 
        className="absolute top-0 left-0 -z-10 text-cyber-pink opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity duration-100 delay-75 select-none"
        style={{ clipPath: 'inset(0 0 0 0)', transform: 'translate(2px, 2px)' }}
      >
        {text}
      </Component>
    </div>
  );
};