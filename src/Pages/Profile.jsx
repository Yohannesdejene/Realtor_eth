import { styled } from "@mui/material/styles";
import { react, useState, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import {
  Typography,
  Box,
  TextField,
  Divider,
  Button,
  IconButton,
  Link,
  useTheme,
  Tooltip,
} from "@mui/material";

///icons
import EditIcon from "@mui/icons-material/Edit";
import CircularProgress from "@mui/material/CircularProgress";

import { NavLink, useNavigate } from "react-router-dom";
// import Category from "./Category/Category";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { setUserAction } from "../store/actions/UserAction";

///import componenet
import CustomTextField from "../Components/CustomTextField";
import CustomGenderField from "../Components/CustomGenderField";
import DialogeBox from "../Components/DialogeBox";
import PassChange from "../Components/auth/PassChange";
import CustomDate from "../Components/CustomDate";

//import reux actions
import { updateUserData } from "../store/actions/UserAction";
import { useSelector, useDispatch } from "react-redux";

import api from "../Services/index";
function encryptData(data, passphrase) {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    passphrase
  ).toString();
  return ciphertext;
}

export default function Profile() {
  const [loggedin, setLoggedIn] = useState(false);
  const [edit, setEdit] = useState(true);
  const [dialogeValue, setDialogeValue] = useState(false);
  const theme = useTheme();
  const themes = theme.palette;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((user) => user.usersReducer.user);

  ///current states
  const [inpuState, setInputState] = useState({
    id: null,
    userName: null,
    phoneNumber: null,
    gender: null,
    email: null,
    city: null,
    isActive: null,
    dateofBirth: null,
  });
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingChange, setLoadingChange] = useState(false);
  console.log("inpuState", user, inpuState);
  console.log("gnder", inpuState.gender);
  console.log("gnder2", user.gender);
  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setInputState(user);
    }
  }, [user]);
  const handleInputChnage = (event) => {
    const { name, value } = event.target;
    setInputState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleDialogeChange = () => {
    setDialogeValue(!dialogeValue);
  };
  console.log("user", inpuState.dateofBirth);
  const handeSaveChange = (event) => {
    event.preventDefault();
    setLoadingSave(true);
    dispatch(updateUserData("userName", inpuState.userName));
    dispatch(updateUserData("email", inpuState.email));
    dispatch(updateUserData("gender", inpuState.gender));
    dispatch(updateUserData("city", inpuState.city));
    dispatch(updateUserData("dateofBirth", inpuState.dateofBirth));
    const formData = new FormData();
    formData.append("userName", user.userName);
    formData.append("email", user.email);
    formData.append("city", user.city);
    formData.append("dateofBirth", user.dateofBirth);
    api
      .put("/user", formData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          console.log("response", res.data.user);

          const {
            id,
            userName,
            email,
            phoneNumber,
            gender,
            dateofBirth,
            isActive,
            city,
          } = user;
          const userData = {
            id,
            userName,
            email,
            phoneNumber,
            gender,
            city,
            dateofBirth,
            isActive,
          };

          const expirationTime = Date.now() + 1000 * 60 * 60 * 24 * 30;
          const loginData = { data: userData, expires: expirationTime };
          const passphrase = "johnabi";

          const encryptedData = encryptData(loginData, passphrase);

          // Store the encrypted data in localStorage
          localStorage.setItem("loginData", encryptedData);

          // Decrypt the stored data

          setLoadingSave(false);

          toast.success(
            "Profile Updated..",
            {
              autoClose: 3000,
            },
            {
              // Set the background color
              backgroundColor: themes.green.main,
              // Set the text color
              color: themes.white.main,
            }
            // Add custom CSS class
          );
          setLoadingSave(false);
        } else if (res.status == 400) {
          setLoadingSave(false);
          toast.error(
            "Not updated check yout internet connection",
            {
              autoClose: 3000,
            },
            {
              // Set the background color
              backgroundColor: themes.green.main,
              // Set the text color
              color: themes.white.main,
            }
            // Add custom CSS class
          );
          seterrmessage("Error in password or username");
        } else {
          setLoadingSave(false);
          toast.error(
            "Not updated check yout internet connection",
            {
              autoClose: 3000,
            },
            {
              // Set the background color
              backgroundColor: themes.green.main,
              // Set the text color
              color: themes.white.main,
            }
            // Add custom CSS class
          );
        }
      })
      .catch((err) => {
        setLoadingSave(false);
        console.log(" errpr", err);

        toast.error(
          "Not updated ,check yout internet connection",
          {
            autoClose: 3000,
          },
          {
            // Set the background color
            backgroundColor: themes.green.main,
            // Set the text color
            color: themes.white.main,
          }
          // Add custom CSS class
        );
      });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Box my={5}>
        {/* <Category /> */}

        <Box className="backtoHome" sx={{ ml: "5%" }}>
          <Button component={Link} href="/" sx={{ textTransform: "none" }}>
            <ChevronLeftOutlinedIcon sx={{ color: themes.myblack.main }} />
            <Typography
              variant="h5"
              sx={{ fontFamily: "Roboto", color: themes.myblack.main }}
            >
              {" "}
              Back to Home
            </Typography>
          </Button>
        </Box>
        <Box
          className="profile"
          my={5}
          sx={{
            alignItems: "center",

            marginLeft: {
              lg: "100px",
              md: "90px",
              sm: "30px",
              xs: "15px",
            },
            marginRight: {
              lg: "100px",
              md: "90px",
              sm: "30px",
              xs: "15px",
            },
            width: {
              lg: 510,
              md: 540,
              sm: 420,
              xs: 270,
            },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "Roboto",
                flexGrow: 1,
                mb: "30px",
              }}
            >
              Account info
            </Typography>
            <Tooltip title="Edit">
              <IconButton
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                {edit && <EditIcon />}
                <Typography variant="h4">
                  {!edit ? "Discard" : "Edit"}
                </Typography>
              </IconButton>
            </Tooltip>
          </Box>

          <Divider sx={{ mb: "10px" }} />
          <CustomTextField
            onChange={handleInputChnage}
            label="User name"
            value={inpuState.userName}
            name="userName"
            disabled={edit}
          />
          <CustomTextField
            onChange={handleInputChnage}
            label="Email"
            value={inpuState.email}
            name="email"
            disabled={edit}
          />
          {/* <CustomGenderField
            onChange={handleInputChnage}
            label="Gender"
            value={inpuState.gender}
            name="gender"
            disabled={edit}
          /> */}

          <CustomTextField
            onChange={handleInputChnage}
            label="City"
            name="city"
            value={inpuState.city}
            disabled={edit}
          />
          <CustomDate
            onChange={handleInputChnage}
            label="Date of Birth"
            name="dateofBirth"
            value={inpuState.dateofBirth}
            disabled={edit}
          />

          <Box
            sx={{
              marginTop: "20px",

              marginLeft: "0px",
              // flexGrow: 1,
              ml: "10px",
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              gap: "30px",
            }}
          >
            <Button
              disabled={loadingSave}
              style={{
                textTransform: "none",

                backgroundColor: loadingSave ? "grey" : themes.green.main,
                color: themes.white.main,
              }}
              onClick={handeSaveChange}
            >
              {loadingSave ? (
                <>
                  "Saving..."
                  <CircularProgress />
                </>
              ) : (
                " Save changes"
              )}
            </Button>
            <Button
              style={{
                textTransform: "none",

                backgroundColor: themes.green.main,
                color: themes.white.main,
              }}
              onClick={handleDialogeChange}
            >
              Change password
            </Button>

            <DialogeBox
              dialogeValue={dialogeValue}
              handleDialogeChange={handleDialogeChange}
              Content={PassChange}
              width="50%"
            />
          </Box>
        </Box>
      </Box>
      <Divider />
    </div>
  );
}
