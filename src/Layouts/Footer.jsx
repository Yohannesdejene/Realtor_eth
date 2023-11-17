import React from "react";

import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  Divider,
  useMediaQuery,
  Button,
} from "@mui/material";

import { useTheme, styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { updateLogin } from "../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";

const AboutList = [
  {
    value: "About us",
    path: "/",
  },
  {
    value: "Find Realtor",
    path: "/",
  },
];
const InformationList = [
  {
    value: "Help Center",
    path: "/",
  },
  {
    value: "Contact Us",
    path: "/",
  },
];
const userList = [
  {
    value: "Login",
    path: "/",
  },
  {
    value: "Register",
    path: "/",
  },
];

const getAppList = [
  {
    value: "Login",
    path: "/",
  },
  {
    value: "Regsiter",
    path: "/",
  },
];

const Footer = () => {
  const sm = useMediaQuery("(max-width:600px)");
  const md = useMediaQuery("(max-width:960px)");
  const lg = useMediaQuery("(max-width:1280px)");
  const theme = useTheme();
  const themes = theme.palette;
  const login = useSelector((user) => user.tooglesReducer.login);
  ///store dispatch
  const dispatch = useDispatch();

  console.log("lllo", login);

  ///handle login toggle
  const handleLoginToggle = () => {
    console.log("clicked");
    dispatch(updateLogin(true));
  };

  return (
    <>
      <footer
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          backgroundColor: themes.black.main,
        }}
      >
        <Divider sx={{ mb: "30px" }} />
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  mr: "10px",
                  display: "flex",
                  alignitem: "center",
                }}
              >
                <img style={{ width: "100%" }} src="/Images/logo1.png" />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ mt: "10px", color: themes.white.main }}
                >
                  For you dream home{" "}
                </Typography>
              </Box>
              <Box>
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0px",
                  }}
                >
                  <ListItem
                    component={Link}
                    href="https://www.facebook.com/REALTOReth"
                    sx={{ width: "30px" }}
                  >
                    <FacebookIcon />
                  </ListItem>
                  <ListItem
                    component={Link}
                    href="https://www.facebook.com/REALTOReth"
                    sx={{ width: "30px" }}
                  >
                    <LinkedInIcon />
                  </ListItem>
                  <ListItem
                    component={Link}
                    href="https://t.me/realtoreth"
                    sx={{ width: "30px" }}
                  >
                    <TelegramIcon />
                  </ListItem>
                  <ListItem
                    component={Link}
                    href="https://alulatesfaye44@gmail.com"
                    sx={{ width: "30px" }}
                  >
                    <EmailIcon />
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                ml: {
                  md: "100px",
                  xs: "20px",
                },
                gap: {
                  lg: "100px",
                  md: "50px",
                  sm: "10px",
                  xs: "5px",
                },
              }}
            >
              <Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: themes.green.main,
                      fontFamily: "Roboto",
                      fontSize: {
                        lg: "25px",
                        md: "15px",
                        sm: "13px",
                      },
                      ml: "15px",
                      mt: "35px",
                    }}
                  >
                    About
                  </Typography>
                </Box>

                <List sx={{ display: "flex", flexDirection: "column" }}>
                  {/* {AboutList.map((value, index) => (
                    <ListItem
                      key={index}
                      component={Button}
                      sx={{
                        fontSize: {
                          lg: "17px",
                          md: "15px",
                          sm: "13px",
                        },
                        fontFamily: "Roboto",
                        color: themes.white.main,
                      }}
                    >
                      {value.value}
                    </ListItem>
                  ))} */}

                  <Button
                    sx={{
                      textTransform: "none",

                      fontSize: {
                        lg: "17px",
                        md: "15px",
                        sm: "13px",
                      },
                      fontFamily: "Roboto",
                      color: themes.white.main,
                    }}
                  >
                    About Us
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",

                      fontSize: {
                        lg: "17px",
                        md: "15px",
                        sm: "13px",
                      },
                      fontFamily: "Roboto",
                      color: themes.white.main,
                    }}
                  >
                    Find realtor
                  </Button>
                </List>
              </Box>

              <Box sx={{ textAlign: "left" }}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: themes.green.main,
                      fontFamily: "Roboto",
                      fontSize: {
                        lg: "25px",
                        md: "15px",
                        sm: "13px",
                      },
                      ml: "15px",
                      mt: "35px",
                      textAlign: "center",
                    }}
                  >
                    Contact us
                  </Typography>
                </Box>

                <List
                  sx={{
                    display: "flex",
                    textAlign: "left",

                    flexDirection: "column",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",

                      fontSize: {
                        lg: "17px",
                        md: "15px",
                        sm: "13px",
                      },
                      fontFamily: "Roboto",
                      color: themes.white.main,
                    }}
                  >
                    Help Center
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",

                      fontSize: {
                        lg: "17px",
                        md: "15px",
                        sm: "13px",
                      },
                      fontFamily: "Roboto",
                      color: themes.white.main,
                    }}
                  >
                    Call: +251 91 451 4657
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",

                      fontSize: {
                        lg: "17px",
                        md: "15px",
                        sm: "13px",
                      },
                      fontFamily: "Roboto",
                      color: themes.white.main,
                    }}
                  >
                    Email: alulatesfaye44@gmail.com
                  </Button>
                </List>
              </Box>
              <Box
                sx={{
                  marginLeft: {
                    lg: "30px",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: themes.green.main,
                      fontFamily: "Roboto",
                      fontSize: {
                        lg: "25px",
                        md: "15px",
                        sm: "13px",
                      },
                      ml: "15px",
                      mt: "35px",
                    }}
                  >
                    User
                  </Typography>
                </Box>

                <List sx={{ display: "flex", flexDirection: "column" }}>
                  {userList.map((value, index) => (
                    <ListItem
                      key={index}
                      component={Button}
                      onClick={handleLoginToggle}
                      sx={{
                        textTransform: "none",
                        fontSize: {
                          lg: "17px",
                          md: "15px",
                          sm: "13px",
                        },
                        fontFamily: "Roboto",
                        color: themes.white.main,
                      }}
                    >
                      {value.value}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Container>
      </footer>
      <div style={{ backgroundColor: themes.black.main, height: "50px" }}>
        <Divider
          sx={{
            mb: "10px",
            backgroundColor: themes.grey.main,
            color: themes.white.main,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            mt: "0px",
            display: "flex",
            justifyContent: "center",
            color: themes.white.main,
          }}
        >
          @2023 Realtoreth
        </Typography>
      </div>
    </>
  );
};

export default Footer;
