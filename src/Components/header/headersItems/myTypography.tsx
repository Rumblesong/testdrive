import { Typography } from "@mui/material";

const MyTypography = (
  text: string,
  varijanta:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit",
  fontsize: string
) => {
  return (
    <Typography
      variant={varijanta}
      fontSize={fontsize}
      mr="15%"
      textAlign={"center"}
      width={"100%"}
    >
      {text}
    </Typography>
  );
};

export default MyTypography;
