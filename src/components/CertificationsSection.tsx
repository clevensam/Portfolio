import { CourseCertification } from '../types';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { motion } from 'motion/react';

interface CertificationsSectionProps {
  certifications: CourseCertification[];
}

export const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <Container maxWidth="md" id="certifications" component="section" sx={{ py: 8 }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box sx={{ mb: 5, pb: 2, borderBottom: '1px solid #e4e4e7' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <WorkspacePremiumOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Continuous Learning
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
            Certifications & Specializations
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Industry courses in full-stack engineering, human-centered UI/UX design, and AI model workflows.
          </Typography>
        </Box>
      </motion.div>

      {/* Certifications List */}
      <Stack spacing={2.5}>
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              variant="outlined"
              id={`cert-item-${idx}`}
              sx={{
                p: { xs: 2, sm: 2.5 },
                borderRadius: '8px',
                bgcolor: '#ffffff',
                '&:hover': {
                  borderColor: '#d4d4d8',
                },
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}
                >
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        bgcolor: 'rgba(37, 99, 235, 0.08)',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 0.25,
                      }}
                    >
                      <VerifiedOutlinedIcon fontSize="small" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.3, color: 'text.primary' }}>
                        {cert.title}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mt: 0.5 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          {cert.issuer}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">•</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                          {cert.year}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>

                  <Chip
                    label={cert.category}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.7rem',
                      fontFamily: 'monospace',
                      color: 'text.secondary',
                      borderColor: '#e4e4e7',
                      alignSelf: { xs: 'flex-start', sm: 'center' },
                    }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
};
