import { Project } from '../types';
import { TechIcon } from './TechIcon';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, FileCode2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectCards = ({ projects, onSelectProject }: ProjectCardsProps) => {
  return (
    <section id="projects" className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 pb-4 border-b border-zinc-200"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
          <Layers className="w-3.5 h-3.5" />
          Featured Systems
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-heading">
          Projects
        </h2>
        <p className="text-zinc-600 text-sm mt-1">
          Full-stack systems built to replace error-prone workflows, manual ledgers, and configuration drift.
        </p>
      </motion.div>

      {/* Single Column Sequential Showcase */}
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            id={`project-item-${project.id}`}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-200 space-y-4"
          >
            {/* Top Bar: Category & Index */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-600">
                0{idx + 1}
              </span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 font-heading">
                {project.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Verified Impact Highlight */}
            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-zinc-600">
                  {project.metrics[0].description}
                </span>
              </div>
              <span className="text-sm font-bold font-mono text-zinc-900 shrink-0">
                {project.metrics[0].highlight}
              </span>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100/80 text-zinc-700 border border-zinc-200"
                >
                  <TechIcon name={tag} className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Actions Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 border-t border-zinc-100">
              <button
                onClick={() => onSelectProject(project)}
                id={`btn-case-study-${project.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition-all shadow-xs cursor-pointer"
              >
                <FileCode2 className="w-3.5 h-3.5" />
                Read Case Study
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub Repo`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 border border-zinc-200 text-xs font-mono transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-zinc-600" />
                  Source Code
                </a>
              )}

              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} Live Demo`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-mono transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
