import { Project } from '../types';
import { TechIcon } from './TechIcon';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { motion } from 'motion/react';

interface ProjectCardsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectCards = ({ projects, onSelectProject }: ProjectCardsProps) => {
  return (
    <Container maxWidth="md" id="projects" component="section" sx={{ py: 8 }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box sx={{ mb: 5, pb: 2, borderBottom: '1px solid #e4e4e7' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <LayersOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Featured Systems
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
            Projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Full-stack systems built to replace error-prone workflows, manual ledgers, and configuration drift.
          </Typography>
        </Box>
      </motion.div>

      {/* Sequential MUI Card Showcase */}
      <Stack spacing={4}>
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              variant="outlined"
              id={`project-item-${project.id}`}
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: '8px',
                bgcolor: '#ffffff',
                '&:hover': {
                  borderColor: 'primary.light',
                  boxShadow: '0 8px 24px -4px rgba(0,0,0,0.06)',
                },
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                {/* Top Category Badge & Index */}
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={project.category}
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{
                      fontSize: '0.7rem',
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      bgcolor: 'rgba(37, 99, 235, 0.04)',
                    }}
                  />
                  <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary', fontWeight: 600 }}>
                    0{idx + 1}
                  </Typography>
                </Stack>

                {/* Title & Tagline */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {project.tagline}
                  </Typography>
                </Box>

                {/* Verified Impact Highlight */}
                <Card
                  variant="outlined"
                  sx={{
                    bgcolor: 'rgba(244, 244, 245, 0.6)',
                    borderColor: '#e4e4e7',
                    borderRadius: '8px',
                    p: 1.5,
                    mb: 2.5,
                  }}
                >
                  <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <AutoAwesomeIcon sx={{ fontSize: 18, color: 'success.main' }} />
                      <Typography variant="caption" color="text.secondary">
                        {project.metrics[0].description}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', fontWeight: 700, color: 'text.primary', whiteSpace: 'nowrap' }}>
                      {project.metrics[0].highlight}
                    </Typography>
                  </Stack>
                </Card>

                {/* Tech Stack Chips */}
                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1, mb: 2.5 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      size="small"
                      variant="outlined"
                      icon={<TechIcon name={tag} className="w-3 h-3" />}
                      label={tag}
                      sx={{
                        fontSize: '0.7rem',
                        fontFamily: 'monospace',
                        bgcolor: 'rgba(244, 244, 245, 0.5)',
                        borderColor: '#e4e4e7',
                      }}
                    />
                  ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                {/* Card Actions */}
                <CardActions sx={{ p: 0, gap: 1, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => onSelectProject(project)}
                    id={`btn-case-study-${project.id}`}
                    startIcon={<CodeIcon fontSize="small" />}
                    endIcon={<NorthEastIcon sx={{ fontSize: 14 }} />}
                    sx={{ fontSize: '0.75rem', py: 0.8, px: 2 }}
                  >
                    Read Case Study
                  </Button>

                  {project.links.github && (
                    <Button
                      variant="outlined"
                      size="small"
                      component="a"
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      startIcon={<GitHubIcon fontSize="small" />}
                      sx={{ fontSize: '0.75rem', py: 0.8, px: 2, fontFamily: 'monospace' }}
                    >
                      Source Code
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
                      sx={{ fontSize: '0.75rem', py: 0.8, px: 2, fontFamily: 'monospace' }}
                    >
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
};
