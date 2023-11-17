import { useState, useEffect } from "react";
import { Box, CardMedia, useMediaQuery, useTheme } from "@mui/material";
///icons
import CloseIcon from "@mui/icons-material/Close";

///
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

///import component
import DialogeBoxFull from "../DialogeBoxFull";

import Discription from "./Discription";

const ImageCard = ({ house, houseImages }) => {
  const xs = useMediaQuery("(max-width:600px)");
  const sm = useMediaQuery("(max-width:900px)");
  const md = useMediaQuery("(mix-width:1200px)");
  const lg = useMediaQuery("(min-width:1201px)");
  const [imageIndex, setImageIndex] = useState(0);
  const theme = useTheme();
  const themes = theme.palette;

  const baseUrl = "https://circlefreelance.com/realtor";

  const onChangePic = (index) => {
    console.log("imagegege", index);
    setImageIndex(index);
  };
  console.log("image index", houseImages);
  const handleImageBack = () => {
    if (imageIndex === 0) {
      setImageIndex(home.images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };
  const handleImageFront = () => {
    if (imageIndex === home.images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const [dialogeValue, setDialogeValue] = useState(false);
  const handleDialogeChange = () => {
    setDialogeValue(!dialogeValue);
    console.log("helo, value", dialogeValue);
  };

  const Content = () => {
    return (
      <Box
        sx={{
          display: "flex",
          padding: "0px",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <CardMedia
          onClick={handleDialogeChange}
          component="img"
          image={
            house && house.coverImage ? baseUrl + house.coverImage : "/jdhdhdh"
          }
          alt="alt"
          sx={{
            height: {
              md: "520px",
              xs: "300px",
            },
            cursor: "pointer",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        {houseImages &&
          houseImages.length > 0 &&
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
              }}
            >
              <CardMedia
                onClick={handleDialogeChange}
                component="img"
                image={image.imageUrl ? baseUrl + image.imageUrl : "/Not found"}
                alt="alt"
                sx={{
                  height: {
                    md: "550px",
                    xs: "300px",
                  },
                  cursor: "pointer",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </div>
          ))}
      </Box>
    );
  };
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
          <Carousel
            showArrows={true}
            showThumbs={false}
            dynamicHeight={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => (
              <button
                type="button"
                onClick={onClickHandler}
                key={index}
                aria-label={`${label} ${index + 1}`}
                className={isSelected ? "selected" : ""}
                style={{ background: isSelected ? "blue" : "whitegrey" }}
              />
            )}
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
                    alt="alt"
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

          <DialogeBoxFull
            dialogeValue={dialogeValue}
            handleDialogeChange={handleDialogeChange}
            Content={Content}
          />

          <Discription house={house} />
        </Box>
      </Box>
    </>
  );
};

export default ImageCard;
