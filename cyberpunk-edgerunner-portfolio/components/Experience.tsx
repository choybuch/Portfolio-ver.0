import React from 'react';
import { CyberCard } from './CyberCard';
import { Terminal, Shield } from 'lucide-react';
import { Job } from '../types';

const experiences: Job[] = [
  {
    role: "IT Help Desk Intern",
    company: "SSS (Social Security System)",
    location: "Deparo, Caloocan Branch",
    period: "June - August 2024",
    details: [
      "Maintained local network infrastructure.",
      "Provided technical support for hardware and software issues.",
      "Optimized system performance for branch operations."
    ]
  },
  {
    role: "Seminar Attendee",
    company: "Cybersecurity Awareness",
    location: "Binan Laguna",
    period: "November 2024",
    details: [
      "Advanced threat detection protocols.",
      "Network security best practices.",
      "Social engineering countermeasures."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section className="relative">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-cyber-yellow uppercase tracking-tight">
          Mission Logs
        </h2>
        <div className="h-1 flex-grow bg-cyber-yellow/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-yellow w-1/3 animate-loading-bar"></div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <CyberCard key={index} delay={index * 0.2} color={index === 0 ? 'cyan' : 'pink'}>
            <div className="flex items-start justify-between mb-4">
              <div className="bg-black/40 p-2 rounded border border-white/10">
                {index === 0 ? <Terminal className="w-8 h-8 text-cyber-cyan" /> : <Shield className="w-8 h-8 text-cyber-pink" />}
              </div>
              <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded bg-black/50 text-white/70">
                {exp.period}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
            <p className={`font-mono text-sm mb-4 ${index === 0 ? 'text-cyber-cyan' : 'text-cyber-pink'}`}>
              @{exp.company} // {exp.location}
            </p>

            <ul className="space-y-2">
              {exp.details?.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-white/80 font-mono text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-cyber-yellow rounded-full" />
                  {detail}
                </li>
              ))}
            </ul>
          </CyberCard>
        ))}
      </div>
    </section>
  );
};