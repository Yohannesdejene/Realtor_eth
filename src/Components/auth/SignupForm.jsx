import { useState, useReducer } from "react";

import {
  TextField,
  Box,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { useTheme, styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import api from "../../Services/index";
import { updateLogin } from "../../store/actions/ToogleAction";
import { updateLoginStateAction } from "../../store/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  userName: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  email: "",
  gender: "",
  city: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "USERNAME":
      return {
        ...state,
        userName: action.userName,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.password,
      };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: action.confirmPassword,
      };

    case "PHONE_NUMBER":
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.email,
      };
    case "GENDER":
      return {
        ...state,
        gender: action.gender,
      };
    case "CITY":
      return {
        ...state,
        city: action.city,
      };
    default:
      return state;
  }
}

const SignupForm = (props) => {
  const theme = useTheme();
  const dispatches = useDispatch();
  const toogle = useSelector((user) => user.tooglesReducer);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [errmessage, seterrmessage] = useState("");
  const [loading, setloading] = useState(false);

  function isValidPhoneNumber(phoneNumber) {
    const regex = /^(09|07)\d{8}$/;
    return regex.test(phoneNumber);
  }
  function isValidPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return regex.test(password);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    seterrmessage("");
    setloading(true);
    let validphone = isValidPhoneNumber(state.phoneNumber);
    let validpassword = isValidPassword(state.password);
    if (state.password.length < 6 || state.password.length > 15) {
      seterrmessage(
        "Password length must be greater than 5 characters and less than 15 characters"
      );
      setloading(false);
      return;
    }
    if (!validphone) {
      seterrmessage("Enter a valid phonenumber, it should start with 09 or 07");
      setloading(false);
      return;
    }
    if (state.password !== state.confirmPassword) {
      seterrmessage("Password don't match");
      setloading(false);
      return;
    }

    const { userName, phoneNumber, password } = state;
    const formData = new FormData();

    formData.append("userName", userName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);
    formData.append("email", state.email);
    formData.append("gender", state.gender);
    formData.append("city", state.city);
    const data = Object.fromEntries(formData);
    console.log("formdata", data);

    api
      .post("/auth/signup", formData)
      .then((res) => {
        console.log("daratat", res.data);
        setloading(false);
        if (res.status == 201) {
          seterrmessage("Successuly registered...redirecting");
          setTimeout(() => {
            dispatches(updateLogin(false));
            dispatches(updateLoginStateAction(true));
          }, [3000]);
        } else if (res.status == 400) {
          seterrmessage("Phone number already used");
        } else {
          seterrmessage("It looks like you have already an account, try login");
        }
      })
      .catch((err) => {
        setloading(false);
        console.log("err", err);
        if (err.response.status === 400) {
          seterrmessage("Phone number already used");
        } else if (err.response.status == 500) {
          seterrmessage("It looks like you have already an account, try login");
        } else {
          console.log("The error is ", err);
          seterrmessage("Network error ");
        }
      });
  };

  return (
    <Box
      sx={{
        width: {
          lg: "25vw",
          md: "30vw",
          sm: "40vw",
          xs: "70vw",
        },
        display: "flex",
        justifyContent: "center",
        height: "55vh",
      }}
    >
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <center>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.myblack.main,
              fontWight: "Bold",
            }}
          >
            {" "}
            Create new account
          </Typography>
        </center>
        <br />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ color: "red" }}>{errmessage}</span>
          {/* <Stack
              gap={2}
              direction={{ sm: "column", xs: "column", lg: "row", md: "row" }}
              sx={{ width: "100%" }}
            >
             
              <TextField
                value={state.lastName}
                onChange={(e) =>
                  dispatch({ type: "LAST_NAME", lastName: e.target.value })
                }
                name="lastName"
                label="Last Name"
                variant="standard"
                sx={{
                  margin: "5px",
                  width: { sm: "47%", xs: "96%", lg: "96%", md: "47%" },
                }}
                required
              />
            </Stack> */}
          <TextField
            variant="standard"
            value={state.userName}
            onChange={(e) =>
              dispatch({ type: "USERNAME", userName: e.target.value })
            }
            name="userName"
            label="User Name"
            sx={{ marginBottom: "20px" }}
            // sx={{
            //   margin: "5px",
            //   width: { sm: "47%", xs: "96%", lg: "96%", md: "47%" },
            // }}
            required
          />
          <TextField
            variant="standard"
            value={state.phoneNumber}
            onChange={(e) =>
              dispatch({ type: "PHONE_NUMBER", phoneNumber: e.target.value })
            }
            name="phoneNumber"
            label="Phone Number"
            sx={{ marginBottom: "20px" }}
            required
            type="number"
          />

          {/* <span style={{ color: "red" }}>{formErrorsSeller.password}</span> */}

          <TextField
            variant="standard"
            name="password"
            label="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD", password: e.target.value })
            }
            sx={{ marginBottom: "20px" }}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <RemoveRedEyeIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            variant="standard"
            value={state.confirmPassword}
            onChange={(e) =>
              dispatch({
                type: "CONFIRM_PASSWORD",
                confirmPassword: e.target.value,
              })
            }
            name="confirmPassword"
            label="Confirm Password"
            sx={{ marginBottom: "20px" }}
            required
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <RemoveRedEyeIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="standard"
            value={state.email}
            onChange={(e) => dispatch({ type: "EMAIL", email: e.target.value })}
            name="email"
            label="Email"
            sx={{ marginBottom: "20px" }}
            // sx={{
            //   margin: "5px",
            //   width: { sm: "47%", xs: "96%", lg: "96%", md: "47%" },
            // }}
            required
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel id="furnished-label">Gender</InputLabel>
            <Select
              variant="standard"
              required
              labelId="gender"
              id="gender"
              style={{
                maxWidth: "500px",

                // maxHeight: "50px",
                borderRadius: "20px",
              }}
              value={state.gender}
              onChange={(e) =>
                dispatch({ type: "GENDER", gender: e.target.value })
              }
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="standard"
            value={state.city}
            onChange={(e) => dispatch({ type: "CITY", city: e.target.value })}
            name="city"
            label="City"
            sx={{ marginBottom: "20px" }}
            // sx={{
            //   margin: "5px",
            //   width: { sm: "47%", xs: "96%", lg: "96%", md: "47%" },
            // }}
            required
          />
        </Box>

        <Button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "30px",
            fontSize: "20px",
            textTransform: "unset",
            color: theme.palette.white.main,
            backgroundColor: loading ? "grey" : theme.palette.green.main,
          }}
          //   disabled={savingSeller}
        >
          {loading ? "Saving..." : "Create my account"}
          {loading ? <CircularProgress /> : ""}
        </Button>
      </form>
      <br /> <br />
    </Box>
  );
};
export default SignupForm;
