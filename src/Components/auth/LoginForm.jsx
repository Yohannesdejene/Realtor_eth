import { useState, useReducer, useRef, useEffect } from "react";
import {
  TextField,
  Box,
  Button,
  LinearProgress,
  Link,
  Typography,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import { useTheme, styled } from "@mui/material/styles";
import { updateLogin } from "../../store/actions/ToogleAction";
import {
  updateLoginStateAction,
  updateUserAction,
} from "../../store/actions/UserAction";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import api from "../../Services/index";
const initialState = {
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "PHONE_NUMBER":
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };

    case "PASSWORD":
      return {
        ...state,
        password: action.password,
      };

    default:
      return state;
  }
}
// Encryption function
function encryptData(data, passphrase) {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    passphrase
  ).toString();
  return ciphertext;
}

// Decryption function
function decryptData(ciphertext, passphrase) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
}
const LoginForm = (props) => {
  const theme = useTheme();
  const dispatches = useDispatch();
  const themes = theme.palette;
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errmessage, seterrmessage] = useState("");
  const user = useSelector((user) => user.usersReducer);

  const [loading, setloading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    seterrmessage("");
    console.log("total states", state);
    setloading(true);

    const { phoneNumber, password } = state;
    const formData = new FormData();
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);
    const data = Object.fromEntries(formData);
    console.log("formdata", data);

    api
      .post("/auth/login", formData)
      .then((res) => {
        console.log("response", res.data.user);
        const token = res.data.token;
        localStorage.setItem("token", token);
        const { id, userName, email, phoneNumber, gender, isActive, city } =
          res.data.user;
        const userData = {
          id,
          userName,
          email,
          phoneNumber,
          gender,
          city,
          dateofBirth: null,
          isActive,
        };
        console.log("user data", userData);
        dispatches(updateUserAction(userData));

        const expirationTime = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const loginData = { data: userData, expires: expirationTime };
        const passphrase = "johnabi";

        const encryptedData = encryptData(loginData, passphrase);

        // Store the encrypted data in localStorage
        localStorage.setItem("loginData", encryptedData);

        // Decrypt the stored data

        setloading(false);
        if (res.status == 200 || res.status == 201) {
          toast.success(
            "Logged in sucessfully, Redirecting..",
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
          setTimeout(() => {
            dispatches(updateLogin(true));
            dispatches(updateLoginStateAction(true));
            window.location.reload();
          }, [3000]);
        } else if (res.status == 400) {
          seterrmessage("Error in password or username");
        } else {
          seterrmessage("Error in password or username");
        }
      })
      .catch((err) => {
        console.log(" errpr", err);
        setloading(false);

        if (err.response && err.response.status === 401) {
          seterrmessage("Invalid password ");
        } else if (err.response && err.response.status == 404) {
          seterrmessage("User not found");
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
              color: themes.myblack.main,
              fontWight: "Roboto",
            }}
          >
            {" "}
            Wellcome back,
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

          <TextField
            variant="standard"
            value={state.phoneNumber}
            onChange={(e) =>
              dispatch({ type: "PHONE_NUMBER", phoneNumber: e.target.value })
            }
            name="phoneNumber"
            label="Phone Number"
            sx={{ marginBottom: "20px", marginTop: "10px" }}
            required
            type="number"
          />

          <TextField
            variant="standard"
            name="password"
            label="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD", password: e.target.value })
            }
            sx={{ marginBottom: "15px" }}
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
          {/* <span style={{ color: "red" }}>{formErrorsSeller.password}</span> */}
        </Box>

        <Button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "30px",
            fontSize: "20px",
            textTransform: "unset",
            color: themes.white.main,
            backgroundColor: loading ? themes.grey.main : themes.green.main,
          }}
          //   disabled={savingSeller}
        >
          {loading ? "Saving..." : "Login"}
        </Button>
      </form>
      <br /> <br />
    </Box>
  );
};
export default LoginForm;
