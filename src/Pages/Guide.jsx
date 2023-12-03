import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

const Guide = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: "100px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        User Guide
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Searching for Properties
            </Typography>
            <Typography variant="body1">
              To search for properties, use the search bar at the top of the
              page. Enter relevant keywords, location, or other filters to
              narrow down your search results.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Viewing Property Details
            </Typography>
            <Typography variant="body1">
              Click on a property listing to view more details. You'll find
              information such as property description, features, pricing, and
              contact details of the real estate agent.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Saving Favorites
            </Typography>
            <Typography variant="body1">
              To save your favorite properties, create an account and log in.
              Once logged in, you can click on the heart icon or "Save as
              Favorite" button on property listings to add them to your
              favorites list.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Contacting Real Estate Agents
            </Typography>
            <Typography variant="body1">
              If you're interested in a property, you can use the contact
              information provided in the listing to get in touch with the real
              estate agent. They will assist you further with property inquiries
              or scheduling viewings.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Guide;
