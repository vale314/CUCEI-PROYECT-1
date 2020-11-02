import { registerRootComponent } from "expo";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";
export const RESET_FILTERS = "RESET_FILTERS";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = (filterSettings) => {
  return { type: SET_FILTERS, filter: filterSettings };
};

export const setFiltersReset = (filterSettings) => {
  return { type: RESET_FILTERS };
};
