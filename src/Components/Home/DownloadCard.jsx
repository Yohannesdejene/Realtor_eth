import { useState, useEffect, useRef } from "react";
import {
  Button,
  Typography,
  IconButton,
  Link,
  Box,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

const DownloadCard = () => {
  const sm = useMediaQuery("(max-width:600px)");
  const md = useMediaQuery("(max-width:960px)");
  const lg = useMediaQuery("(max-width:1280px)");
  const theme = useTheme();
  const themes = theme.palette;
  return (
    <Box className="downloadApp" sx={{ mt: "40px" }}>
      <Box
        sx={{
          display: "flex",
          // m: "5%",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          alignItems: "center",
          mt: "30px",
          gap: "100px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: {
              lg: "50%",
              md: "50%",
              sm: "70%",
              xs: "100%",
            },

            position: "relative",

            height: {
              lg: "400px",
              md: "250px",
              sm: "300px",
              xs: "200px",
            },
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <img
              src="/Images/businessf.png"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant={sm ? "h5" : "h4"} sx={{ fontWeight: 700 }}>
              Become Realtor agent
            </Typography>
            <Box
              sx={{
                display: "flex",
                mt: "10px",
                ml: "30%",
              }}
            >
              <Typography
                variant={sm ? "h6" : "h5"}
                component={Link}
                href="/becomeagent"
                sx={{
                  fontWeight: 700,
                  textDecoration: "none",
                  justifyContent: "center",
                  ml: "10px",
                  mr: "5px",
                  color: themes.green.main,
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Register here
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          className="get out app"
          sx={{
            display: "flex",
            flexDirection: {
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            width: {
              lg: "50%",
              md: "50%",
              sm: "80%",
              xs: "100%",
            },
            gap: {
              lg: "10px",
              md: "6px",
              sm: "10px",
            },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src="Images/phone.png"
              alt="Phone"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            className="Download Text"
            sx={{
              padding: "10px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
              borderRadius: "5px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mt: {
                  sm: "20px",
                  md: "20px",
                  lg: "50px",
                  xs: "5px",
                },
                mb: {
                  lg: "10px",
                  md: "8px",
                  sm: "10px",
                  xs: "5px",
                },
              }}
            >
              Try our App
            </Typography>
            <Typography
              variant={sm ? "h6" : "h5"}
              sx={{
                mb: {
                  lg: "30px",
                  md: "30px",
                  sm: "30px",
                  xs: "20px",
                },
              }}
            >
              Experience the best your neighborhood has to offer, all in one
              app.
            </Typography>

            <Box
              sx={{
                width: "100%",
                maxWidth: 170,
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="https://play.google.com/store/apps/details?id=com.maz.realtor">
                <CardMedia
                  component="img"
                  image="/Images/android.png"
                  alt="Android"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=com.maz.realtor">
                <CardMedia
                  component="img"
                  image="/Images/ios.png"
                  alt="iOS"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DownloadCard;
