import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";

const Description = ({ house }) => {
  const xs = useMediaQuery("(max-width:600px)");
  const sm = useMediaQuery("(max-width:900px)");
  const md = useMediaQuery("(max-width:1200px)");
  const lg = useMediaQuery("(min-width:1201px)");
  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Box sx={{ mt: "40px", display: "flex", flexDirection: "column" }}>
      {house && (
        <>
          {" "}
          <Typography
            variant="h4"
            sx={{
              //   fontSize: "21px",
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Descirption
          </Typography>
          <Typography
            variant="h6"
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
