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

const HomeCover = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const themes = theme.palette;
  const [images, setImages] = useState([
    {
      url: "/Images/home3.jpg",
    },
    {
      url: "/Images/newHome.png",
    },
  ]);
  // const [imageIndex, setImageIndex] = useState(0);

  const [imageIndex, setImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setImageIndex(index);
    props.onImageIndexChange(index);
  };

  const search = useSelector((home) => home.homesReducer.search);
  const toogleBuyRent = useSelector((toogle) => toogle.tooglesReducer.buyRent);

  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const handleInputChange = (event) => {
    if (event.target.value) {
      setIsLabelVisible(false);
    } else {
      setIsLabelVisible(true);
    }
    dispatch(setSearch(event.target.value));
  };

  const handleFocus = () => {
    setIsTypingStopped(true);
  };

  const handleBlur = () => {
    setIsTypingStopped(false);
  };

  return (
    <Box
      style={{
        backgroundImage: `url('${images[imageIndex].url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: "80vh",
        width: "100%",

        maxHeight: {
          lg: "80vh",
          xs: "50vh",
        },
        paddingTop: "10%",
        paddingBottom: "10%",

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
          {imageIndex == 0 ? "Get Your Dream Home" : "Find Your Perfect Rental"}
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
            onClick={() => handleImageChange(0)}
            sx={{
              backgroundColor:
                imageIndex == 0 ? themes.white.main : "transparent",
              color: imageIndex == 0 ? themes.green.main : themes.white.main,
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
            onClick={() => handleImageChange(1)}
            sx={{
              backgroundColor:
                imageIndex == 1 ? themes.white.main : "transparent",
              color: imageIndex == 1 ? themes.green.main : themes.white.main,
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
          placeholder=" Search by sub city, Address name, property Type"
        />
      </Box>
    </Box>
  );
};
export default HomeCover;
