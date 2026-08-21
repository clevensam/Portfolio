import { SkillCategory } from '../types';
import { TechIcon } from './TechIcon';
import { Code2, Database, Terminal, Palette, Sparkles, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection = ({ categories }: SkillsSectionProps) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-blue-600" />;
      case 'Database':
        return <Database className="w-4 h-4 text-blue-600" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-amber-600" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-purple-600" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 pb-4 border-b border-zinc-200"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
          <Cpu className="w-3.5 h-3.5" />
          Technical Stack
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-heading">
          Skills & Technologies
        </h2>
        <p className="text-zinc-600 text-sm mt-1">
          Organized by domain for clean readability and practical application across full-stack systems.
        </p>
      </motion.div>

      {/* Single Column Grouped Domains */}
      <div className="space-y-6">
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-3"
          >
            {/* Category Header */}
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-zinc-100 border border-zinc-200">
                {getCategoryIcon(category.icon)}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 font-heading">
                  {category.title}
                </h3>
                <p className="text-xs text-zinc-500">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Skill Chips with Dedicated Icons */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 transition-colors"
                >
                  <TechIcon name={skill} className="w-3.5 h-3.5" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
