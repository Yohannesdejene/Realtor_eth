import { ActionTypes } from "../constants/actionTypes";

export const updateDarkMode = (mode) => ({
  type: ActionTypes.UPDATE_DARK_MODE,
  payload: mode,
});
export const updateLogin = (status) => ({
  type: ActionTypes.UPDATE_LOGIN,
  payload: status,
});
export const updateSignup = (status) => ({
  type: ActionTypes.UPDATE_SIGNUP,
  payload: status,
});

export const updateRequest = (status) => ({
  type: ActionTypes.UPDATE_REQUEST,
  payload: status,
});
export const updateLanguage = (language) => ({
  type: ActionTypes.SET_LANGUAGE,
  payload: language,
});
export const updateSideMenu = (value) => ({
  type: ActionTypes.UPDATE_SIDE_MENU,
  payload: value,
});

export const setBuyrent = (value) => ({
  type: ActionTypes.SET_BUY_RENT,
  payload: value,
});
