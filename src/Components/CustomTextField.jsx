import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/tooltip";

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

const CustomTextField = ({ value, onChange, label, name, disabled }) => {
  return (
    <div style={{ position: "relative" }}>
      <TextField
        style={styles.textField}
        value={value}
        name={name}
        onChange={onChange}
        label={label}
        InputLabelProps={{ shrink: true }}
        disabled={disabled}
      />
      {/* <IconButton style={styles.button}>
        <Tooltip title="Edit">
          <EditIcon />
        </Tooltip>
      </IconButton> */}
    </div>
  );
};

export default CustomTextField;
