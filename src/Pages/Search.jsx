import { useState, useEffect, useReducer, useSearchParams } from "react";
import {
  Typography,
  useMediaQuery,
  Box,
  Divider,
  Pagination,
  Button,
  Link,
  TextField,
  IconButton,
  InputAdornment,
  Stack,
  Grid,
  Tooltip,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

//icons
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

///componenets
import ProductCard from "../Components/Home/ProductCard";
import Footer from "../Layouts/Footer";

////sores

import { setHomes, setSearch } from "../store/actions/HomesAction";

import api from "../Services/index";

const Search = () => {
  const [loadings, setLoadings] = useState(true);
  const theme = useTheme();
  const themes = theme.palette;
  const dispatch = useDispatch();

  ////
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalHomes, setTotalHomes] = useState(0);
  const limit = 10;

  function handlePageChange(event, newPage) {
    setCurrentPage(newPage);
  }

  ///get the quesry
  const locations = useLocation();
  const searchParams = new URLSearchParams(locations.search);
  let query = searchParams.get("query");

  const filter = useSelector((home) => home.homesReducer.filters);
  const homes = useSelector((home) => home.homesReducer.homes);
  const search = useSelector((home) => home.homesReducer.search);

  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const [isTypingStopped, setIsTypingStopped] = useState(false);
  const handleInputChange = (event) => {
    dispatch(setSearch(event.target.value));
  };
  const handleSubmitSearch = (event) => {
    console.log("total homes", totalHomes);
    setCurrentPage(1);
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set("query", search);
    const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
    // navigate(`/search?query=${home.search}`);
    // fetchSearch();
    try {
      setLoadings(true);
      api
        .get(`/house/search?offset=${currentPage}&search=${search}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("response", res);
          dispatch(setHomes(res.data.searchresults));
          setTotalHomes(res.data.total);
          setLoadings(false);
        })
        .catch((err) => {
          console.log(err);
          setLoadings(false);
          toast.error(
            "Can't search home .check your internet connection",
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
        });
    } catch (err) {
      setLoadings(false);
      console.log(err);
      toast.error(
        "Can't search home .check your internet connection",
        {
          autoClose: 3000,
        },
        {
          backgroundColor: themes.green.main,
          color: themes.white.main,
        }
      );
    }
  };

  const handleFocus = () => {
    setIsTypingStopped(true);
  };

  const handleBlur = () => {
    setIsTypingStopped(false);
  };

  useEffect(() => {
    dispatch(setSearch(query));
    const fetchSearch = () => {
      setLoadings(true);
      try {
        api
          .get(`/unauth/house/search?offset=${currentPage}&search=${search}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("response", res.data.searchresults);
            dispatch(setHomes(res.data.searchresults));
            setTotalHomes(res.data.total);
            setLoadings(false);
          })
          .catch((err) => {
            console.log(err);
            setLoadings(false);
            toast.error(
              "Can't search home .check your internet connection",
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
          });
      } catch (err) {
        setLoadings(false);
        console.log(err);
        toast.error(
          "Can't search home .check your internet connection",
          {
            autoClose: 3000,
          },
          {
            backgroundColor: themes.green.main,
            color: themes.white.main,
          }
        );
      }
    };
    fetchSearch();
  }, [currentPage]);

  return (
    <>
      <Box
        sx={{
          height: "auto",
          ml: "5%",
          mr: "5%",
          marginTop: "80px",
          dsiplay: "flex",
        }}
      >
        {" "}
        <Box
          sx={{
            borderRadius: "0.5rem",
            // display: "inline-flex",
            height: "50px",
            textAlign: "center",

            // width: { xs: "80%", sm: "70%", md: "60%", lg: "40%" },
          }}
        >
          <TextField
            value={search}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            sx={{
              // backgroundColor: theme.palette.white.main,

              borderRadius: "0.5rem",
              height: "100%",
              width: {
                xs: "100%",
                sm: "80%",
                md: "60%",
                lg: "50%",
              },
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
                    sx={{ color: themes.myblack.main }}
                    onClick={handleSubmitSearch}
                  >
                    <SearchIcon
                      sx={{
                        color: themes.myblack.main,
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
              style: { color: themes.myblack.main },
            }}
            placeholder=" Search by sub city, Address name, property Type"
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Roboto",
            mt: "20px",
            mb: "10px",
            ml: {
              xs: "30px",
              sm: "0px",
            },
          }}
        >
          Results for "{search}"
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          {!loadings && homes.length === 0 && (
            <>
              <Typography variant="h5" marginTop="60px" marginBottom="50px">
                No Search Result
              </Typography>
              <Box
                component={Link}
                href="/"
                sx={{
                  textTransform: "none",
                  textDecoration: "none",
                  fontSize: "16px",
                  mt: "50px",
                  // textAlign: "center",
                }}
              >
                Back to home
              </Box>
            </>
          )}
        </Box>
        <Box
          sx={{
            mt: "40px",
            mb: "50px",
          }}
        >
          {loadings ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            <>
              {!loadings && (
                <Grid container spacing={2}>
                  {homes.map((home) => (
                    <Grid key={home.id} item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard home={home} />
                    </Grid>
                  ))}
                </Grid>
              )}

              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "50px" }}
              >
                <Pagination
                  // sx={{ display: "flex", justifyContent: "center", mt: "40px" }}
                  count={Math.ceil(totalHomes / limit)}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};
export default Search;
