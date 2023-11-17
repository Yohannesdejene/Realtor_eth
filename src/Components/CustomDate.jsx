import React, { useState } from "react";
import { TextField } from "@mui/material";

const CustomDate = ({ label, value, onChange, name, disabled }) => {
  const handleDateChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      type="date"
      name={name}
      sx={{ width: "100%", ml: "10px" }}
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
      disabled={disabled}
    />
  );
};

export default CustomDate;
