import { ExperienceItem } from '../types';
import { TechIcon } from './TechIcon';
import { Briefcase, Calendar, MapPin, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
  return (
    <section id="experience" className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 pb-4 border-b border-zinc-200"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
          <Briefcase className="w-3.5 h-3.5" />
          Track Record
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-heading">
          Work Experience
        </h2>
        <p className="text-zinc-600 text-sm mt-1">
          Hands-on software development internships and enterprise industrial training.
        </p>
      </motion.div>

      {/* Continuous Open Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-12 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-200">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative group space-y-3.5"
          >
            {/* Timeline Node Point */}
            <div className="absolute -left-[30px] sm:-left-[34px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-600 shadow-xs" />

            {/* Role Header Info */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 font-heading">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                  {item.roleType}
                </span>
              </div>

              <div className="text-sm font-semibold text-blue-600 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {item.organization}
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 flex-wrap pt-0.5">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  {item.period}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {item.location}
                </span>
              </div>
            </div>

            {/* Verified Outcome Metric Banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-zinc-500">Key Focus:</span>
              <span className="text-zinc-900 font-semibold">{item.metrics}</span>
            </div>

            {/* Role Responsibilities Bullets */}
            <ul className="space-y-2 text-sm text-zinc-600 leading-relaxed pt-1">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Technology Stack with Specific Icons */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mr-1">
                Applied Tech:
              </span>
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full bg-white text-zinc-700 border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-colors"
                >
                  <TechIcon name={tech} className="w-3 h-3" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>

            {/* Bottom subtle divider line */}
            <div className="pt-6 border-b border-zinc-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
