import React from 'react';
import {
  Code,
  Code2,
  FileCode,
  Terminal,
  Database,
  Server,
  Cpu,
  Layers,
  Palette,
  Layout,
  GitBranch,
  Container,
  Flame,
  Globe,
  Languages,
  Sparkles,
  Bot,
  Users,
  CheckCircle2,
  Boxes,
  Workflow,
  PenTool,
  Compass,
  Monitor,
  Binary,
  Shield,
  FileText,
  Table,
  Zap,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4' }) => {
  const normalized = name.toLowerCase().trim();

  // Programming languages & Frontend
  if (normalized.includes('maui') || normalized.includes('.net') || normalized.includes('c#')) {
    return <Layers className={`text-indigo-600 ${className}`} />;
  }
  if (normalized.includes('typescript') || normalized === 'ts') {
    return <span className={`inline-flex items-center justify-center font-bold text-[10px] text-blue-600 ${className}`}>TS</span>;
  }
  if (normalized.includes('javascript') || normalized === 'js') {
    return <span className={`inline-flex items-center justify-center font-bold text-[10px] text-amber-600 ${className}`}>JS</span>;
  }
  if (normalized.includes('react')) {
    return <Code2 className={`text-sky-600 ${className}`} />;
  }
  if (normalized.includes('next')) {
    return <Binary className={`text-zinc-800 ${className}`} />;
  }
  if (normalized.includes('python')) {
    return <Terminal className={`text-emerald-600 ${className}`} />;
  }
  if (normalized.includes('node')) {
    return <Server className={`text-emerald-600 ${className}`} />;
  }
  if (normalized.includes('html')) {
    return <FileCode className={`text-orange-600 ${className}`} />;
  }
  if (normalized.includes('css') || normalized.includes('tailwind')) {
    return <Palette className={`text-cyan-600 ${className}`} />;
  }

  // Backend & Databases
  if (normalized.includes('postgres')) {
    return <Database className={`text-blue-600 ${className}`} />;
  }
  if (normalized.includes('mysql')) {
    return <Database className={`text-amber-600 ${className}`} />;
  }
  if (normalized.includes('firebase')) {
    return <Flame className={`text-amber-600 ${className}`} />;
  }
  if (normalized.includes('rest') || normalized.includes('api')) {
    return <Workflow className={`text-blue-600 ${className}`} />;
  }
  if (normalized.includes('graphql')) {
    return <Boxes className={`text-pink-600 ${className}`} />;
  }
  if (normalized.includes('relational') || normalized.includes('schema')) {
    return <Table className={`text-indigo-600 ${className}`} />;
  }

  // DevOps & Tools
  if (normalized.includes('docker') || normalized.includes('container')) {
    return <Container className={`text-sky-600 ${className}`} />;
  }
  if (normalized.includes('git') || normalized.includes('github')) {
    return <GitBranch className={`text-orange-600 ${className}`} />;
  }
  if (normalized.includes('linux')) {
    return <Terminal className={`text-amber-700 ${className}`} />;
  }
  if (normalized.includes('ci/cd') || normalized.includes('pipeline')) {
    return <Zap className={`text-purple-600 ${className}`} />;
  }
  if (normalized.includes('postman')) {
    return <Workflow className={`text-orange-600 ${className}`} />;
  }
  if (normalized.includes('vs code') || normalized.includes('cli')) {
    return <Terminal className={`text-blue-600 ${className}`} />;
  }

  // UI/UX & Design
  if (normalized.includes('figma')) {
    return <PenTool className={`text-purple-600 ${className}`} />;
  }
  if (normalized.includes('ui/ux') || normalized.includes('design')) {
    return <Layout className={`text-pink-600 ${className}`} />;
  }
  if (normalized.includes('wirefram') || normalized.includes('prototyp')) {
    return <Compass className={`text-teal-600 ${className}`} />;
  }
  if (normalized.includes('responsive')) {
    return <Monitor className={`text-emerald-600 ${className}`} />;
  }

  // AI & Emerging
  if (normalized.includes('prompt') || normalized.includes('ai') || normalized.includes('labeling')) {
    return <Bot className={`text-purple-600 ${className}`} />;
  }
  if (normalized.includes('team') || normalized.includes('collaboration') || normalized.includes('agile')) {
    return <Users className={`text-emerald-600 ${className}`} />;
  }

  // Languages (Spoken)
  if (normalized.includes('english')) {
    return <Globe className={`text-blue-600 ${className}`} />;
  }
  if (normalized.includes('swahili')) {
    return <Languages className={`text-emerald-600 ${className}`} />;
  }

  // Fallbacks
  return <Code className={`text-zinc-600 ${className}`} />;
};
