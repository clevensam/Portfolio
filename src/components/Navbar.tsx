import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  IconButton,
  Box,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar = ({ onOpenResume, activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 1 : 0}
      sx={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid #e4e4e7' : 'none',
        color: 'text.primary',
        transition: 'all 0.3s ease',
        py: isScrolled ? 0.5 : 1.5,
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0.5,
              bgcolor: 'rgba(244, 244, 245, 0.9)',
              border: '1px solid #e4e4e7',
              borderRadius: 9999,
              px: 1,
              py: 0.5,
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Button
                  key={link.name}
                  href={link.href}
                  size="small"
                  sx={{
                    color: isActive ? 'primary.main' : 'text.secondary',
                    bgcolor: isActive ? '#ffffff' : 'transparent',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.75rem',
                    px: 1.5,
                    py: 0.5,
                    minWidth: 'auto',
                    boxShadow: isActive ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                    '&:hover': {
                      color: 'text.primary',
                      bgcolor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                    },
                  }}
                >
                  {link.name}
                </Button>
              );
            })}
          </Box>

          {/* Desktop Right CTAs */}
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <IconButton
              component="a"
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
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
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>

            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={onOpenResume}
              id="nav-resume-btn"
              startIcon={<DescriptionIcon sx={{ fontSize: 16 }} />}
              sx={{ fontSize: '0.75rem', py: 0.8, px: 2 }}
            >
              Resume
            </Button>
          </Stack>

          {/* Mobile Actions */}
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={onOpenResume}
              sx={{ fontSize: '0.75rem', px: 1.5 }}
            >
              Resume
            </Button>
            <IconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              color="inherit"
              size="small"
              sx={{ border: '1px solid #e4e4e7', borderRadius: 2 }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              top: 56,
              backgroundColor: '#ffffff',
              borderBottom: '1px solid #e4e4e7',
              px: 2,
              py: 2,
            },
          },
        }}
      >
        <List sx={{ width: '100%' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <ListItem key={link.name} disablePadding>
                <ListItemButton
                  component="a"
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    borderRadius: 2,
                    py: 1,
                    '&:hover': { bgcolor: 'rgba(37, 99, 235, 0.08)' },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'primary.main' : 'text.primary',
                    }}
                  >
                    {link.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ my: 1.5 }} />

        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', px: 1 }}>
          <Stack direction="row" spacing={1.5}>
            <Button
              component="a"
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              size="small"
              startIcon={<GitHubIcon />}
              endIcon={<OpenInNewIcon sx={{ fontSize: 12 }} />}
              sx={{ fontSize: '0.75rem', color: 'text.secondary' }}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              size="small"
              startIcon={<LinkedInIcon />}
              endIcon={<OpenInNewIcon sx={{ fontSize: 12 }} />}
              sx={{ fontSize: '0.75rem', color: 'text.secondary' }}
            >
              LinkedIn
            </Button>
          </Stack>
          <Typography variant="caption" color="text.secondary">
            {personalInfo.location}
          </Typography>
        </Stack>
      </Drawer>
    </AppBar>
  );
};
