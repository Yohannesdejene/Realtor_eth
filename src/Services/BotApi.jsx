import axios from "axios";
import { useEffect, useState } from "react";

const createApiInstance = () => {
  const api = axios.create({
    // baseURL: "https://circlefreelance.com/realtor",

    // baseURL: "https://api.realtoreth.com/realtor",
    baseURL: "https://api.realtoreth.com",
    // baseURL: "http://localhost:4001/realtor",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "multipart/form-data",
    },
  });

  const ApiWrapper = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
      const interval = setInterval(() => {
        const newToken = localStorage.getItem("token");
        setToken(newToken);
      }, 30000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    useEffect(() => {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }, [token]);

    return null; // Placeholder component, replace with your actual component
  };

  return { api, ApiWrapper };
};

export default createApiInstance;
