import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  user: {
    id: null,
    userName: null,
    phoneNumber: null,
    gender: null,
    email: null,
    city: null,
    isActive: null,
    dateofBirth: null,
  },
  loading: false,
  message: "",
  isLoggedIn: false,
  committee: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.UPDATE_USER_DATA:
      const { field, value } = action.payload;
      return {
        ...state,

        user: {
          ...state.user,
          [field]: value,
        },
      };

    case ActionTypes.UPDATE_LOGIN_STATE:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case ActionTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case ActionTypes.SET_COMMITTEE:
      return { ...state, committee: action.payload };

    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionTypes.SET_HOUSE_TYPE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          houseType: action.payload,
        },
      };
    default:
      return state;
  }
};
