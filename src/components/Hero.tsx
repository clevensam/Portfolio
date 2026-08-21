import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { ArrowRight, Download, MapPin, Mail, Github, Linkedin, Copy, Check, Briefcase, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/60 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Single Column Information Architecture */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-left"
        >
          {/* Main Title & Role */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 font-heading leading-[1.1]">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-blue-600">
              {personalInfo.roleTitle}
            </p>
          </div>

          {/* Value Prop */}
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            {personalInfo.valueProp}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              id="hero-view-work-cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white font-medium text-xs hover:bg-zinc-800 hover:shadow-xs active:scale-98 transition-all"
            >
              Explore Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#experience"
              id="hero-view-experience-cta"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 font-medium text-xs shadow-xs transition-all"
            >
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              Work Experience
            </a>

            <button
              onClick={onOpenResume}
              id="hero-resume-pdf-cta"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 font-medium text-xs shadow-xs active:scale-98 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-zinc-600" />
              Resume (PDF)
            </button>
          </div>

          {/* Core Tech Stack */}
          <div className="pt-6 border-t border-zinc-200 space-y-2.5">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
              Core Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {personalInfo.heroBadges.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-white text-zinc-700 border border-zinc-200 shadow-xs hover:border-blue-400 hover:text-blue-600 transition-all cursor-default"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="pt-3 flex flex-wrap items-center gap-3 text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 shadow-xs text-zinc-700">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-600 font-mono text-[11px]"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={copyEmail}
                id="hero-copy-email-btn"
                title="Copy email to clipboard"
                className="p-1 hover:bg-zinc-100 rounded-md text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 shadow-xs text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 transition-colors font-mono text-[11px]"
            >
              <Github className="w-3.5 h-3.5 text-zinc-700" />
              <span>clevensam</span>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 shadow-xs text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 transition-colors font-mono text-[11px]"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600" />
              <span>cleven-samwel</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
