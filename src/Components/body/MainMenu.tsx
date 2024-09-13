import { Box, Button } from "@mui/material";

const MainMenu = () => {
  return (
    <Box
      position={"absolute"}
      top={"30vh"}
      display={"flex"}
      flexDirection={"row"}
      gap={2}
      justifyContent={"center"}
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ width: "30vw", height: "50vh" }}
      >
        Go to menu 1
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        style={{
          borderRadius: 2,
        }}
        sx={{ width: "30vw", height: "50vh" }}
      >
        Go to manu 2
      </Button>
      <Button
        variant="contained"
        disabled
        size="large"
        sx={{ pointerEvents: "none", width: "30vw", height: "50vh" }}
      >
        Go to menu 3
      </Button>
    </Box>
  );
};

export default MainMenu;
