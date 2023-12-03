import { useState, useEffect } from "react";
import {
  Typography,
  useMediaQuery,
  Box,
  Pagination,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { toast } from "react-toastify";
import { useTheme } from "@mui/material/styles";

//icons
import CircularProgress from "@mui/material/CircularProgress";

///components
import ProductCard from "../Components/Home/ProductCard";
import Footer from "../Layouts/Footer";
import Filter from "../Components/Categories/Filter";
import { useLocation } from "react-router-dom";

// import { updateLoginStateAction } from "../../store/actions/UserAction";
import { setHomes } from "../store/actions/HomesAction";
// import { updateLogin } from "../../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";

import api from "../Services/index";

const AdvancedFilter = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const themes = theme.palette;
  const locations = useLocation();

  const searchParams = new URLSearchParams(locations.search);
  let query = searchParams.get("query");
  const [loading, setLoading] = useState(true);
  const homes = useSelector((homes) => homes.homesReducer.homes);
  const filter = useSelector((homes) => homes.homesReducer.filters);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalHomes, setTotalHomes] = useState(0);
  const limit = 10;
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);
  useEffect(() => {
    setLoading(true);
    const fetchFilter = () => {
      try {
        api
          .get(
            `/unauth/house/filter?offset=${currentPage}&houseType=${filter.houseType}&bedrooms=${filter.bedrooms}&bathrooms=${filter.bathrooms}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}&minArea=${filter.minArea}&maxArea=${filter.maxArea}&subcity=${filter.subcity}&furnishingType=${filter.furnishingType}&serviceType=${filter.serviceType}`,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            // console.log("response", res.data);
            dispatch(setHomes(res.data.houses));

            const total = res.data.total;
            setTotalHomes(total);
            setTotalPages(Math.ceil(total / limit));
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
    fetchFilter();
  }, [currentPage, filter]);

  function handlePageChange(event, newPage) {
    setCurrentPage(newPage);
  }

  return (
    <>
      <Box
        sx={{
          ml: "5%",
          mr: "5%",
          marginTop: "80px",
          height: "auto",
        }}
      >
        {" "}
        <Typography
          variant="h4"
          sx={{
            display: {
              lg: "flex",
              sm: "flex",
              md: "flex",
              xs: "none",
            },
            mt: "30px",
            textAlign: "center",
            fontWeight: 700,
            mb: "20px",

            justifyContent: "center",
          }}
        >
          Advaced Filters
        </Typography>
        <Filter />
        <Typography
          variant="h4"
          sx={{
            display: {
              lg: "flex",
              sm: "flex",
              md: "flex",
              xs: "flex",
            },
            mt: "30px",
            textAlign: "center",
            fontWeight: 700,
            mb: "30px",
          }}
        >
          Filtered Results
        </Typography>
        <Box sx={{ textAlign: "center", justifyContent: "center" }}>
          {loading && <CircularProgress />}
        </Box>
        {!loading && (
          <Grid container spacing={2}>
            {homes.map((home) => (
              <Grid key={home.id} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard home={home} />
              </Grid>
            ))}
          </Grid>
        )}
        {!loading && homes.length === 0 && (
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontFamily: "Roboto" }}
          >
            No Filtred home
          </Typography>
        )}
        <Pagination
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "40px",
            mb: "10px",
          }}
          count={Math.ceil(totalHomes / limit)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Box>
      <Footer />
    </>
  );
};
export default AdvancedFilter;
