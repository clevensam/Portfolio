import { Testimonial } from '../types';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BusinessIcon from '@mui/icons-material/Business';
import { motion } from 'motion/react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <Container maxWidth="md" id="testimonials" component="section" sx={{ py: 8 }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box sx={{ mb: 5, pb: 2, borderBottom: '1px solid #e4e4e7' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <RateReviewOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Project Feedback & Endorsements
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
            Collaborator & Stakeholder Testimonials
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Feedback from project owners, team leads, and administrators on deployed systems.
          </Typography>
        </Box>
      </motion.div>

      {/* Testimonials List */}
      <Stack spacing={3.5}>
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              variant="outlined"
              id={`testimonial-card-${item.id}`}
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: '8px',
                bgcolor: '#ffffff',
                '&:hover': {
                  borderColor: 'primary.light',
                  boxShadow: '0 6px 20px -4px rgba(0,0,0,0.05)',
                },
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                {/* Project Header Tag */}
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    icon={<AutoAwesomeIcon sx={{ fontSize: '14px !important', color: 'primary.main' }} />}
                    label={item.project}
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      bgcolor: 'rgba(37, 99, 235, 0.04)',
                    }}
                  />
                  <Chip
                    label={item.highlightTag}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.7rem',
                      fontFamily: 'monospace',
                      color: 'text.secondary',
                      borderColor: '#e4e4e7',
                    }}
                  />
                </Stack>

                {/* Testimonial Quote */}
                <Box sx={{ position: 'relative', pl: 0.5, mb: 2.5 }}>
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 32,
                      color: 'primary.light',
                      opacity: 0.3,
                      position: 'absolute',
                      top: -12,
                      left: -8,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: 'italic',
                      color: 'text.primary',
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Author Info */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1.5}
                  sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}
                >
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        bgcolor: 'rgba(244, 244, 245, 1)',
                        color: 'text.primary',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        border: '1px solid #e4e4e7',
                      }}
                    >
                      {item.author
                        .split(' ')
                        .filter((part) => !part.startsWith('Dr.') && !part.startsWith('Sister'))
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                        {item.author}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.role}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center', color: 'text.secondary', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                    <BusinessIcon sx={{ fontSize: 14 }} />
                    <Typography variant="caption">{item.organization}</Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
};
