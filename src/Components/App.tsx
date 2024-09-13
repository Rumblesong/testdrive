import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Theme } from "@mui/material";
import { getTheme } from "../theme";
import Header from "./header/Header";
import MainMenu from "./body/MainMenu";
//import { useNavigate } from "react-router-dom";
//import DataGridDemo from "./body/table";
//import DataGridDemo from "./body/table";

const App = () => {
  const [theme, setTheme] = useState<Theme>(getTheme(false)); // Start with light theme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          [theme.breakpoints.up("600")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("720")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("768")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("800")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("900")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("960")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1024")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1050")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1080")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1152")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1200")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1280")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1360")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1366")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1400")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1440")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1600")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1680")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1792")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1856")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("1920")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("2048")]: {
            maxWidth: "100%",
          },
          [theme.breakpoints.up("2560")]: {
            maxWidth: "100%",
          },
        }}
      >
        <Header theme={theme} setTheme={setTheme} />
        {/*  {DataGridDemo()}; */}
        <MainMenu />
      </Container>
    </ThemeProvider>
  );
};

export default App;

{
  /* <Box>
          <Typography fontSize="1.5em">Hello, my size is in em</Typography>
          <Typography fontSize="150%">Hello, my size is in %</Typography>
        </Box> */
}
