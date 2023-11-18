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
} from "@mui/material";
///icons
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
///
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

///import component
import DialogeBoxFull from "../DialogeBoxFull";

import Discription from "./Discription";

const ImageCard = ({ house, houseImages }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [loading, setLoading] = useState(null);

  const theme = useTheme();
  const themes = theme.palette;

  const baseUrl = "https://circlefreelance.com/realtor";

  const [dialogeValue, setDialogeValue] = useState(false);
  const handleDialogeChange = () => {
    setDialogeValue(!dialogeValue);
    console.log("helo, value", dialogeValue);
  };
  const content2 = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel
          showArrows={true}
          showThumbs={false}
          dynamicHeight={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <IconButton
                type="button"
                onClick={onClickHandler}
                style={{
                  fontWeight: "bold",
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  transform: "translateY(-50%)",
                  zIndex: "1", // Add this line to ensure visibility
                }}
              >
                <ArrowBackIosNewIcon sx={{ color: themes.white.main }} />
              </IconButton>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <IconButton
                type="button"
                onClick={onClickHandler}
                style={{
                  fontWeight: "bold",
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%)",
                  zIndex: "1", // Add this line to ensure visibility
                }}
              >
                <ArrowForwardIosIcon sx={{ color: themes.white.main }} />
              </IconButton>
            )
          }
        >
          {houseImages &&
            houseImages.map((image, index) => (
              <div
                key={index}
                onClick={handleDialogeChange}
                style={{
                  // width: {
                  //   lg: "100px",
                  //   md: "80px",
                  //   sm: "60px",
                  //   xs: "50px",
                  // },
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  onClick={handleDialogeChange}
                  component="img"
                  image={
                    image && image.imageUrl
                      ? baseUrl + image.imageUrl
                      : "/imgejdjd"
                  }
                  alt="Image loading..."
                  sx={{
                    height: {
                      md: "450px",
                      xs: "300px",
                    },
                    // height: "100vh",
                    width: "100vw",

                    // maxWidth: "100%",
                    // // height: "auto",

                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "5px",
                    // maxWidth: "100%",
                    // maxHeight: "70vh",
                    // margin: "auto",
                    // display: "block",
                  }}
                />
              </div>
            ))}
        </Carousel>
      </Suspense>
    );
  };
  useEffect(() => {}, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",

            gap: "10px",

            flexDirection: "column",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Carousel
              style={{ color: "red" }}
              showArrows={true}
              showThumbs={false}
              dynamicHeight={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <IconButton
                    type="button"
                    onClick={onClickHandler}
                    style={{
                      fontWeight: "bold",
                      position: "absolute",
                      top: "50%",
                      left: "0",
                      transform: "translateY(-50%)",
                      zIndex: "1", // Add this line to ensure visibility
                    }}
                  >
                    <ArrowBackIosNewIcon sx={{ color: themes.white.main }} />
                  </IconButton>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <IconButton
                    type="button"
                    onClick={onClickHandler}
                    style={{
                      fontWeight: "bold",
                      position: "absolute",
                      top: "50%",
                      right: "0",
                      transform: "translateY(-50%)",
                      zIndex: "1", // Add this line to ensure visibility
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ color: themes.white.main }} />
                  </IconButton>
                )
              }
            >
              {houseImages &&
                // houseImages.length >  &&
                houseImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={handleDialogeChange}
                    style={{
                      width: {
                        lg: "100px",
                        md: "80px",
                        sm: "60px",
                        xs: "50px",
                      },
                      cursor: "pointer",
                      color: "red",
                    }}
                  >
                    <CardMedia
                      onClick={handleDialogeChange}
                      component="img"
                      image={
                        image && image.imageUrl
                          ? baseUrl + image.imageUrl
                          : "/imgejdjd"
                      }
                      alt="Image loading..."
                      sx={{
                        height: {
                          md: "450px",
                          xs: "300px",
                        },
                        cursor: "pointer",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                ))}
            </Carousel>
          </Suspense>

          <DialogeBoxFull
            dialogeValue={dialogeValue}
            handleDialogeChange={handleDialogeChange}
            Content={content2}
          />

          <Discription house={house} />
        </Box>
      </Box>
    </>
  );
};

export default ImageCard;
