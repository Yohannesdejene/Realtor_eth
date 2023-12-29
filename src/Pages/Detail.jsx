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
import GoogleMapComponent from "../Components/Details/GoogleMapComponent";

//react componenet
import { useParams, useNavigate } from "react-router-dom";

///other imports
import { toast } from "react-toastify";

///stores
import { useSelector, useDispatch } from "react-redux";

///componenets
import ContactAgent from "../Components/Details/ContactAgent";
import ImagesCardFull from "../Components/Details/ImagesCardFull";
import ImagesCard from "../Components/Details/ImagesCard";
import ProductCard from "../Components/Home/ProductCard";
import ProductCardDetail from "../Components/Home/ProductCardDetail";

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
            setLoadingSimilar(true);
            const houseTemp = res.data.house;
            api
              .get(
                `/unauth/house/relatedSearch?houseType=${houseTemp.houseType}&subcity=${houseTemp.subcity}`,
                {
                  withCredentials: true,
                }
              )
              .then((res) => {
                console.log("related", res);
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
            console.log("response images ", res);
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

    // const fetchSimilarHomes = () => {
    //   setLoadingSimilar(true);
    //   try {
    //     api
    //       .get(
    //         `/unauth/house/relatedSearch?houseType=${house.homeType}&subcity=${house.subcity}`,
    //         {
    //           withCredentials: true,
    //         }
    //       )
    //       .then((res) => {
    //         console.log("related", res);
    //         setSimilarHouse(res.data.houses);

    //         setLoadingSimilar(false);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         toast.error(
    //           "Can't fatch data .check your internet connection",
    //           {
    //             autoClose: 3000,
    //           },
    //           {
    //             // Set the background color
    //             backgroundColor: themes.green.main,
    //             // Set the text color
    //             color: themes.white.main,
    //           }
    //         );
    //         setLoadingSimilar(false);
    //       });
    //   } catch (err) {
    //     console.log(err);
    //     toast.error(
    //       "Can't fatch data .check your internet connection",
    //       {
    //         autoClose: 3000,
    //       },
    //       {
    //         // Set the background color
    //         backgroundColor: themes.green.main,
    //         // Set the text color
    //         color: themes.white.main,
    //       }
    //     );
    //     setLoadingSimilar(false);
    //   }
    // };

    fetchDetail();
    fetchImages();
    // fetchData();
  }, []);
  const content = () => {
    return (
      // <Container>
      <ImagesCardFull
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
  const latitude = 9.05698; // Replace with your desired latitude
  const longitude = 38.868914; // Replace with your desired longitude

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
              <Box>
                <CommonBack label="Back to Home" onClick={onBack} />
                <Grid container spacing="20px">
                  <Grid item xs={12} sm={9}>
                    {/* <Container> */}
                    <ImagesCard
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

                  <Grid
                    item
                    xs={12}
                    sm={3}
                    sx={{
                      ml: {
                        xs: "5%",
                        sm: "0%",
                      },
                      mr: {
                        xs: "5%",
                        sm: "0%",
                      },
                    }}
                  >
                    <ContactAgent />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    sx={{
                      ml: {
                        xs: "5%",
                        sm: "0%",
                      },
                      mr: {
                        xs: "5%",
                        sm: "0%",
                      },
                    }}
                  >
                    <Discription house={house} />
                  </Grid>
                  <Divider
                    orientation="vertical"
                    sx={{
                      color: "#000000",
                      ml: {
                        xs: "5%",
                        sm: "0%",
                      },
                      mr: {
                        xs: "5%",
                        sm: "0%",
                      },
                    }}
                    flexItem
                  />

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      ml: {
                        xs: "5%",
                        sm: "0%",
                      },
                      mr: {
                        xs: "5%",
                        sm: "0%",
                      },
                    }}
                  >
                    <Description house={house} />
                  </Grid>
                </Grid>
                <DialogeBoxFull
                  dialogeValue={dialogeValue}
                  handleDialogeChange={handleDialogeChange}
                  Content={content}
                />
                {/* </Container> */}
              </Box>
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
            <Container
              sx={{
                mt: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* <Grid container spacing={5}> */}
              {/* <DetailTable house={house} /> */}

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
                Maps
              </Typography>
              <GoogleMapComponent
                latitude={latitude}
                longitude={longitude}
                house={house}
              />
              {/* </Grid> */}
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
                      <ProductCardDetail home={home} />
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
