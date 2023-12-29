// Your component file

import React, { useEffect, useState } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    <Marker position={{ lat: props.latitude, lng: props.longitude }} />
  </GoogleMap>
));

const GoogleMapComponent = (props) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [latitude, setLatitude] = useState(1);
  const [langitude, setLongtude] = useState(0);
  console.log("props", props.house.mapLocation);
  useEffect(() => {
    const map = props.house.mapLocation;
    const mapsplit = map.split(",");
    console.log("map", map);
    setLatitude(parseFloat(mapsplit[0]));
    setLongtude(parseFloat(mapsplit[1]));
  }, []);

  console.log("latitude", latitude);
  console.log("langitude", langitude);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC2YukgrlGVdc0NZHY6JuRJK3GuIs5U4Ks&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);
    window.gm_authFailure = () => {
      console.error("Google Maps API failed to load");
    };
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!mapLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Map
      containerElement={<div style={{ height: "400px", width: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}
      // latitude={props.latitude}
      latitude={latitude}
      // longitude={props.longitude}
      longitude={langitude}
    />
  );
};

export default GoogleMapComponent;
