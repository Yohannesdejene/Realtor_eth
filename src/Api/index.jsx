import axios from "axios";

const api = axios.create({
  baseURL: "https://catfact.ninja/fact",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default api;
