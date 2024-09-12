import { createTheme, ThemeOptions } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
          background: {
            default: '#f2f2f2',
            /* paper: '#f2f2f2', */
          },
        }
      : {
          // Dark mode
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#f48fb1',
          },
          background: {
            default: '#4d4d4d',
            paper: '#303030',
          },
        }),
  },
  breakpoints: {
    values: {
    '600': 600,
    '720': 720,
    '768': 768,
    '800': 800,
    '900': 900,
    '960': 960,
    '1024': 1024,
    '1050': 1050,
    '1080': 1080,
    '1152': 1152,
    '1200': 1200,
    '1280': 1280,
    '1360': 1360,
    '1366': 1366,
    '1400': 1400,
    '1440': 1440,
    '1600': 1600,
    '1680': 1680,
    '1792': 1792,
    '1856': 1856,
    '1920': 1920,
    '2048': 2048,
    '2560': 2560,
  }},
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: '100%',
          maxWidth: '100%',
          [theme.breakpoints.up('600')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('720')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('768')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('800')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('900')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('960')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1024')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1050')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1080')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1152')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1200')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1280')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1360')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1366')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1400')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1440')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1600')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1680')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1792')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1856')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('1920')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('2048')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('2560')]: {
            maxWidth: '100%',
          },
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? '#1976d2' : '#333333',//boja appbar-a
          color: mode === 'light' ? '#ffffff' : '#000000',//boja teksta u appbar-a
          display: 'flex',
          justifyContent: 'space-between',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: mode === 'light' ? '#ffffff' : '#ffffff',
        },
      },
    },

      MuiSelect: {
        styleOverrides: {
          select: {
            backgroundColor: 'inherit', // Custom background color for the select
            color: 'inherit', // This will inherit the text color from the parent theme (light/dark)
            '&:focus': {
              backgroundColor: 'inherit', // Keep the same background when focused
            },
          },
          icon: {
            color: 'whitesmoke', // This will inherit the color from the parent theme (light/dark)
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: 'inherit', // This will inherit the text color from the parent theme (light/dark)
          },
        },
      },
    
         
    /* MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          backgroundColor: mode === 'light' ? '#1976d2' : '#90caf9',
          color: mode === 'light' ? '#ffffff' : '#000000',
          '&:hover': {
            backgroundColor: mode === 'light' ? '#1565c0' : '#64b5f6',
          },
        },
        outlined: {
          borderColor: mode === 'light' ? '#1976d2' : '#90caf9',
          color: mode === 'light' ? '#1976d2' : '#90caf9',
          '&:hover': {
            backgroundColor: mode === 'light' ? 'rgba(25, 118, 210, 0.04)' : 'rgba(144, 202, 249, 0.04)',
          },
        },
        text: {
          color: mode === 'light' ? '#1976d2' : '#90caf9',
          '&:hover': {
            backgroundColor: mode === 'light' ? 'rgba(25, 118, 210, 0.04)' : 'rgba(144, 202, 249, 0.04)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            backgroundColor: mode === 'light' ? '#4caf50' : '#81c784',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: mode === 'light' ? '#45a049' : '#66bb6a',
            },
          },
        },
      ],
    }, */
  },
});

export const getTheme = (isDarkMode: boolean) => {
  return createTheme(getDesignTokens(isDarkMode ? 'dark' : 'light'));
};

    

/* export const lightTheme = createTheme({
  palette: {
    mode: 'light',  Set the theme mode to light
    primary: {
      main: '#1976d2',  Customize the primary color
    },
    secondary: {
      main: '#dc004e',  Customize the secondary color
    },
    background: {
      default: '#f5f5f5',  Customize the background color
      paper: '#ffffff',  Customize the paper color
    }

  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',  Set the theme mode to dark
    primary: {
      main: '#90caf9',  Customize the primary color
    },
    secondary: {
      main: '#f48fb1',  Customize the secondary color
    },
    background: {
      default: '#424242',  Customize the background color
      paper: '#303030',  Customize the paper color
    }
  },
}); */

/* rezolucije
2560x1440
2048x1152
1920x1200
1920x1080
1856x1392
1792x1344
1680x1050
1600x1200
1600x900
1440x900
1400x1050
1366x768
1360x768
1280x1024
1280x960
1280x800
1200x768
1280x720
1280x600
1152x864
1024x768
800x600
*/





