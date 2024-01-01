import { useState, useEffect, Suspense } from "react";
import {
  Box,
  CardMedia,
  useMediaQuery,
  useTheme,
  Grid,
  Modal,
  Backdrop,
  Fade,
  Button,
  IconButton,
  Container,
  Typography,
  Card,
} from "@mui/material";
///icons
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
///
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

///import component
import DialogeBoxFull from "../DialogeBoxFull";

import Discription from "./Discription";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
const ImageCard = ({
  house,
  // handlePrevImage,
  // handleNextImage,
  handleDialogeChange,
  // currentImageIndex,
  houseImages,
  // handleThumbnailClick,
  dialogeValue,
}) => {
  const theme = useTheme();
  const themes = theme.palette;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  useEffect(() => {
    // Reset image opacity when the current image index changes
    setImageOpacity(1);
  }, [currentImageIndex]);
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % houseImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + houseImages.length) % houseImages.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    // <Container>
    <Suspense fallback={<div>Loading...</div>}>
      <Grid container spacing="2px">
        <Grid item xs={12}>
          <Card
            sx={{
              alignItems: "center",
              display: "flex",
              position: "relative",
            }}
          >
            {houseImages[currentImageIndex] &&
              houseImages[currentImageIndex]?.imageUrl && (
                <CardMedia
                  onClick={handleDialogeChange}
                  component="img"
                  alt={`Real Estate Image ${currentImageIndex + 1}`}
                  sx={{
                    // height: {
                    //   minHeight: "30vh",
                    //   maxHeight: "70vh",
                    // },
                    height: "60vh",
                    // borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  style={{ transition: "opacity 0.5s ease-in-out" }} // Apply the transition inline
                  // image={`https://circlefreelance.com/realtor/${houseImages[currentImageIndex].imageUrl}`}
                  image={`https://api.realtoreth.com/realtor${houseImages[currentImageIndex]?.imageUrl}`}
                />
              )}
            <IconButton
              onClick={handleDialogeChange}
              variant="contained"
              style={{
                position: "absolute",
                backgroundColor: "#ffffff",
                color: themes.black.main,
                bottom: 10,
                right: 10,
                textTransform: "none",
              }}
            >
              {dialogeValue ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "#ffffff",
                top: 10,
                right: 10,
                textTransform: "none",
                display: "flex",
                gap: "1px",
                alignItems: "center",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              <IconButton>
                <CameraAltIcon sx={{ color: themes.black.main }} />
              </IconButton>
              <Typography sx={{ color: themes.black.main }}>
                {currentImageIndex + 1}/{houseImages.length}
              </Typography>
            </Box>

            {houseImages?.length > 1 && (
              <>
                {currentImageIndex !== 0 && (
                  <IconButton
                    // onClick={handlePrevImage}
                    onClick={() => {
                      setImageOpacity(0); // Set opacity to 0 before changing the image
                      handlePrevImage();
                    }}
                    sx={{
                      position: "absolute",
                      left: 10,

                      transform: "translateY(-50%)",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      ":hover": {
                        backgroundColor: "#ffffff",
                        color: "#000000",
                      },
                    }}
                  >
                    <ArrowBack />
                  </IconButton>
                )}

                {currentImageIndex !== houseImages.length - 1 && (
                  <IconButton
                    // onClick={handleNextImage}
                    onClick={() => {
                      setImageOpacity(0); // Set opacity to 0 before changing the image
                      handleNextImage();
                    }}
                    sx={{
                      position: "absolute",
                      right: 10,
                      // top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      ":hover": {
                        backgroundColor: "#ffffff",
                        color: "#000000",
                      },
                    }}
                  >
                    <ArrowForward />
                  </IconButton>
                )}
              </>
            )}
          </Card>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              overflowX: "auto", // Add overflowX for horizontal scrolling
              // maxWidth: "100%", // Ensure the container takes full width

              justifyContent: "center",
              alignItems: "center",
              marginTop: "16px",
            }}
          >
            {houseImages &&
              houseImages?.length > 1 &&
              houseImages.map((image, index) => (
                <CardMedia
                  component="img"
                  key={index}
                  // src={image}
                  // src={`https://circlefreelance.com/realtor/${image.imageUrl}`}
                  src={`https://api.realtoreth.com/realtor${image?.imageUrl}`}
                  alt={`Home image ${index + 1}`}
                  sx={{
                    // filter:
                    //   currentImageIndex === index ? "none" : "grayscale(150%)",
                    opacity: currentImageIndex != index ? "0.6" : "1",
                    // border:
                    //   currentImageIndex === index ? "1px solid red" : "none",
                    width: {
                      xs: "50px",
                      md: "100px",
                    },

                    height: {
                      xs: "50px",
                      md: "80px",
                    },
                    margin: "0 4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleThumbnailClick(index)}
                  onMouseOver={() => handleThumbnailClick(index)}
                />
              ))}
          </div>
        </Grid>
      </Grid>
    </Suspense>
    //  </Container>
  );
};

export default ImageCard;
