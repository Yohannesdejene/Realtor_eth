import { ActionTypes } from "../constants/actionTypes";

const intialState = {
  homes: [],
  homeDetail: {},
  detailImages: [],
  savedHomes: [],
  search: "",
  filters: {
    houseType: "Any",
    serviceType: "Any",
    subcity: "Any",
    minPrice: "Any",
    maxPrice: "Any",
    bedrooms: "Any",
    bathrooms: "Any",
    minArea: "Any",
    maxArea: "Any",
    furnishingType: "Any",
  },
};

export const homesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HOMES:
      return { ...state, homes: payload };
    case ActionTypes.SET_SAVED_HOMES:
      return { ...state, savedHomes: payload };
    case ActionTypes.SET_SEARCH:
      return { ...state, search: payload };

    case ActionTypes.SET_DETAIL_HOME:
      return { ...state, homeDetail: payload };

    case ActionTypes.SET_DETAIL_IMEGES:
      return { ...state, detailImages: payload };

    case ActionTypes.REMOVE_SAVED_HOME:
      const homeId = payload;
      const newSavedHome = state.savedHomes.filter(
        (filtered) => filtered.id !== homeId
      );
      return {
        ...state,
        savedHomes: newSavedHome,
      };

    case ActionTypes.SET_FILTER:
      return { ...state, filters: payload };
    case ActionTypes.SET_HOUSE_TYPE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          houseType: payload,
        },
      };
    case ActionTypes.SET_SERVICE_TYPE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          serviceType: payload,
        },
      };
    case ActionTypes.SET_SUBCITY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          subcity: payload,
        },
      };
    case ActionTypes.SET_MIN_PRICE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          minPrice: payload,
        },
      };
    case ActionTypes.SET_MAX_PRICE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          maxPrice: payload,
        },
      };
    case ActionTypes.SET_BEDROOMS_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          bedrooms: payload,
        },
      };
    case ActionTypes.SET_BATHROOMS_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          bathrooms: payload,
        },
      };
    case ActionTypes.SET_MIN_AREA_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          minArea: payload,
        },
      };
    case ActionTypes.SET_MAX_AREA_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          maxArea: payload,
        },
      };
    case ActionTypes.SET_FURNISHING_TYPE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          furnishingType: payload,
        },
      };

    default:
      return state;
  }
};
