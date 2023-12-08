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
                flexDirection: {
                  xs: "column",
                  sm: "row",
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
