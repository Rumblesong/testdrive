import { AppBar, Toolbar } from "@mui/material";
import SwitchTheme from "../SwitchTheme";
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
      <Toolbar>
        {/* {myButton("SD01")}
        {myButton("MAKER")} */}
        <MyButton
          name="Enabled Button"
          backgroundColor="#ff0000"
          textColor="#ffffff"
        />
        <MyButton
          name="Disabled Button"
          backgroundColor="#ff0000"
          textColor="#ffffff"
          isDisabled={true}
          disabledBackgroundColor="#ff9999"
          disabledTextColor="#cccccc"
        />
        {MyTypography("TBL0101", "body1", "100%")}
        {/* // text, variant, width */}
        {MySelect()}
        {/* {myButton("Nema prijavljenog operatera")}
        {myButton("Prijava")} */}
        {/* <MyTypography text="Hello, my size is in em" varijanta="h6" /> */}
        <SwitchTheme theme={theme} setTheme={setTheme} />
      </Toolbar>
    </AppBar>
  );
}
