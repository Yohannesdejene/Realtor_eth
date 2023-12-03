import { useState, useEffect, useRef } from "react";
import {
  Button,
  Typography,
  Link,
  Box,
  useTheme,
  useMediaQuery,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import CircularProgress from "@mui/material/CircularProgress";
import HomeCover from "../Components/Home/HomeCover";
import SlideHomes from "../Components/Home/SlideHomes";
import HomeCard from "../Components/Home/HomeCard";
import HomeCardSmall from "../Components/Home/HomeCardSmall";
import ProductCard from "../Components/Home/ProductCard";

import DownloadCard from "../Components/Home/DownloadCard";
import AdvertCard from "../Components/Home/AdvertCard";
import Faq from "../Components/Home/Faq";
import Footer from "../Layouts/Footer";
import { CommonTypography } from "../Components/CommonComponent/index";

import { setHomes } from "../store/actions/HomesAction";
import { updateLogin } from "../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";
// import api from "../Services/index";
import createApiInstance from "../Services/BotApi";
const { api, ApiWrapper } = createApiInstance();

import { toast } from "react-toastify";

// Create a custom styled button

const Home = () => {
  const theme = useTheme();
  const themes = theme.palette;
  const MoreButton = styled(Button)(({ theme }) => ({
    backgroundColor: themes.green.main,
    color: themes.white.main,
    padding: "10px 20px",
    borderRadius: "5px",
    textTransform: "none",

    ":hover": {
      backgroundColor: themes.green.main,
      color: themes.white.main,
    },
  }));
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const home = useSelector((state) => state.homesReducer.homes);
  const buyRent = useSelector((toogle) => toogle.tooglesReducer.buyRent);
  const isLoggedIn = useSelector((user) => user.usersReducer.isLoggedIn);
  const serviceChoice = buyRent === "buy" ? "sale" : "rent";
  useEffect(() => {
    setLoading(true);

    const fetchFilter = () => {
      try {
        api
          .get(
            `/unauth/house/filter?serviceType=${serviceChoice}`,

            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("response", res.data);
            dispatch(setHomes(res.data.houses));
            setLoading(false);
          })
          .catch((err) => {
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
            console.log("Errr first", err);
            setLoading(false);
          });
      } catch (err) {
        toast.success(
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

    fetchFilter();
  }, [serviceChoice]);

  const handleGotoLogin = () => {
    dispatch(updateLogin(true));
  };
  return (
    <div
      style={{
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <HomeCover />

      <CommonTypography label="Explore homes on Realtor" />

      <SlideHomes />
      <CommonTypography label="Featured Homes" />
      <Box sx={{ ml: "5%", mr: "5%", mb: "20px" }}>
        <Grid container spacing={2}>
          {home.map((home) => (
            <Grid key={home.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard home={home} />
            </Grid>
          ))}
        </Grid>

        {/* </Container> */}

        <Box
          sx={{
            mt: "20px",
            display: "flex",
            justifyContent: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {loading && <CircularProgress />}
          {isLoggedIn && !loading && (
            <MoreButton component={Link} href={"/homes"}>
              Load more houses
            </MoreButton>
          )}
          {!isLoggedIn && !loading && (
            <MoreButton onClick={handleGotoLogin}>
              Login To View More Homes
            </MoreButton>
          )}
        </Box>

        <CommonTypography label="Download Our app" />
        <DownloadCard />
        <AdvertCard />

        <CommonTypography label="Frequently asked questions" />
        <Faq />
      </Box>

      <Footer />
      <ApiWrapper />
    </div>
  );
};
export default Home;
