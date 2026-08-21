import { useState } from 'react';
import { personalInfo, experienceData, skillCategories, educationData, courseCertifications } from '../data/portfolioData';
import { X, Printer, Copy, Check, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalInfo.name}
${personalInfo.roleTitle}
${personalInfo.location} | ${personalInfo.email}
GitHub: ${personalInfo.githubUrl} | LinkedIn: ${personalInfo.linkedinUrl}

VALUE PROPOSITION:
${personalInfo.valueProp}

EXPERIENCE:
${experienceData
  .map(
    (e) => `
${e.title} - ${e.organization} (${e.period}, ${e.location})
Key Metric: ${e.metrics}
${e.bullets.map((b) => `• ${b}`).join('\n')}
`
  )
  .join('\n')}

TECHNICAL SKILLS:
${skillCategories.map((c) => `${c.title}: ${c.skills.join(', ')}`).join('\n')}

EDUCATION:
${educationData.map((ed) => `${ed.degree} — ${ed.institution} (${ed.period})`).join('\n')}

CERTIFICATIONS:
${courseCertifications.map((c) => `• ${c.title} (${c.issuer}, ${c.year})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/60 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-white border border-zinc-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Controls Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 border-b border-zinc-200 backdrop-blur-md no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Resume Document Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-full border border-zinc-200 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Copied Text!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Text
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              id="resume-modal-print-btn"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-full transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              id="resume-modal-close-btn"
              className="p-1.5 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 rounded-full border border-zinc-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-zinc-900 space-y-6 font-sans">
          {/* Header */}
          <div className="border-b border-zinc-200 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 font-heading tracking-tight">
                {personalInfo.name}
              </h1>
              <div className="text-sm font-semibold text-blue-600 font-mono">
                {personalInfo.roleTitle}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-600" /> {personalInfo.location}
              </span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-zinc-700 hover:underline">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-700 hover:underline">
                {personalInfo.githubHandle}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="text-zinc-700 hover:underline">
                {personalInfo.linkedinHandle}
              </a>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-1.5">
              Summary & Value Proposition
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {personalInfo.valueProp}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 pb-1 border-b border-zinc-200">
              Work Experience & Internships
            </h2>

            <div className="space-y-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div className="text-sm font-bold text-zinc-900 font-heading">
                      {exp.title}{' '}
                      <span className="font-normal text-zinc-600 text-xs">
                        — {exp.organization}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-zinc-500">
                      {exp.period} | {exp.location}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-emerald-700 font-medium">
                    Verified Outcome: {exp.metrics}
                  </div>

                  <ul className="space-y-1 text-xs text-zinc-600 list-disc pl-4 pt-0.5">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-zinc-500 pt-1 border-t border-zinc-200/60">
                    Tech: {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 pb-1 border-b border-zinc-200">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-bold text-zinc-900 shrink-0 w-32">{cat.title}:</span>
                  <span className="text-zinc-600 font-mono">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-4 pt-1">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 pb-1 border-b border-zinc-200">
                Education
              </h2>
              {educationData.map((edu) => (
                <div key={edu.degree} className="text-xs space-y-0.5">
                  <div className="font-bold text-zinc-900 font-heading">{edu.degree}</div>
                  <div className="text-zinc-600">{edu.institution}</div>
                  <div className="text-zinc-500 font-mono">{edu.period}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 pb-1 border-b border-zinc-200">
                Certifications & Specializations
              </h2>
              <ul className="text-xs text-zinc-700 space-y-1.5">
                {courseCertifications.map((c) => (
                  <li key={c.title} className="flex justify-between text-[11px]">
                    <span>{c.title}</span>
                    <span className="text-zinc-500 font-mono">{c.issuer} ({c.year})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
