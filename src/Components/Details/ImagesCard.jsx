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
  Card,
} from "@mui/material";
///icons
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
///
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

///import component
import DialogeBoxFull from "../DialogeBoxFull";

import Discription from "./Discription";

const ImageCard = ({
  house,
  handlePrevImage,
  handleNextImage,
  handleDialogeChange,
  currentImageIndex,
  houseImages,
  handleThumbnailClick,
  dialogeValue,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [loading, setLoading] = useState(null);

  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Container>
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
                houseImages[currentImageIndex].imageUrl && (
                  <CardMedia
                    onClick={handleDialogeChange}
                    component="img"
                    alt={`Real Estate Image ${currentImageIndex + 1}`}
                    sx={{
                      height: dialogeValue
                        ? {
                            xs: "80vh",
                            md: "80vh",
                          }
                        : {
                            xs: "60vh",
                            md: "70vh",
                          },
                      borderRadius: "20px",
                      cursor: "pointer",
                    }}
                    // image={`https://circlefreelance.com/realtor/${houseImages[currentImageIndex].imageUrl}`}
                    image={`https://circlefreelance.com/realtor/${
                      houseImages[currentImageIndex].imageUrl ?? "fallback.jpg"
                    }`}
                  />
                )}
              <Button
                onClick={handleDialogeChange}
                variant="contained"
                sx={{
                  position: "absolute",
                  backgroundColor: themes.green.main,
                  color: themes.white.main,
                  ":hover": {
                    backgroundColor: themes.green.main,
                    color: themes.white.main,
                  },
                  bottom: 10,
                  right: 10,
                  textTransform: "none",
                }}
              >
                {dialogeValue ? "Leave Full screen" : "Full screen"}
              </Button>
              <IconButton
                onClick={handlePrevImage}
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
              <IconButton
                onClick={handleNextImage}
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
            </Card>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                overflowX: "auto", // Add overflowX for horizontal scrolling
                maxWidth: "100%", // Ensure the container takes full width

                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              {houseImages &&
                houseImages.map((image, index) => (
                  <CardMedia
                    component="img"
                    key={index}
                    // src={image}
                    // src={`https://circlefreelance.com/realtor/${image.imageUrl}`}
                    src={`https://circlefreelance.com/realtor/${
                      image.imageUrl ?? "fallback.jpg"
                    }`}
                    alt={`Thumbnail ${index + 1}`}
                    sx={{
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
                  />
                ))}
            </div>
          </Grid>
        </Grid>
      </Suspense>
    </Container>
  );
};

export default ImageCard;
