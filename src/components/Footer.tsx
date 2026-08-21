import { personalInfo } from '../data/portfolioData';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DescriptionIcon from '@mui/icons-material/Description';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer = ({ onOpenResume }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #e4e4e7',
        bgcolor: '#ffffff',
        py: 6,
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
              {personalInfo.name} — {personalInfo.roleTitle}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Based in {personalInfo.location} · Available worldwide for remote engineering roles
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <IconButton
              component="a"
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              size="small"
              sx={{ border: '1px solid #e4e4e7' }}
              aria-label="GitHub Profile"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              size="small"
              sx={{ border: '1px solid #e4e4e7' }}
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
              component="a"
              href={`mailto:${personalInfo.email}`}
              size="small"
              sx={{ border: '1px solid #e4e4e7' }}
              aria-label="Email Cleven"
            >
              <EmailOutlinedIcon fontSize="small" />
            </IconButton>

            <Button
              variant="outlined"
              size="small"
              onClick={onOpenResume}
              startIcon={<DescriptionIcon sx={{ fontSize: 14 }} />}
              sx={{ fontSize: '0.75rem', py: 0.5, px: 1.5 }}
            >
              Resume
            </Button>

            <Tooltip title="Back to top">
              <IconButton
                onClick={scrollToTop}
                id="footer-back-to-top-btn"
                size="small"
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'secondary.contrastText',
                  '&:hover': { bgcolor: 'secondary.light' },
                }}
                aria-label="Back to top"
              >
                <KeyboardArrowUpIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
