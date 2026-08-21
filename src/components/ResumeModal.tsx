import { useState } from 'react';
import { personalInfo, experienceData, skillCategories, educationData, courseCertifications } from '../data/portfolioData';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  Stack,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PrintIcon from '@mui/icons-material/Print';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [copied, setCopied] = useState(false);

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
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      slotProps={{
        paper: {
          sx: {
            borderRadius: '8px',
            border: '1px solid #e4e4e7',
            maxHeight: '90vh',
          },
        },
      }}
    >
      {/* Dialog Header Bar */}
      <DialogTitle
        sx={{
          p: 2.5,
          borderBottom: '1px solid #e4e4e7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#ffffff',
        }}
        className="no-print"
      >
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
          <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Resume Document Preview
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Button
            variant="outlined"
            size="small"
            onClick={handleCopyText}
            startIcon={copied ? <CheckIcon sx={{ color: 'success.main' }} /> : <ContentCopyIcon />}
            sx={{ fontSize: '0.75rem', py: 0.5 }}
          >
            {copied ? 'Copied Text!' : 'Copy Text'}
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="small"
            id="resume-modal-print-btn"
            onClick={handlePrint}
            startIcon={<PrintIcon />}
            sx={{ fontSize: '0.75rem', py: 0.5 }}
          >
            Print / Save PDF
          </Button>

          <IconButton size="small" onClick={onClose} id="resume-modal-close-btn" aria-label="Close Resume">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
      </DialogTitle>

      {/* Printable Resume Content */}
      <DialogContent sx={{ p: { xs: 3, sm: 5 }, bgcolor: '#ffffff' }}>
        <Stack spacing={4}>
          {/* Header */}
          <Box sx={{ borderBottom: '1px solid #e4e4e7', pb: 3 }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              sx={{ justifyContent: 'space-between', alignItems: { sm: 'baseline' }, mb: 1.5 }}
            >
              <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary' }}>
                {personalInfo.name}
              </Typography>
              <Typography variant="subtitle2" color="primary.main" sx={{ fontFamily: 'monospace', fontWeight: 600 }}>
                {personalInfo.roleTitle}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{ flexWrap: 'wrap', alignItems: 'center', gap: 1.5, color: 'text.secondary', fontFamily: 'monospace', fontSize: '0.75rem' }}
            >
              <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 14, color: 'primary.main' }} />
                <Typography variant="caption">{personalInfo.location}</Typography>
              </Stack>
              <Typography variant="caption">•</Typography>
              <Typography
                component="a"
                href={`mailto:${personalInfo.email}`}
                variant="caption"
                sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                {personalInfo.email}
              </Typography>
              <Typography variant="caption">•</Typography>
              <Typography
                component="a"
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="caption"
                sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                {personalInfo.githubHandle}
              </Typography>
              <Typography variant="caption">•</Typography>
              <Typography
                component="a"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                variant="caption"
                sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                {personalInfo.linkedinHandle}
              </Typography>
            </Stack>
          </Box>

          {/* Executive Summary */}
          <Card variant="outlined" sx={{ p: 2.5, borderRadius: '8px', bgcolor: 'rgba(244, 244, 245, 0.5)' }}>
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <Typography variant="caption" color="primary" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', mb: 1 }}>
                Summary & Value Proposition
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.6 }}>
                {personalInfo.valueProp}
              </Typography>
            </CardContent>
          </Card>

          {/* Experience */}
          <Box>
            <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.primary', display: 'block', mb: 2, pb: 1, borderBottom: '1px solid #e4e4e7' }}>
              Work Experience & Internships
            </Typography>

            <Stack spacing={2.5}>
              {experienceData.map((exp) => (
                <Card key={exp.id} variant="outlined" sx={{ p: 2.5, borderRadius: '8px', bgcolor: 'rgba(250, 250, 250, 0.7)' }}>
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={0.5}
                      sx={{ justifyContent: 'space-between', alignItems: { sm: 'baseline' }, mb: 1 }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {exp.title} <span style={{ fontWeight: 400, color: '#71717a', fontSize: '0.85rem' }}>— {exp.organization}</span>
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                        {exp.period} | {exp.location}
                      </Typography>
                    </Stack>

                    <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 600, color: 'success.dark', display: 'block', mb: 1 }}>
                      Verified Outcome: {exp.metrics}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 1.5, '& li': { fontSize: '0.8rem', color: 'text.secondary', lineHeight: 1.6 } }}>
                      {exp.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </Box>

                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', display: 'block', pt: 1, borderTop: '1px solid #e4e4e7' }}>
                      Applied Tech: {exp.technologies.join(', ')}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>

          {/* Technical Skills */}
          <Box>
            <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.primary', display: 'block', mb: 2, pb: 1, borderBottom: '1px solid #e4e4e7' }}>
              Technical Skills
            </Typography>
            <Stack spacing={1.5}>
              {skillCategories.map((cat) => (
                <Card key={cat.title} variant="outlined" sx={{ p: 1.5, borderRadius: '8px', bgcolor: 'rgba(250, 250, 250, 0.7)' }}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ alignItems: { sm: 'baseline' } }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary', minWidth: 140 }}>
                      {cat.title}:
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                      {cat.skills.join(', ')}
                    </Typography>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Box>

          {/* Education & Certs */}
          <Stack spacing={3}>
            <Card variant="outlined" sx={{ p: 2.5, borderRadius: '8px', bgcolor: 'rgba(244, 244, 245, 0.5)' }}>
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Typography variant="caption" color="primary" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', mb: 1.5, pb: 0.5, borderBottom: '1px solid #e4e4e7' }}>
                  Education
                </Typography>
                {educationData.map((edu) => (
                  <Box key={edu.degree} sx={{ mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                      {edu.period}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ p: 2.5, borderRadius: '8px', bgcolor: 'rgba(244, 244, 245, 0.5)' }}>
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#d97706', display: 'block', mb: 1.5, pb: 0.5, borderBottom: '1px solid #e4e4e7' }}>
                  Certifications & Specializations
                </Typography>
                <Stack spacing={1}>
                  {courseCertifications.map((c) => (
                    <Stack key={c.title} direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="caption" color="text.primary" sx={{ fontWeight: 500 }}>
                        {c.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                        {c.issuer} ({c.year})
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
