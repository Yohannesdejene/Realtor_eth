import { useState, useEffect } from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import AdvacedFilter from "./Pages/AdvacedFilter";
import Guide from "./Pages/Guide";
import SavedHomes from "./Pages/SavedHomes";
import Search from "./Pages/Search";
import NavBar from "./Layouts/NavBar";
import RequestForm from "./Pages/RequestForm";
import HomeType from "./Pages/HomeType";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import ComingSoonPage from "./Pages/ComingSoonPage";
import Index from "./Pages/Realstates/Index";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { alpha } from "@mui/system";
import { updateDarkMode } from "./store/actions/ToogleAction";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import CryptoJS from "crypto-js";
import { toast } from "react-toastify";

import {
  updateLoginStateAction,
  updateUserAction,
} from "./store/actions/UserAction";
import { updateLogin } from "./store/actions/ToogleAction";

import { useDispatch, useSelector } from "react-redux";

const ThemeLight = createTheme({
  typography: {
    h1: {
      fontSize: 35,
    },
    h2: {
      fontSize: 30,
    },
    h3: {
      fontSize: 21,
    },
    h4: {
      fontSize: 17,
    },
    h5: {
      fontSize: 17,
    },
    h6: {
      fontSize: 15,
    },
    b1: {
      fontSize: 23,
    },
    b2: {
      fontSize: 21,
    },
    body1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 10,
    },
  },
  palette: {
    mode: "light",
    green: {
      main: "#3D783D",
    },
    mygreen: {
      main: "#3D783D",
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000000",
    },
    mywhite: {
      main: "#ffffff",
    },
    myblack: {
      main: "#000000",
    },

    grey: {
      main: "#4C4C4C",
    },
    mygrey1: {
      main: "#4C4C4C",
    },
    mygrey2: {
      main: "#4C4C4C",
    },
    background: {
      main: "#ffffff",
    },
    backgroundone: {
      main: "#4C4C4C",
    },
    primaryCustom: {
      main: "#3D783D",
    },
  },
});

const ThemeDark = createTheme({
  typography: {
    h1: {
      fontSize: 35,
    },
    h2: {
      fontSize: 30,
    },
    h3: {
      fontSize: 21,
    },
    h4: {
      fontSize: 17,
    },
    h5: {
      fontSize: 17,
    },
    h6: {
      fontSize: 15,
    },
    b1: {
      fontSize: 17,
    },
    b2: {
      fontSize: 17,
    },
    body1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 10,
    },
  },
  palette: {
    mode: "dark",
    green: {
      main: "#3D783D",
    },
    mygreen: {
      main: "#ffffff",
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000000",
    },
    mywhite: {
      main: "#000000",
    },
    myblack: {
      main: "#ffffff",
    },
    grey: {
      main: "#4C4C4C",
    },
    mygrey1: {
      main: "#ffffff",
    },
    mygrey2: {
      main: "#000000",
    },
    background: {
      main: "#000000",
    },
    backgroundone: {
      main: "#ffffff",
    },
  },
});

import "./App.css";

import enTranslation from "./Language/english.json";
import amTranslation from "./Language/amharic.json";
// Configure i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    am: { translation: amTranslation },
  },
  lng: "en", // Set the default language
  fallbackLng: "en", // Fallback language if translation not available
  interpolation: { escapeValue: false }, // Disable HTML escaping
});
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

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((user) => user.tooglesReducer.darkMode);
  const login = useSelector((user) => user.tooglesReducer.login);

  // useEffect(() => {
  //   const hideTimer = setTimeout(() => {
  //     setIsVisible(false);
  //     const showTimer = setTimeout(() => {
  //       setIsVisible(true);
  //     }, 1000); // 1 second (1000ms = 1 second)
  //     return () => {
  //       clearTimeout(showTimer);
  //     };
  //   }, 3000); // 5 minutes (300000ms = 5 minutes)

  //   return () => {
  //     clearTimeout(hideTimer);
  //   };
  // }, [isVisible]);
  const handleButtonClick = () => {
    toast.error("Success message");
  };
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    console.log("darkMode1", darkMode);
    const darkModeTest = localStorage.getItem("darkMode");
    console.log("darkmode testing", darkModeTest);

    if (darkModeTest !== null) {
      console.log("dispatching");
      const bool = Boolean(darkModeTest);
      dispatch(updateDarkMode(bool));
    }
  }, [dispatch]);
  const theme = darkMode ? ThemeDark : ThemeLight;

  useEffect(() => {
    const passphrase = "johnabi";

    const storedData = localStorage.getItem("loginData");
    if (storedData) {
      const decryptedData = decryptData(storedData, passphrase);

      // Access the decrypted data

      if (Date.now() < decryptedData.expires) {
        // dispatch(updateUserAction(userData));
        dispatch(updateUserAction(decryptedData.data));

        dispatch(updateLoginStateAction(true));
        dispatch(updateLogin(true));
        // Data is still valid, use it
      } else {
        // Data has expired, remove it from localStorage
        toast.error("Session Expired ,login again", {
          autoClose: 3000,
        });

        localStorage.removeItem("loginData");
      }
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={ThemeLight}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:homeId" element={<Detail />} />
            <Route path="/realestates/:realestateName" element={<Index />} />
            <Route path="/findagent" element={<ComingSoonPage />} />
            <Route path="/homes/:homeType" element={<HomeType />} />
            <Route path="/becomeagent" element={<ComingSoonPage />} />

            {login && (
              <>
                <Route path="/savedhomes" element={<SavedHomes />} />
                <Route path="/request" element={<RequestForm />} />
                <Route path="/profile" element={<Profile />} />
              </>
            )}
            <Route path="/guide" element={<Guide />} />

            <Route path="/homes" element={<AdvacedFilter />} />
            <Route path="/search" element={<Search />} />
            {/* <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
