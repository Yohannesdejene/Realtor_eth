import { useState, useEffect, useRef } from "react";
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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { updateLogin } from "../../store/actions/ToogleAction";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const cards = [
  {
    id: 1,
    image: "/Images/appartment.jpg",
    text: "Appartments",
    type: "rent",
    name: "Lemi kura Appartment",
    price: "20000",
    location: "Lemi fiyel bet ,Addis Ababa",
    bedroom: 2,
    bathroom: 3,
    sqm: 0.0,

    route: "homes/apartment",
  },
  {
    id: 2,
    image: "/Images/condominium.png",
    text: "Condominuim",
    type: "rent",
    name: "Lemi kura Appartment",
    price: "20000",
    location: "Lemi fiyel bet ,Addis Ababa",
    bedroom: 2,
    bathroom: 3,
    sqm: 0.0,
    route: "/homes/condominium",
  },
  {
    id: 4,
    image: "/Images/guesthouse.png",
    text: "Guest House",
    type: "rent",
    name: "Lemi kura Appartment",
    price: "20000",
    location: "Lemi fiyel bet ,Addis Ababa",
    bedroom: 2,
    bathroom: 3,
    sqm: 0.0,
    route: "homes/guesthouse",
  },
  {
    id: 5,
    image: "/Images/penthouse.png",
    text: "Penthouse",
    type: "rent",
    name: "Lemi kura Appartment",
    price: "20000",
    location: "Lemi fiyel bet ,Addis Ababa",
    bedroom: 2,
    bathroom: 3,
    sqm: 0.0,
    route: "homes/penthouse",
  },
  {
    id: 6,
    image: "/Images/rezidential.png",
    text: "Residential",
    type: "rent",
    name: "Lemi kura Appartment",
    price: "20000",
    location: "Lemi fiyel bet ,Addis Ababa",
    bedroom: 2,
    bathroom: 3,
    sqm: 0.0,
    route: "homes/residential",
  },
];
const formatter = new Intl.NumberFormat("en-US");

const SlideHomes = () => {
  const theme = useTheme();
  const themes = theme.palette;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersReducer);

  const handleScroll = (scrollOffset) => {
    const container = boxRef.current;
    if (container) {
      const newPosition = scrollPosition + scrollOffset;
      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);

      const maxScroll = container.scrollWidth - container.clientWidth;
      const isAtBeginning = newPosition === 0;
      const isAtEnd = newPosition >= maxScroll;

      // Disable arrows when reaching the beginning or end
      const leftArrowDisabled = isAtBeginning;
      const rightArrowDisabled = isAtEnd;

      // Update the state to disable/enable the arrows
      setLeftArrowDisabled(leftArrowDisabled);
      setRightArrowDisabled(rightArrowDisabled);
    }
  };
  const numBoxes = 4; // Change the number of advert boxes here
  const boxRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftArrowDisabled, setLeftArrowDisabled] = useState(true);
  const [rightArrowDisabled, setRightArrowDisabled] = useState(false);
  const handleRedirectLogin = (event) => {
    // event.stopPropagation();

    toast.error(
      "Login to filter homes",
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
    dispatch(updateLogin(true));
  };
  const handleClickCard = (route) => {
    navigate(route);
  };
  return (
    <Box
      sx={{
        marginTop: "30px",
        display: "flex",
        overflowX: "hidden",
        maxWidth: "100vw",
        height: "250px",
        position: "relative",
      }}
    >
      <Button
        onClick={() => handleScroll(-300)}
        disabled={leftArrowDisabled}
        sx={{
          position: "absolute",
          left: 0,
          top: "38%",
          transform: "translateY(-50%)",
          color: "#ffffff",
          fontWeight: 900,
          zIndex: 1,
        }}
      >
        <ChevronLeftIcon />
      </Button>

      <Button
        onClick={() => handleScroll(300)}
        disabled={rightArrowDisabled}
        sx={{
          position: "absolute",
          right: 0,
          top: "38%",
          transform: "translateY(-50%)",
          color: "#ffffff",
          fontWeight: 900,
          zIndex: 1,
        }}
      >
        <ChevronRightIcon />
      </Button>

      <Box
        sx={{
          height: "200px",
          display: "flex",
          scrollBehavior: "smooth",
          flex: "1",
          gap: "10px",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        ref={boxRef}
      >
        {cards.map((card, index) => (
          <Card
            key={card.id}
            component={Button}
            onClick={(event) => {
              if (user.isLoggedIn) {
                handleClickCard(card.route);
              } else {
                handleRedirectLogin(card.route);
              }
            }}
            // href={card.route}
            style={{
              textTransform: "none",
              flex: "0 0 300px",
              margin: "0 0px",
              fontFamily: "Roboto",
              textDecoration: "none",
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              image={card.image}
              alt={card.text}
              sx={{ position: "absolute", height: "100%" }}
            />
            <Typography
              variant="h3"
              sx={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                top: "45%",
                left: "30%",
                fontWeight: 900,
                fontSize: "23px",

                color: themes.white.main,
              }}
            >
              {card.text}
            </Typography>

            {/* <CardContent>
              <Typography variant="body1" sx={{ fontSize: "16px" }}>
                {card.name}
              </Typography>
            </CardContent> */}

            {/* <Typography
              variant="caption"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
                borderRadius: "50%",
                padding: "6px",
                fontSize: "16px",
              }}
            >
              108
            </Typography> */}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SlideHomes;
