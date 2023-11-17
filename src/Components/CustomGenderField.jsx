import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const styles = {
  textField: {
    margin: "10px",
    color: "red",
    width: "100%",
    "& .MuiInputBase-root": {
      height: 40,
    },
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
  },
};

const CustomGenderField = ({ value, onChange, label, disabled }) => {
  return (
    <div style={{ position: "relative" }}>
      <TextField
        select
        style={styles.textField}
        value={value}
        onChange={onChange}
        label={label}
        InputLabelProps={{ shrink: true }}
        disabled={disabled}
      >
        <MenuItem value="M">Male</MenuItem>
        <MenuItem value="F">Female</MenuItem>
      </TextField>
      {/* <IconButton style={styles.button} sx={{ ml: "20px" }}>
        <EditIcon />
      </IconButton> */}
    </div>
  );
};

export default CustomGenderField;
