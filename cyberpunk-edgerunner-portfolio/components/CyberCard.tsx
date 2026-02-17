import React from 'react';
import { motion } from 'framer-motion';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  color?: 'yellow' | 'pink' | 'cyan';
  delay?: number;
}

export const CyberCard: React.FC<CyberCardProps> = ({ children, className = "", color = 'yellow', delay = 0 }) => {
  const borderColor = {
    yellow: 'border-cyber-yellow',
    pink: 'border-cyber-pink',
    cyan: 'border-cyber-cyan'
  }[color];

  const bgColor = {
    yellow: 'bg-cyber-yellow/5',
    pink: 'bg-cyber-pink/5',
    cyan: 'bg-cyber-cyan/5'
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-6 border-l-4 ${borderColor} ${bgColor} backdrop-blur-sm clip-corner-tr group hover:bg-opacity-10 transition-all ${className}`}
    >
      {/* Corner Decorations */}
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${borderColor}`} />
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${borderColor}`} />
      
      {children}
    </motion.div>
  );
};