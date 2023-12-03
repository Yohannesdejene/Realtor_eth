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

const VisibleFilter = () => {
  const filter = useSelector((state) => state.homesReducer.filters);

  const theme = useTheme();
  const themes = theme.palette;

  const dispatch = useDispatch();

  const FilterBox = ({ filter, filterType, dispatchType }) => {
    return (
      <Box
        sx={{
          height: "35px",
          paddingLeft: "20px",
          paddingRight: "5px",
          border: "1px solid black",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justify: "center",
          width: "auto",
          backgroundColor: themes.grey.main,
        }}
      >
        <Typography sx={{ color: themes.white.main }}>
          {filter} <span style={{ marginLeft: "4px" }}></span> :{" "}
          <span style={{ marginLeft: "4px" }}>{filterType}</span>
          {/* {filterType} */}
        </Typography>

        <Button
          sx={{
            fontSize: "20px",
            width: "2px",
            color: "white",
          }}
          onClick={(e) => dispatch(dispatchType("Any"))}
        >
          <CloseIcon size="small" sx={{ color: themes.white.main }} />
        </Button>
      </Box>
    );
  };
  const FilerListDesktop = () => {
    return (
      <Box>
        {(filter.houseType !== "Any" ||
          filter.serviceType !== "Any" ||
          filter.subcity !== "Any" ||
          filter.minPrice !== "Any" ||
          filter.maxPrice !== "Any" ||
          filter.bathrooms !== "Any" ||
          filter.bedrooms !== "Any" ||
          filter.minArea !== "Any" ||
          filter.maxArea !== "Any" ||
          filter.furnishingType !== "Any") && (
          <>
            <Divider />
            <Box
              sx={{
                display: {
                  lg: "flex",
                  md: "flex",
                  sm: "flex",
                  xs: "flex",
                },
                flexWrap: "wrap",
                gap: "10px",
                alignItems: "center",
              }}
              className="categoryDisplay"
            >
              <Typography
                variant="h5"
                sx={{ display: "block", margin: "10px" }}
              >
                Filters :
              </Typography>

              {filter.houseType !== "Any" && (
                <>
                  <FilterBox
                    filter="house Type"
                    filterType={filter.houseType}
                    dispatchType={setHouseTypeFilter}
                  />
                </>
              )}
              {filter.serviceType !== "Any" && (
                <>
                  <FilterBox
                    filter="Service Type"
                    filterType={filter.serviceType}
                    dispatchType={setServiceTypeFilter}
                  />
                </>
              )}

              {filter.subcity !== "Any" && (
                <>
                  <FilterBox
                    filter="Sub city"
                    filterType={filter.subcity}
                    dispatchType={setSubcityFilter}
                  />
                </>
              )}

              {filter.bedrooms !== "Any" && (
                <>
                  <FilterBox
                    filter="Bed rooms"
                    filterType={filter.bedrooms}
                    dispatchType={setBedroomsFilter}
                  />
                </>
              )}
              {filter.bathrooms !== "Any" && (
                <>
                  <FilterBox
                    filter="Bath rooms"
                    filterType={filter.bathrooms}
                    dispatchType={setBathroomsFilter}
                  />
                </>
              )}

              {filter.furnishingType !== "Any" && (
                <>
                  <FilterBox
                    filter="Furnished Type"
                    filterType={
                      filter.furnishingType ? "Furnished" : "Not Furnished"
                    }
                    dispatchType={setFurnishingTypeFilter}
                  />
                </>
              )}
              {filter.minArea !== "Any" && (
                <>
                  <FilterBox
                    filter="Min area"
                    filterType={filter.minArea}
                    dispatchType={setMinAreaFilter}
                  />
                </>
              )}
              {filter.maxArea !== "Any" && (
                <FilterBox
                  filter="Max area"
                  filterType={filter.maxArea}
                  dispatchType={setMaxAreaFilter}
                />
              )}
              {filter.minPrice !== "Any" && (
                <FilterBox
                  filter="Min Price"
                  filterType={filter.minPrice}
                  dispatchType={setMinPriceFilter}
                />
              )}
              {filter.maxPrice !== "Any" && (
                <>
                  <FilterBox
                    filter="Max price"
                    filterType={filter.maxPrice}
                    dispatchType={setMaxPriceFilter}
                  />
                </>
              )}
            </Box>
            <Divider />
          </>
        )}
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          display: {
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "flex",
          },
        }}
      >
        <FilerListDesktop />
      </Box>
    </>
  );
};
export default VisibleFilter;
