import { personalInfo } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { User, Globe, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 pb-4 border-b border-zinc-200"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
          <User className="w-3.5 h-3.5" />
          Personal Narrative
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-heading">
          About Me
        </h2>
        <p className="text-zinc-600 text-sm mt-1">
          Background, engineering philosophy, and human-centered design approach.
        </p>
      </motion.div>

      {/* Single Column Content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        {/* Narrative Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-zinc-900 font-heading">
            Engineering with Human Purpose
          </h3>
          <p className="text-base text-zinc-600 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Core Mission Callout */}
        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
            <HeartHandshake className="w-4 h-4" />
            Work Ethic & Philosophy
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            I prioritize real operational clarity over unnecessary complexity. Every database schema, API route, and user interface is engineered to eliminate friction and make daily work faster and error-free for end users.
          </p>
        </div>

        {/* Spoken Languages with Icons */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600" />
            Spoken & Written Languages
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {personalInfo.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs"
              >
                <div className="p-2 rounded-xl bg-zinc-100 border border-zinc-200">
                  <TechIcon name={lang.name} className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-zinc-900 text-sm">{lang.name}</div>
                  <div className="text-zinc-500 font-mono text-xs">{lang.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
