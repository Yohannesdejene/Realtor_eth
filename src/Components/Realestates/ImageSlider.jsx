import React, { useState } from "react";
import { Button, Typography, useTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const images = [
  "/Realestates/ayat/1.jpg",
  "/Realestates/ayat/3.jpg",
  "/Realestates/ayat/4.jpg",
];

const ImageSlider = () => {
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
      <Carousel index={index} onChangeIndex={(i) => setIndex(i)}>
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Image ${idx + 1}`}
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        ))}
      </Carousel>
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <Button
          onClick={handlePrev}
          variant="contained"
          color="primary"
          style={{ opacity: 0, transition: "opacity 0.3s" }}
          sx={{ "&:hover": { opacity: 1 } }}
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          variant="contained"
          color="primary"
          style={{ transition: "opacity 0.3s" }}
          sx={{ "&:hover": { opacity: 1 } }}
        >
          Next
        </Button>
        <Typography
          variant="h1"
          sx={{
            color: themes.white.main,

            // fontSize: "3rem",
            textAlign: "center",
            fontWeight: 800,
            [theme.breakpoints.down("sm")]: {
              fontSize: "20px",
            },
          }}
        >
          Get Your Dream Home
        </Typography>
      </div>
    </div>
  );
};

export default ImageSlider;
