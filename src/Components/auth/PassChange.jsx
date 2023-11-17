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
const PassChange = (props) => {
  const theme = useTheme();
  const dispatches = useDispatch();
  const themes = theme.palette;
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handlePassChange = (event) => {
    const { name, value } = event.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [showPassword, setShowPassword] = useState(false);
  const [errmessage, seterrmessage] = useState("");
  const user = useSelector((user) => user.usersReducer);

  const [loading, setloading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    seterrmessage("");
    if (passwords.newPassword !== passwords.confirmPassword) {
      seterrmessage("Password Don't match");
      return;
    }
    if (passwords.newPassword.length < 6) {
      seterrmessage("Password lenght must be graater than 5 charachters");
      return;
    }
    setloading(true);

    const { oldPassword, newPassword } = passwords;
    const formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("newPassword", newPassword);
    const data = Object.fromEntries(formData);
    console.log("formdata", data);

    api
      .put("/user/reset", formData)
      .then((res) => {
        console.log("response", res.data.user);

        // Decrypt the stored data

        setloading(false);
        if (res.status == 200 || res.status == 201) {
          toast.success(
            "Password Changed",
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
        } else if (res.status == 401) {
          seterrmessage("Incorrect password");
        } else {
          seterrmessage("Some thing went wrong try later");
        }
      })
      .catch((err) => {
        console.log(" errpr", err);
        setloading(false);

        if (err.response && err.response.status === 401) {
          seterrmessage("Incorrect password ");
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
        mb: "10px",
      }}
    >
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <center>
          <Typography
            variant="h4"
            sx={{
              color: themes.myblack.main,
              fontWight: "Roboto",
            }}
          >
            {" "}
            Password Change
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
            value={passwords.oldPassword}
            onChange={handlePassChange}
            name="oldPassword"
            label="Old password"
            sx={{ marginBottom: "20px", marginTop: "10px" }}
            required
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
            value={passwords.newPassword}
            onChange={handlePassChange}
            name="newPassword"
            label="New password"
            sx={{ marginBottom: "20px", marginTop: "10px" }}
            required
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
            value={passwords.confirmPassword}
            onChange={handlePassChange}
            name="confirmPassword"
            label="Confirm Password"
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
            fontSize: "17px",
            textTransform: "unset",
            color: themes.white.main,
            backgroundColor: loading ? themes.grey.main : themes.green.main,
          }}
          //   disabled={savingSeller}
        >
          {loading ? "Saving..." : "Change Password"}
        </Button>
      </form>
      <br /> <br />
    </Box>
  );
};
export default PassChange;
