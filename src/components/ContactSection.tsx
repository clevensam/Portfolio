import { useState, FormEvent } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Alert,
} from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { motion } from 'motion/react';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || 'Software Engineering Inquiry'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setStatusMessage('Draft prepared. Opening your default email client...');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <Container maxWidth="md" id="contact" component="section" sx={{ py: 8 }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box sx={{ mb: 5, pb: 2, borderBottom: '1px solid #e4e4e7' }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <ChatBubbleOutlineOutlinedIcon color="primary" sx={{ fontSize: 18 }} />
            <Typography
              variant="caption"
              color="primary"
              sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Get In Touch
            </Typography>
          </Stack>
          <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
            Contact & Collaboration
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Open for full-stack, frontend, and UI/UX developer roles, consulting on internal operations, or contract engineering projects.
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
        <Stack spacing={3}>
          {/* Direct Info Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            {/* Email Card */}
            <Card
              variant="outlined"
              sx={{
                p: 2,
                borderRadius: '8px',
                bgcolor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', overflow: 'hidden' }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    bgcolor: 'rgba(37, 99, 235, 0.08)',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <EmailOutlinedIcon fontSize="small" />
                </Box>
                <Box sx={{ overflow: 'hidden' }}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontSize: '0.7rem' }}>
                    Direct Email
                  </Typography>
                  <Typography
                    component="a"
                    href={`mailto:${personalInfo.email}`}
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      color: 'text.primary',
                      textDecoration: 'none',
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {personalInfo.email}
                  </Typography>
                </Box>
              </Stack>

              <Tooltip title={copied ? 'Copied!' : 'Copy Email'}>
                <IconButton size="small" onClick={copyEmail} id="contact-copy-email-btn" sx={{ ml: 1 }}>
                  {copied ? (
                    <CheckIcon sx={{ fontSize: 18, color: 'success.main' }} />
                  ) : (
                    <ContentCopyIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                  )}
                </IconButton>
              </Tooltip>
            </Card>

            {/* Location Card */}
            <Card
              variant="outlined"
              sx={{
                p: 2,
                borderRadius: '8px',
                bgcolor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    bgcolor: 'rgba(244, 244, 245, 1)',
                    color: 'text.primary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LocationOnOutlinedIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontSize: '0.7rem' }}>
                    Location
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {personalInfo.location}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Box>

          {/* Social Profiles Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
            <Card
              variant="outlined"
              component="a"
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              sx={{
                p: 2,
                borderRadius: '8px',
                bgcolor: '#ffffff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:hover': {
                  borderColor: '#a1a1aa',
                },
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    bgcolor: 'rgba(244, 244, 245, 1)',
                    color: 'text.primary',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontSize: '0.7rem' }}>
                    GitHub Profile
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', fontWeight: 600, color: 'text.primary' }}>
                    {personalInfo.githubHandle}
                  </Typography>
                </Box>
              </Stack>
              <NorthEastIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            </Card>

            <Card
              variant="outlined"
              component="a"
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              sx={{
                p: 2,
                borderRadius: '8px',
                bgcolor: '#ffffff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:hover': {
                  borderColor: '#a1a1aa',
                },
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    bgcolor: 'rgba(37, 99, 235, 0.08)',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontSize: '0.7rem' }}>
                    LinkedIn Network
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', fontWeight: 600, color: 'text.primary' }}>
                    {personalInfo.linkedinHandle}
                  </Typography>
                </Box>
              </Stack>
              <NorthEastIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            </Card>
          </Box>

          {/* Quick Email Composer Card */}
          <Card
            variant="outlined"
            sx={{
              p: { xs: 2.5, sm: 3.5 },
              borderRadius: '8px',
              bgcolor: '#ffffff',
            }}
          >
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'text.primary',
                  display: 'block',
                  mb: 2,
                  pb: 1,
                  borderBottom: '1px solid #e4e4e7',
                }}
              >
                Quick Email Composer
              </Typography>

              <Box component="form" onSubmit={handleSendEmail}>
                <Stack spacing={2.5}>
                  <TextField
                    label="Subject"
                    fullWidth
                    size="small"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Full Stack Developer Role / Project Inquiry"
                    slotProps={{ inputLabel: { shrink: true } }}
                  />

                  <TextField
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    size="small"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Cleven, I saw your work on EnvX and Mangi Store and would love to connect..."
                    slotProps={{ inputLabel: { shrink: true } }}
                  />

                  {statusMessage && (
                    <Alert severity="success" sx={{ py: 0.5, fontSize: '0.8rem' }}>
                      {statusMessage}
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    id="contact-send-email-submit"
                    startIcon={<SendIcon sx={{ fontSize: 16 }} />}
                    sx={{ py: 1.2 }}
                  >
                    Compose Email in Client
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </motion.div>
    </Container>
  );
};
