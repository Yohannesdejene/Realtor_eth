import {
  Typography,
  Box,
  CardMedia,
  Divider,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";

const DetailTable = ({ house }) => {
  const xs = useMediaQuery("(max-width:600px)");
  const sm = useMediaQuery("(max-width:900px)");
  const md = useMediaQuery("(max-width:1200px)");
  const lg = useMediaQuery("(min-width:1201px)");
  const theme = useTheme();
  const themes = theme.palette;
  const houseFactTable = [
    {
      label: "Property Type",
      value: house.houseType,
    },
    {
      label: "Property For",
      value: house.marketStatus,
    },
    {
      label: "Price",
      value: house.price,
    },
    {
      label: "Bed Rooms",
      value: house.bedrooms,
    },
    {
      label: "Bath Rooms",
      value: house.bathrooms,
    },
    {
      label: "FloorNumber",
      value: house.floorNumber,
    },
    {
      label: "Area Size",
      value: house.areaSize,
    },

    {
      label: "City",
      value: house.city,
    },
    {
      label: "Sub City",
      value: house.subcity,
    },
    {
      label: "Specific Location",
      value: house.addressName,
    },
  ];

  return (
    <Box
      sx={{
        mt: "40px",

        display: "flex",
        flexDirection: "column",
      }}
    >
      {" "}
      <Typography
        variant="h4"
        sx={{
          fontSize: "21px",
          fontFamily: "Roboto",
          fontWeight: "bold",
        }}
      >
        House Facts
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: {
            xs: "100%",
            md: "60%",
          },
        }}
      >
        {house &&
          houseFactTable.map((house, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                border: "1px solid",
                boderColor: "#525454 ",
                mt: "10px",
                backgroundColor: index % 2 === 0 ? "white" : "#9FA1A1",

                pl: "2%",
                pr: "2%",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Roboto",
                  // color: themes.black.main,
                  colorthemes: themes.myblack.main,
                }}
              >
                {house.label}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Roboto",

                  colorthemes: themes.myblack.main,
                }}
              >
                {house.value}
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
export default DetailTable;
