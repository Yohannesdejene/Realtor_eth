import { ActionTypes } from "../constants/actionTypes";

export const setHomes = (homes) => {
  return {
    type: ActionTypes.SET_HOMES,
    payload: homes,
  };
};

export const setSavedHomes = (homes) => {
  return {
    type: ActionTypes.SET_SAVED_HOMES,
    payload: homes,
  };
};
export const removeSavedHome = (homeId) => {
  return {
    type: ActionTypes.REMOVE_SAVED_HOME,
    payload: homeId,
  };
};
export const seleteDeleteHome = (homes) => {
  return {
    type: ActionTypes.DELETE_SAVED_HOME,
    payload: homes,
  };
};

export const setSearch = (data) => {
  return {
    type: ActionTypes.SET_SEARCH,
    payload: data,
  };
};

export const setFilter = (data) => {
  return {
    type: ActionTypes.SET_FILTER,
    payload: data,
  };
};

// action creators
export const setHouseTypeFilter = (houseType) => ({
  type: ActionTypes.SET_HOUSE_TYPE_FILTER,
  payload: houseType,
});

export const setSubcityFilter = (subcity) => ({
  type: ActionTypes.SET_SUBCITY_FILTER,
  payload: subcity,
});

export const setServiceTypeFilter = (serviceType) => ({
  type: ActionTypes.SET_SERVICE_TYPE_FILTER,
  payload: serviceType,
});

export const setMinPriceFilter = (minPrice) => ({
  type: ActionTypes.SET_MIN_PRICE_FILTER,
  payload: minPrice,
});

export const setMaxPriceFilter = (maxPrice) => ({
  type: ActionTypes.SET_MAX_PRICE_FILTER,
  payload: maxPrice,
});

export const setBedroomsFilter = (bedrooms) => ({
  type: ActionTypes.SET_BEDROOMS_FILTER,
  payload: bedrooms,
});

export const setBathroomsFilter = (bathrooms) => ({
  type: ActionTypes.SET_BATHROOMS_FILTER,
  payload: bathrooms,
});

export const setMinAreaFilter = (minArea) => ({
  type: ActionTypes.SET_MIN_AREA_FILTER,
  payload: minArea,
});

export const setMaxAreaFilter = (maxArea) => ({
  type: ActionTypes.SET_MAX_AREA_FILTER,
  payload: maxArea,
});

export const setFurnishingTypeFilter = (furnishingType) => ({
  type: ActionTypes.SET_FURNISHING_TYPE_FILTER,
  payload: furnishingType,
});
export const setDetailHome = (home) => ({
  type: ActionTypes.SET_DETAIL_HOME,
  payload: home,
});
export const setDetailImages = (home) => ({
  type: ActionTypes.SET_DETAIL_IMEGES,
  payload: home,
});
