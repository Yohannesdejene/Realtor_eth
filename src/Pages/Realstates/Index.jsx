import { useState, useEffect, useReducer, useSearchParams } from "react";
import { Typography, Box, Button, Pagination, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import HomeCardMedium from "../../Components/Home/HomeCardMedium";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../../Layouts/Footer";
import HomeCover from "../../Components/Realestates/HomeCover";

/////
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setHomes } from "../../store/actions/HomesAction";
import { setServiceTypeFilter } from "../../store/actions/HomesAction";

///components
import FilterVertical from "../../Components/Categories/FilterVertical";
import VisibleFilter from "../../Components/Categories/VisibleFilter";
import { CommonTypography } from "../../Components/CommonComponent/index";
import api from "../../Services/index";
const index = () => {
  const realestate = useParams();
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
          .get(`/unauth/house/filter?offset=${currentPage}`, {
            withCredentials: true,
          })
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

  return (
    <>
      <Box sx={{ mt: "65px" }}>
        {/* <HomeCover realestate={realestate.realestateName} images={images} /> */}
      </Box>

      <Box
        sx={{
          marginLeft: "2%",
          marginRight: "2%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CommonTypography label=" Ayat Realestate" />

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
            <Box>
              {loading && <CircularProgress />}
              {!loading && <HomeCardMedium cards={homes} />}
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
              <Box sx={{ mt: "30px" }}>
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
      </Box>
      <Footer />
    </>
  );
};
export default index;
