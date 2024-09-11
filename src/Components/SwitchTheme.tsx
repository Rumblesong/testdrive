import React from "react";
import { Switch } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { getTheme } from "../theme";

interface SwitchThemeProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({ theme, setTheme }) => {
  const handleThemeChange = () => {
    const isDarkMode = theme.palette.mode === "dark";
    setTheme(getTheme(!isDarkMode));
  };

  return (
    <Switch
      checked={theme.palette.mode === "dark"}
      onChange={handleThemeChange}
      color="default"
    />
  );
};

export default SwitchTheme;
