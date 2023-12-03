import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";

const Description = ({ house }) => {
  const xs = useMediaQuery("max-width:600px");

  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Box sx={{ mt: "40px", display: "flex", flexDirection: "column" }}>
      {house && (
        <>
          {" "}
          <Typography
            variant={xs ? "h4" : "h3"}
            sx={{
              //   fontSize: "21px",
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Descirption
          </Typography>
          <Typography
            variant={xs ? "h6" : "h4"}
            sx={{
              fontFamily: "Roboto",

              mt: "10px",
            }}
          >
            {house.description}
          </Typography>
        </>
      )}
    </Box>
  );
};
export default Description;
