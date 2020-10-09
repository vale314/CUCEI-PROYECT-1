import { data } from "../../components/data/data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

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
      const found = favoriteMeals.find((e) => (e = appliedFilter));
      var filters = [...state.filters];

      if (found) {
        filters.push(appliedFilter);

        return { ...state, filters };
      } else {
        let index = filters.indexOf(appliedFilter);
        appliedFilter.splice(index, 1);

        return { ...state, filters };
      }
    default:
      return state;
  }
};

export default mealsReducer;
