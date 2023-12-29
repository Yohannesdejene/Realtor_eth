import { useState, useEffect, useReducer, useSearchParams } from "react";
import {
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Select,
  useMediaQuery,
  Box,
  Button,
  Divider,
  Drawer,
  TextField,
  Pagination,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";

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

import {
  setHouseTypeFilter,
  setSubcityFilter,
  setServiceTypeFilter,
  setMaxPriceFilter,
  setMinPriceFilter,
  setBedroomsFilter,
  setBathroomsFilter,
  setMinAreaFilter,
  setMaxAreaFilter,
  setFurnishingTypeFilter,
} from "../../store/actions/HomesAction";
// import { updateLogin } from "../../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";

const FilterVertical = () => {
  const sm = useMediaQuery("(max-width:600px)");
  const md = useMediaQuery("(max-width:960px)");
  const lg = useMediaQuery("(max-width:1280px)");
  const filter = useSelector((state) => state.homesReducer.filters);

  const theme = useTheme();
  const themes = theme.palette;

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  // dispatchHome(setFilter(state));
  // console.log("query", query);
  // console.log("home", home);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const CategoryListDesktop = () => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {" "}
          <Typography
            variant="h5"
            sx={{
              display: {
                lg: "flex",
                md: "flex",
                sm: "flex",
                xs: "flex",
              },
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            {" "}
            Filter Options
          </Typography>
          {/* <FormControl variant="outlined">
            <InputLabel id="category-label">House Type </InputLabel>
            <Select
              // multiple
              required
              labelId="houseType"
              id="houseType"
              style={{
                minWidth: "150px",

                borderRadius: "20px",
                height: "35px",
              }}
              value={filter.houseType}
              // onChange={handleCategory}
              onChange={(e) => dispatch(setHouseTypeFilter(e.target.value))}
            >
              {houseType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
          <FormControl variant="outlined">
            <InputLabel id="location-label">Subcity</InputLabel>
            <Select
              required
              labelId="subcity"
              id="subcities"
              style={{
                // maxWidth: "500px",
                minWidth: "150px",
                // maxHeight: "50px",
                borderRadius: "20px",
                height: "35px",
              }}
              value={filter.subcity}
              // onChange={handleLocation}
              onChange={(e) => dispatch(setSubcityFilter(e.target.value))}
            >
              {subcity.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="location-label">Service Type</InputLabel>
            <Select
              required
              labelId="serviceType"
              id="servicetype"
              style={{
                // maxWidth: "500px",

                minWidth: "150px",
                // maxHeight: "50px",
                borderRadius: "20px",
                height: "35px",
              }}
              value={filter.serviceType}
              // onChange={handlePropertyType}
              onChange={(e) => dispatch(setServiceTypeFilter(e.target.value))}
            >
              {serviceType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="bedrooms-label">Bed Rooms count</InputLabel>
            <Select
              required
              labelId="bedrooms-label"
              id="bedrooms"
              name="bedrooms"
              sx={{
                borderRadius: "20px",
                // maxWidth: "500px",
                minWidth: "150px",
                height: "35px",
              }}
              value={filter.bedrooms}
              onChange={(e) => dispatch(setBedroomsFilter(e.target.value))}
            >
              {bedrooms.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="bath rooms-label">Bath rooms count</InputLabel>
            <Select
              required
              labelId="bath rooms"
              id="bath rooms"
              name="bathrooms"
              sx={{
                borderRadius: "20px",
                // maxWidth: "500px",
                minWidth: "150px",
                height: "35px",
              }}
              value={filter.bathrooms}
              onChange={(e) => dispatch(setBathroomsFilter(e.target.value))}
            >
              {bathrooms.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined">
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
                // maxWidth: "500px",
                minWidth: "150px",
                height: "35px",
              }}
              value={filter.minArea}
              onChange={(e) => dispatch(setMinAreaFilter(e.target.value))}
            >
              {minArea.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="Max area Size-label">Max area Size</InputLabel>
            <Select
              required
              labelId="Max area Size"
              id="Max area Size"
              sx={{
                borderRadius: "20px",
                // maxWidth: "500px",
                minWidth: "150px",
                height: "35px",
              }}
              value={filter.maxArea}
              onChange={(e) => dispatch(setMaxAreaFilter(e.target.value))}
            >
              {maxArea.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="furnished-label">Funishing Type</InputLabel>
            <Select
              labelId="furnishingType"
              id="furnishingType"
              style={{
                // maxWidth: "500px",
                minWidth: "150px",
                // maxHeight: "50px",
                borderRadius: "20px",
                height: "35px",
              }}
              value={filter.furnishingType}
              onChange={(e) =>
                dispatch(setFurnishingTypeFilter(e.target.value))
              }
            >
              {furnishingType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            type="number"
            value={filter.minPrice}
            inputProps={{ min: 0 }}
            label="Min Price"
            placeholder="Example 10000"
            sx={{
              "& .MuiInputBase-input": {
                height: "6px",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },

              minWidth: "50px",
              // maxHeight: "50px",
            }}
            onChange={(e) => dispatch(setMinPriceFilter(e.target.value))}
          />
          <TextField
            type="number"
            value={filter.maxPrice}
            label="MaxPrice"
            placeholder="Example 10000"
            inputProps={{ min: 0 }}
            sx={{
              "& .MuiInputBase-input": {
                height: "8px",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },

              // maxWidth: "500px",
              minWidth: "100px",
              // maxHeight: "50px",
            }}
            onChange={(e) => dispatch(setMaxPriceFilter(e.target.value))}
          />
        </Box>
      </>
    );
  };

  return (
    <>
      {" "}
      <Box
        sx={{
          display: {
            lg: "none",
            md: "none",
            sm: "none",
            xs: "flex",
          },
          cursor: "pointer",
          justifyContent: "center",
        }}
        onClick={toggleDrawer}
      >
        <TuneIcon
          sx={{
            display: {
              lg: "none",
              md: "none",
              sm: "none",
              xs: "flex",
            },
            justifyContent: "center",
          }}
          onClick={toggleDrawer}
        />

        <Typography
          variant="h3"
          sx={{ ml: "5px", fontFamily: "Roboto", color: "black" }}
        >
          {" "}
          Filter
        </Typography>
      </Box>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <Box sx={{ width: "60vw", mb: "50px" }}>
          <Box
            sx={{
              mt: "20px",

              display: {
                lg: "none",
                md: "none",
                sm: "none",
                xs: "flex",
              },
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {CategoryListDesktop()}
            {/* {FilterListMobile()} */}
          </Box>
        </Box>
      </Drawer>
      <Box
        sx={{
          display: {
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "none",
          },
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {CategoryListDesktop()}
      </Box>
    </>
  );
};

export default FilterVertical;
