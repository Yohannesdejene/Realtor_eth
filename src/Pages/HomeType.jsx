import { useState, useEffect, useReducer, useSearchParams } from "react";
import { Typography, Box, Button, Pagination, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import HomeCardSmall from "../Components/Home/HomeCardSmall";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../Layouts/Footer";

/////
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setHomes } from "../store/actions/HomesAction";
import { setServiceTypeFilter } from "../store/actions/HomesAction";

///components
import FilterWithoutHomeType from "../Components/Categories/FilterWithoutHomeType";

import api from "../Services/index";
const HomeType = () => {
  const homeType = useParams();
  const theme = useTheme();
  const themes = theme.palette;
  const [loading, setLoading] = useState(true);
  ////store
  const dispatch = useDispatch();
  const homes = useSelector((homes) => homes.homesReducer.homes);
  const filter = useSelector((homes) => homes.homesReducer.filters);

  ///pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalHomes, setTotalHomes] = useState(0);
  const limit = 10;

  ////get earch query
  const locations = useLocation();
  const searchParams = new URLSearchParams(locations.search);
  let query = searchParams.get("serviceType");

  useEffect(() => {
    setLoading(true);
    const fetchFilter = () => {
      try {
        api
          .get(
            `/unauth/house/filter?offset=${currentPage}&houseType=${homeType.homeType}&bedrooms=${filter.bedrooms}&bathrooms=${filter.bathrooms}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}&minArea=${filter.minArea}&maxArea=${filter.maxArea}&subcity=${filter.subcity}&furnishingType=${filter.furnishingType}&serviceType=${filter.serviceType}`,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("res", res);
            dispatch(setHomes(res.data.houses));

            const total = res.data.total;
            setTotalHomes(total);
            setTotalPages(Math.ceil(total / limit));
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

    fetchFilter();
  }, [currentPage, filter]);

  useEffect(() => {
    if (
      query !== "undefiend" &&
      query !== null &&
      query !== "" &&
      (query === "rent" || query === "buy")
    ) {
      if (query === "buy") {
        dispatch(setServiceTypeFilter("sale"));
      } else if (query === "rent") {
        dispatch(setServiceTypeFilter("Rent"));
      }
    }
  }, []);

  function handlePageChange(event, newPage) {
    setCurrentPage(newPage);
  }
  const disp = (data) => {
    let sum = "";
    for (let a = 1; a < data.length; a++) {
      sum += data[a];
    }
    return sum;
  };
  return (
    <>
      <Box
        sx={{
          marginLeft: {
            sm: "5%",
            xs: "2%",
          },
          marginRight: {
            sm: "5%",
            xs: "2%",
          },
          mt: "100px",

          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          variant="h4"
          sx={{
            fontFamily: "Roboto",
            fontWeight: "bold",

            height: "50px",
            fontSize: "22px",

            ml: {
              xs: "30px",
            },
            mb: "10px",
          }}
        >
          {homeType.homeType[0].toLocaleUpperCase()}
          {disp(homeType.homeType)}s
        </Box>
        <Divider sx={{ mb: "10px", ml: "5px", mr: "5px" }} />

        <Box sx={{ mt: "10px", mb: "30px" }}>
          <FilterWithoutHomeType />
        </Box>
        <Divider sx={{ mb: "10px", ml: "5px", mr: "5px" }} />

        <Box sx={{ textAlign: "center", justifyContent: "center" }}>
          {loading && <CircularProgress />}
        </Box>
        {!loading && <HomeCardSmall cards={homes} />}
        {!loading && homes.length === 0 && (
          <Typography
            variant="h4"
            sx={{ textAlign: "center", height: "50px", fontFamily: "Roboto" }}
          >
            No Filtred home
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
export default HomeType;
