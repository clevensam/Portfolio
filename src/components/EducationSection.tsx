import { EducationItem } from '../types';
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
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { motion } from 'motion/react';

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <Container maxWidth="md" id="education" component="section" sx={{ py: 8 }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box sx={{ mb: 5, pb: 2, borderBottom: '1px solid #e4e4e7' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <SchoolOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Academic Foundation
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
            Education
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Formal training in computer science, system architectures, and software engineering.
          </Typography>
        </Box>
      </motion.div>

      {/* Education Cards */}
      <Stack spacing={3}>
        {education.map((item, idx) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              variant="outlined"
              id={`edu-item-${idx}`}
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
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1.5}
                  sx={{ justifyContent: 'space-between', alignItems: { sm: 'flex-start' }, mb: 2 }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                      {item.degree}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <AccountBalanceOutlinedIcon color="primary" sx={{ fontSize: 16 }} />
                      <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 600 }}>
                        {item.institution}
                      </Typography>
                    </Stack>
                  </Box>

                  <Chip
                    icon={<CalendarMonthIcon sx={{ fontSize: '14px !important' }} />}
                    label={item.period}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      color: 'text.secondary',
                      borderColor: '#e4e4e7',
                      alignSelf: { xs: 'flex-start', sm: 'auto' },
                    }}
                  />
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                  <MenuBookOutlinedIcon color="primary" sx={{ fontSize: 18, mt: 0.25, shrink: 0 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {item.details}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
};
