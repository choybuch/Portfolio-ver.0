import React from 'react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  type: string;
}

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  details?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}