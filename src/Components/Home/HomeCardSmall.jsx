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
} from "@mui/material";
import { toast } from "react-toastify";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
const formatter = new Intl.NumberFormat("en-US");
import { useNavigate } from "react-router-dom";

import { updateLoginStateAction } from "../../store/actions/UserAction";
import { updateLogin } from "../../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";

import api from "../../Services/index";
const HomeCardSmall = ({ cards }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.usersReducer.isLoggedIn);
  const login = useSelector((state) => state.tooglesReducer.login);
  const darkMode = useSelector((state) => state.tooglesReducer.darkMode);

  const handleSavedMessage = (homeId) => {
    console.log("handle saved message", homeId);
    toast.success(
      "Home saved",
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
    // event.stopPropagation();
    setLoading(true);
    try {
      api
        .post(`/house/saved?houseId=${homeId}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("response", res);

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error(
            "Can't saved home .check your internet connection",
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
  const handleRedirectLoginHome = (event) => {
    dispatch(updateLogin(!login));
    toast.error(
      "Login to see the detail",
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
  const theme = useTheme();
  const themes = theme.palette;

  return (
    <Box
      className="Homes"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        // marginTop: "80px",
        height: "auto",
        padding: "0 16px",
      }}
    >
      {cards &&
        cards.map((card, index) => (
          <Card
            component={Link}
            // href={"/detail/" + `${card.id}`}
            onClick={() => handleClickCard(card.id)}
            // onClick={(event) => {
            //   event.stopPropagation();
            //   if (isLoggedIn) {
            //     handleClickCard(card.id);
            //   } else {
            //     handleRedirectLoginHome(card.id);
            //   }
            // }}
            key={index}
            sx={{
              flex: "1 0 370px",
              fontFamily: "Roboto",

              maxWidth: {
                lg: "280px",
                md: "270px",
                sm: "270px",
                xs: "100%",
              },

              justifyContent: "center",
              position: "relative",
              borderRadius: "10px",
              cursor: "pointer",
              textDecoration: "none",
              ":hover": {
                // border: "2px solid green",
                // borderColor: themes.green.main,
                boxShadow: !darkMode
                  ? " 0px 0px 10px 0px rgba(0, 0, 0, 0.3)"
                  : "0px 0px 10px 0px rgba(255, 255, 255, 0.5)",

                // maxWidth: "275px",
              },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={`https://circlefreelance.com/realtor/${card.coverImage}`}
                alt={card.text}
                sx={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  color: "#fff",
                  zIndex: 1,
                  // pointerEvents: "none",
                  cursor: "pointer",
                }}
                onClick={(event) => {
                  event.stopPropagation();
                  if (isLoggedIn) {
                    handleSavedMessage(card.id);
                  } else {
                    handleRedirectLogin(card.id);
                  }
                }}
              >
                <TurnedInIcon sx={{ fontSize: "30px" }} />
              </IconButton>
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
              For {card.marketStatus}
            </Typography>
            <CardContent sx={{ height: "40%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Roboto",
                  // fontSize: `${fontSize.medium}`,
                  fontWeight: "bold",
                }}
              >
                {card.houseType}
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
                {card.marketStatus == "rent" && (
                  <>{formatter.format(card.price)} Birr /Month</>
                )}
                {card.marketStatus == "sale" && (
                  <>{formatter.format(card.price)} Birr </>
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
                {card.subcity}
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
                  sx={{ fontWeight: 700, display: "flex", alignItem: "center" }}
                >
                  <HotelIcon sx={{ mr: "5px", mt: "-2px", fontSize: "25px" }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                      fontFamily: "Roboto",
                    }}
                  >
                    {card.bedrooms} beds
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
                  {card.bathrooms} bathrooms
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
                  {card.areaSize} sqm
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default HomeCardSmall;
