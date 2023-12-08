import { useState, useEffect, useRef } from "react";
import { Typography, IconButton, Box } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

const HomeCover = ({ realEstateName, images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [nextImage, setNextImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
      {images && (
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            backgroundImage: `url('/Realestates/${realEstateName}/${images[imageIndex]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "60dvh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          {isLoading && (
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                opacity: 0.8,
              }}
            >
              <Typography variant="caption">Loading...</Typography>
            </Box>
          )}
          <Typography
            variant="h1"
            sx={{
              color: themes.white.main,
              textAlign: "center",
              fontWeight: 800,
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
              },
            }}
          >
            {imageIndex === 0 ? "" : imageIndex === 2}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              width: "100%",
            }}
          >
            <IconButton
              onClick={handlePrevImage}
              disabled={imageIndex === 0 ? true : false}
              style={{
                left: "5px",
                backgroundColor: imageIndex === 0 ? "#f2f2f2" : "#ffffff",
              }}
            >
              <ArrowBackIosNewIcon sx={{ color: "#000000" }} />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              disabled={imageIndex + 1 === images.length ? true : false}
              style={{
                right: "5px",
                backgroundColor:
                  imageIndex + 1 === images.length ? "#f2f2f2" : "#ffffff",
              }}
            >
              <ArrowForwardIosIcon
                disabled={imageIndex + 1 === images.length ? true : false}
                sx={{ color: "#000000" }}
              />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default HomeCover;
