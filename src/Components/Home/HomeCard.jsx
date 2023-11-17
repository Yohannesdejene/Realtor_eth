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
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelIcon from "@mui/icons-material/Hotel";
const formatter = new Intl.NumberFormat("en-US");
import { useNavigate } from "react-router-dom";

import { updateLoginStateAction } from "../../store/actions/UserAction";
import { updateLogin } from "../../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";

// const cards = [
//   {
//     id: 1,
//     image: "/Images/Home.jpg",
//     text: "Apprtments",
//     type: "rent",
//     name: "Lemi kura Appartment",
//     price: "20000",
//     location: "Lemi fiyel bet ,Addis Ababa",
//     bedroom: 2,
//     bathroom: 3,
//     sqm: 0.0,

//     route: "Appartment",
//   },
//   {
//     id: 2,
//     image: "/Images/home2.jpg",
//     text: "Condominuim",
//     type: "rent",
//     name: "Lemi kura Appartment",
//     price: "20000",
//     location: "Lemi fiyel bet ,Addis Ababa",
//     bedroom: 2,
//     bathroom: 3,
//     sqm: 0.0,
//     route: "condominium",
//   },
//   {
//     id: 3,
//     image: "/Images/home3.jpg",
//     text: "Villa",
//     type: "rent",
//     name: "Lemi kura Appartment",
//     price: "20000",
//     location: "Lemi fiyel bet ,Addis Ababa",
//     bedroom: 2,
//     bathroom: 3,
//     sqm: 0.0,
//     route: "villa",
//   },
//   {
//     id: 4,
//     image: "/Images/home1.jpeg",
//     text: "Guest House",
//     type: "rent",
//     name: "Lemi kura Appartment",
//     price: "20000",
//     location: "Lemi fiyel bet ,Addis Ababa",
//     bedroom: 2,
//     bathroom: 3,
//     sqm: 0.0,
//     route: "Guesthouse",
//   },
//   {
//     id: 5,
//     image: "/Images/home1.jpeg",
//     text: "Penhouse",
//     type: "rent",
//     name: "Lemi kura Appartment",
//     price: "20000",
//     location: "Lemi fiyel bet ,Addis Ababa",
//     bedroom: 2,
//     bathroom: 3,
//     sqm: 0.0,
//     route: "pentHouse",
//   },
//   {
//     id: 6,
//     image: "/Images/home2.jpg",
//     text: "Apprtments",
//     type: "rent",
//     name: "Lemi kura Appartment",
//     price: "20000",
//     location: "Lemi fiyel bet ,Addis Ababa",
//     bedroom: 2,
//     bathroom: 3,
//     sqm: 0.0,
//     route: "pentHouse",
//   },
//   // {
//   //   id: 7,
//   //   image: "/Images/home3.jpg",
//   //   text: "Apprtments",
//   //   type: "rent",
//   //   name: "Lemi kura Appartment",
//   //   price: "20000",
//   //   location: "Lemi fiyel bet ,Addis Ababa",
//   //   bedroom: 2,
//   //   bathroom: 3,
//   //   sqm: 0.0,
//   //   route: "pentHouse",
//   // },

//   // {
//   //   id: 8,
//   //   image: "/Images/home8.jpg",
//   //   text: "Apprtments",
//   //   type: "rent",
//   //   name: "Lemi kura Appartment",
//   //   price: "20000",
//   //   location: "Lemi fiyel bet ,Addis Ababa",
//   //   bedroom: 2,
//   //   bathroom: 3,
//   //   sqm: 0.0,
//   //   route: "pentHouse",
//   // },
//   // {
//   //   id: 7,
//   //   image: "/Images/home7.jpg",
//   //   text: "Apprtments",
//   //   type: "rent",
//   //   name: "Lemi kura Appartment",
//   //   price: "20000",
//   //   location: "Lemi fiyel bet ,Addis Ababa",
//   //   bedroom: 2,
//   //   bathroom: 3,
//   //   sqm: 0.0,
//   //   route: "pentHouse",
//   // },
//   // {
//   //   id: 3,
//   //   image: "/Images/home2.jpg",
//   //   text: "Apprtments",
//   //   type: "sale",
//   //   name: "Lemi kura Appartment",
//   //   price: "20000",
//   //   location: "Lemi fiyel bet ,Addis Ababa",
//   //   bedroom: 2,
//   //   bathroom: 3,
//   //   sqm: 0.0,
//   //   route: "pentHouse",
//   // },
//   // {
//   //   id: 4,
//   //   image: "/Images/home4.jpg",
//   //   text: "Apprtments",
//   //   type: "rent",
//   //   name: "Lemi kura Appartment",
//   //   price: "20000",
//   //   location: "Lemi fiyel bet ,Addis Ababa",
//   //   bedroom: 2,
//   //   bathroom: 3,
//   //   sqm: 0.0,
//   //   route: "pentHouse",
//   // },
//   // {
//   //   id: 5,
//   //   image: "/Images/home5.jpg",
//   //   text: "Apprtments",
//   //   type: "sale",
//   //   name: "Lemi kura Appartment",
//   //   price: "20000",
//   //   location: "Lemi fiyel bet ,Addis Ababa",
//   //   bedroom: 2,
//   //   bathroom: 3,
//   //   sqm: 0.0,
//   //   route: "pentHouse",
//   // },
//   // {
//   //   id: 2,
//   //   image: "/Images/home4.jpg",
//   //   text: "Apprtments",
//   //   type: "Sale",
//   //   name: "Lemi kura Appartment",
//   //   price: "20000",
//   //   location: "Lemi fiyel bet ,Addis Ababa",
//   //   bedroom: 2,
//   //   bathroom: 3,
//   //   sqm: 0.0,
//   //   route: "pentHouse",
//   // },
//   // {
//   //   id: 6,
//   //   image: "/Images/home2.jpg",
//   //   text: "Apprtments",
//   //   type: "rent",
//   //   name: "Lemi kura Appartment",
//   //   price: "20000",
//   //   location: "Lemi fiyel bet ,Addis Ababa",
//   //   bedroom: 2,
//   //   bathroom: 3,
//   //   sqm: 0.0,
//   //   route: "pentHouse",
//   // },
//   // {
//   //   id: 5,
//   //   image: "/Images/home3.jpg",
//   //   text: "Apprtments",
//   //   type: "sale",
//   //   name: "Lemi kura Appartment",
//   //   price: "20000",
//   //   location: "Lemi fiyel bet ,Addis Ababa",
//   //   bedroom: 2,
//   //   bathroom: 3,
//   //   sqm: 0.0,
//   //   route: "pentHouse",
//   // },
// ];

const HomeCard = ({ cards }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.usersReducer);
  const toogle = useSelector((state) => state.tooglesReducer);

  const handleSavedMessage = (homeId) => {
    console.log("handle saved message", homeId);
    // event.stopPropagation();

    console.log("saved");
  };
  const handleRedirectLogin = (event) => {
    // event.stopPropagation();
    dispatch(updateLogin(!toogle.login));
  };
  const handleClickCard = (cardId) => {
    navigate("/detail/" + `${cardId}`);
  };
  const theme = useTheme();
  const themes = theme.palette;
  console.log("hello all usr", toogle);
  return (
    <Box
      className="Homes"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "16px",
        // marginTop: "80px",
        height: "auto",
        maxWidth: "100%",
        padding: "0 16px",
        ml: {
          lg: "0px",
          md: "5%",
          sm: "5%",
          xs: "5%",
        },
        mr: {
          lg: "0px",
          md: "5%",
          sm: "5%",
          xs: "5%",
        },
      }}
    >
      {cards &&
        cards.map((card, index) => (
          <Card
            // component={Link}
            // href={"/detail/" + `${card.id}`}
            onClick={() => handleClickCard(card.id)}
            key={card.id}
            sx={{
              flex: "1 0 370px",
              fontFamily: "Roboto",
              maxWidth: {
                lg: "370px",
                mg: "370px",
                sm: "370px",
                xs: "370px",
              },
              position: "relative",
              borderRadius: "10px",
              cursor: "pointer",
              textDecoration: "none",

              ":hover": {
                border: "1px solid green",
                borderColor: themes.green.main,
              },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={card.image}
                alt={card.text}
                sx={{
                  width: "100%",
                  height: {
                    lg: "300px",
                    md: "300px",
                    sm: "250px",
                    xs: "300px",
                  },
                  objectFit: "cover",
                }}
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
                onClick={() => {
                  user.isloggedin
                    ? handleSavedMessage(card.id)
                    : handleRedirectLogin(card.id);
                }}
              >
                <TurnedInIcon sx={{ fontSize: "40px" }} />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
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
            </Typography>
            <Typography
              variant="h6"
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
              For {card.type}
            </Typography>
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Roboto",
                  // fontSize: `${fontSize.medium}`,
                  fontWeight: "bold",
                }}
              >
                {card.name}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 800,
                  color: themes.green.main,
                  mt: "4px",
                }}
              >
                {card.type == "rent" && (
                  <>{formatter.format(card.price)} Birr /Month</>
                )}
                {card.type == "sale" && (
                  <>{formatter.format(card.price)} Birr </>
                )}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  //   fontSize: "15px",
                  display: "flex",
                  alignText: "center",
                  fontWeight: 0,
                  mt: "15px",
                }}
              >
                <LocationOnIcon
                  size="small"
                  sx={{ fontSize: "20px", color: themes.mygrey1.main }}
                />{" "}
                {card.location}
              </Typography>
              <Box
                variant="body1"
                sx={{
                  fontSize: "15px",
                  display: "flex",
                  // alignItem: "center",
                  fontWeight: 0,
                  mt: "15px",
                  gap: "15px",
                }}
              >
                <Box
                  sx={{ fontWeight: 700, display: "flex", alignItem: "center" }}
                >
                  <HotelIcon sx={{ mr: "10px" }} />
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 700,
                      fontFamily: "Roboto",
                    }}
                  >
                    {card.bedroom} beds
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontWeight: 700,
                    fontSize: "15px",
                    fontFamily: "Roboto",
                    display: "flex",
                  }}
                >
                  <img
                    src="/Images/bathroom.jpg"
                    width="23px"
                    height="23px"
                    alt="Small Image"
                    style={{ marginRight: "5px" }}
                  />
                  {card.bathroom} bathrooms
                </Box>
                <Box
                  sx={{
                    fontWeight: 700,
                    fontSize: "15px",
                    fontFamily: "Roboto",
                    display: "flex",
                  }}
                >
                  <img
                    src="/Images/square.jpg"
                    width="23px"
                    height="23px"
                    alt="Small Image"
                    style={{ marginRight: "5px" }}
                  />
                  {card.sqm} sqm
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default HomeCard;
