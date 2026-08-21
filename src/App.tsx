/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCards } from './components/ProjectCards';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { projects, skillCategories, experienceData, educationData, courseCertifications, testimonials } from './data/portfolioData';
import { Project } from './types';
import { handleInitialHash } from './utils/scroll';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Clean shared links that contain a hash and scroll to the target section
  useEffect(() => {
    handleInitialHash();
  }, []);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'experience', 'testimonials', 'skills', 'certifications', 'education', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col font-sans selection:bg-blue-600/15 selection:text-zinc-950">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections - Single Column Cognitive Clarity Layout */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Featured Projects (EnvX, Mangi Store, Church Management) */}
        <ProjectCards
          projects={projects}
          onSelectProject={(project) => setSelectedCaseStudy(project)}
        />

        {/* 3. Work Experience & Internships (ZeTheta Algorithms, TANESCO Ilala IPT) */}
        <ExperienceTimeline items={experienceData} />

        {/* 4. Collaborator & Stakeholder Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* 5. Technical Skills & Languages Matrix with Icons */}
        <SkillsSection categories={skillCategories} />

        {/* 6. Dedicated Certifications Section */}
        <CertificationsSection certifications={courseCertifications} />

        {/* 7. Dedicated Formal Education Section */}
        <EducationSection education={educationData} />

        {/* 8. About, Personal Narrative & Spoken Languages */}
        <AboutSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectAnother={(project) => setSelectedCaseStudy(project)}
        allProjects={projects}
      />

      {/* Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
