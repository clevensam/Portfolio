import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar = ({ onOpenResume, activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          id="nav-brand-logo"
          className="group flex items-center gap-2.5 text-zinc-900 hover:text-blue-600 transition-colors"
        >
          <div className="h-8 w-8 rounded-xl bg-zinc-900 flex items-center justify-center font-bold text-xs text-white group-hover:bg-blue-600 transition-colors shadow-xs">
            CS
          </div>
          <div>
            <div className="text-sm font-bold tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">
              {personalInfo.name}
            </div>
            <div className="text-[11px] text-zinc-500 font-medium">Software Developer</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/90 border border-zinc-200/80 rounded-full px-2.5 py-1 backdrop-blur-sm shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-blue-700 bg-white shadow-xs font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            id="nav-github-link"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl border border-transparent hover:border-zinc-200 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            id="nav-linkedin-link"
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl border border-transparent hover:border-zinc-200 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white hover:shadow-xs active:scale-95 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-200" />
            Resume (PDF)
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            id="nav-mobile-resume-btn"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-900 text-white"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="nav-mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="p-2 text-zinc-700 hover:text-zinc-950 bg-zinc-100 border border-zinc-200 rounded-xl"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-zinc-200 bg-white/98 backdrop-blur-xl px-4 py-4 space-y-1.5 mt-2 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2 text-sm font-medium text-zinc-700 hover:text-blue-600 hover:bg-zinc-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
              <div className="flex gap-4">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-zinc-900"
                >
                  <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-zinc-900"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
