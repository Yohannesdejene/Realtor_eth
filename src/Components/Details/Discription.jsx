import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  CardMedia,
  useTheme,
  useMediaQuery,
  IconButton,
  Grid,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";

const Discription = ({ house }) => {
  const theme = useTheme();
  const xs = useMediaQuery("(max-width:600px)");

  const themes = theme.palette;
  const formatter = new Intl.NumberFormat("en-US");

  return (
    <Box sx={{ mt: "15px" }}>
      <Typography
        variant={xs ? "h4" : "h3"}
        sx={{
          fontFamily: "Roboto",
          fontWeight: "bold",
          textTransform: "capitalize", // Add this line
        }}
      >
        {house.houseType}
      </Typography>
      <Typography
        variant={xs ? "h4" : "h3"}
        sx={{
          fontFamily: "Roboto",
          fontWeight: 800,
          color: themes.green.main,
          mt: "10px",
        }}
      >
        {"rent" === "rent" && <>{formatter.format(house.price)} Birr /Month</>}
        {"selll" == "sale" && <>{formatter.format(house.price)} Birr </>}
      </Typography>
      <Box sx={{ display: "flex", fontSize: "15px", mt: "10px" }}>
        <LocationOnIcon size="large" />{" "}
        <Typography
          variant={xs ? "h6" : "h4"}
          sx={{
            fontFamily: "Roboto",
            textTransform: "capitalize", // Add this line
          }}
        >
          {house.addressName}
        </Typography>
      </Box>

      <Grid
        container
        display="flex"
        spacing={xs ? "10px" : 1}
        sx={{ mt: "10px" }}
      >
        <Grid
          item
          xs={6}
          sm={4}
          sx={{
            display: "flex",
            gap: {
              xs: "2px",
              md: "10px",
            },
          }}
        >
          <HotelIcon />
          <Typography
            variant={xs ? "h6" : "h4"}
            sx={{
              fontFamily: "Roboto",
              textTransform: "capitalize", // Add this line
            }}
          >
            {house.bedrooms} beds
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          sx={{
            display: "flex",
            gap: {
              xs: "2px",
              md: "10px",
            },
          }}
        >
          <img
            src="/Images/bathroom.jpg"
            width="30px"
            height="30px"
            alt="Small Image"
          />
          <Typography
            variant={xs ? "h6" : "h4"}
            sx={{
              fontFamily: "Roboto",
              textTransform: "capitalize", // Add this line
            }}
          >
            {house.bathrooms} bathrooms
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            gap: {
              xs: "2px",
              md: "10px",
            },
          }}
        >
          <CardMedia
            component="img"
            image="/Images/square.jpg"
            alt="alt"
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
          <Typography
            variant={xs ? "h6" : "h4"}
            sx={{
              fontFamily: "Roboto",
              textTransform: "capitalize", // Add this line
            }}
          >
            {house.areaSize} sqm
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Discription;
