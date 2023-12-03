import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { alpha } from "@mui/system";
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
import SideClassify from "./SideClassify";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AccountPopover from "./AccountPopover";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { updateLanguage } from "../store/actions/ToogleAction";
import { updateDarkMode } from "../store/actions/ToogleAction";
import { updateLogin } from "../store/actions/ToogleAction";
import Dialoge from "../Components/auth/Dialoge";

const realestates = [
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
];
const realestates2 = [
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
function NavBar() {
  const theme = useTheme();
  const themes = theme.palette;
  const [isSideClassifyOpen, setSideClassifyOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((user) => user.usersReducer);
  const toogle = useSelector((user) => user.tooglesReducer);
  const login = useSelector((user) => user.tooglesReducer.login);

  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    dispatch(updateLanguage(selectedLanguage));
    i18n.changeLanguage(selectedLanguage);
  };
  const handleToggleDarkMode = (event) => {
    // const selectedValue = event.target.value;
    // const selectedValue = event.target.value;
    console.log("hhehehheehehehh");
    const newDarkMode = !toogle.darkMode;
    localStorage.setItem("darkMode", newDarkMode);
    dispatch(updateDarkMode(newDarkMode));
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
    fontSize: "15px",
    ":hover": {
      backgroundColor: "#3D783D ",
      color: "white",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50px",

    backgroundColor: themes.background.main,
    color: "#333",
    border: "1px solid #ccc",
    padding: "10px 20px",
    borderRadius: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    zIndex: 1,
    width: "450px",
    height: "250px",
    padding: "30px",
  }));

  const [open, setOpen] = useState({
    buy: false,
    rent: false,
    request: false,
    realtoreth: false,
    realEstates: false,
  });
  const [isBoxVisible, setIsBoxVisible] = useState({
    buy: false,
    rent: false,
    request: false,
    realtoreth: false,
    realEstates: false,
  });
  const handleMouseEnter = (event) => {
    const { name } = event.target;
    setIsBoxVisible({ ...open, [name]: true });

    // setIsBoxVisible(true);
  };
  const handleMouseEnterBox = (event) => {
    console.log("we are hovering");
    const { id } = event.target;
    setIsBoxVisible({ ...open, [id]: true });
    console.log("nnene", open[id]);
    // setIsBoxVisible(true);
  };
  const handleMouseLeave = (event) => {
    const { name } = event.target;
    setIsBoxVisible({ ...open, [name]: false });
  };
  const handleMouseLeaveBox = (event) => {
    const { id } = event.target;
    setIsBoxVisible({ ...open, [id]: false });
  };
  const handleGotoLogin = () => {
    dispatch(updateLogin(true));
  };
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      dispatch(updateDarkMode(darkMode));
    }
  }, []);
  return (
    <AppBar
      elevation={1}
      sx={{
        // backgroundColor: `${background}`,
        backgroundColor: theme.palette.mywhite.main,
        marginTop: "0px",
        padding: "0px",
        zIndex: "2",
        // height: "70px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Link href="/">
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  mr: "10px",
                }}
              >
                {/* {isDarkMode && (
                  <img style={{ width: "100%" }} src="/Images/logowhite.png" />
                )} */}
                {/* {isDarkMode && (
                  <img style={{ width: "100%" }} src="/Images/logo1.png" />
                )} */}
                <img style={{ width: "100%" }} src="/Images/logo1.png" />
              </Box>
            </Link>
            <Typography
              // variant="h6"

              noWrap
              component="a"
              href="/"
              sx={{
                // color: `${green}`,
                color: theme.palette.green.main,
                fontFamily: "Open Sans",
                display: { xs: "none", md: "flex" },
                fontFamily: "Open Sans, sans-serif",
                // fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "30px",
                // letterSpacing: ".1rem",
                // color: "#3D783D ",
                textDecoration: "none",
              }}
            >
              REALTOR
            </Typography>
          </Box>
          <Box
            className="classifyMenu"
            sx={{
              ml: "0px",
              display: {
                lg: "none",
                md: "none",
                sm: "flex",
                xs: "flex",
              },
            }}
          >
            <SideClassify />
          </Box>
          <Link
            sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
            href="/"
          >
            <Box
              sx={{
                width: "50px",
                height: "50px",
                mr: "10px",
              }}
            >
              {/* {isDarkMode && (
                  <img style={{ width: "100%" }} src="/Images/logowhite.png" />
                )} */}
              {/* {isDarkMode && (
                  <img style={{ width: "100%" }} src="/Images/logo1.png" />
                )} */}
              <img style={{ width: "100%" }} src="/Images/logo1.png" />
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", marginLeft: "50px" },
            }}
          >
            <StyledButton
              name="buy"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                display: "flex",
                backgroundColor: isBoxVisible.buy ? "#3D783D " : "white",
                color: isBoxVisible.buy ? "#ffffff" : "#mygrey1",
                boxShadow: isBoxVisible.buy
                  ? "0 2px 4px rgba(0, 0, 0, 0.1)"
                  : "none",
              }}
            >
              Buy
              {isBoxVisible.buy ? (
                <KeyboardArrowUpIcon
                  sx={{ color: isBoxVisible.buy ? "#ffffff" : "#mygrey1" }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: isBoxVisible.buy ? "#ffffff" : "#mygrey1",
                  }}
                />
              )}
            </StyledButton>
            {isBoxVisible.buy && (
              <StyledBox
                id="buy"
                onMouseEnter={handleMouseEnterBox}
                onMouseLeave={handleMouseLeaveBox}
                sx={{ display: "flex", left: "150px" }}
              >
                <Box
                  sx={{
                    width: "200px",

                    // flexDirection: "column",

                    ml: "15px",
                  }}
                >
                  {buylist.map((buy, index) => (
                    <Link
                      key={index}
                      href={`/homes/${buy.value}?serviceType=buy`}
                      sx={{
                        textDecoration: "none",
                        display: "block",
                        color: theme.palette.mygrey1.main,
                        fontSize: "15px",
                        mb: "7px",
                        textalign: "left",
                        fontFamily: "Roboto",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {buy.name}
                    </Link>
                  ))}
                </Box>
                <Box
                  sx={{
                    width: "200px",

                    // flexDirection: "column",

                    ml: "15px",
                  }}
                >
                  <Link
                    href="/guide/#first_timer"
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: theme.palette.mygrey1.main,
                      fontSize: "15px",
                      mb: "7px",
                      textalign: "left",
                      fontFamily: "Roboto",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    First Timer
                  </Link>
                  <Link
                    href="/guide/#affordability"
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: theme.palette.mygrey1.main,
                      fontSize: "15px",
                      mb: "7px",
                      textalign: "left",
                      fontFamily: "Roboto",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Affordability
                  </Link>
                  <Link
                    href="/guide/#buying"
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: theme.palette.mygrey1.main,
                      fontSize: "15px",
                      mb: "7px",
                      textalign: "left",
                      fontFamily: "Roboto",
                      textAlign: "left",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Buying guide
                  </Link>
                </Box>
              </StyledBox>
            )}
            <StyledButton
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              name="rent"
              sx={{
                display: "flex",
                backgroundColor: isBoxVisible.rent ? "#3D783D " : "white",
                color: isBoxVisible.rent ? "#ffffff" : "#mygrey1",
                boxShadow: isBoxVisible.rent
                  ? "0 2px 4px rgba(0, 0, 0, 0.1)"
                  : "none",
              }}
            >
              Rent
              {isBoxVisible.rent ? (
                <KeyboardArrowUpIcon
                  sx={{ color: isBoxVisible.rent ? "#ffffff" : "#mygrey1" }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: isBoxVisible.rent ? "#ffffff" : "#mygrey1",
                  }}
                />
              )}
            </StyledButton>
            {isBoxVisible.rent && (
              <StyledBox
                onMouseEnter={handleMouseEnterBox}
                onMouseLeave={handleMouseLeaveBox}
                sx={{ display: "flex", left: "200px" }}
                id="rent"
              >
                <Box
                  sx={{
                    width: "200px",

                    // flexDirection: "column",

                    ml: "15px",
                  }}
                >
                  {rentlist.map((rent, index) => (
                    <Link
                      href={`/homes/${rent.value}?serviceType=rent`}
                      sx={{
                        textDecoration: "none",
                        display: "block",
                        color: theme.palette.mygrey1.main,
                        fontSize: "15px",
                        mb: "7px",
                        textalign: "left",
                        fontFamily: "Roboto",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {rent.name}
                    </Link>
                  ))}
                </Box>
                <Box
                  sx={{
                    width: "200px",

                    // flexDirection: "column",

                    ml: "15px",
                  }}
                >
                  <Link
                    href="/guide/#rentaling"
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: theme.palette.mygrey1.main,
                      fontSize: "15px",
                      mb: "7px",
                      textalign: "left",
                      fontFamily: "Roboto",
                      textAlign: "left",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    rental guide
                  </Link>
                </Box>
              </StyledBox>
            )}
            {/* <StyledButton
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              name="realEstates"
              sx={{
                display: "flex",
                backgroundColor: isBoxVisible.realEstates
                  ? "#3D783D "
                  : "white",
                color: isBoxVisible.realEstates ? "#ffffff" : "#mygrey1",
                boxShadow: isBoxVisible.realEstates
                  ? "0 2px 4px rgba(0, 0, 0, 0.1)"
                  : "none",
              }}
            >
              Realestates
              {isBoxVisible.realEstates ? (
                <KeyboardArrowUpIcon
                  sx={{
                    color: isBoxVisible.realEstates ? "#ffffff" : "#mygrey1",
                  }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: isBoxVisible.realEstates ? "#ffffff" : "#mygrey1",
                  }}
                />
              )}
            </StyledButton>
            {isBoxVisible.realEstates && (
              <StyledBox
                onMouseEnter={handleMouseEnterBox}
                onMouseLeave={handleMouseLeaveBox}
                sx={{ display: "flex", left: "200px" }}
                id="realEstates"
              >
                <Box
                  sx={{
                    width: "200px",

                    // flexDirection: "column",

                    ml: "15px",
                  }}
                >
                  {realestates.map((real, index) => (
                    <>
                      <Link
                        key={index}
                        href={`/realestates/${real.value}`}
                        sx={{
                          textDecoration: "none",
                          display: "block",
                          color: theme.palette.mygrey1.main,
                          fontSize: "15px",
                          mb: "7px",
                          textalign: "left",
                          fontFamily: "Roboto",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {real.name}
                      </Link>
                    </>
                  ))}
                </Box>
                <Box
                  sx={{
                    width: "200px",

                    // flexDirection: "column",

                    ml: "15px",
                  }}
                >
                  {realestates2.map((real, index) => (
                    <>
                      <Link
                        key={index}
                        href={`/realestates/${real.value}`}
                        sx={{
                          textDecoration: "none",
                          display: "block",
                          color: theme.palette.mygrey1.main,
                          fontSize: "15px",
                          mb: "7px",
                          textalign: "left",
                          fontFamily: "Roboto",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {real.name}
                      </Link>
                    </>
                  ))}
                </Box>
              </StyledBox>
            )} */}

            <StyledButton
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              name="realtoreth"
              sx={{
                display: "flex",
                backgroundColor: isBoxVisible.realtoreth ? "#3D783D " : "white",
                color: isBoxVisible.realtoreth ? "#ffffff" : "#mygrey1",
                boxShadow: isBoxVisible.realtoreth
                  ? "0 2px 4px rgba(0, 0, 0, 0.1)"
                  : "none",
              }}
            >
              Agents
              {isBoxVisible.realtoreth ? (
                <KeyboardArrowUpIcon
                  sx={{
                    color: isBoxVisible.request ? "#ffffff" : "#mygrey1",
                  }}
                />
              ) : (
                <KeyboardArrowDownIcon
                  sx={{
                    color: isBoxVisible.realtoreth ? "#ffffff" : "#mygrey1",
                  }}
                />
              )}
            </StyledButton>
            {isBoxVisible.realtoreth && (
              <StyledBox
                onMouseEnter={handleMouseEnterBox}
                onMouseLeave={handleMouseLeaveBox}
                sx={{ display: "flex", left: "250px" }}
                id="realtoreth"
              >
                <Box
                  sx={{
                    width: "200px",

                    ml: "15px",
                  }}
                >
                  <Link
                    href="/becomeagent"
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: theme.palette.mygrey1.main,
                      fontSize: "15px",
                      mb: "7px",
                      textalign: "left",
                      fontFamily: "Roboto",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Become an agent
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "200px",

                    // flexDirection: "column",

                    ml: "15px",
                  }}
                >
                  <Link
                    href="/findagent"
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: theme.palette.mygrey1.main,
                      fontSize: "15px",
                      mb: "7px",
                      textalign: "left",
                      fontFamily: "Roboto",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Find an agent
                  </Link>
                </Box>
              </StyledBox>
            )}

            {/* <RequestDialoge /> */}
            {login && (
              <Button
                component={Link}
                href="/request"
                style={{
                  backgroundColor: themes.green.main,
                  textTransform: "none",
                  fontSize: "15px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  color: themes.white.main,
                }}
              >
                Request
              </Button>
            )}
            {!login && (
              <Button
                onClick={handleGotoLogin}
                style={{
                  backgroundColor: themes.green.main,
                  textTransform: "none",
                  fontSize: "15px",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  color: themes.white.main,
                }}
              >
                Request
              </Button>
            )}
          </Box>

          {/* <Box sx={{ mr: "10px" }}>
            <select value={toogle.language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="am">አማርኛ</option>
            </select>
          </Box> */}

          <Box className="mode">
            {toogle.darkMode && (
              <Button
                onClick={handleToggleDarkMode}
                sx={{
                  color: "#ffffff",
                  textTransform: "none",
                  fontSize: {
                    xs: "12px",
                    sm: "15px",
                    md: "15px",
                  },
                  fontFamily: "Roboto",
                }}
              >
                <Tooltip title={t("lightmode")}>
                  <WbSunnyIcon
                    size="xxsmall"
                    sx={{
                      color: "#ffffff",
                      fontSize: "20px",
                    }}
                  />
                </Tooltip>
              </Button>
            )}
            {!toogle.darkMode && (
              <Button
                onClick={handleToggleDarkMode}
                size="xsmall"
                sx={{
                  color: "#000000",
                  textTransform: "none",
                  fontSize: {
                    xs: "12px",
                    sm: "15px",
                    md: "15px",
                  },
                  fontFamily: "Roboto",
                }}
              >
                <Tooltip title={t("darkmode")}>
                  <NightlightIcon
                    size="small"
                    sx={{
                      color: "#000000",

                      fontSize: "20px",
                    }}
                  />
                </Tooltip>
              </Button>
            )}
          </Box>

          {user.isLoggedIn && <AccountPopover />}

          {!user.isLoggedIn && <Dialoge />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
