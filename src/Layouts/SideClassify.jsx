import { useState } from "react";
import {
  MenuItem,
  Tooltip,
  Button,
  Avatar,
  Container,
  TextField,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Link,
  Box,
  AppBar,
  Drawer,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { updateSideMenu } from "../store/actions/ToogleAction";
import { updateLogin } from "../store/actions/ToogleAction";

import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const realestatesList = [
  {
    name: "Ayat RealEstate",
    value: "ayat",
  },
  {
    name: "Noah RealEstate",
    value: "noah",
  },
  {
    name: "Flintstone RealEstate",
    value: "filtstone",
  },
  {
    name: "Gift RealEstate",
    value: "gift",
  },
  {
    name: "Metropolitan Realetstae",
    value: "metropolitan",
  },
  {
    name: "Jambo RealEstate",
    value: "jambo",
  },

  {
    name: "Realhomes Realetstae",
    value: "realhomes",
  },
];

const buylist = [
  {
    name: "Apartments for sale",
    value: "apartment",
  },
  {
    name: "Residential for sale",
    value: "residential",
  },
  {
    name: "Condominiums for sale",
    value: "condominium",
  },
  {
    name: "penthouse  for sale",
    value: "penthouse",
  },
];
const rentlist = [
  {
    name: "Apartments for rent",
    value: "apartment",
  },
  {
    name: "Residential for rent",
    value: "residential",
  },
  {
    name: "Condominiums for rent",
    value: "condominium",
  },

  {
    name: "Guest House for rent",
    value: "guesthouse",
  },
  {
    name: "Penthouse for rent",
    value: "pentahouse",
  },
];
const SideClassify = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const toogle = useSelector((user) => user.tooglesReducer);
  const login = useSelector((user) => user.tooglesReducer.login);

  const { t, i18n } = useTranslation();
  const handleUpdateSideMenu = (event) => {
    dispatch(updateSideMenu(true));
  };
  const handleCloseSideMenu = () => {
    dispatch(updateSideMenu(false));
  };
  const handleGotoLogin = () => {
    dispatch(updateLogin(true));
  };
  const StyledButton = styled(Button)(({ theme }) => ({
    // marginRight: theme.spacing(1),
    // color: `${myblack}`,
    color: theme.palette.myblack.main,
    display: "block",
    // fontSize: `${fontSize.medium}`,
    fontFamily: "Roboto",
    fontWeight: 900,
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "16px",
    backgroundColor: "#3D783D ",
    color: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    ":hover": {
      backgroundColor: "#3D783D ",
      color: "white",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  }));
  const [open, setOpen] = useState({
    buy: false,
    rent: false,
    request: false,
    realtoreth: false,
    realEstates: false,
  });
  const handleButtonClick = (event) => {
    const { name } = event.target;
    setOpen({ ...open, [name]: !open[name] });
  };

  return (
    <>
      <IconButton onClick={handleUpdateSideMenu}>
        <MenuIcon sx={{ fontSize: "30px", ml: "0px" }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={toogle.sideMenu}
        onClose={handleCloseSideMenu}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Box sx={{ float: "right" }}>
            <IconButton
              sx={{ margin: "0px", padding: "0px" }}
              onClick={handleCloseSideMenu}
            >
              <CloseIcon sx={{ fontSize: "25px" }} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Link href="/">
              <Box sx={{ width: "30px", height: "30px", mr: "10px" }}>
                {/* {toogle.darkMode && (
                  <img style={{ width: "100%" }} src="/Images/logowhite.png" />
                )} */}
                {/* {!toogle.darkMode && ( */}
                <img style={{ width: "100%" }} src="/Images/logo1.png" />
                {/* )} */}
              </Box>
            </Link>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "Open Sans",
                mr: 2,
                display: { xs: "flex", md: "none" },
                // fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "20px",
                // letterSpacing: ".1rem",
                // color: `${mygreen}`,
                color: theme.palette.green.main,
                textDecoration: "none",
              }}
            >
              REALTOR
            </Typography>
          </Box>

          <div style={{ marginTop: "30px" }}>
            <button
              name="buy"
              onClick={handleButtonClick}
              style={{
                display: "flex",
                color: theme.palette.black.main,
                alignItems: "center",
                // backgroundColor: theme.palette.white.main,
                width: "100%",
                // borderColor: "1px solid white",
                border: "none",
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              Buy
            </button>

            {open.buy && (
              <Box
                sx={{
                  width: "200px",

                  // flexDirection: "column",
                  marginTop: "15px",
                  ml: "15px",
                }}
              >
                {buylist.map((value, index) => (
                  <Link
                    key={index}
                    href={`/homes/${value.value}?serviceType=buy`}
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: theme.palette.mygrey1.main,
                      mb: "7px",
                      textalign: "left",
                      fontFamily: "Roboto",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {value.name}
                  </Link>
                ))}
              </Box>
            )}
            <button
              name="rent"
              onClick={handleButtonClick}
              style={{
                display: "flex",
                color: theme.palette.black.main,
                alignItems: "center",

                width: "100%",
                // borderColor: "1px solid white",
                border: "none",
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
                marginBottom:"10px"
              }}
            >
              Rent
            </button>

            {open.rent && (
              <Box
                sx={{
                  width: "200px",

                  // flexDirection: "column",
                  marginTop: "15px",
                  ml: "15px",
                }}
              >
                {rentlist.map((value, index) => (
                  <Link
                    key={index}
                    href={`/homes/${value.value}?serviceType=rent`}
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: theme.palette.mygrey1.main,
                      mb: "7px",
                      textalign: "left",
                      fontFamily: "Roboto",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {value.name}
                  </Link>
                ))}
              </Box>
            )}
            {/* <button
              name="realEstates"
              onClick={handleButtonClick}
              style={{
                display: "flex",
                color: theme.palette.black.main,
                alignItems: "center",

                width: "100%",
                // borderColor: "1px solid white",
                border: "none",
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Realestates
              <Button
                name="realEstates"
                // onClick={handleButtonClick}
                sx={{ marginLeft: "90px", color: theme.palette.black.main }}
              >
                {open.realEstates ? (
                  <KeyboardArrowUpIcon
                    name="realEstates"
                    onClick={handleButtonClick}
                  />
                ) : (
                  <KeyboardArrowDownIcon
                    name="realEstates"
                    onClick={handleButtonClick}
                  />
                )}
              </Button>
            </button>

            {open.realEstates && (
              <Box
                sx={{
                  width: "200px",

                  // flexDirection: "column",
                  marginTop: "15px",
                  ml: "15px",
                }}
              >
                {realestatesList.map((value, index) => (
                  <Link
                    key={index}
                    href={`/cat/buy/${value.value}`}
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: theme.palette.mygrey1.main,
                      mb: "7px",
                      textalign: "left",
                      fontFamily: "Roboto",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {value.name}
                  </Link>
                ))}
              </Box>
            )} */}
          </div>
          {login && (
            <StyledButton component={Link} href="/request">
              Request
            </StyledButton>
          )}
          {!login && (
            <StyledButton onClick={handleGotoLogin}>Request</StyledButton>
          )}
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default SideClassify;
