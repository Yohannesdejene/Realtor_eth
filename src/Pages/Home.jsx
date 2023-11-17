import { useState, useEffect, useRef } from "react";
import {
  Button,
  Typography,
  Link,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import HomeCover from "../Components/Home/HomeCover";
import SlideHomes from "../Components/Home/SlideHomes";
import HomeCard from "../Components/Home/HomeCard";
import HomeCardSmall from "../Components/Home/HomeCardSmall";
import DownloadCard from "../Components/Home/DownloadCard";
import AdvertCard from "../Components/Home/AdvertCard";
import Faq from "../Components/Home/Faq";
import Footer from "../Layouts/Footer";
import { setHomes } from "../store/actions/HomesAction";
import { updateLogin } from "../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";
// import api from "../Services/index";
import createApiInstance from "../Services/BotApi";
const { api, ApiWrapper } = createApiInstance();

import { toast } from "react-toastify";

const Home = () => {
  const theme = useTheme();
  const themes = theme.palette;
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
      <Typography
        variant="h3"
        sx={{
          mt: "30px",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Explore homes on Realtor
      </Typography>
      <SlideHomes />
      <Typography
        variant="h3"
        sx={{
          mt: "5px",
          textAlign: "center",
          fontWeight: 700,
          mb: "30px",
        }}
      >
        Featured Homes
      </Typography>
      <Box
        sx={{
          ml: {
            lg: "3%",
            sm: "3%",
            xs: "0px",
          },
          mr: {
            lg: "3%",
            sm: "3%",
            xs: "0px",
          },
        }}
      >
        {" "}
        <Box
          sx={{
            mt: "50px",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          {loading && <CircularProgress />}
        </Box>
        {!loading && <HomeCardSmall cards={home} />}
      </Box>

      {isLoggedIn && (
        <Button
          style={{
            marginTop: "25px",
            fontFamily: "Roboto",
            textAlign: "center",
            fontWeight: "bold",
            color: themes.green.main,
            textTransform: "none",
            fontSize: "17px",
          }}
          component={Link}
          href={"/homes"}
        >
          Load more houses
        </Button>
      )}
      {!isLoggedIn && (
        <Button
          style={{
            marginTop: "25px",
            fontFamily: "Roboto",
            fontWeight: "bold",
            textAlign: "center",
            color: themes.green.main,
            textTransform: "none",
            fontSize: "18px",
          }}
          onClick={handleGotoLogin}
        >
          Login To View More Homes
        </Button>
      )}
      <Typography
        variant="h3"
        sx={{
          mt: "30px",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Realtor Agent
      </Typography>
      <DownloadCard />
      <AdvertCard />
      <Typography
        variant="h3"
        sx={{
          mt: {
            lg: "5px",
            md: "50px",
            sm: "50px",
            xs: "30px",
          },
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Frequently asked questions
      </Typography>
      <Faq />
      <Footer />
      <ApiWrapper />
    </div>
  );
};
export default Home;
