import {
  Typography,
  Box,
  CardMedia,
  Divider,
  useMediaQuery,
  useTheme,
  Paper,
  Button,
  Grid,
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
    <Grid
      container
      spacing={1}
      display="flex"
      justifyContent="center"
      sx={{ border: "1px solid ", borderColor: "#C9CAC7" }}
    >
      <Grid item xs={12}>
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
          Contact Agent
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }}>
        <CardMedia
          component="img"
          sx={{
            width: {
              md: "200px",
              xs: "150px",
            },
            height: {
              xs: "150px",
              md: "200px",
            },
          }}
          image="/alula.jpg"
          alt="alt"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant={xs ? "h5" : md ? "h5" : "h5"}
          sx={{
            display: "flex",
            mt: "5px",
            fontFamily: "Roboto",
            justifyContent: "center",
            color: themes.green.main,
            fontWeight: "bold",
          }}
        >
          Alula Tesfay
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box>
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
            <TelegramIcon /> https://t.me/realtoralula
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};
export default ContactAgent;
