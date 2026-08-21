import { SkillCategory } from '../types';
import { TechIcon } from './TechIcon';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from 'motion/react';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection = ({ categories }: SkillsSectionProps) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <CodeIcon color="primary" sx={{ fontSize: 18 }} />;
      case 'Database':
        return <StorageIcon color="primary" sx={{ fontSize: 18 }} />;
      case 'Terminal':
        return <TerminalIcon sx={{ fontSize: 18, color: '#d97706' }} />;
      case 'Palette':
        return <PaletteOutlinedIcon sx={{ fontSize: 18, color: '#9333ea' }} />;
      case 'Sparkles':
      default:
        return <AutoAwesomeIcon sx={{ fontSize: 18, color: 'success.main' }} />;
    }
  };

  return (
    <Container maxWidth="md" id="skills" component="section" sx={{ py: 8 }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box sx={{ mb: 5, pb: 2, borderBottom: '1px solid #e4e4e7' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <MemoryIcon color="primary" sx={{ fontSize: 18 }} />
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Technical Stack
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
            Skills & Technologies
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Organized by domain for clean readability and practical application across full-stack systems.
          </Typography>
        </Box>
      </motion.div>

      {/* Grouped Domain Cards */}
      <Stack spacing={3}>
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              variant="outlined"
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
                {/* Category Header */}
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 2,
                      bgcolor: 'rgba(244, 244, 245, 1)',
                      border: '1px solid #e4e4e7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getCategoryIcon(category.icon)}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                      {category.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {category.description}
                    </Typography>
                  </Box>
                </Stack>

                {/* Skill Chips with Dedicated Icons */}
                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      size="small"
                      variant="outlined"
                      icon={<TechIcon name={skill} className="w-3.5 h-3.5" />}
                      label={skill}
                      sx={{
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                        bgcolor: 'rgba(250, 250, 250, 0.8)',
                        borderColor: '#e4e4e7',
                        py: 0.5,
                        '&:hover': {
                          bgcolor: 'rgba(244, 244, 245, 1)',
                          borderColor: '#d4d4d8',
                        },
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
