import React from "react";

import {
  Container,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
  Divider,
  useMediaQuery,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { updateLogin } from "../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

////
import { FootorTypography } from "../Components/CommonComponent/index";
import {
  FootorTypographyList,
  FooterButton,
} from "../Components/CommonComponent/index";

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
  const navigate = useNavigate();
  const theme = useTheme();
  const themes = theme.palette;
  const login = useSelector((user) => user.tooglesReducer.login);
  ///store dispatch
  const dispatch = useDispatch();

  ///handle login toggle
  const handleLoginToggle = () => {
    console.log("clicked");
  };

  const handleLogin = () => {
    dispatch(updateLogin(true));
  };
  const handleRegsiter = () => {
    dispatch(updateLogin(true));
  };
  const hanldeAboutUs = () => {
    navigate("/becomeagent");
  };
  const hanldeFindeRealtor = () => {
    navigate("/becomeagent");
  };
  return (
    <>
      <Box
        sx={{
          bottom: 0,
          padding: "2%",
          backgroundColor: "#000000",
        }}
      >
        <Divider sx={{ mb: "30px" }} />
        <Container>
          <Grid container spacing={5} sx={{ width: "100%" }}>
            <Grid item xs={12} md={3}>
              {/* <Box sx={{ maxWidth: "100%" }}> */}
              <CardMedia
                component="img"
                src="/Images/logowhite.png"
                alt="Logo"
                sx={{
                  // width: "100%",
                  height: {
                    sm: "80px",
                    xs: "40px",
                  },
                  width: {
                    sm: "80px",
                    xs: "40px",
                  },
                }}
              />
              {/* </Box> */}
              <Typography
                variant="h5"
                sx={{ mt: "10px", color: themes.white.main }}
              >
                For you dream home{" "}
              </Typography>
              <Grid container spacing="1px">
                <Grid item>
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/REALTOReth",
                        "_blank"
                      )
                    }
                    sx={{ color: "#ffffff" }}
                  >
                    <FacebookIcon color="#ffffff" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/realtoreth",
                        "_blank"
                      )
                    }
                    sx={{ color: "#ffffff" }}
                  >
                    <LinkedInIcon color="#ffffff" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={() =>
                      window.open("https://t.me/realtoreth", "_blank")
                    }
                    sx={{ color: "#ffffff" }}
                  >
                    <TelegramIcon color="#ffffff" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid
                container
                spacing="1px"
                direction="column"
                alignItems="flex-start"
              >
                <Grid item sx={{ textAlign: "left" }}>
                  <FootorTypography label="About us " />
                </Grid>
                <Grid item>
                  <FooterButton label="About us " handleClick={hanldeAboutUs} />
                </Grid>
                <Grid item>
                  <FooterButton
                    label="Find Realtor "
                    handleClick={hanldeFindeRealtor}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="flex-start"
              >
                <Grid item display="flex" gap="10px" justifyContent="center">
                  <FootorTypography label="Contact us " />
                </Grid>
                <Grid item display="flex" gap="10px">
                  <FootorTypographyList label=" Call " />
                  <FootorTypographyList label=" +251960405555" />
                </Grid>
                <Grid item display="flex" gap="10px">
                  <FootorTypographyList label="Email  " />
                  <FootorTypographyList label="realtoreth@gmail.com" />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={3}>
              <Grid
                container
                spacing="1px"
                direction="column"
                alignItems="flex-start"
              >
                <Grid item sx={{ textAlign: "left" }}>
                  <FootorTypography label="Users" />
                </Grid>
                <Grid item>
                  <FooterButton label="Login " handleClick={handleLogin} />
                </Grid>
                <Grid item>
                  <FooterButton
                    label="Register "
                    handleClick={handleRegsiter}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
