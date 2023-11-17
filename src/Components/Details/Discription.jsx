import { useState, useEffect } from "react";
import { Typography, Box, CardMedia, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";

const Discription = ({ house }) => {
  const theme = useTheme();
  const themes = theme.palette;
  const formatter = new Intl.NumberFormat("en-US");

  return (
    <Box sx={{ mt: "15px" }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Roboto",
          // fontSize: `${fontSize.medium}`,
          fontWeight: "bold",
        }}
      >
        {house.houseType}
      </Typography>
      <Typography
        variant="h5"
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
      <Box
        sx={{
          fontSize: "16px",
          display: "flex",

          mt: "15px",
        }}
      >
        <LocationOnIcon
          sx={{
            fontSize: "20px",
            mt: {
              xs: "3px",
              sm: "3px",
              md: "-3px",
              lg: "-3px",
            },
            color: themes.mygrey1.main,
          }}
        />{" "}
        <Typography variant="h6" sx={{}}>
          {" "}
          {house.addressName}
        </Typography>
      </Box>
      <Box
        sx={{
          fontSize: "15px",
          display: "flex",
          // alignItem: "center",
          fontWeight: 0,
          mt: "10px",
          gap: "15px",
        }}
      >
        <Box sx={{ fontWeight: 700, display: "flex", alignItem: "center" }}>
          <HotelIcon sx={{ mr: "10px" }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontFamily: "Roboto",
            }}
          >
            {house.bedrooms} beds
          </Typography>
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,

            fontFamily: "Roboto",
            display: "flex",
          }}
        >
          <img
            src="/Images/bathroom.jpg"
            width="23px"
            height="23px"
            alt="Small Image"
            style={{ marginRight: "5px" }}
          />
          {house.bathrooms} bathrooms
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,

            fontFamily: "Roboto",
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            image="/Images/square.jpg"
            alt="alt"
            sx={{
              width: {
                xs: "23px",
                md: "23px",
              },
              height: {
                xs: "23px",
                md: "23px",
              },
              marginRight: "5px",
            }}
          />
          {house.areaSize} sqm
        </Typography>
      </Box>
    </Box>
  );
};

export default Discription;
