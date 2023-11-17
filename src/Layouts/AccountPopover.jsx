import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Button,
  Link,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from "@mui/material";

// mocks_

import { useTranslation } from "react-i18next";
// utils
import { updateLoginStateAction } from "../store/actions/UserAction";
import { updateLogin } from "../store/actions/ToogleAction";

import { useDispatch, useSelector } from "react-redux";
import api from "../Services/index";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
export default function AccountPopover() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersReducer.user);
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);
  console.log("uer in nav", user);
  const navigate = useNavigate();
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleLogout = async () => {
    localStorage.removeItem("loginData");
    localStorage.removeItem("token");
    dispatch(updateLogin(true));
    dispatch(updateLoginStateAction(false));
    // window.location.reload();
  };
  const MENU_OPTIONS = [
    {
      label: t("savedhomes"),
      link: "/savedhomes",
    },

    {
      label: t("profile"),
      icon: "eva:person-fill",
      link: "/profile",
    },
  ];
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar sx={{ fontSize: "5px" }} />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 200,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        {user && (
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="h5" sx={{ color: "text.secondary" }} noWrap>
              {user.phoneNumber}
            </Typography>
          </Box>
        )}

        <Divider />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} component={Link} href={option.link}>
              {/* <ListItemText
                primary={option.label}
                sx={{
                  fontSize: 20,
                }}
              /> */}
              <Typography variant="h5" fontFamily="Roboto">
                {" "}
                {option.label}
              </Typography>
            </MenuItem>
          ))}
        </Stack>

        <Divider />

        <MenuItem
          onClick={handleLogout}
          // sx={{ m: 1, fontSize: "30px" }}
          component={Link}
        >
          <IconButton>
            <LogoutIcon />
            <Typography variant="h5" sx={{ fontFamily: "Roboto" }}>
              {t("logout")}
            </Typography>
          </IconButton>
        </MenuItem>
      </Popover>
    </>
  );
}
