import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer = ({ onOpenResume }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 bg-white py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-bold text-zinc-900 font-heading">
            {personalInfo.name} — {personalInfo.roleTitle}
          </div>
          <div className="text-zinc-500">
            Based in {personalInfo.location} · Available worldwide for remote work
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full bg-zinc-100 border border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full bg-zinc-100 border border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Cleven"
            className="p-2 rounded-full bg-zinc-100 border border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 hover:border-zinc-300 text-zinc-800 text-xs font-mono font-medium transition-all"
          >
            Resume (PDF)
          </button>
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            title="Back to top"
            aria-label="Back to top"
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 transition-all ml-1 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
