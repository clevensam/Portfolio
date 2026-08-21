import { ExperienceItem } from '../types';
import { TechIcon } from './TechIcon';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from 'motion/react';

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
  return (
    <Container maxWidth="md" id="experience" component="section" sx={{ py: 8 }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box sx={{ mb: 5, pb: 2, borderBottom: '1px solid #e4e4e7' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <WorkHistoryOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Track Record
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
            Work Experience
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hands-on software development internships and enterprise industrial training.
          </Typography>
        </Box>
      </motion.div>

      {/* Sequential Card Stack for Experience */}
      <Stack spacing={4}>
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              variant="outlined"
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
                {/* Header Information */}
                <Box sx={{ mb: 2 }}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, mb: 0.5 }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {item.title}
                    </Typography>
                    <Chip
                      label={item.roleType}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{
                        fontSize: '0.7rem',
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        bgcolor: 'rgba(37, 99, 235, 0.04)',
                        alignSelf: { xs: 'flex-start', sm: 'center' },
                      }}
                    />
                  </Stack>

                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                    <BusinessIcon color="primary" sx={{ fontSize: 16 }} />
                    <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 600 }}>
                      {item.organization}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    sx={{ flexWrap: 'wrap', alignItems: 'center', gap: 2, color: 'text.secondary', fontSize: '0.75rem', fontFamily: 'monospace' }}
                  >
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                      <CalendarMonthIcon sx={{ fontSize: 14 }} />
                      <Typography variant="caption">{item.period}</Typography>
                    </Stack>
                    <Typography variant="caption">•</Typography>
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                      <LocationOnOutlinedIcon sx={{ fontSize: 14 }} />
                      <Typography variant="caption">{item.location}</Typography>
                    </Stack>
                  </Stack>
                </Box>

                {/* Key Focus Highlight Box */}
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
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <AutoAwesomeIcon sx={{ fontSize: 16, color: 'success.main' }} />
                    <Typography variant="caption" color="text.secondary">
                      Key Focus:
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {item.metrics}
                    </Typography>
                  </Stack>
                </Card>

                {/* Bullet Points */}
                <Stack spacing={1.5} sx={{ mb: 2.5 }}>
                  {item.bullets.map((bullet, i) => (
                    <Stack key={i} direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                      <CheckCircleOutlinedIcon color="primary" sx={{ fontSize: 18, mt: 0.2, shrink: 0 }} />
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {bullet}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Divider sx={{ my: 2 }} />

                {/* Applied Technologies */}
                <Stack direction="row" sx={{ flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                  <Typography variant="caption" sx={{ fontFamily: 'monospace', textTransform: 'uppercase', color: 'text.secondary', fontWeight: 600, mr: 0.5 }}>
                    Applied Tech:
                  </Typography>
                  {item.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      size="small"
                      variant="outlined"
                      icon={<TechIcon name={tech} className="w-3 h-3" />}
                      label={tech}
                      sx={{
                        fontSize: '0.7rem',
                        fontFamily: 'monospace',
                        bgcolor: 'rgba(244, 244, 245, 0.5)',
                        borderColor: '#e4e4e7',
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
};
