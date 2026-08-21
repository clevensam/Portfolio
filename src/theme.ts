import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Blue 600
      light: '#60a5fa',
      dark: '#1d4ed8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#18181b', // Zinc 900
      light: '#27272a',
      dark: '#09090b',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#18181b',
      secondary: '#52525b',
    },
    divider: '#e4e4e7',
    success: {
      main: '#16a34a',
    },
    info: {
      main: '#0284c7',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          border: '1px solid #e4e4e7',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            borderColor: '#d4d4d8',
            boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.06)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: '8px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.08)',
          },
        },
        outlined: {
          borderColor: '#e4e4e7',
          color: '#27272a',
          '&:hover': {
            borderColor: '#a1a1aa',
            backgroundColor: '#f4f4f5',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          fontWeight: 500,
        },
        outlined: {
          borderColor: '#e4e4e7',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 24,
          border: '1px solid #e4e4e7',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
});
