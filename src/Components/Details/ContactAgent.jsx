import {
  Typography,
  Box,
  CardMedia,
  Divider,
  useMediaQuery,
  useTheme,
  Paper,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
const ContactAgent = () => {
  const xs = useMediaQuery("(max-width:600px)");
  const sm = useMediaQuery("(max-width:900px)");
  const md = useMediaQuery("(max-width:1200px)");
  const lg = useMediaQuery("(min-width:1201px)");
  const theme = useTheme();
  const themes = theme.palette;
  return (
    <>
      {" "}
      <Box
        elevation={2}
        sx={{
          border: "1px solid ",
          borderColor: "#B5B6B6  ",
          paddingBottom: "50px",
        }}
      >
        <Typography
          variant={xs ? "h5" : sm ? "h5" : md ? "h5" : lg ? "h4" : "h5"}
          sx={{
            display: "flex",
            mt: "2px",
            fontFamily: "Roboto",
            justifyContent: "center",
            mb: "10px",
            fontWeight: "bold",
          }}
        >
          {" "}
          Contact Agent
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
          <CardMedia
            component="img"
            image="/alula.jpg"
            alt="alt"
            sx={{
              height: {
                lg: "250px",
                md: "200px",
                sm: "300px",
                xs: "200px",
              },
              width: {
                lg: "250px",
                md: "250px",
                sm: "300px",
                xs: "200px",
              },
              borderRadius: "50%",
            }}
          />
        </Box>
        <Typography
          variant={xs ? "h5" : md ? "h5" : "h5"}
          sx={{
            display: "flex",
            mt: "5px",
            fontFamily: "Roboto",
            justifyContent: "center",
            color: themes.green.main,
            fontweight: "bold",
          }}
        >
          {" "}
          Alula Tesfay
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "5px",
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                mt: "10px",
                fontFamily: "Roboto",

                mb: "10px",
                gap: "5px",
              }}
            >
              {" "}
              <PhoneIcon /> +251914524657
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                mt: "10px",
                fontFamily: "Roboto",
                textAlign: "left",
                mb: "10px",
                gap: "5px",
              }}
            >
              {" "}
              <EmailIcon /> alulatesfay444@gmail.com
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                mt: "10px",
                fontFamily: "Roboto",
                textAlign: "left",
                mb: "10px",
                gap: "5px",
              }}
            >
              {" "}
              <TelegramIcon />
              https://t.me/realtoralula
            </Typography>
          </Box>
        </Box>
        {/* <Box sx={{ justifyContent: "center", display: "flex" }}>
          <Button
            style={{
              textTransform: "none",

              textAlign: "center",
              backgroundColor: themes.green.main,
              color: themes.mywhite.main,
            }}
          >
            Send Him Notifice
          </Button>
        </Box> */}
      </Box>
    </>
  );
};
export default ContactAgent;
