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
  Grid,
  Tooltip,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import {
  CommonTypography,
  DescWritter,
  CommonButtonLink,
} from "../CommonComponent/index";
import VideoPlayer from "../VideoPlayer";

const DownloadCard = () => {
  const theme = useTheme();
  const themes = theme.palette;
  const MoreButton = styled(Button)(({ theme }) => ({
    backgroundColor: themes.green.main,
    color: themes.white.main,
    padding: "10px 20px",
    borderRadius: "5px",
    textTransform: "none",

    ":hover": {
      backgroundColor: themes.green.main,
      color: themes.white.main,
    },
  }));
  return (
    <Grid
      container
      justifyContent="center"
      spacing={5}
      sx={{ alignItems: "center", height: "100%" }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        {/* <CardMedia
          component="img"
          src="/Images/business.png"
          alt="Business"
          sx={{
            maxWidth: "100%",
          }}
        />

        <Box
          sx={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <CommonTypography label=" Become Realtor agent" />

          <CommonButtonLink label="Register here" route="/becomeagent" />
        </Box> */}
        <Box sx={{ height: "100%" }}>
          <VideoPlayer videoId="gxNl9TQ3fqc" />
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Grid
          container
          justifyContent="center"
          spacing={4}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CardMedia
              component="img"
              src="Images/phone.png"
              alt="Phone"
              sx={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            container
            direction="column"
            justifyContent="center"
            spacing={2}
          >
            <Box sx={{ alignItems: "center" }}>
              <CommonTypography label="Try our app" />
              <DescWritter
                label="  Experience the best your neighborhood has to offer, all in one
                app."
              />

              <Grid
                container
                direction="column"
                justifyContent="center"
                spacing={2}
                marginTop="20px"
                sx={{ alignItems: "center" }}
              >
                <Grid item>
                  <Link
                    sx={{ display: "flex", justifyContent: "center" }}
                    href="https://play.google.com/store/apps/details?id=com.maz.realtor"
                  >
                    <CardMedia
                      component="img"
                      src="/Images/android.png"
                      alt="Android"
                      sx={{
                        width: "60%",
                        borderRadius: "10px",

                        objectFit: "contain",
                      }}
                    />
                  </Link>
                </Grid>
                <Grid item>
                  <Tooltip title="Comming soon...">
                    <Link
                      title="Coming soon"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <CardMedia
                        component="img"
                        src="/Images/ios.png"
                        alt="iOS"
                        sx={{
                          width: "60%",
                          borderRadius: "10px",

                          objectFit: "contain",
                        }}
                      />
                    </Link>
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default DownloadCard;

//  <Grid item xs={12} sm={12} md={6} lg={6} justifyContent="center">
//         <CardMedia
//           component="img"
//           src="/Images/business.png"
//           alt="Business"
//           sx={{
//             maxWidth: "100%",
//           }}
//         />

//         <Box
//           sx={{
//             maxWidth: "100%",
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           <CommonTypography label=" Become Realtor agent" />

//           <CommonButtonLink label="Register here" route="/becomeagent" />
//         </Box>

//       </Grid>
