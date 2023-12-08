import { useState, useEffect, useReducer, useSearchParams } from "react";
import {
  Typography,
  Box,
  Button,
  Pagination,
  Divider,
  Container,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import ProductCard from "../../Components/Home/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../../Layouts/Footer";
import SliderComponent from "../../Components/Realestates/SliderComponent";
/////
import { useSelector, useDispatch } from "react-redux";

///components
import FilterVertical from "../../Components/Categories/FilterVertical";
import VisibleFilter from "../../Components/Categories/VisibleFilter";
import { CommonTypography } from "../../Components/CommonComponent/index";
import api from "../../Services/index";

const images = [
  {
    url: "/Realestates/ayat/1.jpg",
    title: "Image 1",
    description: "",
  },

  {
    url: "/Realestates/ayat/3.jpg",
    title: "Image 3",
    description: "Realestates for sale with 50% off",
  },
  {
    url: "/Realestates/ayat/4.jpg",
    title: "Image 3",
    description: "",
  },
];

const AyatRealestate = () => {
  const theme = useTheme();
  const themes = theme.palette;
  const [loading, setLoading] = useState(true);
  ////store
  const dispatch = useDispatch();
  const [homes, setHomes] = useState([]);
  const filter = useSelector((homes) => homes.homesReducer.filters);

  ///pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalHomes, setTotalHomes] = useState(0);
  const limit = 10;

  ////get earch query

  useEffect(() => {
    setLoading(true);
    const fetchFilter = () => {
      try {
        api
          .get(`/unauth/house/filter?offset=${currentPage}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("res", res);
            setHomes(res.data.houses);
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

  function handlePageChange(event, newPage) {
    setCurrentPage(newPage);
  }

  return (
    <>
      <Box
        sx={{
          mt: {
            sm: "65px",
            xs: "58px",
          },
        }}
      >
        <SliderComponent images={images} />
      </Box>
      {/* <Container sx={{ textAlign: "left", mb: "30px" }}> */}
      <Box sx={{ ml: "5%", mr: "5%" }}>
        <CommonTypography label=" Ayat Realestates" />

        <Divider />
        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
              sm: "none",
              xs: "flex",
            },
            mt: "10px",

            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FilterVertical />
        </Box>
        <VisibleFilter />
        <Box display="flex" sx={{ mt: "20px" }}>
          <Box
            sx={{
              display: {
                lg: "flex",
                md: "flex",
                sm: "flex",
                xs: "none",
              },
            }}
          >
            <FilterVertical />
          </Box>

          <Box
            className="mybox"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              ml: {
                sm: "20px",
              },
              width: "100%",
            }}
          >
            {loading && <CircularProgress />}
            {/* {!loading && <ProductCard home={homes} />} */}

            <Grid container spacing={2}>
              {!loading &&
                homes.map((home) => (
                  <Grid key={home.id} item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard home={home} />
                  </Grid>
                ))}
            </Grid>
            {!loading && homes.length === 0 && (
              <Typography
                variant="h4"
                sx={{
                  // textAlign: "center",
                  height: "50px",
                  fontFamily: "Roboto",
                }}
              >
                No Filtred home
              </Typography>
            )}
            <Box sx={{ mt: "30px", mb: "30px" }}>
              <Pagination
                count={Math.ceil(totalHomes / limit)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* </Container> */}
      <Footer />
    </>
  );
};
export default AyatRealestate;
