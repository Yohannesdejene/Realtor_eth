import { useState, useEffect, useRef } from "react";
import {
  Button,
  Typography,
  Box,
  CardMedia,
  Grid,
  Tooltip,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import {
  CommonTypography,
  DescWritter,
  CommonButtonLink,
} from "../CommonComponent/index";

const AdvertCard = () => {
  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Grid
      container
      justifyContent="center"
      spacing={5}
      sx={{ alignItems: "center" }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        justifyContent="center"
        // sx={{ backgroundColor: "red" }}
      >
        <CardMedia
          component="img"
          src="/Images/business.png"
          alt="Business"
          sx={{
            maxWidth: "100%",
          }}
        />

        {/* <Box
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <CommonTypography label=" Become Realtor agent" />

          <CommonButtonLink label="Register here" route="/becomeagent" />
        </Box> */}
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <CommonTypography label="Get Your Dream Home" />
          <DescWritter
            label=" Finding your perfect home has never been easier. Our user-friendly
            website offers a streamlined search experience, allowing you to
            effortlessly navigate through a vast database of available
            properties."
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CommonButtonLink label="Buy Now" route="/homes" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AdvertCard;
