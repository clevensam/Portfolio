import { Project } from '../types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  IconButton,
  Chip,
  Card,
  Stack,
  Box,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import MemoryIcon from '@mui/icons-material/Memory';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectAnother: (project: Project) => void;
  allProjects: Project[];
}

export const CaseStudyModal = ({
  project,
  onClose,
  onSelectAnother,
  allProjects,
}: CaseStudyModalProps) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <Dialog
      open={Boolean(project)}
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
      {/* Dialog Header */}
      <DialogTitle
        sx={{
          p: 2.5,
          borderBottom: '1px solid #e4e4e7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#ffffff',
        }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', overflow: 'hidden' }}>
          <Chip
            label={project.category}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ fontSize: '0.7rem', fontFamily: 'monospace', fontWeight: 600 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {project.title} — Architectural Case Study
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          {project.links.github && (
            <Button
              variant="outlined"
              size="small"
              component="a"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              startIcon={<GitHubIcon fontSize="small" />}
              sx={{ display: { xs: 'none', sm: 'inline-flex' }, fontSize: '0.75rem', py: 0.5 }}
            >
              Repo
            </Button>
          )}
          {project.links.liveDemo && (
            <Button
              variant="outlined"
              color="primary"
              size="small"
              component="a"
              href={project.links.liveDemo}
              target="_blank"
              rel="noreferrer"
              startIcon={<LaunchIcon fontSize="small" />}
              sx={{ display: { xs: 'none', sm: 'inline-flex' }, fontSize: '0.75rem', py: 0.5 }}
            >
              Live Demo
            </Button>
          )}
          <IconButton size="small" onClick={onClose} id="case-study-close-btn" aria-label="Close Case Study">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent sx={{ p: { xs: 2.5, sm: 4 }, bgcolor: '#fafafa' }}>
        <Stack spacing={4}>
          {/* Title & Subtitle */}
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', mb: 1 }}>
              {caseStudy.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
              {caseStudy.subtitle}
            </Typography>
          </Box>

          {/* High-Impact Stat Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
            {caseStudy.impactMetrics.map((metric, i) => (
              <Card
                key={i}
                variant="outlined"
                sx={{
                  p: 2.5,
                  borderRadius: '8px',
                  bgcolor: '#ffffff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 800, fontFamily: 'monospace', color: 'primary.main', mb: 1 }}>
                  {metric.stat}
                </Typography>
                <Box>
                  <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', color: 'text.primary', display: 'block' }}>
                    {metric.label}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {metric.detail}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>

          {/* Problem Section */}
          <Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
              <WarningAmberOutlinedIcon sx={{ fontSize: 18, color: '#e11d48' }} />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', color: '#e11d48', letterSpacing: '0.05em' }}>
                1. The Problem & Operational Friction
              </Typography>
            </Stack>
            <Card variant="outlined" sx={{ p: 3, borderRadius: '8px', bgcolor: '#ffffff' }}>
              <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.7 }}>
                {caseStudy.problem}
              </Typography>
            </Card>
          </Box>

          {/* Approach Section */}
          <Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
              <ArchitectureOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
              <Typography variant="caption" color="primary" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                2. Engineering Approach & Technical Architecture
              </Typography>
            </Stack>
            <Card variant="outlined" sx={{ p: 3, borderRadius: '8px', bgcolor: '#ffffff' }}>
              <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.7 }}>
                {caseStudy.approach}
              </Typography>
            </Card>
          </Box>

          {/* Architecture Highlights */}
          {caseStudy.architectureHighlights && (
            <Box>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
                <MemoryIcon color="primary" sx={{ fontSize: 18 }} />
                <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', color: 'text.primary', letterSpacing: '0.05em' }}>
                  Key Subsystems & Design Choices
                </Typography>
              </Stack>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
                {caseStudy.architectureHighlights.map((arch, i) => (
                  <Card key={i} variant="outlined" sx={{ p: 2.5, borderRadius: '8px', bgcolor: '#ffffff', height: '100%' }}>
                    <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                      {arch.component}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1.5, lineHeight: 1.5 }}>
                      {arch.role}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'primary.main', display: 'block' }}>
                      → {arch.benefit}
                    </Typography>
                  </Card>
                ))}
              </Box>
            </Box>
          )}

          {/* My Role */}
          <Box>
            <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', color: 'text.primary', display: 'block', mb: 1.5, letterSpacing: '0.05em' }}>
              3. My Role & Engineering Ownership
            </Typography>
            <Card variant="outlined" sx={{ p: 2.5, borderRadius: '8px', bgcolor: '#ffffff' }}>
              <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.6 }}>
                <strong style={{ color: '#18181b' }}>Full Ownership:</strong> {caseStudy.myRole}
              </Typography>
            </Card>
          </Box>

          {/* Verified Results */}
          <Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
              <VerifiedOutlinedIcon sx={{ fontSize: 18, color: 'success.main' }} />
              <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', color: 'success.main', letterSpacing: '0.05em' }}>
                4. Verified Results & Real Metrics
              </Typography>
            </Stack>
            <Stack spacing={1.5}>
              {caseStudy.results.map((result, i) => (
                <Card key={i} variant="outlined" sx={{ p: 2, borderRadius: '8px', bgcolor: '#ffffff' }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                    <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: 'success.main', mt: 0.2, shrink: 0 }} />
                    <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.6 }}>
                      {result}
                    </Typography>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Box>

          {/* Tech Stack Chips */}
          <Box sx={{ pt: 1 }}>
            <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', color: 'text.secondary', display: 'block', mb: 1.5 }}>
              Technology Stack
            </Typography>
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
              {caseStudy.stack.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  variant="outlined"
                  sx={{ fontFamily: 'monospace', fontSize: '0.75rem', bgcolor: '#ffffff' }}
                />
              ))}
            </Stack>
          </Box>

          <Divider />

          {/* Quick Switch to another project */}
          <Box>
            <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', color: 'text.secondary', display: 'block', mb: 1.5 }}>
              Read Another Case Study
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {allProjects
                .filter((p) => p.id !== project.id)
                .map((p) => (
                  <Card
                    key={p.id}
                    variant="outlined"
                    onClick={() => onSelectAnother(p)}
                    sx={{
                      p: 2,
                      borderRadius: '8px',
                      bgcolor: '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      },
                    }}
                  >
                    <Box sx={{ overflow: 'hidden' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {p.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {p.tagline}
                      </Typography>
                    </Box>
                    <ChevronRightIcon color="action" />
                  </Card>
                ))}
            </Box>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
