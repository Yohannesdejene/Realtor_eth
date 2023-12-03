import { useEffect, useState } from "react";
import {
  Button,
  Typography,
  IconButton,
  Link,
  Box,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Container,
  Grid,
  CardMedia,
  Card,
  Divider,
} from "@mui/material";

//icons
import { ArrowBack, ArrowForward } from "@mui/icons-material";

//react componenet
import { useParams, useNavigate } from "react-router-dom";

///other imports
import { toast } from "react-toastify";

///stores
import { useSelector, useDispatch } from "react-redux";
import {
  setDetailHome,
  setHomes,
  setDetailImages,
} from "../store/actions/HomesAction";

///componenets
import ContactAgent from "../Components/Details/ContactAgent";
import ImageCard from "../Components/Details/ImagesCard";
import ProductCard from "../Components/Home/ProductCard";

import DetailTable from "../Components/Details/DetailTable";
import Neighborhood from "../Components/Details/Neighborhood";
import Description from "../Components/Details/Description";
import Discription from "../Components/Details/Discription";
import DialogeBoxFull from "../Components/DialogeBoxFull";
import { CommonBack, CommonButtonLink } from "../Components/CommonComponent";
import Footer from "../Layouts/Footer";
import api from "../Services/index";

const Detail = () => {
  const parameter = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const similarList = useSelector((house) => house.homesReducer.homes);

  const [loading, setLoading] = useState(true);
  const [laodingImages, setLoadingImages] = useState(true);
  const [loadingSimilar, setLoadingSimilar] = useState(true);
  const [dialogeValue, setDialogeValue] = useState(false);
  const handleDialogeChange = () => {
    setDialogeValue(!dialogeValue);
    console.log("helo, value", dialogeValue);
  };

  // console.log("house", houseImagess, houses);
  const theme = useTheme();

  const themes = theme.palette;

  const [house, setHouse] = useState("");
  const [houseImages, setHouseImages] = useState("");
  const [similarHouse, setSimilarHouse] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  useEffect(() => {
    const fetchDetail = () => {
      try {
        api
          .get(`/unauth/house/detail?houseId=${parameter.homeId}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("response detail", res);
            // dispatch(setDetailHome(res.data.house));
            setHouse(res.data.house);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            toast.error(
              "Can't fatch data .check your internet connection",
              {
                autoClose: 3000,
              },
              {
                // Set the background color
                backgroundColor: themes.green.main,
                // Set the text color
                color: themes.white.main,
              }
            );
            setLoading(false);
          });
      } catch (err) {
        console.log(err);
        toast.error(
          "Can't fatch data .check your internet connection",
          {
            autoClose: 3000,
          },
          {
            // Set the background color
            backgroundColor: themes.green.main,
            // Set the text color
            color: themes.white.main,
          }
        );
        setLoading(false);
      }
    };
    const fetchImages = () => {
      setLoadingImages(true);
      try {
        api
          .get(`/unauth/house/images?houseId=${parameter.homeId}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("response", res);
            setHouseImages(res.data.houseImages);
            setLoadingImages(false);
          })
          .catch((err) => {
            console.log(err);
            toast.error(
              "Can't fatch data .check your internet connection",
              {
                autoClose: 3000,
              },
              {
                // Set the background color
                backgroundColor: themes.green.main,
                // Set the text color
                color: themes.white.main,
              }
            );
            setLoadingImages(false);
          });
      } catch (err) {
        console.log(err);
        toast.error(
          "Can't fatch data .check your internet connection",
          {
            autoClose: 3000,
          },
          {
            // Set the background color
            backgroundColor: themes.green.main,
            // Set the text color
            color: themes.white.main,
          }
        );
        setLoadingImages(false);
      }
    };
    const fetchLSimilarListing = () => {
      setLoadingImages(true);
      try {
        api
          .get(`/unauth/houses`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("response", res);
            setSimilarHouse(res.data.houses);

            setLoadingSimilar(false);
          })
          .catch((err) => {
            console.log(err);
            toast.error(
              "Can't fatch data .check your internet connection",
              {
                autoClose: 3000,
              },
              {
                // Set the background color
                backgroundColor: themes.green.main,
                // Set the text color
                color: themes.white.main,
              }
            );
            setLoadingSimilar(false);
          });
      } catch (err) {
        console.log(err);
        toast.error(
          "Can't fatch data .check your internet connection",
          {
            autoClose: 3000,
          },
          {
            // Set the background color
            backgroundColor: themes.green.main,
            // Set the text color
            color: themes.white.main,
          }
        );
        setLoadingSimilar(false);
      }
    };
    fetchDetail();
    fetchImages();
    fetchLSimilarListing();
  }, []);
  const content = () => {
    return (
      // <Container>
      <ImageCard
        handlePrevImage={handlePrevImage}
        handleNextImage={handleNextImage}
        handleDialogeChange={handleDialogeChange}
        currentImageIndex={currentImageIndex}
        houseImages={houseImages}
        handleThumbnailClick={handleThumbnailClick}
        dialogeValue={dialogeValue}
      />
      // </Container>
    );
  };

  const onBack = () => {
    navigate("/");
  };
  const LoadMoreHouse = () => {
    navigate("/homes");
  };

  const handleDetail = (id) => {
    console.log("redirecting");
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Box
        sx={{
          mt: "100px",
          mb: "50px",
          // ml: "5%",
          // mr: "5%",
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              top: "50%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Container>
              {" "}
              <CommonBack label="Back to Home" onClick={onBack} />
              <Grid container spacing="20px">
                <Grid item xs={12} sm={9}>
                  {/* <Container> */}
                  <ImageCard
                    handlePrevImage={handlePrevImage}
                    handleNextImage={handleNextImage}
                    handleDialogeChange={handleDialogeChange}
                    currentImageIndex={currentImageIndex}
                    houseImages={houseImages}
                    handleThumbnailClick={handleThumbnailClick}
                    dialogeValue={dialogeValue}
                  />
                  {/* </Container> */}
                </Grid>
                <Grid item xs={12} sm={3}>
                  <ContactAgent />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Discription house={house} />
                </Grid>
                <Divider
                  orientation="vertical"
                  sx={{ color: "#000000" }}
                  flexItem
                />

                <Grid item xs={12} sm={6}>
                  <Description house={house} />
                </Grid>
              </Grid>
              <DialogeBoxFull
                dialogeValue={dialogeValue}
                handleDialogeChange={handleDialogeChange}
                Content={content}
              />
            </Container>
            <Container>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <DetailTable house={house} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Neighborhood house={house} />
                </Grid>
              </Grid>
            </Container>
            <Container>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "21px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  mb: "20px",
                  mt: "40px",
                }}
              >
                Similar Listing
              </Typography>
              <Grid container spacing="10px">
                {similarHouse &&
                  similarHouse.map((home) => (
                    <Grid key={home.id} item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard home={home} />
                    </Grid>
                  ))}
              </Grid>
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "20px" }}
              >
                <CommonButtonLink
                  label="Load More houses"
                  handleClick={LoadMoreHouse}
                />
              </Box>
            </Container>
          </>
        )}

        {/* <GoogleMapBox /> */}
      </Box>
      {!loading && <Footer />}
    </>
  );
};
export default Detail;
