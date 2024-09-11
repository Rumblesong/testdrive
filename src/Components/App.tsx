import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Typography, Box, Theme } from "@mui/material";
import SwitchTheme from "./SwitchTheme";
import { getTheme } from "../theme";

const App = () => {
  const [theme, setTheme] = useState<Theme>(getTheme(false)); // Start with light theme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          "600": 600,
          "720": "100%",
        }}
      >
        <SwitchTheme theme={theme} setTheme={setTheme} />
        <Box>
          <Typography fontSize="1.5em">Hello, my size is in em</Typography>
          <Typography fontSize="150%">Hello, my size is in %</Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
