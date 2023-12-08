import React from "react";
import { Link } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#555",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#f44336",
    color: "#fff",
    borderRadius: "4px",
    padding: "1rem 2rem",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#d32f2f",
    },
  },
};

const NotFound = () => {
  return (
    <div style={styles.root}>
      <h1 style={styles.heading}>Oops!</h1>
      <h4 style={styles.subheading}>
        We couldn't find the page you're looking for.
      </h4>
      <Link to="/" style={styles.button}>
        Go back to home page
      </Link>
    </div>
  );
};

export default NotFound;
