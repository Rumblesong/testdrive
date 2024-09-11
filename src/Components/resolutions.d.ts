import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    '600': true;
    '720': true;
    '768': true;
    '800': true;
    '900': true;
    '960': true;
    '1024': true;
    '1050': true;
    '1080': true;
    '1152': true;
    '1200': true;
    '1280': true;
    '1360': true;
    '1366': true;
    '1400': true;
    '1440': true;
    '1600': true;
    '1680': true;
    '1792': true;
    '1856': true;
    '1920': true;
    '2048': true;
    '2560': true;
  }
}