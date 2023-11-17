import { useState, useEffect, useReducer } from "react";
import {
  MenuItem,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import api from "../Services/index";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

const houseType = [
  {
    value: "Any",
    label: "Any",
  },
  {
    value: "residential",
    label: "Residential",
  },
  {
    value: "condominium",
    label: "Condominuim",
  },
  {
    value: "guesthouse",
    label: "Guest House",
  },
  {
    value: "penthouse",
    label: "Penthouse",
  },
];
const serviceType = [
  { value: "Any", label: "Any" },
  { value: "Rent", label: "Rent" },
  { value: "sale", label: "Buy" },
];
const subcity = [
  { value: "Any", label: "Any" },
  { value: "Addis Ketema", label: "Addis Ketema" },
  { value: "Akakik Kalitin", label: "Akakik Kalitin" },
  { value: "Arada", label: "Arada" },
  { value: "Bole", label: "Bole" },
  { value: "Gulele", label: "Gulele" },
  { value: "Kirkos", label: "Kirkos" },
  { value: "Kolfen keranio", label: "Kolfen keranio" },
  { value: "Lideta", label: "Lideta" },
  { value: "NifaS Silk-Lafto", label: "NifaS Silk-Lafto" },
  { value: "Yeka", label: "Yeka" },
  { value: "Lemi Kura", label: "Lemi Kura" },
];
const minArea = [
  {
    value: "Any",
    label: "Any",
  },
  {
    value: 50,
    label: "50 sqm",
  },
  {
    value: 100,
    label: "100 sqm",
  },
  {
    value: 150,
    label: "150 sqm",
  },
  {
    value: 200,
    label: "200 sqm",
  },
  {
    value: 250,
    label: "250 sqm",
  },
  {
    value: 300,
    label: "300 sqm",
  },
  {
    value: 350,
    label: "350 sqm",
  },
  {
    value: 400,
    label: "400 sqm",
  },
  {
    value: 450,
    label: "450 sqm",
  },
  {
    value: 500,
    label: "500 sqm",
  },
  {
    value: 550,
    label: "550 sqm",
  },
  {
    value: 600,
    label: "600 sqm",
  },
  {
    value: 650,
    label: "650 sqm",
  },
  {
    value: 700,
    label: "700 sqm",
  },
  {
    value: 750,
    label: "750 sqm",
  },
  {
    value: 800,
    label: "800 sqm",
  },
  {
    value: 850,
    label: "850 sqm",
  },
  {
    value: 900,
    label: "900 sqm",
  },
  {
    value: 950,
    label: "950 sqm",
  },
  {
    value: 1000,
    label: "1000 sqm",
  },
];
const maxArea = [
  {
    value: "Any",
    label: "Any",
  },
  {
    value: 50,
    label: "50 sqm",
  },
  {
    value: 100,
    label: "100 sqm",
  },
  {
    value: 150,
    label: "150 sqm",
  },
  {
    value: 200,
    label: "200 sqm",
  },
  {
    value: 250,
    label: "250 sqm",
  },
  {
    value: 300,
    label: "300 sqm",
  },
  {
    value: 350,
    label: "350 sqm",
  },
  {
    value: 400,
    label: "400 sqm",
  },
  {
    value: 450,
    label: "450 sqm",
  },
  {
    value: 500,
    label: "500 sqm",
  },
  {
    value: 550,
    label: "550 sqm",
  },
  {
    value: 600,
    label: "600 sqm",
  },
  {
    value: 650,
    label: "650 sqm",
  },
  {
    value: 700,
    label: "700 sqm",
  },
  {
    value: 750,
    label: "750 sqm",
  },
  {
    value: 800,
    label: "800 sqm",
  },
  {
    value: 850,
    label: "850 sqm",
  },
  {
    value: 900,
    label: "900 sqm",
  },
  {
    value: 950,
    label: "950 sqm",
  },
  {
    value: 1000,
    label: "1000 sqm",
  },
];
const furnishingType = [
  {
    value: "Any",
    label: "Any",
  },
  {
    value: true,
    label: "Furnished",
  },
  {
    value: false,
    label: "Not Furnished",
  },
];
const bedrooms = [
  {
    value: "Any",
    label: "Any",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },

  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "10",
  },
];
const bathrooms = [
  {
    value: "Any",
    label: "Any",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
  { value: 8, label: "8" },

  {
    value: 9,
    label: "9",
  },
  {
    value: 10,
    label: "10",
  },
];

const initialState = {
  serviceType: "Rent",
  subcity: [],
  houseType: [],
  bathrooms: 1,
  bedrooms: 1,
  minArea: 50,
  maxArea: 50,
  furnishingType: "Any",
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return {
        ...state,
        serviceType: action.serviceType,
      };
    case "SELECT_LOCATION":
      return {
        ...state,
        subcity: action.subcity,
      };
    case "SELECT_PROPERTY_TYPE":
      return {
        ...state,
        houseType: action.houseType,
      };
    case "SELECT_BEDROOM":
      return {
        ...state,
        bedrooms: action.bedrooms,
      };
    case "SELECT_BATHROOM":
      return {
        ...state,
        bathroom: action.bathroom,
      };
    case "SELECT_FURNISHED":
      return {
        ...state,
        furnishingType: action.furnishingType,
      };
    case "SELECT_MINAREA":
      return {
        ...state,
        minArea: action.minArea,
      };
    case "SELECT_MAXAREA":
      return {
        ...state,
        maxArea: action.maxArea,
      };

    default:
      return state;
  }
}

const RequestForm = (props) => {
  const theme = useTheme();
  const themes = theme.palette;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  console.log("state", state);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("state", state);
    setLoading(true);
    try {
      api
        .get(
          `/house/request?houseType=${state.homeType}&bedrooms=${state.bedrooms}&bathrooms=${state.bathrooms}&minPrice=${state.minPrice}&maxPrice=${state.maxPrice}&minArea=${state.minArea}&maxArea=${state.maxArea}&subcity=${state.subcity}&furnishingType=${state.furnishingType}&serviceType=${state.serviceType}`,
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          setLoading(false);
          console.log("the data", response.data);
          toast.success(
            "Your request submitted ,We will contact you shortly!",

            {
              // Set the background color
              backgroundColor: themes.green.main,
              // Set the text color
              color: themes.white.main,
            }
          );
        })
        .catch((error) => {
          setLoading(false);
          toast.error(
            "Request not submitted check your internet connection!",

            {
              // Set the background color
              backgroundColor: themes.green.main,
              // Set the text color
              color: themes.white.main,
            }
          );
          console.error(error);
        });
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Request not submitted check your internet connection!", {
        // Set the background color
        backgroundColor: themes.green.main,
        // Set the text color
        color: themes.white.main,
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px",
        marginLeft: "30px",
        marginRight: "30px",
        height: "100vh",
        zIndex: 0,
      }}
    >
      {" "}
      <div>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Roboto",
            // fontSize: `${fontSize.xbig}`,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "0px",
            color: themes.mygrey1.main,
          }}
        >
          Request Property
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Roboto",
            textAlign: "center",
            color: themes.mygrey1.main,
            marginTop: "10px",
            mb: "25px",
          }}
        >
          Fill out the Following from and we will find your next home
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="category-label">Category </InputLabel>
              <Select
                // multiple
                required
                labelId="category"
                id="category"
                style={{
                  maxWidth: "500px",

                  // maxHeight: "50px",
                  borderRadius: "20px",
                }}
                value={state.serviceType}
                // onChange={handleCategory}
                onChange={(e) =>
                  dispatch({
                    type: "SELECT_CATEGORY",
                    serviceType: e.target.value,
                  })
                }
              >
                {serviceType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ marginTop: "15px" }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="location-label">
                Subcity (select as many)
              </InputLabel>
              <Select
                multiple
                required
                labelId="locations"
                id="select as many subcity as you want"
                style={{
                  maxWidth: "500px",

                  // maxHeight: "50px",
                  borderRadius: "20px",
                }}
                value={state.subcity}
                // onChange={handleLocation}
                onChange={(e) =>
                  dispatch({
                    type: "SELECT_LOCATION",
                    subcity: e.target.value,
                  })
                }
                renderValue={(selected) => (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {selected.map((value) => (
                      <div key={value} style={{ margin: "2px" }}>
                        {subcity.find((option) => option.value === value).label}
                        ,
                      </div>
                    ))}
                  </div>
                )}
              >
                {subcity.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ marginTop: "15px" }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="location-label">
                House Type(select as many)
              </InputLabel>
              <Select
                multiple
                required
                labelId="property"
                id="select as many locations as you want"
                style={{
                  maxWidth: "500px",

                  // maxHeight: "50px",
                  borderRadius: "20px",
                }}
                value={state.houseType}
                // onChange={handlePropertyType}
                onChange={(e) =>
                  dispatch({
                    type: "SELECT_PROPERTY_TYPE",
                    houseType: e.target.value,
                  })
                }
                renderValue={(selected) => (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {selected.map((value) => (
                      <div key={value} style={{ margin: "2px" }}>
                        {
                          houseType.find((option) => option.value === value)
                            .label
                        }
                        ,
                      </div>
                    ))}
                  </div>
                )}
              >
                {houseType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ marginTop: "15px" }}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="furnished-label">Funishing </InputLabel>
              <Select
                labelId="furnished"
                id="furnished"
                style={{
                  maxWidth: "500px",

                  // maxHeight: "50px",
                  borderRadius: "20px",
                }}
                value={state.furnishingType}
                onChange={(e) =>
                  dispatch({
                    type: "SELECT_FURNISHED",
                    furnishingType: e.target.value,
                  })
                }
                // renderValue={(selected) => (
                //   <div style={{ display: "flex", flexWrap: "wrap" }}>
                //     {selected.map((value) => (
                //       <div key={value} style={{ margin: "2px" }}>
                //         {
                //           propertyType.find((option) => option.value === value)
                //             .label
                //         }
                //         ,
                //       </div>
                //     ))}
                //   </div>
                // )}
              >
                {furnishingType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ marginTop: "15px", display: "flex" }}>
            <FormControl sx={{ marginRight: "5px" }}>
              <InputLabel id="bedrooms-label">Bed Rooms count</InputLabel>
              <Select
                required
                labelId="bedrooms-label"
                id="bedrooms"
                name="bedroom"
                sx={{
                  borderRadius: "20px",
                  minWidth: {
                    xs: "173px",
                    sm: "230px",
                  },
                }}
                value={state.bedrooms}
                onChange={(e) =>
                  dispatch({
                    type: "SELECT_BEDROOM",
                    bedrooms: e.target.value,
                  })
                }
                // renderValue={(selected) => (
                //   <div style={{ display: "flex", flexWrap: "wrap" }}>
                //     {selected.map((value) => (
                //       <div key={value} style={{ margin: "2px" }}>
                //         {bedroom.find((option) => option.value === value).label}
                //         ,
                //       </div>
                //     ))}
                //   </div>
                // )}
              >
                {bedrooms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="bath rooms-label">Bath rooms count</InputLabel>
              <Select
                required
                labelId="bath rooms"
                id="bath rooms"
                name="bathroom"
                sx={{
                  borderRadius: "20px",
                  minWidth: {
                    xs: "173px",
                    sm: "230px",
                  },
                }}
                value={state.bathrooms}
                onChange={(e) =>
                  dispatch({
                    type: "SELECT_BATHROOM",
                    bathrooms: e.target.value,
                  })
                }
              >
                {bathrooms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ marginTop: "15px", display: "flex" }}>
            <FormControl sx={{ marginRight: "5px" }}>
              <InputLabel id="Minimum area Size-label">
                {" "}
                Minimum area Size
              </InputLabel>
              <Select
                required
                labelId="Minimum area Size-label"
                id="Minimum area Size"
                sx={{
                  borderRadius: "20px",
                  minWidth: {
                    xs: "173px",
                    sm: "230px",
                  },
                }}
                value={state.minArea}
                onChange={(e) =>
                  dispatch({
                    type: "SELECT_MINAREA",
                    minArea: e.target.value,
                  })
                }
                // renderValue={(selected) => (
                //   <div style={{ display: "flex", flexWrap: "wrap" }}>
                //     {selected.map((value) => (
                //       <div key={value} style={{ margin: "2px" }}>
                //         {bedroom.find((option) => option.value === value).label}
                //         ,
                //       </div>
                //     ))}
                //   </div>
                // )}
              >
                {minArea.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="Max area Size-label">Max area Size</InputLabel>
              <Select
                required
                labelId="Max area Size"
                id="Max area Size"
                sx={{
                  borderRadius: "20px",
                  minWidth: {
                    xs: "173px",
                    sm: "230px",
                  },
                }}
                value={state.maxArea}
                onChange={(e) =>
                  dispatch({
                    type: "SELECT_MAXAREA",
                    maxArea: e.target.value,
                  })
                }
                // renderValue={(selected) => (
                //   <div style={{ display: "flex", flexWrap: "wrap" }}>
                //     {selected.map((value) => (
                //       <div key={value} style={{ margin: "2px" }}>
                //         {
                //           bathroom.find((option) => option.value === value)
                //             .label
                //         }
                //         ,
                //       </div>
                //     ))}
                //   </div>
                // )}
              >
                {maxArea.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mt: "23px", width: "100%" }}>
            <Button
              disabled={loading}
              type="submit"
              style={{
                backgroundColor: loading ? themes.grey.main : themes.green.main,
                color: themes.white.main,
                width: "100%",
              }}
            >
              {loading ? "sumitting..." : "Submit"}
              {loading && <CircularProgress />}
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};
export default RequestForm;
