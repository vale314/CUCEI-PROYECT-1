import { data } from "../../components/data/data";
import { TOGGLE_FAVORITE, SET_FILTERS, RESET_FILTERS } from "../actions/foods";

const initialState = {
  meals: data,
  filters: [],
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilter = action.filter;

      const found = state.filters.findIndex(
        (e) => e.title === appliedFilter.title
      );

      if (found >= 0) {
        const filters = [...state.filters];
        filters.splice(found, 1);

        return { ...state, filters };
      } else {
        return { ...state, filters: state.filters.concat(appliedFilter) };
      }
    case RESET_FILTERS:
      return { ...state, filters: initialState.filters };
    default:
      return state;
  }
};

export default mealsReducer;
