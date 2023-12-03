import { useState, useEffect, useRef } from "react";
import {
  Button,
  ButtonGroup,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  Box,
  Stack,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/actions/HomesAction";
import { setBuyrent } from "../../store/actions/ToogleAction";
const images = ["home3.jpg", "home4.jpg", "home5.jpg", "newHome.png"];

const HomeCover = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const themes = theme.palette;

  const search = useSelector((home) => home.homesReducer.search);
  const toogleBuyRent = useSelector((toogle) => toogle.tooglesReducer.buyRent);

  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const [isTypingStopped, setIsTypingStopped] = useState(false);
  const handleInputChange = (event) => {
    if (event.target.value) {
      setIsLabelVisible(false);
    } else {
      setIsLabelVisible(true);
    }
    dispatch(setSearch(event.target.value));
  };
  const handleSubmitSearch = (event) => {
    // navigate(`/search?query=${home.search}`);
  };

  const handleFocus = () => {
    setIsTypingStopped(true);
  };

  const handleBlur = () => {
    setIsTypingStopped(false);
  };
  const [currentImage, setCurrentImage] = useState(1);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
  };

  const handleDotClick = (event, value) => {
    setCurrentImage(value - 1);
  };
  const backgroundImageUrl = toogleBuyRent === "buy" ? 0 : 3;
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevImage) =>
  //       prevImage === images.length - 1 ? 0 : prevImage + 1
  //     );
  //   }, 100000); // Change the interval duration here (in milliseconds)

  //   return () => clearInterval(interval);
  // }, [images.length]);
  return (
    <>
      <Box
        style={{
          backgroundImage: `url('/Images/${images[backgroundImageUrl]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            mb: "20px",
            pl: "15px",
            pr: "15px",
            pt: "5px",
            pb: "5px",
            //padding: "15px",
            borderRadius: "0.9rem",
            [theme.breakpoints.down("sm")]: {
              padding: "0.5rem",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: themes.white.main,

              // fontSize: "3rem",
              textAlign: "center",
              fontWeight: 800,
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
              },
            }}
          >
            {toogleBuyRent === "buy"
              ? "Get Your Dream Home"
              : "Find Your Perfect Rental"}
          </Typography>
        </Box>
        <Box
          className="BuyandRent"
          sx={{
            marginTop: "70px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            borderRadius: "0.5rem",
            display: "inline-flex",
            width: { xs: "45%", sm: "35%", md: "20%", lg: "12%" },
            border: "none",
            mr: "24%",
          }}
        >
          <ButtonGroup
            variant="contained"
            sx={{ justifyContent: "space-between", width: "100%" }}
          >
            <Button
              onClick={() => dispatch(setBuyrent("buy"))}
              sx={{
                backgroundColor:
                  toogleBuyRent === "buy" ? themes.white.main : "transparent",
                color:
                  toogleBuyRent === "buy"
                    ? themes.green.main
                    : themes.white.main,
                borderRadius: "0.5rem",
                fontWeight: 800,

                "&:hover": {
                  backgroundColor: themes.white.main,
                  color: themes.green.main,
                  cursor: "pointer",
                },
              }}
            >
              Buy
            </Button>
            <Button
              onClick={() => dispatch(setBuyrent("rent"))}
              sx={{
                backgroundColor:
                  toogleBuyRent === "rent" ? themes.white.main : "transparent",
                color:
                  toogleBuyRent === "rent"
                    ? themes.green.main
                    : themes.white.main,
                borderRadius: "0.5rem",
                fontWeight: 800,

                "&:hover": {
                  backgroundColor: themes.white.main,
                  color: themes.green.main,
                  cursor: "pointer",
                },
              }}
            >
              Rent
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            marginTop: "20px",
            borderRadius: "0.5rem",
            display: "inline-flex",
            height: "50px",
            width: { xs: "80%", sm: "70%", md: "60%", lg: "40%" },
          }}
        >
          <TextField
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            sx={{
              backgroundColor: theme.palette.white.main,
              borderRadius: "0.5rem",
              height: "100%",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem",
                borderColor: theme.palette.white.main,
                color: theme.palette.black.main,
              },
            }}
            // variant="outlined"
            InputLabelProps={{
              sx: {
                color: `${
                  isLabelVisible
                    ? theme.palette.grey.main
                    : theme.palette.grey.main
                }`,
                marginTop: {
                  xs: "2px",
                  sm: "0px",
                },
                fontSize: {
                  lg: "15px",
                  md: "13px",
                  sm: "12px",
                  xs: "8.5px",
                },
                position: "absolute",
                left: "20px",
              },
              shrink: false,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    // component={Link}
                    href={`/search?query=${search}`}
                    sx={{ color: theme.palette.green.main }}
                    onClick={handleSubmitSearch}
                  >
                    <SearchIcon
                      sx={{
                        color: theme.palette.mygrey2.main,
                        fontSize: {
                          xs: "18px",
                          sm: "30px",
                          md: "30px",
                          lg: "30px",
                        },
                      }}
                    />
                  </IconButton>

                  <IconButton sx={{ color: theme.palette.green.main }}>
                    <Link href="/homes">
                      <Tooltip title={"Advaced Search"}>
                        <TuneIcon
                          sx={{
                            color: theme.palette.green.main,
                            fontSize: {
                              xs: "18px",
                              sm: "30px",
                              md: "30px",
                              lg: "30px",
                            },
                          }}
                        />
                      </Tooltip>
                    </Link>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            // label={
            //   isLabelVisible && (
            //     <Typography
            //       // variant="h6"
            //       // sx={{
            //       //   fontSize: "4vw",
            //       //   "@media (min-width: 768px)": {
            //       //     fontSize: "2vw",
            //       //   },
            //       //   "@media (min-width: 1024px)": {
            //       //     fontSize: "1.5vw",
            //       //   },
            //       // }}
            //       sx={{
            //         display: "flex",
            //         textAlign: "left",
            //         // fontSize: {
            //         //   lg: "100%",
            //         //   md: "80%",
            //         //   sm: "80%",
            //         //   // xs: "200%",
            //         //   xxs: "60%",
            //         //   xxxs: "50%",
            //         // },
            //         fontSize: xxxs ? "5px" : xxs ? "7px" : xs ? "10px" : "10px",
            //       }}
            //     >
            //       Search by sub city, Address name, property Type
            //     </Typography>
            //   )
            // }
            placeholder=" Search by sub city, Address name, property Type"
          />
        </Box>
        {/* <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "#fff",
            fontSize: "24px",
            padding: "8px",
            cursor: "pointer",
          }}
          onClick={handlePrevImage}
        >
          &#8249;
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "#fff",
            fontSize: "24px",
            padding: "8px",
            cursor: "pointer",
          }}
          onClick={handleNextImage}
        >
          &#8250;
        </div> */}
        <Box sx={{ height: "0px" }}></Box>
      </Box>
      {/* <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        sx={{
          mt: "30px",
          textAlign: "center",

          ml: "50%",

          transform: "translateX(-50%)",
        }}
      >
        {" "}
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor:
                index === currentImage ? themes.green.main : "rgba(0,0,0,0.5)",
              margin: "0 3px",
              cursor: "pointer",
            }}
            onClick={(event) => handleDotClick(event, index + 1)}
          />
        ))}
      </Stack> */}
    </>
  );
};
export default HomeCover;
