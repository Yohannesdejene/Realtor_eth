import { useState } from "react";
import {
  Button,
  Typography,
  IconButton,
  Link,
  Box,
  Card,
  CardMedia,
  CardContent,
  useTheme,
  Grid,
  Paper,
} from "@mui/material";
import { toast } from "react-toastify";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
const formatter = new Intl.NumberFormat("en-US");
import { useNavigate } from "react-router-dom";
import { removeSavedHome } from "../../store/actions/HomesAction";

import { updateLoginStateAction } from "../../store/actions/UserAction";
import { updateLogin } from "../../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";

import api from "../../Services/index";
const RemoveHomeCard = ({ home, handleClick }) => {
  const theme = useTheme();
  const themes = theme.palette;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);
  const login = useSelector((state) => state.tooglesReducer.login);
  const darkMode = useSelector((state) => state.tooglesReducer.darkMode);

  const handleRemoveSavedHome = (homeId) => {
    dispatch(removeSavedHome(homeId));
    toast.success(
      "House removed from saved list!",
      {
        autoClose: 2000,
      },
      {
        // Set the background color
        backgroundColor: themes.green.main,
        // Set the text color
        color: themes.white.main,
      }
    );
    console.log("handle saved message", homeId);
    // event.stopPropagation();
    setLoading(true);
    try {
      api
        .delete(`/house/saved?houseId=${homeId}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("response", res);
          dispatch(removeSavedHome(homeId));

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          // toast.error(
          //   "Can't remove home .check your internet connection",
          //   {
          //     autoClose: 2000,
          //   },
          //   {
          //     // Set the background color
          //     backgroundColor: themes.green.main,
          //     // Set the text color
          //     color: themes.white.main,
          //   }
          // );
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
      toast.error(
        "Can't save home .check your internet connection",
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
    console.log("saved");
  };

  const handleRedirectLogin = (event) => {
    // event.stopPropagation();
    dispatch(updateLogin(!login));
    toast.error(
      "Login to save Homes",
      {
        autoClose: 3000,
      },
      {
        // Set the background color
        backgroundColor: themes.green.main,
        // Set the text color
        color: themes.white.main,
      }
      // Add custom CSS class
    );
  };
  const handleClickCard = (cardId) => {
    navigate("/detail/" + `${cardId}`);
  };
  return (
    <Card
      onClick={() => handleClickCard(home.id)}
      sx={{
        textTransform: "none",
        // justifyContent: "center",
        position: "relative",
        borderRadius: "10px",
        cursor: "pointer",
        textDecoration: "none",
        ":hover": {
          transform: "translateZ(-2px)",
          boxShadow: !darkMode
            ? " 0px 0px 6px 0px rgba(0, 0, 0, 0.3)"
            : "0px 0px 10px 0px rgba(255, 255, 255, 0.5)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          image={`https://circlefreelance.com/realtor/${home.coverImage}`}
          alt={home.text}
          sx={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateZ(-10px)",
            },
          }}
        />
        <Button
          style={{
            position: "absolute",
            bottom: "8px",
            right: "8px",
            color: "#fff",
            zIndex: 1,
            // pointerEvents: "none",
            cursor: "pointer",
            textTransform: "none",
            backgroundColor: themes.green.main,
            fontSize: "13px",
          }}
          onClick={(event) => {
            event.stopPropagation();
            if (isLoggedIn) {
              handleRemoveSavedHome(home.id);
            } else {
              handleRedirectLogin(home.id);
            }
          }}
        >
          Remove
        </Button>
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            top: "16px",
            right: "16px",
            color: "#000000",
            zIndex: 1,
            p: "5px",
            // fontSize: "11px",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          For {home.marketStatus}
        </Typography>
      </Box>
      {/* <Typography
        variant="body1"
        sx={{
          position: "absolute",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          top: "16px",
          left: "16px",
          color: "#000000",
          zIndex: 1,
          p: "5px",
          // fontSize: "11px",
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
      >
        1.2km away
      </Typography> */}

      <CardContent
        sx={{ height: "40%" }}
        // onClick={() => handleClickCard(home.id)}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto",
            // fontSize: `${fontSize.medium}`,
            textTrasform: "none",
            fontWeight: "bold",
          }}
        >
          {home.houseType}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Roboto",
            fontWeight: 800,
            color: themes.green.main,
            mt: "4px",
          }}
        >
          {home.marketStatus == "rent" && (
            <>{formatter.format(home.price)} Birr /Month</>
          )}
          {home.marketStatus == "sale" && (
            <>{formatter.format(home.price)} Birr </>
          )}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            //   fontSize: "15px",
            display: "flex",
            alignText: "center",
            fontWeight: 0,
            mt: "15px",
            fontFamily: "Roboto",
          }}
        >
          <LocationOnIcon
            size="small"
            sx={{ fontSize: "20px", color: themes.mygrey1.main }}
          />{" "}
          {home.subcity}
        </Typography>
        <Box
          variant="body2"
          sx={{
            fontSize: "15px",
            display: "flex",
            // alignItem: "center",
            fontWeight: 0,
            mt: "15px",
            gap: "15px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              display: "flex",
              alignItem: "center",
            }}
          >
            <HotelIcon sx={{ mr: "5px", mt: "-2px", fontSize: "25px" }} />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                fontFamily: "Roboto",
              }}
            >
              {home.bedrooms} beds
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              fontSize: "11px",
              fontFamily: "Roboto",
              display: "flex",
            }}
          >
            <img
              src="/Images/bathroom.jpg"
              width="21px"
              height="21px"
              alt="Small Image"
              style={{ marginRight: "5px" }}
            />
            {home.bathrooms} bathrooms
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              fontSize: "11px",
              fontFamily: "Roboto",
              display: "flex",
            }}
          >
            <img
              src="/Images/square.jpg"
              width="21px"
              height="21px"
              alt="Small Image"
              style={{ marginRight: "5px" }}
            />
            {home.areaSize} sqm
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default RemoveHomeCard;
