import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  IconButton,
  Stack,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_PDF_URL = `${import.meta.env.BASE_URL}Cleven-Samwel-Resume.pdf`;
const RESUME_PDF_FILENAME = 'Cleven-Samwel-Resume.pdf';

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: '8px',
            border: '1px solid #e4e4e7',
            height: { xs: '95vh', sm: '90vh' },
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          p: 2.5,
          borderBottom: '1px solid #e4e4e7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#ffffff',
        }}
      >
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
          <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Resume — Cleven Samwel Swai (PDF)
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Button
            variant="outlined"
            size="small"
            id="resume-modal-open-btn"
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noreferrer"
            startIcon={<OpenInNewIcon />}
            sx={{ fontSize: '0.75rem', py: 0.5 }}
          >
            Open in New Tab
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="small"
            id="resume-modal-download-btn"
            href={RESUME_PDF_URL}
            download={RESUME_PDF_FILENAME}
            startIcon={<DownloadIcon />}
            sx={{ fontSize: '0.75rem', py: 0.5 }}
          >
            Download PDF
          </Button>

          <IconButton size="small" onClick={onClose} id="resume-modal-close-btn" aria-label="Close Resume">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent
        sx={{
          p: 0,
          bgcolor: '#525659',
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <object
          data={RESUME_PDF_URL}
          type="application/pdf"
          aria-label="Resume PDF"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <Stack
            spacing={2}
            sx={{
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#ffffff',
              px: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="body1" color="text.primary">
              Your browser can&apos;t display PDFs inline.
            </Typography>
            <Button variant="contained" href={RESUME_PDF_URL} target="_blank" rel="noreferrer">
              View Resume PDF
            </Button>
          </Stack>
        </object>
      </DialogContent>
    </Dialog>
  );
};
