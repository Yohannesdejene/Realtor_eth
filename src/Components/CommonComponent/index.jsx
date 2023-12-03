import { Button, useTheme, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

///icons
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export const CommonButtonLink = ({ label, route, handleClick }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={handleClick}
      component={Link}
      href={route}
      sx={{
        backgroundColor: theme.palette.green.main,
        color: theme.palette.white.main,
        padding: "10px 20px",
        borderRadius: "5px",
        textTransform: "none",
        fontSize: "13px",
        fontWeight: "bold",
        fontFamily: "Roboto",
        // height: "30px",
        "&:hover": {
          backgroundColor: theme.palette.green.main,
          color: theme.palette.white.main,
        },
        [theme.breakpoints.up("sm")]: {
          paddingLeft: "70px",
          paddingRight: "70px",
        },
      }}
    >
      {label}
    </Button>
  );
};
export const CommonTypography = ({ label }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        margin: "20px",
        textAlign: "center",
        fontWeight: 700,
      }}
    >
      {label}
    </Typography>
  );
};

export const DescWritter = ({ label }) => {
  return (
    <Typography variant="h4" sx={{ textAlign: "center" }}>
      {label}
    </Typography>
  );
};
export const CommonBack = ({ label, onClick }) => {
  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Button
      onClick={onClick}
      style={{
        textTransform: "none",

        color: themes.green.main,
        ":hover": {
          color: themes.green.main,
        },
      }}
    >
      <ArrowBack /> {label}
    </Button>
  );
};

export const FooterButton = ({ label, route, handleClick }) => {
  const theme = useTheme();
  return (
    <Button
      onClick={handleClick}
      component={Link}
      href={route}
      sx={{
        color: theme.palette.white.main,
        textTransform: "none",
        fontSize: "15px",
        fontFamily: "Roboto",
        // height: "30px",
      }}
    >
      {label}
    </Button>
  );
};

export const FootorTypography = ({ label }) => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: "19px",
        color: "#ffffff",
        display: "flex",
      }}
    >
      {label}
    </Typography>
  );
};
export const FootorTypographyList = ({ label }) => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        fontSize: "15px",
        color: "#ffffff",
        display: "flex",
      }}
    >
      {label}
    </Typography>
  );
};
