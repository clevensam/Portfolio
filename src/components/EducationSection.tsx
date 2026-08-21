import { EducationItem } from '../types';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section id="education" className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 pb-4 border-b border-zinc-200"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
          <GraduationCap className="w-3.5 h-3.5" />
          Academic Foundation
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-heading">
          Education
        </h2>
        <p className="text-zinc-600 text-sm mt-1">
          Formal training in computer science, system architectures, and software engineering.
        </p>
      </motion.div>

      {/* Single Column Degree Card */}
      <div className="space-y-4">
        {education.map((item, idx) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            id={`edu-item-${idx}`}
            className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 font-heading">
                  {item.degree}
                </h3>
                <div className="text-sm font-semibold text-blue-600 mt-0.5">
                  {item.institution}
                </div>
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200 shrink-0 self-start sm:self-auto">
                <Calendar className="w-3 h-3 text-zinc-400" />
                {item.period}
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-100 text-sm text-zinc-600 leading-relaxed flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>{item.details}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
