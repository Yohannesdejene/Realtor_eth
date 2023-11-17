import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Typography } from "@mui/material";

const MapComponent = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 9.0192, lng: 38.7525 }} // San Francisco coordinates
  >
    <Marker position={{ lat: 9.0192, lng: 38.7525 }} />
  </GoogleMap>
));

const GoogleMapBox = () => {
  return (
    <div
      style={{
        height: {
          md: "500px",
          xs: "400px",
        },
        marginTop: "40px",
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "21px",
          fontFamily: "Roboto",
          fontWeight: "bold",
          mb: "10px",
        }}
      >
        Map/Location
      </Typography>
      <MapComponent
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default GoogleMapBox;
