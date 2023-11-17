import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
} from "@mui/material";

import { useTheme, styled } from "@mui/material/styles";
import { updateLogin } from "../../store/actions/ToogleAction";
import { useDispatch, useSelector } from "react-redux";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import CloseIcon from "@mui/icons-material/Close";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
const Dialoge = () => {
  const theme = useTheme();
  const themes = theme.palette;
  const toogle = useSelector((user) => user.tooglesReducer.login);
  const [login, setLogin] = useState(false);

  const dispatch = useDispatch();
  const StyledButton = styled(Button)(({ theme }) => ({
    // marginRight: theme.spacing(1),
    // color: `${myblack}`,
    color: theme.palette.white.main,
    display: "block",
    // fontSize: `${fontSize.medium}`,
    fontFamily: "Roboto",
    fontWeight: 900,
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "16px",
    backgroundColor: "#3D783D ",

    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    ":hover": {
      backgroundColor: "#3D783D ",
      color: "white",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  }));
  console.log("my toogle", toogle);
  const handleOpenLoginDialog = () => {
    dispatch(updateLogin(!toogle));
  };
  const onClose = () => {
    dispatch(updateLogin(false));
  };
  const handleDialogeChange = () => {
    setLogin(!login);
  };
  return (
    <>
      <StyledButton onClick={handleOpenLoginDialog}>Login</StyledButton>
      <Dialog open={toogle} onClose={onClose} sx={{ mt: "10px" }}>
        <DialogTitle
          sx={{
            display: "flex",
            pt: "20px",
            mb: "20px",
            backgroundColor: "#EFEFEF",
            color: themes.black.main,
          }}
        >
          Login to get Personalised Properties
          <CloseIcon onClick={onClose} sx={{ ml: "10%", cursor: "pointer" }} />
        </DialogTitle>
        <Box
          sx={{
            border: "1px solid #EFEFEF",
            textalign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <Button
            onClick={handleDialogeChange}
            style={{
              backgroundColor: login ? "#EFEFEF" : themes.mywhite.main,
              textTransform: "none",
              fontSize: "15px",
              width: "50%",
              color: login ? themes.black.main : themes.myblack.main,
            }}
          >
            Login
          </Button>
          <Button
            onClick={handleDialogeChange}
            style={{
              backgroundColor: !login ? "#EFEFEF" : themes.mywhite.main,
              textTransform: "none",
              fontSize: "15px",
              //   color: themes.black.main,
              width: "50%",
              color: !login ? themes.black.main : themes.myblack.main,
            }}
          >
            Signup
          </Button>
        </Box>

        <DialogContent>{login ? <LoginForm /> : <SignupForm />}</DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default Dialoge;
