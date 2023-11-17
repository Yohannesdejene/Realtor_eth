import { ActionTypes } from "../constants/actionTypes";
const storedDarkMode = localStorage.getItem("darkMode");
const initialDarkMode =
  storedDarkMode !== null ? Boolean(storedDarkMode) : false;
const intialState = {
  request: false,
  login: false,
  signup: false,
  darkMode: initialDarkMode,
  sideMenu: false,
  language: "en",
  buyRent: "buy",
};

export const tooglesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_REQUEST:
      return {
        ...state,
        request: action.payload,
      };
    case ActionTypes.UPDATE_LOGIN:
      return { ...state, login: payload };

    case ActionTypes.UPDATE_SIGNUP:
      return { ...state, signup: payload };
    case ActionTypes.UPDATE_DARK_MODE:
      return { ...state, darkMode: payload };
    case ActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    case ActionTypes.UPDATE_SIDE_MENU:
      return {
        ...state,
        sideMenu: payload,
      };
    case ActionTypes.SET_BUY_RENT:
      return {
        ...state,
        buyRent: payload,
      };
    default:
      return state;
  }
};
