import { AppBar, Box, Toolbar } from "@mui/material";
//import SwitchTheme from "../SwitchTheme";
import { Theme } from "@mui/material";
//import myButton from "./headersItems/myButton";
import MyTypography from "./headersItems/myTypography";
import MySelect from "./headersItems/mySelect";
import MyButton from "./headersItems/myButton";

interface HeaderProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box>
          <MyButton name="Nazad" isDisabled={true} />
          <MyButton
            name="SD01"
            //backgroundColor="#1873cd"
            textColor="#ffffff"
            disableElevation
            isDisabled={true}
          />
          <MyButton
            name="MAKER"
            //backgroundColor="#1873cd"
            textColor="#ffffff"
            disableElevation
            isDisabled={true}
          />
        </Box>
        <Box>{MyTypography("TBL0101", "body1", "100%")}</Box>
        <Box>{MySelect()}</Box>
        <Box>{MyTypography("Barcode test", "subtitle2", "100%")}</Box>
        <Box>
          <MyButton
            name="Nema prijavljenog operatera"
            //backgroundColor="#1873cd"
            textColor="#ffffff"
            disableElevation
            isDisabled={true}
          />
          <MyButton
            name="Prijava"
            //backgroundColor="#5fa6ec"
            textColor="#ffffff"
            disableElevation
          />
          {/*  <SwitchTheme theme={theme} setTheme={setTheme} /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
