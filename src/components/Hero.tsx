import { useState, MouseEvent } from 'react';
import { personalInfo } from '../data/portfolioData';
import { scrollToSection } from '../utils/scroll';
import { TechIcon } from './TechIcon';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Card,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import DownloadIcon from '@mui/icons-material/Download';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero = ({ onOpenResume }: HeroProps) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        pt: { xs: 14, sm: 18, md: 22 },
        pb: { xs: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Blur & Grid */}
      <Box
        sx={{
          position: 'absolute',
          top: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: 300, sm: 500, md: 650 },
          height: 250,
          bgcolor: 'rgba(219, 234, 254, 0.6)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
            {/* Main Name & Role */}
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' },
                  color: 'text.primary',
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                {personalInfo.name}
              </Typography>
              <Typography
                variant="h5"
                color="primary.main"
                sx={{ fontWeight: 600, fontSize: { xs: '1.15rem', sm: '1.35rem' } }}
              >
                {personalInfo.roleTitle}
              </Typography>
            </Box>

            {/* Value Proposition */}
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.6,
                maxWidth: 680,
              }}
            >
              {personalInfo.valueProp}
            </Typography>

            {/* Action Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1, width: { xs: '100%', sm: 'auto' } }}>
              <Button
                variant="contained"
                color="secondary"
                href="#projects"
                onClick={(e: MouseEvent) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                id="hero-view-work-cta"
                endIcon={<ArrowForwardIcon fontSize="small" />}
                sx={{ px: 3, py: 1.2 }}
              >
                Explore Projects
              </Button>

              <Button
                variant="outlined"
                href="#experience"
                onClick={(e: MouseEvent) => {
                  e.preventDefault();
                  scrollToSection('experience');
                }}
                id="hero-view-experience-cta"
                startIcon={<WorkHistoryOutlinedIcon color="primary" fontSize="small" />}
                sx={{ px: 2.5, py: 1.2 }}
              >
                Work Experience
              </Button>

              <Button
                variant="outlined"
                onClick={onOpenResume}
                id="hero-resume-pdf-cta"
                startIcon={<DownloadIcon fontSize="small" />}
                sx={{ px: 2.5, py: 1.2 }}
              >
                Resume (PDF)
              </Button>
            </Stack>

            <Divider sx={{ width: '100%', my: 1 }} />

            {/* Core Technologies Badges */}
            <Box sx={{ width: '100%' }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'text.secondary',
                  display: 'block',
                  mb: 1.5,
                }}
              >
                Core Technologies
              </Typography>
              <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                {personalInfo.heroBadges.map((tech) => (
                  <Chip
                    key={tech}
                    variant="outlined"
                    icon={<TechIcon name={tech} className="w-3.5 h-3.5" />}
                    label={tech}
                    sx={{
                      bgcolor: '#ffffff',
                      borderColor: '#e4e4e7',
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      py: 0.5,
                      '&:hover': {
                        borderColor: 'primary.main',
                        color: 'primary.main',
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>

            {/* Direct Contact Links */}
            <Stack direction="row" sx={{ flexWrap: 'wrap', alignItems: 'center', gap: 1.5, pt: 1 }}>
              {/* Email Chip with Copy Action */}
              <Card variant="outlined" sx={{ borderRadius: '8px', p: 0.5, display: 'inline-flex', alignItems: 'center' }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center', px: 1.5, py: 0.25 }}>
                  <EmailOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
                  <Typography
                    component="a"
                    href={`mailto:${personalInfo.email}`}
                    variant="caption"
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      color: 'text.primary',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {personalInfo.email}
                  </Typography>
                  <Tooltip title={copied ? 'Copied!' : 'Copy Email'}>
                    <IconButton size="small" onClick={copyEmail} sx={{ p: 0.5 }}>
                      {copied ? (
                        <CheckIcon sx={{ fontSize: 16, color: 'success.main' }} />
                      ) : (
                        <ContentCopyIcon sx={{ fontSize: 15, color: 'text.secondary' }} />
                      )}
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Card>

              {/* GitHub Link */}
              <Chip
                component="a"
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                clickable
                variant="outlined"
                icon={<GitHubIcon sx={{ fontSize: 16 }} />}
                label="clevensam"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  bgcolor: '#ffffff',
                }}
              />

              {/* LinkedIn Link */}
              <Chip
                component="a"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                clickable
                variant="outlined"
                icon={<LinkedInIcon sx={{ fontSize: 16, color: '#0284c7' }} />}
                label="cleven-samwel"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  bgcolor: '#ffffff',
                }}
              />
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};
