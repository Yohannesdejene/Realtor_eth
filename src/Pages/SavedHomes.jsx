import { useState, useEffect, useReducer, useSearchParams } from "react";
import { Typography, Box, Button, Pagination, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import HomeCardSaved from "../Components/Home/HomeCardSaved";
import ProductCard from "../Components/Home/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../Layouts/Footer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSavedHomes } from "../store/actions/HomesAction";

import api from "../Services/index";
const SavedHomes = () => {
  const theme = useTheme();
  const themes = theme.palette;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const homes = useSelector((homes) => homes.homesReducer.savedHomes);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHomes, setTotalHomes] = useState(0);
  const limit = 10;
  // console.log("homes", homes.house);
  useEffect(() => {
    setLoading(true);
    const saveHome = () => {
      try {
        api
          .get(`/house/saved?offset=${currentPage}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("response", res);
            let newarray = [];
            for (let a = 0; a < res.data.savedHouses.length; a++) {
              newarray.push(res.data.savedHouses[a].house);
            }
            console.log("newarray", newarray);
            dispatch(setSavedHomes(newarray));
            const total = res.data.total;
            setTotalHomes(total);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
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
          });
      } catch (err) {
        console.log(err);
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
    saveHome();
  }, [currentPage]);

  function handlePageChange(event, newPage) {
    setCurrentPage(newPage);
  }

  return (
    <>
      <Box
        sx={{
          ml: "5%",
          mr: "5%",
          mt: "100px",

          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Roboto",
            fontWeight: "bold",

            mb: "10px",
            fontSize: "22px",
            ml: {
              xs: "30px",
            },
            mb: "30px",
          }}
        >
          Your Saved Homes
        </Typography>

        {/* <Box sx={{ mt: "10px", mb: "30px" }}>
          <Filter />
        </Box> */}
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

        {!loading && <HomeCardSaved cards={homes} />}
        {homes && !loading && homes.length === 0 && (
          <Typography
            variant="h4"
            sx={{ textAlign: "center", height: "50px", fontFamily: "Roboto" }}
          >
            No Home Saved
          </Typography>
        )}

        <Pagination
          sx={{ display: "flex", justifyContent: "center", mt: "40px" }}
          count={Math.ceil(totalHomes / limit)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />

        {/* <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button> */}
      </Box>
      <Footer />
    </>
  );
};
export default SavedHomes;
