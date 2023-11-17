import { ActionTypes } from "../constants/actionTypes";

export const setUserAction = (userData) => ({
  type: ActionTypes.SET_USER,
  payload: userData,
});
export const setCommitteeAction = (userData) => ({
  type: ActionTypes.SET_COMMITTEE,
  payload: userData,
});
export const updateUserAction = (userData) => ({
  type: ActionTypes.UPDATE_USER,
  payload: userData,
});
export const updateLoadingAction = (loading) => ({
  type: ActionTypes.LOADING,
  payload: loading,
});
export const updateMessageAction = (message) => ({
  type: ActionTypes.SET_MESSAGE,
  payload: message,
});
export const updateLoginStateAction = (isLoggedIn) => ({
  type: ActionTypes.UPDATE_LOGIN_STATE,
  payload: isLoggedIn,
});

//////user date
export const updateUserData = (field, value) => ({
  type: ActionTypes.UPDATE_USER_DATA,
  payload: { field, value },
});
