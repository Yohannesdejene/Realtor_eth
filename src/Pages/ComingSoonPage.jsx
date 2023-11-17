import React from "react";
import { Container, Typography } from "@mui/material";
import { Alarm } from "@mui/icons-material";

const ComingSoonPage = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Alarm style={{ fontSize: 100, marginBottom: 16 }} />
      <Typography variant="h1" style={{ fontSize: 36, marginBottom: 16 }}>
        Coming Soon
      </Typography>
      <Typography variant="h5" style={{ fontSize: 18 }}>
        We are working on something awesome. Stay tuned!
      </Typography>
    </Container>
  );
};

export default ComingSoonPage;
