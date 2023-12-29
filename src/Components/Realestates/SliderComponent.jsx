import React, { useState } from "react";
import { Button, Typography, useTheme, Box, CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ImageSlider = ({ images }) => {
  const theme = useTheme();
  const themes = theme.palette;
  const [index, setIndex] = React.useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Carousel
        index={index}
        onChangeIndex={(i) => setIndex(i)}
        autoPlay={true}
        stopAutoPlayOnHover={true}
        interval={5000}
        animation={"slide"}
        swipe={true}
        navButtonsAlwaysVisible={true}
      >
        {images &&
          images.map((image, idx) => (
            <Box
              key={idx}
              sx={{
                position: "relative",
                width: "100%",
                height: {
                  md: "500px",
                  xs: "300px",
                  sm: "350px",
                },
                // maxHeight: "100%",
              }}
            >
              <CardMedia
                image={image.url}
                alt={`Image ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  //padding: "15px",
                  borderRadius: "0.9rem",
                  [theme.breakpoints.down("sm")]: {
                    padding: "0.5rem",
                  },
                  position: "absolute",
                  top: "50%",
                  left: "50%",

                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  backgroundColor:
                    image?.description !== "" ? "#ffffff33" : "transparent",

                  borderRadius: "30px",
                  padding: {
                    sm: "5%",
                    xs: "2%",
                  },
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: themes.common.white,
                    fontFamily: "Roboto",
                    fontWeight: 900,

                    width: "100%",

                    [theme.breakpoints.down("sm")]: {
                      fontSize: "1.5rem",
                    },
                  }}
                >
                  {image.description}
                </Typography>
              </Box>
            </Box>
          ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
