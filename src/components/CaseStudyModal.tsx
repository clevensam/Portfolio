import { Project } from '../types';
import { X, Github, ExternalLink, ArrowRight, ShieldCheck, CheckCircle, Cpu, FileText, ChevronRight } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectAnother: (project: Project) => void;
  allProjects: Project[];
}

export const CaseStudyModal = ({
  project,
  onClose,
  onSelectAnother,
  allProjects,
}: CaseStudyModalProps) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0a0a0b] border border-[#27272a] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0a0b]/95 border-b border-[#27272a] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#18181b] text-zinc-300 border border-[#27272a]">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white font-heading truncate">
              {project.title} — Case Study
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-[#18181b] hover:bg-[#27272a] rounded-full border border-[#27272a] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Repo
              </a>
            )}
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/60 rounded-full border border-cyan-800/60 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
            <button
              onClick={onClose}
              id="case-study-close-btn"
              aria-label="Close Case Study"
              className="p-1.5 text-[#a1a1aa] hover:text-white hover:bg-[#18181b] rounded-full border border-[#27272a] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-heading">
              {caseStudy.title}
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* High-Impact Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.impactMetrics.map((metric, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#18181b] border border-[#27272a] flex flex-col justify-between shadow-md"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-2">
                  {metric.stat}
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wider mb-0.5">
                    {metric.label}
                  </div>
                  <div className="text-xs text-[#a1a1aa]">{metric.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Problem Section */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              1. The Problem & Operational Friction
            </div>
            <div className="p-6 rounded-2xl bg-[#18181b] border border-[#27272a] text-sm text-[#d4d4d8] leading-relaxed shadow-sm">
              {caseStudy.problem}
            </div>
          </div>

          {/* Approach Section */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              2. Engineering Approach & Technical Architecture
            </div>
            <div className="p-6 rounded-2xl bg-[#18181b] border border-[#27272a] text-sm text-[#d4d4d8] leading-relaxed shadow-sm">
              {caseStudy.approach}
            </div>
          </div>

          {/* Architecture Highlights */}
          {caseStudy.architectureHighlights && (
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#3b82f6]" />
                Key Subsystems & Design Choices
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {caseStudy.architectureHighlights.map((arch, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#18181b] border border-[#27272a] text-xs space-y-1.5"
                  >
                    <div className="font-bold text-white font-mono">{arch.component}</div>
                    <div className="text-[#a1a1aa]">{arch.role}</div>
                    <div className="text-zinc-200 font-medium pt-1.5 border-t border-[#27272a]">
                      → {arch.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Role */}
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              3. My Role & Ownership
            </div>
            <div className="p-5 rounded-2xl bg-[#18181b] border border-[#27272a] text-sm text-[#d4d4d8]">
              <span className="font-semibold text-white">Full Ownership:</span> {caseStudy.myRole}
            </div>
          </div>

          {/* Result & Verified Outcomes */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              4. Verified Results & Metrics
            </div>
            <div className="space-y-2.5">
              {caseStudy.results.map((result, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#18181b] border border-[#27272a] text-sm text-zinc-200"
                >
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack & Links */}
          <div className="pt-6 border-t border-[#27272a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono font-semibold text-[#a1a1aa] uppercase tracking-wider mb-2">
                Technology Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {caseStudy.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-[#18181b] text-zinc-300 border border-[#27272a]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181b] hover:bg-[#27272a] text-zinc-200 hover:text-white text-xs font-mono border border-[#27272a] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repo
                </a>
              )}
              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Switch Case Studies Quick Navigator */}
          <div className="pt-4 border-t border-[#27272a]">
            <div className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider mb-3">
              Read Another Case Study
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allProjects
                .filter((p) => p.id !== project.id)
                .map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectAnother(p)}
                    className="p-4 rounded-2xl bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] hover:border-[#3b82f6]/50 text-left transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-zinc-200 group-hover:text-white font-heading">
                        {p.title}
                      </div>
                      <div className="text-[11px] text-[#a1a1aa] truncate max-w-[200px]">
                        {p.tagline}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#71717a] group-hover:text-white transition-colors" />
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
