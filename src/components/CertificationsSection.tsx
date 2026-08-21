import { CourseCertification } from '../types';
import { Award, Calendar, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CertificationsSectionProps {
  certifications: CourseCertification[];
}

export const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <section id="certifications" className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 pb-4 border-b border-zinc-200"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
          <Award className="w-3.5 h-3.5" />
          Continuous Learning
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-heading">
          Certifications & Specializations
        </h2>
        <p className="text-zinc-600 text-sm mt-1">
          Industry courses in full-stack engineering, human-centered UI/UX design, and AI model workflows.
        </p>
      </motion.div>

      {/* Single Column Sequential List */}
      <div className="space-y-4">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            id={`cert-item-${idx}`}
            className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-600 shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 font-heading leading-snug">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                  <span className="font-semibold text-zinc-700">{cert.issuer}</span>
                  <span>•</span>
                  <span className="font-mono">{cert.year}</span>
                </div>
              </div>
            </div>

            <div className="self-start sm:self-center">
              <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                {cert.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
