import { useState, useEffect, useRef } from "react";
import {
  Button,
  Typography,
  IconButton,
  Link,
  Box,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import VideoPlayer from "../VideoPlayer";

const AdvertCard = () => {
  const sm = useMediaQuery("(max-width:600px)");
  const md = useMediaQuery("(max-width:960px)");
  const lg = useMediaQuery("(max-width:1280px)");

  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Box
      sx={{
        ml: "5%",
        mr: "5%",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "5px",

          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <VideoPlayer videoId="gxNl9TQ3fqc" />
        </Box>

        <Box
          sx={{
            // backgroundColor: "red",
            width: {
              lg: "100%",
              md: "50%",
              ms: "100%",
              xs: "100%",
            },
            height: {
              lg: "400px",
              md: "400px",
              sm: "300px",
              xs: "300px",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{ paddingTop: "10%", fontWeight: "bold", paddingLeft: "10%" }}
          >
            Get Your Dream Home{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{ marginTop: "20px", paddingLeft: "10%" }}
          >
            Finding your perfect home has never been easier. Our user-friendly
            website offers a streamlined search experience, allowing you to
            effortlessly navigate through a vast database of available
            properties.
          </Typography>
          <Button
            component={Link}
            href="/homes"
            style={{
              backgroundColor: themes.green.main,
              color: themes.white.main,
              textTransform: "none",
              fontFamily: "Roboto",
              fontWeight: "bold",
              width: "50%",
              marginLeft: "10%",
              marginTop: "15px",
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default AdvertCard;
