import axios from "axios";
import { useEffect } from "react";

const api = axios.create({
  // baseURL: "https://circlefreelance.com/realtor",
  baseURL: "https://api.realtoreth.com",
  // baseURL: 'http://localhost:4004/api',
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// export const baseURL = api.baseURL;

export default api;
