import api from "./index";

const signup = async (username, email, password) => {
  const { data } = await api.post("auth/signup", { username, email, password });
  return data;
};

const login = async (email, password) => {
  const { data } = await api.post("auth/login", { email, password });
  localStorage.setItem("token", data.token);
  return data;
};
const request = async (
  category,
  location,
  propertyType,
  bedroom,
  bathroom,
  minarea,
  maxarea,
  furnished
) => {
  const { data } = await api.post("auth/login", {
    category,
    location,
    propertyType,
    bedroom,
    bathroom,
    minarea,
    maxarea,
    furnished,
  });
  localStorage.setItem("token", data.token);
  return data;
};

const logout = () => {
  localStorage.removeItem("token");
};
// const request=aync(category,location[],propertyType[],bedroom[],bathroom[],)=>{
//     const { data } = await api.post("auth/request", { email, password });
//     localStorage.setItem("token", data.token);
//     return data;
// }

export default {
  signup,
  login,
  logout,
  request,
};
