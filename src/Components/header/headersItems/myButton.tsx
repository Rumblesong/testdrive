import { Button, ButtonProps, useTheme } from "@mui/material";

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
  backgroundColor,
  textColor,
  borderRadius = 2,
  isDisabled = false,
  ...props
}: MyButtonProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Button
      variant="contained"
      sx={{
        marginRight: 2,
        backgroundColor:
          backgroundColor ||
          (isDarkMode
            ? theme.palette.primary.dark
            : theme.palette.primary.main),
        color:
          textColor ||
          (isDarkMode
            ? theme.palette.text.primary
            : theme.palette.text.secondary),
        borderRadius: borderRadius,
        "&.Mui-disabled": {
          backgroundColor:
            backgroundColor ||
            (isDarkMode
              ? theme.palette.primary.dark
              : theme.palette.primary.main),
          color:
            textColor ||
            (isDarkMode
              ? theme.palette.text.primary
              : theme.palette.text.secondary),
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
