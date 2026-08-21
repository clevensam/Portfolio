import { Testimonial } from '../types';
import { Quote, MessageSquareQuote, CheckCircle2, Sparkles, Building } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <section id="testimonials" className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 pb-4 border-b border-zinc-200"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          Project Feedback & Endorsements
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-heading">
          Collaborator & Stakeholder Testimonials
        </h2>
        <p className="text-zinc-600 text-sm mt-1">
          Feedback from project owners, team leads, and administrators on deployed systems.
        </p>
      </motion.div>

      {/* Sequential Single-Column Testimonials */}
      <div className="space-y-6">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            id={`testimonial-card-${item.id}`}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 transition-colors space-y-4 relative"
          >
            {/* Top Project Context Badge & Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60 font-semibold">
                <Sparkles className="w-3 h-3 text-blue-600" />
                {item.project}
              </div>
              <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200">
                {item.highlightTag}
              </span>
            </div>

            {/* Testimonial Quote Body */}
            <div className="relative pl-1 text-zinc-700 text-sm sm:text-base leading-relaxed italic">
              <Quote className="w-6 h-6 text-zinc-300 absolute -top-2 -left-1 opacity-40 select-none pointer-events-none" />
              <p className="relative z-10 pt-1">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Information (No photos, purely typographic credentials) */}
            <div className="pt-2 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                {/* Clean Typographic Monogram Badge */}
                <div className="w-9 h-9 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-bold font-mono text-zinc-800 shrink-0 shadow-2xs">
                  {item.author
                    .split(' ')
                    .filter((part) => !part.startsWith('Dr.') && !part.startsWith('Sister'))
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div>
                  <div className="font-bold text-zinc-900 text-sm font-heading">
                    {item.author}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {item.role}
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-zinc-500 sm:text-right flex items-center gap-1 sm:justify-end">
                <Building className="w-3.5 h-3.5 text-zinc-400" />
                <span>{item.organization}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
