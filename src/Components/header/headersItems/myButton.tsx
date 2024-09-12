/* import { Button } from "@mui/material";

export default function myButton(name: string) {
  return (
    <Button variant="contained" sx={{ marginRight: 2 }} disabled>
      {name}
    </Button>
  );
} */
import { Button, ButtonProps } from "@mui/material";

interface MyButtonProps extends ButtonProps {
  name: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number | string;
  isDisabled?: boolean;
  disabledBackgroundColor?: string;
  disabledTextColor?: string;
}

export default function MyButton({
  name,
  backgroundColor = "primary.main",
  textColor = "white",
  borderRadius = 2,
  isDisabled = false,
  disabledBackgroundColor,
  disabledTextColor,
  ...props
}: MyButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        marginRight: 2,
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: borderRadius,
        "&:hover": {
          backgroundColor: backgroundColor,
          opacity: 0.8,
        },
        "&.Mui-disabled": {
          backgroundColor: disabledBackgroundColor || backgroundColor,
          color: disabledTextColor || textColor,
          opacity: 0.5,
        },
      }}
      disabled={isDisabled}
      {...props}
    >
      {name}
    </Button>
  );
}
