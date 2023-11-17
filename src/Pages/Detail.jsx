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
} from "@mui/material";

//react componenet
import { useParams } from "react-router-dom";

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
import Description from "../Components/Details/Description";
import DetailTable from "../Components/Details/DetailTable";
import GoogleMapBox from "../Components/Details/GoogleMapBox";
import HomeCardSmall from "../Components/Home/HomeCardSmall";
import Footer from "../Layouts/Footer";
import api from "../Services/index";
const Detail = () => {
  const parameter = useParams();
  const xs = useMediaQuery("(max-width:600px)");
  const sm = useMediaQuery("(max-width:900px)");
  const md = useMediaQuery("(max-width:1200px)");
  const lg = useMediaQuery("(min-width:1201px)");
  const dispatch = useDispatch();
  const house = useSelector((house) => house.homesReducer.homeDetail);
  const similarList = useSelector((house) => house.homesReducer.homes);
  const houseImages = useSelector((house) => house.homesReducer.detailImages);

  const [laoding, setLoading] = useState(true);
  const [laodingImages, setLoadingImages] = useState(true);
  const [loadingSimilar, setLoadingSimilar] = useState(true);
  console.log("parameter", parameter);
  // console.log("house", houseImagess, houses);
  const theme = useTheme();
  const themes = theme.palette;
  useEffect(() => {
    const fetchDetail = () => {
      try {
        api
          .get(`/unauth/house/detail?houseId=${parameter.homeId}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("response", res);
            dispatch(setDetailHome(res.data.house));

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
            dispatch(setDetailImages(res.data.houseImages));

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
            dispatch(setHomes(res.data.houses));

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
  return (
    <>
      <Box
        sx={{
          mt: "100px",
          mb: "50px",
          ml: {
            lg: "5%",
            md: "8%",
            sm: "8%",
            xs: "5%",
          },
          mr: {
            lg: "3%",
            md: "4%",
            sm: "8%",
            xs: "5%",
          },
        }}
      >
        <Button
          component={Link}
          href="/"
          style={{
            textTransform: "none",
            fontFamily: "Roboto",
            fontSize: xs
              ? "12px"
              : sm
              ? "13px"
              : md
              ? "14px"
              : lg
              ? "16px"
              : "15px",
            color: themes.myblack.main,
          }}
        >
          Back To Home
        </Button>

        <Box sx={{ display: "flex", mt: "20px", justyfyContent: "center" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: xs
                ? "column"
                : sm
                ? "column"
                : md
                ? "row"
                : lg
                ? "row"
                : "row",
              textalign: "center",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                width: {
                  lg: "75%",
                  md: "75%",
                  sm: "100%",
                  xs: "100%",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              {!laodingImages && (
                <ImageCard house={house} houseImages={houseImages} />
              )}
              {laodingImages && <CircularProgress />}
            </Box>
            <Box
              sx={{
                width: {
                  lg: "25%",
                  md: "25%",
                  sm: "100%",
                  xs: "100%",
                },
                height: "100pvh",
              }}
            >
              <ContactAgent />
            </Box>
          </Box>
        </Box>
        {!laoding && <Description house={house} />}
        {laoding && <CircularProgress />}

        <DetailTable house={house} />
        {/* <GoogleMapBox /> */}
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
        {laoding && <CircularProgress />}
        {!laoding && <HomeCardSmall cards={similarList} />}

        <Button
          style={{
            marginTop: "25px",
            fontFamily: "Roboto",
            textAlign: "center",
            fontWeight: "bold",
            color: themes.green.main,
            textTransform: "none",
            fontSize: "17px",
            display: "flex",
          }}
          component={Link}
          href={"/homes"}
        >
          Load more houses
        </Button>
      </Box>
      <Footer />
    </>
  );
};
export default Detail;
