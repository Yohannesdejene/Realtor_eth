import axios from "axios";

const api = axios.create({
  // baseURL: "https://circlefreelance.com/realtor",
  baseURL: "https://api.realtoreth.com/realtor",
  // baseURL: 'http://localhost:4004/api',
  headers: {
    // "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
