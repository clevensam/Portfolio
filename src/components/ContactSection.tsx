import { useState, FormEvent } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Github, Linkedin, Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || 'Software Engineering Inquiry'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setStatusMessage('Draft prepared. Opening your default email client...');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <section id="contact" className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 pb-4 border-b border-zinc-200 text-left"
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-heading">
          Contact & Collaboration
        </h2>
        <p className="text-zinc-600 text-sm mt-1">
          Open for full-stack, frontend, and UI/UX developer roles, consulting on internal operations, or contract engineering projects.
        </p>
      </motion.div>

      {/* Single Column Sequential Flow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        {/* Direct Contact Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Email with 1-click copy */}
          <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] text-zinc-500 font-medium">Direct Email</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-semibold text-zinc-900 hover:text-blue-600 text-xs font-mono truncate block"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              id="contact-copy-email-btn"
              className="p-1.5 hover:bg-zinc-100 rounded-lg text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer shrink-0"
              title="Copy email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Location */}
          <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs flex items-center gap-3">
            <div className="p-2 rounded-xl bg-zinc-100 text-zinc-700 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] text-zinc-500 font-medium">Location</div>
              <div className="font-semibold text-zinc-900 text-xs">{personalInfo.location}</div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-zinc-100 text-zinc-900">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-zinc-500 font-medium">GitHub</div>
                <span className="font-mono text-xs font-semibold text-zinc-900">{personalInfo.githubHandle}</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-zinc-500 font-medium">LinkedIn</div>
                <span className="font-mono text-xs font-semibold text-zinc-900">{personalInfo.linkedinHandle}</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Message Composer Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-4">
          <form onSubmit={handleSendEmail} className="space-y-4 text-xs">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 pb-2 border-b border-zinc-100">
              Quick Email Composer
            </div>

            <div>
              <label className="block text-zinc-600 mb-1 font-mono text-[11px] font-medium">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Full Stack Developer Role / Project Inquiry"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-xs"
                required
              />
            </div>

            <div>
              <label className="block text-zinc-600 mb-1 font-mono text-[11px] font-medium">Message</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Cleven, I saw your work on EnvX and Mangi Store and would love to connect..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-xs resize-none"
                required
              />
            </div>

            {statusMessage && (
              <div className="text-xs text-emerald-600 font-mono">{statusMessage}</div>
            )}

            <button
              type="submit"
              id="contact-send-email-submit"
              className="w-full py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Compose Email in Client
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};
