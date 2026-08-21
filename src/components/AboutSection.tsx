import { personalInfo } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { motion } from 'motion/react';

export const AboutSection = () => {
  return (
    <Container maxWidth="md" id="about" component="section" sx={{ py: 8 }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box sx={{ mb: 5, pb: 2, borderBottom: '1px solid #e4e4e7' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <PersonOutlineOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Personal Narrative
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
            About Me
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Background, engineering philosophy, and human-centered design approach.
          </Typography>
        </Box>
      </motion.div>

      {/* Content Stack */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Stack spacing={3.5}>
          {/* Main Narrative Card */}
          <Card
            variant="outlined"
            sx={{
              p: { xs: 2.5, sm: 3.5 },
              borderRadius: '8px',
              bgcolor: '#ffffff',
              '&:hover': {
                borderColor: '#d4d4d8',
              },
            }}
          >
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.5 }}>
                Engineering with Human Purpose
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {personalInfo.bio}
              </Typography>
            </CardContent>
          </Card>

          {/* Philosophy Card */}
          <Card
            variant="outlined"
            sx={{
              p: 2.5,
              borderRadius: '8px',
              bgcolor: 'rgba(244, 244, 245, 0.6)',
              borderColor: '#e4e4e7',
            }}
          >
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                <HandshakeOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
                <Typography
                  variant="caption"
                  color="primary"
                  sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
                >
                  Work Ethic & Philosophy
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                I prioritize real operational clarity over unnecessary complexity. Every database schema, API route, and user interface is engineered to eliminate friction and make daily work faster and error-free for end users.
              </Typography>
            </CardContent>
          </Card>

          {/* Spoken Languages */}
          <Box sx={{ pt: 1 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 2 }}>
              <LanguageOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
              <Typography
                variant="caption"
                sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.primary' }}
              >
                Spoken & Written Languages
              </Typography>
            </Stack>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {personalInfo.languages.map((lang) => (
                <Card
                  key={lang.name}
                  variant="outlined"
                  sx={{
                    p: 2,
                    borderRadius: '8px',
                    bgcolor: '#ffffff',
                    '&:hover': { borderColor: '#d4d4d8' },
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          bgcolor: 'rgba(244, 244, 245, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <TechIcon name={lang.name} className="w-4 h-4" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                          {lang.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                          {lang.level}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Stack>
      </motion.div>
    </Container>
  );
};
